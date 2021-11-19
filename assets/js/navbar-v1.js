/*! navbar-v1.js | Friendkit | © Css Ninja. 2019-2020 */
"use strict";

function initNavbar() {
    $(window).on("scroll", (function() {
        $(window).scrollTop() > 65 ? $(".options-nav").length ? ($(".navbar").addClass("no-shadow"), $(".options-nav").removeClass("no-shadow")) : ($(".navbar").removeClass("no-shadow"), $(".navbar.is-landing").length && $(".navbar").removeClass("no-background")) : $(".options-nav").length ? ($(".navbar").addClass("no-shadow"), $(".options-nav").addClass("no-shadow")) : ($(".navbar").addClass("no-shadow"), $(".navbar.is-landing").length && $(".navbar").addClass("no-background"))
    })), $("#clear-search").on("click", (function() {
        $(this).siblings("input").val("")
    }))
}
$(document).ready((function() {}));