import "../../libs/vanilla-lazyload/lazyload.min.js";

export default () => {
    function logElementEvent(eventName, element) {
        console.log(Date.now(), eventName, element.getAttribute("data-src"));
    }

    const callback_error = function (element) {
        logElementEvent("💀 ERROR", element);
        element.src = "../../images/placeholder.png";
    };

    const lazyLoadInstance = new LazyLoad({
        elements_selector: '.lazy',
        use_native: true,
        callback_error: callback_error,
    });


    function refreshLazy() {
        lazyLoadInstance.update();
    }

    window.refreshLazy = refreshLazy;
}
