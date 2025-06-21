// 核心功能JS文件
// 包含初始化、全局配置和核心功能

// 全局存储Pickr实例的对象
window.pickrInstances = {};

// 全局变量存储当前背景模式
window.backgroundMode = 'light';

// 全局存储Excel数据
window.excelData = [];

// 创建一个全局的样式配置对象
window.styleConfig = {
    global: {
        bgColor: '#ffffff',
        gradient: 'none',
        borderStyle: 'none',
        borderColor: '#cccccc',
        borderWidth: '1',
        textAlign: 'center'
    },
    number: {
        bgColor: 'transparent',
        gradient: 'none',
        borderStyle: 'none',
        borderColor: '#cccccc',
        borderWidth: '1',
        textColor: '#000000',
        fontFamily: '微软雅黑',
        fontSize: '24',
        fontWeight: 'normal',
        fontStyle: 'normal',
        textDecoration: 'none',
        strokeWidth: '0',
        strokeColor: '#000000',
        shadowColor: '#000000',
        shadowX: '0',
        shadowY: '0',
        shadowBlur: '0',
        borderRadius: '0',
        skewAngle: '0',
        borderGradient: 'none',
        borderGradientStartColor: '#cccccc',
        borderGradientEndColor: '#000000'
    },
    name: {
        bgColor: 'transparent',
        gradient: 'none',
        borderStyle: 'none',
        borderColor: '#cccccc',
        borderWidth: '1',
        textColor: '#000000',
        fontFamily: '微软雅黑',
        fontSize: '32',
        fontWeight: 'normal',
        fontStyle: 'normal',
        textDecoration: 'none',
        strokeWidth: '0',
        strokeColor: '#000000',
        shadowColor: '#000000',
        shadowX: '0',
        shadowY: '0',
        shadowBlur: '0',
        borderRadius: '0',
        skewAngle: '0',
        borderGradient: 'none',
        borderGradientStartColor: '#cccccc',
        borderGradientEndColor: '#000000'
    },
    unit: {
        bgColor: 'transparent',
        gradient: 'none',
        borderStyle: 'none',
        borderColor: '#cccccc',
        borderWidth: '1',
        textColor: '#000000',
        fontFamily: '微软雅黑',
        fontSize: '20',
        fontWeight: 'normal',
        fontStyle: 'normal',
        textDecoration: 'none',
        strokeWidth: '0',
        strokeColor: '#000000',
        shadowColor: '#000000',
        shadowX: '0',
        shadowY: '0',
        shadowBlur: '0',
        borderRadius: '0',
        skewAngle: '0',
        borderGradient: 'none',
        borderGradientStartColor: '#cccccc',
        borderGradientEndColor: '#000000'
    },
    direction: 'horizontal',
    columnOrder: 'ltr',
    verticalAlign: 'middle',
    lineGap: '0'
};

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 初始化全局样式配置对象
    window.styleConfig = {
        textAlign: 'left',
        textDirection: 'horizontal',
        columnOrder: 'ltr',
        verticalAlign: 'middle', // Default vertical alignment for vertical text
        textStyles: {
            number: { bold: false, italic: false, underline: false },
            name: { bold: false, italic: false, underline: false },
            unit: { bold: false, italic: false, underline: false }
        },
        // Border configuration structure
        globalBorder: {
            style: 'all', // 'none', 'all', 'custom'
            top: true,
            bottom: true,
            left: true,
            right: true,
        },
        numberBorder: {
            style: 'none',
            top: false,
            bottom: false,
            left: false,
            right: false,
        },
        nameBorder: {
            style: 'none',
            top: false,
            bottom: false,
            left: false,
            right: false,
        },
        unitBorder: {
            style: 'none',
            top: false,
            bottom: false,
            left: false,
            right: false,
        }
    };
    
    // 添加流光动画样式
    addShimmerAnimation();
    
    // 初始化Pickr颜色选择器
    initPickrColorPickers();
    
    // 修复Excel文件上传处理
    const excelFile = document.getElementById('excelFile');
    if (excelFile) {
        excelFile.addEventListener('change', handleFixedExcelFile);
    }
    
    // 添加样式监听器，确保即时更新
    document.querySelectorAll('input[type="color"], select, input[type="number"]').forEach(element => {
        element.addEventListener('change', function() {
            updateIfDataLoaded();
        });
        
        // 为number类型添加input事件，实现实时更新
        if (element.type === 'number') {
            element.addEventListener('input', function() {
                updateIfDataLoaded();
            });
        }
    });
    
    // 监听字体样式按钮点击
    document.querySelectorAll('.icon-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            setTimeout(updateIfDataLoaded, 50);
        });
    });
    
    // 设置默认按钮状态
    const alignLeftBtn = document.getElementById('alignLeftBtn');
    if (alignLeftBtn) alignLeftBtn.classList.add('active');
    
    const directionHorizontalBtn = document.getElementById('directionHorizontalBtn');
    if (directionHorizontalBtn) directionHorizontalBtn.classList.add('active');
    
    // 初始化列排序按钮可见性和状态
    const columnOrderControls = document.querySelector('.column-order-controls');
    if (columnOrderControls) {
        // 默认为横排模式，隐藏列排序按钮
        columnOrderControls.style.display = 'none';
        
        // 确保左到右按钮默认激活
        const ltrBtn = document.getElementById('columnOrderLeftToRightBtn');
        const rtlBtn = document.getElementById('columnOrderRightToLeftBtn');
        
        // 从styleConfig中获取当前的列排序方式（如果已设置）
        const currentOrder = window.styleConfig.columnOrder || 'ltr';
        
        // 根据当前的列排序方式设置按钮状态
        if (ltrBtn) ltrBtn.classList.toggle('active', currentOrder === 'ltr');
        if (rtlBtn) rtlBtn.classList.toggle('active', currentOrder === 'rtl');
    }
    
    // 确保window.styleConfig中的列排序设置正确初始化
    if (!window.styleConfig.columnOrder) {
        window.styleConfig.columnOrder = 'ltr';
    }
    
    // 初始化Dark/Light模式按钮事件监听器
    initBackgroundModeButtons();

    // Initialize border button states
    ['global', 'number', 'name', 'unit'].forEach(target => {
        updateBorderButtonStates(target);
    });
});

