document.addEventListener('DOMContentLoaded', function (e){
    setTimeout(function fixScroll() {
            const heightScroll = window.pageYOffset;
            console.log(heightScroll);
            window.scrollTo(0,heightScroll-100)
        },1800
    )
})
