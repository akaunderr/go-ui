/*!
* go-ui v0.1.0 | MIT License | https://github.com/underr-ua/doc-ui
* Copyright 2019 Andrii Burkatskyi aka underr
*/

/*  Menu toggle */
(function (window, document) {
    var WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange' : 'resize';
    var els = document.getElementsByClassName('nav-toggle');
    var toggles = [];

    Array.prototype.forEach.call(els, function (el) {
        let navbar = document.getElementById(el.getAttribute('data-menu'));
        let icon = el.getAttribute('data-icon');
        let toggle_class = el.getAttribute('data-class');

        toggles.push(el);
        // navbar.getElementsByClass('.doc-menu-list').style = 'order: 999';

        el.addEventListener('click', function (event) {
            toggleMenu(navbar, toggle_class);
            toggleIcon(icon);
            event.preventDefault();
        });
    });

    // close all menu after screen rotated or resized
    window.addEventListener(WINDOW_CHANGE_EVENT, function () {
        toggles.forEach(function (el) {
            let navbar = document.getElementById(el.getAttribute('data-menu'));
            let icon = el.getAttribute('data-icon');
            let toggle_class = el.getAttribute('data-class');

            closeMenu(navbar, icon, toggle_class);
        });
    });

    function toggleMenu(navbar, toggle_class) {
        navbar.classList.toggle(toggle_class);
    }

    function toggleIcon(icon) {
        // classList returns undefined in ie11
        if (icon && icon.classList) {
            var svg = icon.getElementsByTagName('svg')[0];

            // if FontAwesome 5
            if (svg) {
                (svg.getAttribute('data-icon') == 'bars')
                    ? svg.setAttribute('data-icon', 'times')
                    : svg.setAttribute('data-icon', 'bars');
            }
        }
    }

    function closeMenu(navbar, icon, toggle_class) {
        if (navbar.classList.contains(toggle_class)) {
            navbar.classList.remove(toggle_class);
            toggleIcon(icon);
        }
    }

})(this, this.document);

