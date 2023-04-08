const mario = document.querySelector('#mario') // id da imagem do mario vinda do html
const pipe = document.querySelector('#pipe') // id da imagem do cano vinda do html
const pointsScore = document.querySelector('#pontuacao') // id dao parágrafo da pontuação vinda do html
let pontuacao = 0

const jump = () => {
    mario.classList.add('jump')
    setTimeout( () => {
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')

    pontuacao++
    pointsScore.textContent=`score: ${pontuacao}`

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){ //condições quando o mario atinge o cano
        
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = 'img/marioDead.png'
        mario.style.width = '80px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)
    }
}, 10)

document.addEventListener('keydown', jump)