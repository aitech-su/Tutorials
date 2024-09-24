function RollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const DiceResult = document.getElementById("DiceResult");
    const DiceImages = document.getElementById("DiceImages");
    const values = [];
    const images = [];
    for(let i=0 ; i < numOfDice ; i++){
        let value = Math.floor(Math.random() * 6 ) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`);
    }

    DiceResult.textContent = `dice: ${values.join(', ')}`;
    DiceImages.innerHTML = images.join('');
}