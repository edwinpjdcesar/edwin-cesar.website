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
                    $(this).stop().animate({ 'color':'black','font-weight': '400' }, 'fast');
                })
                $('#c2').on('show.bs.collapse', function () {
                    $('#s1').animate({ width: '100%' }, 10);
                    $('#s2').animate({ width: '80%' }, 10);
                    $('#s3').animate({ width: '100%' }, 10);
                    $('#s4').animate({ width: '100%' }, 10);
                    $('#s5').animate({ width: '100%' }, 10);
                    $('#s6').animate({ width: '60%' }, 10);
                    $('#s7').animate({ width: '45%' }, 10);
                })
                $('#c2').on('hide.bs.collapse', function () {
                    $('#s1').animate({ width: '0%' });
                    $('#s2').animate({ width: '0%' });
                    $('#s3').animate({ width: '0%' });
                    $('#s4').animate({ width: '0%' });
                    $('#s5').animate({ width: '0%' });
                    $('#s6').animate({ width: '0%' });
                    $('#s7').animate({ width: '0%' });
                })
            })
        })
    })
});