$(document).ready(function(){

    //엘리먼트 위치 판단
    var arrPos = [];

    for(var i = 1; i < 4; i++){

        arrPos.push( $('.section' + i).offset().top );

    }
    
    console.log(arrPos);
    /*
    arrPos[0] = 0
    arrPos[1] = 1277
    arrPos[2] = 2302
    */

    $('.btn1').on('click', function(){
        $('html, body').stop().animate({scrollTop:arrPos[1] + 1},600);
    });
    $('.btn2').on('click', function(){
        $('html, body').stop().animate({scrollTop:arrPos[2] + 1},600);
    });
    $('.btn3').on('click', function(){
        $('html, body').stop().animate({scrollTop: 0 },600);
    });

    //.btn_page 버튼을 클릭했을 때
    $('.btn_page li').on('click', function(){

        var num = $(this).index();

        if( num == 0 ){
            $('html, body').stop().animate({scrollTop:0});
        }else if( num == 1){
            $('html, body').stop().animate({scrollTop: arrPos[1] + 1});
        }else{
            $('html, body').stop().animate({scrollTop: arrPos[2] + 1});
        }
    });

    //브라우저 스크롤바를 움직일 때
    $(window).on('scroll', function(){

        //header 고정
        var num = $(this).scrollTop();
        
        if(num >= arrPos[1]){
            $('header').addClass('on');
        }else{
            $('header').removeClass('on');
        }

        //section2 on 클래스로 인한 애니메이션효과
        if( num >= arrPos[1] - 200){
            $('.section2 .case').addClass('on');
        }else if(num == 0){
            $('.section2 .case').removeClass('on');
        }

        //section3 on 클래스로 인한 애니메이션효과
        if( num >= arrPos[2] - 200){
            $('.section3 .con').addClass('on');
        }else if(num == 0){
            $('.section3 .con').removeClass('on');
        }

        //스크롤탑 판단후 해당 섹션에 진입했을 때 on 클래스 적용
        if( num >= 0 && num <= arrPos[1]){
            // num의 값이 0~1277 일때
            $('.btn_page li').removeClass('on');
            $('.btn_page li').eq(0).addClass('on');
        }else if( num >= arrPos[1] + 1 && num <= arrPos[2]){
            //num의 값이 1278~2302일때
            $('.btn_page li').removeClass('on');
            $('.btn_page li').eq(1).addClass('on');
        }else{//num의 값이 2303 이상일때
            $('.btn_page li').removeClass('on');
            $('.btn_page li').eq(2).addClass('on');
        }
    });
});