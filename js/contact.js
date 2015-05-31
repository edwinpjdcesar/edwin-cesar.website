/*


    Edwin Patrick Cesar
    edwinpjdcesar@gmail.com
    edwincesar.com


*/

//  cool animations
function animate(element_ID, animation) {
    $(element_ID).addClass('animated' + animation);
    var wait = window.setTimeout(function () {
        $(element_ID).removeClass('animated' + animation)
    }, 1300
    );
}

$(document).ready(function () {

    //  transition
    $('.split-1').addClass('animated rotateInUpLeft', 1500);
    $('.split-2').addClass('animated rotateInDownRight', 1500);

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
        highlight: function (element) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        },
        success: function (element) {
            $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
        }
    });
});