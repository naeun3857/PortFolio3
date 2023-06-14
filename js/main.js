$(function(){
    $('.quick li').click(function(){
        let num = $(this).index();
        console.log(num)


        // 페이지 버튼 효과
        $('.quick li').removeClass('on');
        $(this).addClass('on');

        if(num == 0){
            $('html, body').animate({'scrollTop':0},800)
        }else if(num == 1){
            $('html, body').animate({'scrollTop':1100},800)
        }else if(num == 2){
            $('html, body').animate({'scrollTop':1900},800)
        }else if(num == 3){
            $('html, body').animate({'scrollTop':3000},800)
        }
    })

    // 스크롤바를 이동했을때, 현재 스크롤바의 위치에따라 pagebtn 불켜기
    $(window).scroll(function(){
        let num = $(document).scrollTop();
        console.log(num)
    

        if(num > 0 && num < 1000){
            $('.quick li').removeClass('on');
            $('.quick li').eq(0).addClass('on')
        }else if(num >1000 && num < 1800){
            $('.quick li').removeClass('on');
            $('.quick li').eq(1).addClass('on')
        }else if(num >1800 && num < 2500){
            $('.quick li').removeClass('on');
            $('.quick li').eq(2).addClass('on')
        }else if(num >2500 && num < 3000){
            $('.quick li').removeClass('on');
            $('.quick li').eq(3).addClass('on')
        }




    })



    $('#works .inner .list li .thum a').lightBox({

        overlayBgColor:"#000", //cover
        overlayOpacity:0.9, //cover투명도
        imageLoading:"./images/lightbox-ico-loading.gif", //이미지로딩
        imageBtnClose:"./images/lightbox-btn-close.gif", //닫기버튼이미지
        imageBtnPrev:"./images/lightbox-btn-prev.gif", //이전버튼
        imageBtnNext:"./images/lightbox-btn-next.gif", //다음버튼
        containerResizeSpeed: 500,//모달팝업창 속도조절

        txtImage:"작품" // 작품

    



    })



    // $('main #home .inner .intro .type_bar').animate({width:"0px"},1000,function(){
    //     $('main #home .inner .intro .type_bar').animate({width:"500px"},1000)
    // })


        // isotope사용(필터)

        $('.grid').isotope({
            // options
            itemSelector: '.grid-item',
            layoutMode: 'fitRows'
          });
    
          $('#wd').click(function(){
            $('.grid').isotope({ filter: '.wd' })
          })
    
          $('#all').click(function(){
            $('.grid').isotope({ filter: '.grid-item' })
          })
    
    
    
          $('#gb').click(function(){
            $('.grid').isotope({ filter: '.gb' })
          })
    
          $('#fe').click(function(){
            $('.grid').isotope({ filter: '.fe' })
          })
    
})