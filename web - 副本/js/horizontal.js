// 水平布局模式相关功能

// 应用文字效果（描边和阴影）
function applyTextEffects(element, strokeWidth, strokeColor, shadowX, shadowY, shadowBlur, shadowColor) {
    // 应用文字描边 (确保兼容不同浏览器)
    if (strokeWidth > 0) {
        element.style.webkitTextStroke = `${strokeWidth}px ${strokeColor}`;
        element.style.textStroke = `${strokeWidth}px ${strokeColor}`;
        
        // 为了提高兼容性，添加text-shadow替代方案
        if (!window.CSS || !CSS.supports('-webkit-text-stroke', `${strokeWidth}px ${strokeColor}`)) {
            // 使用多个文字阴影模拟描边效果
            let textShadow = '';
            for (let x = -strokeWidth; x <= strokeWidth; x++) {
                for (let y = -strokeWidth; y <= strokeWidth; y++) {
                    if (x !== 0 || y !== 0) {
                        textShadow += `${x}px ${y}px 0 ${strokeColor}, `;
                    }
                }
            }
            // 移除末尾的逗号和空格
            textShadow = textShadow.slice(0, -2);
            element.style.textShadow = textShadow;
        }
    }
    
    // 应用文字阴影
    if (shadowX !== 0 || shadowY !== 0 || shadowBlur !== 0) {
        // 检查是否已经应用了描边替代方案
        if (element.style.textShadow && strokeWidth > 0 && 
            (!window.CSS || !CSS.supports('-webkit-text-stroke', `${strokeWidth}px ${strokeColor}`))) {
            // 删除 console.log('已使用text-shadow模拟描边，无法同时应用阴影效果');
        } else {
            element.style.textShadow = `${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowColor}`;
        }
    }
}

// 应用边框样式
function applyBorderStyle(element, borderConfigIn, borderColorIn, borderWidthIn) {
    element.style.border = 'none'; // 清除所有现有边框

    if (!borderConfigIn || borderConfigIn.style === 'none') {
        return;
    }

    const color = borderColorIn;
    const width = borderWidthIn;

    if (borderConfigIn.style === 'all') {
        element.style.border = `${width}px solid ${color}`;
    } else if (borderConfigIn.style === 'custom') {
        if (borderConfigIn.top) element.style.borderTop = `${width}px solid ${color}`;
        if (borderConfigIn.bottom) element.style.borderBottom = `${width}px solid ${color}`;
        if (borderConfigIn.left) element.style.borderLeft = `${width}px solid ${color}`;
        if (borderConfigIn.right) element.style.borderRight = `${width}px solid ${color}`;
    }
} 

// 获取高级文本阴影效果
function getAdvancedTextShadow(textStyle) {
    // 如果没有有效的描边或阴影设置，返回空字符串
    if ((!textStyle.strokeWidth || textStyle.strokeWidth === '0') && 
        (!textStyle.shadowBlur || textStyle.shadowBlur === '0')) {
        return '';
    }
    
    // 描边效果
    if (textStyle.strokeWidth && textStyle.strokeWidth !== '0') {
        const strokeWidth = parseInt(textStyle.strokeWidth);
        const strokeColor = textStyle.strokeColor || '#000000';
        
        // 使用多层文本阴影模拟描边
        let textShadow = '';
        
        // 添加细微偏移以模拟描边
        for (let x = -strokeWidth; x <= strokeWidth; x++) {
            for (let y = -strokeWidth; y <= strokeWidth; y++) {
                if (Math.abs(x) === strokeWidth || Math.abs(y) === strokeWidth) {
                    textShadow += `${x}px ${y}px 0 ${strokeColor}, `;
                }
            }
        }
        
        // 移除最后的逗号和空格
        textShadow = textShadow.slice(0, -2);
        
        // 如果同时有阴影效果，需要提示无法同时应用
        if (textStyle.shadowBlur && textStyle.shadowBlur !== '0') {
            // 删除 console.log('已使用text-shadow模拟描边，无法同时应用阴影效果');
        }
        
        return textShadow;
    }
    
    // 阴影效果
    if (textStyle.shadowBlur && textStyle.shadowBlur !== '0') {
        const shadowX = parseInt(textStyle.shadowX) || 0;
        const shadowY = parseInt(textStyle.shadowY) || 0;
        const shadowBlur = parseInt(textStyle.shadowBlur) || 0;
        const shadowColor = textStyle.shadowColor || 'rgba(0,0,0,0.5)';
        
        return `${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowColor}`;
    }
    
    return '';
}