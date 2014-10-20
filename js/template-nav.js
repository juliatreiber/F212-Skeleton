var source =
    '<div class="nav-container">' +
        '<ul>{{#each links}}<li><a href="{{url}}" class="page-link">{{label}}</a></li>{{/each}}</ul>' +
        '<div class="devices-list">' +
            '<ul>' +
                '<li class="emulator-toggle" data-width="full"><a href="#">Desktop</a></li>' +
                '<li><a href="#">Device Portrait</a>' +
                    '<ul>{{#each portrait}}<li class="emulator-toggle"><a href="#" data-width="{{size}}">{{device}}</a></li>{{/each}}</ul>' +
                '</li>' +
                '<li><a href="#">Device Landscape</a>' +
                    '<ul>{{#each landscape}}<li class="emulator-toggle"><a href="#" data-width="{{size}}">{{device}}</a></li>{{/each}}</ul>' +
                '</li>' +
            '</ul>' +
        '</div>' +
    '</div>' +
    '<div class="mobile-nav">' +
        '<div class="menu-button"><i class="fa fa-bars fa-2x"></i></div>' +
    '</div>';

var mobilesource = '<div class="mobile-menu-links">' +
    '<ul>{{#each links}}<li><a href="{{url}}" class="page-link">{{label}}</a></li>{{/each}}</ul>' +
    '</div>';

var navTemplate = Handlebars.compile(source);
var mobileNavTemplate = Handlebars.compile(mobilesource);

var data = {
    links: [
        { label: 'basic', url: 'basic.html' },
        { label: 'visuals', url: 'visuals.html' },
        { label: 'form', url: 'form.html' },
        { label: 'fancy stuff', url: 'fancy.html' },
        { label: 'headers and footers', url: 'headers-and-footers.html' },
        { label: 'documentation', url: 'documentation.html' }
    ],
    portrait: [
        { device: 'iPhone 4', size: '320' },
        { device: 'iPhone 5', size: '320' },
        { device: 'iPhone 6', size: '360' },
        { device: 'Galaxy S4', size: '360' },
        { device: 'HTC One', size: '360' },
        { device: 'Galaxy Nexus 5', size: '360' },
        { device: 'Galaxy Nexus 7', size: '600' },
        { device: 'iPad (all)', size: '768' },
        { device: 'Galaxy Note 3', size: '360' },
        { device: 'Galaxy Note 10', size: '800' }
    ],
    landscape: [
        { device: 'iPhone 4', size: '480' },
        { device: 'iPhone 5', size: '568' },
        { device: 'iPhone 6', size: '640' },
        { device: 'Galaxy S4', size: '640' },
        { device: 'HTC One', size: '640' },
        { device: 'Galaxy Nexus 5', size: '598' },
        { device: 'Galaxy Nexus 7', size: '961' },
        { device: 'iPad (all)', size: '1024' },
        { device: 'Galaxy Note 3', size: '640' },
        { device: 'Galaxy Note 10', size: '1280' }
    ]
};

var html = navTemplate(data);
var mobilehtml = mobileNavTemplate(data);

$('.page-nav').html(html);
$('body').prepend(mobilehtml);