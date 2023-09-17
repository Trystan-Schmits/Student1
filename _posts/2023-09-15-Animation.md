---
comments: False
layout: post
title: Tic Tac Toe
description: Simple Tic Tac Toe game
type: hacks
courses: {'csse': {'week': 4}, 'csp': {'week': 0}, 'csa': {'week': 0}}
categories: ['C4.1']
---
<style>
    .container{
        display: flex;
        width:100px;
        height:100px;
        flex-flow: row wrap;

    }
    .base{
        background-color: white;
        width: 10px;
        height: 10px;
    }
    .colored{
        background-color: red;
        width: 10px;
        height 10px;
    }
</style>

<h>Animation</h>
<button onClick="start()">start</button>
<button onClick="stop()">stop</button>
<button onClick="reset()">reset</button>
<input id="fps" type="number" onfocus="this.value=''" />

<div id="container" class="container"></div>

<script>
let pos = 0;
let speed = 10;
var animId;
let active = false;

function frame(){
    let past = pos;
    pos = (pos+1)%100;
    console.log(document.getElementById(0));
    var d1 = document.getElementById(past);
    var d2 = document.getElementById(pos);
    d1.setAttribute("class","base");
    d2.setAttribute("class","colored");
    setTimeout(function() {if(active==true){animId = requestAnimationFrame(frame)};}, 1000 / speed);
    
}

function start(){
    if (active==true){return;};
    speed = document.getElementById("fps").value;
    active = true;
    animId = requestAnimationFrame(frame);
}

function stop(){
    active = false;
    cancelAnimationFrame(animId);
}

function reset(){
    stop();

    const container = document.getElementById("container");
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    pos = 0; 
    for (i=0; i<100; i++){
        const div = document.createElement("div");
        div.setAttribute("id",i)
        switch (i) {
            case pos:
                div.setAttribute("class","colored");
                break;
            default:
                div.setAttribute("class","base");
        }
        container.append(div);
    }
}
reset();  
</script>