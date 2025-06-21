// 图片保存相关功能

// 批量保存所有姓名条
async function saveAllNameCards() {
    try {
        const container = document.getElementById('container');
        // 只查找SVG卡片
        const nameCards = container.querySelectorAll('.svg-name-card');
        if (nameCards.length === 0) {
            alert('没有找到可保存的姓名条，请先生成姓名条');
            return;
        }
        // 创建进度指示器
        const progressContainer = document.createElement('div');
        progressContainer.style.position = 'fixed';
        progressContainer.style.top = '50%';
        progressContainer.style.left = '50%';
        progressContainer.style.transform = 'translate(-50%, -50%)';
        progressContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        progressContainer.style.color = 'white';
        progressContainer.style.padding = '20px';
        progressContainer.style.borderRadius = '8px';
        progressContainer.style.zIndex = '9999';
        progressContainer.style.textAlign = 'center';
        progressContainer.innerHTML = `<div>批量保存中...</div><div id="saveProgress">0/${nameCards.length}</div>`;
        document.body.appendChild(progressContainer);
        // 获取文件名前缀
        let filePrefix = prompt('请输入文件名前缀', '姓名条');
        if (filePrefix === null) {
            document.body.removeChild(progressContainer);
            return; // 用户取消操作
        }
        if (!filePrefix.trim()) {
            filePrefix = '姓名条';
        }
        for (let i = 0; i < nameCards.length; i++) {
            const card = nameCards[i];
            const progressElement = document.getElementById('saveProgress');
            progressElement.textContent = `${i+1}/${nameCards.length}`;
            let filename;
            // 尝试获取姓名作为文件名
            let nameText = '';
            const texts = card.querySelectorAll('text');
            texts.forEach(t => {
                if (t.textContent && t.textContent.length > 0) nameText = t.textContent;
            });
            if (nameText) {
                filename = `${filePrefix}_${i+1}_${nameText}`;
            } else {
                filename = `${i+1}_${filePrefix}`;
            }
            await saveAsImage(card, filename);
            if (i < nameCards.length - 1) {
                await new Promise(resolve => setTimeout(resolve, 500));
            }
        }
        document.body.removeChild(progressContainer);
        alert(`已成功保存 ${nameCards.length} 张姓名条图片`);
    } catch (error) {
        console.error('批量保存出错:', error);
        alert('批量保存过程中出错，请重试');
    }
}

// 保存为图片
async function saveAsImage(element, filename) {
    try {
        // 如果是SVG节点，使用canvg导出
        if (element instanceof SVGElement) {
            // 1. 获取SVG字符串和viewBox
            let svgString = new XMLSerializer().serializeToString(element);
            let viewBox = element.getAttribute('viewBox');
            let width = element.width.baseVal.value || 360;
            let height = element.height.baseVal.value || 120;
            if (viewBox) {
                const [minX, minY, vbW, vbH] = viewBox.split(/\s+/).map(Number);
                // 2. 归零viewBox，整体平移内容
                // 创建临时SVG，viewBox=0 0 vbW vbH，width/vbW，height=vbH
                let tempSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                tempSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                tempSvg.setAttribute('width', vbW + 'px');
                tempSvg.setAttribute('height', vbH + 'px');
                tempSvg.setAttribute('viewBox', `0 0 ${vbW} ${vbH}`);
                // 2.1 插入字体声明style
                let defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
                let style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
                style.textContent = `text { font-family: 'Microsoft YaHei', '微软雅黑', 'Arial', 'sans-serif'; }`;
                defs.appendChild(style);
                tempSvg.appendChild(defs);
                // 复制原SVG内容并整体平移
                let g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                g.setAttribute('transform', `translate(${-minX},${-minY})`);
                Array.from(element.childNodes).forEach(node => g.appendChild(node.cloneNode(true)));
                tempSvg.appendChild(g);
                svgString = new XMLSerializer().serializeToString(tempSvg);
                width = vbW;
                height = vbH;
            }
            // 3. 创建canvas
            const canvas = document.createElement('canvas');
            canvas.width = width * 2; // 提高清晰度
            canvas.height = height * 2;
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            // 4. 用canvg渲染SVG到canvas
            const ctx = canvas.getContext('2d');
            const v = await canvg.Canvg.fromString(ctx, svgString, { ignoreAnimation: true, ignoreMouse: true, preserveAspectRatio: 'none' });
            await v.render();
            // 5. 导出为PNG
            const dataUrl = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = `${filename || '未命名'}.png`;
            link.href = dataUrl;
            link.click();
            return;
        }

        // 检查是否是竖排模式
        const isVertical = element.classList.contains('vertical-mode');
        
        // 创建一个元素的深度克隆，避免修改原始元素
        const cloneElement = element.cloneNode(true);
        document.body.appendChild(cloneElement);
        
        // 保留原始样式
        cloneElement.style.position = 'fixed';
        cloneElement.style.left = '-9999px';
        cloneElement.style.top = '0';
        cloneElement.style.zIndex = '-1';
        
        // 准备捕获 - 应用特殊处理以确保颜色准确
        const cleanupCapture = prepareForCapture(cloneElement);
        
        // 竖排模式特殊处理
        if (isVertical) {
            // 强制设置精确的宽度
            const columns = cloneElement.querySelectorAll('.name-line');
            let totalWidth = 0;
            
            columns.forEach(column => {
                // 获取原始元素的计算宽度
                const originalColumn = Array.from(element.querySelectorAll('.name-line')).find(
                    col => col.textContent === column.textContent
                );
                
                if (originalColumn) {
                    const computedStyle = window.getComputedStyle(originalColumn);
                    // 使用精确的宽度
                    const width = parseInt(computedStyle.width) || 0;
                    const paddingLeft = parseInt(computedStyle.paddingLeft) || 0;
                    const paddingRight = parseInt(computedStyle.paddingRight) || 0;
                    const borderLeft = parseInt(computedStyle.borderLeftWidth) || 0;
                    const borderRight = parseInt(computedStyle.borderRightWidth) || 0;
                    
                    // 计算实际需要的宽度
                    const exactWidth = width + paddingLeft + paddingRight + borderLeft + borderRight;
                    totalWidth += exactWidth;
                    
                    // 应用精确尺寸
                    column.style.width = `${width}px`;
                    column.style.maxWidth = `${width}px`;
                    column.style.boxSizing = 'content-box';
                }
            });
            
            // 设置卡片的精确宽度
            const gap = parseInt(window.getComputedStyle(element).columnGap) || 0;
            const cardPaddingLeft = parseInt(window.getComputedStyle(element).paddingLeft) || 0;
            const cardPaddingRight = parseInt(window.getComputedStyle(element).paddingRight) || 0;
            const cardBorderLeft = parseInt(window.getComputedStyle(element).borderLeftWidth) || 0;
            const cardBorderRight = parseInt(window.getComputedStyle(element).borderRightWidth) || 0;
            
            // 计算总宽度，包括内边距和边框
            const exactCardWidth = totalWidth + gap * (columns.length - 1) + cardPaddingLeft + cardPaddingRight + cardBorderLeft + cardBorderRight;
            cloneElement.style.width = `${exactCardWidth}px`;
            cloneElement.style.maxWidth = `${exactCardWidth}px`;
        }

        // 设置html2canvas选项
        const options = {
            backgroundColor: null,
            scale: 2, // 提高清晰度
            useCORS: true,
            allowTaint: true,
            foreignObjectRendering: true,
            logging: false
        };

        // 使用html2canvas捕获
        const canvas = await html2canvas(cloneElement, options);
        
        // 清理
        document.body.removeChild(cloneElement);
        if (cleanupCapture) cleanupCapture();

        // 转换为PNG并下载
        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = `${filename || '未命名'}.png`;
        link.href = dataUrl;
        link.click();

    } catch (error) {
        console.error('保存图片出错:', error);
        alert('保存图片时出错，请重试');
    }
}

