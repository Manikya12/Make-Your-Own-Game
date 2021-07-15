class Ground{
    constructor(x,y){
       this.ground=createSprite(x,y)
       this.image=loadImage("Ground.png")
       this.ground.addImage(this.image)
       this.ground.scale=0.5
    }

    display(){
        drawSprites()
    }
}