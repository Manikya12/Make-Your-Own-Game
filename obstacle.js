class Obstacle{
    constructor(x,y,image,scale){
       this.obstacle=createSprite(x,y)
       this.obstacle.addAnimation("value",image)
       this.obstacle.scale=scale

    }

    display(){
        drawSprites()
    }
}