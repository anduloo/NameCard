// 模板定义
const templates = {
    // 简约黑白
    template1: {
        global: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'bottom',
            borderColor: '#000000',
            borderWidth: 2,
            textAlign: 'center'
        },
        number: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#666666',
            fontFamily: '微软雅黑',
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        name: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#000000',
            fontFamily: '微软雅黑',
            fontSize: 36,
            fontWeight: 'bold',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        unit: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#666666',
            fontFamily: '微软雅黑',
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        direction: 'horizontal',
        lineGap: 5
    },
    
    
    
    // 商务金
    template3: {
        global: {
            bgColor: '#2c3e50',
            gradient: 'none',
            borderStyle: 'bottom',
            borderColor: '#f1c40f',
            borderWidth: 3,
            textAlign: 'center'
        },
        number: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#f1c40f',
            fontFamily: 'Times New Roman',
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'italic',
            textDecoration: 'none',
            strokeWidth: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        name: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#ffffff',
            fontFamily: 'Times New Roman',
            fontSize: 36,
            fontWeight: 'bold',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        unit: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#f1c40f',
            fontFamily: 'Times New Roman',
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        direction: 'horizontal',
        lineGap: 5
    },
    
    // 活力橙
    template4: {
        global: {
            bgColor: 'transparent',
            gradient: 'vibrant-orange',
            borderStyle: 'none',
            borderColor: '#e67e22',
            borderWidth: 1,
            textAlign: 'center'
        },
        number: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#7f8c8d',
            fontFamily: '微软雅黑',
            fontSize: 20,
            fontWeight: 'bold',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        name: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#ffffff',
            fontFamily: '微软雅黑',
            fontSize: 36,
            fontWeight: 'bold',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 1,
            strokeColor: '#d35400',
            borderRadius: 0,
            skewAngle: 0
        },
        unit: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#ffffff',
            fontFamily: '微软雅黑',
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        direction: 'horizontal',
        lineGap: 5
    },
    
    
    
    // 文艺雅致
    template6: {
        global: {
            bgColor: '#f8f9fa',
            gradient: 'none',
            borderStyle: 'all',
            borderColor: '#ced4da',
            borderWidth: 1,
            textAlign: 'center'
        },
        number: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#adb5bd',
            fontFamily: 'FangZhengFangSong',
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        name: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#212529',
            fontFamily: 'FangZhengFangSong',
            fontSize: 36,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        unit: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#adb5bd',
            fontFamily: 'FangZhengFangSong',
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        direction: 'horizontal',
        lineGap: 10
    },
    
    // 学术深蓝
    template7: {
        global: {
            bgColor: '#ffffff',
            gradient: 'none',
            borderStyle: 'left',
            borderColor: '#002147',
            borderWidth: 5,
            textAlign: 'left'
        },
        number: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#6c757d',
            fontFamily: 'Georgia',
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'italic',
            textDecoration: 'none',
            strokeWidth: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        name: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'bottom',
            borderColor: '#002147',
            borderWidth: 1,
            textColor: '#002147',
            fontFamily: 'Georgia',
            fontSize: 36,
            fontWeight: 'bold',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        unit: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#6c757d',
            fontFamily: 'Georgia',
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        direction: 'horizontal',
        lineGap: 8
    },
    
    // 竖排中式
    template8: {
        global: {
            bgColor: '#f8f5e6',
            gradient: 'none',
            borderStyle: 'all',
            borderColor: '#8b4513',
            borderWidth: 2,
            textAlign: 'center'
        },
        number: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#8b4513',
            fontFamily: 'JiangXiZhuoKai',
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        name: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#8b4513',
            fontFamily: 'JiangXiZhuoKai',
            fontSize: 36,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        unit: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#8b4513',
            fontFamily: 'JiangXiZhuoKai',
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        direction: 'vertical',
        columnOrder: 'rtl',
        verticalAlign: 'middle',
        lineGap: 10
    },
    
    // 透明简约
    template9: {
        global: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            borderColor: '#000000',
            borderWidth: 0,
            textAlign: 'center'
        },
        number: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#ffffff',
            fontFamily: '微软雅黑',
            fontSize: 20,
            fontWeight: 'bold',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: '#000000',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 1,
            borderRadius: 0,
            skewAngle: 0
        },
        name: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#ffffff',
            fontFamily: '微软雅黑',
            fontSize: 36,
            fontWeight: 'bold',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: '#000000',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 1,
            borderRadius: 0,
            skewAngle: 0
        },
        unit: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#ffffff',
            fontFamily: '微软雅黑',
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: '#000000',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 1,
            borderRadius: 0,
            skewAngle: 0
        },
        direction: 'horizontal',
        lineGap: 5
    },
    
    
    
    // 优雅白 - Elegant White
    template11: {
        global: {
            bgColor: '#ffffff',
            gradient: 'none',
            borderStyle: 'all',
            borderColor: '#e0e0e0',
            borderWidth: 1,
            textAlign: 'center'
        },
        number: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#9e9e9e',
            fontFamily: 'OPPOSans',
            fontSize: 18,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 8,
            skewAngle: 0
        },
        name: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'bottom',
            borderColor: '#f5f5f5',
            borderWidth: 2,
            textColor: '#424242',
            fontFamily: 'OPPOSans',
            fontSize: 36,
            fontWeight: 'bold',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 8,
            skewAngle: 0
        },
        unit: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textColor: '#757575',
            fontFamily: 'OPPOSans',
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 8,
            skewAngle: 0
        },
        direction: 'horizontal',
        lineGap: 8
    },
    
    // 现代黑 - Modern Black
    template12: {
        global: {
            bgColor: '#212121',
            gradient: 'none',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textAlign: 'left'
        },
        number: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#757575',
            fontFamily: 'MiSans-VF',
            fontSize: 18,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        name: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'left',
            borderColor: '#ffffff',
            borderWidth: 3,
            textColor: '#ffffff',
            fontFamily: 'MiSans-VF',
            fontSize: 36,
            fontWeight: 'bold',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        unit: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textColor: '#bdbdbd',
            fontFamily: 'MiSans-VF',
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        direction: 'horizontal',
        lineGap: 8
    },
    
    // 紫色渐变 - Gradient Purple
    template13: {
        global: {
            bgColor: 'transparent',
            gradient: 'dream-purple',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textAlign: 'center'
        },
        number: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#e1bee7',
            fontFamily: 'AlibabaPuHuiTi',
            fontSize: 18,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: '#000000',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 1,
            borderRadius: 12,
            skewAngle: 0
        },
        name: {
            bgColor: 'rgba(255,255,255,0.2)',
            gradient: 'none',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textColor: '#ffffff',
            fontFamily: 'AlibabaPuHuiTi',
            fontSize: 36,
            fontWeight: 'bold',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: '#000000',
            shadowX: 1,
            shadowY: 1,
            shadowBlur: 3,
            borderRadius: 12,
            skewAngle: 0
        },
        unit: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textColor: '#e1bee7',
            fontFamily: 'AlibabaPuHuiTi',
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: '#000000',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 1,
            borderRadius: 12,
            skewAngle: 0
        },
        direction: 'horizontal',
        lineGap: 10
    },
    
    // 自然绿 - Earthy Green
    template14: {
        global: {
            bgColor: '#f1f8e9',
            gradient: 'none',
            borderStyle: 'all',
            borderColor: '#aed581',
            borderWidth: 1,
            textAlign: 'center'
        },
        number: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#7cb342',
            fontFamily: 'LuoxiaXinxiHei',
            fontSize: 18,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        name: {
            bgColor: 'transparent',
            gradient: 'nature-green',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textColor: '#33691e',
            fontFamily: 'LuoxiaXinxiHei',
            fontSize: 36,
            fontWeight: 'bold',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        unit: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textColor: '#689f38',
            fontFamily: 'LuoxiaXinxiHei',
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        direction: 'horizontal',
        lineGap: 8
    },
    
    // 企业红 - Corporate Red
    template15: {
        global: {
            bgColor: '#ffffff',
            gradient: 'none',
            borderStyle: 'left',
            borderColor: '#e53935',
            borderWidth: 4,
            textAlign: 'left'
        },
        number: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#757575',
            fontFamily: '微软雅黑',
            fontSize: 18,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        name: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'bottom',
            borderColor: '#ffcdd2',
            borderWidth: 1,
            textColor: '#d32f2f',
            fontFamily: '微软雅黑',
            fontSize: 36,
            fontWeight: 'bold',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        unit: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textColor: '#616161',
            fontFamily: '微软雅黑',
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        direction: 'horizontal',
        lineGap: 8
    },
    
    // 柔和粉彩 - Soft Pastel
    template16: {
        global: {
            bgColor: '#f5f5f5',
            gradient: 'none',
            borderStyle: 'all',
            borderColor: '#e0e0e0',
            borderWidth: 1,
            textAlign: 'center'
        },
        number: {
            bgColor: '#f8bbd0',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#ffffff',
            fontFamily: 'SmileySans',
            fontSize: 18,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 15,
            skewAngle: 0
        },
        name: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textColor: '#ec407a',
            fontFamily: 'SmileySans',
            fontSize: 36,
            fontWeight: 'bold',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 15,
            skewAngle: 0
        },
        unit: {
            bgColor: '#bbdefb',
            gradient: 'none',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textColor: '#ffffff',
            fontFamily: 'SmileySans',
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 15,
            skewAngle: 0
        },
        direction: 'horizontal',
        lineGap: 10
    },
    
    // 科技斜切 - Skewed Tech
    template17: {
        global: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textAlign: 'left'
        },
        number: {
            bgColor: '#37474f',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#80deea',
            fontFamily: 'Consolas',
            fontSize: 18,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 0,
            skewAngle: 16
        },
        name: {
            bgColor: 'transparent',
            gradient: 'tech-blue',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textColor: '#ffffff',
            fontFamily: 'Consolas',
            fontSize: 36,
            fontWeight: 'bold',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: '#00e5ff',
            shadowX: 1,
            shadowY: 1,
            shadowBlur: 5,
            borderRadius: 0,
            skewAngle: -1
        },
        unit: {
            bgColor: '#37474f',
            gradient: 'none',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textColor: '#80deea',
            fontFamily: 'Consolas',
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 0,
            skewAngle: -15
        },
        direction: 'horizontal',
        lineGap: 0
    },
    
    // 极简灰 - Minimalist Gray
    template18: {
        global: {
            bgColor: '#fafafa',
            gradient: 'none',
            borderStyle: 'bottom',
            borderColor: '#e0e0e0',
            borderWidth: 1,
            textAlign: 'left'
        },
        number: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#9e9e9e',
            fontFamily: 'AlibabaPuHuiTi',
            fontSize: 16,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        name: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textColor: '#212121',
            fontFamily: 'AlibabaPuHuiTi',
            fontSize: 32,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        unit: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textColor: '#757575',
            fontFamily: 'AlibabaPuHuiTi',
            fontSize: 18,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        direction: 'horizontal',
        lineGap: 5
    },
    
    
    
    // 复古棕 - Vintage Brown
    template20: {
        global: {
            bgColor: '#efebe9',
            gradient: 'none',
            borderStyle: 'all',
            borderColor: '#bcaaa4',
            borderWidth: 1,
            textAlign: 'center'
        },
        number: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#8d6e63',
            fontFamily: 'FangZhengFangSong',
            fontSize: 18,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        name: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'bottom',
            borderColor: '#a1887f',
            borderWidth: 1,
            textColor: '#5d4037',
            fontFamily: 'FangZhengFangSong',
            fontSize: 36,
            fontWeight: 'bold',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        unit: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textColor: '#8d6e63',
            fontFamily: 'FangZhengFangSong',
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        direction: 'horizontal',
        lineGap: 8
    },
    
    // 湖水青 - Aqua Blue
    template21: {
        global: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'bottom',
            borderColor: '#4dd0e1',
            borderWidth: 2,
            textAlign: 'center'
        },
        number: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#80deea',
            fontFamily: 'MiSans-VF',
            fontSize: 18,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        name: {
            bgColor: 'rgba(0, 188, 212, 0.15)',
            gradient: 'none',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textColor: '#00838f',
            fontFamily: 'MiSans-VF',
            fontSize: 36,
            fontWeight: 'bold',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        unit: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textColor: '#00acc1',
            fontFamily: 'MiSans-VF',
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        direction: 'horizontal',
        lineGap: 8
    },
    
    // 日落橙 - Sunset Orange
    template22: {
        global: {
            bgColor: 'transparent',
            gradient: 'vibrant-orange',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textAlign: 'center'
        },
        number: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#ffffff',
            fontFamily: 'OPPOSans',
            fontSize: 18,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'rgba(0,0,0,0.3)',
            shadowX: 1,
            shadowY: 1,
            shadowBlur: 2,
            borderRadius: 0,
            skewAngle: 0
        },
        name: {
            bgColor: 'transparent', 
            gradient: 'none',
            borderStyle: 'bottom',
            borderColor: 'rgba(255,255,255,0.5)',
            borderWidth: 1,
            textColor: '#ffffff',
            fontFamily: 'OPPOSans',
            fontSize: 36,
            fontWeight: 'bold',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'rgba(0,0,0,0.3)',
            shadowX: 1,
            shadowY: 1,
            shadowBlur: 3,
            borderRadius: 0,
            skewAngle: 0
        },
        unit: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textColor: '#ffffff',
            fontFamily: 'OPPOSans',
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'rgba(0,0,0,0.3)',
            shadowX: 1,
            shadowY: 1,
            shadowBlur: 2,
            borderRadius: 0,
            skewAngle: 0
        },
        direction: 'horizontal',
        lineGap: 10
    },
    
    // 霓虹灯 - Neon Lights
    template23: {
        global: {
            bgColor: 'transparent',
            gradient: 'neon-effect',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textAlign: 'center'
        },
        number: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#ffffff',
            fontFamily: 'Consolas',
            fontSize: 18,
            fontWeight: 'bold',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: '#ff00cc',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 5,
            borderRadius: 0,
            skewAngle: 0
        },
        name: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textColor: '#ffffff',
            fontFamily: 'Consolas',
            fontSize: 36,
            fontWeight: 'bold',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 1,
            strokeColor: '#ff00cc',
            shadowColor: '#ff00cc',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 10,
            borderRadius: 0,
            skewAngle: 0
        },
        unit: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textColor: '#ffffff',
            fontFamily: 'Consolas',
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: '#3333cc',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 5,
            borderRadius: 0,
            skewAngle: 0
        },
        direction: 'horizontal',
        lineGap: 8
    },
    
    // 水墨风 - Ink Wash
    template24: {
        global: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'right',
            borderColor: '#000000',
            borderWidth: 3,
            textAlign: 'right'
        },
        number: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#757575',
            fontFamily: 'JiangXiZhuoKai',
            fontSize: 18,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        name: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textColor: '#000000',
            fontFamily: 'JiangXiZhuoKai',
            fontSize: 42,
            fontWeight: 'bold',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'rgba(0,0,0,0.1)',
            shadowX: 2,
            shadowY: 2,
            shadowBlur: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        unit: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textColor: '#424242',
            fontFamily: 'JiangXiZhuoKai',
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        direction: 'horizontal',
        lineGap: 12
    },
    
    // 粉色花瓣 - Pink Petals
    template25: {
        global: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textAlign: 'center'
        },
        number: {
            bgColor: 'rgba(244,143,177,0.15)',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#ec407a',
            fontFamily: 'SmileySans',
            fontSize: 18,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 20,
            skewAngle: 0
        },
        name: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'bottom',
            borderColor: '#f48fb1',
            borderWidth: 1,
            textColor: '#d81b60',
            fontFamily: 'SmileySans',
            fontSize: 36,
            fontWeight: 'bold',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        unit: {
            bgColor: 'rgba(244,143,177,0.15)',
            gradient: 'none',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textColor: '#ec407a',
            fontFamily: 'SmileySans',
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 20,
            skewAngle: 0
        },
        direction: 'horizontal',
        lineGap: 10
    },
    
    // 翡翠绿 - Emerald Green
    template26: {
        global: {
            bgColor: 'transparent',
            gradient: 'nature-green',
            borderStyle: 'top',
            borderColor: '#2e7d32',
            borderWidth: 3,
            textAlign: 'left'
        },
        number: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#ffffff',
            fontFamily: 'AlibabaPuHuiTi',
            fontSize: 18,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'rgba(0,0,0,0.2)',
            shadowX: 1,
            shadowY: 1,
            shadowBlur: 2,
            borderRadius: 0,
            skewAngle: 0
        },
        name: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'left',
            borderColor: '#ffffff',
            borderWidth: 2,
            textColor: '#ffffff',
            fontFamily: 'AlibabaPuHuiTi',
            fontSize: 36,
            fontWeight: 'bold',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'rgba(0,0,0,0.2)',
            shadowX: 1,
            shadowY: 1,
            shadowBlur: 3,
            borderRadius: 0,
            skewAngle: 0
        },
        unit: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textColor: '#ffffff',
            fontFamily: 'AlibabaPuHuiTi',
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'rgba(0,0,0,0.2)',
            shadowX: 1,
            shadowY: 1,
            shadowBlur: 2,
            borderRadius: 0,
            skewAngle: 0
        },
        direction: 'horizontal',
        lineGap: 8
    },
    
    // 深空蓝 - Deep Space Blue
    template27: {
        global: {
            bgColor: 'transparent',
            gradient: 'tech-blue',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textAlign: 'center'
        },
        number: {
            bgColor: 'rgba(30,136,229,0.2)',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#bbdefb',
            fontFamily: 'MiSans-VF',
            fontSize: 18,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 25,
            skewAngle: 0
        },
        name: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textColor: '#ffffff',
            fontFamily: 'MiSans-VF',
            fontSize: 36,
            fontWeight: 'bold',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'rgba(0,0,0,0.3)',
            shadowX: 1,
            shadowY: 1,
            shadowBlur: 3,
            borderRadius: 0,
            skewAngle: 0
        },
        unit: {
            bgColor: 'rgba(30,136,229,0.2)',
            gradient: 'none',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textColor: '#bbdefb',
            fontFamily: 'MiSans-VF',
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 25,
            skewAngle: 0
        },
        direction: 'horizontal',
        lineGap: 10
    },
    
    // 麦田金 - Wheat Gold
    template28: {
        global: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'all',
            borderColor: '#ffd54f',
            borderWidth: 1,
            textAlign: 'center'
        },
        number: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#ff8f00',
            fontFamily: 'FangZhengFangSong',
            fontSize: 18,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        name: {
            bgColor: 'rgba(255,213,79,0.15)',
            gradient: 'none',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textColor: '#ff6f00',
            fontFamily: 'FangZhengFangSong',
            fontSize: 36,
            fontWeight: 'bold',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 5,
            skewAngle: 0
        },
        unit: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textColor: '#ff8f00',
            fontFamily: 'FangZhengFangSong',
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        direction: 'horizontal',
        lineGap: 8
    },
    
    // 寂静夜 - Silent Night
    template29: {
        global: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'bottom',
            borderColor: '#9575cd',
            borderWidth: 2,
            textAlign: 'center'
        },
        number: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#9575cd',
            fontFamily: 'LuoxiaXinxiHei',
            fontSize: 18,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        name: {
            bgColor: 'transparent',
            gradient: 'dream-purple',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textColor: '#ffffff',
            fontFamily: 'LuoxiaXinxiHei',
            fontSize: 36,
            fontWeight: 'bold',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'rgba(0,0,0,0.2)',
            shadowX: 0,
            shadowY: 2,
            shadowBlur: 4,
            borderRadius: 0,
            skewAngle: 0
        },
        unit: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textColor: '#9575cd',
            fontFamily: 'LuoxiaXinxiHei',
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        direction: 'horizontal',
        lineGap: 10
    },
    
    // 珊瑚魅 - Coral Charm
    template30: {
        global: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'left',
            borderColor: '#ff7043',
            borderWidth: 3,
            textAlign: 'left'
        },
        number: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            textColor: '#ff7043',
            fontFamily: 'OPPOSans',
            fontSize: 18,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        name: {
            bgColor: 'rgba(255,112,67,0.1)',
            gradient: 'none',
            borderStyle: 'bottom',
            borderColor: '#ffccbc',
            borderWidth: 1,
            textColor: '#dd2c00',
            fontFamily: 'OPPOSans',
            fontSize: 36,
            fontWeight: 'bold',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 4,
            skewAngle: 0
        },
        unit: {
            bgColor: 'transparent',
            gradient: 'none',
            borderStyle: 'none',
            borderColor: 'transparent',
            borderWidth: 0,
            textColor: '#ff7043',
            fontFamily: 'OPPOSans',
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            strokeWidth: 0,
            shadowColor: 'transparent',
            shadowX: 0,
            shadowY: 0,
            shadowBlur: 0,
            borderRadius: 0,
            skewAngle: 0
        },
        direction: 'horizontal',
        lineGap: 8
    }
};

