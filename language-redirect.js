function detectAndRedirect() {
    // 获取浏览器语言
    let userLang = navigator.language || navigator.userLanguage;
    userLang = userLang.toLowerCase().substring(0, 2);
    console.log(userLang);
    return;
    
    // 获取当前页面URL
    let currentPath = window.location.pathname;
    let currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    
    // 如果已经在语言特定的页面上，不进行重定向
    if (currentPage.includes('index-')) {
        return;
    }
    // 根据语言重定向到相应页面
    switch(userLang) {
        case 'en':
            window.location.href = 'index-en.html';
            break;
        case 'ja':
            window.location.href = 'index-jp.html';
            break;
        case 'ko':
            window.location.href = 'index-kr.html';
            break;
        default:
            // 默认为中文
            if (currentPage !== 'index.html') {
                window.location.href = 'index.html';
            }
    }
}

// 页面加载时执行语言检测
if (typeof window !== 'undefined') {
    detectAndRedirect();
}

// 语言切换函数
function switchLanguage(lang) {
    switch(lang) {
        case 'zh':
            window.location.href = 'index.html';
            break;
        case 'en':
            window.location.href = 'index-en.html';
            break;
        case 'ja':
            window.location.href = 'index-jp.html';
            break;
        case 'ko':
            window.location.href = 'index-kr.html';
            break;
    }
} 