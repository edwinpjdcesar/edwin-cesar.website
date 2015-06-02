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

    $('.contact-header').addClass('animated', 2000, function () {
        doAnimation(this, 'fadeInDown');
        $('.half1').addClass('animated', 1000, function () {
            doAnimation(this, 'rotateInUpLeft');
        })
        $('.half2').addClass('animated', 1000, function () {
            doAnimation(this, 'rotateInDownRight');
        })
        $('.back').addClass('animated', 2000, function () {
            doAnimation(this, 'fadeIn');
            $(this).click(function () {
                    var url = 'index.html';
                    document.location.href = url;
            })
        })
        $("#send").click(function () {
            if (!$("#contactForm").validate()) {
                return false;
            } else {
                $("#contactForm").submit()
                alert('Yay!');
            }
        })
    })

    //  validations
    $('#contactForm').validate({
        rules: {
            first: {
                required: true,
                minlength: 2,
                maxlength: 30,
            },
            last: {
                required: true,
                minlength: 2,
                maxlength: 30
            },
            business: {
                required: true,
                minlength: 2,
                maxlength: 45
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 25
            }
        },
        messages: {
            first: {
                required: "You're forgetting your first name, buddy..",
                minlength: jQuery.format("I gurantee your first name isn't one letter long."),
                maxlength: jQuery.format("$10 says your first name isn't that long!")
            },
            last: {
                required: "You didn't put your last name. You should probably put one down.",
                minlength: jQuery.format("Why do you think your last name is one letter?"),
                maxlength: jQuery.format("No. Your last name isn't that long.")
            },
            business: {
                required: "Sorry, you forgot the business you work for.",
                minlength: jQuery.format("My mom said never trust a company that's less than two letters in length."),
                maxlength: jQuery.format("Oh come on, why would your business name be that long?")
            },
            email: {
                required: "Why don't you have an e-mail? You're not going anywhere until you get with the times.",
                email: "Please, for love of everything internet.. Put a real e-mail address!"
            },
            message: {
                required: "Nothing creepier than someone trying to contact me with an empty message..",
                minlength: jQuery.format("C'mon, gimme something juicy enough to get the message across.")
            }
        },
        errorElement: 'div',
        errorLabelContainer: '.notify',
        highlight: function (element) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        },
        unhighlight: function (element) {
            $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
        }
    });
});