// 当前选中的模板
let currentTemplate = null;

// Template Gallery Functionality

// 初始化模板预览
function initializeTemplatePreview() {
    try {
        // 确保模板库元素存在
        const templateGallery = document.getElementById('templateGallery');
        const templateToggleBtn = document.getElementById('templateToggleBtn');
        
        if (!templateGallery || !templateToggleBtn) {
            console.error('未找到模板库或切换按钮元素');
            return;
        }
        
        // 设置初始状态
        templateGallery.classList.remove('active');
        templateToggleBtn.textContent = '显示模板库';
        
        // 生成模板预览
        generateTemplatePreview();
        
        // 添加按钮点击事件
        templateToggleBtn.addEventListener('click', function() {
            templateGallery.classList.toggle('active');
            templateToggleBtn.textContent = templateGallery.classList.contains('active') 
                ? '隐藏模板库' 
                : '显示模板库';
        });
        
        console.log('模板库初始化完成');
    } catch (error) {
        console.error('初始化模板预览时出错:', error);
    }
}

// 生成模板预览卡片的样式
function generateTemplatePreview() {
    // 模板样式定义
    const templates = {
        template1: {
            // 简约黑白
            name: '简约黑白',
            style: function(card) {
                card.style.backgroundColor = '#ffffff';
                card.style.borderBottom = '2px solid #000';
            }
        },
                template3: {
            // 商务金
            name: '商务金',
            style: function(card) {
                card.style.background = 'linear-gradient(135deg, #f0e6d2, #d4af37)';
                card.style.border = '1px solid #d4af37';
            }
        },
        template4: {
            // 活力橙
            name: '活力橙',
            style: function(card) {
                card.style.background = 'linear-gradient(to right, rgba(255,125,0,1), rgba(255,77,79,1))';
                card.style.color = '#fff';
            }
        },
                template6: {
            // 文艺雅致
            name: '文艺雅致',
            style: function(card) {
                card.style.background = '#f8f5f0';
                card.style.border = '1px solid #e0d6c6';
                card.style.color = '#5c4f3c';
            }
        },
        template7: {
            // 学术深蓝
            name: '学术深蓝',
            style: function(card) {
                card.style.background = '#1e3a8a';
                card.style.color = '#ffffff';
                card.style.borderLeft = '5px solid #facc15';
            }
        },
        template8: {
            // 复古中式
            name: '复古中式',
            style: function(card) {
                card.style.background = '#f5f5f5';
                card.style.border = '1px solid #d9d9d9';
                card.style.color = '#262626';
                // 添加一个小标识表示这是竖排模式
                card.style.backgroundImage = 'linear-gradient(90deg, #d9d9d9 1px, transparent 1px)';
                card.style.backgroundSize = '10px 100%';
                card.style.backgroundPosition = '10px 0';
            }
        },
        template9: {
            // 透明简约
            name: '透明简约',
            style: function(card) {
                card.style.background = 'transparent';
                card.style.border = 'none';
            }
        },
                template11: {
            // 优雅白 - Elegant White
            name: '优雅白',
            style: function(card) {
                card.style.background = '#ffffff';
                card.style.border = '1px solid #e0e0e0';
            }
        },
        template12: {
            // 现代黑 - Modern Black
            name: '现代黑',
            style: function(card) {
                card.style.background = '#212121';
                card.style.color = '#757575';
            }
        },
        template13: {
            // 紫色渐变 - Gradient Purple
            name: '紫色渐变',
            style: function(card) {
                card.style.background = 'linear-gradient(to right, rgba(255,255,255,0.2), rgba(255,255,255,0))';
                card.style.color = '#ffffff';
            }
        },
        template14: {
            // 自然绿 - Earthy Green
            name: '自然绿',
            style: function(card) {
                card.style.background = '#f1f8e9';
                card.style.border = '1px solid #aed581';
            }
        },
        template15: {
            // 企业红 - Corporate Red
            name: '企业红',
            style: function(card) {
                card.style.background = '#ffffff';
                card.style.borderLeft = '4px solid #e53935';
            }
        },
        template16: {
            // 柔和粉彩 - Soft Pastel
            name: '柔和粉彩',
            style: function(card) {
                card.style.background = '#f5f5f5';
                card.style.border = '1px solid #e0e0e0';
            }
        },
        template17: {
            // 科技斜切 - Skewed Tech
            name: '科技斜切',
            style: function(card) {
                card.style.background = 'transparent';
                card.style.color = '#80deea';
            }
        },
        template18: {
            // 极简灰 - Minimalist Gray
            name: '极简灰',
            style: function(card) {
                card.style.background = '#fafafa';
                card.style.borderBottom = '1px solid #e0e0e0';
            }
        },
                template20: {
            // 复古棕 - Vintage Brown
            name: '复古棕',
            style: function(card) {
                card.style.background = '#efebe9';
                card.style.border = '1px solid #bcaaa4';
            }
        },
        template21: {
            // 湖水青 - Aqua Blue
            name: '湖水青',
            style: function(card) {
                card.style.background = 'linear-gradient(to right, rgba(140,211,214,0.8), rgba(123,97,255,0.8))';
                card.style.color = '#fff';
            }
        },
        template22: {
            // 日落橙 - Sunset Orange
            name: '日落橙',
            style: function(card) {
                card.style.background = 'linear-gradient(to right, rgba(255,125,0,1), rgba(255,77,79,1))';
                card.style.color = '#fff';
            }
        },
        template23: {
            // 霓虹灯 - Neon Lights
            name: '霓虹灯',
            style: function(card) {
                card.style.background = 'linear-gradient(to right, rgba(255,255,255,0.2), rgba(255,255,255,0))';
                card.style.color = '#ffffff';
            }
        },
        template24: {
            // 水墨风 - Ink Wash
            name: '水墨风',
            style: function(card) {
                card.style.background = 'linear-gradient(to right, rgba(0,0,0,0.2), rgba(255,255,255,0))';
                card.style.color = '#ffffff';
            }
        },
        template25: {
            // 粉色花瓣 - Pink Petals
            name: '粉色花瓣',
            style: function(card) {
                card.style.background = 'linear-gradient(to right, rgba(255,255,255,0.2), rgba(255,255,255,0))';
                card.style.color = '#ffffff';
            }
        },
        template26: {
            // 翡翠绿 - Emerald Green
            name: '翡翠绿',
            style: function(card) {
                card.style.background = 'linear-gradient(to right, rgba(255,255,255,0.2), rgba(255,255,255,0))';
                card.style.color = '#ffffff';
            }
        },
        template27: {
            // 深空蓝 - Deep Space Blue
            name: '深空蓝',
            style: function(card) {
                card.style.background = 'linear-gradient(to right, rgba(30,136,229,0.2), rgba(123,97,255,0.8))';
                card.style.color = '#fff';
            }
        },
        template28: {
            // 麦田金 - Wheat Gold
            name: '麦田金',
            style: function(card) {
                card.style.background = 'linear-gradient(to right, rgba(255,213,79,0.15), rgba(255,255,255,0))';
                card.style.color = '#ffffff';
            }
        },
        template29: {
            // 寂静夜 - Silent Night
            name: '寂静夜',
            style: function(card) {
                card.style.background = 'linear-gradient(to right, rgba(149,117,205,0.2), rgba(255,255,255,0))';
                card.style.color = '#ffffff';
            }
        },
        template30: {
            // 珊瑚魅 - Coral Charm
            name: '珊瑚魅',
            style: function(card) {
                card.style.background = 'linear-gradient(to right, rgba(255,112,67,0.1), rgba(255,255,255,0))';
                card.style.color = '#ffffff';
            }
        }
    };
    
    // 为每个模板卡片应用样式
    Object.keys(templates).forEach(templateId => {
        const templateCard = document.getElementById(templateId);
        if (templateCard) {
            templates[templateId].style(templateCard);
        }
    });
}

