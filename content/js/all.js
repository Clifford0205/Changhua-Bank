$(document).ready(function() {
    // slider的部分
    $('.center').slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 3,
        variableWidth: true,
        variableHeight: true,
    })

    $('.center2').slick({
        dots: false,
        infinite: true,
        centerMode: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,
        variableHeight: true,
    })

    $('.center3').slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 3,
        variableWidth: true,
        variableHeight: true,
    })

    $('.single-item').slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 3,
        variableWidth: true,
        variableHeight: true,
    })

    // slider的部分結束

    // 橘色球球中間的字大小變化
    // $('.text-inside').each(function() {
    //     if ($(this).width() > 96) {
    //         $(this).css({ 'font-size': '15px' });
    //     }
    // })

    if (window.innerWidth > 992) {
        $('.text-inside').each(function() {
            if ($(this).width() > 76) {
                $(this).css({ 'font-size': '15px' })
            }
        })
    }
    if (window.innerWidth < 992) {
        $('.text-inside').each(function() {
            if ($(this).width() > 56) {
                $(this).css({ 'font-size': '10.5px' })
            }
        })
    }

    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            $('.text-inside').css({ 'font-size': '19px' })
            $('.text-inside').each(function() {
                if ($(this).width() > 76) {
                    $(this).css({ 'font-size': '15px' })
                }
            })
        }

        if (window.innerWidth < 992) {
            $('.text-inside').css({ 'font-size': '14px' })
            $('.text-inside').each(function() {
                if ($(this).width() > 56) {
                    $(this).css({ 'font-size': '10.5px' })
                }
            })
        }
    })

    //原本是96
    // 橘色球球中間的字大小變化結束

    //modal開啟modal
    $('body').on('hidden.bs.modal', function(e) {
        if ($('.modal.show').length > 0) {
            $('body').addClass('modal-open')
        }
    })
})

// slider的部分 結束

//點擊展開更多  首頁index 會員專屬tagType

//拿到所有item
var allItems = document.querySelectorAll('.single-article')
console.log(allItems.length)

//拿到我的優惠 myCoupon的item
if (allItems.length == 0) {
    allItems = document.querySelectorAll('.single-acticity')
    console.log(allItems.length)
}

//拿到戳我一下按鈕
var moreBtn = document.querySelector('.readmore')
console.log(moreBtn)

//設定一開始顯示筆數
var showItems = 6
console.log(showItems)

//設定一開始顯示筆數
for (i = 0; i < allItems.length; i++) {
    if (i < showItems) {
        allItems[i].classList.remove('no-show')
    }
}

//設定點擊後 多顯示幾筆
if (moreBtn) {
    moreBtn.addEventListener(
        'click',
        function() {
            showItems += 8 //會多顯示n筆的資料
            console.log(showItems)

            for (i = 0; i < allItems.length; i++) {
                if (i < showItems) {
                    allItems[i].classList.remove('no-show')
                }
            }
        },
        false
    )
}

//點擊展開更多 結束

//查看密碼
var passInput = document.querySelector('.password-input')
var lookImg = document.querySelector('.look-password')
var nolook = document.querySelector('.no-look-password')
if (lookImg) {
    lookImg.addEventListener(
        'click',
        function() {
            passInput.type = 'text'
            lookImg.style.display = 'none'
            nolook.style.display = 'block'
        },
        false
    )
}

if (nolook) {
    nolook.addEventListener(
        'click',
        function() {
            passInput.type = 'password'
            lookImg.style.display = 'block'
            nolook.style.display = 'none'
        },
        false
    )
}

//查看密碼 結束

//點擊上傳QRcode

var QRbtn = document.querySelector('.QR-btn')
var cameraBtn = document.querySelector('.camera-btn')

if (QRbtn) {
    QRbtn.addEventListener(
        'click',
        function() {
            cameraBtn.click()
        },
        false
    )
}
//點擊上傳QRcode 結束
