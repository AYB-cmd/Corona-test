const questionner = [
    {
        "Q": "Pensez-vous avoir ou avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?",
        "input1": 0,
        "input2": 1
    },
    {
        "Q": "Que pensez-vous de votre corps?"
    },
    {
        "Q": " Quel est votre âge ? Ceci, afin de calculerun facteur de risque spécifique. "
    },
    {
        "Q": ""
    }, {
        "Q": ""
    }, {
        "Q": ""
    },
    {
        "Q": ""
    },


]




var contentAria = document.getElementById('terminal');
var progress = document.getElementById('progress');
var start = document.getElementById('start');
var score = document.querySelector('.index');
var question = document.querySelector('.question');
var reponse = document.querySelector('.reponse');

counter = -1;

function startTest() {
    progressBar();
    getQst()
    // getRps()
    
    style();

}

function getQst() {
    if (counter >= 0) {
        question.innerHTML = '';
        var Q = document.createElement('h2');
        Q.textContent = questionner[counter].Q;
        question.appendChild(Q);
    }
   
}
function getRps() {
    reponse.innerHTML = '';
    var label = document.createElement('label')
    label.textContent = "NON"
    reponse.appendChild(label);
    var R1 = document.createElement('input');
    R1.value = questionner[0].input1;
    R1.type = 'radio';
    reponse.appendChild(R1);
    var label = document.createElement('label')
    label.textContent = "OUI"
    reponse.appendChild(label);
    var R2 = document.createElement('input');
    R2.value = questionner[0].input2;
    R2.type = 'radio';
    reponse.appendChild(R2);
    // var R2 = document.createElement('input');

    // R2.value = questionner[0].input1;
    // R2.type = 'checkbox';
    // reponse.firstChild.appendChild(R1); 
    // reponse.childElementCount(1).appendChild(R2);

}

function questionNmr() {
    score.innerHTML = `${counter+1}/23`;
}
function progressBar() {
    if (counter == 0) {
        progress.style.width = '50%';
    } else {
        progress.style.width = `${50 + (50 / 23) * counter}%`;
    }
    counter++;
    questionNmr()
}

function style() {
    contentAria.style.backgroundColor = '#FFF'
}
start.addEventListener('click', startTest)

