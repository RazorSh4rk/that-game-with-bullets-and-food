const patterns = [
    [
        new Vertex(210, 10),
        new Vertex(210, 50),
        new Vertex(250, 10),
    ],
    [
        new Vertex(210, 10),
        new Vertex(210, 50),
        new Vertex(250, 10),
        new Vertex(210, 10),
        new Vertex(210, 50),
        new Vertex(250, 10)
    ]
]

function r(max) {
    return Math.floor(Math.random() * max)
}
function rNeg(max) {
    return Math.floor(Math.random() * max * 2) - max
}

function movePattern(pt){
    pt.forEach(e => {
        e.x += rNeg(5)
        e.y += r(10)
    })
}

function slidePattern(pt){
    pt.forEach(e => {
        e.x += rNeg(150)
    })
}