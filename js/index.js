

function sum(m, n) {
    　　var num = Math.floor(Math.random() * (m - n) + n);
    　　return num;
}


// 点击创建按钮，创建3个li，并添加到ul里
$('.btn .add').on('click',function(){
    // 点击创建按钮的时候，所有的cover display为none
    $('.cover').css('display','none');
    $('li').css('border', '1px solid');
    console.log(1);
    for(var i=0;i<3;i++){
        var num = sum(1, 100); //获取1-100的随机数
        var $li = $('<li>');
        var $a = $('<a href="#">').attr('class', 'prod')
        var $img = $('<img>').attr('src', 'https://picsum.photos/200/200/?image=' + num);
        var $prodName = $('<div>珂兰 黄金手 猴哥款</div>').attr('class', 'prod-name');
        var $prodPrice = $('<div>').text('￥' + num).attr('class', 'price');

        
        $a.append($img);
        $a.append($prodName);
        $a.append($prodPrice);
        $li.append($a);


        var $cover = $('<div>').attr('class', 'cover');
        var $btn = $('<button>').text('删除').attr('class', 'delete');

        $cover.append($btn);
        $li.append($cover);

        $('.content').append($li);
    }
})

// 点击编辑按钮，决定cover是否出现或隐藏
$('.btn .edit').on('click',function(){
    // 判断一下，如果是隐藏的，就显示，如果是显示的，就隐藏
    if($('.cover').is(':hidden')){
        $('.cover').css('display', 'block');
        $('li').css('border', 'none');
    }else{
        $('.cover').css('display', 'none');
        $('li').css('border', '1px solid');
    }  
})


// 事件代理绑定事件
$('ul').on('click','.delete',function(){
   $(this).parent().parent().remove();
})