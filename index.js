/* The Dice Grid 

    1-1 1-2 1-3
    2-1 2-2 2-3
    3-1 3-2 3-3

*/


// Default face will be 5

let diceImg = document.createElement("img");
diceImg.id = "dice-shape";
diceImg.setAttribute("src", "./public/images/f5.png");

let diceContainer = document.getElementById("dice-img-container");
diceContainer.appendChild(diceImg);



let rollCount = 0;


function resultElements(diceNum){
    diceImg.setAttribute("src", `./public/images/f${diceNum}.png`);

    let resultDiv = document.createElement("div");
    resultDiv.id = "roll-result";
    document.getElementById("main-container").appendChild(resultDiv);

    // result img that will go inside the result div
    let resultImg = document.createElement("img");
    resultImg.classList.add("mx-2");
    resultImg.setAttribute("src", "./public/images/f"+diceNum+".png");
    resultImg.setAttribute("alt", "dice-face"+diceNum);

    // h2 result heading
    let resultHeading = document.createElement("h2");
    resultHeading.classList.add("mx-2");
    resultHeading.innerHTML = `Roll ${rollCount}: `;

    resultDiv.appendChild(resultHeading);
    resultDiv.appendChild(resultImg);

}

// Animating using DOM
document.getElementById("roll-button").addEventListener("click", function(){
    // const randNum = Math.floor(Math.random() * 6) +  1; // get the random number
    const randNum = Math.floor(Math.random() * 2) +  1;;
    rollCount++;

    document.getElementById("dice-shape").classList.add("dice-rotate");
    setTimeout(function(){
        document.getElementById("dice-shape").classList.remove("dice-rotate");
        resultElements(randNum);
    }, 2000);

});
