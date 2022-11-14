// Работа с классами
// 1
document.getElementById('elem1').classList.add('www');

// 2
document.getElementById('elem2').classList.remove('www');

// 3
console.log(document.getElementById('elem3_1').classList.contains ("elem3"));
console.log(document.getElementById('elem3_2').classList.contains ("elem3"));

// 4
let elem4_1 = document.getElementById('elem4_1');
let elem4_2 = document.getElementById('elem4_2');
if (elem4_1.classList.contains ("elem4") == true){
    elem4_1.classList.remove('elem4');
}else{
    elem4_1.classList.add('elem4');
};
if (elem4_2.classList.contains ("elem4") == true){
    elem4_2.classList.remove('elem4');
}else{
    elem4_2.classList.add('elem4');
};

// 5
let elem5 = document.getElementById('elem5');
console.log(elem5.classList.length);

// 6
let elem6 = document.getElementById('elem6');
for(let i = 0; i < elem6.classList.length; i++){
    alert(elem6.classList[i]);
};

// Работа с css
// 7
let elem7 = document.getElementById('elem7');
elem7.style.cssText = `
color: red;
font-size: 30px;
border: 1px solid red;
`;


// Свойство tagName
// 1
let elem8 = document.getElementById('elem8');
function buttonClick8(){
    alert(elem8.tagName);
};

// 2
let elem9 = document.getElementById('elem9');
function buttonClick9(){
    alert(elem9.tagName.toLowerCase());
};

// 3
let elem10 = document.getElementsByClassName('elem10');
let elem10id = document.getElementById('elem10');
for(var i = 0; i < elem10.length; i++){
    elem10[i].innerText=elem10[i].innerText + elem10[i].tagName.toLowerCase();  
};

// Bставка элементов через appendChild
// 4
let elem11_1 = document.getElementById('elem11');
let elem11_2 = document.createElement('li');
elem11_2.innerHTML = 'Джавапон11';
elem11_1.appendChild(elem11_2);

// 5
let arr12 = ["Джавапон12_1", "Джавапон12_2", "Джавапон12_3"];
let elem12 = document.getElementById('elem12');
for (let i = 0; i < arr12.length; i++){
    append12 = document.createElement('li');
    append12.innerHTML = arr12[i];
    elem12.appendChild(append12);
};

// Вставка элементов через insertAdjacentHTML
// 1
let elem13 = document.getElementById('elem13');
elem13.insertAdjacentHTML("beforebegin", '<span>!!!</span>');

// 2
let elem14 = document.getElementById('elem14');
elem14.insertAdjacentHTML("afterEnd", '<span>!!!</span>');

// 3
let elem15 = document.getElementById('elem15');
elem15.insertAdjacentHTML("afterbegin", '<span>!!!</span>');

// 4
let elem16 = document.getElementById('elem16');
elem16.insertAdjacentHTML("beforeend", '<span>!!!</span>');

// удаление и клонирование
// 1
let parent17 = document.getElementById('parent17');
let child17 = document.getElementById('child17');
function buttonClick17(){
    parent17.removeChild(child17);
};

// 2
let ol18 = document.getElementById('ol18');
function buttonClick18(){
    ol18.removeChild(ol18.lastChild);
};

// 3
let elem19 = document.getElementById('elem19');
let body = document.getElementById('body');
function buttonClick19(){
    body.removeChild(elem19);
};

// 4
let ol20 = document.getElementById('ol20');
function liClick20(elem){
    ol20.removeChild(elem);
};

// 5
let input21 = document.getElementById('input21');
function buttonClick21(){
    input21_1 = input21.cloneNode(false);
    input21.after(input21_1);
};

// Потомки
// 1
let elem22 = document.getElementById('elem22');
elem22.firstElementChild.style = `color: red;`;

// 2
let elem23 = document.getElementById('elem23');
elem23.lastElementChild.style = `color: red;`;

// 3
let elem24 = document.getElementById('elem24');
for (child of elem24.children){
    child.innerHTML = child.innerHTML + '!';
};