// 根据ID选择模板并应用
function applyTemplate(templateId) {
    // 先应用对象式模板
    const template = templates[templateId];
    if (template) {
        try {
            // 通过模板对象直接应用样式设置
            applyObjectTemplate(templateId);
            // 触发模板应用事件
            document.dispatchEvent(new CustomEvent('templateApplied'));
            return;
        } catch (error) {
            console.warn('通过模板对象应用失败，尝试使用函数模式:', error);
        }
    }
    
    // 如果通过模板对象应用失败，尝试使用老式函数方法
    try {
        // 首先取消其他模板的选择状态
        const templateCards = document.querySelectorAll('.template-card');
        templateCards.forEach(card => {
            card.classList.remove('selected');
        });
        
        // 设置当前选中的模板
        const selectedTemplate = document.getElementById(templateId);
        if (selectedTemplate) {
            selectedTemplate.classList.add('selected');
        }
        
        // 根据模板ID应用不同的样式
        switch(templateId) {
            case 'template1': // 简约黑白
                applySimpleBlackWhiteTemplate();
                break;
                
            case 'template2': // 蓝色渐变
                applyBlueGradientTemplate();
                break;
                
            case 'template3': // 商务金
                applyBusinessGoldTemplate();
                break;
                
            case 'template4': // 活力橙
                applyVibrantOrangeTemplate();
                break;
                
            case 'template5': // 科技风
                applyTechTemplate();
                break;
                
            case 'template6': // 文艺雅致
                applyArtisticTemplate();
                break;
                
            case 'template7': // 学术深蓝
                applyAcademicTemplate();
                break;
                
            case 'template8': // 竖排中式
                applyChineseVerticalTemplate();
                break;
                
            case 'template9': // 透明简约
                applyTransparentSimpleTemplate();
                break;
                
            case 'template10': // 科技蓝
                applyTechBlueTemplate();
                break;
                
            case 'template11': // 优雅白
                applyElegantWhiteTemplate();
                break;
                
            case 'template12': // 现代黑
                applyModernBlackTemplate();
                break;
                
            case 'template13': // 紫色渐变
                applyGradientPurpleTemplate();
                break;
                
            case 'template14': // 自然绿
                applyEarthyGreenTemplate();
                break;
                
            case 'template15': // 企业红
                applyCorporateRedTemplate();
                break;
                
            case 'template16': // 柔和粉彩
                applySoftPastelTemplate();
                break;
                
            case 'template17': // 科技斜切
                applySkewedTechTemplate();
                break;
                
            case 'template18': // 极简灰
                applyMinimalistGrayTemplate();
                break;
                
            case 'template19': // 黄金奢华
                applyGoldenLuxuryTemplate();
                break;
                
            case 'template20': // 复古棕
                applyVintageBrownTemplate();
                break;
                
            case 'template21': // 湖水青
                applyAquaBlueTemplate();
                break;
                
            case 'template22': // 日落橙
                applySunsetOrangeTemplate();
                break;
                
            case 'template23': // 霓虹灯
                applyNeonLightsTemplate();
                break;
                
            case 'template24': // 水墨风
                applyInkWashTemplate();
                break;
                
            case 'template25': // 粉色花瓣
                applyPinkPetalsTemplate();
                break;
                
            case 'template26': // 翡翠绿
                applyEmeraldGreenTemplate();
                break;
                
            case 'template27': // 深空蓝
                applyDeepSpaceBlueTemplate();
                break;
                
            case 'template28': // 麦田金
                applyWheatGoldTemplate();
                break;
                
            case 'template29': // 寂静夜
                applySilentNightTemplate();
                break;
                
            case 'template30': // 珊瑚魅
                applyCoralCharmTemplate();
                break;
                
            default:
                console.warn('未知的模板ID:', templateId);
                return;
        }
        
        // 更新UI显示
        if (typeof updateIfDataLoaded === 'function') {
            updateIfDataLoaded();
        } else if (typeof generateFixedNameCards === 'function') {
            generateFixedNameCards();
        }
        
        // 触发模板应用事件
        document.dispatchEvent(new CustomEvent('templateApplied'));
        
        console.log('成功应用模板:', templateId);
    } catch (error) {
        console.error('应用模板时出错:', error);
    }
}

// 模板应用函数 - 从模板对象应用
function applyObjectTemplate(templateId) {
    const template = templates[templateId];
    if (!template) return;
    
    // 清除之前选中的模板
    if (currentTemplate) {
        const prevCard = document.getElementById(currentTemplate);
        if (prevCard) prevCard.classList.remove('selected');
    }
    
    // 标记当前选中的模板
    currentTemplate = templateId;
    const currentCard = document.getElementById(templateId);
    if (currentCard) currentCard.classList.add('selected');
    
    // 初始化styleConfig对象如果它不存在
    if (!window.styleConfig) {
        window.styleConfig = {
            global: {},
            number: {},
            name: {},
            unit: {}
        };
    }
    
    // 应用全局设置
    if (template.global) {
        // 确保styleConfig.global存在
        if (!window.styleConfig.global) {
            window.styleConfig.global = {};
        }
        
        // 背景色
        if (template.global.bgColor !== undefined) {
            document.getElementById('globalBgColor').value = template.global.bgColor;
            // 更新颜色选择器
            if (window.pickrInstances && window.pickrInstances['globalBgPicker']) {
                window.pickrInstances['globalBgPicker'].setColor(template.global.bgColor);
            }
            // 更新全局样式设置
            window.styleConfig.global.bgColor = template.global.bgColor;
        }
        
        // 渐变
        if (template.global.gradient !== undefined) {
            document.getElementById('globalGradient').value = template.global.gradient;
            // 更新全局样式设置
            window.styleConfig.global.gradient = template.global.gradient;
        }
        
        // 边框样式
        if (template.global.borderStyle !== undefined) {
            const style = template.global.borderStyle;
            // 更新边框样式配置
            window.styleConfig.global.borderStyle = style;
            
            // 更新边框样式按钮状态
            const btnIds = ['None', 'Bottom', 'Top', 'Left', 'Right', 'All'];
            btnIds.forEach(btnId => {
                const btn = document.getElementById(`globalBorder${btnId}Btn`);
                if (btn) {
                    btn.classList.toggle('active', btnId.toLowerCase() === style);
                }
            });
            
            // 同时调用原始的toggleBorderStyle函数保持一致性
            if (typeof toggleBorderStyle === 'function') {
                toggleBorderStyle('global', style);
            }
        }
        
        // 边框颜色
        if (template.global.borderColor !== undefined) {
            document.getElementById('globalBorderColor').value = template.global.borderColor;
            if (window.pickrInstances && window.pickrInstances['globalBorderPicker']) {
                window.pickrInstances['globalBorderPicker'].setColor(template.global.borderColor);
            }
            // 更新全局样式设置
            window.styleConfig.global.borderColor = template.global.borderColor;
        }
        
        // 边框宽度
        if (template.global.borderWidth !== undefined) {
            document.getElementById('globalBorderWidth').value = template.global.borderWidth;
            // 更新全局样式设置
            window.styleConfig.global.borderWidth = template.global.borderWidth.toString();
        }
        
        // 文本对齐
        if (template.global.textAlign !== undefined) {
            // 更新全局样式设置
            window.styleConfig.global.textAlign = template.global.textAlign;
            
            // 更新按钮状态
            const alignBtns = {
                'left': document.getElementById('alignLeftBtn'),
                'center': document.getElementById('alignCenterBtn'),
                'right': document.getElementById('alignRightBtn')
            };
            
            for (const [align, btn] of Object.entries(alignBtns)) {
                if (btn) {
                    btn.classList.toggle('active', align === template.global.textAlign);
                }
            }
            
            // 调用原始函数以保持一致性
            if (typeof setTextAlign === 'function') {
                setTextAlign(template.global.textAlign);
            }
        }
    }
    
    // 应用编号列设置
    if (template.number) {
        if (!window.styleConfig.number) {
            window.styleConfig.number = {};
        }
        applyElementSettings('number', template.number);
    }
    
    // 应用姓名列设置
    if (template.name) {
        if (!window.styleConfig.name) {
            window.styleConfig.name = {};
        }
        applyElementSettings('name', template.name);
    }
    
    // 应用单位列设置
    if (template.unit) {
        if (!window.styleConfig.unit) {
            window.styleConfig.unit = {};
        }
        applyElementSettings('unit', template.unit);
    }
    
    // 设置文本方向（横排/竖排）
    if (template.direction !== undefined) {
        // 更新文本方向配置
        window.styleConfig.direction = template.direction;
        
        // 更新按钮状态
        const horizontalBtn = document.getElementById('directionHorizontalBtn');
        const verticalBtn = document.getElementById('directionVerticalBtn');
        
        if (horizontalBtn) horizontalBtn.classList.toggle('active', template.direction === 'horizontal');
        if (verticalBtn) verticalBtn.classList.toggle('active', template.direction === 'vertical');
        
        // 调用原始函数以保持一致性
        if (typeof setTextDirection === 'function') {
            setTextDirection(template.direction);
        }
    }
    
    // 设置行间距
    if (template.lineGap !== undefined) {
        document.getElementById('lineGap').value = template.lineGap;
        // 更新全局样式设置中的行间距
        window.styleConfig.lineGap = template.lineGap.toString();
    }
    
    // 更新所有现有卡片
    if (typeof onStyleConfigChanged === 'function') {
        onStyleConfigChanged();
    } else if (typeof updateCardStyles === 'function') {
        updateCardStyles();
    } else if (typeof generateFixedNameCards === 'function') {
        generateFixedNameCards();
    } else if (typeof updateIfDataLoaded === 'function') {
        updateIfDataLoaded();
    }
}

// 应用设置到特定元素类型
function applyElementSettings(elementType, settings) {
    if (!window.styleConfig) {
        window.styleConfig = {};
    }
    
    // 检查是否有范围样式
    const hasRangeStyle = document.querySelector(`.${elementType}-line.has-range-style`) !== null;
    
    // 更新元素设置
    if (!window.styleConfig[elementType]) {
        window.styleConfig[elementType] = {};
    }
    
    // 更新所有样式属性
    Object.keys(settings).forEach(key => {
        if (settings[key] !== undefined) {
            // 如果是文本相关样式且有范围样式，则跳过
            if (hasRangeStyle && ['textColor', 'fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'textDecoration'].includes(key)) {
                return;
            }
            window.styleConfig[elementType][key] = settings[key];
        }
    });
    
    // 更新UI控件
    const elementId = elementType.charAt(0).toUpperCase() + elementType.slice(1);
    
    // 背景色
    if (settings.bgColor !== undefined) {
        document.getElementById(`${elementType}BgColor`).value = settings.bgColor;
        if (window.pickrInstances && window.pickrInstances[`${elementType}BgPicker`]) {
            window.pickrInstances[`${elementType}BgPicker`].setColor(settings.bgColor);
        }
    }
    
    // 渐变
    if (settings.gradient !== undefined) {
        document.getElementById(`${elementType}Gradient`).value = settings.gradient;
    }
    
    // 边框样式
    if (settings.borderStyle !== undefined) {
        const btnIds = ['None', 'Bottom', 'Top', 'Left', 'Right', 'All'];
        btnIds.forEach(btnId => {
            const btn = document.getElementById(`${elementType}Border${btnId}Btn`);
            if (btn) {
                btn.classList.toggle('active', btnId.toLowerCase() === settings.borderStyle);
            }
        });
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle(elementType, settings.borderStyle);
        }
    }
    
    // 边框颜色
    if (settings.borderColor !== undefined) {
        document.getElementById(`${elementType}BorderColor`).value = settings.borderColor;
        if (window.pickrInstances && window.pickrInstances[`${elementType}BorderPicker`]) {
            window.pickrInstances[`${elementType}BorderPicker`].setColor(settings.borderColor);
        }
    }
    
    // 边框宽度
    if (settings.borderWidth !== undefined) {
        document.getElementById(`${elementType}BorderWidth`).value = settings.borderWidth;
    }
    
    // 文本颜色
    if (settings.textColor !== undefined && !hasRangeStyle) {
        document.getElementById(`${elementType}TextColor`).value = settings.textColor;
        if (window.pickrInstances && window.pickrInstances[`${elementType}TextPicker`]) {
            window.pickrInstances[`${elementType}TextPicker`].setColor(settings.textColor);
        }
    }
    
    // 字体
    if (settings.fontFamily !== undefined && !hasRangeStyle) {
        document.getElementById(`${elementType}FontFamily`).value = settings.fontFamily;
    }
    
    // 字号
    if (settings.fontSize !== undefined && !hasRangeStyle) {
        document.getElementById(`${elementType}FontSize`).value = settings.fontSize;
    }
    
    // 字重
    if (settings.fontWeight !== undefined && !hasRangeStyle) {
        const boldBtn = document.getElementById(`${elementType}BoldBtn`);
        if (boldBtn) {
            boldBtn.classList.toggle('active', settings.fontWeight === 'bold');
        }
    }
    
    // 字型
    if (settings.fontStyle !== undefined && !hasRangeStyle) {
        const italicBtn = document.getElementById(`${elementType}ItalicBtn`);
        if (italicBtn) {
            italicBtn.classList.toggle('active', settings.fontStyle === 'italic');
        }
    }
    
    // 装饰
    if (settings.textDecoration !== undefined && !hasRangeStyle) {
        const underlineBtn = document.getElementById(`${elementType}UnderlineBtn`);
        if (underlineBtn) {
            underlineBtn.classList.toggle('active', settings.textDecoration === 'underline');
        }
    }
    
    // 描边
    if (settings.strokeWidth !== undefined) {
        document.getElementById(`${elementType}StrokeWidth`).value = settings.strokeWidth;
    }
    if (settings.strokeColor !== undefined) {
        document.getElementById(`${elementType}StrokeColor`).value = settings.strokeColor;
        if (window.pickrInstances && window.pickrInstances[`${elementType}StrokePicker`]) {
            window.pickrInstances[`${elementType}StrokePicker`].setColor(settings.strokeColor);
        }
    }
    
    // 阴影
    if (settings.shadowX !== undefined) {
        document.getElementById(`${elementType}ShadowX`).value = settings.shadowX;
    }
    if (settings.shadowY !== undefined) {
        document.getElementById(`${elementType}ShadowY`).value = settings.shadowY;
    }
    if (settings.shadowBlur !== undefined) {
        document.getElementById(`${elementType}ShadowBlur`).value = settings.shadowBlur;
    }
    if (settings.shadowColor !== undefined) {
        document.getElementById(`${elementType}ShadowColor`).value = settings.shadowColor;
        if (window.pickrInstances && window.pickrInstances[`${elementType}ShadowPicker`]) {
            window.pickrInstances[`${elementType}ShadowPicker`].setColor(settings.shadowColor);
        }
    }
    
    // 圆角
    if (settings.borderRadius !== undefined) {
        document.getElementById(`${elementType}BorderRadius`).value = settings.borderRadius;
    }
    
    // 斜角
    if (settings.skewAngle !== undefined) {
        document.getElementById(`${elementType}SkewAngle`).value = settings.skewAngle;
    }
    
    // 更新现有卡片的样式
    if (typeof updateCardStyles === 'function') {
        updateCardStyles();
    }
    
    // 触发样式更新事件
    const event = new CustomEvent('styleUpdated', {
        detail: { 
            preserveRangeStyles: hasRangeStyle,
            settings: settings
        }
    });
    document.dispatchEvent(event);
}

