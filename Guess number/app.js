let min = 1, 
    max = 10, 
    answer = GetWinningNumber(min, max), 
    guessLeft = 3;

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.getElementById('guess-submit'),
      message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;
guessBtn.style.setProperty('--submitcolor', '#33C3F0');

game.addEventListener('mousedown', function(e)
{
    if(e.target.className === 'play-again')
    {
        window.location.reload();
    }
})


guessBtn.addEventListener('click', function(e)
{
    let guess = parseInt(guessInput.value);
    if(isNaN(guess) || guess < min || guess > max)
    {
        SetMessage(`Please enter a number between ${min} and ${max}`, 'red');
        guessInput.value = '';
    }
    else
    {
        if(guess === answer)
        {
            GameOver(true, `${guess} is correct, YOU WIN !!!`);
        }
        else
        {
            guessLeft--;
            if(guessLeft === 0)
            {
                GameOver(false, `Game Over. You lost. Correct number was ${answer}.`);
            }
            else
            {
                guessInput.value = '';
                SetMessage(`${guess} is incorrect. Guesses left : ${guessLeft}`, 'orange');
            }
        }
    }
    e.preventDefault();
})

function SetMessage(msg,color)
{
    message.style.color = color;
    guessInput.style.borderColor = color;
    message.textContent = msg;
    guessBtn.style.setProperty('--submitcolor', color);
}

function GameOver(won, msg)
{
    won == true ? color = 'green' : color =  'red';
    guessInput.disabled = true;
    guessInput.readonly = true;
    guessInput.style.cursor = 'no-drop';
    SetMessage(msg, color);
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

function GetWinningNumber(min, max)
{
    let answer =  Math.floor(Math.random() * (max - min + 1) + min);
    console.log(`Winning number is ${answer}`);
    return answer;
}