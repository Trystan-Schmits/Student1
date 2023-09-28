class Drawing{
    scroll = 0;

    constructor(layers, character, canvas, floorHeight){
        this.layers = layers; // dictionary with [(layer=[{objectData,position,scale}])] lower numbers are further back; 0 is min
        this.CanvasX = canvas.offsetHeight;
        this.CanvasY = canvas.offsetWidth;
        this.floor = floorHeight;
        this.character = character;
    }

    #WhatToDraw(){
        var objects = [];
        for (i=0;i<this.layers.length;i++){
            for(i2=0;i2<this.layers[i].objects.length;i2++){
                if ((this.layers[i][i2].ReturnPosition()[0] + this.CanvasX > this.scroll)&&(this.layers[i][i2].ReturnPosition()[0] - this.CanvasX < this.scroll)){
                    objects.push(this.layers[i][i2])
                }
                else{continue}
            }
        }
        return objects;
    }

    update(x){ //x position of character
        this.scroll = x;
    }

    draw(canvas,state){
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0,0,this.CanvasX,this.CanvasY);

        var objects = this.#WhatToDraw();
        if (objects.length>0){
            for (i=0;i<objects.length;i++){
                objects[i].draw(ctx,[this.scroll,this.floor*-1],state)
            }
        }

        ctx.fillSytle = "black";
        ctx.fillRect(0,this.floor,this.CanvasX,canvasY-this.floor); // floor

        this.character.draw(ctx,[this.CanvasX,canvasY-this.floor],state);
    }
}

export default Drawing;