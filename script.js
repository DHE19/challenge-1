//INICIALIZAMOS LAS VARIABLES NECESARIAS
let encryptButton = document.getElementById('btn-encript');
let decryptButton = document.getElementById('btn-dencript');
let inputTextArea = document.getElementById('message');
let outputTextArea = document.getElementById('decrypt-area');
let Infomenu = document.getElementById('placeholder');
let outputPanel = document.getElementById('panel-message');
let copyButton = document.getElementById('copy');

decryptButton.onclick = () => {
    let message = inputTextArea.value;
    outputPanel.style.display = "flex"
    outputPanel.style.animation = "showlol 1.5s";
    Infomenu.style.display = 'none';
    outputTextArea.value = decrypt(message);
}
encryptButton.onclick = () => {
    let message = inputTextArea.value;
    outputPanel.style.display = "flex"
    outputPanel.style.animation = "showlol 1.5s";
    Infomenu.style.display = 'none';
    outputTextArea.value = encrypt(message);
}

copyButton.onclick = async () =>{
    let value = outputTextArea.value;
    await navigator.clipboard.writeText(value);
    alert('texto copiado');
}
//encripta los mensajes
const encrypt = (message) => {

    let vocales = {
        a: 'ai',
        e: 'enter',
        i: 'imes',
        o: 'ober',
        u: 'ufat'
    }
    
    return iteratorMessage(message, 
        (e) =>{
        for (const vocal in vocales) 
            if (e === vocal) return vocales[vocal];
        return e;
        }, '')
}
//des encripta los mensajes
const decrypt = (message) => {

    let specialWords = {
        ai: 'a',
        enter:'e',
        imes: 'i',
        ober: 'o',
        ufat: 'u',
    }

    return iteratorMessage(message,(e) =>{
        let current = e;
        for (const word in specialWords) {
            let regex = new RegExp(word, 'gi');
            current = current.replace(regex, specialWords[word]);
        }
        return current;
    }, ' ');
}



// particiona el mensaje acorde a la tercera variable, y usamos action para definir la forma en que se va tratar
//los datos
const iteratorMessage = (message, action,joinNSplitWords) =>{
    return message
        .split(joinNSplitWords)
        .map(e => action(e))
        .join(joinNSplitWords)

}