// 更新样式UI
function updateStyleUI() {
    // 更新全局样式UI
    if (window.styleConfig.global) {
        const global = window.styleConfig.global;
        if (global.bgColor) {
            setPickrColor('globalBgPicker', global.bgColor);
        }
        if (global.gradient) {
            const gradientSelect = document.getElementById('globalGradient');
            if (gradientSelect) {
                gradientSelect.value = global.gradient;
            }
        }
        if (global.borderStyle) {
            toggleBorderStyle('global', global.borderStyle);
        }
        if (global.borderWidth) {
            const borderWidthInput = document.getElementById('globalBorderWidth');
            if (borderWidthInput) {
                borderWidthInput.value = global.borderWidth;
            }
        }
        if (global.borderColor) {
            setPickrColor('globalBorderPicker', global.borderColor);
        }
    }
    
    // 更新各元素样式UI
    ['number', 'name', 'unit'].forEach(element => {
        const config = window.styleConfig[element];
        if (!config) return;
        
        // 更新背景颜色
        if (config.bgColor) {
            setPickrColor(`${element}BgPicker`, config.bgColor);
        }
        
        // 更新渐变
        if (config.gradient) {
            const gradientSelect = document.getElementById(`${element}Gradient`);
            if (gradientSelect) {
                gradientSelect.value = config.gradient;
            }
        }
        
        // 更新文本颜色
        if (config.textColor) {
            setPickrColor(`${element}TextPicker`, config.textColor);
        }
        
        // 更新字体
        if (config.fontFamily) {
            const fontSelect = document.getElementById(`${element}FontFamily`);
            if (fontSelect) {
                fontSelect.value = config.fontFamily;
            }
        }
        
        // 更新字体大小
        if (config.fontSize) {
            const fontSizeInput = document.getElementById(`${element}FontSize`);
            if (fontSizeInput) {
                fontSizeInput.value = config.fontSize;
            }
        }
        
        // 更新字体样式
        if (config.fontWeight) {
            const boldBtn = document.getElementById(`${element}BoldBtn`);
            if (boldBtn) {
                boldBtn.classList.toggle('active', config.fontWeight === 'bold');
            }
        }
        if (config.fontStyle) {
            const italicBtn = document.getElementById(`${element}ItalicBtn`);
            if (italicBtn) {
                italicBtn.classList.toggle('active', config.fontStyle === 'italic');
            }
        }
        if (config.textDecoration) {
            const underlineBtn = document.getElementById(`${element}UnderlineBtn`);
            if (underlineBtn) {
                underlineBtn.classList.toggle('active', config.textDecoration === 'underline');
            }
        }
        
        // 更新描边
        if (config.strokeWidth) {
            const strokeWidthInput = document.getElementById(`${element}StrokeWidth`);
            if (strokeWidthInput) {
                strokeWidthInput.value = config.strokeWidth;
            }
        }
        if (config.strokeColor) {
            setPickrColor(`${element}StrokePicker`, config.strokeColor);
        }
        
        // 更新阴影
        if (config.shadowX !== undefined) {
            const shadowXInput = document.getElementById(`${element}ShadowX`);
            if (shadowXInput) {
                shadowXInput.value = config.shadowX;
            }
        }
        if (config.shadowY !== undefined) {
            const shadowYInput = document.getElementById(`${element}ShadowY`);
            if (shadowYInput) {
                shadowYInput.value = config.shadowY;
            }
        }
        if (config.shadowBlur !== undefined) {
            const shadowBlurInput = document.getElementById(`${element}ShadowBlur`);
            if (shadowBlurInput) {
                shadowBlurInput.value = config.shadowBlur;
            }
        }
        if (config.shadowColor) {
            setPickrColor(`${element}ShadowPicker`, config.shadowColor);
        }
        
        // 更新边框
        if (config.borderStyle) {
            toggleBorderStyle(element, config.borderStyle);
        }
        if (config.borderWidth) {
            const borderWidthInput = document.getElementById(`${element}BorderWidth`);
            if (borderWidthInput) {
                borderWidthInput.value = config.borderWidth;
            }
        }
        if (config.borderColor) {
            setPickrColor(`${element}BorderPicker`, config.borderColor);
        }
        
        // 更新圆角
        if (config.borderRadius) {
            const borderRadiusInput = document.getElementById(`${element}BorderRadius`);
            if (borderRadiusInput) {
                borderRadiusInput.value = config.borderRadius;
            }
        }
        
        // 更新斜角
        if (config.skewAngle) {
            const skewAngleInput = document.getElementById(`${element}SkewAngle`);
            if (skewAngleInput) {
                skewAngleInput.value = config.skewAngle;
            }
        }
    });
}

// 更新现有卡片的样式
function updateCardStyles() {
    // 检查是否有数据
    if (window.excelData && window.excelData.length > 0) {
        const cards = document.querySelectorAll('.name-card');
        cards.forEach(card => {
            // 应用全局样式
            if (window.styleConfig.global) {
                // 背景色
                if (window.styleConfig.global.bgColor !== undefined) {
                    card.style.backgroundColor = window.styleConfig.global.bgColor;
                }
                
                // 渐变
                if (window.styleConfig.global.gradient !== undefined && window.styleConfig.global.gradient !== 'none') {
                    card.style.backgroundImage = getGradientStyle(window.styleConfig.global.gradient);
                } else {
                    card.style.backgroundImage = '';
                }
                
                // 文本对齐
                if (window.styleConfig.global.textAlign !== undefined) {
                    card.style.textAlign = window.styleConfig.global.textAlign;
                }
                
                // 边框样式
                if (window.styleConfig.global.borderStyle !== undefined) {
                    const style = window.styleConfig.global.borderStyle;
                    const color = window.styleConfig.global.borderColor;
                    const width = window.styleConfig.global.borderWidth;
                    
                    if (style === 'all') {
                        card.style.border = `${width}px solid ${color}`;
                    } else if (style === 'bottom') {
                        card.style.borderBottom = `${width}px solid ${color}`;
                    } else if (style === 'top') {
                        card.style.borderTop = `${width}px solid ${color}`;
                    } else if (style === 'left') {
                        card.style.borderLeft = `${width}px solid ${color}`;
                    } else if (style === 'right') {
                        card.style.borderRight = `${width}px solid ${color}`;
                    } else {
                        card.style.border = 'none';
                    }
                }
            }
            
            // 依次处理 number, name, unit
            ['number', 'name', 'unit'].forEach(type => {
                const el = card.querySelector(`.${type}-line`);
                if (!el) return;
                
                const conf = window.styleConfig[type];
                if (!conf) return;
                
                // 检查是否有范围样式
                const hasRangeStyle = el.dataset.hasRangeStyle === 'true';
                
                // 背景色/渐变
                if (conf.bgColor !== undefined) {
                    el.style.backgroundColor = conf.bgColor;
                }
                
                if (conf.gradient !== undefined && conf.gradient !== 'none') {
                    el.style.backgroundImage = getGradientStyle(conf.gradient);
                } else {
                    el.style.backgroundImage = '';
                }
                
                // 如果没有范围样式，应用文本相关样式
                if (!hasRangeStyle) {
                    // 字体、颜色、字号、字重、字型、装饰
                    if (conf.textColor !== undefined) {
                        el.style.color = conf.textColor;
                    }
                    
                    if (conf.fontFamily !== undefined) {
                        el.style.fontFamily = `"${conf.fontFamily}", sans-serif`;
                    }
                    
                    if (conf.fontSize !== undefined) {
                        el.style.fontSize = `${conf.fontSize}px`;
                    }
                    
                    if (conf.fontWeight !== undefined) {
                        el.style.fontWeight = conf.fontWeight;
                    }
                    
                    if (conf.fontStyle !== undefined) {
                        el.style.fontStyle = conf.fontStyle;
                    }
                    
                    if (conf.textDecoration !== undefined) {
                        el.style.textDecoration = conf.textDecoration;
                    }
                }
                
                // 描边
                if (conf.strokeWidth !== undefined && conf.strokeWidth !== '0') {
                    el.style.webkitTextStroke = `${conf.strokeWidth}px ${conf.strokeColor || '#000000'}`;
                } else {
                    el.style.webkitTextStroke = 'none';
                }
                
                // 阴影
                if (conf.shadowX !== undefined && conf.shadowY !== undefined && conf.shadowBlur !== undefined) {
                    const shadowColor = conf.shadowColor || '#000000';
                    el.style.textShadow = `${conf.shadowX}px ${conf.shadowY}px ${conf.shadowBlur}px ${shadowColor}`;
                } else {
                    el.style.textShadow = '';
                }
                
                // 圆角
                if (conf.borderRadius !== undefined) {
                    el.style.borderRadius = `${conf.borderRadius}px`;
                }
                
                // 斜切
                if (conf.skewAngle !== undefined && conf.skewAngle !== '0') {
                    el.style.transform = `skew(${conf.skewAngle}deg)`;
                } else {
                    el.style.transform = '';
                }
                
                // 边框
                if (conf.borderStyle !== undefined) {
                    const style = conf.borderStyle;
                    const color = conf.borderColor;
                    const width = conf.borderWidth;
                    
                    if (style === 'all') {
                        el.style.border = `${width}px solid ${color}`;
                    } else if (style === 'bottom') {
                        el.style.borderBottom = `${width}px solid ${color}`;
                    } else if (style === 'top') {
                        el.style.borderTop = `${width}px solid ${color}`;
                    } else if (style === 'left') {
                        el.style.borderLeft = `${width}px solid ${color}`;
                    } else if (style === 'right') {
                        el.style.borderRight = `${width}px solid ${color}`;
                    } else {
                        el.style.border = 'none';
                    }
                }
            });
        });
    }
}

// 更新非文本相关的样式
function updateNonTextStyles() {
    const cards = document.querySelectorAll('.name-card');
    cards.forEach(card => {
        ['number', 'name', 'unit'].forEach(element => {
            const elementLine = card.querySelector(`.${element}-line`);
            if (!elementLine) return;
            
            const config = window.styleConfig[element];
            if (!config) return;
            
            // 更新背景颜色
            if (config.bgColor) {
                elementLine.style.backgroundColor = config.bgColor;
            }
            
            // 更新渐变
            if (config.gradient) {
                elementLine.style.backgroundImage = getGradientStyle(config.gradient);
            }
            
            // 更新边框样式
            if (config.borderStyle) {
                elementLine.style.borderStyle = config.borderStyle;
            }
            if (config.borderColor) {
                elementLine.style.borderColor = config.borderColor;
            }
            if (config.borderWidth) {
                elementLine.style.borderWidth = `${config.borderWidth}px`;
            }
            
            // 更新圆角
            if (config.borderRadius) {
                elementLine.style.borderRadius = `${config.borderRadius}px`;
            }
            
            // 更新斜角
            if (config.skewAngle) {
                elementLine.style.transform = `skew(${config.skewAngle}deg)`;
            }
        });
    });
}

// 获取渐变样式
function getGradientStyle(gradientType) {
    switch (gradientType) {
        case 'tech-blue':
            return 'linear-gradient(45deg, #2196F3, #00BCD4)';
        case 'vibrant-orange':
            return 'linear-gradient(45deg, #FF9800, #FF5722)';
        case 'dream-purple':
            return 'linear-gradient(45deg, #9C27B0, #E91E63)';
        case 'nature-green':
            return 'linear-gradient(45deg, #4CAF50, #8BC34A)';
        case 'glass-effect':
            return 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.2))';
        case 'dynamic-flow':
            return 'linear-gradient(45deg, #FF4081, #7C4DFF)';
        case 'retro-film':
            return 'linear-gradient(45deg, #FFD700, #FFA500)';
        case 'neon-effect':
            return 'linear-gradient(45deg, #00FF00, #00FFFF)';
        default:
            return 'none';
    }
}

// 辅助函数：设置Pickr颜色
function setPickrColor(pickerName, color) {
    try {
        if (window.pickrInstances && window.pickrInstances[pickerName]) {
            const picker = window.pickrInstances[pickerName];
            if (picker && typeof picker.setColor === 'function') {
                picker.setColor(color);
            }
        } else {
            // 兼容备用方案 - 直接设置对应input的值
            const inputMap = {
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
                'unitShadowPicker': 'unitShadowColor'
            };
            
            const inputId = inputMap[pickerName];
            if (inputId) {
                const input = document.getElementById(inputId);
                if (input) {
                    if (color === 'transparent') {
                        input.value = '#ffffff'; // 标准HTML颜色输入不支持透明度
                        input.setAttribute('data-rgba', 'rgba(255,255,255,0)');
                    } else {
                        // 尝试转换为标准HTML颜色格式
                        let hexColor = color;
                        if (color.startsWith('rgba')) {
                            // 对于rgba格式，先保存为data属性，然后尝试提取近似hex
                            input.setAttribute('data-rgba', color);
                            // 简单转换（忽略透明度）
                            const rgbValues = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
                            if (rgbValues) {
                                const r = parseInt(rgbValues[1]).toString(16).padStart(2, '0');
                                const g = parseInt(rgbValues[2]).toString(16).padStart(2, '0');
                                const b = parseInt(rgbValues[3]).toString(16).padStart(2, '0');
                                hexColor = `#${r}${g}${b}`;
                            }
                        }
                        input.value = hexColor;
                    }
                }
            }
        }
    } catch (error) {
        console.error('设置颜色失败:', error);
    }
}

// 模板9: 透明简约
function applyTransparentSimpleTemplate() {
    try {
        // 全局设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBgPicker', 'transparent');
        }
        document.getElementById('globalGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('global', 'none');
        }
        document.getElementById('globalBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBorderPicker', '#000000');
        }
        if (typeof setTextAlign === 'function') {
            setTextAlign('center');
        }
        if (typeof setTextDirection === 'function') {
            setTextDirection('horizontal');
        }
        document.getElementById('lineGap').value = 0;
        
        // 编号设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberBgPicker', 'transparent');
        }
        document.getElementById('numberGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('number', 'none');
        }
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberTextPicker', '#ffffff');
        }
        document.getElementById('numberFontFamily').value = '微软雅黑';
        document.getElementById('numberFontSize').value = 20;
        
        // 字体样式设置
        const numberBoldBtn = document.getElementById('numberBoldBtn');
        if (numberBoldBtn) {
            numberBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.number) window.styleConfig.number = {};
            window.styleConfig.number.fontWeight = 'bold';
        }
        
        document.getElementById('numberStrokeWidth').value = 0;
        document.getElementById('numberShadowX').value = 0;
        document.getElementById('numberShadowY').value = 0;
        document.getElementById('numberShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberShadowPicker', '#000000');
        }
        document.getElementById('numberBorderRadius').value = 0;
        document.getElementById('numberSkewAngle').value = 0;
        
        // 姓名设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameBgPicker', 'transparent');
        }
        document.getElementById('nameGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('name', 'none');
        }
        document.getElementById('nameBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameTextPicker', '#ffffff');
        }
        document.getElementById('nameFontFamily').value = '微软雅黑';
        document.getElementById('nameFontSize').value = 36;
        
        // 字体样式设置
        const nameBoldBtn = document.getElementById('nameBoldBtn');
        if (nameBoldBtn) {
            nameBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.name) window.styleConfig.name = {};
            window.styleConfig.name.fontWeight = 'bold';
        }
        
        document.getElementById('nameStrokeWidth').value = 0;
        document.getElementById('nameShadowX').value = 0;
        document.getElementById('nameShadowY').value = 0;
        document.getElementById('nameShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameShadowPicker', '#000000');
        }
        document.getElementById('nameBorderRadius').value = 0;
        document.getElementById('nameSkewAngle').value = 0;
        
        // 单位设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitBgPicker', 'transparent');
        }
        document.getElementById('unitGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('unit', 'none');
        }
        document.getElementById('unitBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitTextPicker', '#ffffff');
        }
        document.getElementById('unitFontFamily').value = '微软雅黑';
        document.getElementById('unitFontSize').value = 20;
        document.getElementById('unitStrokeWidth').value = 0;
        document.getElementById('unitShadowX').value = 0;
        document.getElementById('unitShadowY').value = 0;
        document.getElementById('unitShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitShadowPicker', '#000000');
        }
        document.getElementById('unitBorderRadius').value = 0;
        document.getElementById('unitSkewAngle').value = 0;
    } catch (error) {
        console.error('应用透明简约模板时出错:', error);
    }
}

