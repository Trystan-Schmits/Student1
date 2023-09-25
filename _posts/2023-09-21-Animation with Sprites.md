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
import Movement from "/Student1/myScripts/MovementModule.js"

var movement;
let fps = 25;
var animId;
let active = false;

function frame(){ //when a frame is updated
    movement.update(fps);
    draw();
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

    movement = new Movement(0,0);
    document.addEventListener("keydown",movement.handleKeydown.bind(movement));
    document.addEventListener("keyup",movement.handleKeyup.bind(movement));
    
    draw();
}

function draw(){
    var canvas = document.getElementById("container");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,500,500)

    ctx.fillStyle = "black";
    ctx.moveTo(0, 100);
    ctx.lineTo(500, 100);
    ctx.stroke();

    ctx.fillStyle = "blue"
    let t = movement.position();
    ctx.fillRect(100+t[0],100-t[1], -10,-10);
}

window.onload = reset(1);
document.getElementById("start").addEventListener("click",start);
document.getElementById("stop").addEventListener("click",stop)
document.getElementById("setFps").addEventListener("click",setFps)
document.getElementById("reset").addEventListener("click",reset)

</script>