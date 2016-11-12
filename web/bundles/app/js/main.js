$(document).ready(function () {

    /*$notificationButton = $('<button>').attr('id', 'notify');
     $('#notifications').append($notificationButton);*/

    // notify button task 3
    $('body').on('click', '#notify', function () {
        randomId = 'rewrwe21';
        $randomElement = $('<div>').attr('id', randomId).text('test notification').hide();
        $('#messages').append($randomElement);
        $randomElement.fadeIn('slow').fadeOut('slow');
        $randomElement.delay(1000).queue(function () {
            $(this).remove();
        });
    });


    //mobile menu task 4
    $('body').on('click', '.js-button-mobile-menu', function () {
        $('.main-nav').toggleClass('mobile-active');

    });


    // adding product to card task 5

    $('.js-basket-value').text(localStorage.getItem('testObject'));

    $('body').on('click', '#addtocart', function () {
        var basket = parseInt($('.js-basket-value').text());
        basket += 1;
        $('.js-basket-value').text(basket);
        localStorage.setItem('testObject', basket);

    });

    $('body').on('click', '.dropdown__button', function () {
        $(this).toggleClass('dropdown__button--open');
    });


    // form validation task 6a
    $('.input__field').on('keyup blur', function () {

        var formValid = false;
        var firstNotValid = false;
        $('.input__field').each(function () {
            if ($(this)[0].validity.valid && firstNotValid === false) {
                formValid = true;
            }
            else {
                firstNotValid = true;
                formValid = false;
            }
        });

        if (formValid) {
            $('.js-checkout-button').prop('disabled', false).removeClass('button--not-valid');
        } else {
            if (!$('.js-checkout-button').hasClass('button--not-valid')) {
                $(this).prop('disabled', 'disabled').addClass('button--not-valid');
            }
        }
    });


});


// sticky menu task 2
$(window).scroll(function () {
    var menuContainer = $('.js-sticky-menu-container');
    var menu = $('.js-sticky-menu');

    var menuOffset = menuContainer.offset().top;
    var topDistance = $(window).scrollTop();

    if (menuOffset < topDistance) {

        menu.addClass('is-sticky');
        $('.content').css('padding-top', menu.outerHeight());
    }
    else {

        menu.removeClass('is-sticky');
        $('.content').css('padding-top', '0px');
    }
});

