---
comments: False
layout: post
title: Caluclator v2
description: Even Simpler Calculator
type: hacks
courses: {'csse': {'week': 5}, 'csp': {'week': 0}, 'csa': {'week': 0}}
categories: ['C4.1']
---

<h>Calculator v2</h>
<div>
    <input id="input" type="text" onfocus="this.value=''" />
    <button onClick="check()">solve</button>
</div>
<p id="text"></p>

<script>
    function check(){
        "use-strict";
        let problem = document.getElementById("input").value;
        document.getElementById("text").innerText = new Function("return "+problem.replaceAll("^","**"))();
    }
</script>