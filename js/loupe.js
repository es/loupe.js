(function () {
	$("#loupe, .loupe").draggable({
		/*helper:"clone",
		start: function () {
			$(this).css({opacity:0});
		},
		stop: function (){
			$(this).css({opacity:1});
		}
		revert:true,
		cursorAt:{left:1,top:75},*/
		drag: function () {
			var dragged=$(".ui-draggable-dragging");
			var top=-1*Number(dragged[0].style.top.substring(0,dragged[0].style.top.length-2))-10;
			var left=-1*Number(dragged[0].style.left.substring(0,dragged[0].style.left.length-2));
		
			dragged.css("background-position-x",left+"px");
			dragged.css("background-position-y",top+"px");
		},
	});
})();