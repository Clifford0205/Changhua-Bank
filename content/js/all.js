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
    })
})



let allnum=document.querySelectorAll('.num');
let screen=document.querySelector('.screen');
let clear =document.querySelector('.clear-btn');
let deleteOne=document.querySelector('.delete-one');


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

