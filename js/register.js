var form = document.querySelector('form');
var btn = document.querySelector('.register1');
var span = document.querySelector('.icon-denglu').querySelector('span')
btn.onclick = function(){
    var u1 = document.querySelector('#username').value;
    var p1 = document.querySelector('[type="password"]').value;
    $.ajax({
        url:'../php/register.php',  
        data: `username=${u1}&password=${p1}`,
        success:function(dt){
            if(dt == 1){
                location.href = "../html/login.html"
                // alert('登录成功')
                setCookie(u1)
                // getCookie(u1)
            }else{
                alert('密码输入错误，请重新登录')
            }
        }
    })
    return false;
}
function setCookie(key){
    if(key == 'undefined'){
     return   $('.icon-denglu').find('span').text("立即登录")
    }else{
        return document.cookie = `username=${key}`
    }
}
function getCookie(val){
    var cookie1 = val.split("=")[1]
    if(cookie1){
        $('.icon-denglu').find('span').text(`${cookie1}`)
        $('.icon-denglu').find('em').css('text-indent','0em')
    }
}
function removeCookie(u1){
    setCookie(u1, ' ', -1);
    $('.icon-denglu').find('span').text("立即登录")
}
window.onload = function(){
    getCookie(document.cookie);
}
var close = document.querySelector("#close");
close.onclick =function(){
    $('.mask').css("display","none")
}
var mask = document.querySelector('.mask');
span.onclick = function(){
    if(span.innerHTML != "立即登录"){
        // h1 = document.body.scrollHeight;
        // mask.style.height = h1 + "px";
        mask.style.display = "none";
        alert('你已登录')
    }else{
        mask.style.display = "block";
    }
}
$('.icon-denglu').find('em').on('click',function(){
    removeCookie();
    mask.style.display = "block";
})
