import Modal from "./modules/Modal.js";
// import validationForm from './modules/validation.js';
// import inputMasks from './modules/masks.js';
// import lazyload from './modules/lazyload.js';

import setHeaderPadding from './modules/setHeaderPadding.js';
import dropdownsControl from './modules/dropdownsControl.js';


document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // activate transition:
    setTimeout(() => {
        body.classList.remove('preload');
    }, 500);

    // inits modals:
    const modal = new Modal({
        isOpen: (modal) => {
            console.log('open modal');
        },
        isClose: (modal) => {
            console.log('close modal');
        },
    });

    // validationForm();
    // inputMasks();

    // lazyload for images, videos, iframes and objects:
    // lazyload();

    setHeaderPadding();
    dropdownsControl();
})
