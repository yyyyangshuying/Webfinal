// 当页面中的DOM加载完成后执行回调函数
$(function () {
    // 滚动条初始化
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
});
