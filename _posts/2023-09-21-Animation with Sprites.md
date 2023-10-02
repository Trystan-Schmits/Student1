---
comments: False
layout: post
title: Sprite Animation
description: Simple requestAnimationFrame() for sprite animation
type: hacks
courses: {'csse': {'week': 5}, 'csp': {'week': 0}, 'csa': {'week': 0}}
categories: ['C4.1']
---
<style>
    .container{
        display: Block;
        background-color: white;
    }
</style>


<h>Animation</h>
<button id="start">start</button>
<button id="stop">stop</button>
<button id="reset">reset</button>
<input id="fps" type="number" onfocus="this.value=''" />
<button id="setFps">set fps</button>

<canvas width="500px" height="500px" id="container" class="container"></canvas>

<script type="module">
//importModules
import Movement from "/Student1/myScripts/MovementModule.js" //standAlone

import Drawing from "/Student1/myScripts/DrawingModule.js"//must be used with object
import Object from "/Student1/myScripts/CreateObject.js" //must be used with drawing

//to be assigned
var movement;
var Drawer;

//base variables
let fps = 25;
var animId;
let active = false;
var canvas = document.getElementById("container");
var state = 0;
var lastDirection = 1;
let CurrentFrame = 0;

//objects
var character = new Image(); //character
character.src = "/Student1/images/Game/CharacterSpriteSheet.png";
//document.getElementById("setFps").insertAdjacentElement("afterend", character);
var charObject = new Object(character,[31,54],[40,60],[0,0],2,4);

var background = new Image(); //object1
background.src = "/Student1/images/Game/background.png";
var backgroundObject = new Object(background,[2048,1270],[640,400],[0,0],1,1);

var box = new Image(); //object1
box.src = "/Student1/images/Game/box.jpeg";
var boxObject = new Object(box,[255,220],[100,100],[150,0],1,1);

var slime = new Image();
slime.src = "/Student1/images/Game/slime.jpeg"
var slimeObject = new Object(slime,[225,200],[20,20],[150,0],1,1);

var objects = [[backgroundObject],[boxObject],[slimeObject]];


function frame(){ //when a frame is updated
    CurrentFrame += 1;

    movement.update(fps);
    Drawer.update(movement.position()[0]);

    //slime movement
    if (slimeObject.ReturnPosition()[0] < (Drawer.ReturnScroll()+canvas.offsetWidth/2)){
        slimeObject.OverridePosition([slimeObject.ReturnPosition()[0]+10/fps,0]);
    }
    else{
        slimeObject.OverridePosition([slimeObject.ReturnPosition()[0]-10/fps,0]);
    }

    //character Animation
    if (CurrentFrame % Math.round(fps/2)== 0){
        charObject.UpdateFrame();
    };
    switch(movement.state()){
        case 0: 
            if (lastDirection == 1){
                state = 0;
            }
            else {
                state = 2;
            }
            break;
        case 1:
                state = 1;
                lastDirection = 1;
            break;
        case -1:
                state = 3;
                lastDirection = -1;
            break;
    }


    Drawer.draw(canvas,state); //draw frame
    setTimeout(function() {if(active==true){animId = requestAnimationFrame(frame)};}, 1000 / fps);
}

function start(){
    if (active==true){return;};
    active = true;
    animId = requestAnimationFrame(frame);
}

function setFps(){
    fps = document.getElementById("fps").value;
}
function stop(){
    active = false;
    cancelAnimationFrame(animId);
}

function reset(a){
    console.log("reset a:" + a);
    stop();
    
    if (a !== 1 ) {
    document.removeEventListener("keydown",movement.handleKeydown.bind(movement));
    document.removeEventListener("keyup",movement.handleKeyup.bind(movement));
    }

    Drawer = new Drawing(objects,charObject,canvas,100);

    movement = new Movement(0,0);
    document.addEventListener("keydown",movement.handleKeydown.bind(movement));
    document.addEventListener("keyup",movement.handleKeyup.bind(movement));
    
    Drawer.draw(canvas,movement.state());
}


window.onload = reset(1);
document.getElementById("start").addEventListener("click",start);
document.getElementById("stop").addEventListener("click",stop)
document.getElementById("setFps").addEventListener("click",setFps)
document.getElementById("reset").addEventListener("click",reset)

</script>