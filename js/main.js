/*


    Edwin Patrick Cesar
    edwinpjdcesar@gmail.com
    edwincesar.com


*/

$(document).ready(function () {
    //  page links
    /*
    var about = $('a[href=#about]');
    var career = $('a[href=#career]');
    var projects = $('a[href=#projects]');
    var contact = $('a[href=#contact]');
    */

    //  random language
    function translate() {
        var tran = $('.translation');
        var languages = ['Hello World', 'Bonjour Le Monde', 'Hola Mundo', 'Hallo Welt', 'привет мир', 'こんにちは世界', '你好世界', 'Alo Mondyal'],
        theLanguage = languages[Math.floor(Math.random() * languages.length)];
        $('.main-header').text(theLanguage);

        //  translate
        if (theLanguage != 'Hello World') {
            $('.translate').click(200, function () {
                $('.main-header').text('Hello World');
            })
        }
        else { $('.translate').hide(); }
    }

    //  pretty colors
    function colorChange() {
        var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        $('.main-header').animate({ color: randomColor }, 2500);
        colorChange();
    }

    //  cool animations
    function bounceIt(element_ID, animation) {
        $(element_ID).addClass(animation);
        var wait = window.setTimeout(function () {
            $(element_ID).removeClass(animation)
        }, 1300
        );
    }
    
    $('.greeting').hide(0).delay(500).fadeIn(500, function () {
        $(about).addClass('animated', 200, function () {
            bounceIt(this,'fadeInLeft');
            $(career).addClass('animated', 200, function () {
                bounceIt(this,'fadeInUp');
                $(projects).addClass('animated', 200, function () {
                    bounceIt(this,'fadeInDown');
                    $(contact).addClass('animated', 200, function () {
                        bounceIt(this, 'fadeInRight');
                        $('.link').click(function(e){
                            e.preventDefault(); 
                        });
                        
                        $('.link').hover(function() {
                            var t = $(this);
                            t.data('text', t.text());
                            t.text("Coming Soon!");
                        }, function() {
                            var t = $(this);
                            t.text(t.data('text'));
                        });
                        
                        /*$(contact).click(function () {
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
                        })*/
                    })
                })
            })
        })
    })

    translate();
    colorChange();
});