// 模板10: 科技蓝


// 优雅白 - Elegant White
function applyElegantWhiteTemplate() {
    try {
        // 全局设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBgPicker', '#ffffff');
        }
        document.getElementById('globalGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('global', 'none');
        }
        document.getElementById('globalBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBorderPicker', '#e0e0e0');
        }
        if (typeof setTextAlign === 'function') {
            setTextAlign('center');
        }
        if (typeof setTextDirection === 'function') {
            setTextDirection('horizontal');
        }
        document.getElementById('lineGap').value = 0;
        
        // 编号设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberBgPicker', '#f8bbd0');
        }
        document.getElementById('numberGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('number', 'none');
        }
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberTextPicker', '#ffffff');
        }
        document.getElementById('numberFontFamily').value = 'OPPOSans';
        document.getElementById('numberFontSize').value = 18;
        
        // 字体样式设置
        const numberBoldBtn = document.getElementById('numberBoldBtn');
        if (numberBoldBtn) {
            numberBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.number) window.styleConfig.number = {};
            window.styleConfig.number.fontWeight = 'bold';
        }
        
        document.getElementById('numberStrokeWidth').value = 0;
        document.getElementById('numberShadowX').value = 0;
        document.getElementById('numberShadowY').value = 0;
        document.getElementById('numberShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberShadowPicker', '#000000');
        }
        document.getElementById('numberBorderRadius').value = 0;
        document.getElementById('numberSkewAngle').value = 0;
        
        // 姓名设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameBgPicker', '#ffffff');
        }
        document.getElementById('nameGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('name', 'none');
        }
        document.getElementById('nameBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameTextPicker', '#ffffff');
        }
        document.getElementById('nameFontFamily').value = 'OPPOSans';
        document.getElementById('nameFontSize').value = 36;
        
        // 字体样式设置
        const nameBoldBtn = document.getElementById('nameBoldBtn');
        if (nameBoldBtn) {
            nameBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.name) window.styleConfig.name = {};
            window.styleConfig.name.fontWeight = 'bold';
        }
        
        document.getElementById('nameStrokeWidth').value = 0;
        document.getElementById('nameShadowX').value = 0;
        document.getElementById('nameShadowY').value = 0;
        document.getElementById('nameShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameShadowPicker', '#000000');
        }
        document.getElementById('nameBorderRadius').value = 0;
        document.getElementById('nameSkewAngle').value = 0;
        
        // 单位设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitBgPicker', '#bbdefb');
        }
        document.getElementById('unitGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('unit', 'none');
        }
        document.getElementById('unitBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitTextPicker', '#ffffff');
        }
        document.getElementById('unitFontFamily').value = 'SmileySans';
        document.getElementById('unitFontSize').value = 20;
        document.getElementById('unitStrokeWidth').value = 0;
        document.getElementById('unitShadowX').value = 0;
        document.getElementById('unitShadowY').value = 0;
        document.getElementById('unitShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitShadowPicker', '#000000');
        }
        document.getElementById('unitBorderRadius').value = 0;
        document.getElementById('unitSkewAngle').value = 0;
    } catch (error) {
        console.error('应用优雅白模板时出错:', error);
    }
}

// 现代黑 - Modern Black
function applyModernBlackTemplate() {
    try {
        // 全局设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBgPicker', '#212121');
        }
        document.getElementById('globalGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('global', 'none');
        }
        document.getElementById('globalBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBorderPicker', 'transparent');
        }
        if (typeof setTextAlign === 'function') {
            setTextAlign('left');
        }
        if (typeof setTextDirection === 'function') {
            setTextDirection('horizontal');
        }
        document.getElementById('lineGap').value = 0;
        
        // 编号设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberBgPicker', 'transparent');
        }
        document.getElementById('numberGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('number', 'none');
        }
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberTextPicker', '#757575');
        }
        document.getElementById('numberFontFamily').value = 'MiSans-VF';
        document.getElementById('numberFontSize').value = 18;
        
        // 字体样式设置
        const numberBoldBtn = document.getElementById('numberBoldBtn');
        if (numberBoldBtn) {
            numberBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.number) window.styleConfig.number = {};
            window.styleConfig.number.fontWeight = 'bold';
        }
        
        document.getElementById('numberStrokeWidth').value = 0;
        document.getElementById('numberShadowX').value = 0;
        document.getElementById('numberShadowY').value = 0;
        document.getElementById('numberShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberShadowPicker', '#000000');
        }
        document.getElementById('numberBorderRadius').value = 0;
        document.getElementById('numberSkewAngle').value = 0;
        
        // 姓名设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameBgPicker', 'transparent');
        }
        document.getElementById('nameGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('name', 'none');
        }
        document.getElementById('nameBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameTextPicker', '#757575');
        }
        document.getElementById('nameFontFamily').value = 'MiSans-VF';
        document.getElementById('nameFontSize').value = 36;
        
        // 字体样式设置
        const nameBoldBtn = document.getElementById('nameBoldBtn');
        if (nameBoldBtn) {
            nameBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.name) window.styleConfig.name = {};
            window.styleConfig.name.fontWeight = 'bold';
        }
        
        document.getElementById('nameStrokeWidth').value = 0;
        document.getElementById('nameShadowX').value = 0;
        document.getElementById('nameShadowY').value = 0;
        document.getElementById('nameShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameShadowPicker', '#000000');
        }
        document.getElementById('nameBorderRadius').value = 0;
        document.getElementById('nameSkewAngle').value = 0;
        
        // 单位设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitBgPicker', 'transparent');
        }
        document.getElementById('unitGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('unit', 'none');
        }
        document.getElementById('unitBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitTextPicker', '#757575');
        }
        document.getElementById('unitFontFamily').value = 'MiSans-VF';
        document.getElementById('unitFontSize').value = 20;
        document.getElementById('unitStrokeWidth').value = 0;
        document.getElementById('unitShadowX').value = 0;
        document.getElementById('unitShadowY').value = 0;
        document.getElementById('unitShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitShadowPicker', '#000000');
        }
        document.getElementById('unitBorderRadius').value = 0;
        document.getElementById('unitSkewAngle').value = 0;
    } catch (error) {
        console.error('应用现代黑模板时出错:', error);
    }
}

// 紫色渐变 - Gradient Purple
function applyGradientPurpleTemplate() {
    try {
        // 全局设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBgPicker', 'transparent');
        }
        document.getElementById('globalGradient').value = 'dream-purple';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('global', 'none');
        }
        document.getElementById('globalBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBorderPicker', 'transparent');
        }
        if (typeof setTextAlign === 'function') {
            setTextAlign('center');
        }
        if (typeof setTextDirection === 'function') {
            setTextDirection('horizontal');
        }
        document.getElementById('lineGap').value = 0;
        
        // 编号设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberBgPicker', 'transparent');
        }
        document.getElementById('numberGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('number', 'none');
        }
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberTextPicker', '#e1bee7');
        }
        document.getElementById('numberFontFamily').value = 'AlibabaPuHuiTi';
        document.getElementById('numberFontSize').value = 18;
        
        // 字体样式设置
        const numberBoldBtn = document.getElementById('numberBoldBtn');
        if (numberBoldBtn) {
            numberBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.number) window.styleConfig.number = {};
            window.styleConfig.number.fontWeight = 'bold';
        }
        
        document.getElementById('numberStrokeWidth').value = 0;
        document.getElementById('numberShadowX').value = 0;
        document.getElementById('numberShadowY').value = 0;
        document.getElementById('numberShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberShadowPicker', '#000000');
        }
        document.getElementById('numberBorderRadius').value = 0;
        document.getElementById('numberSkewAngle').value = 0;
        
        // 姓名设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameBgPicker', 'transparent');
        }
        document.getElementById('nameGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('name', 'none');
        }
        document.getElementById('nameBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameTextPicker', '#ffffff');
        }
        document.getElementById('nameFontFamily').value = 'AlibabaPuHuiTi';
        document.getElementById('nameFontSize').value = 36;
        
        // 字体样式设置
        const nameBoldBtn = document.getElementById('nameBoldBtn');
        if (nameBoldBtn) {
            nameBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.name) window.styleConfig.name = {};
            window.styleConfig.name.fontWeight = 'bold';
        }
        
        document.getElementById('nameStrokeWidth').value = 0;
        document.getElementById('nameShadowX').value = 0;
        document.getElementById('nameShadowY').value = 0;
        document.getElementById('nameShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameShadowPicker', '#000000');
        }
        document.getElementById('nameBorderRadius').value = 0;
        document.getElementById('nameSkewAngle').value = 0;
        
        // 单位设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitBgPicker', 'transparent');
        }
        document.getElementById('unitGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('unit', 'none');
        }
        document.getElementById('unitBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitTextPicker', '#ffffff');
        }
        document.getElementById('unitFontFamily').value = 'AlibabaPuHuiTi';
        document.getElementById('unitFontSize').value = 20;
        document.getElementById('unitStrokeWidth').value = 0;
        document.getElementById('unitShadowX').value = 0;
        document.getElementById('unitShadowY').value = 0;
        document.getElementById('unitShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitShadowPicker', '#000000');
        }
        document.getElementById('unitBorderRadius').value = 0;
        document.getElementById('unitSkewAngle').value = 0;
    } catch (error) {
        console.error('应用紫色渐变模板时出错:', error);
    }
}

// 自然绿 - Earthy Green
function applyEarthyGreenTemplate() {
    try {
        // 全局设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBgPicker', '#f1f8e9');
        }
        document.getElementById('globalGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('global', 'none');
        }
        document.getElementById('globalBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBorderPicker', '#aed581');
        }
        if (typeof setTextAlign === 'function') {
            setTextAlign('center');
        }
        if (typeof setTextDirection === 'function') {
            setTextDirection('horizontal');
        }
        document.getElementById('lineGap').value = 0;
        
        // 编号设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberBgPicker', 'transparent');
        }
        document.getElementById('numberGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('number', 'none');
        }
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberTextPicker', '#7cb342');
        }
        document.getElementById('numberFontFamily').value = 'LuoxiaXinxiHei';
        document.getElementById('numberFontSize').value = 18;
        
        // 字体样式设置
        const numberBoldBtn = document.getElementById('numberBoldBtn');
        if (numberBoldBtn) {
            numberBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.number) window.styleConfig.number = {};
            window.styleConfig.number.fontWeight = 'bold';
        }
        
        document.getElementById('numberStrokeWidth').value = 0;
        document.getElementById('numberShadowX').value = 0;
        document.getElementById('numberShadowY').value = 0;
        document.getElementById('numberShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberShadowPicker', '#000000');
        }
        document.getElementById('numberBorderRadius').value = 0;
        document.getElementById('numberSkewAngle').value = 0;
        
        // 姓名设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameBgPicker', 'transparent');
        }
        document.getElementById('nameGradient').value = 'nature-green';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('name', 'none');
        }
        document.getElementById('nameBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameTextPicker', '#33691e');
        }
        document.getElementById('nameFontFamily').value = 'LuoxiaXinxiHei';
        document.getElementById('nameFontSize').value = 36;
        
        // 字体样式设置
        const nameBoldBtn = document.getElementById('nameBoldBtn');
        if (nameBoldBtn) {
            nameBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.name) window.styleConfig.name = {};
            window.styleConfig.name.fontWeight = 'bold';
        }
        
        document.getElementById('nameStrokeWidth').value = 0;
        document.getElementById('nameShadowX').value = 0;
        document.getElementById('nameShadowY').value = 0;
        document.getElementById('nameShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameShadowPicker', '#000000');
        }
        document.getElementById('nameBorderRadius').value = 0;
        document.getElementById('nameSkewAngle').value = 0;
        
        // 单位设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitBgPicker', 'transparent');
        }
        document.getElementById('unitGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('unit', 'none');
        }
        document.getElementById('unitBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitTextPicker', '#33691e');
        }
        document.getElementById('unitFontFamily').value = 'LuoxiaXinxiHei';
        document.getElementById('unitFontSize').value = 20;
        document.getElementById('unitStrokeWidth').value = 0;
        document.getElementById('unitShadowX').value = 0;
        document.getElementById('unitShadowY').value = 0;
        document.getElementById('unitShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitShadowPicker', '#000000');
        }
        document.getElementById('unitBorderRadius').value = 0;
        document.getElementById('unitSkewAngle').value = 0;
    } catch (error) {
        console.error('应用自然绿模板时出错:', error);
    }
}

// 企业红 - Corporate Red
function applyCorporateRedTemplate() {
    try {
        // 全局设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBgPicker', '#ffffff');
        }
        document.getElementById('globalGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('global', 'none');
        }
        document.getElementById('globalBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBorderPicker', '#e53935');
        }
        if (typeof setTextAlign === 'function') {
            setTextAlign('left');
        }
        if (typeof setTextDirection === 'function') {
            setTextDirection('horizontal');
        }
        document.getElementById('lineGap').value = 0;
        
        // 编号设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberBgPicker', 'transparent');
        }
        document.getElementById('numberGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('number', 'none');
        }
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberTextPicker', '#757575');
        }
        document.getElementById('numberFontFamily').value = '微软雅黑';
        document.getElementById('numberFontSize').value = 18;
        
        // 字体样式设置
        const numberBoldBtn = document.getElementById('numberBoldBtn');
        if (numberBoldBtn) {
            numberBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.number) window.styleConfig.number = {};
            window.styleConfig.number.fontWeight = 'bold';
        }
        
        document.getElementById('numberStrokeWidth').value = 0;
        document.getElementById('numberShadowX').value = 0;
        document.getElementById('numberShadowY').value = 0;
        document.getElementById('numberShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberShadowPicker', '#000000');
        }
        document.getElementById('numberBorderRadius').value = 0;
        document.getElementById('numberSkewAngle').value = 0;
        
        // 姓名设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameBgPicker', 'transparent');
        }
        document.getElementById('nameGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('name', 'none');
        }
        document.getElementById('nameBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameTextPicker', '#757575');
        }
        document.getElementById('nameFontFamily').value = '微软雅黑';
        document.getElementById('nameFontSize').value = 36;
        
        // 字体样式设置
        const nameBoldBtn = document.getElementById('nameBoldBtn');
        if (nameBoldBtn) {
            nameBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.name) window.styleConfig.name = {};
            window.styleConfig.name.fontWeight = 'bold';
        }
        
        document.getElementById('nameStrokeWidth').value = 0;
        document.getElementById('nameShadowX').value = 0;
        document.getElementById('nameShadowY').value = 0;
        document.getElementById('nameShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameShadowPicker', '#000000');
        }
        document.getElementById('nameBorderRadius').value = 0;
        document.getElementById('nameSkewAngle').value = 0;
        
        // 单位设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitBgPicker', 'transparent');
        }
        document.getElementById('unitGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('unit', 'none');
        }
        document.getElementById('unitBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitTextPicker', '#757575');
        }
        document.getElementById('unitFontFamily').value = '微软雅黑';
        document.getElementById('unitFontSize').value = 20;
        document.getElementById('unitStrokeWidth').value = 0;
        document.getElementById('unitShadowX').value = 0;
        document.getElementById('unitShadowY').value = 0;
        document.getElementById('unitShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitShadowPicker', '#000000');
        }
        document.getElementById('unitBorderRadius').value = 0;
        document.getElementById('unitSkewAngle').value = 0;
    } catch (error) {
        console.error('应用企业红模板时出错:', error);
    }
}

