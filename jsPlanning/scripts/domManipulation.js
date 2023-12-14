// DOM = Document Object Model
console.log(document.getElementById('pageTitle'));
console.log(document.getElementById('paragraph1').classList);


// Add/Remove CSS Classes
function addClass(elementId, className){
    document.getElementById(elementId).classList.add(className);
}

function removeClass(elementId, className){
    document.getElementById(elementId).classList.remove(className);
}

addClass('pageTitle','emphasis');
removeClass('paragraph2','paragraph');
addClass('paragraph1','emphasis');


// Change HTML structure/values
function changeContent(elementId, newContent){
    document.getElementById(elementId).innerHTML = newContent;
    console.log('Subtitle changed!');
}

