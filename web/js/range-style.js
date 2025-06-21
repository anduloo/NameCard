// 存储范围样式状态
const rangeStyleState = {
    name: {
        bold: false,
        ranges: [] // 存储所有范围样式设置
    }
};

// 添加一个标志来防止样式循环更新
let isUpdatingStyles = false;

// 切换范围文字样式
function toggleRangeTextStyle(style, column) {
    if (style !== 'bold') return; // 只处理粗体
    
    const btn = document.getElementById(`${column}RangeBoldBtn`);
    if (btn) {
        btn.classList.toggle('active');
        // 立即应用样式
        applyRangeStyle(column);
    }
}

// 保存当前文本内容
function saveTextContent(element) {
    return element.innerHTML;
}

// 恢复保存的文本内容
function restoreTextContent(element, savedContent) {
    if (savedContent) {
        element.innerHTML = savedContent;
    }
}

// 应用范围样式
function applyRangeStyle(column) {
    if (isUpdatingStyles) return;
    isUpdatingStyles = true;

    try {
        const start = parseInt(document.getElementById(`${column}RangeStart`).value);
        const end = parseInt(document.getElementById(`${column}RangeEnd`).value);
        const fontSize = parseInt(document.getElementById(`${column}RangeFontSize`).value);
        const isBold = document.getElementById(`${column}RangeBoldBtn`).classList.contains('active');
        
        if (isNaN(start) || isNaN(end) || isNaN(fontSize)) {
            alert('请输入有效的数字！');
            return;
        }
        
        if (start > end) {
            alert('起始位置不能大于结束位置！');
            return;
        }
        
        // 获取所有卡片
        const cards = document.querySelectorAll('.name-card');
        
        cards.forEach(card => {
            const textElement = card.querySelector(`.${column}-line`);
            if (!textElement) return;
            
            const text = textElement.textContent;
            if (!text) return;
            
            // 创建新的HTML内容
            let newContent = '';
            for (let i = 0; i < text.length; i++) {
                let char = text[i];
                // 检查当前字符是否在范围内
                if (i + 1 >= start && i + 1 <= end) {
                    // 只应用字体大小和粗体样式，其他样式继承自父级
                    let style = `font-size: ${fontSize}px !important; font-weight: ${isBold ? 'bold' : 'normal'} !important;`;
                    char = `<span class="range-styled range-styled-${column}" style="${style}">${char}</span>`;
                }
                newContent += char;
            }
            
            // 应用新的内容
            textElement.innerHTML = newContent;
            textElement.classList.add('has-range-style');
        });
        
        // 触发自定义事件，通知其他组件样式已更新
        const event = new CustomEvent('rangeStyleApplied', {
            detail: {
                column: column
            }
        });
        document.dispatchEvent(event);
    } finally {
        isUpdatingStyles = false;
    }
}

// 清除范围样式
function clearRangeStyle(column) {
    // 重置按钮状态
    const btn = document.getElementById(`${column}RangeBoldBtn`);
    if (btn) btn.classList.remove('active');
    
    // 移除范围样式
    const cards = document.querySelectorAll('.name-card');
    cards.forEach(card => {
        const textElement = card.querySelector(`.${column}-line`);
        if (textElement) {
            // 恢复原始文本内容
            textElement.textContent = textElement.textContent;
            // 移除范围样式标记和数据属性
            textElement.classList.remove('has-range-style');
            delete textElement.dataset.originalColor;
        }
    });
    
    // 重新应用整体样式
    updateCardTextStyles();
}

// 初始化范围样式控制
function initRangeStyleControls() {
    // 为范围输入框添加事件监听
    ['name'].forEach(column => {
        const startInput = document.getElementById(`${column}RangeStart`);
        const endInput = document.getElementById(`${column}RangeEnd`);
        const fontSizeInput = document.getElementById(`${column}RangeFontSize`);
        
        if (startInput && endInput && fontSizeInput) {
            // 确保结束值不小于起始值
            startInput.addEventListener('change', () => {
                if (parseInt(startInput.value) > parseInt(endInput.value)) {
                    endInput.value = startInput.value;
                }
                applyRangeStyle(column);
            });
            
            // 确保起始值不大于结束值
            endInput.addEventListener('change', () => {
                if (parseInt(endInput.value) < parseInt(startInput.value)) {
                    startInput.value = endInput.value;
                }
                applyRangeStyle(column);
            });

            // 字体大小变化时立即应用
            fontSizeInput.addEventListener('change', () => {
                applyRangeStyle(column);
            });
        }

        // 监听整体粗体按钮状态变化
        const boldBtn = document.getElementById(`${column}BoldBtn`);
        const rangeBoldBtn = document.getElementById(`${column}RangeBoldBtn`);
        
        if (boldBtn && rangeBoldBtn) {
            boldBtn.addEventListener('click', () => {
                // 如果没有范围样式，同步范围粗体按钮状态
                if (!document.querySelector(`.${column}-line.has-range-style`)) {
                    rangeBoldBtn.classList.toggle('active', boldBtn.classList.contains('active'));
                    applyRangeStyle(column);
                }
            });
        }
    });

    // 监听整体样式更新事件
    document.addEventListener('styleUpdated', function(event) {
        if (event.detail && event.detail.column === 'name') {
            // 重新应用所有范围样式
            const cards = document.querySelectorAll('.name-card');
            cards.forEach(card => {
                const textElement = card.querySelector('.name-line');
                if (textElement && textElement.classList.contains('has-range-style')) {
                    applyRangeStyle('name');
                }
            });
        }
    });
}

// 添加样式保护函数
function protectRangeStyles() {
    document.addEventListener('styleUpdated', function(e) {
        if (e.detail && e.detail.preserveRangeStyles) return;
        
        // 重新应用所有范围样式
        const cards = document.querySelectorAll('.name-card');
        cards.forEach(card => {
            const textElement = card.querySelector('.name-line');
            if (textElement && textElement.classList.contains('has-range-style')) {
                applyRangeStyle('name');
            }
        });
    });
    
    // 监听模板应用事件
    document.addEventListener('templateApplied', function(e) {
        // 清除所有范围样式
        const cards = document.querySelectorAll('.name-card');
        cards.forEach(card => {
            const textElement = card.querySelector('.name-line');
            if (textElement) {
                // 移除范围样式标记和数据属性
                delete textElement.dataset.hasRangeStyle;
                textElement.classList.remove('has-range-style');
                // 恢复原始文本内容
                textElement.textContent = textElement.textContent;
            }
        });
        
        // 重置范围样式按钮状态
        const rangeBoldBtn = document.getElementById('nameRangeBoldBtn');
        if (rangeBoldBtn) {
            rangeBoldBtn.classList.remove('active');
        }
        
        // 重置范围输入框
        const startInput = document.getElementById('nameRangeStart');
        const endInput = document.getElementById('nameRangeEnd');
        const fontSizeInput = document.getElementById('nameRangeFontSize');
        
        if (startInput) startInput.value = '1';
        if (endInput) endInput.value = '1';
        if (fontSizeInput) fontSizeInput.value = '20';
    });
}

// 在初始化时调用保护函数
document.addEventListener('DOMContentLoaded', function() {
    initRangeStyleControls();
    protectRangeStyles();
}); 