/*


    Edwin Patrick Cesar
    edwinpjdcesar@gmail.com
    edwincesar.com


*/

$(document).ready(function () {
    //  cool animations
    function doAnimation(element_ID, animation) {
        $(element_ID).addClass(animation);
        var wait = window.setTimeout(function () {
            $(element_ID).removeClass(animation)
        }, 1300
        );
    }

    function moveText(element_ID, direction) {
        $(element_ID).removeClass('txt-c');
        setTimeout(function () {
            $(element_ID).addClass('txt-l');
        }, 2000
        );
    }

    $('.petite-heading').addClass('animated', function () {
        doAnimation(this, 'rollIn');
        $('.sub-heading').addClass('animated', function () {
            doAnimation(this, 'flipInX');
            $('.right, .left').addClass('animated', function () {
                doAnimation('.right', 'slideInRight');
                doAnimation('.left', 'slideInLeft');
                $('.panel-title > a').hover(function () {
                    $(this).stop().animate({ 'color': '#6495ED', 'font-weight': '900' }, 'fast');
                }, function () {
                    $(this).stop().animate({ 'color':'black','font-weight': '100' }, 'fast');
                })
                $('.collapse').on('shown.bs.collapse', function () {
                    moveText('.panel-title');                
                });
            })
        })
    })
});