// 更新数据函数 - 在数据加载后使用
function updateIfDataLoaded() {
    if (window.excelData && window.excelData.length > 0) {
        generateFixedNameCards();
    } else {
        console.warn('没有数据可用，请先上传Excel文件');
    }
}

// 初始化背景模式按钮
function initBackgroundModeButtons() {
    // 监听Dark按钮点击
    const darkModeBtn = document.getElementById('darkModeBtn');
    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', function() {
            setBackgroundMode('dark');
        });
    }
    
    // 监听Light按钮点击
    const lightModeBtn = document.getElementById('lightModeBtn');
    if (lightModeBtn) {
        lightModeBtn.addEventListener('click', function() {
            setBackgroundMode('light');
        });
    }
}

// 设置背景模式（dark或light）
window.setBackgroundMode = function(mode) {
    if (mode !== 'dark' && mode !== 'light') return;
    
    window.backgroundMode = mode;
    
    // 获取容器元素
    const container = document.getElementById('container');
    if (!container) return;
    
    // 清除当前模式类
    container.classList.remove('dark-mode', 'light-mode');
    
    // 添加新模式类
    container.classList.add(`${mode}-mode`);
    
    // 更新按钮状态
    const darkModeBtn = document.getElementById('darkModeBtn');
    const lightModeBtn = document.getElementById('lightModeBtn');
    
    if (darkModeBtn) darkModeBtn.classList.toggle('active', mode === 'dark');
    if (lightModeBtn) lightModeBtn.classList.toggle('active', mode === 'light');
    
    // 只更新container的背景色，不影响卡片样式
    if (mode === 'dark') {
        container.style.backgroundColor = '#e0e0e0'; // 浅灰色背景
    } else {
        container.style.backgroundColor = '#ffffff'; // 白色背景
    }
};

// 添加动画样式
function addShimmerAnimation() {
    // 如果已存在，不重复添加
    if (document.getElementById('shimmer-animation-style')) {
        return;
    }
    
    const style = document.createElement('style');
    style.id = 'shimmer-animation-style';
    style.textContent = `
        @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
        }
    `;
    document.head.appendChild(style);
}

