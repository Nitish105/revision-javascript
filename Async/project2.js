let intervalIdText;

const startToShowText = function(){
    if(!intervalIdText){
        intervalIdText = setInterval(sayGreet, 1000)
    }
    
    function sayGreet() {
        console.log("hello, Nick " + Date.now());
    }
}


const stopToShowText = function() {
    clearInterval(intervalIdText)
    intervalIdText = null;
}


document.querySelector('#start').addEventListener('click', startToShowText)  

document.querySelector('#stop').addEventListener('click', stopToShowText)

