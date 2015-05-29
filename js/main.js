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
    }, 1000, function () {
        $(element_ID).removeClass(animation)
    });
}

$(document).ready(function () {
    $('a[href=#about]').addClass('animated bounce', 3000);
    $('a[href=#career]').addClass('animated bounce', 4000);
    $('a[href=#projects]').addClass('animated bounce', 5000);
    $('a[href=#contact]').addClass('animated bounce', 6000);

    $('.link')
        .on('mouseenter', function () {
            $(this).animate({ 'font-size': '+=20' }, 'slow');
        })
        .on('mouseleave', function(){
            $(this).animate({ 'font-size': '-=20' }, 'slow');
        })
        
    

    colorChange();
    
    

    
});



