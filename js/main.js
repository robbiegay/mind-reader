// JS

let text = document.querySelector('.text');
let click = document.querySelector('.click');
let inst = document.querySelector('.inst');
let btn = document.querySelector('.go');

let page = 1;

function page1() {
    text.innerHTML = 'I can read your mind';
    text.setAttribute('style', 'font-size: 60px;');
    click.setAttribute('style', 'visibility: hidden;');
    inst.innerHTML = '';
    btn.innerHTML = 'GO';
    btn.setAttribute('style', 'padding: 30px;');
}

function page2() {
    text.innerHTML = 'Pick a number from 01-99';
    text.setAttribute('style', 'font-size: 50px;');
    click.setAttribute('style', 'visibility: visible;');
    click.innerHTML = 'NEXT';
    inst.innerHTML = 'When you have your number, click next';
    addResetIcon();
}

function page3() {
    text.innerHTML = 'Add both digits together to get a new number';
    text.setAttribute('style', 'font-size: 45px;');
    click.setAttribute('style', 'visibility: visible;');
    click.innerHTML = 'NEXT';
    inst.innerHTML = 'Ex. 25 is 2 + 5 = 7 <br> Click next to proceed';
    addResetIcon();
}

function page4() {
    text.innerHTML = 'Subtract your new number from the original number';
    text.setAttribute('style', 'font-size: 45px;');
    click.setAttribute('style', 'visibility: visible;');
    click.innerHTML = 'NEXT';
    inst.innerHTML = 'Ex. 25 - 7 = 18 <br> Click next to proceed';
    addResetIcon();
}

function page5() {
    text.innerHTML = symbols(100);
    text.setAttribute('style', 'font-size: 45px;');
    text.setAttribute('style', 'max-height: 250px;'); // Sets the max height to allow scrolling
    text.setAttribute('style', 'text-align: center;');
    text.setAttribute('style', 'margin: 10px;');
    click.setAttribute('style', 'visibility: visible;');
    click.innerHTML = 'REVEAL';
    inst.innerHTML = 'Find your new number <br> Note the symbol beside the number';
    addResetIcon();
}

function page6() {
    text.innerHTML = '#';
    text.setAttribute('style', 'font-size: 100px;');
    click.setAttribute('style', 'visibility: hidden;');
    inst.innerHTML = 'Your symbol is: #';
    addResetIcon();
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

function addResetIcon() {
    btn.innerHTML = ' <../img src="../img/undo-solid.svg" alt="reset">';
    btn.setAttribute('style', 'padding: 20px;');
}

function symbols(x) {
    let output = ''; // Making sure that output = a string
    for (i = 1; i <= x; i++) {
        if (i < x) {
            let num = i;
            let sym = ['=', '@', '*', '$', '%', '^', '&', '+', '#'];
            output += `${num} - ${sym[(i - 1) % 9]}<br>`; // subtract 1 because arrays count from 0
        } 
    }
    return output;
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


/*
Icons from Font Awesome
Licensed under Creative Commons 4.0 International license
Link to license: https://fontawesome.com/license
I made no changes to the icons
*/