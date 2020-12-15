var nav = document.querySelector('.nav-list');
var lei = document.querySelector('.lei');
var list = document.querySelector('.cascading-menu');
var nav = document.querySelector(".header")
var banner = document.querySelector(".banner")
var games = document.querySelector('.games')
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
games.onmouseout = function(){
    list.style.display = 'none';
    $('style').remove();
    $('head').append("<style>.nav .lei::after{background: url(../images/聚诚品-腾讯官方周边商城/ico-comm.png) no-repeat -95px 7px;}}</style>");
}
banner.onmouseout = function(){
    list.style.display = 'none';
    $('style').remove();
    $('head').append("<style>.nav .lei::after{background: url(../images/聚诚品-腾讯官方周边商城/ico-comm.png) no-repeat -95px 7px;}}</style>");
}
nav.onmouseover = function(){
    list.style.display = 'none';
    $('style').remove();
    $('head').append("<style>.nav .lei::after{background: url(../images/聚诚品-腾讯官方周边商城/ico-comm.png) no-repeat -95px 7px;}}</style>");
}
var imgBox = document.querySelector('.imgBox');
var imgs = imgBox.querySelectorAll('img');
var btn = document.querySelector('.btn');
var as = btn.querySelectorAll('a');
var timeout;
for(var i = 0;i<as.length;i++){
    as[i].onmouseover = move;
    as[i].onmouseout = autoMove;
    as[i].setAttribute("index",i)
    imgs[i].setAttribute("attr",i)
}
var index = 0;
function autoMove(){
    timeout = setInterval(function(){
        imgs[index].className = "";
        as[index].classList = "";
        index++;
        if(index > 4){
            index = 0;
        }
        imgs[index].className = "imgOne"; 
        as[index].className = "btn-bgcolor";
    },3000);
}
autoMove();
function move(){
    clearInterval(timeout)
    index = this.getAttribute("index");
    for(var i = 0;i < as.length;i++){
        as[i].className = "";
        imgs[i].className = "";
    }
    this.className = "btn-bgcolor";
    imgs[index].className = "imgOne";
    return index;   
}
var search = document.querySelector('.search').querySelector("input");
var search1 = document.querySelector('.search-list')
search.onfocus = function(){
    search1.style.display = "block"
}
search.onblur = function(){
    search1.style.display = "none"
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