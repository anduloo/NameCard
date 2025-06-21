// GSAP动画特效实现

// 辅助函数：获取元素的主要颜色
function getElementColor(element, type = 'background') {
    if (!element) return '#cccccc'; // 更改默认颜色为灰色
    
    let color;
    const computedStyle = window.getComputedStyle(element);
    
    if (type === 'background') {
        // 尝试获取背景颜色
        color = computedStyle.backgroundColor;
        if (color === 'rgba(0, 0, 0, 0)' || color === 'transparent') {
            // 如果背景是透明的，可能有border颜色可用
            color = computedStyle.borderColor;
            if (color === 'rgba(0, 0, 0, 0)' || color === 'transparent') {
                // 如果border也是透明的，尝试获取文字颜色
                color = computedStyle.color;
            }
        }
    } else if (type === 'text') {
        color = computedStyle.color;
    } else if (type === 'border') {
        color = computedStyle.borderColor;
        if (color === 'rgba(0, 0, 0, 0)' || color === 'transparent') {
            // 如果没有边框颜色，尝试使用文字颜色
            color = computedStyle.color;
        }
    }
    
    // 如果所有尝试都失败，返回灰色作为默认值
    if (color === 'rgba(0, 0, 0, 0)' || color === 'transparent') {
        color = '#cccccc';
    }
    
    return color;
}

// 确保使用window.getPickrColor函数从主应用获取颜色

// 1. 圆形展开效果
function applyCircleEffect() {
    // 获取当前卡片
    const card = document.querySelector('.name-card');
    if (!card) return;
    
    // 检查是否已有圆形遮罩，若有则移除
    const existingMask = card.querySelector('.circle-mask');
    if (existingMask) {
        card.removeChild(existingMask);
    }
    
    // 获取卡片的全局背景色和边框色
    let bgColor, borderColor;
    
    try {
        // 尝试使用主应用中的getPickrColor函数
        if (typeof window.getPickrColor === 'function') {
            bgColor = window.getPickrColor('globalBgPicker');
            borderColor = window.getPickrColor('globalBorderPicker');
            console.log('使用主应用getPickrColor获取颜色:', bgColor, borderColor);
        } else {
            // 回退到getElementColor
            bgColor = getElementColor(card, 'background');
            borderColor = getElementColor(card, 'border');
            console.log('使用getElementColor获取颜色:', bgColor, borderColor);
        }
    } catch (error) {
        console.error('获取颜色时出错:', error);
        bgColor = getElementColor(card, 'background');
        borderColor = getElementColor(card, 'border');
    }
    
    console.log('圆形展开使用背景色:', bgColor, '边框色:', borderColor);
    
    // 创建渐变颜色
    let gradientColor1 = bgColor;
    let gradientColor2 = borderColor;
    
    // 如果是同一种颜色，做轻微变化以创建渐变效果
    if (gradientColor1 === gradientColor2) {
        try {
            const color = tinycolor(gradientColor1);
            gradientColor2 = color.lighten(15).toString();
        } catch (e) {
            console.warn('颜色转换错误', e);
            gradientColor1 = 'rgba(64, 158, 255, 0.7)';
            gradientColor2 = 'rgba(100, 100, 255, 0.7)';
        }
    }
    
    // 创建圆形遮罩
    const mask = document.createElement('div');
    mask.className = 'circle-mask';
    mask.style.background = `linear-gradient(45deg, ${gradientColor1}, ${gradientColor2})`;
    card.appendChild(mask);
    
    // 设置卡片定位，确保遮罩正确定位
    if (window.getComputedStyle(card).position === 'static') {
        card.style.position = 'relative';
    }
    
    // 创建动画时间线
    const tl = gsap.timeline();
    
    // 执行动画
    tl.to(mask, {
        clipPath: 'circle(100% at 50% 50%)',
        duration: 1.2,
        ease: "power3.inOut"
    }).to(mask, {
        clipPath: 'circle(0% at 50% 50%)',
        duration: 1.2,
        ease: "power3.inOut",
        delay: 0.5,
        onComplete: function() {
            // 动画完成后移除遮罩
            card.removeChild(mask);
        }
    });
}

