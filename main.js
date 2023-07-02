const resultDisplay = document.querySelector('#result')
const choicesDisplay = document.querySelector('#choices')
const choices = ['rock', 'paper', 'scissors']

const handleClick = (e) => {
    //--------------user choice --------------  computer random choice ------------
    getResults(e.target.innerHTML, choices[Math.floor(Math.random()* choices.length)])
}

choices.forEach(choice => {
    //create a button for every choice
    const button = document.createElement('button')
    //assign the value of 'choices' to the button
    button.innerHTML = choice
    //listen for the click
    button.addEventListener('click', handleClick)
    //append the button as the choices display child
    choicesDisplay.appendChild(button)

})

const getResults = (player1, player2) => {
    switch (player1 + player2) {
        // player 1 win cases
      case 'scissorspaper':
      case 'rockscissors':
      case 'paperrock':
        resultDisplay.innerHTML = 'You chose ' + player1 + ' and the computer chose ' + player2 + ' , YOU WIN!'
        break
        //player2 win cases
      case 'paperscissors':
      case 'scissorsrock':
      case 'rockpaper':
        resultDisplay.innerHTML = 'You chose ' + player1 + ' and the computer chose ' + player2 + ' , YOU LOSE!'
        break
        //draw cases
      case 'scissorsscissors':
      case 'rockrock':
      case 'paperpaper':
        resultDisplay.innerHTML = 'You chose ' + player1 + ' and the computer chose ' + player2 + ' , ITS A DRAW!'
        break
    }
  }
