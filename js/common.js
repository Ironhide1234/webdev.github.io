$(function() {

    $("#minus-btn").click(function() {
        text_val = $('#participants-num').text();
        if (text_val > 0) {
            $('#participants-num').text(--text_val);
        }
    });

    $("#plus-btn").click(function() {
        text_val = $('#participants-num').text();
        if (text_val < 99) {
            $('#participants-num').text(++text_val);
        }
    });


    $("#minus-btn-mob").click(function() {
        text_val = $('#participants-num-mob').text();
        if (text_val > 0) {
            $('#participants-num-mob').text(--text_val);
        }
    });

    $("#plus-btn-mob").click(function() {
        text_val = $('#participants-num-mob').text();
        if (text_val < 99) {
            $('#participants-num-mob').text(++text_val);
        }
    });


    if ( $("body").width() > 768 ) {
        $('#reviews-slider').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            dots: true,
            prevArrow: '<i class="fa fa-angle-left" id="prev-arrow" aria-hidden="true"></i>',
            nextArrow: '<i class="fa fa-angle-right" id="next-arrow" aria-hidden="true"></i>',
        });
    } else {
        $('#reviews-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            prevArrow: '<i class="fa fa-angle-left" id="prev-arrow" aria-hidden="true"></i>',
            nextArrow: '<i class="fa fa-angle-right" id="next-arrow" aria-hidden="true"></i>',
        });
    }

    $('#unique-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<i class="fa fa-angle-left" id="prev-arrow" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-angle-right" id="next-arrow" aria-hidden="true"></i>',
    });


    $('#request-btn-mobile button, #popup-background, #popup-close').click(function() {
        if ( $('#mobile-nav').css('display') == 'none' ) {
            $('#popup-window').fadeToggle( "300", "linear" );
            $('#popup-background').fadeToggle( "300", "linear" );
        } else {
            if ($('#choose-subject-popup').css('display' == 'flex' )) {
                $('#choose-subject-popup').fadeToggle( "300", "linear" );
            }
            $('#mobile-nav').slideToggle( "300", "swing" );
            $('#popup-window').fadeToggle( "300", "linear" );
            $('#popup-background').fadeToggle( "300", "linear" );
        }
    });


    $('#burger-btn').click(function() {
        $('#mobile-nav').slideToggle( "300", "swing" );
    });

    $('#promo-btn, #promo-btn-mobile').click(function() {
        $('.request-promocode').fadeToggle( "300", "linear" );
    });


    $('#promo-btn').click(function() {
        $('#promo-popup').fadeIn( "300", "linear" );
    });

    $('#promo-close, #promo-dismiss').click(function() {
        $('#promo-popup').fadeOut( "300", "linear" );
    });


    $('#select-btn, #select-btn-mobile').click(function() {
        $('#select-btn i, #select-btn-mobile i').toggleClass('active');
        $('#choose-subject-popup').fadeToggle( "300", "linear" );
        $('#choose-subject-popup').css( "display", "flex" );
    });

    $('#choose-subject-popup ul li p').click(function() {
        $('#select-btn span').text($(this).text());
        $('#choose-subject-popup').fadeToggle( "300", "linear" );
        if ($('#select-btn span').height() > 20) {
            $('#select-btn span').css('font-size', '12px');
        } else {
            $('#select-btn span').css('font-size', '16px');
        }
    });
    

    $('#participants-number').mouseenter(function() {
        $('#quantity-num').fadeToggle( "300", "linear" );
    });

    $('#participants-number').mouseleave(function() {
        $('#quantity-num').fadeToggle( "300", "linear" );
    });

    $('#quantity-btn').click(function() {
        $('#quantity-num').fadeToggle( "300", "linear" );
    });

});