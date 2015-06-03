/*


    Edwin Patrick Cesar
    edwinpjdcesar@gmail.com
    edwincesar.com


*/

$(document).ready(function () {
    //  page links
    var about = $('a[href=#about]');
    var career = $('a[href=#career]');
    var projects = $('a[href=#projects]');
    var contact = $('a[href=#contact]');

    //  random language
    function translate() {
        var tran = $('.translation');
        var languages = ['Hello World', 'Bonjour Le Monde', 'Hola Mundo', 'Hallo Welt', 'привет мир', 'こんにちは世界', '你好世界', 'Alo Mondyal'],
        theLanguage = languages[Math.floor(Math.random() * languages.length)];
        $('.main-header').text(theLanguage);
        if (theLanguage != 'Hello World') { $('.translation').text('(Hello World)'); }
        else { $('.translation').hide(); }
    }

    //  pretty colors
    function colorChange() {
        var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        $('.main-header').animate({ color: randomColor }, 2500);
        colorChange();
    }

    //  cool animations
    function bounceIt(element_ID) {
        $(element_ID).addClass('bounce');
        var wait = window.setTimeout(function () {
            $(element_ID).removeClass('bounce')
        }, 1300
        );
    }

    $('.greeting').hide(0).delay(500).fadeIn(3000, function () {
        $(about).addClass('animated', 1000, function () {
            bounceIt(this);
            $(career).addClass('animated', 1000, function () {
                bounceIt(this);
                $(projects).addClass('animated', 1000, function () {
                    bounceIt(this);
                    $(contact).addClass('animated', 1000, function () {
                        bounceIt(this);
                        $('.link').hover(function () {
                            $(this).stop().animate({ margin: -20, 'font-size': '60' }, 'fast');
                        }, function () {
                            $(this).stop().animate({ margin: 0, 'font-size': '36' }, 'fast');
                        })
                        $(contact).click(function () {
                            var url = 'contact.html';
                            document.location.href = url;
                        })
                        $(career).click(function () {
                            var url = 'career.html';
                            document.location.href = url;
                        })
                        $(about).click(function () {
                            var url = 'about.html';
                            document.location.href = url;
                        })
                        $(projects).click(function () {
                            var url = 'projects.html';
                            document.location.href = url;
                        })
                    })
                })
            })
        })
    })

    translate();
    colorChange();
});