// 2. 粒子聚合效果
function applyParticleEffect() {
    // 获取当前卡片
    const card = document.querySelector('.name-card');
    if (!card) return;
    
    // 清理之前可能存在的粒子
    const existingParticles = card.querySelectorAll('.particle');
    existingParticles.forEach(particle => card.removeChild(particle));
    
    // 设置卡片定位，确保粒子正确定位
    if (window.getComputedStyle(card).position === 'static') {
        card.style.position = 'relative';
    }
    
    // 获取卡片的相关颜色
    let nameColor, unitColor;
    
    try {
        // 尝试使用主应用中的getPickrColor函数
        if (typeof window.getPickrColor === 'function') {
            nameColor = window.getPickrColor('nameTextPicker');
            unitColor = window.getPickrColor('unitTextPicker');
            console.log('使用主应用getPickrColor获取颜色:', nameColor, unitColor);
        } else {
            // 回退到getElementColor
            nameColor = getElementColor(card.querySelector('.name-line'), 'text');
            unitColor = getElementColor(card.querySelector('.unit-line'), 'text');
            console.log('使用getElementColor获取颜色:', nameColor, unitColor);
        }
    } catch (error) {
        console.error('获取颜色时出错:', error);
        nameColor = getElementColor(card.querySelector('.name-line'), 'text');
        unitColor = getElementColor(card.querySelector('.unit-line'), 'text');
    }
    
    console.log('粒子聚合使用名称颜色:', nameColor, '职位颜色:', unitColor);
    
    // 创建粒子
    const particlesCount = 50;
    const particles = [];
    
    for (let i = 0; i < particlesCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // 初始随机位置（在卡片外围）
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // 随机大小
        const size = Math.random() * 3 + 2;
        
        // 使用名称和职位的颜色交替
        const particleColor = i % 2 === 0 ? nameColor : unitColor;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = particleColor;
        
        // 初始不可见
        particle.style.opacity = '0';
        
        card.appendChild(particle);
        particles.push(particle);
    }
    
    // 创建动画时间线
    const tl = gsap.timeline({
        onComplete: function() {
            // 动画完成后移除粒子
            particles.forEach(particle => card.removeChild(particle));
        }
    });
    
    // 执行动画
    tl.to(particles, {
        opacity: 1,
        duration: 0.5,
        stagger: 0.01
    }).to(particles, {
        left: '50%',
        top: '50%',
        x: () => gsap.utils.random(-30, 30),
        y: () => gsap.utils.random(-15, 15),
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.01
    }).to(particles, {
        left: () => gsap.utils.random(0, 100) + '%',
        top: () => gsap.utils.random(0, 100) + '%',
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.01
    });
}

// 3. 遮罩渐显效果
function applyMaskEffect() {
    // 获取当前卡片
    const card = document.querySelector('.name-card');
    if (!card) return;
    
    // 检查是否已有遮罩，若有则移除
    const existingMask = card.querySelector('.gradient-mask');
    if (existingMask) {
        card.removeChild(existingMask);
    }
    
    // 获取卡片的相关颜色
    let nameColor, unitColor;
    
    try {
        // 尝试使用主应用中的getPickrColor函数
        if (typeof window.getPickrColor === 'function') {
            nameColor = window.getPickrColor('nameTextPicker');
            unitColor = window.getPickrColor('unitTextPicker');
            console.log('使用主应用getPickrColor获取颜色:', nameColor, unitColor);
        } else {
            // 回退到getElementColor
            nameColor = getElementColor(card.querySelector('.name-line'), 'text');
            unitColor = getElementColor(card.querySelector('.unit-line'), 'text');
            console.log('使用getElementColor获取颜色:', nameColor, unitColor);
        }
    } catch (error) {
        console.error('获取颜色时出错:', error);
        nameColor = getElementColor(card.querySelector('.name-line'), 'text');
        unitColor = getElementColor(card.querySelector('.unit-line'), 'text');
    }
    
    console.log('遮罩渐显使用名称颜色:', nameColor, '职位颜色:', unitColor);
    
    // 创建遮罩
    const mask = document.createElement('div');
    mask.className = 'gradient-mask';
    mask.style.background = `linear-gradient(45deg, ${nameColor}, ${unitColor})`;
    card.appendChild(mask);
    
    // 设置卡片定位，确保遮罩正确定位
    if (window.getComputedStyle(card).position === 'static') {
        card.style.position = 'relative';
    }
    
    // 创建动画时间线
    const tl = gsap.timeline({
        onComplete: function() {
            // 动画完成后移除遮罩
            card.removeChild(mask);
        }
    });
    
    // 执行动画
    tl.to(mask, {
        opacity: 0.7,
        duration: 0.8,
        ease: "sine.inOut"
    }).to(mask, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        delay: 0.5
    });
}

