function gameOverScreen(score) {
    let root = document.getElementById("root");
    root.innerHTML = "";
    
    let scoreHeading = document.createElement("h1");
    scoreHeading.innerHTML = "Score: " + score;
    root.appendChild(scoreHeading);

    let playAgainButton = document.createElement("button");
    playAgainButton.innerHTML = "Play Again";
    playAgainButton.addEventListener("click", function(){
        playgame();
    });

    root.appendChild(playAgainButton);

}