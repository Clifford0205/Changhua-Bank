$(document).ready(function() {
    
    //視窗移動到最上方
    $('.go-top').on('click', function() {
        // alert($(window).scrollTop())
        $('html,body').animate(
            {
                scrollTop: 0,
            },
            1000
        )
    });


    //modal開啟modal
    $('body').on('hidden.bs.modal', function(e) {
        if ($('.modal.show').length > 0) {
            $('body').addClass('modal-open')
        }
    });

    $('#inputWindow').on('hidden.bs.modal',function(){
        let screen=document.querySelector('.screen');
        screen.value="";
    })

   
    // let topBar=$('.top-bar').offset().top ;
    // $(window).on('scroll',function(){
    //     var scrollPos = $(window).scrollTop();
    //     console.log('上方距離',topBar);
    //     console.log(scrollPos);
    //     if(topBar<scrollPos){
    //         console.log('超過了');
    //         $('.top-bar').addClass('fixed-now');
    //         $('.makeup-block').addClass('show')
    //     }
    //     else{
    //         $('.top-bar').removeClass('fixed-now');
    //         $('.makeup-block').removeClass('show')
    //     }
    // })
})



let allnum=document.querySelectorAll('.num');
let screen=document.querySelector('.screen');
let clear =document.querySelector('.clear-btn');
let deleteOne=document.querySelector('.delete-one');
// let whiteAreaList=document.querySelector('.white-area-list');
// let bigTitle=whiteAreaList.querySelector('.big-title');


// let y=whiteAreaList.scrollTop ;
// window.addEventListener('scroll',function(){
//     console.log('上方距離',y)
// },false)

if(screen){
    for(let i=0;i<allnum.length;i++){
        allnum[i].addEventListener("click",function(){
            console.log(this.value);
            let num=this.value;
            screen.value +=num;
            console.log(screen.value.length);
        },false)
    }
    
    clear.addEventListener("click",function(){
        screen.value="";
    },false);
    
    deleteOne.addEventListener("click",function(){
        var newStr= screen.value.slice(0,-1);
        console.log(newStr);
        screen.value=newStr;
    },false 
        
    )
}