// 柔和粉彩 - Soft Pastel
function applySoftPastelTemplate() {
    try {
        // 全局设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBgPicker', '#f5f5f5');
        }
        document.getElementById('globalGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('global', 'none');
        }
        document.getElementById('globalBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBorderPicker', '#e0e0e0');
        }
        if (typeof setTextAlign === 'function') {
            setTextAlign('center');
        }
        if (typeof setTextDirection === 'function') {
            setTextDirection('horizontal');
        }
        document.getElementById('lineGap').value = 0;
        
        // 编号设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberBgPicker', '#f8bbd0');
        }
        document.getElementById('numberGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('number', 'none');
        }
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberTextPicker', '#ffffff');
        }
        document.getElementById('numberFontFamily').value = 'SmileySans';
        document.getElementById('numberFontSize').value = 18;
        
        // 字体样式设置
        const numberBoldBtn = document.getElementById('numberBoldBtn');
        if (numberBoldBtn) {
            numberBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.number) window.styleConfig.number = {};
            window.styleConfig.number.fontWeight = 'bold';
        }
        
        document.getElementById('numberStrokeWidth').value = 0;
        document.getElementById('numberShadowX').value = 0;
        document.getElementById('numberShadowY').value = 0;
        document.getElementById('numberShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberShadowPicker', '#000000');
        }
        document.getElementById('numberBorderRadius').value = 0;
        document.getElementById('numberSkewAngle').value = 0;
        
        // 姓名设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameBgPicker', '#ffffff');
        }
        document.getElementById('nameGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('name', 'none');
        }
        document.getElementById('nameBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameTextPicker', '#ffffff');
        }
        document.getElementById('nameFontFamily').value = 'SmileySans';
        document.getElementById('nameFontSize').value = 36;
        
        // 字体样式设置
        const nameBoldBtn = document.getElementById('nameBoldBtn');
        if (nameBoldBtn) {
            nameBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.name) window.styleConfig.name = {};
            window.styleConfig.name.fontWeight = 'bold';
        }
        
        document.getElementById('nameStrokeWidth').value = 0;
        document.getElementById('nameShadowX').value = 0;
        document.getElementById('nameShadowY').value = 0;
        document.getElementById('nameShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameShadowPicker', '#000000');
        }
        document.getElementById('nameBorderRadius').value = 0;
        document.getElementById('nameSkewAngle').value = 0;
        
        // 单位设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitBgPicker', '#bbdefb');
        }
        document.getElementById('unitGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('unit', 'none');
        }
        document.getElementById('unitBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitTextPicker', '#ffffff');
        }
        document.getElementById('unitFontFamily').value = 'SmileySans';
        document.getElementById('unitFontSize').value = 20;
        document.getElementById('unitStrokeWidth').value = 0;
        document.getElementById('unitShadowX').value = 0;
        document.getElementById('unitShadowY').value = 0;
        document.getElementById('unitShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitShadowPicker', '#000000');
        }
        document.getElementById('unitBorderRadius').value = 0;
        document.getElementById('unitSkewAngle').value = 0;
    } catch (error) {
        console.error('应用柔和粉彩模板时出错:', error);
    }
}

// 科技斜切 - Skewed Tech
function applySkewedTechTemplate() {
    try {
        // 全局设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBgPicker', '#263238');
        }
        document.getElementById('globalGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('global', 'none');
        }
        document.getElementById('globalBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBorderPicker', 'transparent');
        }
        if (typeof setTextAlign === 'function') {
            setTextAlign('left');
        }
        if (typeof setTextDirection === 'function') {
            setTextDirection('horizontal');
        }
        document.getElementById('lineGap').value = 0;
        
        // 编号设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberBgPicker', 'transparent');
        }
        document.getElementById('numberGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('number', 'none');
        }
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberTextPicker', '#80deea');
        }
        document.getElementById('numberFontFamily').value = 'Consolas';
        document.getElementById('numberFontSize').value = 18;
        
        // 字体样式设置
        const numberBoldBtn = document.getElementById('numberBoldBtn');
        if (numberBoldBtn) {
            numberBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.number) window.styleConfig.number = {};
            window.styleConfig.number.fontWeight = 'bold';
        }
        
        document.getElementById('numberStrokeWidth').value = 0;
        document.getElementById('numberShadowX').value = 0;
        document.getElementById('numberShadowY').value = 0;
        document.getElementById('numberShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberShadowPicker', '#000000');
        }
        document.getElementById('numberBorderRadius').value = 0;
        document.getElementById('numberSkewAngle').value = -10;
        
        // 姓名设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameBgPicker', 'transparent');
        }
        document.getElementById('nameGradient').value = 'tech-blue';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('name', 'none');
        }
        document.getElementById('nameBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameTextPicker', '#ffffff');
        }
        document.getElementById('nameFontFamily').value = 'Consolas';
        document.getElementById('nameFontSize').value = 36;
        
        // 字体样式设置
        const nameBoldBtn = document.getElementById('nameBoldBtn');
        if (nameBoldBtn) {
            nameBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.name) window.styleConfig.name = {};
            window.styleConfig.name.fontWeight = 'bold';
        }
        
        document.getElementById('nameStrokeWidth').value = 0;
        document.getElementById('nameShadowX').value = 0;
        document.getElementById('nameShadowY').value = 0;
        document.getElementById('nameShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameShadowPicker', '#000000');
        }
        document.getElementById('nameBorderRadius').value = 0;
        document.getElementById('nameSkewAngle').value = -10;
        
        // 单位设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitBgPicker', 'transparent');
        }
        document.getElementById('unitGradient').value = 'tech-blue';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('unit', 'none');
        }
        document.getElementById('unitBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitTextPicker', '#ffffff');
        }
        document.getElementById('unitFontFamily').value = 'Consolas';
        document.getElementById('unitFontSize').value = 20;
        document.getElementById('unitStrokeWidth').value = 0;
        document.getElementById('unitShadowX').value = 0;
        document.getElementById('unitShadowY').value = 0;
        document.getElementById('unitShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitShadowPicker', '#000000');
        }
        document.getElementById('unitBorderRadius').value = 0;
        document.getElementById('unitSkewAngle').value = -10;
    } catch (error) {
        console.error('应用科技斜切模板时出错:', error);
    }
}

// 极简灰 - Minimalist Gray
function applyMinimalistGrayTemplate() {
    try {
        // 全局设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBgPicker', '#fafafa');
        }
        document.getElementById('globalGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('global', 'none');
        }
        document.getElementById('globalBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBorderPicker', '#e0e0e0');
        }
        if (typeof setTextAlign === 'function') {
            setTextAlign('left');
        }
        if (typeof setTextDirection === 'function') {
            setTextDirection('horizontal');
        }
        document.getElementById('lineGap').value = 0;
        
        // 编号设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberBgPicker', 'transparent');
        }
        document.getElementById('numberGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('number', 'none');
        }
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberTextPicker', '#9e9e9e');
        }
        document.getElementById('numberFontFamily').value = 'AlibabaPuHuiTi';
        document.getElementById('numberFontSize').value = 16;
        
        // 字体样式设置
        const numberBoldBtn = document.getElementById('numberBoldBtn');
        if (numberBoldBtn) {
            numberBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.number) window.styleConfig.number = {};
            window.styleConfig.number.fontWeight = 'bold';
        }
        
        document.getElementById('numberStrokeWidth').value = 0;
        document.getElementById('numberShadowX').value = 0;
        document.getElementById('numberShadowY').value = 0;
        document.getElementById('numberShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberShadowPicker', '#000000');
        }
        document.getElementById('numberBorderRadius').value = 0;
        document.getElementById('numberSkewAngle').value = 0;
        
        // 姓名设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameBgPicker', 'transparent');
        }
        document.getElementById('nameGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('name', 'none');
        }
        document.getElementById('nameBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameTextPicker', '#9e9e9e');
        }
        document.getElementById('nameFontFamily').value = 'AlibabaPuHuiTi';
        document.getElementById('nameFontSize').value = 32;
        
        // 字体样式设置
        const nameBoldBtn = document.getElementById('nameBoldBtn');
        if (nameBoldBtn) {
            nameBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.name) window.styleConfig.name = {};
            window.styleConfig.name.fontWeight = 'bold';
        }
        
        document.getElementById('nameStrokeWidth').value = 0;
        document.getElementById('nameShadowX').value = 0;
        document.getElementById('nameShadowY').value = 0;
        document.getElementById('nameShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameShadowPicker', '#000000');
        }
        document.getElementById('nameBorderRadius').value = 0;
        document.getElementById('nameSkewAngle').value = 0;
        
        // 单位设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitBgPicker', 'transparent');
        }
        document.getElementById('unitGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('unit', 'none');
        }
        document.getElementById('unitBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitTextPicker', '#9e9e9e');
        }
        document.getElementById('unitFontFamily').value = 'AlibabaPuHuiTi';
        document.getElementById('unitFontSize').value = 18;
        document.getElementById('unitStrokeWidth').value = 0;
        document.getElementById('unitShadowX').value = 0;
        document.getElementById('unitShadowY').value = 0;
        document.getElementById('unitShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitShadowPicker', '#000000');
        }
        document.getElementById('unitBorderRadius').value = 0;
        document.getElementById('unitSkewAngle').value = 0;
    } catch (error) {
        console.error('应用极简灰模板时出错:', error);
    }
}



// 复古棕 - Vintage Brown
function applyVintageBrownTemplate() {
    try {
        // 全局设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBgPicker', '#efebe9');
        }
        document.getElementById('globalGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('global', 'none');
        }
        document.getElementById('globalBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBorderPicker', '#bcaaa4');
        }
        if (typeof setTextAlign === 'function') {
            setTextAlign('center');
        }
        if (typeof setTextDirection === 'function') {
            setTextDirection('horizontal');
        }
        document.getElementById('lineGap').value = 0;
        
        // 编号设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberBgPicker', 'transparent');
        }
        document.getElementById('numberGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('number', 'none');
        }
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberTextPicker', '#8d6e63');
        }
        document.getElementById('numberFontFamily').value = 'FangZhengFangSong';
        document.getElementById('numberFontSize').value = 18;
        
        // 字体样式设置
        const numberBoldBtn = document.getElementById('numberBoldBtn');
        if (numberBoldBtn) {
            numberBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.number) window.styleConfig.number = {};
            window.styleConfig.number.fontWeight = 'bold';
        }
        
        document.getElementById('numberStrokeWidth').value = 0;
        document.getElementById('numberShadowX').value = 0;
        document.getElementById('numberShadowY').value = 0;
        document.getElementById('numberShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberShadowPicker', '#000000');
        }
        document.getElementById('numberBorderRadius').value = 0;
        document.getElementById('numberSkewAngle').value = 0;
        
        // 姓名设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameBgPicker', 'transparent');
        }
        document.getElementById('nameGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('name', 'none');
        }
        document.getElementById('nameBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameTextPicker', '#8d6e63');
        }
        document.getElementById('nameFontFamily').value = 'FangZhengFangSong';
        document.getElementById('nameFontSize').value = 36;
        
        // 字体样式设置
        const nameBoldBtn = document.getElementById('nameBoldBtn');
        if (nameBoldBtn) {
            nameBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.name) window.styleConfig.name = {};
            window.styleConfig.name.fontWeight = 'bold';
        }
        
        document.getElementById('nameStrokeWidth').value = 0;
        document.getElementById('nameShadowX').value = 0;
        document.getElementById('nameShadowY').value = 0;
        document.getElementById('nameShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameShadowPicker', '#000000');
        }
        document.getElementById('nameBorderRadius').value = 0;
        document.getElementById('nameSkewAngle').value = 0;
        
        // 单位设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitBgPicker', 'transparent');
        }
        document.getElementById('unitGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('unit', 'none');
        }
        document.getElementById('unitBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitTextPicker', '#8d6e63');
        }
        document.getElementById('unitFontFamily').value = 'FangZhengFangSong';
        document.getElementById('unitFontSize').value = 20;
        document.getElementById('unitStrokeWidth').value = 0;
        document.getElementById('unitShadowX').value = 0;
        document.getElementById('unitShadowY').value = 0;
        document.getElementById('unitShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitShadowPicker', '#000000');
        }
        document.getElementById('unitBorderRadius').value = 0;
        document.getElementById('unitSkewAngle').value = 0;
    } catch (error) {
        console.error('应用复古棕模板时出错:', error);
    }
}

