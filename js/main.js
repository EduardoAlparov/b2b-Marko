import Modal from "./modules/Modal.js";
import lazyload from './modules/lazyload.js';

import setHeaderPadding from './modules/setHeaderPadding.js';
import headerHide from './modules/headerHide.js';
import mobileMenuOpen from './modules/mobileMenuOpen.js';

import workSlider from './modules/workSlider.js';
import dropdownsControl from './modules/dropdownsControl.js';
import fancyboxWorks from './modules/fancyboxWorks.js';
import scrollAnimation from './modules/scrollAnimation.js';


document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // activate transition:
    setTimeout(() => {
        body.classList.remove('preload');
    }, 500);

    setTimeout(() => {
        body.classList.remove('animate-trigger');
    }, 1500);

    // inits modals:
    const modal = new Modal({
        isOpen: (modal) => {
        },
        isClose: (modal) => {
        },
    });


    lazyload();

    setHeaderPadding();
    headerHide();
    mobileMenuOpen();

    workSlider();
    dropdownsControl();
    fancyboxWorks();
    scrollAnimation();
})
