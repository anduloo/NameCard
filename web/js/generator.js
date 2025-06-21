// 姓名卡片生成代码

// 修改生成姓名卡片函数，添加对竖排模式图片处理的支持
window.generateFixedNameCards = function() {
    // 获取数据
    if (!window.excelData || window.excelData.length === 0) {
        console.warn('没有数据可用，请先上传Excel文件');
        return;
    }
    
    // 获取全局圆角
    const globalBorderRadius = parseInt(document.getElementById('globalBorderRadius')?.value) || 0;
    
    // 获取列选择器的值
    const colNumberSelector = document.getElementById('colNumber');
    const colNameSelector = document.getElementById('colName');
    const colUnitSelector = document.getElementById('colUnit');
    
    if (!colNumberSelector || !colNameSelector || !colUnitSelector) {
        console.error('无法找到列选择器');
        return;
    }
    
    const colNumberIdx = colNumberSelector.value ? parseInt(colNumberSelector.value) : -1;
    const colNameIdx = colNameSelector.value ? parseInt(colNameSelector.value) : -1;
    const colUnitIdx = colUnitSelector.value ? parseInt(colUnitSelector.value) : -1;
    
    // 检查是否至少选择了一列
    if (colNumberIdx === -1 && colNameIdx === -1 && colUnitIdx === -1) {
        console.warn('请至少选择一列数据');
        alert('请至少选择一列数据');
        return;
    }
    
    // 获取样式设置
    // 文本样式
    const numberFontFamily = document.getElementById('numberFontFamily').value;
    const numberFontSize = parseInt(document.getElementById('numberFontSize').value);
    const numberTextColor = getPickrColor('numberTextPicker');
    
    const nameFontFamily = document.getElementById('nameFontFamily').value;
    const nameFontSize = parseInt(document.getElementById('nameFontSize').value);
    const nameTextColor = getPickrColor('nameTextPicker');
    
    const unitFontFamily = document.getElementById('unitFontFamily').value;
    const unitFontSize = parseInt(document.getElementById('unitFontSize').value);
    const unitTextColor = getPickrColor('unitTextPicker');
    
    // Border configurations (styles are in styleConfig, color/width from inputs)
    const globalBorderConfig = window.styleConfig.globalBorder;
    const globalBorderColor = getPickrColor('globalBorderPicker');
    const globalBorderWidth = parseInt(document.getElementById('globalBorderWidth').value);
    
    const numberBorderConfig = window.styleConfig.numberBorder;
    const numberBorderColor = getPickrColor('numberBorderPicker');
    const numberBorderWidth = parseInt(document.getElementById('numberBorderWidth').value);
    
    const nameBorderConfig = window.styleConfig.nameBorder;
    const nameBorderColor = getPickrColor('nameBorderPicker');
    const nameBorderWidth = parseInt(document.getElementById('nameBorderWidth').value);
    
    const unitBorderConfig = window.styleConfig.unitBorder;
    const unitBorderColor = getPickrColor('unitBorderPicker');
    const unitBorderWidth = parseInt(document.getElementById('unitBorderWidth').value);
    
    // 背景颜色 - 使用颜色选择器
    const globalBgColor = getPickrColor('globalBgPicker');
    const numberBgColor = getPickrColor('numberBgPicker');
    const nameBgColor = getPickrColor('nameBgPicker');
    const unitBgColor = getPickrColor('unitBgPicker');
    
    // 渐变背景
    const globalGradient = document.getElementById('globalGradient').value;
    const numberGradient = document.getElementById('numberGradient').value;
    const nameGradient = document.getElementById('nameGradient').value;
    const unitGradient = document.getElementById('unitGradient').value;
    
    // 其他设置
    const lineGap = parseInt(document.getElementById('lineGap').value) || 0;
    const textAlign = window.styleConfig.textAlign || 'left';
    const isVertical = window.styleConfig.textDirection === 'vertical';
    const columnOrder = window.styleConfig.columnOrder || 'ltr'; // 获取列顺序设置
    const verticalAlign = window.styleConfig.verticalAlign || 'middle'; // Get vertical alignment setting
    
    // 文字效果设置 (per column)
    // Column 1 (Number)
    const numberStrokeColor = getPickrColor('numberStrokePicker');
    const numberStrokeWidth = parseFloat(document.getElementById('numberStrokeWidth').value) || 0;
    const numberShadowColor = getPickrColor('numberShadowPicker');
    const numberShadowX = parseInt(document.getElementById('numberShadowX').value) || 0;
    const numberShadowY = parseInt(document.getElementById('numberShadowY').value) || 0;
    const numberShadowBlur = parseInt(document.getElementById('numberShadowBlur').value) || 0;

    // Column 2 (Name)
    const nameStrokeColor = getPickrColor('nameStrokePicker');
    const nameStrokeWidth = parseFloat(document.getElementById('nameStrokeWidth').value) || 0;
    const nameShadowColor = getPickrColor('nameShadowPicker');
    const nameShadowX = parseInt(document.getElementById('nameShadowX').value) || 0;
    const nameShadowY = parseInt(document.getElementById('nameShadowY').value) || 0;
    const nameShadowBlur = parseInt(document.getElementById('nameShadowBlur').value) || 0;

    // Column 3 (Unit)
    const unitStrokeColor = getPickrColor('unitStrokePicker');
    const unitStrokeWidth = parseFloat(document.getElementById('unitStrokeWidth').value) || 0;
    const unitShadowColor = getPickrColor('unitShadowPicker');
    const unitShadowX = parseInt(document.getElementById('unitShadowX').value) || 0;
    const unitShadowY = parseInt(document.getElementById('unitShadowY').value) || 0;
    const unitShadowBlur = parseInt(document.getElementById('unitShadowBlur').value) || 0;
    
    // 获取形状设置
    // 第一列（号码）的形状设置
    const numberBorderRadius = parseInt(document.getElementById('numberBorderRadius').value) || 0;
    const numberSkewAngle = parseInt(document.getElementById('numberSkewAngle').value) || 0;
    const numberBorderGradient = document.getElementById('numberBorderGradient').value;
    const numberBorderGradientStartColor = getPickrColor('numberBorderGradientStartPicker');
    const numberBorderGradientEndColor = getPickrColor('numberBorderGradientEndPicker');
    
    // 第二列（姓名）的形状设置
    const nameBorderRadius = parseInt(document.getElementById('nameBorderRadius').value) || 0;
    const nameSkewAngle = parseInt(document.getElementById('nameSkewAngle').value) || 0;
    const nameBorderGradient = document.getElementById('nameBorderGradient').value;
    const nameBorderGradientStartColor = getPickrColor('nameBorderGradientStartPicker');
    const nameBorderGradientEndColor = getPickrColor('nameBorderGradientEndPicker');
    
    // 第三列（单位）的形状设置
    const unitBorderRadius = parseInt(document.getElementById('unitBorderRadius').value) || 0;
    const unitSkewAngle = parseInt(document.getElementById('unitSkewAngle').value) || 0;
    const unitBorderGradient = document.getElementById('unitBorderGradient').value;
    const unitBorderGradientStartColor = getPickrColor('unitBorderGradientStartPicker');
    const unitBorderGradientEndColor = getPickrColor('unitBorderGradientEndPicker');
    
    // 清除容器
    const container = document.getElementById('container');
    container.innerHTML = '';
    
    // 生成SVG姓名卡片
    for (let i = 1; i < window.excelData.length; i++) {
        const row = window.excelData[i];
        if (!row || row.every(cell => !cell)) continue;
        const number = colNumberIdx >= 0 && colNumberIdx < row.length ? (row[colNumberIdx] || '') : '';
        const name = colNameIdx >= 0 && colNameIdx < row.length ? (row[colNameIdx] || '') : '';
        const unit = colUnitIdx >= 0 && colUnitIdx < row.length ? (row[colUnitIdx] || '') : '';
        if (!number && !name && !unit) continue;
        // SVG尺寸和布局参数
        const cardWidth = isVertical ? 180 : 360;
        const cardHeight = isVertical ? 360 : 120;
        const padding = 16;
        // 列内容和样式
        let columns = [];
        if (columnOrder === 'rtl' && isVertical) {
            if (unit) columns.push({text: unit, type: 'unit', ...getColStyle('unit')});
            if (name) columns.push({text: name, type: 'name', ...getColStyle('name')});
            if (number) columns.push({text: number, type: 'number', ...getColStyle('number')});
        } else {
            if (number) columns.push({text: number, type: 'number', ...getColStyle('number')});
            if (name) columns.push({text: name, type: 'name', ...getColStyle('name')});
            if (unit) columns.push({text: unit, type: 'unit', ...getColStyle('unit')});
        }
        // 读取层级参数
        const zMap = {
            number: parseInt(document.getElementById('numberZ').value) || 1,
            name: parseInt(document.getElementById('nameZ').value) || 2,
            unit: parseInt(document.getElementById('unitZ').value) || 3
        };
        // 按层级排序
        columns.sort((a, b) => zMap[a.type] - zMap[b.type]);
        // 计算每列宽度
        const colCount = columns.length;
        const colGap = lineGap;
        let baseColWidth = isVertical ? ((cardWidth - padding * 2 - colGap * (colCount - 1)) / colCount) : (cardWidth - padding * 2);
        let baseColHeight = isVertical ? (cardHeight - padding * 2) : ((cardHeight - padding * 2 - colGap * (colCount - 1)) / colCount);

        // 1. 预计算所有列的实际包围盒
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        let colRects = [];
        for (let c = 0; c < columns.length; c++) {
            const col = columns[c];
            // 计算最大字号
            let maxFontSize = col.size;
            if (col.tspans && Array.isArray(col.tspans)) {
                maxFontSize = Math.max(...col.tspans.map(t => t.size || col.size));
            }
            const autoPadding = Math.round(maxFontSize * 0.4);
            let w, h, x, y;
            if (isVertical) {
                w = maxFontSize + autoPadding * 2;
                h = baseColHeight;
                x = padding + c * (baseColWidth + colGap) + col.offsetX;
                y = padding + col.offsetY;
            } else {
                w = baseColWidth * (col.length / 100);
                h = maxFontSize + autoPadding * 2;
                x = padding + col.offsetX;
                y = padding + c * (baseColHeight + colGap) + col.offsetY;
            }
            colRects.push({x, y, w, h, c, col, maxFontSize, autoPadding});
            minX = Math.min(minX, x);
            minY = Math.min(minY, y);
            maxX = Math.max(maxX, x + w);
            maxY = Math.max(maxY, y + h);
        }
        // 2. 画布自适应内容
        const svgNS = 'http://www.w3.org/2000/svg';
        const svg = document.createElementNS(svgNS, 'svg');
        svg.setAttribute('width', maxX - minX);
        svg.setAttribute('height', maxY - minY);
        svg.setAttribute('viewBox', `${minX} ${minY} ${maxX - minX} ${maxY - minY}`);
        svg.classList.add('svg-name-card');
        svg.style.display = 'block';
        svg.style.margin = '10px auto';
        
        // <defs> 渐变、阴影、描边等
        const defs = document.createElementNS(svgNS, 'defs');
        
        // 全局渐变
        let globalBgFill = globalBgColor;
        if (globalGradient && globalGradient !== 'none') {
            const gradId = `global-bg-gradient-${i}`;
            defs.appendChild(createSVGGradient(svgNS, gradId, globalGradient));
            globalBgFill = `url(#${gradId})`;
        }
        
        svg.appendChild(defs);
        
        // 全局背景
        const bgRect = document.createElementNS(svgNS, 'rect');
        bgRect.setAttribute('x', 0);
        bgRect.setAttribute('y', 0);
        bgRect.setAttribute('width', maxX - minX);
        bgRect.setAttribute('height', maxY - minY);
        bgRect.setAttribute('fill', globalBgFill);
        
        // 应用全局边框设置
        if (globalBorderConfig) {
            if (globalBorderConfig.style === 'all') {
                bgRect.setAttribute('stroke', globalBorderColor);
                bgRect.setAttribute('stroke-width', globalBorderWidth);
                if (globalBorderRadius > 0) {
                    bgRect.setAttribute('rx', globalBorderRadius);
                    bgRect.setAttribute('ry', globalBorderRadius);
                }
            } else if (globalBorderConfig.style === 'custom') {
                // 为每个边添加单独的边框线
                if (globalBorderConfig.top) {
                    const topBorder = document.createElementNS(svgNS, 'line');
                    topBorder.setAttribute('x1', 0);
                    topBorder.setAttribute('y1', 0);
                    topBorder.setAttribute('x2', maxX - minX);
                    topBorder.setAttribute('y2', 0);
                    topBorder.setAttribute('stroke', globalBorderColor);
                    topBorder.setAttribute('stroke-width', globalBorderWidth);
                    svg.appendChild(topBorder);
                }
                if (globalBorderConfig.bottom) {
                    const bottomBorder = document.createElementNS(svgNS, 'line');
                    bottomBorder.setAttribute('x1', 0);
                    bottomBorder.setAttribute('y1', maxY - minY);
                    bottomBorder.setAttribute('x2', maxX - minX);
                    bottomBorder.setAttribute('y2', maxY - minY);
                    bottomBorder.setAttribute('stroke', globalBorderColor);
                    bottomBorder.setAttribute('stroke-width', globalBorderWidth);
                    svg.appendChild(bottomBorder);
                }
                if (globalBorderConfig.left) {
                    const leftBorder = document.createElementNS(svgNS, 'line');
                    leftBorder.setAttribute('x1', 0);
                    leftBorder.setAttribute('y1', 0);
                    leftBorder.setAttribute('x2', 0);
                    leftBorder.setAttribute('y2', maxY - minY);
                    leftBorder.setAttribute('stroke', globalBorderColor);
                    leftBorder.setAttribute('stroke-width', globalBorderWidth);
                    svg.appendChild(leftBorder);
                }
                if (globalBorderConfig.right) {
                    const rightBorder = document.createElementNS(svgNS, 'line');
                    rightBorder.setAttribute('x1', maxX - minX);
                    rightBorder.setAttribute('y1', 0);
                    rightBorder.setAttribute('x2', maxX - minX);
                    rightBorder.setAttribute('y2', maxY - minY);
                    rightBorder.setAttribute('stroke', globalBorderColor);
                    rightBorder.setAttribute('stroke-width', globalBorderWidth);
                    svg.appendChild(rightBorder);
                }
            }
        }
        
        svg.appendChild(bgRect);
        
        // 绘制每一列
        for (let c = 0; c < columns.length; c++) {
            const col = columns[c];
            let x, y, w, h, textX, textY;
            let transform = '';
            
            // 计算每列最大字号
            let maxFontSize = col.size;
            if (col.tspans && Array.isArray(col.tspans)) {
                maxFontSize = Math.max(...col.tspans.map(t => t.size || col.size));
            }
            // 设定自适应padding
            const autoPadding = Math.round(maxFontSize * 0.4);
            // 应用长度和位置参数
            if (isVertical) {
                w = maxFontSize + autoPadding * 2;
                h = baseColHeight;
                x = padding + c * (baseColWidth + colGap) + col.offsetX;
                y = padding + col.offsetY;
                textX = x + w / 2;
                textY = y + h / 2;
            } else {
                w = baseColWidth * (col.length / 100);
                h = maxFontSize + autoPadding * 2;
                x = padding + col.offsetX;
                y = padding + c * (baseColHeight + colGap) + col.offsetY;
                textX = x + w / 2;
                textY = y + h / 2;
            }
            
            if (col.skewAngle) {
                const cx = x + w / 2;
                const cy = y + h / 2;
                transform = isVertical ? 
                    `translate(${cx},${cy}) skewY(${col.skewAngle}) translate(${-cx},${-cy})` :
                    `translate(${cx},${cy}) skewX(${col.skewAngle}) translate(${-cx},${-cy})`;
            }
            
            // 列渐变
            let colFill = col.bg;
            if (col.gradient && col.gradient !== 'none') {
                const gradId = `col-gradient-${i}-${c}`;
                defs.appendChild(createSVGGradient(svgNS, gradId, col.gradient));
                colFill = `url(#${gradId})`;
            }
            
            // 列阴影
            let filterId = '';
            if (col.shadowBlur > 0 || col.shadowX !== 0 || col.shadowY !== 0) {
                filterId = `shadow-${i}-${c}`;
                defs.appendChild(createSVGShadow(svgNS, filterId, col.shadowColor, col.shadowX, col.shadowY, col.shadowBlur));
            }
            
            // 列边框渐变
            let colStroke = col.borderColor;
            if (col.borderGradient && col.borderGradient !== 'none') {
                const gradId = `col-border-gradient-${i}-${c}`;
                defs.appendChild(createSVGGradient(svgNS, gradId, col.borderGradient));
                colStroke = `url(#${gradId})`;
            }
            
            // 列圆角
            let rx = col.borderRadius || 0;
            
            // 列组
            let group = document.createElementNS(svgNS, 'g');
            if (transform) group.setAttribute('transform', transform);
            
            // 列背景和边框
            const colRect = document.createElementNS(svgNS, 'rect');
            colRect.setAttribute('x', x);
            colRect.setAttribute('y', y);
            colRect.setAttribute('width', w);
            colRect.setAttribute('height', h);
            colRect.setAttribute('fill', colFill);
            colRect.setAttribute('rx', rx);
            colRect.setAttribute('ry', rx);
            
            // 列边框处理
            if (col.borderStyle && col.borderStyle !== 'none') {
                if (col.borderStyle === 'all') {
                    colRect.setAttribute('stroke', colStroke);
                    colRect.setAttribute('stroke-width', col.borderWidth);
                } else {
                    // 单边边框，分别绘制line
                    if (col.borderStyle === 'top' || col.borderStyle === 'custom' && col.borderTop) {
                        const topLine = document.createElementNS(svgNS, 'line');
                        topLine.setAttribute('x1', x);
                        topLine.setAttribute('y1', y);
                        topLine.setAttribute('x2', x + w);
                        topLine.setAttribute('y2', y);
                        topLine.setAttribute('stroke', colStroke);
                        topLine.setAttribute('stroke-width', col.borderWidth);
                        group.appendChild(topLine);
                    }
                    if (col.borderStyle === 'bottom' || col.borderStyle === 'custom' && col.borderBottom) {
                        const bottomLine = document.createElementNS(svgNS, 'line');
                        bottomLine.setAttribute('x1', x);
                        bottomLine.setAttribute('y1', y + h);
                        bottomLine.setAttribute('x2', x + w);
                        bottomLine.setAttribute('y2', y + h);
                        bottomLine.setAttribute('stroke', colStroke);
                        bottomLine.setAttribute('stroke-width', col.borderWidth);
                        group.appendChild(bottomLine);
                    }
                    if (col.borderStyle === 'left' || col.borderStyle === 'custom' && col.borderLeft) {
                        const leftLine = document.createElementNS(svgNS, 'line');
                        leftLine.setAttribute('x1', x);
                        leftLine.setAttribute('y1', y);
                        leftLine.setAttribute('x2', x);
                        leftLine.setAttribute('y2', y + h);
                        leftLine.setAttribute('stroke', colStroke);
                        leftLine.setAttribute('stroke-width', col.borderWidth);
                        group.appendChild(leftLine);
                    }
                    if (col.borderStyle === 'right' || col.borderStyle === 'custom' && col.borderRight) {
                        const rightLine = document.createElementNS(svgNS, 'line');
                        rightLine.setAttribute('x1', x + w);
                        rightLine.setAttribute('y1', y);
                        rightLine.setAttribute('x2', x + w);
                        rightLine.setAttribute('y2', y + h);
                        rightLine.setAttribute('stroke', colStroke);
                        rightLine.setAttribute('stroke-width', col.borderWidth);
                        group.appendChild(rightLine);
                    }
                }
            }
            
            if (filterId) colRect.setAttribute('filter', `url(#${filterId})`);
            group.appendChild(colRect);
            
            // 文字阴影/描边
            let textFilterId = '';
            if (col.shadowBlur > 0 || col.shadowX !== 0 || col.shadowY !== 0) {
                textFilterId = `text-shadow-${i}-${c}`;
                defs.appendChild(createSVGShadow(svgNS, textFilterId, col.shadowColor, col.shadowX, col.shadowY, col.shadowBlur));
            }
            
            // 文字垂直居中优化
            // 计算字体实际高度，微调y坐标
            let textYFinal = textY;
            if (!isVertical) {
                // 横排模式下，微调y使文字视觉上更居中
                textYFinal = y + h / 2 + (col.size * 0.35);
            }
            
            // 文字
            const text = document.createElementNS(svgNS, 'text');
            text.setAttribute('x', textX);
            text.setAttribute('y', textYFinal);
            text.setAttribute('fill', col.color);
            text.setAttribute('font-family', col.font);
            text.setAttribute('font-size', col.size);
            text.setAttribute('font-weight', col.fontWeight || 'normal');
            text.setAttribute('font-style', col.fontStyle || 'normal');
            text.setAttribute('text-decoration', col.textDecoration || 'none');
            
            // 应用全局文字对齐方式
            switch(textAlign) {
                case 'left':
                    text.setAttribute('text-anchor', 'start');
                    text.setAttribute('x', x + padding);
                    break;
                case 'right':
                    text.setAttribute('text-anchor', 'end');
                    text.setAttribute('x', x + w - padding);
                    break;
                default: // center
                    text.setAttribute('text-anchor', 'middle');
                    text.setAttribute('x', textX);
            }
            
            text.setAttribute('dominant-baseline', 'middle');
            
            if (col.strokeWidth > 0) {
                text.setAttribute('stroke', col.strokeColor || col.color);
                text.setAttribute('stroke-width', col.strokeWidth);
            }
            
            if (textFilterId) text.setAttribute('filter', `url(#${textFilterId})`);
            text.textContent = col.text;
            group.appendChild(text);
            svg.appendChild(group);
        }
        // 右键导出
        svg.oncontextmenu = (e) => {
            e.preventDefault();
            setTimeout(() => {
                saveAsImage(svg, name || '未命名');
            }, 50);
        };
        container.appendChild(svg);
    }
    
    // 添加完所有元素后处理竖排模式下的图片
    if (isVertical) {
        // 延迟执行，确保所有内容都已渲染
        setTimeout(() => {
            processVerticalModeImages();
            equalizeColumnHeights(); // 确保列高度自适应
            
            // 再次确保列排序正确应用
            const cards = document.querySelectorAll('.vertical-mode');
            cards.forEach(card => {
                if (columnOrder === 'rtl') {
                    card.style.flexDirection = 'row-reverse';
                } else {
                    card.style.flexDirection = 'row';
                }
                card.setAttribute('data-column-order', columnOrder);
            });
        }, 100); // 增加延迟时间确保DOM完全渲染
    }
};