// 湖水青 - Aqua Blue
function applyAquaBlueTemplate() {
    try {
        // 全局设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBgPicker', 'transparent');
        }
        document.getElementById('globalGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('global', 'none');
        }
        document.getElementById('globalBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBorderPicker', '#4dd0e1');
        }
        if (typeof setTextAlign === 'function') {
            setTextAlign('center');
        }
        if (typeof setTextDirection === 'function') {
            setTextDirection('horizontal');
        }
        document.getElementById('lineGap').value = 0;
        
        // 编号设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberBgPicker', 'transparent');
        }
        document.getElementById('numberGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('number', 'none');
        }
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberTextPicker', '#80deea');
        }
        document.getElementById('numberFontFamily').value = 'MiSans-VF';
        document.getElementById('numberFontSize').value = 18;
        
        // 字体样式设置
        const numberBoldBtn = document.getElementById('numberBoldBtn');
        if (numberBoldBtn) {
            numberBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.number) window.styleConfig.number = {};
            window.styleConfig.number.fontWeight = 'bold';
        }
        
        document.getElementById('numberStrokeWidth').value = 0;
        document.getElementById('numberShadowX').value = 0;
        document.getElementById('numberShadowY').value = 0;
        document.getElementById('numberShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberShadowPicker', '#000000');
        }
        document.getElementById('numberBorderRadius').value = 0;
        document.getElementById('numberSkewAngle').value = 0;
        
        // 姓名设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameBgPicker', 'transparent');
        }
        document.getElementById('nameGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('name', 'none');
        }
        document.getElementById('nameBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameTextPicker', '#00838f');
        }
        document.getElementById('nameFontFamily').value = 'MiSans-VF';
        document.getElementById('nameFontSize').value = 36;
        
        // 字体样式设置
        const nameBoldBtn = document.getElementById('nameBoldBtn');
        if (nameBoldBtn) {
            nameBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.name) window.styleConfig.name = {};
            window.styleConfig.name.fontWeight = 'bold';
        }
        
        document.getElementById('nameStrokeWidth').value = 0;
        document.getElementById('nameShadowX').value = 0;
        document.getElementById('nameShadowY').value = 0;
        document.getElementById('nameShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameShadowPicker', '#000000');
        }
        document.getElementById('nameBorderRadius').value = 0;
        document.getElementById('nameSkewAngle').value = 0;
        
        // 单位设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitBgPicker', 'transparent');
        }
        document.getElementById('unitGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('unit', 'none');
        }
        document.getElementById('unitBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitTextPicker', '#00acc1');
        }
        document.getElementById('unitFontFamily').value = 'MiSans-VF';
        document.getElementById('unitFontSize').value = 20;
        document.getElementById('unitStrokeWidth').value = 0;
        document.getElementById('unitShadowX').value = 0;
        document.getElementById('unitShadowY').value = 0;
        document.getElementById('unitShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitShadowPicker', '#000000');
        }
        document.getElementById('unitBorderRadius').value = 0;
        document.getElementById('unitSkewAngle').value = 0;
    } catch (error) {
        console.error('应用湖水青模板时出错:', error);
    }
}

// 日落橙 - Sunset Orange
function applySunsetOrangeTemplate() {
    try {
        // 全局设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBgPicker', 'transparent');
        }
        document.getElementById('globalGradient').value = 'vibrant-orange';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('global', 'none');
        }
        document.getElementById('globalBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBorderPicker', 'transparent');
        }
        if (typeof setTextAlign === 'function') {
            setTextAlign('center');
        }
        if (typeof setTextDirection === 'function') {
            setTextDirection('horizontal');
        }
        document.getElementById('lineGap').value = 0;
        
        // 编号设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberBgPicker', 'transparent');
        }
        document.getElementById('numberGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('number', 'none');
        }
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberTextPicker', '#ffffff');
        }
        document.getElementById('numberFontFamily').value = 'OPPOSans';
        document.getElementById('numberFontSize').value = 18;
        
        // 字体样式设置
        const numberBoldBtn = document.getElementById('numberBoldBtn');
        if (numberBoldBtn) {
            numberBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.number) window.styleConfig.number = {};
            window.styleConfig.number.fontWeight = 'bold';
        }
        
        document.getElementById('numberStrokeWidth').value = 0;
        document.getElementById('numberShadowX').value = 0;
        document.getElementById('numberShadowY').value = 0;
        document.getElementById('numberShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberShadowPicker', '#000000');
        }
        document.getElementById('numberBorderRadius').value = 0;
        document.getElementById('numberSkewAngle').value = 0;
        
        // 姓名设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameBgPicker', 'transparent');
        }
        document.getElementById('nameGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('name', 'none');
        }
        document.getElementById('nameBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameTextPicker', '#ffffff');
        }
        document.getElementById('nameFontFamily').value = 'OPPOSans';
        document.getElementById('nameFontSize').value = 36;
        
        // 字体样式设置
        const nameBoldBtn = document.getElementById('nameBoldBtn');
        if (nameBoldBtn) {
            nameBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.name) window.styleConfig.name = {};
            window.styleConfig.name.fontWeight = 'bold';
        }
        
        document.getElementById('nameStrokeWidth').value = 0;
        document.getElementById('nameShadowX').value = 0;
        document.getElementById('nameShadowY').value = 0;
        document.getElementById('nameShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameShadowPicker', '#000000');
        }
        document.getElementById('nameBorderRadius').value = 0;
        document.getElementById('nameSkewAngle').value = 0;
        
        // 单位设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitBgPicker', 'transparent');
        }
        document.getElementById('unitGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('unit', 'none');
        }
        document.getElementById('unitBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitTextPicker', '#ffffff');
        }
        document.getElementById('unitFontFamily').value = 'OPPOSans';
        document.getElementById('unitFontSize').value = 20;
        document.getElementById('unitStrokeWidth').value = 0;
        document.getElementById('unitShadowX').value = 0;
        document.getElementById('unitShadowY').value = 0;
        document.getElementById('unitShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitShadowPicker', '#000000');
        }
        document.getElementById('unitBorderRadius').value = 0;
        document.getElementById('unitSkewAngle').value = 0;
    } catch (error) {
        console.error('应用日落橙模板时出错:', error);
    }
}

// 霓虹灯 - Neon Lights
function applyNeonLightsTemplate() {
    try {
        // 全局设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBgPicker', 'transparent');
        }
        document.getElementById('globalGradient').value = 'neon-effect';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('global', 'none');
        }
        document.getElementById('globalBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBorderPicker', 'transparent');
        }
        if (typeof setTextAlign === 'function') {
            setTextAlign('center');
        }
        if (typeof setTextDirection === 'function') {
            setTextDirection('horizontal');
        }
        document.getElementById('lineGap').value = 0;
        
        // 编号设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberBgPicker', 'transparent');
        }
        document.getElementById('numberGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('number', 'none');
        }
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberTextPicker', '#ffffff');
        }
        document.getElementById('numberFontFamily').value = 'Consolas';
        document.getElementById('numberFontSize').value = 18;
        
        // 字体样式设置
        const numberBoldBtn = document.getElementById('numberBoldBtn');
        if (numberBoldBtn) {
            numberBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.number) window.styleConfig.number = {};
            window.styleConfig.number.fontWeight = 'bold';
        }
        
        document.getElementById('numberStrokeWidth').value = 0;
        document.getElementById('numberShadowX').value = 0;
        document.getElementById('numberShadowY').value = 0;
        document.getElementById('numberShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberShadowPicker', '#000000');
        }
        document.getElementById('numberBorderRadius').value = 0;
        document.getElementById('numberSkewAngle').value = 0;
        
        // 姓名设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameBgPicker', 'transparent');
        }
        document.getElementById('nameGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('name', 'none');
        }
        document.getElementById('nameBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameTextPicker', '#ffffff');
        }
        document.getElementById('nameFontFamily').value = 'Consolas';
        document.getElementById('nameFontSize').value = 36;
        
        // 字体样式设置
        const nameBoldBtn = document.getElementById('nameBoldBtn');
        if (nameBoldBtn) {
            nameBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.name) window.styleConfig.name = {};
            window.styleConfig.name.fontWeight = 'bold';
        }
        
        document.getElementById('nameStrokeWidth').value = 0;
        document.getElementById('nameShadowX').value = 0;
        document.getElementById('nameShadowY').value = 0;
        document.getElementById('nameShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameShadowPicker', '#000000');
        }
        document.getElementById('nameBorderRadius').value = 0;
        document.getElementById('nameSkewAngle').value = 0;
        
        // 单位设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitBgPicker', 'transparent');
        }
        document.getElementById('unitGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('unit', 'none');
        }
        document.getElementById('unitBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitTextPicker', '#ffffff');
        }
        document.getElementById('unitFontFamily').value = 'Consolas';
        document.getElementById('unitFontSize').value = 20;
        document.getElementById('unitStrokeWidth').value = 0;
        document.getElementById('unitShadowX').value = 0;
        document.getElementById('unitShadowY').value = 0;
        document.getElementById('unitShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitShadowPicker', '#000000');
        }
        document.getElementById('unitBorderRadius').value = 0;
        document.getElementById('unitSkewAngle').value = 0;
    } catch (error) {
        console.error('应用霓虹灯模板时出错:', error);
    }
}

// 水墨风 - Ink Wash
function applyInkWashTemplate() {
    try {
        // 全局设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBgPicker', 'transparent');
        }
        document.getElementById('globalGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('global', 'none');
        }
        document.getElementById('globalBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBorderPicker', '#000000');
        }
        if (typeof setTextAlign === 'function') {
            setTextAlign('right');
        }
        if (typeof setTextDirection === 'function') {
            setTextDirection('horizontal');
        }
        document.getElementById('lineGap').value = 0;
        
        // 编号设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberBgPicker', 'transparent');
        }
        document.getElementById('numberGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('number', 'none');
        }
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberTextPicker', '#757575');
        }
        document.getElementById('numberFontFamily').value = 'JiangXiZhuoKai';
        document.getElementById('numberFontSize').value = 18;
        
        // 字体样式设置
        const numberBoldBtn = document.getElementById('numberBoldBtn');
        if (numberBoldBtn) {
            numberBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.number) window.styleConfig.number = {};
            window.styleConfig.number.fontWeight = 'bold';
        }
        
        document.getElementById('numberStrokeWidth').value = 0;
        document.getElementById('numberShadowX').value = 0;
        document.getElementById('numberShadowY').value = 0;
        document.getElementById('numberShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberShadowPicker', '#000000');
        }
        document.getElementById('numberBorderRadius').value = 0;
        document.getElementById('numberSkewAngle').value = 0;
        
        // 姓名设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameBgPicker', 'transparent');
        }
        document.getElementById('nameGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('name', 'none');
        }
        document.getElementById('nameBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameTextPicker', '#000000');
        }
        document.getElementById('nameFontFamily').value = 'JiangXiZhuoKai';
        document.getElementById('nameFontSize').value = 42;
        
        // 字体样式设置
        const nameBoldBtn = document.getElementById('nameBoldBtn');
        if (nameBoldBtn) {
            nameBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.name) window.styleConfig.name = {};
            window.styleConfig.name.fontWeight = 'bold';
        }
        
        document.getElementById('nameStrokeWidth').value = 0;
        document.getElementById('nameShadowX').value = 0;
        document.getElementById('nameShadowY').value = 0;
        document.getElementById('nameShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameShadowPicker', '#000000');
        }
        document.getElementById('nameBorderRadius').value = 0;
        document.getElementById('nameSkewAngle').value = 0;
        
        // 单位设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitBgPicker', 'transparent');
        }
        document.getElementById('unitGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('unit', 'none');
        }
        document.getElementById('unitBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitTextPicker', '#424242');
        }
        document.getElementById('unitFontFamily').value = 'JiangXiZhuoKai';
        document.getElementById('unitFontSize').value = 20;
        document.getElementById('unitStrokeWidth').value = 0;
        document.getElementById('unitShadowX').value = 0;
        document.getElementById('unitShadowY').value = 0;
        document.getElementById('unitShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitShadowPicker', '#000000');
        }
        document.getElementById('unitBorderRadius').value = 0;
        document.getElementById('unitSkewAngle').value = 0;
    } catch (error) {
        console.error('应用水墨风模板时出错:', error);
    }
}

// 粉色花瓣 - Pink Petals
function applyPinkPetalsTemplate() {
    try {
        // 全局设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBgPicker', 'transparent');
        }
        document.getElementById('globalGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('global', 'none');
        }
        document.getElementById('globalBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBorderPicker', 'transparent');
        }
        if (typeof setTextAlign === 'function') {
            setTextAlign('center');
        }
        if (typeof setTextDirection === 'function') {
            setTextDirection('horizontal');
        }
        document.getElementById('lineGap').value = 0;
        
        // 编号设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberBgPicker', 'transparent');
        }
        document.getElementById('numberGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('number', 'none');
        }
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberTextPicker', '#ec407a');
        }
        document.getElementById('numberFontFamily').value = 'SmileySans';
        document.getElementById('numberFontSize').value = 18;
        
        // 字体样式设置
        const numberBoldBtn = document.getElementById('numberBoldBtn');
        if (numberBoldBtn) {
            numberBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.number) window.styleConfig.number = {};
            window.styleConfig.number.fontWeight = 'bold';
        }
        
        document.getElementById('numberStrokeWidth').value = 0;
        document.getElementById('numberShadowX').value = 0;
        document.getElementById('numberShadowY').value = 0;
        document.getElementById('numberShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberShadowPicker', '#000000');
        }
        document.getElementById('numberBorderRadius').value = 0;
        document.getElementById('numberSkewAngle').value = 0;
        
        // 姓名设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameBgPicker', 'transparent');
        }
        document.getElementById('nameGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('name', 'none');
        }
        document.getElementById('nameBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameTextPicker', '#d81b60');
        }
        document.getElementById('nameFontFamily').value = 'SmileySans';
        document.getElementById('nameFontSize').value = 36;
        
        // 字体样式设置
        const nameBoldBtn = document.getElementById('nameBoldBtn');
        if (nameBoldBtn) {
            nameBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.name) window.styleConfig.name = {};
            window.styleConfig.name.fontWeight = 'bold';
        }
        
        document.getElementById('nameStrokeWidth').value = 0;
        document.getElementById('nameShadowX').value = 0;
        document.getElementById('nameShadowY').value = 0;
        document.getElementById('nameShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameShadowPicker', '#000000');
        }
        document.getElementById('nameBorderRadius').value = 0;
        document.getElementById('nameSkewAngle').value = 0;
        
        // 单位设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitBgPicker', 'transparent');
        }
        document.getElementById('unitGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('unit', 'none');
        }
        document.getElementById('unitBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitTextPicker', '#ec407a');
        }
        document.getElementById('unitFontFamily').value = 'SmileySans';
        document.getElementById('unitFontSize').value = 20;
        document.getElementById('unitStrokeWidth').value = 0;
        document.getElementById('unitShadowX').value = 0;
        document.getElementById('unitShadowY').value = 0;
        document.getElementById('unitShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitShadowPicker', '#000000');
        }
        document.getElementById('unitBorderRadius').value = 0;
        document.getElementById('unitSkewAngle').value = 0;
    } catch (error) {
        console.error('应用粉色花瓣模板时出错:', error);
    }
}

