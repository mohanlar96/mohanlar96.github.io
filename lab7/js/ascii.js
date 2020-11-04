onload=()=>{
	let currentAnniImage="";
	let frames,annimate,currentFrame;
	let frameIndex=0;
	let speed=500;

    id = (id)=>{
    	return document.getElementById(id);
    }
	$ = (id,event)=>{
		return document.getElementById(id).onclick=event;
	}
	changePicture=(pic)=>{
		currentAnniImage=ANIMATIONS[pic];
	}
	changeFrame=()=>{
		frames=currentAnniImage.split("=====");
		if(frameIndex<frames.length){ 
			currentFrame=frames[frameIndex];
			id("text-area").value=currentFrame;
			frameIndex++;
		}else{
			frameIndex=0;
			changeFrame();
		}	
	}
	resetAnimate=()=>{
		 clearInterval(annimate);
	     annimate=setInterval(changeFrame,speed);
	}
	startAnimate=()=>{		
	     annimate=setInterval(changeFrame,speed);	
	     id("stop").removeAttribute("disabled");
	}
	stopAnimate=()=>{
		 clearInterval(annimate);
		 id("stop").setAttribute("disabled","disabled");
	}
	changeSize=(size)=>{
		id("text-area").style.fontSize=size;
	}
	toggleTurbo=()=>{		
		speed=(speed==500)?200:500;
		resetAnimate();
    }

	$("start",()=>{startAnimate()});
	$("stop",()=>{
		stopAnimate();
	});
	$("animation",()=>{
		changePicture(id("animation").value);
	});
	$("fontsize",()=>{
		changeSize(id("fontsize").value);
	});
	$("turbo",()=>{
		toggleTurbo();
	});

}