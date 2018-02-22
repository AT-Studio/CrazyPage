$(document).ready(function()	{
	$('#contOne, #contTwo, #contThree').mouseenter(function()	{
		$(this).fadeTo('slow',0.5);
	});
	$('#contOne, #contTwo, #contThree').mouseleave(function()	{
		$(this).fadeTo('slow',1);
	});
	$('#contOne, #contTwo, #contThree').click(function()	{
		$('#canvas').toggle();
		$('#score').toggle();
		$('#highScore').toggle();
	});
	$('#menu').click(function()	{
		$('#contOne,#contTwo,#contThree').toggle();
	});
	$('#menu').hover(function()	{
		$(this).fadeTo('fast',1); },
		function()	{
			$(this).fadeTo('fast',0);
	});
});
