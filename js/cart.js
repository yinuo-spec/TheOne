var nav = document.querySelector('.nav-list');
var lei = document.querySelector('.lei');
var list = document.querySelector('.cascading-menu');
var nav = document.querySelector(".header")
var mycart = document.querySelector('.mycart')
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
mycart.onmouseout = function(){
    list.style.display = 'none';
    $('style').remove();
    $('head').append("<style>.nav .lei::after{background: url(../images/聚诚品-腾讯官方周边商城/ico-comm.png) no-repeat -95px 7px;}}</style>");
}
nav.onmouseover = function(){
    list.style.display = 'none';
    $('style').remove();
    $('head').append("<style>.nav .lei::after{background: url(../images/聚诚品-腾讯官方周边商城/ico-comm.png) no-repeat -95px 7px;}}</style>");
}
// window.onscroll = function(){
//     var scroll = document.querySelector('.scroll');
//     var top = document.documentElement.scrollTop || document.body.scrollTop;
//     if(top < 200){
//         scroll.style.height = "164px"
//         scroll.style.position = "relative";
//         scroll.style.zIndex = "120"
//     }else if(top <= 400 && top >= 200){
//         scroll.style.height = "0px"
//         scroll.style.overflow = "hidden";
//         scroll.style.transition = "height 0s";
//     }else{
//         scroll.style.position = "fixed";
//         scroll.style.width = "100%";
//         scroll.style.zIndex = "120";
//         scroll.style.height = "164" + "px";
//         scroll.style.transition = "height .5s linear";
//         list.style.position = "fixed";
//         list.style.top = "164px"
//         list.style.zIndex = "120";
//     }
// }




var cartlist
cartlist = eval('('+cartlist+')')
function show1(){
    cartlist = localStorage.getItem('cartlist');
    cartlist = eval('('+cartlist+')')  
    var str = '';
    if(cartlist){
        cartlist.forEach(item => {
            str +=`
                <div class="mycart-item">
                    <div class="mycart-top">
                        <input type="checkbox" data-id=${item.id} name="xuan">
                        <a href="">
                            <img src=${item.img} alt="">
                        </a>
                        <div class="news-top">
                            <p>${item.name}</p>
                            <p>赠品：购买合金板车车模礼包 *1</p>
                        </div>
                        <div class="size">
                            尺码：<span>s</span>
                        </div>
                    </div>
                    <p class="price">${item.price}</p>
                    <div class="button">
                        <button data-id=${item.id}>-</button><input type="text" value=${item.amount}><button data-id=${item.id}>+</button>
                    </div>
                    <div class="jine">
                    ￥<span class="totalpage1">${item.price.substring(1) * item.amount}</span></div>
                    <div class="handle">
                        <p data-id=${item.id}>删除</p>
                        <p>移入收藏夹</p>
                    </div>
                </div>
        `
            $('.mycart-list').html(str)
        });
    }else{
        alert("请先选择商品")
        location.href = '../html/allGoods.html'
    }
}
// function fn1(){
//     cartlist.forEach(item=>{
//         //判断是否为当前操作的商品
//             item.amount = ++item.amount
//             var price = item.price.substring(1);
//             var num = item.amount * price
//             item.debate = "￥" + num
//     })
// }
// fn1()
show1();
// var mycart = document.querySelector('.mycart')
// mycart.addEventListener('click',function(e){
//     var e = e || window.event
//     var target = e.target || e.srcElement
//     if(target.innerHTML == "+"){
//     }
// })
$('.mycart').on('click',function(e){
    var e = e || window.event
    var target=e.target || e.srcElement
    if(target.innerHTML == "+"){
        var id1 = target.getAttribute('data-id')
        cartlist.forEach(item=>{
            //判断是否为当前操作的商品
            if(item.id==id1){
                item.amount = ++item.amount
                var price = item.price.substring(1);
                var num = item.amount * price
                item.debate = "￥" + num
            }
        })
        localStorage.setItem('cartlist',JSON.stringify(cartlist))
        show1()
        totalnum()
    }
    if(target.innerHTML == "-"){
        var id1 = target.getAttribute('data-id')
        cartlist.forEach(item=>{
            //判断是否为当前操作的商品
            if(item.id==id1){
                if(item.amount > 1){
                    item.amount = --item.amount
                }
                var price = item.price.substring(1);
                var num = item.amount * price
                item.debate = "￥" + num
            }
        })
        localStorage.setItem('cartlist',JSON.stringify(cartlist))
        show1()
        totalnum()
    }
    if(target.innerHTML == "删除"){
        var id1 = target.getAttribute('data-id')
        cartlist.forEach(item =>{
            cartlist=cartlist.filter(item=>{
                return item.id!=id1
            })
            localStorage.setItem('cartlist',JSON.stringify(cartlist))
            // location.reload()
        })
        show1()
        totalprice()
        fn2()
        totalnum()
        check()
    }
    if(target.innerHTML == "删除全部商品"){
        localStorage.removeItem('cartlist')
        location.reload()
    }
    if(target.innerHTML == "去结算"){
        let ipt5= document.querySelectorAll('input[name="xuan"]')
        if(confirm("你确定要购买吗？")){
            alert("你要支付："+totalnum.innerHTML)
            //过滤数组元素
            var cartlist3=cartlist.filter(item=>{
                return item.is_select!=1
            })
            //重置localStrong
       localStorage.setItem('cartlist',JSON.stringify(cartlist3))
        location.reload()
        }
    }
    function fn2(){
        if(target.name=='quan1'){
            let ipts = document.querySelectorAll('input[name="xuan"]')
            for(var i=0;i<ipts.length;i++){
                if(target.checked){
                    ipts[i].checked = true
                }else{
                    ipts[i].checked = false
                }
            }  
            totalprice()
            totalnum()
        }
    }
    fn2();
}) 
function totalprice(){
    var add = 0
    var mycart1 = document.querySelector('.mycart')
    // var num2 = document.querySelector('.num1')
    let ipts = document.querySelectorAll('input[name="xuan"]')
    var vals = mycart1.querySelectorAll('input[type="text"]')
    for(var i = 0;i < ipts.length;i++){
        if(ipts[i].checked){
            add += parseInt(vals[i].value)
        }
    }
    $('.num1').html(add)
    // num2.innerHTML == add
} 
totalprice() 
let ipt5= document.querySelectorAll('input[name="xuan"]')
$('input[name="xuan"]').on('change',function(){
    check()
    totalprice() 
    totalnum()
}
)
function check(){
    var quan = document.querySelector('input[name="quan1"]')
    var tt = 0
    for(var i = 0;i<ipt5.length;i++){
        if(ipt5[i].checked){
            tt++
        }else{
            tt--
    }
    if(tt == ipt5.length){
        quan.checked = true;
    }else{
        quan.checked = false;
    }
}
}
function totalnum(){
    var num = 0
   var totalnum = document.querySelector('.totalnum')
   var totalpage1 = document.querySelectorAll('.totalpage1')
   let ipt5= document.querySelectorAll('input[name="xuan"]')
   for(var i = 0;i<ipt5.length;i++){
    if(ipt5[i].checked){
        num += parseInt(totalpage1[i].innerHTML)
    }
   totalnum.innerHTML = num
   return  totalnum.innerHTML   
  }
}
