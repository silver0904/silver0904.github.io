   var width;
    window.onresize = window.onload = function() {
        width =  window.innerWidth;
		if (width <= 800){			
			document.getElementById("sidebar").style.display ="none";
			document.getElementById("showcase").style.width = "100%";
			var boxes = document.getElementsByClassName("floating_box");
			var sidebtn = document.getElementsByClassName("side_btn");
			for(var i=0; i<boxes.length; i++){			
				boxes[i].style.height ="180px";
			}
			for (var i=0; i<sidebtn.length; i++){
				sidebtn[i].style.display = "block";
			}
			
		}
		else{
			resetside();
			document.getElementById("showcase").style.width = "77.5%";
			var boxes = document.getElementsByClassName("floating_box");
			var sidebtn = document.getElementsByClassName("side_btn");			
			for(var i=0; i<boxes.length; i++){			
				boxes[i].style.height ="180px";
			}
			for (var i=0; i<sidebtn.length; i++){
				sidebtn[i].style.display= "none";
			}
		}
		
		if(width <= 600){
			var bar = document.getElementById("nav_bar");		
			var blocks = bar.getElementsByTagName("li");
			var menu = document.getElementsByClassName("menu_btn");
			for(var i=0; i<blocks.length; i++){
				blocks[i].style.display = "none";
			}
			for (var i=0; i<menu.length; i++){
				menu[i].style.display = "block";
			}
		}
		else{
			var bar = document.getElementById("nav_bar");		
			var blocks = bar.getElementsByTagName("li");
			var menu = document.getElementsByClassName("menu_btn");
			for(var i=0; i<blocks.length; i++){
				blocks[i].style.display = "inline-block";
			}
			for (var i=0; i<menu.length; i++){
				menu[i].style.display = "none";
			}
		}
		
		var fileName = location.href.split("/").slice(-1);
		if (fileName =="video.html"){
			
			var vboxes = document.getElementsByClassName("video_box");		
		
			if (width <= 800 && width >=600){			
			
			for(var i=0; i<boxes.length; i++){			
				vboxes[i].style.width ="40%";
			}
		}
		
		
		else if (width >800){
			var boxes = document.getElementsByClassName("video_box");			
			for(var i=0; i<boxes.length; i++){			
				vboxes[i].style.width ="35%";
			}
		}
			
		else{
			var boxes = document.getElementsByClassName("video_box");
			for(var i=0; i<boxes.length; i++){			
				vboxes[i].style.width ="90%";
			}
		}
	}
};
	
    $(window).scroll(function () {

		if ($(window).scrollTop() > 310) {
			$('#nav_bar').addClass('nav_bar_fixed');
		}
		if ($(window).scrollTop() < 311) {
			$('#nav_bar').removeClass('nav_bar_fixed');
		}
});
	
	function dropdown(){
		var blocks = document.getElementsByClassName("dropdown-content");
		if (blocks[0].style.display == "none"){
			for(var i=0; i<blocks.length; i++){
				blocks[i].style.display = "block";
			}
		}
		else{
			for(var i=0; i<blocks.length; i++){
				blocks[i].style.display = "none";
			}
		}
		
	};
	function openside(){
		var width =  window.innerWidth;
		var side = document.getElementById("sidebar");
		if (width <=800 && side.style.display =="none"){
			resetside();
			side.style.width= "60%";
			
		}
		else if (width >=800){
			resetside();
		}
		else{
			resetside();
			side.style.display ="none";
			side.style.transform = "translateX(100%)";
		}
	};
	
	function resetside(){
		var side = document.getElementById("sidebar");
		side.style.transform = "translateX(0)";
		side.style.display ="block";
		side.style.width= "22.5%";
	};
	