// 4. 方块拼贴效果
function applyBlockEffect() {
    // 获取当前卡片
    const card = document.querySelector('.name-card');
    if (!card) return;
    
    // 清理之前可能存在的方块
    const existingBlocks = card.querySelectorAll('.block');
    existingBlocks.forEach(block => card.removeChild(block));
    
    // 设置卡片定位，确保方块正确定位
    if (window.getComputedStyle(card).position === 'static') {
        card.style.position = 'relative';
    }
    
    // 获取卡片的相关颜色
    let bgColor, nameColor;
    
    try {
        // 尝试使用主应用中的getPickrColor函数
        if (typeof window.getPickrColor === 'function') {
            bgColor = window.getPickrColor('globalBgPicker');
            nameColor = window.getPickrColor('nameTextPicker');
            console.log('使用主应用getPickrColor获取颜色:', bgColor, nameColor);
        } else {
            // 回退到getElementColor
            bgColor = getElementColor(card, 'background');
            nameColor = getElementColor(card.querySelector('.name-line'), 'text');
            console.log('使用getElementColor获取颜色:', bgColor, nameColor);
        }
    } catch (error) {
        console.error('获取颜色时出错:', error);
        bgColor = getElementColor(card, 'background');
        nameColor = getElementColor(card.querySelector('.name-line'), 'text');
    }
    
    console.log('方块拼贴使用背景色:', bgColor, '名称颜色:', nameColor);
    
    // 创建方块
    const rows = 8;
    const cols = 12;
    const blocks = [];
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const block = document.createElement('div');
            block.className = 'block';
            block.style.width = `${100 / cols}%`;
            block.style.height = `${100 / rows}%`;
            block.style.top = `${i * (100 / rows)}%`;
            block.style.left = `${j * (100 / cols)}%`;
            block.style.opacity = '0';
            block.style.transform = 'scale(0)';
            
            // 方块颜色使用名称文字颜色，但透明度低
            try {
                const rgba = tinycolor(nameColor).setAlpha(0.1).toRgbString();
                block.style.backgroundColor = rgba;
            } catch (e) {
                console.warn('颜色转换错误', e);
                block.style.backgroundColor = 'rgba(64, 158, 255, 0.1)';
            }
            
            card.appendChild(block);
            blocks.push(block);
        }
    }
    
    // 创建动画时间线
    const tl = gsap.timeline({
        onComplete: function() {
            // 动画完成后移除方块
            blocks.forEach(block => card.removeChild(block));
        }
    });
    
    // 执行动画
    tl.to(blocks, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: {
            grid: [cols, rows],
            from: "center",
            amount: 0.5
        },
        ease: "power3.out"
    }).to(blocks, {
        opacity: 0,
        scale: 0,
        duration: 0.8,
        stagger: {
            grid: [cols, rows],
            from: "center",
            amount: 0.5
        },
        ease: "power3.in",
        delay: 0.5
    });
}

// 5. 分层滑入效果
function applyLayerEffect() {
    // 获取当前卡片
    const card = document.querySelector('.name-card');
    if (!card) return;
    
    // 清理之前可能存在的层
    const existingLayers = card.querySelectorAll('.layer');
    existingLayers.forEach(layer => card.removeChild(layer));
    
    // 设置卡片定位，确保层正确定位
    if (window.getComputedStyle(card).position === 'static') {
        card.style.position = 'relative';
    }
    
    // 获取卡片的相关颜色
    let nameColor, unitColor;
    
    try {
        // 尝试使用主应用中的getPickrColor函数
        if (typeof window.getPickrColor === 'function') {
            nameColor = window.getPickrColor('nameTextPicker');
            unitColor = window.getPickrColor('unitTextPicker');
            console.log('使用主应用getPickrColor获取颜色:', nameColor, unitColor);
        } else {
            // 回退到getElementColor
            nameColor = getElementColor(card.querySelector('.name-line'), 'text');
            unitColor = getElementColor(card.querySelector('.unit-line'), 'text');
            console.log('使用getElementColor获取颜色:', nameColor, unitColor);
        }
    } catch (error) {
        console.error('获取颜色时出错:', error);
        nameColor = getElementColor(card.querySelector('.name-line'), 'text');
        unitColor = getElementColor(card.querySelector('.unit-line'), 'text');
    }
    
    console.log('分层滑入使用名称颜色:', nameColor, '职位颜色:', unitColor);
    
    // 创建层
    const layerCount = 5;
    const layers = [];
    
    for (let i = 0; i < layerCount; i++) {
        const layer = document.createElement('div');
        layer.className = 'layer';
        layer.style.top = `${i * (100 / layerCount)}%`;
        layer.style.width = '100%';
        layer.style.transform = 'translateX(-100%)';
        
        // 根据位置交替使用名称和职位颜色
        try {
            if (i % 2 === 0) {
                const rgba = tinycolor(nameColor).setAlpha(0.1).toRgbString();
                layer.style.backgroundColor = rgba;
            } else {
                const rgba = tinycolor(unitColor).setAlpha(0.1).toRgbString();
                layer.style.backgroundColor = rgba;
            }
        } catch (e) {
            console.warn('颜色转换错误', e);
            layer.style.backgroundColor = i % 2 === 0 ? 'rgba(64, 158, 255, 0.1)' : 'rgba(100, 100, 255, 0.1)';
        }
        
        card.appendChild(layer);
        layers.push(layer);
    }
    
    // 创建动画时间线
    const tl = gsap.timeline({
        onComplete: function() {
            // 动画完成后移除层
            layers.forEach(layer => card.removeChild(layer));
        }
    });
    
    // 执行动画
    tl.to(layers, {
        x: '100%',
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.inOut"
    }).to(layers, {
        x: '-100%',
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.inOut",
        delay: 0.5
    });
}

