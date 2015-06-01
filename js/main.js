/*


    Edwin Patrick Cesar
    edwinpjdcesar@gmail.com
    edwincesar.com


*/

//  cool animations
function animate(element_ID, animation) {
    $(element_ID).addClass('animated ' + animation);
    var wait = window.setTimeout(function () {
        $(element_ID).removeClass('animated ' + animation)
    }, 1300
    );
}

$(document).ready(function () {
    
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

    $('.greeting').addClass('ghost', function () {
        $(this).fadeIn(3000, function () {
            $(about).addClass('animated', 1000, function () {
                bounceIt(this);
            })
            $(career).addClass('animated', 2000, function () {
                bounceIt(this);
            })
            $(projects).addClass('animated', 3000, function () {
                bounceIt(this);
            })
            $(contact).addClass('animated', 4000, function () {
                bounceIt(this);

                $('.link').hover(function () {
                    $(this).stop().animate({ margin: -20, 'font-size': '60' }, 'fast');
                }, function () {
                    $(this).stop().animate({ margin: 0, 'font-size': '36' }, 'fast');
                })
            })
        });
    });
        
    $(contact).click(function () {
        var url = 'contact.html';
        document.location.href = url;
    })

    translate();
    colorChange();

});



