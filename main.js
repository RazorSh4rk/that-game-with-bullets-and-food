
const d = new DrawJS('c')
let width = 400, height = 600
let player = new Player()
let pwups = [new PwUp(10, 10, 5)]
let fRun = 0
let currentPatterns = []
let score = 0

let bulletMoveTimer = 100

d.resize(width, height)
d.background('#111111')

function go() {
    let gameLoop = setInterval(function () {
        d.background('#111111')

        d.ctx.font = '15px Arial'
        d.ctx.fillStyle = "white"
        d.ctx.fillText("score: " + parseInt(score), 330, 15)

        d.circle(player.x, player.y,
            player.size, '#5eb1bf', true)

        //bullet collision check
        currentPatterns.forEach(cp => {
            cp.forEach(e => {
                d.circle(e.x, e.y, 5, '#bf3100', true)
                if (collidesBullet(player, e)) {
                    ded()
                    clearInterval(gameLoop)
                }
            })
        })

        //pwup collision check
        pwups.forEach(e => {
            d.circle(e.x, e.y, e.size, '#8ea604', false)
            if (collides(player, e)) {
                player.size += e.size / 5
                score += 1 / e.size / 5
                bulletMoveTimer -= 1
                
                let index = pwups.indexOf(e)
                if (index != -1)
                    pwups.splice(index, 1)
            }
        })

        // clean up
        patterns[0].forEach(e => {
            if (e.x > width || e.x < 0
                || e.y > height || e.y < 0) {
                let index = patterns[0].indexOf(e)
                if (index != -1)
                    patterns[0].splice(index, 1)
            }
        })

    }, 30 / 1000)

    setInterval(function () {
        pwups.push(new PwUp(r(width), r(height) + 200, r(5)))
    }, 500)
    setInterval(function () {
        pwups.splice(0, 1)
    }, 700)

    setInterval(function () {
        currentPatterns.forEach(cp => {
            movePattern(cp)
        })
    }, bulletMoveTimer)

    setInterval(function () {
        let index = r(patterns.length)
        currentPatterns.push(JSON.parse(JSON.stringify(patterns[index])))
        slidePattern(currentPatterns[currentPatterns.length - 1])
    }, 3000)

    d.canv.addEventListener('mousemove', function (e) {
        let x = e.layerX,
            y = e.layerY

        player.x = x
        player.y = y
    })
}