const displayInputOutput = document.querySelector('.display-input-output');
const inputKey = Array.from(document.getElementsByClassName('input-keys'));

inputKey.map(inputKey => {
    inputKey.addEventListener('click', (e) => {
        switch(e.target.value) {
            case 'C':
                displayInputOutput.innerText = '';
                break;
            case 'De':
                if (displayInputOutput.innerText) {
                    displayInputOutput.innerText = displayInputOutput.innerText.slice(0, -1);
                } 
                break;
            case '=':
                try{
                    let expression = displayInputOutput.innerText;
                    expression = expression.replace(/\^/g, "**");
                    displayInputOutput.innerText = eval(expression);
                } catch{
                    displayInputOutput.innerText = 'Maths Err';
                }
                break;
            default:
                displayInputOutput.innerText += e.target.value;
        }
    });
});