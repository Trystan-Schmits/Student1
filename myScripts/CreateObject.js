class CreateObject{
    constructor(SpriteSheet,SpriteScale,DrawScale,position,maxFrames,states){
        this.image = SpriteSheet;
        this.scale = DrawScale; // size of drawn image
        this.SpriteSize = SpriteScale; //size of each sprite
        this.position = position; //[x,y]
        this.frame = 0;
        this.maxFrames = maxFrames;
        this.maxState = states;
        console.log(this.scale, this.SpriteSize)
    }

    ReturnPosition(){
        return this.position;
    }

    ReturnScale(){
        return this.scale;
    }

    draw(ctx,scroll,state){
        this.frame = (this.frame++)%this.maxFrames; //increment frame by one, loop at max

        var s1 = state%this.maxState;
        var x = this.position[0]+ scroll[0];
        var y = this.position[1]+ scroll[1];
        //drawing function
        ctx.drawImage(this.image,this.frame*this.SpriteSize[0],s1*this.SpriteSize[1],this.SpriteSize[0],this.SpriteSize[1],x,y,this.scale[0],-1*this.scale[1]);
        ctx.drawImage(this.image,10,10)
    }
}
export default CreateObject;