/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

let currentIndex = 0;
const feedbackContainer = document.querySelector('.feedback-container');
const feedbacks = document.querySelectorAll('.feedback');
const totalFeedbacks = feedbacks.length;

function updateFeedbacks() {
    const offset = currentIndex * -33.33; // 一次移動 33.33%
    feedbackContainer.style.transform = `translateX(${offset}%)`;
    updateArrows();
}

function prevFeedback() {
    if (currentIndex > 0) {
        currentIndex--;
        updateFeedbacks();
    }
}

function nextFeedback() {
    if (currentIndex < totalFeedbacks - 3) { // 確保不超過範圍
        currentIndex++;
        updateFeedbacks();
    }
}

function updateArrows() {
    document.querySelector('.left-arrow').disabled = currentIndex === 0;
    document.querySelector('.right-arrow').disabled = currentIndex === totalFeedbacks - 3;
}

// 初始化輪播
updateFeedbacks();



window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
