var $side = $('#side');
var $main = $('#main');
var $nav = $('#navBar');
var $ul = $('#ulList');
var $menu = $('#menu');
var $body = $('body')

enquire.register("screen and (max-width: 40.063em)", {
    match: function() {
        $side.removeClass('small-4 columns');
        $side.addClass('hiddenSide');
        $main.removeClass('small-8 columns');
        $main.addClass('large-12 columns');
        $ul.removeClass('nav');
        $ul.addClass('hiddenSide');
        $menu.removeClass('hiddenSide');
        $menu.addClass('left-off-canvas-toggle');
        $body.removeClass('source');
    },

    unmatch: function() {
        $side.removeClass('hiddenSide');
        $side.addClass('small-4 columns');
        $main.removeClass('large-12 columns');
        $main.addClass('small-8 columns');
        $ul.addClass('nav');
        $ul.removeClass('hiddenSide');
        $menu.removeClass('left-off-canvas-toggle');
        $menu.addClass('hiddenSide');
        $body.addClass('source');
    }
}).listen();