// 辅助函数：获取列样式参数
function getColStyle(type) {
    return {
        bg: getPickrColor(type + 'BgPicker'),
        gradient: document.getElementById(type + 'Gradient').value,
        borderStyle: window.styleConfig[type + 'Border']?.style || 'none',
        borderColor: getPickrColor(type + 'BorderPicker'),
        borderWidth: parseInt(document.getElementById(type + 'BorderWidth').value) || 0,
        borderRadius: parseInt(document.getElementById(type + 'BorderRadius').value) || 0,
        borderGradient: document.getElementById(type + 'BorderGradient').value,
        color: getPickrColor(type + 'TextPicker'),
        font: document.getElementById(type + 'FontFamily').value,
        size: parseInt(document.getElementById(type + 'FontSize').value),
        fontWeight: document.getElementById(type + 'BoldBtn').classList.contains('active') ? 'bold' : 'normal',
        fontStyle: document.getElementById(type + 'ItalicBtn').classList.contains('active') ? 'italic' : 'normal',
        textDecoration: document.getElementById(type + 'UnderlineBtn').classList.contains('active') ? 'underline' : 'none',
        strokeColor: getPickrColor(type + 'StrokePicker'),
        strokeWidth: parseFloat(document.getElementById(type + 'StrokeWidth').value) || 0,
        shadowColor: getPickrColor(type + 'ShadowPicker'),
        shadowX: parseInt(document.getElementById(type + 'ShadowX').value) || 0,
        shadowY: parseInt(document.getElementById(type + 'ShadowY').value) || 0,
        shadowBlur: parseInt(document.getElementById(type + 'ShadowBlur').value) || 0,
        skewAngle: parseInt(document.getElementById(type + 'SkewAngle').value) || 0,
        // 新增的长度和位置参数
        length: parseInt(document.getElementById(type + 'Length').value) || 100,
        offsetX: parseInt(document.getElementById(type + 'OffsetX').value) || 0,
        offsetY: parseInt(document.getElementById(type + 'OffsetY').value) || 0
    };
}

