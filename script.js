currTheme = document.cookie.split("=")[1]
if(currTheme == "dark") {
    document.getElementById('body').classList.add('dark');
}
function active(id1, id2){
    document.getElementById(id1).classList.toggle('active');
    document.getElementById(id2).classList.toggle('active');
}

document.getElementById('theme').onclick = function(){
    console.log(currTheme);
    // if its dark sets as dark in cookies too
    document.getElementById('body').classList.toggle('dark');
    currTheme = currTheme == 'dark' ? 'light' : 'dark';
    document.cookie = `theme=${ currTheme }`;
}

document.getElementById("telContact").innerHTML = `for changes you can contact <a href="https://t.me/${ "jor_ban" }"> me by telegram </a>!`;