// 切换文字样式
window.toggleTextStyle = function(style, column) {
    if (!window.styleConfig) {
        console.error('styleConfig对象未初始化');
        return;
    }
    
    if (!window.styleConfig.textStyles) {
        window.styleConfig.textStyles = {};
    }
    
    if (!window.styleConfig.textStyles[column]) {
        window.styleConfig.textStyles[column] = { bold: false, italic: false, underline: false };
    }
    
    // 切换样式状态
    window.styleConfig.textStyles[column][style] = !window.styleConfig.textStyles[column][style];
    
    // 同步按钮激活状态
    const btnId = column + style.charAt(0).toUpperCase() + style.slice(1) + 'Btn';
    const btn = document.getElementById(btnId);
    if (btn) {
        btn.classList.toggle('active', window.styleConfig.textStyles[column][style]);
    } else {
        console.warn(`找不到对应的按钮元素: ${btnId}`);
    }
    
    // 应用样式更改
    updateIfDataLoaded();
};

// 设置文本对齐方式
window.setTextAlign = function(align) {
    if (!window.styleConfig) {
        console.error('styleConfig对象未初始化');
        return;
    }
    
    window.styleConfig.textAlign = align;
    
    // 更新按钮状态
    const leftBtn = document.getElementById('alignLeftBtn');
    const centerBtn = document.getElementById('alignCenterBtn');
    const rightBtn = document.getElementById('alignRightBtn');
    
    if (leftBtn) leftBtn.classList.toggle('active', align === 'left');
    if (centerBtn) centerBtn.classList.toggle('active', align === 'center');
    if (rightBtn) rightBtn.classList.toggle('active', align === 'right');
    
    // 更新卡片
    updateIfDataLoaded();
};

// Toggle Border Style Function
window.toggleBorderStyle = function(target, side) {
    const borderConfig = window.styleConfig[target + 'Border'];
    if (!borderConfig) return;

    const sides = ['top', 'bottom', 'left', 'right'];

    if (side === 'none') {
        borderConfig.style = 'none';
        sides.forEach(s => borderConfig[s] = false);
    } else if (side === 'all') {
        // Toggle behavior for 'all'
        if (borderConfig.style === 'all') { // If all is already active, turn it off (to none)
            borderConfig.style = 'none';
            sides.forEach(s => borderConfig[s] = false);
        } else { // Otherwise, activate all
            borderConfig.style = 'all';
            sides.forEach(s => borderConfig[s] = true);
        }
    } else if (sides.includes(side)) {
        borderConfig.style = 'custom';
        borderConfig[side] = !borderConfig[side];
        // Check if all custom sides are now true
        if (sides.every(s => borderConfig[s])) {
            borderConfig.style = 'all';
        } else if (sides.every(s => !borderConfig[s])) {
            // If all custom sides become false by toggling, switch to 'none'
            borderConfig.style = 'none';
        }
    }

    // Update button active states
    updateBorderButtonStates(target);
    updateIfDataLoaded();
};

function updateBorderButtonStates(target) {
    const borderConfig = window.styleConfig[target + 'Border'];
    if (!borderConfig) return;

    document.getElementById(target + 'BorderNoneBtn').classList.toggle('active', borderConfig.style === 'none');
    document.getElementById(target + 'BorderAllBtn').classList.toggle('active', borderConfig.style === 'all');

    const sides = ['Top', 'Bottom', 'Left', 'Right'];
    sides.forEach(s => {
        const btn = document.getElementById(target + 'Border' + s + 'Btn');
        if (btn) {
            // Individual side buttons are active if their state is true AND style is 'custom' or 'all' (implicitly true for 'all')
            btn.classList.toggle('active', borderConfig[s.toLowerCase()] && (borderConfig.style === 'custom' || borderConfig.style === 'all') );
        }
    });
}

// 工具函数：从Pickr获取颜色值
function getPickrColor(pickerId) {
    if (!window.pickrInstances[pickerId]) {
        console.error('找不到颜色选择器实例:', pickerId);
        return '#000000';
    }
    
    const pickr = window.pickrInstances[pickerId];
    if (!pickr.getSelectedColor()) {
        // 如果没有选择颜色，返回默认颜色
        return pickr._representation === 'HEXA' ? '#00000000' : '#000000';
    }
    
    return pickr.getColor().toHEXA().toString();
}

