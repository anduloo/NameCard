// 姓名卡片生成代码

// 修改生成姓名卡片函数，添加对竖排模式图片处理的支持
window.generateFixedNameCards = function() {
    // 获取数据
    if (!window.excelData || window.excelData.length === 0) {
        console.warn('没有数据可用，请先上传Excel文件');
        return;
    }
    
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
    
    // 生成姓名卡片
    for (let i = 1; i < window.excelData.length; i++) {
        const row = window.excelData[i];
        if (!row || row.every(cell => !cell)) continue; // 跳过空行
        
        // 获取单元格值并确保UTF-8编码正确
        const number = colNumberIdx >= 0 && colNumberIdx < row.length ? (row[colNumberIdx] || '') : '';
        const name = colNameIdx >= 0 && colNameIdx < row.length ? (row[colNameIdx] || '') : '';
        const unit = colUnitIdx >= 0 && colUnitIdx < row.length ? (row[colUnitIdx] || '') : '';
        
        // 跳过数据全为空的行
        if (!number && !name && !unit) continue;
        
        // 创建姓名卡片
        const card = document.createElement('div');
        card.className = 'name-card';
        card.style.backgroundColor = globalBgColor;
        card.style.margin = '10px 0';
        card.style.position = 'relative';
        card.style.overflow = 'hidden';
        
        // 应用全局边框
        applyBorderStyle(card, globalBorderConfig, globalBorderColor, globalBorderWidth);
        
        // 竖排/横排模式
        if (isVertical) {
            card.classList.add('vertical-mode');
            card.classList.remove('horizontal-mode');
            card.style.display = 'flex';
            card.style.height = 'auto'; // Adaptive height
            card.style.alignItems = 'stretch'; // Ensure columns stretch to card height
            
            // 明确根据列顺序设置排列方向
            if (columnOrder === 'rtl') {
                card.style.flexDirection = 'row-reverse';
            } else {
                card.style.flexDirection = 'row';
            }
            
            // 显式设置列顺序属性，方便调试
            card.dataset.columnOrder = columnOrder;
            
            // 处理竖排模式下的间距
            card.style.columnGap = `${lineGap}px`;
            card.style.padding = '5px';
            
            // 设置合理的宽度，确保卡片不会过宽
            card.style.width = 'fit-content';
            card.style.maxWidth = 'max-content';
            card.style.minWidth = 'min-content';
        } else {
            card.classList.remove('vertical-mode');
            card.classList.add('horizontal-mode');
            card.style.display = 'flex';
            card.style.height = 'auto'; // Adaptive height
            card.style.flexDirection = 'column';
            // 处理横排模式下的间距
            card.style.rowGap = `${lineGap}px`;
            card.style.padding = '5px';
        }
        
        // 对齐方式
        card.style.textAlign = textAlign;
        if (textAlign === 'left') {
            card.style.alignItems = isVertical ? 'stretch' : 'flex-start'; // Use stretch for vertical card column height
        } else if (textAlign === 'center') {
            card.style.alignItems = isVertical ? 'stretch' : 'center';
        } else if (textAlign === 'right') {
            card.style.alignItems = isVertical ? 'stretch' : 'flex-end';
        }
        
        // 应用全局渐变背景
        if (globalGradient && globalGradient !== 'none') {
            applyGradient(card, globalGradient);
        }
        
        // 创建所有列元素（但不马上添加到卡片）
        let columnElements = [];
        
        // 创建第一列（号码）
        if (number) {
            const numberElement = document.createElement('div');
            numberElement.className = 'name-line number-line number';
            numberElement.textContent = number; // 已经在上面处理过编码
            
            // 设置列样式 - 确保背景颜色设置
            numberElement.style.backgroundColor = numberBgColor;
            numberElement.style.color = numberTextColor;
            numberElement.style.fontSize = `${numberFontSize}px`;
            numberElement.style.fontFamily = numberFontFamily;
            numberElement.style.fontWeight = document.getElementById('numberBoldBtn').classList.contains('active') ? 'bold' : 'normal';
            numberElement.style.fontStyle = document.getElementById('numberItalicBtn').classList.contains('active') ? 'italic' : 'normal';
            numberElement.style.textDecoration = document.getElementById('numberUnderlineBtn').classList.contains('active') ? 'underline' : 'none';
            
            // 应用边框
            applyBorderStyle(numberElement, numberBorderConfig, numberBorderColor, numberBorderWidth);
            
            // 应用渐变背景
            if (numberGradient && numberGradient !== 'none') {
                applyGradient(numberElement, numberGradient);
            }
            
            // 应用圆角
            if (numberBorderRadius > 0) {
                numberElement.style.borderRadius = `${numberBorderRadius}px`;
            }
            
            // 应用斜角 - 在竖排模式下特殊处理
            if (numberSkewAngle !== 0) {
                // 对于竖排模式，我们需要调整skew方向
                numberElement.style.transform = `skewY(${numberSkewAngle}deg)`;
            }
            
            // 应用边框渐变
            applyBorderGradient(numberElement, numberBorderGradient, numberBorderGradientStartColor, numberBorderGradientEndColor, numberBorderConfig, numberBorderWidth);
            
            // 处理竖排模式
            if (isVertical) {
                numberElement.style.writingMode = 'vertical-rl';
                numberElement.style.textOrientation = 'upright';
                numberElement.style.display = 'inline-flex';
                numberElement.style.flexDirection = 'column';
                numberElement.style.alignItems = 'center';
                numberElement.style.width = '1.5em';
                numberElement.style.maxWidth = '1.5em';
                numberElement.style.flex = '0 0 auto';
                numberElement.style.boxSizing = 'border-box';
                numberElement.style.overflowWrap = 'break-word';
                numberElement.style.wordBreak = 'break-all';
                
                // 应用水平和垂直对齐类
                applyAlignmentClasses(numberElement);
                
                // 通过样式添加更精确的对齐控制
                if (textAlign === 'left') {
                    numberElement.style.alignItems = 'flex-start';
                } else if (textAlign === 'center') {
                    numberElement.style.alignItems = 'center';
                } else if (textAlign === 'right') {
                    numberElement.style.alignItems = 'flex-end';
                }
                
                // 竖排模式下的垂直对齐方式
                if (verticalAlign === 'top') {
                    numberElement.style.justifyContent = 'flex-start';
                } else if (verticalAlign === 'middle') {
                    numberElement.style.justifyContent = 'center';
                } else if (verticalAlign === 'bottom') {
                    numberElement.style.justifyContent = 'flex-end';
                }
            } else {
                numberElement.style.width = '100%';
                numberElement.style.padding = '5px';
                numberElement.style.margin = '0';
                numberElement.style.textAlign = textAlign;
                
                // 应用斜角 - 在横排模式下正常应用
                if (numberSkewAngle !== 0) {
                    numberElement.style.transform = `skew(${numberSkewAngle}deg)`;
                }
            }
            
            // 应用文字效果
            applyTextEffects(numberElement, numberStrokeWidth, numberStrokeColor, numberShadowX, numberShadowY, numberShadowBlur, numberShadowColor);
            
            // 添加到列元素数组
            columnElements.push({type: 'number', element: numberElement});
        }
        
        // 创建第二列（姓名）
        if (name) {
            const nameElement = document.createElement('div');
            nameElement.className = 'name-line name-text name';
            nameElement.textContent = name; // 已经在上面处理过编码
            
            // 设置列样式 - 确保背景颜色设置
            nameElement.style.backgroundColor = nameBgColor;
            nameElement.style.color = nameTextColor;
            nameElement.style.fontSize = `${nameFontSize}px`;
            nameElement.style.fontFamily = nameFontFamily;
            nameElement.style.fontWeight = document.getElementById('nameBoldBtn').classList.contains('active') ? 'bold' : 'normal';
            nameElement.style.fontStyle = document.getElementById('nameItalicBtn').classList.contains('active') ? 'italic' : 'normal';
            nameElement.style.textDecoration = document.getElementById('nameUnderlineBtn').classList.contains('active') ? 'underline' : 'none';
            
            // 应用边框
            applyBorderStyle(nameElement, nameBorderConfig, nameBorderColor, nameBorderWidth);
            
            // 应用渐变背景
            if (nameGradient && nameGradient !== 'none') {
                applyGradient(nameElement, nameGradient);
            }
            
            // 应用圆角
            if (nameBorderRadius > 0) {
                nameElement.style.borderRadius = `${nameBorderRadius}px`;
            }
            
            // 应用斜角 - 在竖排模式下特殊处理
            if (nameSkewAngle !== 0) {
                // 对于竖排模式，我们需要调整skew方向
                nameElement.style.transform = `skewY(${nameSkewAngle}deg)`;
            }
            
            // 应用边框渐变
            applyBorderGradient(nameElement, nameBorderGradient, nameBorderGradientStartColor, nameBorderGradientEndColor, nameBorderConfig, nameBorderWidth);
            
            // 处理竖排模式
            if (isVertical) {
                nameElement.style.writingMode = 'vertical-rl';
                nameElement.style.textOrientation = 'upright';
                nameElement.style.display = 'inline-flex';
                nameElement.style.flexDirection = 'column';
                nameElement.style.alignItems = 'center';
                nameElement.style.width = '2em';
                nameElement.style.maxWidth = '2em';
                nameElement.style.flex = '0 0 auto';
                nameElement.style.boxSizing = 'border-box';
                nameElement.style.overflowWrap = 'break-word';
                nameElement.style.wordBreak = 'break-all';
                
                // 应用水平和垂直对齐类
                applyAlignmentClasses(nameElement);
                
                // 通过样式添加更精确的对齐控制
                if (textAlign === 'left') {
                    nameElement.style.alignItems = 'flex-start';
                } else if (textAlign === 'center') {
                    nameElement.style.alignItems = 'center';
                } else if (textAlign === 'right') {
                    nameElement.style.alignItems = 'flex-end';
                }
                
                // 竖排模式下的垂直对齐方式
                if (verticalAlign === 'top') {
                    nameElement.style.justifyContent = 'flex-start';
                } else if (verticalAlign === 'middle') {
                    nameElement.style.justifyContent = 'center';
                } else if (verticalAlign === 'bottom') {
                    nameElement.style.justifyContent = 'flex-end';
                }
            } else {
                nameElement.style.width = '100%';
                nameElement.style.padding = '5px';
                nameElement.style.margin = '0';
                nameElement.style.textAlign = textAlign;
                
                // 应用斜角 - 在横排模式下正常应用
                if (nameSkewAngle !== 0) {
                    nameElement.style.transform = `skew(${nameSkewAngle}deg)`;
                }
            }
            
            // 应用文字效果
            applyTextEffects(nameElement, nameStrokeWidth, nameStrokeColor, nameShadowX, nameShadowY, nameShadowBlur, nameShadowColor);
            
            // 添加到列元素数组
            columnElements.push({type: 'name', element: nameElement});
        }
        
        // 创建第三列（单位）
        if (unit) {
            const unitElement = document.createElement('div');
            unitElement.className = 'unit-line unit';
            unitElement.textContent = unit; // 已经在上面处理过编码
            
            // 设置列样式 - 确保背景颜色设置
            unitElement.style.backgroundColor = unitBgColor;
            unitElement.style.color = unitTextColor;
            unitElement.style.fontSize = `${unitFontSize}px`;
            unitElement.style.fontFamily = unitFontFamily;
            unitElement.style.fontWeight = document.getElementById('unitBoldBtn').classList.contains('active') ? 'bold' : 'normal';
            unitElement.style.fontStyle = document.getElementById('unitItalicBtn').classList.contains('active') ? 'italic' : 'normal';
            unitElement.style.textDecoration = document.getElementById('unitUnderlineBtn').classList.contains('active') ? 'underline' : 'none';
            
            // 应用边框
            applyBorderStyle(unitElement, unitBorderConfig, unitBorderColor, unitBorderWidth);
            
            // 应用渐变背景
            if (unitGradient && unitGradient !== 'none') {
                applyGradient(unitElement, unitGradient);
            }
            
            // 应用圆角
            if (unitBorderRadius > 0) {
                unitElement.style.borderRadius = `${unitBorderRadius}px`;
            }
            
            // 应用斜角 - 在竖排模式下特殊处理
            if (unitSkewAngle !== 0) {
                // 对于竖排模式，我们需要调整skew方向
                unitElement.style.transform = `skewY(${unitSkewAngle}deg)`;
            }
            
            // 应用边框渐变
            applyBorderGradient(unitElement, unitBorderGradient, unitBorderGradientStartColor, unitBorderGradientEndColor, unitBorderConfig, unitBorderWidth);
            
            // 处理竖排模式
            if (isVertical) {
                unitElement.style.writingMode = 'vertical-rl';
                unitElement.style.textOrientation = 'upright';
                unitElement.style.display = 'inline-flex';
                unitElement.style.flexDirection = 'column';
                unitElement.style.alignItems = 'center';
                unitElement.style.width = '1.75em';
                unitElement.style.maxWidth = '1.75em';
                unitElement.style.flex = '0 0 auto';
                unitElement.style.boxSizing = 'border-box';
                unitElement.style.overflowWrap = 'break-word';
                unitElement.style.wordBreak = 'break-all';
                
                // 应用水平和垂直对齐类
                applyAlignmentClasses(unitElement);
                
                // 通过样式添加更精确的对齐控制
                if (textAlign === 'left') {
                    unitElement.style.alignItems = 'flex-start';
                } else if (textAlign === 'center') {
                    unitElement.style.alignItems = 'center';
                } else if (textAlign === 'right') {
                    unitElement.style.alignItems = 'flex-end';
                }
                
                // 竖排模式下的垂直对齐方式
                if (verticalAlign === 'top') {
                    unitElement.style.justifyContent = 'flex-start';
                } else if (verticalAlign === 'middle') {
                    unitElement.style.justifyContent = 'center';
                } else if (verticalAlign === 'bottom') {
                    unitElement.style.justifyContent = 'flex-end';
                }
            } else {
                unitElement.style.width = '100%';
                unitElement.style.padding = '5px';
                unitElement.style.margin = '0';
                unitElement.style.textAlign = textAlign;
                
                // 应用斜角 - 在横排模式下正常应用
                if (unitSkewAngle !== 0) {
                    unitElement.style.transform = `skew(${unitSkewAngle}deg)`;
                }
            }
            
            // 应用文字效果
            applyTextEffects(unitElement, unitStrokeWidth, unitStrokeColor, unitShadowX, unitShadowY, unitShadowBlur, unitShadowColor);
            
            // 添加到列元素数组
            columnElements.push({type: 'unit', element: unitElement});
        }
        
        // 根据列排序和模式添加列元素到卡片
        if (isVertical) {
            // 记录列的自然顺序：number, name, unit
            const orderedElements = [...columnElements];
            
            // 如果是从右到左排序，反转列的顺序
            if (columnOrder === 'rtl') {
                orderedElements.reverse();
            }
            
            // 按照确定的顺序添加列
            for (let i = 0; i < orderedElements.length; i++) {
                card.appendChild(orderedElements[i].element);
            }
        } else {
            // 横排模式下，总是按标准顺序添加
            for (let i = 0; i < columnElements.length; i++) {
                card.appendChild(columnElements[i].element);
            }
        }
        
        card.oncontextmenu = (e) => {
            e.preventDefault();
            
            // 确保元素完全渲染后再保存
            setTimeout(() => {
                // 保存前添加临时类，确保saveAsImage能正确捕获所有样式
                card.classList.add('capturing-image');
                saveAsImage(card, name || '未命名');
                // 保存后移除临时类
                setTimeout(() => card.classList.remove('capturing-image'), 100);
            }, 50);
        };

        container.appendChild(card);
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