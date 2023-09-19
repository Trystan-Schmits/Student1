---
comments: False
layout: post
title: Caluclator v3
description: Even Simpler Calculator
type: hacks
courses: {'csse': {'week': 5}, 'csp': {'week': 0}, 'csa': {'week': 0}}
categories: ['C4.1']
---

<style>
.overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0);
  z-index: 2;
  cursor: pointer;
}
</style>

<h>Calculator v3</h>
<div>
    <input id="input" type="text" onfocus="this.value=''" />
    <button onClick="check()">solve</button>
</div>
<p id="text"></p>


<video id="vid">
    <source src="{{site.baseurl}}/videos/explosion.mp4" type="video/mp4"> 
</video>


<script>
    
    function check(){
        //boom!
        document.getElementById("overlay").setAttribute("display","block");
        document.getElementById("vid").play();

        setTimeout(3000);
        document.getElementById("overlay").setAttribute("display","none");

        let problem = document.getElementById("input").value;
        document.getElementById("text").innerText = new Function("return "+problem.replaceAll("^","**"))();
        
    }
</script>