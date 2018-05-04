var second=0;
var minute=0;
var s = "";
var m = "";

function OnlineStayTime(){
	second++;
	if(second==60){
		second=0;
		minute++;
	}
	if(second < 10){
		s = "0" + second;
	}else{
		s = second;
	}

	if(minute < 10){
		m = "0" + minute;
	}else{
		m = minute;
	}

	document.getElementById('timebox').innerHTML = m +' : '+ s;
	setTimeout("OnlineStayTime();",1000);
}


