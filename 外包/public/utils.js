var winWidth = window.innerWidth,
  scale = winWidth / 1928,
  scale = scale;
document
  .getElementById('viewport')
  .setAttribute(
    'content',
    'width=device-width,user-scalable=no, initial-scale=' +
      scale +
      ' minimum-scale=' +
      scale +
      ', maximum-scale=' +
      scale
  );

// 常用工具类
var utils = {
  isMatchUrl: function(str) {
    var url = window.location.href;
    if (url.indexOf(str) != -1) {
      return true;
    }
    return false;
  }
};
//加载头部尾部
$(function() {
  $('.warpheader').load('../header.html');
  if (!utils.isMatchUrl('wdtt')) {
    $('.lxwm').load('../footer.html');
  } else {
    // 本页面单独加载footer
    $('.lxwm').empty();
    $('.lxwm').load('../wdtt_footer.html');
  }
});
