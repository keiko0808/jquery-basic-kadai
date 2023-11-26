$(window).on('load',() => {
    console.log('loadイベントが発生しました。');
});
$(function() {
    $(window).on('scroll',() => {
        console.log('スクロールイベントが発生しました。');
    });
});
