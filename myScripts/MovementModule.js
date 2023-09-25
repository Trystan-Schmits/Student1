class Movement{
    Vx = 0; //instantous x velocity
    Vy = 0; //instantous y velocity
    FaAc = -10; //falling acelleration
    VyMin = -50; //max falling speed (minimum y velocity)
    DeltaX = 0; //x direction of buttons pressed (1 up, -1 down, 0 none)
    DeltaY = 0; //y direction of buttons pressed (1 right, -1 left, 0 none)
    speed = 20; //walking speed

    constructor(Xi,Yi){
    this.x = Xi;
    this.y = Yi;
    }

    position(){
        console.log("Position X:" + this.x + " Y:" + this.y);
        return [this.x, this.y];
    }
    
    update(f){

        this.Vx = this.DeltaX*this.speed;
        
        //this.Vy -= his.FaAc*this.DeltaY * (1/f);//unused
        if (this.Vy < this.VyMin)
        {
            this.Vy = this.VyMin
        };
        
        this.x = this.x + this.Vx * (1/f);
        
        //this.y += this.Vy * (1/f); //unused
    }
    
    handleKeydown(event){
        switch(event.code){
            //case"KeyW": //unused
            //this.DeltaY =1;
            //break;
            //case"KeyS":
            //this.DeltaY =-1;
            //break;
            case"KeyD":
                this.DeltaX = 1;
                break;
            case"KeyA":
                this.DeltaX = -1;
                break;
        }
    }
    
    handleKeyup(event){
        switch(event.code){
            //case"KeyW": //unused
            //this.DeltaY =0;
            //break;
            //case"KeyS":
            //this.DeltaY =0;
            //break;
            case"KeyD":
            this.DeltaX = 0;
            break;
            case"KeyA":
            this.DeltaX =0;
            break;
        }  
    }
}

export default Movement;