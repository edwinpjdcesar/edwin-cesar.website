/*


    Edwin Patrick Cesar
    edwinpjdcesar@gmail.com
    edwincesar.com


*/

//  pretty colors
function colorChange() {
    var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    $('.main-header').animate({ color: randomColor }, 2500);
    colorChange();
}

//  cool animations
function animate(element_ID, animation) {
    $(element_ID).addClass('animated' + animation);
    var wait = window.setTimeout(function () {
        $(element_ID).removeClass('animated' + animation)
    }, 1300
    );
}

$(document).ready(function () {
    var about = $('a[href=#about]');
    var career = $('a[href=#career]');
    var projects = $('a[href=#projects]');
    var contact = $('a[href=#contact]');

    //  introduction
    $('.greeting').addClass('ghost', function () {
        $(this).fadeIn(3000, function () {
            $(about).addClass('animated bounce', 1000),
            $(career).addClass('animated bounce', 2000),
            $(projects).addClass('animated bounce', 3000),
            $(contact).addClass('animated bounce', 4000, function () {
                $('.link')
                    .on('mouseenter', function () {
                        $(this).animate({ margin: -20, 'font-size': '+=20' }, 'fast');
                    })
                    .on('mouseleave', function () {
                        $(this).animate({ margin: 0, 'font-size': '-=20' }, 'fast');
                    })
            })
        });
    });
        
    $('contact').click(function () {
        var url = 'contact.html';
        document.location.href = url;
    })

    //  contact
    $('.split-1').addClass('animated rotateInUpLeft', 1500);
    $('.split-2').addClass('animated rotateInDownRight', 1500);

    //$(function () {
    //    $('.ex').on('hover', function () {
    //        animate('.ex', 'pulse');
    //        return false;
    //    });
    //});

    $('#contactForm').validate({
        rules: {
            first: {
                minlength: 2,
                maxlength: 30,
                required: true
            },
            last: {
                minlength: 2,
                maxlength: 30,
                required: true
            },
            business: {
                minlength: 2,
                maxlength: 30,
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                minlength: 25,
                required: true
            }
        },
        highlight: function (element) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        },
        success: function (element) {
            $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
        }
    });
    


    //  all
    colorChange();

});



