document.addEventListener('DOMContentLoaded', function() {
    var switchButton = document.getElementById('switchButton');
    var switchList = document.getElementById('switchList');
    var pages = document.querySelectorAll('.page');

    // 处理导航链接的点击事件
    switchList.addEventListener('click', function(event) {
        event.preventDefault();

        var target = event.target.closest('a');
        if (target) {
            var targetPageId = target.dataset.page;

            // 切换页面显示状态
            pages.forEach(function(page) {
                page.classList.remove('active');
                if (page.id === targetPageId) {
                    page.classList.add('active');
                }
            });

            // 可选：点击后自动隐藏列表
            // switchList.style.display = 'none';
        }
    });

    // 可选：点击按钮切换列表显示状态
    // switchButton.addEventListener('click', function() {
    //     switchList.style.display = switchList.style.display === 'block' ? 'none' : 'block';
    // });
});
