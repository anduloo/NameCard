// 字体预加载脚本
document.addEventListener('DOMContentLoaded', function() {
    // 要预加载的字体列表
    const fontsToLoad = [
        {family: 'KuaiKanShiJie', url: 'fonts/Kuaikanshijie.ttf'},
        {family: 'JiangXiZhuoKai', url: 'fonts/Jiangxizhuokai.ttf'},
        {family: 'HuXiaoBoZhenShuai', url: 'fonts/Huxiaobozhenshuai.otf'},
        {family: 'FangZhengFangSong', url: 'fonts/Fangzhengfangsong.ttf'},
        {family: 'OPPOSans', url: 'fonts/OPPOSans-L.ttf'},
        {family: 'MiSans-VF', url: 'fonts/MiSans%20VF.ttf'},
        {family: 'AlibabaPuHuiTi', url: 'fonts/Alibabapuhui.ttf'},
        {family: 'LuoxiaXinxiHei', url: 'fonts/Luoxiaxinxiheiplus.ttf'},
        {family: 'SmileySans', url: 'fonts/SmileySans-Oblique-3.otf'}
    ];

    // 在页面上显示字体加载状态
    const fontStatusContainer = document.createElement('div');
    fontStatusContainer.id = 'fontLoadingStatus';
    fontStatusContainer.style.cssText = 'position: fixed; bottom: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; padding: 10px; border-radius: 5px; font-size: 12px; max-width: 300px; z-index: 9999; display: none;';
    document.body.appendChild(fontStatusContainer);

    // 使用FontFace API预加载字体
    const preloadFonts = async () => {
        let loadingInfo = '正在加载字体...<br>';
        fontStatusContainer.innerHTML = loadingInfo;
        fontStatusContainer.style.display = 'block';

        if (window.FontFace) {
            const fontPromises = fontsToLoad.map(async (font) => {
                try {
                    loadingInfo += `加载中: ${font.family}...<br>`;
                    fontStatusContainer.innerHTML = loadingInfo;

                    const fontFace = new FontFace(font.family, `url(${font.url})`, {
                        display: 'swap',
                        weight: 'normal',
                        style: 'normal'
                    });

                    // 加载字体
                    const loadedFont = await fontFace.load();
                    // 添加到字体集
                    document.fonts.add(loadedFont);
                    
                    loadingInfo = loadingInfo.replace(`加载中: ${font.family}...`, `✓ ${font.family}`);
                    fontStatusContainer.innerHTML = loadingInfo;
                    return true;
                } catch (e) {
                    console.error(`加载字体失败: ${font.family}`, e);
                    loadingInfo = loadingInfo.replace(`加载中: ${font.family}...`, `✗ ${font.family} (加载失败)`);
                    fontStatusContainer.innerHTML = loadingInfo;
                    return false;
                }
            });

            // 等待所有字体加载完成
            await Promise.all(fontPromises);
        } else {
            loadingInfo += '您的浏览器不支持FontFace API，使用普通加载方式<br>';
            fontStatusContainer.innerHTML = loadingInfo;
        }

        // 全部加载完成后，延迟隐藏状态面板
        loadingInfo += '<br>字体加载完成!';
        fontStatusContainer.innerHTML = loadingInfo;
        
        setTimeout(() => {
            fontStatusContainer.style.display = 'none';
        }, 2000);
    };

    // 开始预加载
    preloadFonts();
}); 