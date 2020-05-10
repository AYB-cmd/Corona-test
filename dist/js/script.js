const questionner = [
    
        {"Q" : "Pensez-vous avoir ou avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?",
         "R" : "OUI NON" }
        
    
]




var contentAria = document.getElementById('terminal');
var progress = document.getElementById('progress');
var start = document.getElementById('start');
var score = document.querySelector('.index');
var question = document.querySelector('.question');
var reponse = document.querySelector('.reponse');

counter = 0;

function getQst() {
    score.innerHTML = `${counter}/23`
    question.innerHTML = '';
    var Q = document.createElement('h2')
    Q.textContent = questionner[0].Q;
    question.appendChild(Q)
    // reponse.innerHTML = '';
    // var R = document.createElement()
    progressBar();
    style();
}

function progressBar() {
    if (counter == 0){
    progress.style.width = '50%';
    }else{
      progress.style.width =`${50 + (50/23)*counter}%`; 
    }
    counter++;
}

function style() {
    contentAria.style.backgroundColor = '#FFF'
}
start.addEventListener('click',getQst)

