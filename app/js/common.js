$(document).ready(function() {



			//открытие списков
 var brands = $('.option__list_brands .option__head');
 var length = $('.option__list_length .option__head');


 function openList(arrow, inputs, list) {
 	if(arrow.hasClass('arrow_open') 
 		&& inputs.hasClass('option__inputs_active')
 		&& list.hasClass('option__list_active')) {
 			arrow.removeClass('arrow_open');
 			inputs.removeClass('option__inputs_active');
 			list.removeClass('option__list_active');
 	} else {
			arrow.addClass('arrow_open');
 			inputs.addClass('option__inputs_active');
 			list.addClass('option__list_active');
 	}
};

brands.click(function () {
  	
   openList($('.option__list_brands .arrow'), 
 						$('.option__list_brands .option__inputs'), 
 						$('.option__list_brands'));

});

length.click(function () {
  	
   openList($('.option__list_length .arrow'), 
 						$('.option__list_length .option__inputs'), 
 						$('.option__list_length'));

});

			//END открытие списков

			//открытие меню навигации
$('.menu-open').click(function openMenu() {
	
		$('.menu_navigation').toggleClass('menu_navigation_transform');
		$('.menu-open').toggleClass('menu-open_transform');
	
});

			//END открытие меню навигации

var awrap = $('.option__form'),
            lastScrollTop = 0,
            wh = $(window).height();

        $(window).on('scroll', function () {
            var st = $(this).scrollTop(),
                ot = awrap.offset().top,
                h = awrap.height(),
                dh = $(document).height();
                // console.log($('footer').height())

            if (st < $('main').offset().top) {
                awrap.css({position : 'initial'});
            } else {
                if (h > wh && $('footer *').length > 0) {
                    if (st > lastScrollTop
                        && (st + wh) >= h + ot + $('main').offset().top
                    ) {
                        if ((st + wh) <= dh - $('footer').height()) {
                            awrap.css({position: 'fixed'});
                            awrap.css({bottom: 0});
                            awrap.css({top: 'initial'});
                        } else {
                            awrap.css({position : 'absolute'});
                            awrap.css({top : dh - h - $('footer').height()});
                            awrap.css({bottom: 'initial'});
                        }
                    } else if (st < lastScrollTop && st <= ot - $('main').offset().top) {
                        awrap.css({position: 'fixed'});
                        awrap.css({top: 20});
                        awrap.css({bottom: 'initial'});
                    } else if (awrap.css('position') !== 'absolute' && awrap.css('position') !== 'initial' && awrap.css('position') !== 'static') {
                        awrap.css({position : 'absolute'});
                        awrap.css({top : ot});
                        awrap.css({bottom: 'initial'});
                    }
                } else {
                    awrap.css({position: 'fixed'});
                    awrap.css({top: 0});
                    awrap.css({bottom: 'initial'});
                }
            }
            lastScrollTop = st;
        });

});