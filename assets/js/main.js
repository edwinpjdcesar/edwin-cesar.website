/*
    Edwin Patrick Cesar
    edwinpjdcesar@gmail.com
    edwincesar.com
*/

$.fn.runTransition = function(animation, cb) {
    var obj = this,
        action = 'animated ' + animation;
    obj.addClass(action, 200, function() {
        setTimeout(function() {
            obj.removeClass(animation);
        }, 1300);
        cb();
    });
};

$(function() {
    var header = $('.main-header'),
        about = $('a[href="#about"]'),
        career = $('a[href="#career"]'),
        projects = $('a[href="#projects"]'),
        contact = $('a[href="#contact"]');

    //  Select a random language for header text.
    function sayHello() {
        $.ajax({
            type: 'GET',
            url: '../assets/languages.json',
            dataType: 'json',
            async: false,
            success: function(langauges) {
                var language = JSON.parse(languages[Math.floor(Math.random() * languages.length)]);

                if(language.string.length < 1)
                    header.text('Hello World');
                else
                    header.text(language.string);
            }
        });
    }

    //  Continuously set page header to randomly generated color.
    function changeColor() {
        var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' +
                                   (Math.floor(Math.random() * 256)) + ',' +
                                   (Math.floor(Math.random() * 256)) + ')';
        header.animate({ color: randomColor }, 2500);
        changeColor();
    }

    $('.greeting').hide(0).delay(500).fadeIn(500, function() {
        about.runTransition('fadeInLeft', function() {
            career.runTransition('fadeInUp', function() {
                projects.runTransition('fadeInDown', function() {
                    contact.runTransition('fadeInRight', function() {
                        // TODO: Uncomment when pages are set up.
                        /*$('.link').click(function(e) {
                            e.preventDefault();
                        });
                        contact.click(function() {
                            document.location.href = 'contact.html';
                        });*/
                    });
                });
            });
        });
    });

    sayHello();
    changeColor();
});
