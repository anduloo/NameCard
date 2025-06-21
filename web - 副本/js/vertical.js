// 竖排布局相关功能

// 设置文本方向（横排/竖排）
window.setTextDirection = function(direction) {
    if (!window.styleConfig) {
        window.styleConfig = {};
    }
    
    // 保存当前方向配置
    window.styleConfig.direction = direction;
    
    // 更新按钮状态
    const horizontalBtn = document.getElementById('directionHorizontalBtn');
    const verticalBtn = document.getElementById('directionVerticalBtn');
    
    if (horizontalBtn) {
        horizontalBtn.classList.toggle('active', direction === 'horizontal');
    }
    
    if (verticalBtn) {
        verticalBtn.classList.toggle('active', direction === 'vertical');
    }
    
    // 控制列排序按钮的可见性
    const columnOrderControls = document.querySelector('.column-order-controls');
    if (columnOrderControls) {
        columnOrderControls.style.display = direction === 'vertical' ? 'flex' : 'none';
        
        // 确保当切换到竖排模式时，列排序按钮状态与当前配置一致
        if (direction === 'vertical') {
            const currentOrder = window.styleConfig.columnOrder || 'ltr';
            const ltrBtn = document.getElementById('columnOrderLeftToRightBtn');
            const rtlBtn = document.getElementById('columnOrderRightToLeftBtn');
            
            if (ltrBtn) ltrBtn.classList.toggle('active', currentOrder === 'ltr');
            if (rtlBtn) rtlBtn.classList.toggle('active', currentOrder === 'rtl');
        }
    }

    // 控制竖排文字垂直对齐按钮的可见性
    const verticalAlignControls = document.querySelector('.vertical-align-controls');
    if (verticalAlignControls) {
        verticalAlignControls.style.display = direction === 'vertical' ? 'flex' : 'none';

        // 确保当切换到竖排模式时，垂直对齐按钮状态与当前配置一致
        if (direction === 'vertical') {
            const currentVerticalAlign = window.styleConfig.verticalAlign || 'middle';
            const topBtn = document.getElementById('verticalAlignTopBtn');
            const centerBtn = document.getElementById('verticalAlignCenterBtn');
            const bottomBtn = document.getElementById('verticalAlignBottomBtn');

            if (topBtn) topBtn.classList.toggle('active', currentVerticalAlign === 'top');
            if (centerBtn) centerBtn.classList.toggle('active', currentVerticalAlign === 'middle');
            if (bottomBtn) bottomBtn.classList.toggle('active', currentVerticalAlign === 'bottom');
        }
    }
    
    // 如果切换到竖排模式，初始化默认值
    if (direction === 'vertical' && !window.styleConfig.columnOrder) {
        window.styleConfig.columnOrder = 'ltr';
    }
    
    if (direction === 'vertical' && !window.styleConfig.verticalAlign) {
        window.styleConfig.verticalAlign = 'middle';
    }
    
    // 应用样式更改
    updateIfDataLoaded();
};

// 设置列排序方向（从左到右/从右到左）
window.updateColumnOrder = function(order) {
    if (order !== 'ltr' && order !== 'rtl') return;
    
    if (!window.styleConfig) {
        window.styleConfig = {};
    }
    
    // 更新配置
    window.styleConfig.columnOrder = order;
    
    // 更新按钮状态
    const ltrBtn = document.getElementById('columnOrderLeftToRightBtn');
    const rtlBtn = document.getElementById('columnOrderRightToLeftBtn');
    
    if (ltrBtn) {
        ltrBtn.classList.toggle('active', order === 'ltr');
    }
    
    if (rtlBtn) {
        rtlBtn.classList.toggle('active', order === 'rtl');
    }
    
    // 找到所有竖排模式的卡片
    const cards = document.querySelectorAll('.vertical-mode');
    
    // 遍历每张卡片，应用列排序
    cards.forEach(card => {
        // 设置排序方向
        if (order === 'rtl') {
            card.style.flexDirection = 'row-reverse';
        } else {
            card.style.flexDirection = 'row';
        }
        
        // 设置卡片的data属性，方便CSS选择器使用
        card.setAttribute('data-column-order', order);
        
        // 重新排序子元素（如果子元素已经存在）
        const columns = Array.from(card.children).filter(el => 
            el.classList.contains('name-line') || 
            el.classList.contains('number-line') || 
            el.classList.contains('unit-line')
        );
        
        // 临时从卡片中移除所有列元素
        columns.forEach(col => card.removeChild(col));
        
        // 确定元素的自然顺序: number, name, unit
        columns.sort((a, b) => {
            const aType = a.classList.contains('number-line') ? 0 : (a.classList.contains('name-line') ? 1 : 2);
            const bType = b.classList.contains('number-line') ? 0 : (b.classList.contains('name-line') ? 1 : 2);
            return aType - bType;
        });
        
        // 如果是RTL排序，反转元素顺序
        if (order === 'rtl') {
            columns.reverse();
        }
        
        // 按照排序后的顺序重新添加元素
        columns.forEach(col => card.appendChild(col));
    });
    
    // 应用样式更改
    updateIfDataLoaded();
};

