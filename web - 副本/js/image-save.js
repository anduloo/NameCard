// 图片保存相关功能

// 批量保存所有姓名条
async function saveAllNameCards() {
    try {
        const container = document.getElementById('container');
        const nameCards = container.querySelectorAll('.name-card');
        
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
        
        // 如果用户未输入任何内容，使用默认前缀
        if (!filePrefix.trim()) {
            filePrefix = '姓名条';
        }
        
        // 逐个保存图片，添加间隔时间避免浏览器崩溃
        for (let i = 0; i < nameCards.length; i++) {
            const card = nameCards[i];
            const progressElement = document.getElementById('saveProgress');
            progressElement.textContent = `${i+1}/${nameCards.length}`;
            
            // 生成文件名
            let filename;
            const nameElement = card.querySelector('.name-line');
            if (nameElement && nameElement.textContent.trim()) {
                // 如果能找到姓名元素，使用姓名作为文件名一部分
                filename = `${filePrefix}_${nameElement.textContent.trim()}_${i+1}`;
            } else {
                // 否则只使用序号
                filename = `${filePrefix}_${i+1}`;
            }
            
            // 保存当前卡片为图片
            await saveAsImage(card, filename);
            
            // 添加间隔时间，避免浏览器过载
            if (i < nameCards.length - 1) {
                await new Promise(resolve => setTimeout(resolve, 500));
            }
        }
        
        // 完成后移除进度指示器
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
            
            // 处理竖排模式下的图片
            const images = cloneElement.querySelectorAll('img');
            images.forEach(img => {
                // 设置严格的宽度限制
                img.style.maxWidth = '1.5em';
                img.style.width = 'auto';
                img.style.height = 'auto';
                img.style.display = 'block';
                img.style.margin = '0.25em auto';
            });
        } else {
            // 横排模式保持与原始元素相同的尺寸
            cloneElement.style.width = `${element.offsetWidth}px`;
        }
        
        // 强制重新计算布局
        void cloneElement.offsetHeight;
        
        // 修复文字描边和阴影
        const textElements = cloneElement.querySelectorAll('.name-line');
        textElements.forEach(el => {
            // 确保文字效果能正确被捕获
            if (el.style.webkitTextStroke || el.style.textStroke) {
                // 一些浏览器不支持text-stroke，使用特殊方式确保效果可见
                const textStrokeColor = el.style.webkitTextStroke ? 
                    el.style.webkitTextStroke.split(' ')[1] : 
                    (el.style.textStroke ? el.style.textStroke.split(' ')[1] : null);
                
                const textStrokeWidth = el.style.webkitTextStroke ? 
                    parseFloat(el.style.webkitTextStroke.split(' ')[0]) : 
                    (el.style.textStroke ? parseFloat(el.style.textStroke.split(' ')[0]) : 0);
                
                if (textStrokeColor && textStrokeWidth > 0) {
                    // 添加额外的SVG滤镜来确保描边效果
                    const filterId = `text-stroke-${Math.random().toString(36).substr(2, 9)}`;
                    const svgFilter = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    svgFilter.style.width = '0';
                    svgFilter.style.height = '0';
                    svgFilter.style.position = 'absolute';
                    svgFilter.innerHTML = `
                        <defs>
                            <filter id="${filterId}" x="-20%" y="-20%" width="140%" height="140%">
                                <feMorphology operator="dilate" radius="${textStrokeWidth}" in="SourceAlpha" result="thicken" />
                                <feFlood flood-color="${textStrokeColor}" result="stroke-color" />
                                <feComposite in="stroke-color" in2="thicken" operator="in" result="stroke-fill" />
                                <feComposite in="SourceGraphic" in2="stroke-fill" operator="over" />
                            </filter>
                        </defs>
                    `;
                    document.body.appendChild(svgFilter);
                    el.style.filter = `url(#${filterId})`;
                    
                    // 在clone完成后清理
                    setTimeout(() => {
                        document.body.removeChild(svgFilter);
                    }, 1000);
                }
            }
            
            // 确保文字阴影效果可见
            if (el.style.textShadow) {
                el.style.filter = `drop-shadow(${el.style.textShadow.replace(/rgba?\([^)]+\)/, function(color) {
                    return color;
                })})`;
            }
        });
        
        // 确保渐变和叠加层正确克隆
        const gradientOverlays = cloneElement.querySelectorAll('.gradient-overlay');
        gradientOverlays.forEach(overlay => {
            // 确保叠加层可见
            overlay.style.opacity = '1';
        });
        
        // 确保动画效果在截图时是静态的
        const shimmerEffects = cloneElement.querySelectorAll('.shimmer-effect');
        shimmerEffects.forEach(effect => {
            // 在截图时固定动画位置
            effect.style.animationPlayState = 'paused';
            effect.style.backgroundPosition = '0% 0%';
        });
        
        // 确保克隆元素中的所有图片都已加载
        const allImgs = cloneElement.querySelectorAll('img');
        if (allImgs.length > 0) {
            await Promise.all(Array.from(allImgs).map(img => {
                if (img.complete) return Promise.resolve();
                return new Promise(resolve => {
                    img.onload = resolve;
                    img.onerror = resolve;
                });
            }));
        }
        
        // 生成图像 - 增加短暂延时确保样式应用
        await new Promise(resolve => setTimeout(resolve, 100));
        
        const canvas = await html2canvas(cloneElement, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: null,
            logging: false,
            imageTimeout: 0,
            removeContainer: false,
            foreignObjectRendering: false, // Set to false for better color support
            letterRendering: true, // Better text rendering
            colorSpace: 'srgb', // Explicitly set color space
            onclone: (doc) => {
                // 在html2canvas克隆后，再次确保样式正确
                const clonedElement = doc.body.lastChild;
                
                // 确保所有子元素样式正确应用
                const allElements = clonedElement.querySelectorAll('*');
                allElements.forEach(el => {
                    if (el.style.position === 'relative' || el.style.position === 'absolute') {
                        // 强制重新计算样式
                        el.style.position = el.style.position;
                        void el.offsetHeight;
                    }
                    
                    // 确保渐变和边框样式正确应用
                    if (el.style.background && el.style.background.includes('gradient')) {
                        // 强制使用未压缩版本的渐变定义，确保颜色精度
                        const originalBackground = el.style.background;
                        el.style.background = originalBackground;
                        void el.offsetHeight;
                    }
                    
                    if (el.style.border) {
                        el.style.border = el.style.border;
                        void el.offsetHeight;
                    }
                    
                    // 特殊处理文字效果
                    if (el.style.webkitTextStroke || el.style.textStroke || el.style.textShadow) {
                        // 确保文字效果被正确捕获
                        el.style.transform = 'translateZ(0)';
                        el.style.backfaceVisibility = 'hidden';
                    }
                    
                    // 特殊处理竖排模式下的图片
                    if (isVertical && el.tagName === 'IMG') {
                        // 确保图片大小被正确捕获
                        el.style.maxWidth = '1.5em';
                    }
                    
                    // 针对颜色不准确问题特别处理
                    if (el.style.color) {
                        // 确保文字颜色准确渲染
                        el.style.color = el.style.color;
                    }
                    
                    // 处理渐变背景元素
                    if (el.classList.contains('gradient-overlay')) {
                        // 确保渐变元素完全可见
                        el.style.opacity = '1';
                        el.style.visibility = 'visible';
                    }
                });
            }
        });
        
        // 移除克隆元素
        document.body.removeChild(cloneElement);
        
        // 移除捕获时添加的临时样式
        cleanupCapture();

        // 使用更高质量的PNG导出
        const link = document.createElement('a');
        link.download = `${filename || '未命名'}.png`;
        link.href = canvas.toDataURL('image/png', 1.0); // 使用最高质量
        link.click();
    } catch (error) {
        console.error('Error saving image:', error);
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