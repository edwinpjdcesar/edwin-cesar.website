/*


    Edwin Patrick Cesar
    edwinpjdcesar@gmail.com
    edwincesar.com


*/

//  pretty colors
function colorChange() {
    var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    $('.heading').animate({ color: randomColor }, 2500);
    colorChange();
}

//  cool animations


function doAnimation(element_ID, animation) {
    $(element_ID).addClass(animation);
    var wait = window.setTimeout(function () {
        $(element_ID).removeClass(animation)
    }, 1300
    );
}

$(document).ready(function () {

    //  main
    $('a[href=#about]').addClass('animated bounce', 3000);
    $('a[href=#career]').addClass('animated bounce', 4000);
    $('a[href=#projects]').addClass('animated bounce', 5000);
    $('a[href=#contact]').addClass('animated bounce', 6000);

    $('.link')
        .on('mouseenter', function () {
            $(this).animate({ margin: -20, 'font-size': '+=20' }, 'fast');
        })
        .on('mouseleave', function(){
            $(this).animate({ margin: 0, 'font-size': '-=20' }, 'fast');
        })

    colorChange();

    //  contact

    
});



