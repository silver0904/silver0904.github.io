$(document).ready(function () {
    $("#video_window").hide();
	$(".popup").hide();
    $(".openpop").click(function (e) {
        e.preventDefault();
        $("iframe").attr("src", $(this).attr('href'));
		$("#video_window").fadeIn('slow')
        $(".popup").fadeIn('slow');
    });

    $(".close").click(function () {
        $(this).parent().fadeOut("slow");
		$("#video_window").fadeOut("slow");
    });
});


function setCookie(cname,cvalue) {
	var exdays = 1;
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	console.log(cname + "=" + cvalue);
	console.log(document.cookie);
};

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
	console.log("cookie =" + document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};

function setContent(title, date, vid_id, des){
	setCookie("title", title);
	setCookie("date", date);
	setCookie("vid_id", vid_id);
	setCookie("des", des);
}

function fillContent(){
	var title = getCookie("title");
	var date = getCookie("date");
	var vid_id = getCookie("vid_id");
	var des = getCookie("des");
	document.getElementById("Title").innerHTML = title;
	document.getElementById("Date").innerHTML = date;
	document.getElementById("Des").innerHTML = des;
	document.getElementById("aspect_ratio").innerHTML = "<iframe src='https://www.youtube.com/embed/"+vid_id+"'></iframe>";
			
		
};

function checkCookie() {
    var title = getCookie("title");
    if (title != "") {
        alert("Welcome again " + title);
    } else {
       title = prompt("Please enter your name:","");
       if (title != "" && title != null) {
           setCookie("title", title);
       }
    }
};

;(function($) {
    $.fn.textfill = function(options) {
        var fontSize = options.maxFontPixels;
        var ourText = $('span:visible:first', this);
        var maxHeight = $(this).height();
        var maxWidth = $(this).width();
        var textHeight;
        var textWidth;
        do {
            ourText.css('font-size', fontSize);
            textHeight = ourText.height();
            textWidth = ourText.width();
            fontSize = fontSize - 1;
        } while ((textHeight > maxHeight || textWidth > maxWidth) && fontSize > 3);
        return this;
    }
})(jQuery);

$(document).ready(function() {
    $('.text_title').textfill({ maxFontPixels: 36 });
});


