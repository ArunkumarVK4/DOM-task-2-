var input = document.getElementById('number');
var button = document.getElementById('btn1');
var output = document.getElementById('output1');
var author = document.getElementsByClassName('author');
var box = document.getElementById('box');
var block = document.getElementById('block');


async function getdata(value){

  var link = await fetch(`https://api-thirukkural.vercel.app/api?num=${value}`)
  var link1= await link.json();

  block.innerHTML=` 
  <p class="mb-0" id="output1">${link1.line1}</p> 
  <p class="mb-0 " id="output2">${link1.line2}</p>
  <footer class="blockquote-footer author text-white text-right">${link1.chapgrp_tam} <cite title="Source Title">${link1.sect_tam}</cite></footer>`
  box.append(block);


}

button.addEventListener('click',()=>{
  block.innerHTML='';
  var inp1 = input.value;
  getdata(inp1);
 

})



