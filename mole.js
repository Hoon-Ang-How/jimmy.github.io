let currMoleTile;
let currPlantTile;
let currShellTile;
let score = 0;
let gameOver = false;

window.onload = function(){
	setGame();
	}	 

function setGame(){
	//set up the grid for the game board in HTML
	for (let i=0; i<9;i++){
		let tile = document.createElement("div");
		tile.id = i.toString(); //<div id="0-8"></div>
		tile.addEventListener("click",selectTile);
		document.getElementById("board").appendChild(tile);
	}
		
	setInterval(setMole,1400); //run this setmole function evy 1 sec
	setInterval(setPlant,1200);			
		
}

function getRandomTile(){
	/*math.random --> (0-1)*9 = (0-9 not able to reach 9)----->round down to (0-8)integers*/
	let num = Math.floor(Math.random()*9);
	return num.toString();
}

function setMole(){
	if (gameOver){
		return;
	}
	if (currMoleTile){
		currMoleTile.innerHTML = "";
	}	
	
	let mole = document.createElement("img");
	mole.src = "./greeny.png";
	
	let num = getRandomTile();
	if (currPlantTile && currPlantTile.id == num){
	return;
	}
	if (currShellTile && currShellTile.id == num){
		return;
	}
	currMoleTile = document.getElementById(num);
	currMoleTile.appendChild(mole);
}
	
function setPlant(){
	if (gameOver){
		return;
	}
	
	if (currPlantTile){
		currPlantTile.innerHTML = "";
	}
	
	let plant = document.createElement("img");
	plant.src = "./shell.png";
	
	let num = getRandomTile();
	if (currMoleTile && currMoleTile.id == num){
		return;
	}
	if (currShellTile && currShellTile.id == num){
		return;
	}
	currPlantTile = document.getElementById(num);
	currPlantTile.appendChild(plant);
}
	
function selectTile(){
	if (gameOver){
		return;
	}
	if (this == currMoleTile){
		score += 10;
		document.getElementById("score").innerText = score.toString();
		
		if (score >=70){
			setInterval(setShell,1500);	
		}
		
		if (score == 150){
			document.getElementById("score").innerText = "Thank you Mario: " + score.toString();
			document.getElementById("board").innerHTML = `<img src = "images/eyes.gif">`;
			document.querySelector('.js-song').innerHTML = `<audio autoplay=""src="images/Stage.mp3"></audio>`;
			gameOver = true;
			}	
	}
	
	else if (this == currPlantTile || this == currShellTile){
		document.getElementById("score").innerHTML = "GAME OVER: " + score.toString();
		document.getElementById("board").innerHTML = `<img src = "images/mama.gif">`;
		document.querySelector('.js-song').innerHTML = `<audio autoplay=""src="images/Die.mp3"></audio>`
		gameOver = true;
	}
	
}


function setShell(){
	if (gameOver){
		return;
	}
	
	if (currShellTile){
		currShellTile.innerHTML = "";
	}
	
	let shell = document.createElement("img");
	shell.src = "./thorn.png";
	
	let num = getRandomTile();
	if (currMoleTile && currMoleTile.id == num){
		return;
	}
	if (currPlantTile && currPlantTile.id == num){
	return;
	}
	currShellTile = document.getElementById(num);
	currShellTile.appendChild(shell);
}


