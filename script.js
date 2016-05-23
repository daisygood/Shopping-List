var template = function(text){
		return '<li><input type="checkbox"><span>'+text+'</span><i class="glyphicon glyphicon-remove"></i></li>'
}
$(document).ready(function(){
	$('form').submit(function(){
		
		var text = $('#textbox').val();
		var html = template(text);
		if(text === ""){
			$('.error-message').text('Please add something');
		}else{
			$('.error-message').text('');
			$(html).appendTo('.list');
			$('#textbox').val('');
		}
		
		return false;
	})
	$(document).on('click','.glyphicon-remove',function(){
		$(this).parent('li').remove();
	})
	$(document).on('change','input[type=checkbox]',function(){
		if(this.checked){
			$(this).next().css('text-decoration','line-through');
		}else{
			$(this).next().css('text-decoration','none');
		};
	});


});