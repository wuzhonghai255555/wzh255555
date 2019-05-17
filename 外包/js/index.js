$(function() {
  var mySwiper = new Swiper('.swiper-container', {
    autoplay: true, //可选选项，自动滑动
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });

  function revealOnScroll() {
    var scrolled = $(window).scrollTop(); // 视窗，即viewport，页面可视范围的窗口

    $('.section').each(function() {
      var current = $(this), // 当前元素
        w_height = $(window).outerHeight(), //视窗高度
        offsetTop = current.offset().top; //当前元素离顶部的高度

      // 计算高度差（此处预留50是为了看效果）
      // 当元素进入视窗时，添加class
      if (scrolled + w_height - 150 > offsetTop) {
        current.addClass('animation');
      } else {
        current.removeClass('animation');
      }
    });
  }
  revealOnScroll();
  $(window).on('scroll', revealOnScroll);
});
