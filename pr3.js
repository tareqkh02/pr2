let open = document.getElementById('plus')
let close = document.getElementById('back')
let add = document.getElementById('add')
let remove = document.getElementById('remove')
let hiden = document.getElementById('hidden')


open.onclick=function(){
    hiden.style.display= 'block';
}
close.onclick=function(){
    hiden.style.display= 'none';
}

add.onclick = function(){
  let text = document.getElementById('txt').value;
  let tag = document.createElement('div')
  tag.classList.add('note')
  tag.id='note';
  let content = document.createTextNode(text);
  tag.appendChild(content);
  document.getElementById("right").appendChild(tag);
  document.getElementById("hidden").classList.toggle("active");
  hiden.style.display= 'none';
  document.getElementById('right').style.height='400px';

}

remove.onclick = function (){
    alert('if you want to remove your note click on the text ')
    document.getElementById('note').onclick= function(){
        document.getElementById('note').remove()
    }

}