// 应用渐变背景
function applyGradient(element, gradientType) {
    // 清除之前的渐变叠加层
    const existingOverlay = element.querySelector('.gradient-overlay');
    if (existingOverlay) {
        element.removeChild(existingOverlay);
    }

    if (!gradientType || gradientType === 'none') {
        return;
    }

    // 创建渐变叠加层
    const overlay = document.createElement('div');
    overlay.className = 'gradient-overlay';
    overlay.style.position = 'absolute';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.pointerEvents = 'none';
    overlay.style.zIndex = '1';

    // 基于选择的渐变类型设置背景
    let background = '';
    let exportBackground = '';

    switch (gradientType) {
        case 'linear-top-bottom':
            background = 'linear-gradient(to bottom, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%)';
            exportBackground = 'linear-gradient(to bottom, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%)';
            break;
        case 'linear-left-right':
            background = 'linear-gradient(to right, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%)';
            exportBackground = 'linear-gradient(to right, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%)';
            break;
        case 'radial':
            background = 'radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%)';
            exportBackground = 'radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%)';
            break;
        case 'shimmer':
            background = 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 100%)';
            exportBackground = 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 100%)';
            overlay.classList.add('shimmer-effect');
            break;
        case 'dark-top-bottom':
            background = 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 100%)';
            exportBackground = 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 100%)';
            break;
        case 'dark-left-right':
            background = 'linear-gradient(to right, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 100%)';
            exportBackground = 'linear-gradient(to right, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 100%)';
            break;
        case 'dark-radial':
            background = 'radial-gradient(circle, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 100%)';
            exportBackground = 'radial-gradient(circle, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 100%)';
            break;
        case 'dark-shimmer':
            background = 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 100%)';
            exportBackground = 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 100%)';
            overlay.classList.add('shimmer-effect');
            break;
    }

    overlay.style.background = background;
    overlay.setAttribute('data-gradient-type', gradientType);
    overlay.setAttribute('data-export-overlay', exportBackground);
    element.appendChild(overlay);
    
    // 确保元素的位置是相对的，以便叠加层正确定位
    if (window.getComputedStyle(element).position === 'static') {
        element.style.position = 'relative';
    }
}

// 处理背景模式切换
function handleBackgroundModeChange(mode) {
    window.backgroundMode = mode;
    
    // 更新body类
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(mode + '-mode');
    
    // 更新容器类
    const container = document.getElementById('container');
    if (container) {
        container.classList.remove('light-mode', 'dark-mode');
        container.classList.add(mode + '-mode');
    }
    
    // 如果已加载数据，重新生成卡片以更新样式
    updateIfDataLoaded();
}

// 设置文本方向（横排/竖排）
function setTextDirection(direction) {
    if (direction !== 'horizontal' && direction !== 'vertical') return;
    
    window.styleConfig.direction = direction;
    
    // 更新按钮状态
    const horizontalBtn = document.getElementById('directionHorizontalBtn');
    const verticalBtn = document.getElementById('directionVerticalBtn');
    
    horizontalBtn.classList.toggle('active', direction === 'horizontal');
    verticalBtn.classList.toggle('active', direction === 'vertical');
    
    // 显示或隐藏列排序控件
    const columnOrderControls = document.querySelector('.column-order-controls');
    if (columnOrderControls) {
        columnOrderControls.style.display = direction === 'vertical' ? 'flex' : 'none';
    }
    
    // 显示或隐藏垂直对齐控件
    const verticalAlignControls = document.querySelector('.vertical-align-controls');
    if (verticalAlignControls) {
        verticalAlignControls.style.display = direction === 'horizontal' ? 'flex' : 'none';
    }
    
    // 更新现有卡片的排列方向
    const cards = document.querySelectorAll('.name-card');
    cards.forEach(card => {
        if (direction === 'vertical') {
            card.classList.remove('horizontal-mode');
            card.classList.add('vertical-mode');
            
            // 应用当前的列排序
            if (window.styleConfig.columnOrder) {
                updateColumnOrder(window.styleConfig.columnOrder);
            }
        } else {
            card.classList.remove('vertical-mode');
            card.classList.add('horizontal-mode');
        }
    });
}

// 设置垂直对齐方式
function setVerticalAlign(align) {
    if (align !== 'top' && align !== 'middle' && align !== 'bottom') return;
    
    window.styleConfig.verticalAlign = align;
    
    // 更新按钮状态
    const topBtn = document.getElementById('verticalAlignTopBtn');
    const middleBtn = document.getElementById('verticalAlignCenterBtn');
    const bottomBtn = document.getElementById('verticalAlignBottomBtn');
    
    topBtn.classList.toggle('active', align === 'top');
    middleBtn.classList.toggle('active', align === 'middle');
    bottomBtn.classList.toggle('active', align === 'bottom');
    
    // 更新现有卡片的垂直对齐方式
    const cards = document.querySelectorAll('.horizontal-mode');
    cards.forEach(card => {
        // 对于横排模式，更新垂直对齐方式
        card.style.alignItems = align === 'top' ? 'flex-start' : (align === 'bottom' ? 'flex-end' : 'center');
    });
}