// 设置竖排文字垂直对齐方式
window.setVerticalAlign = function(align) {
    if (!window.styleConfig) {
        window.styleConfig = {};
    }
    
    // 更新配置
    window.styleConfig.verticalAlign = align;
    
    // 更新按钮状态
    const topBtn = document.getElementById('verticalAlignTopBtn');
    const centerBtn = document.getElementById('verticalAlignCenterBtn');
    const bottomBtn = document.getElementById('verticalAlignBottomBtn');

    if (topBtn) topBtn.classList.toggle('active', align === 'top');
    if (centerBtn) centerBtn.classList.toggle('active', align === 'middle');
    if (bottomBtn) bottomBtn.classList.toggle('active', align === 'bottom');
    
    // 应用样式更改
    updateIfDataLoaded();
};

// 应用水平和垂直对齐样式类
function applyAlignmentClasses(element) {
    if (!element || !window.styleConfig) return;
    
    // 移除所有现有对齐类
    element.classList.remove(
        'text-align-left', 'text-align-center', 'text-align-right',
        'vertical-align-top', 'vertical-align-middle', 'vertical-align-bottom'
    );
    
    // 添加水平对齐类
    const textAlign = window.styleConfig.textAlign || 'left';
    element.classList.add(`text-align-${textAlign}`);
    
    // 添加垂直对齐类
    const verticalAlign = window.styleConfig.verticalAlign || 'middle';
    element.classList.add(`vertical-align-${verticalAlign}`);
}

// 处理竖排模式下的图片自适应
function processVerticalModeImages() {
    // 获取所有竖排模式下的图片
    const verticalModeImages = document.querySelectorAll('.vertical-mode .name-line img, .vertical-mode .number-line img, .vertical-mode .unit-line img');
    
    verticalModeImages.forEach(img => {
        // 设置图片样式
        img.style.maxWidth = '100%';
        img.style.width = 'auto';
        img.style.height = 'auto';
        img.style.display = 'block';
        img.style.margin = '0.25em auto';
        
        // 获取父元素类型
        const parentClasses = img.parentElement.className;
        let maxWidth = '1.5em'; // 默认最大宽度
        
        // 根据父元素类型设置不同的宽度限制
        if (parentClasses.includes('number')) {
            maxWidth = '1.3em';
        } else if (parentClasses.includes('name')) {
            maxWidth = '1.8em';
        } else if (parentClasses.includes('unit')) {
            maxWidth = '1.5em';
        }
        
        img.style.maxWidth = maxWidth;
        
        // 监听图片加载完成事件，调整尺寸
        if (!img.dataset.sizeProcessed) {
            img.dataset.sizeProcessed = 'true';
            img.onload = function() {
                // 获取图片原始尺寸比例
                const ratio = this.naturalWidth / this.naturalHeight;
                
                // 如果图片过宽，限制宽度
                if (ratio > 1) {
                    this.style.maxWidth = '1.3em';
                }
                
                // 重新强制布局计算
                void this.offsetHeight;
            };
            
            // 如果图片已经加载完成，立即调整尺寸
            if (img.complete) {
                img.onload();
            }
        }
    });
}

// 确保所有列高度一致
function equalizeColumnHeights() {
    // 找到所有竖排模式的卡片
    const cards = document.querySelectorAll('.vertical-mode');
    
    cards.forEach(card => {
        // 获取所有列元素
        const columns = Array.from(card.children).filter(el => 
            el.classList.contains('name-line') || 
            el.classList.contains('number-line') || 
            el.classList.contains('unit-line')
        );
        
        if (columns.length === 0) return;
        
        // 重置之前可能设置的固定高度
        columns.forEach(col => {
            col.style.height = '';
        });
        
        // 计算内容的自然高度
        let contentHeight = 0;
        columns.forEach(col => {
            // 获取实际内容高度
            const textHeight = col.scrollHeight;
            contentHeight = Math.max(contentHeight, textHeight);
        });
        
        // 只有当内容有实际高度时才应用，且设置一个合理的最大值
        if (contentHeight > 0) {
            // 添加适当的内边距，但不设置固定的高度值
            const maxHeight = Math.min(contentHeight, 500); // 限制最大高度
            columns.forEach(col => {
                col.style.minHeight = `${maxHeight}px`;
                // 使用flex布局确保内容可以正确对齐
                col.style.display = 'inline-flex';
                col.style.justifyContent = 'center'; // 默认垂直居中
            });
        }
        
        // 应用对齐类
        columns.forEach(col => {
            applyAlignmentClasses(col);
        });
        
        // 确保卡片应用了正确的列排序
        const columnOrder = window.styleConfig.columnOrder || 'ltr';
        if (columnOrder === 'rtl') {
            card.style.flexDirection = 'row-reverse';
        } else {
            card.style.flexDirection = 'row';
        }
        card.setAttribute('data-column-order', columnOrder);
    });
} 