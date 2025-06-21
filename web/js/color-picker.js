// 颜色选择器初始化和处理

// 初始化Pickr颜色选择器
function initPickrColorPickers() {
    // 确保Pickr库已加载
    if (typeof Pickr === 'undefined') {
        console.error('Pickr库未加载，颜色选择器初始化失败');
        // 将在5秒后再次尝试初始化
        setTimeout(initPickrColorPickers, 5000);
        return;
    }

    // 全透明白色颜色值
    const transparentWhite = 'rgba(255, 255, 255, 0)';
    
    // 颜色选择器配置
    const pickrConfig = {
        defaultRepresentation: 'HEXA',
        components: {
            preview: true,
            opacity: true,
            hue: true,
            interaction: {
                hex: true,
                rgba: true,
                hsla: true,
                input: true,
                clear: true,
                save: true
            }
        }
    };

    try {
        // 存储所有需要创建的pickr实例和其对应元素之间的映射
        const pickrMappings = [
            // 背景颜色选择器 - 强制设置为全透明
            { id: 'globalBgPicker', el: '#globalBgColorPicker', inputId: 'globalBgColor', default: transparentWhite, forceTransparent: true },
            { id: 'numberBgPicker', el: '#numberBgColorPicker', inputId: 'numberBgColor', default: transparentWhite, forceTransparent: true },
            { id: 'nameBgPicker', el: '#nameBgColorPicker', inputId: 'nameBgColor', default: transparentWhite, forceTransparent: true },
            { id: 'unitBgPicker', el: '#unitBgColorPicker', inputId: 'unitBgColor', default: transparentWhite, forceTransparent: true },
            
            // 边框颜色选择器
            { id: 'globalBorderPicker', el: '#globalBorderColorPicker', inputId: 'globalBorderColor', default: '#cccccc' },
            { id: 'numberBorderPicker', el: '#numberBorderColorPicker', inputId: 'numberBorderColor', default: '#cccccc' },
            { id: 'nameBorderPicker', el: '#nameBorderColorPicker', inputId: 'nameBorderColor', default: '#cccccc' },
            { id: 'unitBorderPicker', el: '#unitBorderColorPicker', inputId: 'unitBorderColor', default: '#cccccc' },
            
            // 文字颜色选择器
            { id: 'numberTextPicker', el: '#numberTextColorPicker', inputId: 'numberTextColor', default: '#000000' },
            { id: 'nameTextPicker', el: '#nameTextColorPicker', inputId: 'nameTextColor', default: '#000000' },
            { id: 'unitTextPicker', el: '#unitTextColorPicker', inputId: 'unitTextColor', default: '#000000' },

            // Per-column Stroke Color Pickers
            { id: 'numberStrokePicker', el: '#numberStrokeColorPicker', inputId: 'numberStrokeColor', default: '#000000' },
            { id: 'nameStrokePicker', el: '#nameStrokeColorPicker', inputId: 'nameStrokeColor', default: '#000000' },
            { id: 'unitStrokePicker', el: '#unitStrokeColorPicker', inputId: 'unitStrokeColor', default: '#000000' },

            // Per-column Shadow Color Pickers
            { id: 'numberShadowPicker', el: '#numberShadowColorPicker', inputId: 'numberShadowColor', default: '#000000' },
            { id: 'nameShadowPicker', el: '#nameShadowColorPicker', inputId: 'nameShadowColor', default: '#000000' },
            { id: 'unitShadowPicker', el: '#unitShadowColorPicker', inputId: 'unitShadowColor', default: '#000000' },
            
            // 边框渐变色选择器 - 起始颜色
            { id: 'numberBorderGradientStartPicker', el: '#numberBorderGradientStartColorPicker', inputId: 'numberBorderGradientStartColor', default: '#cccccc' },
            { id: 'nameBorderGradientStartPicker', el: '#nameBorderGradientStartColorPicker', inputId: 'nameBorderGradientStartColor', default: '#cccccc' },
            { id: 'unitBorderGradientStartPicker', el: '#unitBorderGradientStartColorPicker', inputId: 'unitBorderGradientStartColor', default: '#cccccc' },
            
            // 边框渐变色选择器 - 结束颜色
            { id: 'numberBorderGradientEndPicker', el: '#numberBorderGradientEndColorPicker', inputId: 'numberBorderGradientEndColor', default: '#000000' },
            { id: 'nameBorderGradientEndPicker', el: '#nameBorderGradientEndColorPicker', inputId: 'nameBorderGradientEndColor', default: '#000000' },
            { id: 'unitBorderGradientEndPicker', el: '#unitBorderGradientEndColorPicker', inputId: 'unitBorderGradientEndColor', default: '#000000' }
        ];
        
        // 清空先前的实例
        window.pickrInstances = window.pickrInstances || {};
        
        // 创建所有Pickr实例
        pickrMappings.forEach(def => {
            try {
                // 检查容器元素是否存在
                const containerElement = document.querySelector(def.el);
                if (!containerElement) {
                    console.warn(`颜色选择器容器不存在: ${def.el}`);
                    return;
                }
                
                // 检查是否存在原始input颜色选择器
                const originalInput = document.getElementById(def.inputId);
                let initialColor = def.default;
                
                // 如果原始input存在，获取其颜色值，对于强制透明的背景色选择器，忽略原始值
                if (originalInput && originalInput.value && !def.forceTransparent) {
                    initialColor = originalInput.value;
                } else if (def.forceTransparent) {
                    // 对于背景色，强制使用透明色
                    initialColor = transparentWhite;
                    // 如果原始input存在，同时更新其值
                    if (originalInput) {
                        originalInput.value = '#ffffff'; // HTML5 input[type=color]不支持透明度
                        originalInput.setAttribute('data-rgba', transparentWhite); // 保存RGBA值供后续使用
                    }
                }
                
                // 确保容器元素有足够大小
                containerElement.style.width = "30px";
                containerElement.style.height = "30px";
                containerElement.style.display = "inline-block";
                
                try {
                    // 创建Pickr实例
                    window.pickrInstances[def.id] = Pickr.create({
                        el: containerElement,
                        theme: 'classic',
                        ...pickrConfig,
                        default: initialColor
                    });
                    
                    // 如果原始input存在，让Pickr选择器变化时更新input值（向下兼容）
                    if (originalInput && window.pickrInstances[def.id]) {
                        window.pickrInstances[def.id].on('change', (color) => {
                            const hexColor = color.toHEXA().toString();
                            originalInput.value = hexColor;
                            // 保存RGBA值供后续使用
                            originalInput.setAttribute('data-rgba', color.toRGBA().toString());
                        });
                    }
                } catch (err) {
                    console.error(`创建颜色选择器失败: ${def.id}`, err);
                    // 为容器元素添加一个简单的回退颜色显示
                    setupFallbackColorPicker(containerElement, def.id, initialColor, originalInput);
                }
            } catch (defError) {
                console.error(`处理颜色选择器定义失败: ${def.id}`, defError);
            }
        });

        // 为每个Pickr添加事件监听
        Object.values(window.pickrInstances).forEach(picker => {
            if (!picker) return;
            
            try {
                picker.on('save', (color, instance) => {
                    if (typeof updateIfDataLoaded === 'function') {
                        updateIfDataLoaded();
                    }
                    picker.hide();
                });
                
                picker.on('change', (color, source, instance) => {
                    if (typeof updateIfDataLoaded === 'function') {
                        updateIfDataLoaded();
                    }
                });
            } catch (listenerError) {
                console.error('给Pickr添加事件监听失败', listenerError);
            }
        });
    } catch (error) {
        console.error('Pickr颜色选择器初始化失败:', error);
        setupSimpleColorPickers();
    }
}