// 样式配置更改事件处理
window.onStyleConfigChanged = function() {
    // 更新卡片边框样式
    updateCardBorders();
    
    // 更新卡片文本样式
    updateCardTextStyles();
    
    // 更新文本对齐方式
    const cards = document.querySelectorAll('.name-card');
    cards.forEach(card => {
        card.style.textAlign = window.styleConfig.global.textAlign;
    });
    
    // 更新垂直对齐方式（对于横排模式）
    const horizontalCards = document.querySelectorAll('.horizontal-mode');
    horizontalCards.forEach(card => {
        card.style.alignItems = window.styleConfig.verticalAlign === 'top' ? 'flex-start' : 
                              (window.styleConfig.verticalAlign === 'bottom' ? 'flex-end' : 'center');
    });
    
    // 更新行间距
    if (window.styleConfig.lineGap) {
        const lineGap = window.styleConfig.lineGap;
        if (window.styleConfig.direction === 'horizontal') {
            // 对于横排模式，设置行高或间距
            cards.forEach(card => {
                // 根据实际DOM结构实现行间距调整
                const lines = card.querySelectorAll('.text-line');
                lines.forEach(line => {
                    line.style.marginBottom = `${lineGap}px`;
                });
            });
        } else {
            // 对于竖排模式，设置列间距
            const verticalCards = document.querySelectorAll('.vertical-mode');
            verticalCards.forEach(card => {
                // 根据实际DOM结构实现列间距调整
                const columns = Array.from(card.children).filter(child => 
                    child.classList.contains('number-line') || 
                    child.classList.contains('name-line') || 
                    child.classList.contains('unit-line')
                );
                
                columns.forEach((column, index) => {
                    if (index < columns.length - 1) {
                        column.style.marginRight = `${lineGap}px`;
                    }
                });
            });
        }
    }
    
    // 更新全局背景
    cards.forEach(card => {
        card.style.backgroundColor = window.styleConfig.global.bgColor;
        
        // 全局渐变
        if (window.styleConfig.global.gradient && window.styleConfig.global.gradient !== 'none') {
            applyGradientToElement(card, window.styleConfig.global.gradient);
        } else {
            card.style.backgroundImage = 'none';
        }
    });
};

// 更新卡片边框样式
function updateCardBorders() {
    const cards = document.querySelectorAll('.name-card');
    
    cards.forEach(card => {
        // 更新全局边框样式
        const globalStyle = window.styleConfig.global.borderStyle;
        const globalColor = window.styleConfig.global.borderColor;
        const globalWidth = window.styleConfig.global.borderWidth;
        
        // 重置所有边框
        card.style.borderTop = 'none';
        card.style.borderBottom = 'none';
        card.style.borderLeft = 'none';
        card.style.borderRight = 'none';
        card.style.border = 'none';
        
        // 应用全局边框样式
        if (globalStyle === 'all') {
            card.style.border = `${globalWidth}px solid ${globalColor}`;
        } else if (globalStyle === 'bottom') {
            card.style.borderBottom = `${globalWidth}px solid ${globalColor}`;
        } else if (globalStyle === 'top') {
            card.style.borderTop = `${globalWidth}px solid ${globalColor}`;
        } else if (globalStyle === 'left') {
            card.style.borderLeft = `${globalWidth}px solid ${globalColor}`;
        } else if (globalStyle === 'right') {
            card.style.borderRight = `${globalWidth}px solid ${globalColor}`;
        }
        
        // 更新各元素边框样式
        updateElementBorders(card, 'number');
        updateElementBorders(card, 'name');
        updateElementBorders(card, 'unit');
    });
}

