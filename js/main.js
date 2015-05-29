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
    var thing = $(element_ID);
    $(document).ready(
        function () {
            thing.addClass('animated ' + animation);
        },
        function () {
            window.setTimeout(function () {
                thing.removeClass('animated ' + animation);
            }, 2000);
        });
}
/*
function doAnimation(element_ID, animation) {
    var thing = $(element_ID);
    var wait = window.setTimeout(function () {
        thing.addClass('animated ' + animation);
    }, 2000, function () {
        thing.removeClass('animated ' + animation);
    });
}
*/
$(document).ready(function () {
    colorChange();

    $(function () {
        $('a[href=#about]').doAnimation('bounce');
    });
    
    
    

    
});



