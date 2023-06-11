/**
 * @file
 * Theme Scripts
 *
 * @package JDMLABS
 * @author Jason D. Moss <jason@jdmlabs.com>
 * @copyright 2005-2023 Jason D. Moss. All rights freely given (GPL2).
 * @link https://www.jdmlabs.com/
 *
 * jshint esversion: 11
 */

/**
 * Has (Object|Node) been defined? Does (Object|Node) exist?
 *
 * @param {string} thing
 * @return boolean
 */
function exists (thing)
{
    "use strict";

    return ! (typeof thing === "undefined" ||
        thing === null ||
        thing === false ||
        thing.length < 1);
}

/**
 * Securely open a new window from given anchor element.
 *
 * @param {string} anchor
 */
function newWindowAnchor (anchor)
{
    "use strict";

    anchor.setAttribute("rel", "noopener noreferrer");

    anchor.addEventListener("click", (event) => {
        event.preventDefault();

        let targetUrl = anchor.getAttribute("href");
        let newWindow = window.open(targetUrl, "_blank");

        /**
         * Sever the reference of the new tab/window from the parent.
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/opener
         */
        newWindow.opener = null;
    });
}

(function () {
    "use strict";

    window.addEventListener("load", () => {

        // Open external links in new tab/window.
        document.querySelectorAll("a").forEach((link) => {
            const href = link.getAttribute("href");
            const rel = link.getAttribute("rel");

            if (! exists(href)) {
                return false;
            }

            // isExternal.
            let isExternal = ! (
                    href.startsWith("/") ||
                    href.startsWith("?") ||
                    href.startsWith("#") ||
                    href.includes("jdmlabs")
                ) ||
                // Flagged as external.
                (exists(rel) ? rel.includes("external") : false);

            if (isExternal) {
                // Securely open external link in new tab/window.
                newWindowAnchor(link);
            }
        });

    }, false);

    /**
     * IntersectionObserver.
     *
     * @interface IntersectionObserver
     * @see https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver
     */
    // if ("IntersectionObserver" in window &&
    //     "IntersectionObserverEntry" in window &&
    //     "intersectionRatio" in window.IntersectionObserverEntry.prototype
    // ) {
    //     /**
    //      * Minimal polyfill for Edge 15's lack of `isIntersecting`.
    //      *
    //      * @see https://github.com/w3c/IntersectionObserver/issues/211
    //      */
    //     if (! ("isIntersecting" in window.IntersectionObserverEntry.prototype)) {
    //         Object.defineProperty(
    //             window.IntersectionObserverEntry.prototype,
    //             "isIntersecting",
    //             {
    //                 get: function () {
    //                     return this.intersectionRatio > 0;
    //                 }
    //             }
    //         );
    //     }

    //     /**
    //      * 'Pinned' Site Header.
    //      *
    //      * @type {NodeElement} sentinel
    //      * @uses {Method} PinnedHeader
    //      */
    //     const sentinel = document.getElementById("siteHeader");
    //     if (exists(sentinel)) {
    //         PinnedHeader(sentinel);
    //     }
    // }

    /**
     * Drupal Behaviors.
     *
     * Using Drupal 9 `once()` from the JavaScript API.
     * @see https://www.drupal.org/docs/drupal-apis/javascript-api/javascript-api-overview
     */
    Drupal.behaviors.Global = {
        attach: (context) => {
            document.querySelectorAll(".system-alert").forEach((message) => {
                message.querySelector(".button--close").addEventListener(
                    "click",
                    () => message.classList.toggle("sr-only")
                );
            });
        }
    };

})();
