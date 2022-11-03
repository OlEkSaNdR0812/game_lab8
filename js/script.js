function ready(){
	var wrapper=document.getElementById("wrapper");
	var sideUser=document.createElement("div");
	var sideGenerate=document.createElement("div");
	var sidePC=document.createElement("div");
	var inputUserName=document.getElementById("user_name");
	var userName=inputUserName.value;
	
	wrapper.innerHTML="";
	wrapper.appendChild(sideUser);
	wrapper.appendChild(sideGenerate);
	wrapper.appendChild(sidePC);
	createSide(sideUser,userName,"user");
	createSide(sidePC,"PC","pc");
	var buttonGenerate=document.createElement("button");
	wrapper.style.flexDirection="row";
	sideUser.className="side";
	sidePC.className="side";
	sideGenerate.className="side";
	sideGenerate.id="generate_side";
	buttonGenerate.innerText="ГЕНЕРУМО";
	sideGenerate.appendChild(buttonGenerate);
	buttonGenerate.addEventListener("click",game)
}
function createSide(side,name,id){
	var label=document.createElement("label");
	var box=document.createElement("div");
	var number =document.createElement("div");
	var Text =document.createElement("p");
	var textBox=document.createElement("p");
	side.appendChild(label);
	side.appendChild(number);
	side.appendChild(box);
	number.appendChild(Text);
	box.appendChild(textBox);
	label.className="labels";
	box.className="box";
	number.className="randomNumber";
	number.id="idLabel";
	Text.id="p"+id;
	textBox.id="box"+id;
	Text.innerText="0";
	textBox.innerText="0";
	label.innerText=name;
}
function game(){
	var userNumber=document.getElementById("puser");
	var pcNumber=document.getElementById("ppc");
	var userBox=document.getElementById("boxuser");
	var pcBox=document.getElementById("boxpc");
	
	var numUserBox=Number(userBox.innerText);
	var numPCBox=Number(pcBox.innerText);
	var userNum=Math.floor(Math.random()*20);
	var pcNum=Math.floor(Math.random()*20);
	
	userNumber.innerText=userNum;
	pcNumber.innerText=pcNum;
	if(userNum>pcNum){
		numUserBox++
	}else if(userNum<pcNum){
		numPCBox++
	}
	
	
	if(numPCBox==3){
		alert("Ви програли,з вашої карти списано 100 грн");
		clear(userNumber,pcNumber,userBox,pcBox);
		return
	}else if(numUserBox==3){
		alert("Ви виграли!!! Відразу видно везунчика");
		clear(userNumber,pcNumber,userBox,pcBox);
		return
	}
	userBox.innerText=String(numUserBox);
	pcBox.innerText=String(numPCBox);
}
function clear(userNumber, pcNumber, userBox, pcBox){
	userNumber.innerText=0;
	pcNumber.innerText=0;
	userBox.innerText=0;
	pcBox.innerText=0;
}