const td = new DrawJS('t')
let playing = false
td.resize(390, 100)
td.background('#111111')

td.circle(95, 50, 5, '#8ea604', false)
td.circle(295, 50, 5, '#bf3100', true)

td.ctx.font = '15px Arial'
td.ctx.fillStyle = 'white'
td.ctx.fillText('eat:', 82, 30)

td.ctx.font = '15px Arial'
td.ctx.fillStyle = 'white'
td.ctx.fillText('avoid:', 275, 30)

let tut = document.getElementById('tutorial')
let gameo = document.getElementById('gameover')
let mod = document.getElementById('modal')
let sc = document.getElementById('sc-p')
let butt = document.getElementById('butt')

gameo.style.display = 'none'

function start(){
    mod.style.display = 'none'
    go()
}

function ded(){
    butt.value = 'reset'
    mod.style.display = 'block'
    tut.style.display = 'none'
    gameo.style.display = 'block'
    sc.innerHTML = parseInt(score)
    butt.addEventListener('click', e => {
        document.location.reload()
    })
}