// 更新特定元素的边框样式
function updateElementBorders(card, element) {
    const elementLines = card.querySelectorAll(`.${element}-line`);
    
    elementLines.forEach(line => {
        // 重置该元素的边框
        line.style.borderTop = 'none';
        line.style.borderBottom = 'none';
        line.style.borderLeft = 'none';
        line.style.borderRight = 'none';
        line.style.border = 'none';
        
        // 应用配置的边框样式
        const style = window.styleConfig[element].borderStyle;
        const color = window.styleConfig[element].borderColor;
        const width = window.styleConfig[element].borderWidth;
        
        if (style === 'all') {
            line.style.border = `${width}px solid ${color}`;
        } else if (style === 'bottom') {
            line.style.borderBottom = `${width}px solid ${color}`;
        } else if (style === 'top') {
            line.style.borderTop = `${width}px solid ${color}`;
        } else if (style === 'left') {
            line.style.borderLeft = `${width}px solid ${color}`;
        } else if (style === 'right') {
            line.style.borderRight = `${width}px solid ${color}`;
        }
        
        // 应用圆角
        if (window.styleConfig[element].borderRadius) {
            line.style.borderRadius = window.styleConfig[element].borderRadius + 'px';
        }
        
        // 应用变形（斜角）
        if (window.styleConfig[element].skewAngle && window.styleConfig[element].skewAngle !== '0') {
            line.style.transform = `skew(${window.styleConfig[element].skewAngle}deg)`;
        } else {
            line.style.transform = 'none';
        }
    });
}

// 更新卡片文本样式
function updateCardTextStyles() {
    const cards = document.querySelectorAll('.name-card');
    
    cards.forEach(card => {
        updateElementTextStyles(card, 'number');
        updateElementTextStyles(card, 'name');
        updateElementTextStyles(card, 'unit');
    });
}

// 更新特定元素的文本样式
function updateElementTextStyles(card, element) {
    const elementLines = card.querySelectorAll(`.${element}-line`);
    
    elementLines.forEach(line => {
        const config = window.styleConfig[element];
        
        // 更新背景颜色
        line.style.backgroundColor = config.bgColor;
        
        // 更新渐变背景
        if (config.gradient && config.gradient !== 'none') {
            // 处理渐变背景，根据实际情况实现
            applyGradientToElement(line, config.gradient);
        } else {
            // 清除渐变
            line.style.backgroundImage = 'none';
        }
        
        // 更新文本颜色和字体
        line.style.color = config.textColor;
        line.style.fontFamily = config.fontFamily;
        line.style.fontSize = config.fontSize + 'px';
        
        // 更新文本装饰
        line.style.fontWeight = config.fontWeight;
        line.style.fontStyle = config.fontStyle;
        line.style.textDecoration = config.textDecoration;
        
        // 更新文本描边效果
        if (config.strokeWidth && config.strokeWidth !== '0') {
            const strokeColor = config.strokeColor || '#000';
            line.style.webkitTextStroke = `${config.strokeWidth}px ${strokeColor}`;
            line.style.textStroke = `${config.strokeWidth}px ${strokeColor}`;
        } else {
            line.style.webkitTextStroke = 'none';
            line.style.textStroke = 'none';
        }
        
        // 更新文本阴影
        if (config.shadowBlur && config.shadowBlur !== '0') {
            line.style.textShadow = `${config.shadowX}px ${config.shadowY}px ${config.shadowBlur}px ${config.shadowColor}`;
        } else {
            line.style.textShadow = 'none';
        }
    });
}

// 应用渐变到元素
function applyGradientToElement(element, gradientType) {
    switch (gradientType) {
        case 'tech-blue':
            element.style.backgroundImage = 'linear-gradient(to right, rgba(22,93,255,0.8), rgba(123,97,255,0.8))';
            break;
        case 'vibrant-orange':
            element.style.backgroundImage = 'linear-gradient(to right, #e67e22, #f39c12)';
            break;
        case 'dream-purple':
            element.style.backgroundImage = 'linear-gradient(to right, #8e44ad, #9b59b6)';
            break;
        case 'nature-green':
            element.style.backgroundImage = 'linear-gradient(to right, #27ae60, #2ecc71)';
            break;
        case 'glass-effect':
            element.style.backgroundImage = 'linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3))';
            break;
        case 'dynamic-flow':
            element.style.backgroundImage = 'linear-gradient(to right, #3498db, #2ecc71, #f1c40f, #e74c3c)';
            element.style.backgroundSize = '300% 100%';
            element.style.animation = 'gradientFlow 5s ease infinite';
            break;
        case 'retro-film':
            element.style.backgroundImage = 'linear-gradient(to right, rgba(50, 50, 50, 0.9), rgba(20, 20, 20, 0.7))';
            break;
        case 'neon-effect':
            element.style.backgroundImage = 'linear-gradient(to right, #ff00cc, #3333cc)';
            // 为霓虹效果添加额外的发光
            element.style.boxShadow = '0 0 10px #ff00cc, 0 0 20px #ff00cc, inset 0 0 10px rgba(51, 51, 204, 0.5)';
            break;
        default:
            element.style.backgroundImage = 'none';
            break;
    }
} 