// 设置简易的备用颜色选择器
function setupFallbackColorPicker(container, id, initialColor, originalInput) {
    // 简单清除所有子元素
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    // 确保容器元素样式正确
    container.style.width = "30px";
    container.style.height = "30px";
    container.style.display = "inline-block";
    container.style.backgroundColor = initialColor;
    container.style.border = "1px solid #ccc";
    container.style.cursor = "pointer";
    
    // 点击容器时打开系统颜色选择器
    container.addEventListener('click', function() {
        if (originalInput) {
            originalInput.click();
            // 当原始input颜色变化时，更新容器背景色
            originalInput.addEventListener('change', function() {
                container.style.backgroundColor = this.value;
                
                if (typeof updateIfDataLoaded === 'function') {
                    updateIfDataLoaded();
                }
            });
        }
    });
}

// 全局备用颜色选择器设置（如果Pickr完全失败）
function setupSimpleColorPickers() {
    const colorInputs = document.querySelectorAll('input[type="color"]');
    colorInputs.forEach(input => {
        const id = input.id;
        
        // 查找对应的选择器容器元素
        const containerSelector = `#${id}Picker`;
        const container = document.querySelector(containerSelector);
        
        if (container) {
            setupFallbackColorPicker(container, id + 'Picker', input.value, input);
        }
    });
}