// 6. 光效扫过效果（全局）
function applyFlareEffect() {
    // 获取当前卡片
    const card = document.querySelector('.name-card');
    if (!card) return;
    
    // 检查是否已有光效，若有则移除
    const existingFlare = card.querySelector('.flare');
    if (existingFlare) {
        card.removeChild(existingFlare);
    }
    
    // 创建光效 - 始终使用白色半透明
    const flare = document.createElement('div');
    flare.className = 'flare';
    flare.style.background = 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)';
    
    card.appendChild(flare);
    
    // 设置卡片定位，确保光效正确定位
    if (window.getComputedStyle(card).position === 'static') {
        card.style.position = 'relative';
    }
    
    // 创建动画时间线
    const tl = gsap.timeline({
        onComplete: function() {
            // 动画完成后移除光效
            card.removeChild(flare);
        }
    });
    
    // 执行动画
    tl.to(flare, {
        x: card.offsetWidth + 150,
        duration: 1.5,
        ease: "power2.inOut",
        repeat: 1,
        repeatDelay: 0.3
    });
}

// 处理特效选择下拉框的变化
function applySelectedEffect(value) {
    if (!value || value === 'none') return;
    
    // 根据选择的值调用相应的特效函数
    switch (value) {
        case 'circle':
            applyCircleEffect();
            break;
        case 'particle':
            applyParticleEffect();
            break;
        case 'mask':
            applyMaskEffect();
            break;
        case 'block':
            applyBlockEffect();
            break;
        case 'layer':
            applyLayerEffect();
            break;
        case 'flare':
            applyFlareEffect();
            break;
    }
    
    // 重置下拉框为"无特效"
    setTimeout(() => {
        const selector = document.getElementById('effectsSelector');
        if (selector) selector.value = 'none';
    }, 100);
}

// 存储线条绘制状态的对象
window.lineEffectStatus = {
    global: false,
    name: false,
    unit: false
};

// 存储动画时间线的对象
window.lineEffectTimelines = {
    global: null,
    name: null,
    unit: null
};

// 存储原始边框状态的对象
window.originalBorderStyles = {
    global: null,
    name: null,
    unit: null
};

// 存储线条绘制方向的对象
window.lineEffectDirection = {
    global: 'center-out',
    name: 'center-out',
    unit: 'center-out'
};

