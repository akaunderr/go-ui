/*!
* go-ui v0.1.0 | MIT License | https://github.com/underr-ua/doc-ui
* Copyright 2019 Andrii Burkatskyi aka underr
*/

/*  Menu toggle */
(function(window, document) {
    var WINDOW_CHANGE_EVENT = "onorientationchange" in window ? "orientationchange" : "resize";
    var els = document.getElementsByClassName("nav-toggle");
    var toggles = [];

    // getElementsByClassName is HTMLCollection not an array !!!
    Array.prototype.forEach.call(els, function(el) {
        let m = document.getElementById(el.dataset.id);
        let i = el.getElementsByTagName("i")[0];

        // Create array instead HTMLCollection.
        toggles.push(el);
        // put list element in the end
        // navbar.getElementsByClass('.nav-menu-list').style = 'order: 999';

        el.addEventListener("click", function(event) {
            toggleMenu(m);
            toggleIcon(i);
            event.preventDefault();
        });
    });

    // close all menu after screen rotated or resized
    window.addEventListener(WINDOW_CHANGE_EVENT, function() {
        toggles.forEach(function(el) {
            let m = document.getElementById(el.dataset.id);
            let i = el.getElementsByTagName("i")[0];

            closeMenu(m, i);
        });
    });

    function closeMenu(m, i) {
        if (m.classList.contains(m.dataset.class)) {
            m.classList.remove(m.dataset.class);

            if (i.classList.contains(i.dataset.icon)) {
                i.classList.remove(i.dataset.icon);
            }
        }
    }

    function toggleMenu(m) {
        m.classList.toggle(m.dataset.class);
    }

    function toggleIcon(i) {
        i.classList.toggle(i.dataset.icon);
    }
})(this, this.document);
