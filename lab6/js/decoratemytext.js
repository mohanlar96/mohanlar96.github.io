window.onload=function(){

	alert("Hello world"); //modify
	let textArea=document.getElementById("text");
	var size = parseInt(getComputedStyle(textArea).fontSize);	

	document.getElementsByTagName("button")[0].onclick=function(){
		
		setInterval(function(){		
		 size=size+2; 		
		 textArea.style.fontSize=size+"pt";
		},500);		
	}
	var checked =0;
	document.getElementsByName("bling")[0].onchange=function(){

		// alert("Hello World");
		if(checked==0){
			document.getElementById("text").style.fontWeight="bold";
			document.getElementById("text").style.color="green";
			document.getElementById("text").style.textDecoration="underline";	
			checked=1;
		}else{
			document.getElementById("text").style.fontWeight="";
			document.getElementById("text").style.color="";
			checked=0;
			document.getElementById("text").style.textDecoration="";	

		}
		document.getElementsByTagName("body")[0].style.backgroundImage='url("img/background.jpg")';

		



	}



}