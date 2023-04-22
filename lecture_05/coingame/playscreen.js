function playgame(){
    let root = document.getElementById("root");
    root.innerHTML = "";
    let container = document.createElement("div");
    
    container.style.width = "100vw";
    container.style.height = "100vw";
    container.style.position = "relative";

    let count = 0;

    let score = document.createElement("h1");
    score.innerHTML = "Score: 0";

    score.style.position = "absolute";
    score.style.top = "10px";
    score.style.left = "10px";

    container.appendChild(score);

    
    setInterval(function(){
        let coin = document.createElement("img");
        alive = true;
        coin.src = "./coin.webp";
        coin.style.width = "50px";
        coin.style.height = "50px";
        coin.style.position = "absolute";
        coin.style.left = Math.random() * 100 + "vw";
        coin.style.top = Math.random() * 100 + "vh";
        container.appendChild(coin);

        coin.addEventListener("mouseover", () => {
            count += 10;
            score.innerHTML = "Score: " + count;
            container.removeChild(coin);
            alive = false;
            let audio = new Audio("./coin.wav");
            audio.play();
        });

        let randomTime = Math.random() * 2000;

        setTimeout(() => {
            if(alive){
                container.removeChild(coin);
            }
        }, randomTime);

    }, 100);


    setInterval(function(){
        let bomb = document.createElement("img");
        alive = true;
        bomb.src = "./bomb.png";
        bomb.style.width = "50px";
        bomb.style.height = "50px";
        bomb.style.position = "absolute";
        bomb.style.left = Math.random() * 100 + "vw";
        bomb.style.top = Math.random() * 100 + "vh";
        // container.appendChild(bomb);

        bomb.addEventListener("mouseover", () => {
            gameOverScreen(count);
        });

        let randomTime = Math.random() * 2000;

        setTimeout(() => {
            if(alive){
                container.removeChild(bomb);
            }
        }, randomTime);

    }, 100);
    root.appendChild(container);
}