// 7. 线条绘制效果 - 更新优化版本
function applyLineEffect(target, direction) {
    console.log('应用线条绘制效果到', target, '方向:', direction);
    
    // 如果提供了方向参数，更新方向设置
    if (direction) {
        window.lineEffectDirection[target] = direction;
    }
    
    // 切换线条绘制状态
    window.lineEffectStatus[target] = !window.lineEffectStatus[target];
    
    // 如果已经有正在运行的动画，停止它
    if (window.lineEffectTimelines[target]) {
        window.lineEffectTimelines[target].kill();
        window.lineEffectTimelines[target] = null;
    }
    
    // 更新效果按钮样式
    const effectBtn = document.querySelector(`button.effect-btn[onclick*="applyLineEffect('${target}')"]`);
    if (effectBtn) {
        effectBtn.classList.toggle('active', window.lineEffectStatus[target]);
    }
    
    // 获取当前卡片
    const card = document.querySelector('.name-card');
    if (!card) {
        console.error('找不到名片元素');
        return;
    }
    
    // 获取目标元素
    let targetElement;
    if (target === 'global') {
        targetElement = card;
    } else if (target === 'name') {
        targetElement = card.querySelector('.name-line');
    } else if (target === 'unit') {
        targetElement = card.querySelector('.unit-line');
    }
    
    if (!targetElement) {
        console.error('找不到目标元素', target);
        return;
    }
    
    // 如果关闭线条绘制，恢复原始边框样式并退出
    if (!window.lineEffectStatus[target]) {
        // 清理之前存在的线条
        const existingLines = targetElement.querySelectorAll('.line');
        existingLines.forEach(line => targetElement.removeChild(line));
        
        // 恢复原始边框样式
        restoreOriginalBorder(target, targetElement);
        return;
    }
    
    // 保存当前边框样式，以便稍后恢复
    saveOriginalBorder(target, targetElement);
    
    // 移除当前边框样式
    removeBorder(targetElement);
    
    // 获取目标元素颜色和宽度
    let targetColor;
    let targetWidth = 2; // 默认线条宽度
    
    // 尝试获取边框颜色
    try {
        if (typeof window.getPickrColor === 'function') {
            targetColor = window.getPickrColor(target + 'BorderPicker');
            console.log('使用主应用getPickrColor获取颜色:', targetColor);
        } else {
            targetColor = getElementColor(targetElement, 'border');
            console.log('使用getElementColor获取颜色:', targetColor);
        }
    } catch (error) {
        console.error('获取颜色时出错:', error);
        targetColor = getElementColor(targetElement, 'border');
    }
    
    // 尝试获取边框宽度
    const widthInput = document.getElementById(target + 'BorderWidth');
    if (widthInput && !isNaN(parseInt(widthInput.value))) {
        targetWidth = parseInt(widthInput.value);
    } else {
        // 尝试从计算样式获取宽度
        const computedStyle = window.getComputedStyle(targetElement);
        const borderWidth = parseInt(computedStyle.borderWidth);
        if (!isNaN(borderWidth)) {
            targetWidth = borderWidth;
        }
    }
    
    // 确保线条宽度至少为1px
    if (targetWidth < 1) targetWidth = 1;
    console.log('线条粗细:', targetWidth + 'px');
    
    // 清理之前可能存在的线条
    const existingLines = targetElement.querySelectorAll('.line');
    existingLines.forEach(line => targetElement.removeChild(line));
    
    // 设置目标元素定位，确保线条正确定位
    if (window.getComputedStyle(targetElement).position === 'static') {
        targetElement.style.position = 'relative';
    }
    
    // 确保有颜色 - 如果没有从选择器获取到颜色，则使用边框颜色
    if (!targetColor) {
        targetColor = getElementColor(targetElement, 'border');
        console.log('从元素获取边框颜色:', targetColor);
    } else {
        console.log('从选择器获取边框颜色:', targetColor);
    }
    
    // 获取边框配置
    let borderConfig = null;
    if (window.styleConfig && window.styleConfig[target + 'Border']) {
        borderConfig = window.styleConfig[target + 'Border'];
        console.log(`使用边框配置:`, borderConfig);
    }
    
    // 根据边框配置决定要绘制哪些边
    const drawBorders = {
        top: true,
        right: true,
        bottom: true,
        left: true
    };
    
    // 如果有边框配置，根据配置绘制
    if (borderConfig) {
        // 如果设置了'none'，则不绘制任何边框
        if (borderConfig.style === 'none') {
            drawBorders.top = drawBorders.right = drawBorders.bottom = drawBorders.left = false;
        } 
        // 如果不是'all'，则检查每个边
        else if (borderConfig.style !== 'all') {
            drawBorders.top = borderConfig.top;
            drawBorders.right = borderConfig.right;
            drawBorders.bottom = borderConfig.bottom;
            drawBorders.left = borderConfig.left;
        }
        // 如果是'all'，则所有边都绘制，默认值已经是true
    }
    
    console.log(`将绘制边框:`, drawBorders);
    
    // 创建一个容器来保存所有线条，便于管理
    const linesContainer = document.createElement('div');
    linesContainer.className = 'line-container';
    linesContainer.style.position = 'absolute';
    linesContainer.style.top = '0';
    linesContainer.style.left = '0';
    linesContainer.style.width = '100%';
    linesContainer.style.height = '100%';
    linesContainer.style.pointerEvents = 'none';
    linesContainer.style.zIndex = '10';
    targetElement.appendChild(linesContainer);
    
    // 创建线条
    const lines = [];
    
    // 根据方向配置线条初始位置
    const direction = window.lineEffectDirection[target] || 'center-out';
    
    // 只创建需要绘制的边
    if (drawBorders.top) {
        const topLine = document.createElement('div');
        topLine.className = 'line line-top';
        topLine.style.height = `${targetWidth}px`;
        topLine.style.width = '0';
        topLine.style.backgroundColor = targetColor;
        topLine.style.position = 'absolute';
        topLine.style.top = '0';
        
        // 根据方向设置初始位置
        if (direction === 'left-to-right') {
            topLine.style.left = '0';
        } else if (direction === 'right-to-left') {
            topLine.style.right = '0';
        } else { // center-out
            topLine.style.left = '50%';
        }
        
        linesContainer.appendChild(topLine);
        lines.push(topLine);
    }
    
    if (drawBorders.right) {
        const rightLine = document.createElement('div');
        rightLine.className = 'line line-right';
        rightLine.style.width = `${targetWidth}px`;
        rightLine.style.height = '0';
        rightLine.style.backgroundColor = targetColor;
        rightLine.style.position = 'absolute';
        rightLine.style.right = '0';
        
        // 根据方向设置初始位置
        if (direction === 'left-to-right' || direction === 'right-to-left') {
            rightLine.style.top = '0';
        } else { // center-out
            rightLine.style.top = '50%';
        }
        
        linesContainer.appendChild(rightLine);
        lines.push(rightLine);
    }
    
    if (drawBorders.bottom) {
        const bottomLine = document.createElement('div');
        bottomLine.className = 'line line-bottom';
        bottomLine.style.height = `${targetWidth}px`;
        bottomLine.style.width = '0';
        bottomLine.style.backgroundColor = targetColor;
        bottomLine.style.position = 'absolute';
        bottomLine.style.bottom = '0';
        
        // 根据方向设置初始位置
        if (direction === 'left-to-right') {
            bottomLine.style.left = '0';
        } else if (direction === 'right-to-left') {
            bottomLine.style.right = '0';
        } else { // center-out
            bottomLine.style.left = '50%';
        }
        
        linesContainer.appendChild(bottomLine);
        lines.push(bottomLine);
    }
    
    if (drawBorders.left) {
        const leftLine = document.createElement('div');
        leftLine.className = 'line line-left';
        leftLine.style.width = `${targetWidth}px`;
        leftLine.style.height = '0';
        leftLine.style.backgroundColor = targetColor;
        leftLine.style.position = 'absolute';
        leftLine.style.left = '0';
        
        // 根据方向设置初始位置
        if (direction === 'left-to-right' || direction === 'right-to-left') {
            leftLine.style.top = '0';
        } else { // center-out
            leftLine.style.top = '50%';
        }
        
        linesContainer.appendChild(leftLine);
        lines.push(leftLine);
    }
    
    // 如果没有线条要绘制，直接返回
    if (lines.length === 0) {
        console.log('没有边框需要绘制');
        linesContainer.remove();
        return;
    }
    
    // 检查是否为闭合线条（四边都有）
    const isClosedBorder = drawBorders.top && drawBorders.right && drawBorders.bottom && drawBorders.left;
    
    // 创建循环动画
    const createLineAnimation = function() {
        // 重置所有线条属性
        lines.forEach(line => {
            // 重置线条属性
            if (line.className.includes('line-top') || line.className.includes('line-bottom')) {
                line.style.width = '0';
                
                // 根据方向重置位置
                if (direction === 'left-to-right') {
                    line.style.left = '0';
                    line.style.right = 'auto';
                    line.style.transform = 'none';
                } else if (direction === 'right-to-left') {
                    line.style.right = '0';
                    line.style.left = 'auto';
                    line.style.transform = 'none';
                } else { // center-out
                    line.style.left = '50%';
                    line.style.right = 'auto';
                    line.style.transform = 'translateX(0)';
                }
            } else { // 左右线条
                line.style.height = '0';
                
                // 根据方向重置位置
                if (direction === 'left-to-right' || direction === 'right-to-left') {
                    line.style.top = '0';
                    line.style.bottom = 'auto';
                    line.style.transform = 'none';
                } else { // center-out
                    line.style.top = '50%';
                    line.style.bottom = 'auto';
                    line.style.transform = 'translateY(0)';
                }
            }
            line.style.opacity = '1';
        });
        
        // 创建新的时间线
        const tl = gsap.timeline({
            repeat: -1, // -1表示无限循环
            repeatDelay: 0.8, // 每次循环之间的延迟
            yoyo: !isClosedBorder, // 如果不是闭合边框，则使用yoyo效果（来回动画）
            onRepeat: function() {
                // 重新检查状态，如果状态已关闭，则停止动画
                if (!window.lineEffectStatus[target]) {
                    this.kill();
                    if (linesContainer.parentNode) {
                        linesContainer.parentNode.removeChild(linesContainer);
                    }
                    restoreOriginalBorder(target, targetElement);
                }
            }
        });
        
        // 存储时间线引用
        window.lineEffectTimelines[target] = tl;
        
        // 执行动画 - 只对创建的线条执行动画
        if (drawBorders.top && lines.find(line => line.className.includes('line-top'))) {
            const topLine = lines.find(line => line.className.includes('line-top'));
            
            if (direction === 'left-to-right') {
                tl.to(topLine, {
                    width: '100%',
                    duration: 0.4,
                    ease: "power3.inOut"
                });
            } else if (direction === 'right-to-left') {
                tl.to(topLine, {
                    width: '100%',
                    duration: 0.4,
                    ease: "power3.inOut"
                });
            } else { // center-out
                tl.to(topLine, {
                    width: '100%',
                    x: '-50%',
                    duration: 0.4,
                    ease: "power3.inOut"
                });
            }
        }
        
        if (drawBorders.right && lines.find(line => line.className.includes('line-right'))) {
            const rightLine = lines.find(line => line.className.includes('line-right'));
            
            if (direction === 'left-to-right' || direction === 'right-to-left') {
                tl.to(rightLine, {
                    height: '100%',
                    duration: 0.4,
                    ease: "power3.inOut"
                }, drawBorders.top ? "-=0.3" : "");
            } else { // center-out
                tl.to(rightLine, {
                    height: '100%',
                    y: '-50%',
                    duration: 0.4,
                    ease: "power3.inOut"
                }, drawBorders.top ? "-=0.3" : "");
            }
        }
        
        if (drawBorders.bottom && lines.find(line => line.className.includes('line-bottom'))) {
            const bottomLine = lines.find(line => line.className.includes('line-bottom'));
            
            if (direction === 'left-to-right') {
                tl.to(bottomLine, {
                    width: '100%',
                    duration: 0.4,
                    ease: "power3.inOut"
                }, (drawBorders.top || drawBorders.right) ? "-=0.3" : "");
            } else if (direction === 'right-to-left') {
                tl.to(bottomLine, {
                    width: '100%',
                    duration: 0.4,
                    ease: "power3.inOut"
                }, (drawBorders.top || drawBorders.right) ? "-=0.3" : "");
            } else { // center-out
                tl.to(bottomLine, {
                    width: '100%',
                    x: '-50%',
                    duration: 0.4,
                    ease: "power3.inOut"
                }, (drawBorders.top || drawBorders.right) ? "-=0.3" : "");
            }
        }
        
        if (drawBorders.left && lines.find(line => line.className.includes('line-left'))) {
            const leftLine = lines.find(line => line.className.includes('line-left'));
            
            if (direction === 'left-to-right' || direction === 'right-to-left') {
                tl.to(leftLine, {
                    height: '100%',
                    duration: 0.4,
                    ease: "power3.inOut"
                }, (drawBorders.top || drawBorders.right || drawBorders.bottom) ? "-=0.3" : "");
            } else { // center-out
                tl.to(leftLine, {
                    height: '100%',
                    y: '-50%',
                    duration: 0.4,
                    ease: "power3.inOut"
                }, (drawBorders.top || drawBorders.right || drawBorders.bottom) ? "-=0.3" : "");
            }
        }
        
        // 对于闭合边框，添加消失动画；对于非闭合边框，yoyo效果会自动处理
        if (isClosedBorder) {
            tl.to(lines, {
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "power2.in",
                delay: 0.5
            });
        }
        
        return tl;
    };
    
    // 启动循环动画
    createLineAnimation();
}

