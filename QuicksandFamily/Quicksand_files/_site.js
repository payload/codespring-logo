$(document).ready(function() {
	
	autoFill($("#font_search"), "Find Fonts");
	
		$('.nicetable tr:even').addClass('alt');
});

function autoFill(id, v){
	// http://www.joesak.com/2008/11/19/a-jquery-function-to-auto-fill-input-fields-and-clear-them-on-click/
	$(id).css({ color: "#b2adad" }).attr({ value: v }).focus(function(){
		if($(this).val()==v){
			$(this).val("").css({ color: "#333" });
		}
	}).blur(function(){
		if($(this).val()==""){
			$(this).css({ color: "#b2adad" }).val(v);
		}
	});

}