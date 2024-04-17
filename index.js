let gameResultElement = document.getElementById("gameResult");
let randomNumberElement = Math.ceil(Math.random()*9);
function checkClub(){
    if (randomNumberElement === 0){
        gameResultElement.textContent = "Small";
        gameResultElement.style.paddingTop = "35px";
        gameResultElement.style.fontSize = "30px";
        gameResultElement.style.color = "purple"
        gameResultElement.style.textAlign = "center";
        
    }
    else if (randomNumberElement === 1){
        gameResultElement.textContent = "Small";
        gameResultElement.style.paddingTop = "35px";
        gameResultElement.style.fontSize = "30px";
        gameResultElement.style.color = "green";
        gameResultElement.style.textAlign = "center";
    }
    else if (randomNumberElement === 2){
        gameResultElement.textContent = "Small";
        gameResultElement.style.paddingTop = "35px";
        gameResultElement.style.fontSize = "30px";
        gameResultElement.style.color = "red";
        gameResultElement.style.textAlign = "center";
    }
    else if (randomNumberElement === 3){
        gameResultElement.textContent = "Small";
        gameResultElement.style.paddingTop = "35px";
        gameResultElement.style.fontSize = "30px";
        gameResultElement.style.color = "green";
        gameResultElement.style.textAlign = "center";
    }
    else if (randomNumberElement === 4){
        gameResultElement.textContent = "Small";
        gameResultElement.style.paddingTop = "35px";
        gameResultElement.style.fontSize = "30px";
        gameResultElement.style.color = "red";
        gameResultElement.style.textAlign = "center";
    }
    
    else if (randomNumberElement === 5){
        gameResultElement.textContent = "Big";
        gameResultElement.style.paddingTop = "35px";
        gameResultElement.style.fontSize = "30px";
        gameResultElement.style.color = "purple";
        gameResultElement.style.textAlign = "center";
    }
    else if (randomNumberElement === 6){
        gameResultElement.textContent = "Big";
        gameResultElement.style.paddingTop = "35px";
        gameResultElement.style.fontSize = "30px";
        gameResultElement.style.color = "red";
        gameResultElement.style.textAlign = "center";
    }
    else if (randomNumberElement === 7){
        gameResultElement.textContent = "Big";
        gameResultElement.style.paddingTop = "35px"
        gameResultElement.style.fontSize = "30px";
        gameResultElement.style.color = "green"
        gameResultElement.style.textAlign = "center";
    }
    else if (randomNumberElement === 8){
        gameResultElement.textContent = "Big";
        gameResultElement.style.paddingTop = "35px";
        gameResultElement.style.fontSize = "30px";
        gameResultElement.style.color = "red";
        gameResultElement.style.textAlign = "center";
    }
    else if (randomNumberElement === 9){
        gameResultElement.textContent = "Big";
        gameResultElement.style.paddingTop = "35px";
        gameResultElement.style.fontSize = "30px";
        gameResultElement.style.color = "green";
        gameResultElement.style.textAlign = "center";
    }
}
function checkReset(){
    gameResultElement.textContent = "";
}
checkReset();