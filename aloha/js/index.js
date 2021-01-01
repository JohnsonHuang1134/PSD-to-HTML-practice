// home slider start
var slider_count = 0;
$("#slider_perv").click(function(){
	if(	slider_count == 0) return
	slider_count--
	$("#slider_box_item").css("transform","translateX(-"+slider_count*100+"%)");
})
$("#slider_next").click(function(){	
	if(	slider_count == 2) return
	slider_count++
	$("#slider_box_item").css("transform","translateX(-"+slider_count*100+"%)");
})
// home slider end

// search start
var search_state = false
$("#search_box_width .search_box_item").click(function(){
	$(this).toggleClass("active");
	if($(this).index() == 0){
		return false;
	}
})

$("#active_item li").click(function(){
	$("#active_item li").removeClass("on");
	$(this).addClass("on");
})



// search end
// memeber book start
$("#booking_box_menu li").click(function(){
	$("#booking_box_menu li").removeClass("on")
	$(this).addClass("on");
})
// memeber book end


// detail start
$("#detail_add .room_amount_num i").click(function(){
	$("#confirm").addClass("active");
})
$("#detail_cancel").click(function(){
	$("#confirm").removeClass("active");
})

// detail end









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



