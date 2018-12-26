$.valHooks.textarea = {
  get: function( elem ) {
    return elem.value.replace( /\r?\n/g, "\r\n" );
  }
};

var currentTab = 0;

$('navbar a').on('click', function(){

})

// contact-modal
var isShown = false;
var isSent = false;

$('#contactLink').on('click', function() {
	$('#contactModal').removeClass('sent').removeClass('hidden').addClass('show');
	$('#contactModalsh').removeClass('sent').removeClass('hidden').addClass('show');
	isShown = true;
});

$('#contactModal .closeBtn').on('mousedown', function() {
	$('#contactModal').removeClass('sent').addClass('hidden').removeClass('show');
	$('#contactModalsh').removeClass('sent').addClass('hidden').removeClass('show');
	isShown = false;
});

$('body').on('keydown', function(e){
	if (e.which == 27 && isShown == true) {
		$('#contactModal').addClass('hidden').removeClass('show');
		$('#contactModalsh').addClass('hidden').removeClass('show');
		isShown = false;
	}
})

$('textarea#cmsg').on('keyup', function(){

	if ($.trim($('textarea#cmsg').val())){
		$('textarea#cmsg').css({
		'min-height': '100px'
		});
	} else {
		$('textarea#cmsg').css({
		'min-height': '30px'
		});
	}
})

// notification behaviour

$('.notification .closeBtn').on('click', function() {
	$(this).parent().fadeOut();
});
