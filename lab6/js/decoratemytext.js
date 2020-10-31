window.onload=function(){

	alert("Hello world"); //modify

	document.getElementsByTagName("button")[0].onclick=function(){

		// alert("Hello world"); //modify


		setInterval(function(){
			let textArea=document.getElementById("text");

		const style = getComputedStyle(textArea);
		textArea.style.fontSize=(parseInt(style.fontSize)+2)+"pt";

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