// 设置线条绘制方向
function setLineDirection(target, direction) {
    if (['center-out', 'left-to-right', 'right-to-left'].includes(direction)) {
        window.lineEffectDirection[target] = direction;
        
        // 如果当前有激活的动画，重新应用以使用新方向
        if (window.lineEffectStatus[target]) {
            // 临时保存状态
            const active = window.lineEffectStatus[target];
            // 关闭动画
            applyLineEffect(target);
            // 确保状态恢复为false
            window.lineEffectStatus[target] = false;
            // 重新启动动画，使用新方向
            applyLineEffect(target, direction);
        }
    } else {
        console.error('无效的方向值:', direction);
    }
}

// 保存原始边框样式
function saveOriginalBorder(target, element) {
    if (!element) return;
    
    // 保存当前样式
    window.originalBorderStyles[target] = {
        borderTopWidth: element.style.borderTopWidth,
        borderRightWidth: element.style.borderRightWidth,
        borderBottomWidth: element.style.borderBottomWidth,
        borderLeftWidth: element.style.borderLeftWidth,
        borderTopStyle: element.style.borderTopStyle,
        borderRightStyle: element.style.borderRightStyle,
        borderBottomStyle: element.style.borderBottomStyle,
        borderLeftStyle: element.style.borderLeftStyle,
        borderTopColor: element.style.borderTopColor,
        borderRightColor: element.style.borderRightColor,
        borderBottomColor: element.style.borderBottomColor,
        borderLeftColor: element.style.borderLeftColor
    };
}

