/*

Задание 7
Напиши скрипт, который реагирует на изменение значения 
input#font-size-control (событие input) и изменяет 
инлайн-стиль span#text обновляя свойство font-size. 
В результате при перетаскивании ползунка будет меняться
 размер текста.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>

*/

const refs = {
    inputRange: document.getElementById('font-size-control'),
    textValue: document.getElementById('text'),
    // defaultFontSize = parseInt(document.getElementById('text').style.fontSize),
};

refs.inputRange.value = parseInt(refs.textValue.style.fontSize);

refs.inputRange.addEventListener('input', (event) => {    
    const { value } = event.target;
    refs.textValue.style.fontSize = `${value}px`;    
});

