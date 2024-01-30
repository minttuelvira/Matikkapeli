'use strict'


addEventListener("DOMContentLoaded", () => {
    randomizeNumbers()
})

let rand_num1 = 0
let rand_num2 = 0
let oikein = 0
let vaarin = 0

const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * max) + min;
}

const randomizeNumbers = () => {
    rand_num1 = getRandomIntNumberInRange(1,10)
    rand_num2 = getRandomIntNumberInRange(1,10)
    document.querySelector('#num1').innerHTML = rand_num1
    document.querySelector('#num2').innerHTML = rand_num2
}



document.querySelector('button').addEventListener('click', () => {
    const answer = Number(document.querySelector('input').value)
    const correctAnswer = rand_num1 + rand_num2

    if (answer === correctAnswer) {
        alert('Oikein!')
        oikein++
    } else {
        alert('Väärin!')  
        vaarin++
    }

    document.getElementById('oikein').innerHTML = oikein
    document.getElementById('vaarin').innerHTML = vaarin


    randomizeNumbers()
    document.querySelector('input').value=''
}) 