// 移除边框样式
function removeBorder(element) {
    if (!element) return;
    
    // 移除所有边框
    element.style.borderTopWidth = '0';
    element.style.borderRightWidth = '0';
    element.style.borderBottomWidth = '0';
    element.style.borderLeftWidth = '0';
    element.style.borderTopStyle = 'none';
    element.style.borderRightStyle = 'none';
    element.style.borderBottomStyle = 'none';
    element.style.borderLeftStyle = 'none';
}

// 恢复原始边框样式
function restoreOriginalBorder(target, element) {
    if (!element || !window.originalBorderStyles[target]) return;
    
    // 恢复原始样式
    const style = window.originalBorderStyles[target];
    element.style.borderTopWidth = style.borderTopWidth;
    element.style.borderRightWidth = style.borderRightWidth;
    element.style.borderBottomWidth = style.borderBottomWidth;
    element.style.borderLeftWidth = style.borderLeftWidth;
    element.style.borderTopStyle = style.borderTopStyle;
    element.style.borderRightStyle = style.borderRightStyle;
    element.style.borderBottomStyle = style.borderBottomStyle;
    element.style.borderLeftStyle = style.borderLeftStyle;
    element.style.borderTopColor = style.borderTopColor;
    element.style.borderRightColor = style.borderRightColor;
    element.style.borderBottomColor = style.borderBottomColor;
    element.style.borderLeftColor = style.borderLeftColor;
    
    // 重置保存的样式
    window.originalBorderStyles[target] = null;
}

