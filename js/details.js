var url = location.href;
var id2=url.split('?')[1].split('=')[1];
var data
if(url){
    $.ajax({
        url:'../php/details.php',
        data:'id='+id2,
        async:false,
        success:function(dt){
            data = eval('('+dt+')');
            var str = `
            <div class="content main fl">
            <div class="box fl">
                <img src="${data[0].img}" alt="">
                <div class="mark"></div>
            </div>
            <div class="rightBox fl">
                <img src="${data[0].img}" alt="">
            </div>
            </div>
            <div class="fr details">
            <h3>${data[0].name}</h3>
            <p class="pord-tips">CF首个文创+王者手办模型！荣耀武至尊-王者之武正式上线！</p>
            <p class="pord-price">${data[0].price}</p>
            <div class="pord-detailBox">
              <p>已售：<span>${data[0].stock}</span></p> 
              <p>累计评价：<span>51</span></p>
              <div class="prod-starbox">
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>0</span>
              </div>
            </div>
            <div class="pord-selist clearfix">
              <p>尺码</p>
              <ul class="ul2">
                <li class="bg-color">M</li>
                <li>L</li>
                <li>XL</li>
                <li>XXL</li>
                <li>S</li>
              </ul>
            </div>
            <div class="totalpage clearfix">
              <p>数量</p>
              <div class="sum clearfix">
                <button>-</button><input type="text" value="1"><button>+</button>
              </div>
            </div>
            <div class="shops">
              <button>加入购物车</button>
              <button>立即购买</button>
            </div>
        </div>
        `
        $('.qqq').html(str)
        }
    })
}
let mark = document.querySelector('.mark')
let box = document.querySelector('.box')
let rightBox = document.querySelector('.rightBox')
let content = document.querySelector('.content')
box.onmousemove = function(e){
    var e = e|| window.event
    var x1=e.pageX-box.offsetLeft-parseInt(mark.offsetWidth/2)
    var y1=e.pageY-box.offsetTop-parseInt(mark.offsetHeight/2)
    var maxX=box.offsetWidth-mark.offsetWidth
    var maxY=box.offsetHeight-mark.offsetHeight
    var minX=minY=0
    var tempX,tempY
    if(x1<minX){
        mark.style.left=minX+'px'
        tempX=0
    }else if(x1>maxX){
        mark.style.left=maxX+'px'
        tempX=maxX
    }else{
        mark.style.left=x1+'px'
        tempX=x1
    }
    if(y1<minY){
        mark.style.top=minY+'px'
        tempY=0
    }else if(y1>maxY){
        mark.style.top=maxY+'px'
        tempY=maxY
    }else{
        mark.style.top=y1+'px'
        tempY=y1
    }
    var rightImg = rightBox.querySelector('img')
    rightImg.style.left=-2*tempX+'px'
    rightImg.style.top=-2*tempY+'px'
}
box.onmouseover = function(e){
    var e = e || window.event
    mark.style.display='block'
    rightBox.style.display='block'
}
box.onmouseout = function(){
    mark.style.display='none'
    rightBox.style.display='none'
}
$('.ul2').children('li').on('click',function(){   
    $(this).siblings().removeClass()
    $(this).addClass("bg-color")
})
var val;
var sum1 = document.querySelector('.sum')
sum1.addEventListener('click',function(e){
    var e = e || window.event;
    var target = e.target;
    if(target.innerHTML == "+"){
        val = target.previousElementSibling.value
        val++;
        localStorage.setItem("val",val)
        target.previousElementSibling.value =val
    }
    if(target.innerHTML == "-"){
        val = target.nextElementSibling.value
        if(val > 1){
            val--
        }
        localStorage.setItem("val",val)
        target.nextElementSibling.value =val
    }
})
$('.sum').find('input').on('blur',function(e){
    var e = e || window.event;
    var target = e.target;
    if(typeof(val) != Number){
        target.value = 1
    }
    val = target.value;
    console.log(typeof(val))
    localStorage.setItem("val",val)
})
var news;
var shops = document.querySelector('.shops')
shops.addEventListener('click',function(){
    var e = e || window.event;
    var target = e.target;
    if(target.innerHTML == "加入购物车"){
    //   var num = localStorage.getItem('val')
      var cartlist = localStorage.getItem('cartlist');
        if(cartlist){
            var a = 0;
            cartlist = JSON.parse(cartlist);
            cartlist.forEach(item => {
                if(item.id == data[0].id){
                    item.amount = ++item.amount
                    a++
                    localStorage.setItem('cartlist',JSON.stringify(cartlist))
                }
            });
            if(a==0){
                cartlist.push(data[0])
                localStorage.setItem('cartlist',JSON.stringify(cartlist))
            }else{
                console.log(222)
                
                localStorage.setItem('cartlist',JSON.stringify(cartlist))
            }
        }else{
            localStorage.setItem('cartlist',JSON.stringify(data))
        }

    }
    if(target.innerHTML == '立即购买'){
        console.log(111)
        location.href = '../html/cart.html'
    }
})