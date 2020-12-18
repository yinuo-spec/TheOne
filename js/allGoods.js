var nav = document.querySelector('.nav-list');
var lei = document.querySelector('.lei');
var list = document.querySelector('.cascading-menu');
var nav = document.querySelector(".header")
var content = document.querySelector('.content')
lei.onmouseover = function(){
    list.style.display = 'block';
    $('style').remove();
    $('head').append("<style>.nav .lei::after{background: url(../images/聚诚品-腾讯官方周边商城/ico-comm.png) no-repeat -64px 7px;}}</style>");
}
list.onmouseover = function(){
    list.style.display = 'block';
    $('style').remove();
    $('head').append("<style>.nav .lei::after{background: url(../images/聚诚品-腾讯官方周边商城/ico-comm.png) no-repeat -64px 7px;}}</style>");
}
content.onmouseout = function(){
    list.style.display = 'none';
    $('style').remove();
    $('head').append("<style>.nav .lei::after{background: url(../images/聚诚品-腾讯官方周边商城/ico-comm.png) no-repeat -95px 7px;}}</style>");
}
nav.onmouseover = function(){
    list.style.display = 'none';
    $('style').remove();
    $('head').append("<style>.nav .lei::after{background: url(../images/聚诚品-腾讯官方周边商城/ico-comm.png) no-repeat -95px 7px;}}</style>");
}
window.onscroll = function(){
    var scroll = document.querySelector('.scroll');
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    if(top < 200){
        scroll.style.height = "164px"
        scroll.style.position = "relative";
        scroll.style.zIndex = "120"
    }else if(top <= 400 && top >= 200){
        scroll.style.height = "0px"
        scroll.style.overflow = "hidden";
        scroll.style.transition = "height 0s";
    }else{
        scroll.style.position = "fixed";
        scroll.style.width = "100%";
        scroll.style.zIndex = "120";
        scroll.style.height = "164" + "px";
        scroll.style.transition = "height .5s linear";
        list.style.position = "fixed";
        list.style.top = "164px"
        list.style.zIndex = "120";
    }
}
// console.log(getCookie(username))