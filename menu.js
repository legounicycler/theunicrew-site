$(document).ready(function() {
	checkSize();
	$(window).resize(checkSize);
	$(".menu").click(function() {
		$(".social").toggle('fast');
		$(".navbuttons").toggle('fast');
	});
});

function checkSize(){
	if ($(window).width() < 700){
        $(".social").hide();
		$(".navbuttons").hide();
		$(".menu-row").show();
	} else {
		$(".menu-row").hide();
		$(".social").show();
		$(".navbuttons").show();
	}
}