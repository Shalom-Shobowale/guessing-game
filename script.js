let rand = Math.trunc(Math.random()*20 + 1);  
// document.querySelector('.md2').text Content = rand
let score = 20;
let highScore = 0;
document.querySelector('.btn').addEventListener('click', function(){
     const guess = Number(document.querySelector('.input').value);
     if(!guess){
        document.querySelector('.massage').textContent = 'Enter a number ⛔';
     }else if(rand === guess){
        document.querySelector('.massage').textContent = '🎉 Correct Number';
        document.querySelector('body').style.backgroundColor = '#00ff00';
        document.querySelector('.md2').textContent = rand
        if(highScore < score){
            document.querySelector('.total').textContent = score;
        }
     }else if(guess > rand || guess < rand){
        if(score >= 1){
            document.querySelector('.massage').textContent = guess > rand ? 'Guess too high ☝️':'Guess too low 👇';
            score--;
            document.querySelector('.num').textContent = score
        }else{
            document.querySelector('.massage').textContent = 'You loss the game 🧨';
        } 
     }
     console.log(typeof guess) 
}); 

document.querySelector('button').addEventListener('click', function(){
    score = 20;
    rand = Math.trunc(Math.random()*20 + 1);
    document.querySelector('.massage').textContent = '...Start guessing';
    document.querySelector('.md2').textContent = '?'
    Number(document.querySelector('.input').value = '');
    document.querySelector('.num').textContent = score
    document.querySelector('body').style.backgroundColor='#000000';
})