// 翡翠绿 - Emerald Green
function applyEmeraldGreenTemplate() {
    try {
        // 全局设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBgPicker', 'transparent');
        }
        document.getElementById('globalGradient').value = 'nature-green';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('global', 'none');
        }
        document.getElementById('globalBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBorderPicker', '#2e7d32');
        }
        if (typeof setTextAlign === 'function') {
            setTextAlign('left');
        }
        if (typeof setTextDirection === 'function') {
            setTextDirection('horizontal');
        }
        document.getElementById('lineGap').value = 0;
        
        // 编号设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberBgPicker', 'transparent');
        }
        document.getElementById('numberGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('number', 'none');
        }
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberTextPicker', '#ffffff');
        }
        document.getElementById('numberFontFamily').value = 'AlibabaPuHuiTi';
        document.getElementById('numberFontSize').value = 18;
        
        // 字体样式设置
        const numberBoldBtn = document.getElementById('numberBoldBtn');
        if (numberBoldBtn) {
            numberBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.number) window.styleConfig.number = {};
            window.styleConfig.number.fontWeight = 'bold';
        }
        
        document.getElementById('numberStrokeWidth').value = 0;
        document.getElementById('numberShadowX').value = 0;
        document.getElementById('numberShadowY').value = 0;
        document.getElementById('numberShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberShadowPicker', '#000000');
        }
        document.getElementById('numberBorderRadius').value = 0;
        document.getElementById('numberSkewAngle').value = 0;
        
        // 姓名设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameBgPicker', 'transparent');
        }
        document.getElementById('nameGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('name', 'none');
        }
        document.getElementById('nameBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameTextPicker', '#ffffff');
        }
        document.getElementById('nameFontFamily').value = 'AlibabaPuHuiTi';
        document.getElementById('nameFontSize').value = 36;
        
        // 字体样式设置
        const nameBoldBtn = document.getElementById('nameBoldBtn');
        if (nameBoldBtn) {
            nameBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.name) window.styleConfig.name = {};
            window.styleConfig.name.fontWeight = 'bold';
        }
        
        document.getElementById('nameStrokeWidth').value = 0;
        document.getElementById('nameShadowX').value = 0;
        document.getElementById('nameShadowY').value = 0;
        document.getElementById('nameShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameShadowPicker', '#000000');
        }
        document.getElementById('nameBorderRadius').value = 0;
        document.getElementById('nameSkewAngle').value = 0;
        
        // 单位设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitBgPicker', 'transparent');
        }
        document.getElementById('unitGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('unit', 'none');
        }
        document.getElementById('unitBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitTextPicker', '#ffffff');
        }
        document.getElementById('unitFontFamily').value = 'AlibabaPuHuiTi';
        document.getElementById('unitFontSize').value = 20;
        document.getElementById('unitStrokeWidth').value = 0;
        document.getElementById('unitShadowX').value = 0;
        document.getElementById('unitShadowY').value = 0;
        document.getElementById('unitShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitShadowPicker', '#000000');
        }
        document.getElementById('unitBorderRadius').value = 0;
        document.getElementById('unitSkewAngle').value = 0;
    } catch (error) {
        console.error('应用翡翠绿模板时出错:', error);
    }
}

// 深空蓝 - Deep Space Blue
function applyDeepSpaceBlueTemplate() {
    try {
        // 全局设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBgPicker', 'transparent');
        }
        document.getElementById('globalGradient').value = 'tech-blue';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('global', 'none');
        }
        document.getElementById('globalBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBorderPicker', 'transparent');
        }
        if (typeof setTextAlign === 'function') {
            setTextAlign('center');
        }
        if (typeof setTextDirection === 'function') {
            setTextDirection('horizontal');
        }
        document.getElementById('lineGap').value = 0;
        
        // 编号设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberBgPicker', 'transparent');
        }
        document.getElementById('numberGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('number', 'none');
        }
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberTextPicker', '#bbdefb');
        }
        document.getElementById('numberFontFamily').value = 'MiSans-VF';
        document.getElementById('numberFontSize').value = 18;
        
        // 字体样式设置
        const numberBoldBtn = document.getElementById('numberBoldBtn');
        if (numberBoldBtn) {
            numberBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.number) window.styleConfig.number = {};
            window.styleConfig.number.fontWeight = 'bold';
        }
        
        document.getElementById('numberStrokeWidth').value = 0;
        document.getElementById('numberShadowX').value = 0;
        document.getElementById('numberShadowY').value = 0;
        document.getElementById('numberShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberShadowPicker', '#000000');
        }
        document.getElementById('numberBorderRadius').value = 0;
        document.getElementById('numberSkewAngle').value = 0;
        
        // 姓名设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameBgPicker', 'transparent');
        }
        document.getElementById('nameGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('name', 'none');
        }
        document.getElementById('nameBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameTextPicker', '#ffffff');
        }
        document.getElementById('nameFontFamily').value = 'MiSans-VF';
        document.getElementById('nameFontSize').value = 36;
        
        // 字体样式设置
        const nameBoldBtn = document.getElementById('nameBoldBtn');
        if (nameBoldBtn) {
            nameBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.name) window.styleConfig.name = {};
            window.styleConfig.name.fontWeight = 'bold';
        }
        
        document.getElementById('nameStrokeWidth').value = 0;
        document.getElementById('nameShadowX').value = 0;
        document.getElementById('nameShadowY').value = 0;
        document.getElementById('nameShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameShadowPicker', '#000000');
        }
        document.getElementById('nameBorderRadius').value = 0;
        document.getElementById('nameSkewAngle').value = 0;
        
        // 单位设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitBgPicker', 'transparent');
        }
        document.getElementById('unitGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('unit', 'none');
        }
        document.getElementById('unitBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitTextPicker', '#bbdefb');
        }
        document.getElementById('unitFontFamily').value = 'MiSans-VF';
        document.getElementById('unitFontSize').value = 20;
        document.getElementById('unitStrokeWidth').value = 0;
        document.getElementById('unitShadowX').value = 0;
        document.getElementById('unitShadowY').value = 0;
        document.getElementById('unitShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitShadowPicker', '#000000');
        }
        document.getElementById('unitBorderRadius').value = 0;
        document.getElementById('unitSkewAngle').value = 0;
    } catch (error) {
        console.error('应用深空蓝模板时出错:', error);
    }
}

// 麦田金 - Wheat Gold
function applyWheatGoldTemplate() {
    try {
        // 全局设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBgPicker', 'transparent');
        }
        document.getElementById('globalGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('global', 'none');
        }
        document.getElementById('globalBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBorderPicker', '#ffd54f');
        }
        if (typeof setTextAlign === 'function') {
            setTextAlign('center');
        }
        if (typeof setTextDirection === 'function') {
            setTextDirection('horizontal');
        }
        document.getElementById('lineGap').value = 0;
        
        // 编号设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberBgPicker', 'transparent');
        }
        document.getElementById('numberGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('number', 'none');
        }
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberTextPicker', '#ff8f00');
        }
        document.getElementById('numberFontFamily').value = 'FangZhengFangSong';
        document.getElementById('numberFontSize').value = 18;
        
        // 字体样式设置
        const numberBoldBtn = document.getElementById('numberBoldBtn');
        if (numberBoldBtn) {
            numberBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.number) window.styleConfig.number = {};
            window.styleConfig.number.fontWeight = 'bold';
        }
        
        document.getElementById('numberStrokeWidth').value = 0;
        document.getElementById('numberShadowX').value = 0;
        document.getElementById('numberShadowY').value = 0;
        document.getElementById('numberShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberShadowPicker', '#000000');
        }
        document.getElementById('numberBorderRadius').value = 0;
        document.getElementById('numberSkewAngle').value = 0;
        
        // 姓名设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameBgPicker', 'transparent');
        }
        document.getElementById('nameGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('name', 'none');
        }
        document.getElementById('nameBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameTextPicker', '#ff6f00');
        }
        document.getElementById('nameFontFamily').value = 'FangZhengFangSong';
        document.getElementById('nameFontSize').value = 36;
        
        // 字体样式设置
        const nameBoldBtn = document.getElementById('nameBoldBtn');
        if (nameBoldBtn) {
            nameBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.name) window.styleConfig.name = {};
            window.styleConfig.name.fontWeight = 'bold';
        }
        
        document.getElementById('nameStrokeWidth').value = 0;
        document.getElementById('nameShadowX').value = 0;
        document.getElementById('nameShadowY').value = 0;
        document.getElementById('nameShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameShadowPicker', '#000000');
        }
        document.getElementById('nameBorderRadius').value = 0;
        document.getElementById('nameSkewAngle').value = 0;
        
        // 单位设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitBgPicker', 'transparent');
        }
        document.getElementById('unitGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('unit', 'none');
        }
        document.getElementById('unitBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitTextPicker', '#ff8f00');
        }
        document.getElementById('unitFontFamily').value = 'FangZhengFangSong';
        document.getElementById('unitFontSize').value = 20;
        document.getElementById('unitStrokeWidth').value = 0;
        document.getElementById('unitShadowX').value = 0;
        document.getElementById('unitShadowY').value = 0;
        document.getElementById('unitShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitShadowPicker', '#000000');
        }
        document.getElementById('unitBorderRadius').value = 0;
        document.getElementById('unitSkewAngle').value = 0;
    } catch (error) {
        console.error('应用麦田金模板时出错:', error);
    }
}

// 寂静夜 - Silent Night
function applySilentNightTemplate() {
    try {
        // 全局设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBgPicker', 'transparent');
        }
        document.getElementById('globalGradient').value = 'dream-purple';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('global', 'none');
        }
        document.getElementById('globalBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBorderPicker', 'transparent');
        }
        if (typeof setTextAlign === 'function') {
            setTextAlign('center');
        }
        if (typeof setTextDirection === 'function') {
            setTextDirection('horizontal');
        }
        document.getElementById('lineGap').value = 0;
        
        // 编号设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberBgPicker', 'transparent');
        }
        document.getElementById('numberGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('number', 'none');
        }
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberTextPicker', '#9575cd');
        }
        document.getElementById('numberFontFamily').value = 'LuoxiaXinxiHei';
        document.getElementById('numberFontSize').value = 18;
        
        // 字体样式设置
        const numberBoldBtn = document.getElementById('numberBoldBtn');
        if (numberBoldBtn) {
            numberBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.number) window.styleConfig.number = {};
            window.styleConfig.number.fontWeight = 'bold';
        }
        
        document.getElementById('numberStrokeWidth').value = 0;
        document.getElementById('numberShadowX').value = 0;
        document.getElementById('numberShadowY').value = 0;
        document.getElementById('numberShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberShadowPicker', '#000000');
        }
        document.getElementById('numberBorderRadius').value = 0;
        document.getElementById('numberSkewAngle').value = 0;
        
        // 姓名设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameBgPicker', 'transparent');
        }
        document.getElementById('nameGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('name', 'none');
        }
        document.getElementById('nameBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameTextPicker', '#ffffff');
        }
        document.getElementById('nameFontFamily').value = 'LuoxiaXinxiHei';
        document.getElementById('nameFontSize').value = 36;
        
        // 字体样式设置
        const nameBoldBtn = document.getElementById('nameBoldBtn');
        if (nameBoldBtn) {
            nameBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.name) window.styleConfig.name = {};
            window.styleConfig.name.fontWeight = 'bold';
        }
        
        document.getElementById('nameStrokeWidth').value = 0;
        document.getElementById('nameShadowX').value = 0;
        document.getElementById('nameShadowY').value = 0;
        document.getElementById('nameShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameShadowPicker', '#000000');
        }
        document.getElementById('nameBorderRadius').value = 0;
        document.getElementById('nameSkewAngle').value = 0;
        
        // 单位设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitBgPicker', 'transparent');
        }
        document.getElementById('unitGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('unit', 'none');
        }
        document.getElementById('unitBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitTextPicker', '#9575cd');
        }
        document.getElementById('unitFontFamily').value = 'LuoxiaXinxiHei';
        document.getElementById('unitFontSize').value = 20;
        document.getElementById('unitStrokeWidth').value = 0;
        document.getElementById('unitShadowX').value = 0;
        document.getElementById('unitShadowY').value = 0;
        document.getElementById('unitShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitShadowPicker', '#000000');
        }
        document.getElementById('unitBorderRadius').value = 0;
        document.getElementById('unitSkewAngle').value = 0;
    } catch (error) {
        console.error('应用寂静夜模板时出错:', error);
    }
}

// 珊瑚魅 - Coral Charm
function applyCoralCharmTemplate() {
    try {
        // 全局设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBgPicker', 'transparent');
        }
        document.getElementById('globalGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('global', 'none');
        }
        document.getElementById('globalBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('globalBorderPicker', '#ff7043');
        }
        if (typeof setTextAlign === 'function') {
            setTextAlign('left');
        }
        if (typeof setTextDirection === 'function') {
            setTextDirection('horizontal');
        }
        document.getElementById('lineGap').value = 0;
        
        // 编号设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberBgPicker', 'transparent');
        }
        document.getElementById('numberGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('number', 'none');
        }
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberTextPicker', '#ff7043');
        }
        document.getElementById('numberFontFamily').value = 'OPPOSans';
        document.getElementById('numberFontSize').value = 18;
        
        // 字体样式设置
        const numberBoldBtn = document.getElementById('numberBoldBtn');
        if (numberBoldBtn) {
            numberBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.number) window.styleConfig.number = {};
            window.styleConfig.number.fontWeight = 'bold';
        }
        
        document.getElementById('numberStrokeWidth').value = 0;
        document.getElementById('numberShadowX').value = 0;
        document.getElementById('numberShadowY').value = 0;
        document.getElementById('numberShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('numberShadowPicker', '#000000');
        }
        document.getElementById('numberBorderRadius').value = 0;
        document.getElementById('numberSkewAngle').value = 0;
        
        // 姓名设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameBgPicker', 'transparent');
        }
        document.getElementById('nameGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('name', 'none');
        }
        document.getElementById('nameBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameTextPicker', '#ff7043');
        }
        document.getElementById('nameFontFamily').value = 'OPPOSans';
        document.getElementById('nameFontSize').value = 36;
        
        // 字体样式设置
        const nameBoldBtn = document.getElementById('nameBoldBtn');
        if (nameBoldBtn) {
            nameBoldBtn.classList.add('active');
            // 确保styleConfig存在
            if (!window.styleConfig) window.styleConfig = {};
            if (!window.styleConfig.name) window.styleConfig.name = {};
            window.styleConfig.name.fontWeight = 'bold';
        }
        
        document.getElementById('nameStrokeWidth').value = 0;
        document.getElementById('nameShadowX').value = 0;
        document.getElementById('nameShadowY').value = 0;
        document.getElementById('nameShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('nameShadowPicker', '#000000');
        }
        document.getElementById('nameBorderRadius').value = 0;
        document.getElementById('nameSkewAngle').value = 0;
        
        // 单位设置
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitBgPicker', 'transparent');
        }
        document.getElementById('unitGradient').value = 'none';
        if (typeof toggleBorderStyle === 'function') {
            toggleBorderStyle('unit', 'none');
        }
        document.getElementById('unitBorderWidth').value = 0;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitTextPicker', '#ff7043');
        }
        document.getElementById('unitFontFamily').value = 'OPPOSans';
        document.getElementById('unitFontSize').value = 20;
        document.getElementById('unitStrokeWidth').value = 0;
        document.getElementById('unitShadowX').value = 0;
        document.getElementById('unitShadowY').value = 0;
        document.getElementById('unitShadowBlur').value = 1;
        if (typeof setPickrColor === 'function') {
            setPickrColor('unitShadowPicker', '#000000');
        }
        document.getElementById('unitBorderRadius').value = 0;
        document.getElementById('unitSkewAngle').value = 0;
    } catch (error) {
        console.error('应用珊瑚魅模板时出错:', error);
    }
} 