var colorList=[];
var n=6;
document.querySelector("#easy").addEventListener("click",function(){
	this.classList.add("selected");
	n=3;
	document.querySelector("#hard").classList.remove("selected");
	colorList=getColor(3);
	answer=Math.floor(Math.random()*3);
	display.textContent=colorList[answer];
	document.querySelector("h1").style.backgroundColor="steelblue";
	for(var i=n;i<gridList.length;i++){
		gridList[i].style.display="none";
	}
	for(var i=0;i<n;i++){
		gridList[i].style.backgroundColor=colorList[i];
	}
	reset.textContent="New Colors";
	message.textContent="";
});
document.querySelector("#hard").addEventListener("click",function(){
	this.classList.add("selected");
	document.querySelector("#easy").classList.remove("selected");

	for(var i=3;i<gridList.length;i++){
		gridList[i].style.display="block";
	}
	n=6;
	resetFunc();
});
var gridList=document.querySelectorAll(".box");
var answer=Math.floor(Math.random()*n);
colorList=getColor(n);
var display=document.querySelector("#display");
var message=document.querySelector("#status");
var reset=document.querySelector("button");
reset.addEventListener("click",resetFunc);
display.textContent=colorList[answer];
for(var i=0;i<n;i++){
	gridList[i].style.backgroundColor=colorList[i];
	gridList[i].addEventListener("click",function(){
		if(this.style.backgroundColor==colorList[answer]){
			for(var i=0;i<n;i++){
				gridList[i].style.backgroundColor=colorList[answer];
				message.textContent="Correct!!!";
				reset.textContent="Play Again";
				document.querySelector("h1").style.backgroundColor=colorList[answer];
			}
		}
		else{
			this.style.backgroundColor="#232323";
			message.textContent="Try Again";
		}
	});
}


function resetFunc(){
	colorList=getColor(n);
	answer=Math.floor(Math.random()*n);
	display.textContent=colorList[answer];
	document.querySelector("h1").style.backgroundColor="steelblue";
	
	for(var i=0;i<n;i++){
		gridList[i].style.backgroundColor=colorList[i];
	}
	for(var i=n;i<gridList.length;i++){
		gridList[i].style.backgroundColor="#232323";
	}
	reset.textContent="New Colors";
	message.textContent="";
}

function getColor(t) {
	var colors=[];
	for(var i=0;i<t;i++){
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		colors[i]=("rgb("+r+", "+g+", "+b+")");
	}
	return colors;
}