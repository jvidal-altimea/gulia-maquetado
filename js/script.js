$(document).ready(function() {

	$('#guliacd').accordion({
		oneOpenedItem : true
	}); 

	//Control Clics
	$('.controles').delegate('a.secone','click',function(e){
		$(".controles a.seccion1").removeClass('active');
		$(".ancla-area.col1").click();
	});
	$('.controles').delegate('a.sectwo','click',function(e){
		$(".controles a.seccion1").removeClass('active');
		$(".ancla-area.col2").click();
	});
	$('.controles').delegate('a.sectree','click',function(e){
		$(".controles a.seccion1").removeClass('active');
		$(".ancla-area.col3").click();
	});
	//Buton plus
	$(".sc1 .mroption .button").click(function() {
		$(this).toggleClass("active");
		$(".ancla-area.col1").click();
	});
	$(".sc2 .mroption .button").click(function() {
		$(this).toggleClass("active");
		$(".ancla-area.col2").click();
	});
	$(".sc3 .mroption .button").click(function() {
		$(this).toggleClass("active");
		$(".ancla-area.col3").click();
	});
	//Anclas dinamicas

	//Ancla 1
	$(".ancla-area.col1").click(function(){
		if( $("li.sc1.st-open").length < 1 ){
			$(".sc1 .mroption .button").removeClass('active');
			$(".controles a.seccion1").removeClass('active secone');
		}
		if( $("li.sc1.st-open").length > 0 ){
			$(".sc1 .mroption .button").addClass('active');
			$(".controles a.seccion1").addClass('active secone');
			$(".controles a.seccion2, .controles a.seccion3").removeClass('active');
			$(".controles a.seccion1").removeClass('sectree');
			$(".controles a.seccion1").removeClass('sectwo');
		}
	});

	//Ancla 2
	$(".controles a.seccion2").click(function(){
		$(".controles a.seccion2").removeClass('active');
		$(".ancla-area.col2").click();
		$(".ancla-area.col1").click();
	});
	$(".ancla-area.col2").click(function(){
		if( $("li.sc2.st-open").length < 1 ){
			$(".sc2 .mroption .button").removeClass('active');
			$(".controles a.seccion2").removeClass('active');
			$(".controles a.seccion1").removeClass('active sectwo');
		}
		if( $("li.sc2.st-open").length > 0 ){
			$(".sc2 .mroption .button").addClass('active');
			$(".controles a.seccion2").addClass('active');
			$(".controles a.seccion1").addClass('active sectwo');
			$(".controles a.seccion1").removeClass('secone');
			$(".controles a.seccion1").removeClass('sectree');
			$(".controles a.seccion3").removeClass('active');
		}
	});

	//Ancla 3
	$(".controles a.seccion3").click(function(){
		$(".controles a.seccion3").removeClass('active');
		$(".ancla-area.col3").click();
		$(".ancla-area.col2").click();
	});
	$(".ancla-area.col3").click(function(){
		if( $("li.sc3.st-open").length < 1 ){
			$(".sc3 .mroption .button").removeClass('active');
			$(".controles a.seccion3").removeClass('active');
			$(".controles a.seccion2").removeClass('active');
			$(".controles a.seccion1").removeClass('active sectree');

			$('audio,video').each(function(){ this.pause(); });
		}
		if( $("li.sc3.st-open").length > 0 ){
			$(".sc3 .mroption .button").addClass('active');
			$(".controles a.seccion3").addClass('active');
			$(".controles a.seccion1").addClass('active sectree');
			$(".controles a.seccion1").removeClass('secone');
			$(".controles a.seccion1").removeClass('sectwo');
			$(".controles a.seccion2").removeClass('active');
		}
	});

	//Carrusel Seccion 2
	var slider = $('.carrusel').bxSlider({
		nextSelector: '#sld-next', nextText: '',
		prevSelector: '#sld-prev', prevText: '',
		infiniteLoop: false, hideControlOnEnd: true,
		mode: 'fade'
	});
	$('.reloadcr').click(function(e){
		e.preventDefault();
		slider.reloadSlider();
	});
});