window.onload = () => {
    setTimeout(() => document.querySelector('#hero').classList.add('anima'), 1000);
}

document.onkeydown = (e) => {
    e.code == 'Enter' ? clock() : void(0);
}

let head = document.querySelector('#head');
let span = head.querySelectorAll('span');
for (i of span) {
    i.addEventListener('click', e => {
        for (y of head.children) {
            y.classList.remove('span-active', 'bb');
            y.classList.add('span-inactive');
        }
        let a = e.target;
        a.classList.remove('span-inactive');
        a.classList.add('span-active', 'bb');
    })
}

const timeVal = document.querySelector('#time-input');
const butt = document.querySelector('#buttonStart');
const sound = document.querySelector('#sound');
sound.loop = true;
const counter = document.querySelector('#counter');
let interval;

butt.addEventListener('click', clock = () => {
    let timeToSet = parseInt(timeVal.value);
    let activeSpan = head.querySelector('.span-active');
    activeSpan.innerHTML == 'seconds' ? timeToSet *= 1000 : activeSpan.innerHTML == 'minutes' ? timeToSet *= 60000 : timeToSet *= 3600000;
    if (butt.innerHTML == 'Start') {
        let i = (timeToSet / 1000) - 1;
        interval = setInterval(() => {
            i >= 0 ? counter.innerHTML = `You have ${i} second(s) left` : counter.innerHTML = `You are over by ${i * -1} second(s)`;
            i--;
        }, 1000)
        setTimeout(() => sound.play(), timeToSet);
        butt.innerHTML = 'Stop';
    } else {
        butt.innerHTML = 'Start';
        sound.pause();
        clearInterval(interval);
        counter.innerHTML = '';
    }
})