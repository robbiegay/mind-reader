// JS

let text = document.querySelector('.text');
let click = document.querySelector('.click');
let inst = document.querySelector('.inst');
let btn = document.querySelector('.go');

let page = 1;

function page1() {
    text.innerHTML = 'I can read your mind';
    click.setAttribute('style', 'visibility: hidden;');
    inst.innerHTML = '';
    btn.innerHTML = 'GO';
}

function page2() {
    text.innerHTML = 'Pick a number from 01-99';
    click.setAttribute('style', 'visibility: visible;');
    click.innerHTML = 'NEXT';
    inst.innerHTML = 'When you have your number, click next';
    btn.innerHTML = 'rst'; // Insert reset icon
}

function page3() {
    text.innerHTML = 'Add both digits together to get a new number';
    text.setAttribute('style', 'font-size: 55px;');
    click.setAttribute('style', 'visibility: visible;');
    click.innerHTML = 'NEXT';
    inst.innerHTML = 'Ex. 25 is 2 + 5 = 7 <br> Click next to proceed';
    btn.innerHTML = 'rst'; // Insert reset icon
}

function page4() {
    text.innerHTML = 'Subtract your new number from the orignal number';
    text.setAttribute('style', 'font-size: 50px;');
    click.setAttribute('style', 'visibility: visible;');
    click.innerHTML = 'NEXT';
    inst.innerHTML = 'Ex. 25 - 7 = 18 <br> Click next to proceed';
    btn.innerHTML = 'rst'; // Insert reset icon
}

function page5() {
    text.innerHTML = 'insert symbols'; // Set the overflow to scroll
    text.setAttribute('style', 'max-height: 350px;'); // Sets the max height to allow scrolling
    text.setAttribute('style', 'overflow: scroll;')
    click.setAttribute('style', 'visibility: visible;');
    click.innerHTML = 'REVEAL';
    inst.innerHTML = 'Find your new number <br> Note the symbol beside the number';
    btn.innerHTML = 'rst'; // Insert reset icon
}

function page6() {
    text.innerHTML = '#';
    click.setAttribute('style', 'visibility: hidden;');
    inst.innerHTML = 'Your symbol is: #';
    btn.innerHTML = 'rst'; // Insert reset icon
}

function clickNext() {
    page ++;
    checkPage(page);
}

function clickReset() {
    if (btn.getAttribute('class') === 'go') {
        page = 2;
        btn.setAttribute('class', 'reset');
        checkPage(page);
    } else {
        page = 1;
        btn.setAttribute('class', 'go');
        checkPage(page);
    }
    
}

function checkPage(pageNum) {
    if (pageNum === 1) {
        page1();
    }
    else if (pageNum === 2) {
        page2();
    }
    else if (pageNum === 3) {
        page3();
    }
    else if (pageNum === 4) {
        page4();
    }
    else if (pageNum === 5) {
        page5();
    }
    else {
        page6();
    }
}

click.addEventListener('click', clickNext);
btn.addEventListener('click', clickReset);