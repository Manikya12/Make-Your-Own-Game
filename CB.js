class CB{
    constructor(x,y,image,scale){
       this.bricks=createSprite(x,y)
       this.bricks.addImage(image)
       this.bricks.scale=scale

    }

    display(){
        drawSprites()
    }
    
    
}