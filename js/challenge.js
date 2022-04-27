let intTime;
const counter = document.getElementById('counter')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')
const pause = document.getElementById('pause')
const form = document.getElementById('comment-form')
const commentList = document.getElementById('list')

function timer() {
    intTime = setInterval(() => counter.textContent++, 1000)}

function decreaseTimer() {
    minus.addEventListener('click', ()=> {
        counter.textContent--
    })
}

function increaseTimer() {
    plus.addEventListener('click', ()=> {
        counter.textContent++
    })
}

function liker() {
    let numArray = [];
    let likeCounter = {};
    heart.addEventListener('click', ()=> {
        const likes = document.querySelector('.likes')
        console.log(likes)
        const li = document.createElement('li')
        li.textContent = `${heart.textContent} ${counter.textContent}`
        console.log(li)
        likes.append(li)
        numArray.push(counter.textContent)
        console.log(numArray)
        })
}

function pauser() {
    pause.addEventListener('click', (e)=> {
        e.preventDefault()
        console.log(e)
        console.log(e.target)
        const pauseLabel = 'resume'
        const unpauseLabel = 'pause'
        if (e.target.outerText==='pause') {
            pause.innerHTML=pauseLabel
            minus.disabled = true;
            plus.disabled = true;
            heart.disabled = true;
            clearInterval(intTime)
            document.getElementById('submit').disabled = true;
        } else {
            pause.innerHTML = unpauseLabel
            minus.disabled = false;
            plus.disabled = false;
            heart.disabled=false;
            document.getElementById('submit').disabled = false;
            timer()
        }
    })
}

function addComment() {
    form.addEventListener('submit', (e)=> {
        e.preventDefault()
        //console.log(e)
        const liCom = document.createElement('ul')
        liCom.textContent = e.target[0].value
        commentList.append(liCom)
        form.reset()
    })

}
const domLoaded = () => {
    document.addEventListener('DOMContentLoaded', 
    () => {console.log('DOM Loaded')
    timer(),
    decreaseTimer(),
    increaseTimer(),
    liker(),
    pauser(),
    addComment()
})
}

domLoaded()