// 获取Pickr颜色值 - 添加向下兼容性处理
function getPickrColor(pickerName) {
    try {
        const picker = window.pickrInstances[pickerName];
        if (picker && picker.getColor()) {
            // 获取RGBA格式的颜色
            const rgba = picker.getColor().toRGBA();
            return `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`;
        }
        
        // 如果无法从Pickr获取颜色，尝试从原始input获取
        const inputIdMap = {
            'globalBgPicker': 'globalBgColor',
            'numberBgPicker': 'numberBgColor',
            'nameBgPicker': 'nameBgColor',
            'unitBgPicker': 'unitBgColor',
            'globalBorderPicker': 'globalBorderColor', 
            'numberBorderPicker': 'numberBorderColor',
            'nameBorderPicker': 'nameBorderColor',
            'unitBorderPicker': 'unitBorderColor',
            'numberTextPicker': 'numberTextColor',
            'nameTextPicker': 'nameTextColor',
            'unitTextPicker': 'unitTextColor',
            'numberStrokePicker': 'numberStrokeColor',
            'nameStrokePicker': 'nameStrokeColor',
            'unitStrokePicker': 'unitStrokeColor',
            'numberShadowPicker': 'numberShadowColor',
            'nameShadowPicker': 'nameShadowColor',
            'unitShadowPicker': 'unitShadowColor',
            'numberBorderGradientStartPicker': 'numberBorderGradientStartColor',
            'nameBorderGradientStartPicker': 'nameBorderGradientStartColor',
            'unitBorderGradientStartPicker': 'unitBorderGradientStartColor',
            'numberBorderGradientEndPicker': 'numberBorderGradientEndColor',
            'nameBorderGradientEndPicker': 'nameBorderGradientEndColor',
            'unitBorderGradientEndPicker': 'unitBorderGradientEndColor'
        };
        
        const inputId = inputIdMap[pickerName];
        if (inputId) {
            const input = document.getElementById(inputId);
            if (input) {
                // 优先使用data-rgba属性获取rgba值（支持透明度）
                const dataRgba = input.getAttribute('data-rgba');
                if (dataRgba) {
                    return dataRgba;
                }
                
                // 如果是背景色相关的输入框，且值为transparent或为空，返回透明
                if (['globalBgColor', 'numberBgColor', 'nameBgColor', 'unitBgColor'].includes(inputId) &&
                    (input.value === 'transparent' || input.value === '')) {
                    return "rgba(255, 255, 255, 0)";
                }
                
                // 否则使用input的value
                if (input.value) {
                    return input.value;
                }
            }
        }
    } catch (error) {
        console.error(`获取Pickr颜色失败 (${pickerName}):`, error);
    }
    
    // 返回默认颜色
    switch(pickerName) {
        case 'globalBgPicker':
            return "rgba(255, 255, 255, 0)"; // 全局背景默认白色全透明
        case 'numberBgPicker':
        case 'nameBgPicker':
        case 'unitBgPicker':
            return "rgba(255, 255, 255, 0)"; // 列背景默认白色全透明
        case 'globalBorderPicker':
        case 'numberBorderPicker':
        case 'nameBorderPicker':
        case 'unitBorderPicker':
            return "#cccccc"; // 边框默认颜色
        case 'numberTextPicker':
        case 'nameTextPicker':
        case 'unitTextPicker':
        case 'numberStrokePicker':
        case 'nameStrokePicker':
        case 'unitStrokePicker':
        case 'numberShadowPicker':
        case 'nameShadowPicker':
        case 'unitShadowPicker':
            return "#000000"; // 文字和效果默认颜色为黑色
        case 'numberBorderGradientStartPicker':
        case 'nameBorderGradientStartPicker':
        case 'unitBorderGradientStartPicker':
            return "#cccccc";
        case 'numberBorderGradientEndPicker':
        case 'nameBorderGradientEndPicker':
        case 'unitBorderGradientEndPicker':
            return "#000000";
        default:
            return "#000000";
    }
}

