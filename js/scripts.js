var $window = $(window);
var $body = $('body');
var $container = $('.container');

$(document).ready(function() {

    "use strict";

    $('.devices-list').on('click', 'a', function(e) { configureDeviceIframe(e); });

    if ($('[id^="parallaxSlice"]').length) { launchParallax(); }

    $body.on('click', 'img.lightboxthumbnail', function(e) { getFullSizeImageForLightbox(e); });

    $window.resize( function() {
        if ($('.overlay').length) {
            $window.resize(sizeOverlay());
        }
    });

    if ($('#richTextarea').length) { launchTinyMCE(); }

    if ($('#social-stream').length) { launchSocialStream(); }

    if ($('#masonry').length) { launchIsotope(); }

    if ($('#bxslider').length) { launchBXSlider(); }

    setActive();

    $body.on('click', '#submit-search', function() { mockupSearch(); });

    $('.mobile-nav').on('click', 'i.fa-bars', function() { showOrHideMobileNavigation(); });

});


function getCurrentURL() {
    return window.location.pathname;
}


function configureDeviceIframe(e) {
    var location = getCurrentURL();
    var locationheight = $body.height();
    var $target = $(e.target);
    var width = $target.attr('data-width');
    var $iframe = $('#device-frame');
    // Handle desktop instance, or nothing
    if (width == 'full' || !width) {
        $container.css('width', $window.width());
        $iframe.hide();
        $container.show();
    }
    // Handle device emulator
    else {
        $iframe.show();
        $container.hide();
        $iframe.attr("src", location);
        $iframe.width(width);
        $iframe.height(locationheight);
        $body.css('background-color', '#eeeeee');
    }
}


// Active set for nav
function setActive() {
    var location = getCurrentURL().split('/')[3];
    var anchor = $('.page-link');
    for (var i = 0; i < anchor.length; i++) {
        var index = $(anchor[i]);
        if (index.attr('href') == location) {
            index.addClass('active');
        }
        else {
            index.removeClass('active');
        }
    }
}


// Parallax

function launchParallax() {
    $window.stellar({
        horizontalScrolling: false,
        responsive: true
    });
}



function getFullSizeImageForLightbox(e) {
    e.preventDefault();
    $target = $(e.target);
    var fullSizeImage = $target.attr('src').replace('_thumb', '');
    var caption = $target.attr('data-caption');
    launchLightbox(fullSizeImage, caption);
}

function launchLightbox(img, caption) {
    var lightBoxHTML = '<div class="lightbox">' +
            '<div class="lightbox-header">' +
                '<span>' + caption + '</span>' +
                '<div class="close-lightbox"><i class="fa fa-times"></i></div>' +
            '</div>' +
            '<div class="lightbox-image-container">' +
                '<img src="' + img + '" />' +
            '</div>' +
        '</div>';
    var overlay = $('<div class="overlay"></div>');

    $body.append(overlay);
    $body.append(lightBoxHTML).hide().fadeIn('fast');
    sizeOverlay();
    bindLightboxEvents();
}

function bindLightboxEvents() {
    $('.lightbox').on('click', 'i', function() { removeLightbox(); });
    $body.on('click', '.overlay', function() { removeLightbox(); });
}

function sizeOverlay() {
    $('.overlay').height($window.height()).width($window.width());
}

function removeLightbox() {
    $('.overlay').fadeOut('fast', function() { $(this).remove(); });
    $('.lightbox').fadeOut('fast', function() { $(this).remove(); });
}


// Tiny MCE
function launchTinyMCE() {
    tinymce.init({
        selector: "#richTextarea",
        toolbar: "insertfile undo redo bold italic alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image"
    });
}


// Social Stream

function launchSocialStream() {
    $('#social-stream').dcSocialStream({
        feeds: {
            facebook: {
                id: '97120413578'
            },
            vimeo: {
                id: 'integergroup'
            },
            youtube: {
                id: 'integergroup'
            }
        },
        rotate: {
            delay: 0
        },
        control: false,
        filter: true,
        wall: true,
        cache: false,
        max: 'limit',
        limit: 3,
        iconPath: 'images/dcsns-dark/',
        imagePath: 'images/dcsns-dark/',
        external: true
    });
}


// Isotope
function launchIsotope() {
    $('.isotope').isotope({
        itemSelector: '.item'
    });
}


// BX Slider
function launchBXSlider() {
    $('#bxslider').bxSlider({
        mode: 'horizontal',
        speed: 2000
    });
}


// Search Mockup

function mockupSearch() {
    var inputText = $('#searcharea').val() != '' ? $('#searcharea').val() : 'nothing';
    var result = 'You searched for ' + inputText;
    $('.search-results').html(result);
}


// Mobile navigation
function showOrHideMobileNavigation() {
    if ($('.mobile-menu-links').hasClass('show')) {
        hide($('.mobile-menu-links'));
    }
    else {
        show($('.mobile-menu-links'));
    }
}


// Helper methods

function hide($element) {
    $element.css('display', 'none');
    $element.removeClass('show');
    $element.css('visibility', 'hidden');
    return $element;
}

function show($element) {
    $element.css('display', 'block');
    $element.addClass('show');
    $element.css('visibility', 'visible');
    return $element;
}