// 辅助函数：生成SVG渐变
function createSVGGradient(svgNS, id, type) {
    const grad = document.createElementNS(svgNS, 'linearGradient');
    grad.setAttribute('id', id);
    // 默认方向
    let x1 = '0%', y1 = '0%', x2 = '100%', y2 = '0%';
    let stops = [];
    switch (type) {
        case 'tech-blue':
            stops = [
                { offset: '0%', color: '#2193b0' },
                { offset: '100%', color: '#6dd5ed' }
            ];
            break;
        case 'vibrant-orange':
            stops = [
                { offset: '0%', color: '#ff9800' },
                { offset: '100%', color: '#ffcc80' }
            ];
            break;
        case 'dream-purple':
            stops = [
                { offset: '0%', color: '#a18cd1' },
                { offset: '100%', color: '#fbc2eb' }
            ];
            break;
        case 'nature-green':
            stops = [
                { offset: '0%', color: '#56ab2f' },
                { offset: '100%', color: '#a8e063' }
            ];
            break;
        case 'glass-effect':
            stops = [
                { offset: '0%', color: '#e0eafc' },
                { offset: '100%', color: '#cfdef3' }
            ];
            break;
        case 'dynamic-flow':
            stops = [
                { offset: '0%', color: '#43cea2' },
                { offset: '100%', color: '#185a9d' }
            ];
            break;
        case 'retro-film':
            stops = [
                { offset: '0%', color: '#e96443' },
                { offset: '100%', color: '#904e95' }
            ];
            break;
        case 'neon-effect':
            stops = [
                { offset: '0%', color: '#fc00ff' },
                { offset: '100%', color: '#00dbde' }
            ];
            break;
        case 'horizontal':
            x1 = '0%'; y1 = '0%'; x2 = '100%'; y2 = '0%';
            stops = [
                { offset: '0%', color: '#ff9800' },
                { offset: '100%', color: '#ffcc80' }
            ];
            break;
        case 'vertical':
            x1 = '0%'; y1 = '0%'; x2 = '0%'; y2 = '100%';
            stops = [
                { offset: '0%', color: '#ff9800' },
                { offset: '100%', color: '#ffcc80' }
            ];
            break;
        case 'diagonal':
            x1 = '0%'; y1 = '0%'; x2 = '100%'; y2 = '100%';
            stops = [
                { offset: '0%', color: '#ff9800' },
                { offset: '100%', color: '#ffcc80' }
            ];
            break;
        default:
            // 默认橙色横向渐变
            stops = [
                { offset: '0%', color: '#ff9800' },
                { offset: '100%', color: '#ffcc80' }
            ];
    }
    grad.setAttribute('x1', x1);
    grad.setAttribute('y1', y1);
    grad.setAttribute('x2', x2);
    grad.setAttribute('y2', y2);
    stops.forEach(stop => {
        const stopElem = document.createElementNS(svgNS, 'stop');
        stopElem.setAttribute('offset', stop.offset);
        stopElem.setAttribute('stop-color', stop.color);
        grad.appendChild(stopElem);
    });
    return grad;
}

