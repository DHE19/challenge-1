let buttonEcript = document.getElementById('btn-encript');
let buttonDecript = document.getElementById('btn-dencript');
let textAreaInput = document.getElementById('message');
let textAreaOutput = document.getElementById('decrypt-area');
let Infomenu = document.getElementById('placeholder');
let panelOutput = document.getElementById('panel-message');




buttonDecript.onclick = () => {
    console.log('funcionando perfectamente');
}
buttonEcript.onclick = () => {
    let message = textAreaInput.value;
    panelOutput.style.display="flex"
    panelOutput.style.animation = "showlol 1.5s";
    Infomenu.style.display = 'none';
    textAreaOutput.value = message;
}