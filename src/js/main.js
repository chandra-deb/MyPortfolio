let body = document.querySelector('body');
let menuBtn = document.querySelector('.menu-bars');
let mobileNavClass = document.querySelector('.mobile-nav');
// let links = document.querySelectorAll('.mobile-nav a');
// console.log(links)
let mobileNavActive = false;


function mobileNavToggler() {
    console.log("clicked")
    if(mobileNavActive) {
        body.classList.remove('mobile-nav-active');
        mobileNavActive = false;  
        // mobileNavClass.style.width = '100px'
    }
    else{
        body.classList.add('mobile-nav-active');
        mobileNavActive = true
        // links.style.marginLeft = 0;
    }

    // if(mobileNavActive) {
    //     gsap.to(
    //         '.mobile-nav',
    //         {
    //             x: 50,
    //             y: 100
    //         }
    //     )
    // }
}

menuBtn.addEventListener('click', mobileNavToggler)

// 
// 
// 
// 
// 
