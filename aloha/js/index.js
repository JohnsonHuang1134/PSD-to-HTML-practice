$("#result_list_header li").click(function () {
	$("#result_list_header li").removeClass("on");
	$(this).addClass("on");

})
$("#sort_Handler").click(function () {
	$("#result_list_header").toggleClass("active");
})
$("#filter_Handler").click(function () {
	$("#result_function_box").addClass("active");
})
$("#result_close").click(function () {
	$("#result_function_box").removeClass("active");
})


// 搜尋
$("#search_box_width1").click(function(){
	$("#search_box_width1").toggleClass('active');
	return false;
})
$("#search_box_width2").click(function(){
	$("#search_box_width2").toggleClass('active');
})
$("#search_box_width3").click(function(){
	$("#search_box_width3").toggleClass('active');
})

$("#active_item > li").click(function(){
	$("#active_item > li").removeClass("on");
	$(this).addClass("on");
})
// 搜尋
