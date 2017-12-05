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
        contact = $('a[href="#contact"]'),
        pressed = false,
        miscLinks = $(".links");

    //  Select a random language for header text.
    function sayHello() {
        $.ajax({
            type: 'GET',
            url: 'https://cdn.rawgit.com/edwinpjdcesar/edwin-cesar.website/gh-pages/assets/languages.json',
            dataType: 'json',
            async: false,
            success: function(languages) {
                var language = languages[Math.floor(Math.random() * languages.length)];

                if(language.string.length > 1) {
                    header.text(language.string);

                    if(language.country != 'English' && language.string != 'Hello World')
                        header.after('<span>"Hello World" in ' + language.country + '</span>');
                } else {
                    header.text('Hello World');
                }
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

    function showDialog(msg){
        var dialog = $('.dialog-body'),
            content = msg != "" && msg != null
                ? "Sorry, but the <b>" + msg + "</b> portion of this website is currently under construction."
                : "Sorry, but this website is currently under construction.";

        dialog.html(content);
        dialog.css({'top':0, 'opacity':1});

        setTimeout(function(){
            dialog.css({'top':'-10%', 'opacity':0});
            pressed = false;
        }, 2000);
    }

    $('.headliner').hide(0).delay(500).fadeIn(500, function() {
        about.runTransition('fadeInLeft', function() {
            career.runTransition('fadeInUp', function() {
                projects.runTransition('fadeInDown', function() {
                    contact.runTransition('fadeInRight', function() {
                        miscLinks.animate({'opacity': 1}, 3000);
                    });
                });
            });
        });
    });

    //  TODO: Remove once official site is published.
    $('a').click(function(e){
        var a = $(this);

        if(!a.data("link")) return;

        e.preventDefault();
        if(!pressed){
            showDialog(a.data("link"));
            pressed = true;
        } else {
            pressed = false;
        }
    });

    sayHello();
    changeColor();
});
