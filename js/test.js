$(document).ready( function(){
	console.log('ready');
	$('.object').on('click', function(){
		console.log('click on');
		$('.object').addClass('start');
	
	})
}
)