function active(id1, id2){
    document.getElementById(id1).classList.toggle('active');
    document.getElementById(id2).classList.toggle('active');
}

document.getElementById('theme').onclick = function(){
    document.getElementById('body').classList.toggle('dark');
}