$(function() {
	const status=$("#status");
	let win;
	lose= ()=>{
		if(win!=true){
			$('div.boundary:not(:last)').addClass('error');
			status.text("You Lost! :(");
			win=false;
		}
	}
	won=()=>{
		if(win!=false){
			status.text("You Win! :)");
			win=true;
		}		
	}
	reset=()=>{
		win=null;	
		$('div.boundary').removeClass('error');
	}
	$("#start").on('click',()=>{
		reset();	
		status.text("Game Started");
		$("#maze div.boundary").on('mouseover',()=>lose());
		$("#maze").on('mouseleave',()=>lose());
		$("#end").on('mouseover',()=>won());	
	});
});