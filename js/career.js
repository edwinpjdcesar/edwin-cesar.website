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

   // //  google maps
   //var map = new GMaps({
   //     div: '#uwfoxMap',
   //     width: '500px',
   //     height: '500px',
   //     lat: -12.043333,
   //     lng: -77.028333,
   //     zoom: 7,
   //     zoomControl: true,
   //     zoomControlOpt: {
   //         style: 'SMALL',
   //         position: 'TOP_LEFT'
   //     },
   //     panControl: false
   //});
   //google.maps.event.trigger(map, "resize");

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