// 8. 光效扫过文字效果 - 更新优化版本
function applyFlareTextEffect(target) {
    console.log('应用光效扫过到', target);
    
    // 获取目标元素
    let targetElement;
    
    if (target === 'name') {
        targetElement = document.querySelector('.name-line');
    } else if (target === 'unit') {
        targetElement = document.querySelector('.unit-line');
    }
    
    if (!targetElement) {
        console.error('找不到目标元素', target);
        return;
    }
    
    // 检查是否已有光效，若有则移除
    const existingFlare = targetElement.querySelector('.flare');
    if (existingFlare) {
        targetElement.removeChild(existingFlare);
    }
    
    // 设置目标元素定位，确保光效正确定位
    const computedStyle = window.getComputedStyle(targetElement);
    if (computedStyle.position === 'static') {
        targetElement.style.position = 'relative';
    }
    
    // 创建光效 - 使用白色半透明
    const flare = document.createElement('div');
    flare.className = 'flare';
    flare.style.width = '50px'; // 文字光效窄一些
    flare.style.position = 'absolute';
    flare.style.height = '100%';
    flare.style.top = '0';
    flare.style.left = '-150px';
    flare.style.pointerEvents = 'none';
    flare.style.zIndex = '10';
    flare.style.transform = 'skewX(-30deg)';
    
    // 使用白色半透明的光效
    flare.style.background = 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)';
    
    targetElement.appendChild(flare);
    
    // 创建动画时间线
    const tl = gsap.timeline({
        onComplete: function() {
            // 动画完成后移除光效
            if (targetElement.contains(flare)) {
                targetElement.removeChild(flare);
            }
        }
    });
    
    // 执行动画
    tl.to(flare, {
        x: targetElement.offsetWidth + 100,
        duration: 1,
        ease: "power2.inOut",
        repeat: 1,
        repeatDelay: 0.2
    });
} 