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

    $('.half1').addClass('animated', function () {
        doAnimation(this, 'rotateInUpLeft');
    });
    $('.half2').addClass('animated', function () {
        doAnimation(this, 'rotateInDownRight');
    });
    //$(function () {
    //    $('.ex').on('hover', function () {
    //        animate('.ex', 'pulse');
    //        return false;
    //    });
    //});

    //  validations
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
        errorElement: 'div',
        errorLabelContainer: '.notify',
        highlight: function (element) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        },
        success: function (element) {
            $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
        }
    });
});