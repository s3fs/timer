const timeVal = document.querySelector('#time-input');
            const butt = document.querySelector('#buttonStart');
            const sound = document.querySelector('#sound');
            sound.loop = true;
            const counter = document.querySelector('#counter');
            let interval;
    
            butt.addEventListener('click', () => {
                let timeToSet = parseInt(timeVal.value) * 1000;
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

            //let timeVal = document.getElementById('time');
            //timeVal.addEventListener('click', e => console.log(timeVal.value))
            //let timeCurr = new Date();
            //console.log(timeCurr.getMinutes())