// 辅助函数：生成SVG阴影
function createSVGShadow(svgNS, id, color, dx, dy, blur) {
    const filter = document.createElementNS(svgNS, 'filter');
    filter.setAttribute('id', id);
    filter.innerHTML = `<feDropShadow dx="${dx}" dy="${dy}" stdDeviation="${blur}" flood-color="${color}" flood-opacity="1"/>`;
    return filter;
}

// 创建边框渐变样式
function applyBorderGradient(element, gradientType, startColor, endColor, borderConfig, borderWidth) {
    // 如果不需要渐变，使用普通边框
    if (gradientType === 'none' || !borderConfig) {
        return;
    }
    
    // 确保已重置原始边框样式
    element.style.border = 'none';
    
    // 创建渐变
    let gradientDirection = 'to right'; // 水平渐变
    if (gradientType === 'vertical') {
        gradientDirection = 'to bottom'; // 垂直渐变
    } else if (gradientType === 'diagonal') {
        gradientDirection = 'to bottom right'; // 对角渐变
    }
    
    const gradientBorder = `linear-gradient(${gradientDirection}, ${startColor}, ${endColor})`;
    
    // 根据边框配置应用渐变边框
    if (borderConfig.style === 'all') {
        // 为所有边应用渐变
        element.style.borderWidth = `${borderWidth}px`;
        element.style.borderStyle = 'solid';
        element.style.borderImageSource = gradientBorder;
        element.style.borderImageSlice = '1';
    } else if (borderConfig.style === 'custom') {
        // 如果是自定义边框，需要分别处理每条边
        // 由于CSS限制，这种情况下我们创建伪元素来实现独立边的渐变
        element.style.position = 'relative';
        
        // 移除之前可能存在的伪元素
        const prevBorderStyleId = element.getAttribute('data-border-style-id');
        if (prevBorderStyleId) {
            const prevStyle = document.getElementById(prevBorderStyleId);
            if (prevStyle) {
                prevStyle.remove();
            }
        }
        
        // 创建唯一ID
        const styleId = `border-style-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
        element.setAttribute('data-border-style-id', styleId);
        
        // 创建样式元素
        const styleElem = document.createElement('style');
        styleElem.id = styleId;
        
        let css = '';
        const selector = `[data-border-style-id="${styleId}"]`;
        
        // 为每条所需的边添加伪元素
        if (borderConfig.top) {
            css += `
                ${selector}::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: ${borderWidth}px;
                    background: ${gradientBorder};
                    z-index: 1;
                }
            `;
        }
        
        if (borderConfig.bottom) {
            css += `
                ${selector}::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: ${borderWidth}px;
                    background: ${gradientBorder};
                    z-index: 1;
                }
            `;
        }
        
        // 左右边框需要单独处理，因为只有两个伪元素可用
        // 这里我们创建内部元素来模拟
        if (borderConfig.left || borderConfig.right) {
            const leftBorder = document.createElement('div');
            leftBorder.className = 'gradient-left-border';
            leftBorder.style.position = 'absolute';
            leftBorder.style.top = '0';
            leftBorder.style.bottom = '0';
            leftBorder.style.left = '0';
            leftBorder.style.width = `${borderWidth}px`;
            leftBorder.style.background = gradientBorder;
            leftBorder.style.zIndex = '1';
            leftBorder.style.pointerEvents = 'none';
            
            const rightBorder = document.createElement('div');
            rightBorder.className = 'gradient-right-border';
            rightBorder.style.position = 'absolute';
            rightBorder.style.top = '0';
            rightBorder.style.bottom = '0';
            rightBorder.style.right = '0';
            rightBorder.style.width = `${borderWidth}px`;
            rightBorder.style.background = gradientBorder;
            rightBorder.style.zIndex = '1';
            rightBorder.style.pointerEvents = 'none';
            
            // 仅添加需要的边框
            if (borderConfig.left) {
                element.appendChild(leftBorder);
            }
            
            if (borderConfig.right) {
                element.appendChild(rightBorder);
            }
        }
        
        // 添加样式到文档
        if (css) {
            styleElem.textContent = css;
            document.head.appendChild(styleElem);
        }
    }
}

// 横排模式：三行（从上到下）
if (!isVertical) {
    card.classList.remove('vertical-mode');
    card.classList.add('horizontal-mode');
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.height = 'auto';
    card.style.rowGap = `${lineGap}px`;
    card.style.padding = '5px';
} else {
    // 竖排模式：三列（从左到右）
    card.classList.add('vertical-mode');
    card.classList.remove('horizontal-mode');
    card.style.display = 'flex';
    card.style.flexDirection = columnOrder === 'rtl' ? 'row-reverse' : 'row';
    card.style.height = 'auto';
    card.style.columnGap = `${lineGap}px`;
    card.style.padding = '5px';
} 