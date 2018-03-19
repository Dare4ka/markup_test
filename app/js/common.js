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



});