// 添加特殊处理函数以确保html2canvas可以正确呈现颜色
function prepareForCapture(element) {
    // 添加特殊类标记
    element.classList.add('capturing-image');
    
    // 强制所有背景和颜色值使用非简写形式
    const allElements = element.querySelectorAll('*');
    allElements.forEach(el => {
        // 处理背景色
        if (el.style.backgroundColor) {
            const computedBg = window.getComputedStyle(el).backgroundColor;
            el.style.backgroundColor = computedBg;
        }
        
        // 处理文字颜色
        if (el.style.color) {
            const computedColor = window.getComputedStyle(el).color;
            el.style.color = computedColor;
        }
        
        // 处理边框颜色
        if (el.style.borderColor) {
            const computedBorder = window.getComputedStyle(el).borderColor;
            el.style.borderColor = computedBorder;
        }
        
        // 处理渐变元素 - 使用精确的导出定义
        if (el.hasAttribute('data-gradient-type')) {
            if (el.hasAttribute('data-export-background')) {
                el.style.background = el.getAttribute('data-export-background');
            }
        }
        
        // 处理渐变叠加层
        if (el.classList.contains('gradient-overlay') && el.hasAttribute('data-export-overlay')) {
            el.style.background = el.getAttribute('data-export-overlay');
            // 确保叠加层可见
            el.style.opacity = '1';
            el.style.visibility = 'visible';
        }
        
        // 强制使用非压缩的渐变定义
        if (el.style.background && el.style.background.includes('gradient')) {
            // 从计算样式中获取完整的渐变定义
            const computedStyle = window.getComputedStyle(el);
            const fullBackground = computedStyle.background;
            
            // 确保渐变使用精确的方向和颜色表示
            if (fullBackground.includes('linear-gradient')) {
                // 应用一些转换来确保具有足够的颜色停止点
                let enhancedBg = fullBackground;
                // 如果没有明确的颜色停止点，添加百分比
                if (!enhancedBg.includes('%')) {
                    enhancedBg = enhancedBg.replace('linear-gradient(', 'linear-gradient(')
                        .replace(/rgba?\([^)]+\)/g, (match, offset, string) => {
                            // 第一个颜色添加 0%，最后一个添加 100%
                            const isFirst = string.substring(0, offset).lastIndexOf('rgba') === -1 &&
                                         string.substring(0, offset).lastIndexOf('rgb') === -1;
                            const isLast = string.substring(offset + match.length).indexOf('rgba') === -1 &&
                                         string.substring(offset + match.length).indexOf('rgb') === -1;
                            
                            if (isFirst) return match + ' 0%';
                            if (isLast) return match + ' 100%';
                            return match + ' 50%';
                        });
                }
                el.style.background = enhancedBg;
            }
        }
    });
    
    return () => {
        // 清理函数 - 移除临时类
        element.classList.remove('capturing-image');
    };
} 