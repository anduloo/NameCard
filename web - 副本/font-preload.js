// 字体预加载脚本
document.addEventListener('DOMContentLoaded', function() {
    // 要预加载的字体列表
    const fontsToLoad = [
        {family: 'KuaikanShijie', weight: 'normal', style: 'normal'},
        {family: 'JiangXiZhuoKai', weight: 'normal', style: 'normal'},
        {family: 'HuXiaoBoZhenShuai', weight: 'normal', style: 'normal'},
        {family: 'FangZhengFangSong', weight: 'normal', style: 'normal'},
        {family: 'OPPOSans', weight: 'normal', style: 'normal'},
        {family: 'MiSans-VF', weight: 'normal', style: 'normal'},
        {family: 'AlibabaPuHuiTi', weight: 'normal', style: 'normal'},
        {family: 'LuoxiaXinxiHei', weight: 'normal', style: 'normal'},
        {family: 'SmileySans', weight: 'normal', style: 'normal'}
    ];

    // 在页面上显示字体加载状态
    const fontStatusContainer = document.createElement('div');
    fontStatusContainer.id = 'fontLoadingStatus';
    fontStatusContainer.style.cssText = 'position: fixed; bottom: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; padding: 10px; border-radius: 5px; font-size: 12px; max-width: 300px; z-index: 9999; display: none;';
    document.body.appendChild(fontStatusContainer);

    // 检查字体是否已加载的函数
    const checkFontLoaded = (fontFamily) => {
        return new Promise((resolve) => {
            if (document.fonts && document.fonts.check) {
                // 使用现代API检查
                if (document.fonts.check(`12px ${fontFamily}`)) {
                    resolve(true);
                } else {
                    document.fonts.ready.then(() => {
                        resolve(document.fonts.check(`12px ${fontFamily}`));
                    });
                }
            } else {
                // 后备方法 - 简单延迟，假定字体已加载
                setTimeout(() => resolve(true), 2000);
            }
        });
    };

    // 预加载所有字体
    const preloadFonts = async () => {
        let loadingInfo = '正在加载字体...<br>';
        fontStatusContainer.innerHTML = loadingInfo;
        fontStatusContainer.style.display = 'block';

        // 使用FontFace API进行预加载 (如果浏览器支持)
        if (window.FontFace) {
            for (const font of fontsToLoad) {
                try {
                    loadingInfo += `加载中: ${font.family}...<br>`;
                    fontStatusContainer.innerHTML = loadingInfo;
                    
                    // 检查字体是否已加载
                    const isLoaded = await checkFontLoaded(font.family);
                    
                    if (isLoaded) {
                        loadingInfo = loadingInfo.replace(`加载中: ${font.family}...`, `✓ ${font.family}`);
                    } else {
                        loadingInfo = loadingInfo.replace(`加载中: ${font.family}...`, `✗ ${font.family} (加载失败)`);
                    }
                    
                    fontStatusContainer.innerHTML = loadingInfo;
                } catch (e) {
                    console.error(`加载字体失败: ${font.family}`, e);
                    loadingInfo = loadingInfo.replace(`加载中: ${font.family}...`, `✗ ${font.family} (加载出错)`);
                    fontStatusContainer.innerHTML = loadingInfo;
                }
            }
        } else {
            // 不支持FontFace API的浏览器，简单显示加载信息
            loadingInfo += '您的浏览器不支持FontFace API，使用普通加载方式<br>';
            fontStatusContainer.innerHTML = loadingInfo;
            
            // 延迟几秒后隐藏状态面板
            setTimeout(() => {
                fontStatusContainer.innerHTML += '字体加载完成';
                setTimeout(() => {
                    fontStatusContainer.style.display = 'none';
                }, 2000);
            }, 3000);
            return;
        }
        
        // 全部加载完成后，延迟隐藏状态面板
        loadingInfo += '<br>字体加载完成!';
        fontStatusContainer.innerHTML = loadingInfo;
        
        setTimeout(() => {
            fontStatusContainer.style.display = 'none';
        }, 3000);
    };

    // 开始预加载
    preloadFonts();
}); 