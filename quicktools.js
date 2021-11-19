
const minifyOptions = document.getElementById("minifyOptions");
const minifierCustomClass = document.getElementById("minifierCustomClass");
const minifierInput = document.getElementById("minifierInput");
const minifierOutput = document.getElementById("minifierOutput");
const minifyButton = document.getElementById("minifyButton");

const compressorOptions = document.getElementById("compressorOptions");
const compressorInput = document.getElementById("compressorInput");
const compressorOutput = document.getElementById("compressorOutput");
const compressButton = document.getElementById("compressButton");

let shortDemo = document.getElementsByClassName('shortDemo');

for(let i = 0; i<shortDemo.length; i++) {
    shortDemo[i].addEventListener('click', rollDemo);
}

function rollDemo() {
    /* to do */
}

minifyOptions.addEventListener('change', function() {
    if(minifyOptions.value == 2) {
        let parent = this.parentElement;
        let customClassLabel = parent.getElementsByClassName('customClassLabel')[0];
        let classInput = parent.querySelectorAll('input')[0];
        classInput.style.display = 'block';
        customClassLabel.style.display = 'block';
    } else if(minifyOptions.value != 2) {
        let parent = this.parentElement;
        let customClassLabel = parent.getElementsByClassName('customClassLabel')[0];
        let classInput = parent.querySelectorAll('input')[0];
        classInput.style.display = 'none';
        customClassLabel.style.display = 'none';
    }
});

compressOptions.addEventListener('change', function() {
    if(compressOptions.value == 2) {
        let parent = this.parentElement;
        let customClassLabel = parent.getElementsByClassName('customClassLabel')[0];
        let classInput = parent.querySelectorAll('input')[0];
        classInput.style.display = 'block';
        customClassLabel.style.display = 'block';
    } else if(compressOptions.value != 2) {
        let parent = this.parentElement;
        let customClassLabel = parent.getElementsByClassName('customClassLabel')[0];
        let classInput = parent.querySelectorAll('input')[0];
        classInput.style.display = 'none';
        customClassLabel.style.display = 'none';
    }
});

minifyButton.addEventListener('click', minifyInput);

function minifyInput() {
    let minifyOption = minifyOptions.value;
    let htmlInput = minifierInput.value; 
    let htmlOutput = '';
    if(minifyOption == undefined || htmlInput == undefined) return;
    if(minifyOption == 1) {
        /* Minify all */
        htmlOutput = htmlInput.replace(/\s+/g," ");
        minifierOutput.value = htmlOutput;
    } else if(minifyOption == 2) {
        /* Minify custom class */
        let customClass = minifierCustomClass.value;
        let div = document.createElement('div');
        div.id = 'tempHTML';
        minifierOutputContainer.appendChild(div);
        document.getElementById('tempHTML').innerHTML = htmlInput;
        let elementsHTML = document.getElementsByClassName(customClass);
        let elements = [];

        for(let i=0; i<elementsHTML.length; i++) {
            let element = elementsHTML[i];
            element = `${element.parentElement.innerHTML}`;       
            let input = document.createElement('input');
            input.id = 'tempInput';
            input.setAttribute('type','text');
            minifierOutputContainer.appendChild(input);
            htmlInput = document.getElementById('tempInput').value = element;
            htmlInput = htmlInput.replace(/\s+/g," ");
            elements.push(htmlInput);
        }

        if(elements.length != 0) {
            for(let ii=0; ii<elements.length; ii++) {
                htmlOutput = `${htmlOutput} ${elements[ii]}`;
            }
            minifierOutput.value = htmlOutput
        }  
    } else {
        minifierInput.value = "OOps ! You chose an invalid option. Please select another one";
    }
}

compressButton.addEventListener('click', compressInput);

function compressInput() {
    let compressorOption = compressOptions.value;
    let htmlInput = compressorInput.value;
    let htmlOutput = '';
    if(compressorOption == undefined || htmlInput == undefined) return;
    if(compressorOption == 1) {
        /* Compress all */
        htmlOutput = htmlInput.replace(/\t+/g,"");
        compressorOutput.value = htmlOutput;
    } else if(compressorOption == 2) {
        /* Compress custom class */
        let customClass = compressorCustomClass.value;
        let div = document.createElement('div');
        div.id = 'tempHTML';
        compressorOutputContainer.appendChild(div);
        document.getElementById('tempHTML').innerHTML = htmlInput;
        let elementsHTML = document.getElementsByClassName(customClass);
        let elements = [];

        for(let i=0; i<elementsHTML.length; i++) {
            let element = elementsHTML[i];
            element = `${element.parentElement.innerHTML}`;       
            let input = document.createElement('textarea');
            input.id = 'tempInput';
            input.setAttribute('type','text');
            compressorOutputContainer.appendChild(input);
            htmlInput = document.getElementById('tempInput').value = element;
            htmlInput = htmlInput.replace(/\s+/g," ");
            elements.push(htmlInput);
        }

        if(elements.length != 0) {
            for(let ii=0; ii<elements.length; ii++) {
                htmlOutput = `${htmlOutput} ${elements[ii]}`;
            }
            compressorOutput.value = htmlOutput
        }
    } else {
        compressorInput.value = "OOps ! You chose an invalid option. Please select another one";
    }
}

let copyButtons = document.getElementsByClassName('copy');

for(let i=0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener("click", copyToClipboard);
}

function copyToClipboard() {
    let parent = this.parentElement.parentElement;
    let element = parent.querySelectorAll('textarea')[0];
    let value = element.value;

    if(value == undefined) return;
    let tempInput = document.createElement('TEXTAREA');
    tempInput.type = "text";
    parent.appendChild(tempInput);
    tempInput.value = value;
    tempInput.select();
    document.execCommand("copy");
    parent.removeChild(tempInput);
}

let resetButtons = document.getElementsByClassName('reset');

for(let i=0; i < copyButtons.length; i++) {
    resetButtons[i].addEventListener("click", resetTextInput);
}

function resetTextInput() {
    let parent = this.parentElement.parentElement;
    let element = parent.querySelectorAll('textarea')[0]; 
    element.value = ''; 
}