// DOM = Document Object Model
let pageTitle = document.getElementById('pageTitle');
console.log(pageTitle);
console.log(pageTitle.innerHTML);
console.log(pageTitle.classList);


console.log(document.getElementById('paragraph1').classList);


function addClass(elementId, className){
    document.getElementById(elementId).classList.add(className);
}

function removeClass(elementId, className){
    document.getElementById(elementId).classList.remove(className);
}

addClass('pageTitle','emphasis');
removeClass('paragraph2','paragraph');
addClass('paragraph1','emphasis');


function changeContent(elementId, newContent){
    document.getElementById(elementId).innerHTML = newContent;
    console.log('Content Changed');
}