// 渐变处理
function applyGradient(element, gradient) {
    if (gradient === 'none') {
        element.style.background = '';
        element.style.position = '';
        if (element.querySelector('.gradient-overlay')) {
            element.removeChild(element.querySelector('.gradient-overlay'));
        }
        if (element.querySelector('.shimmer-effect')) {
            element.removeChild(element.querySelector('.shimmer-effect'));
        }
        // 删除用于导出的数据属性
        element.removeAttribute('data-gradient-type');
        return;
    }

    // 渐变色映射
    const gradientMap = {
        'tech-blue': {
            background: 'linear-gradient(to right, rgba(22,93,255,0.8), rgba(123,97,255,0.8))',
            overlay: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 70%)',
            // 添加完整颜色定义用于html2canvas
            exportBg: 'linear-gradient(90deg, rgba(22,93,255,0.8) 0%, rgba(123,97,255,0.8) 100%)'
        },
        'vibrant-orange': {
            background: 'linear-gradient(to right, rgba(255,125,0,1), rgba(255,77,79,1))', 
            overlay: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 70%)',
            exportBg: 'linear-gradient(90deg, rgba(255,125,0,1) 0%, rgba(255,77,79,1) 100%)'
        },
        'dream-purple': {
            background: 'linear-gradient(to right, rgba(128,90,213,1), rgba(233,60,236,1))',
            overlay: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 70%)',
            exportBg: 'linear-gradient(90deg, rgba(128,90,213,1) 0%, rgba(233,60,236,1) 100%)'
        },
        'nature-green': {
            background: 'linear-gradient(to right, rgba(34,197,94,1), rgba(45,212,191,1))',
            overlay: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 70%)',
            exportBg: 'linear-gradient(90deg, rgba(34,197,94,1) 0%, rgba(45,212,191,1) 100%)'
        },
        'glass-effect': {
            background: 'linear-gradient(to right, rgba(59,130,246,0.4), rgba(168,85,247,0.4))',
            overlay: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 70%)',
            exportBg: 'linear-gradient(90deg, rgba(59,130,246,0.4) 0%, rgba(168,85,247,0.4) 100%)'
        },
        'dynamic-flow': {
            background: 'linear-gradient(to right, rgba(22,93,255,0.9), rgba(123,97,255,0.9), rgba(22,93,255,0.9))',
            overlay: 'none',
            animation: true,
            exportBg: 'linear-gradient(90deg, rgba(22,93,255,0.9) 0%, rgba(123,97,255,0.9) 50%, rgba(22,93,255,0.9) 100%)'
        },
        'retro-film': {
            background: 'linear-gradient(to right, rgba(217,119,6,0.9), rgba(234,88,12,0.9))',
            overlay: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
            exportBg: 'linear-gradient(90deg, rgba(217,119,6,0.9) 0%, rgba(234,88,12,0.9) 100%)'
        },
        'neon-effect': {
            background: 'linear-gradient(to right, rgba(168,85,247,0.8), rgba(236,72,153,0.8), rgba(239,68,68,0.8))',
            overlay: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)',
            exportBg: 'linear-gradient(90deg, rgba(168,85,247,0.8) 0%, rgba(236,72,153,0.8) 50%, rgba(239,68,68,0.8) 100%)'
        }
    };

    const gradientInfo = gradientMap[gradient];
    if (!gradientInfo) return;

    // 设置主要渐变背景
    element.style.background = gradientInfo.background;
    element.style.position = 'relative';
    
    // 存储渐变类型用于导出
    element.setAttribute('data-gradient-type', gradient);
    
    // 存储精确的渐变定义用于导出
    if (gradientInfo.exportBg) {
        element.setAttribute('data-export-background', gradientInfo.exportBg);
    }

    // 添加渐变叠加层
    if (gradientInfo.overlay !== 'none') {
        let overlayElement = element.querySelector('.gradient-overlay');
        if (!overlayElement) {
            overlayElement = document.createElement('div');
            overlayElement.className = 'gradient-overlay';
            overlayElement.style.position = 'absolute';
            overlayElement.style.top = '0';
            overlayElement.style.left = '0';
            overlayElement.style.width = '100%';
            overlayElement.style.height = '100%';
            overlayElement.style.pointerEvents = 'none';
            element.appendChild(overlayElement);
        }
        overlayElement.style.background = gradientInfo.overlay;
        
        // 存储叠加层信息用于导出
        overlayElement.setAttribute('data-export-overlay', gradientInfo.overlay);
    }

    // 添加动态流光效果
    if (gradientInfo.animation) {
        let shimmerElement = element.querySelector('.shimmer-effect');
        if (!shimmerElement) {
            shimmerElement = document.createElement('div');
            shimmerElement.className = 'shimmer-effect';
            shimmerElement.style.position = 'absolute';
            shimmerElement.style.top = '0';
            shimmerElement.style.left = '0';
            shimmerElement.style.width = '100%';
            shimmerElement.style.height = '100%';
            shimmerElement.style.background = 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)';
            shimmerElement.style.backgroundSize = '200% 100%';
            shimmerElement.style.animation = 'shimmer 2s infinite linear';
            shimmerElement.style.pointerEvents = 'none';
            element.appendChild(shimmerElement);
        }
    }
} 