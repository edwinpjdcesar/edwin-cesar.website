/*


    Edwin Patrick Cesar
    edwinpjdcesar@gmail.com
    edwincesar.com


*/

$(document).ready(function () {
    mapIt = function () {
        //  google maps
        var uwfv;
        var fvtc;

        uwfv = new GMaps({
            div: '#uwfvMap',
            position: 'center',
            scrollwheel: false,
            lat: 44.231329,
            lng: -88.415909,
            zoom: 10
        });
        uwfv.addMarker({
            lat: 44.231329,
            lng: -88.415909,
            title: 'University of Wisconin: Fox Valley'
        });
        google.maps.event.trigger(uwfv, 'resize');

        fvtc = new GMaps({
            div: '#fvtcMap',
            position: 'center',
            scrollwheel: false,
            lat: 44.285734,
            lng: -88.458309,
            zoom: 10
        });
        fvtc.addMarker({
            lat: 44.285734,
            lng: -88.458309,
            title: 'Fox Valley Technical College'
        });
        google.maps.event.trigger(fvtc, 'resize');
    }
    
    
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

    //  cool animations
    function doAnimation(element_ID, animation) {
        $(element_ID).addClass(animation);
        var wait = window.setTimeout(function () {
            $(element_ID).removeClass(animation)
        }, 1300
        );
    }

    $('.petite-heading').addClass('animated', function () {
        doAnimation(this, 'rollIn');
        $('.sub-heading').addClass('animated', function () {
            doAnimation(this, 'flipInX');
            $('.right, .left').addClass('animated', function () {
                doAnimation('.right', 'slideInRight');
                doAnimation('.left', 'slideInLeft');
                
                $('.back').addClass('animated', 2000, function () {
                    doAnimation(this, 'fadeIn');
                    $(this).click(function () {
                        var url = 'index.html';
                        document.location.href = url;
                    })
                })
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
                $('#c3').on('shown.bs.collapse', function () {
                    mapIt();
                })
            })
        })
    })
});

//var uwfv;
//var fvtc;
//$(document).ready(function () {
//    uwfv = new GMaps({
//        div: '#uwfoxMap',
//        scrollwheel: false,
//        lat: 44.231329,
//        lng: -88.415909,
//        zoom: 16
//    });
//    uwfv.addMarker({
//        lat: 44.231329,
//        lng: -88.415909,
//        title: 'University of Wisconin: Fox Valley',
//        icon: 'https://cloud.githubusercontent.com/assets/10873565/9982400/bb39cc2a-5fa0-11e5-97f9-d4066ad8946d.jpg'
//    });
//});
//$(document).ready(function () {
//    fvtc = new GMaps({
//        div: '#fvtcMap',
//        scrollwheel: false,
//        lat: 44.285734,
//        lng: -88.458309,
//        zoom: 10
//    });
//    fvtc.addMarker({
//        lat: 44.285734,
//        lng: -88.458309,
//        title: 'Fox Valley Technical College',
//        icon: 'https://cloud.githubusercontent.com/assets/10873565/9982420/6bbc79ee-5fa1-11e5-8b76-35bac592e960.jpg'
//    });
//});