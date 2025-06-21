// Pickr Fallback 加载脚本
(function() {
    // 检查Pickr是否已定义
    if (typeof Pickr === 'undefined') {
        console.log('Pickr未找到, 尝试从备用源加载...');
        
        // 尝试从其他CDN加载
        loadScript('https://unpkg.com/@simonwep/pickr/dist/pickr.min.js', function() {
            console.log('从unpkg成功加载Pickr');
            // 加载样式表
            loadStylesheet('https://unpkg.com/@simonwep/pickr/dist/themes/classic.min.css');
            // 初始化Pickr
            if (typeof initPickrColorPickers === 'function') {
                initPickrColorPickers();
            }
        }, function() {
            // 如果从unpkg加载失败，尝试从jsdelivr加载
            console.log('从unpkg加载Pickr失败，尝试从jsdelivr加载...');
            loadScript('https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/pickr.min.js', function() {
                console.log('从jsdelivr成功加载Pickr');
                // 加载样式表
                loadStylesheet('https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/themes/classic.min.css');
                // 初始化Pickr
                if (typeof initPickrColorPickers === 'function') {
                    initPickrColorPickers();
                }
            }, function() {
                // 所有CDN都失败，显示错误
                console.error('无法加载Pickr库，请检查网络连接或手动下载库文件。');
            });
        });
    } else {
        console.log('Pickr已成功加载');
    }

    // 加载JavaScript脚本的辅助函数
    function loadScript(url, onSuccess, onError) {
        var script = document.createElement('script');
        script.src = url;
        script.onload = onSuccess;
        script.onerror = onError;
        document.head.appendChild(script);
    }

    // 加载CSS样式表的辅助函数
    function loadStylesheet(url) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        document.head.appendChild(link);
    }
})(); 