// Соседи
// 4
let elem25 = document.getElementById('elem25');
elem25.previousElementSibling.innerHTML = elem25.previousElementSibling.innerHTML + '!';

// 5
let elem26 = document.getElementById('elem26');
elem26.nextElementSibling.innerHTML = elem26.nextElementSibling.innerHTML + '!';

// 6
let elem27 = document.getElementById('elem27');
elem27.previousElementSibling.innerHTML = elem27.previousElementSibling.innerHTML + '!';
elem27.nextElementSibling.innerHTML = elem27.nextElementSibling.innerHTML + '!';

// Родители
// 7
let elem28 = document.getElementById('elem28');
elem28.parentElement.style = `color: blue;`

// 8
// let elem29 = document.getElementById('new29');
// let elem29_parent = elem29.parentElement
// elem29_parent.parentElement.style = `color: red;`;

// На величину границы
// 1
let elem30 = document.getElementById('elem30')
function buttonClick30(){
    alert(elem30.clientTop)
};

// 2
let elem31 = document.getElementById('elem31')
function buttonClick31(){
    alert(elem31.clientLeft)
};

// На полный размер элемента
// 3
let elem32 = document.getElementById('elem32')
function buttonClick32(){
    alert(elem32.offsetWidth)
};

// 4
let elem33 = document.getElementById('elem33')
function buttonClick33(){
    alert(elem33.offsetWidth)
};

// 5
let elem34 = document.getElementById('elem34')
function buttonClick34(){
    alert(elem34.clientWidth)
};

// 6
let elem35 = document.getElementById('elem35')
function buttonClick35(){
    alert(elem35.clientHeight)
};

// Работа с getComputedStyle
// 1
let elem36 = document.getElementById('elem36')
let style = getComputedStyle(elem36);
function buttonClick36(){
    alert(style.borderTopWidth)
};

// Прокрутка элемента
// 2
let elem37 = document.getElementById('elem37');
function buttonClick37() {
	alert(elem37.scrollTop);
}

// 3
let elem38 = document.getElementById('elem38');
function buttonClick38() {
	alert(elem38.scrollTop);
}

// 4
let elem39 = document.getElementById('elem39')
function buttonClick39(){
    elem39.scrollTop = 100;
};

// 5
let elem40 = document.getElementById('elem40')
function buttonClick40(){
    elem40.scrollTop += 100;
};

// Прокрутка элемента
// 1
let elem41 = document.getElementById('elem41')
function buttonClick41(){
    alert(elem41.scrollHeight)
};

// 2
let elem42 = document.getElementById('elem42')
function buttonClick42(){
    alert(elem42.scrollWidth)
};

// 3
let elem43 = document.getElementById('elem43')
function buttonClick43(){
    let total_height = elem43.scrollHeight;
	let needed_height = total_height - 100;
	elem43.scrollTop = needed_height;
};

// Прокрутка страницы
// 4
let elem44 = document.getElementById('elem44')
function buttonClick44(){
    alert(pageYOffset);
};

// 5 
let elem45 = document.getElementById('elem45')
function buttonClick45(){
    alert(pageXOffset);
};

// Прокрутка страницы
// 1
let elem46 = document.getElementById('elem46')
function buttonClick46(){
    window.scrollTo(300, 500);
};

// 2
let elem47 = document.getElementById('elem47')
function buttonClick47(){
    window.scrollBy(0, 300);
};

// Практика
// 3
let elem48 = document.getElementById('elem48')
function buttonClick48(){
    window.scrollTo(0, document.body.clientHeight);
};

// 4
function buttonClick49() {
	window.scrollBy(0, 400);
}

// 5
function buttonClick50(){
    let body = document.documentElement;
	if (body.scrollHeight - body.scrollTop == body.clientHeight) {
		window.scrollTo(0, 100);
	}
};

// 6
function buttonClick51() {
	var startWidth = this.offsetWidth;
	var startHeight = this.offsetHeight;
	this.style.width = startWidth * 2 + 'px';
	this.style.height = startHeight * 2 + 'px';
}