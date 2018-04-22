class Player{
    constructor(){
        this.x = 200
        this.y = 550
        this.center = new Vertex(200, 550)
        this.size = 2
    }
    grow(e){
        this.size += e
    }
}
class PwUp{
    constructor(x, y, size){
        this.x = x
        this.y = y
        this.size = size
    }
}

function collides(s0, s1){
    let a = Math.pow((s1.x - s0.x), 2) + Math.pow((s0.y - s1.y), 2)
    let b = Math.pow((s0.size + s1.size), 2)
    
    return a <= b
}

function collidesBullet(s0, s1){
    let a = Math.pow((s1.x - s0.x), 2) + Math.pow((s0.y - s1.y), 2)
    let b = Math.pow((s0.size + 5), 2)
    
    return a <= b
}