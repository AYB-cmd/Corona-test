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
    {
        "Q": ""
    },
    {
        "Q": ""
    },
    {
        "Q": ""
    },
    {
        "Q": ""
    },
    {
        "Q": ""
    },
    {
        "Q": ""
    },
    {
        "Q": ""
    },
    {
        "Q": ""
    },
    {
        "Q": ""
    },
    {
        "Q": ""
    },
    {
        "Q": ""
    },
    {
        "Q": ""
    },
    {
        "Q": ""
    },
    {
        "Q": ""
    },
    {
        "Q": ""
    },
    {
        "Q": ""
    },


];




var contentAria = document.getElementById('terminal');
var progress = document.getElementById('progress');
var btnAria = document.getElementById('bot');
var startBtn = document.getElementById('start');
var backBtn =document.getElementById('backBtn');
var Nmr = document.querySelector('.index');
var question = document.querySelector('.question');
var reponse = document.querySelector('.reponse');

counter = -1;


startBtn.addEventListener('click', startTest)
backBtn.addEventListener('click', back)


function startTest() {
    counter++
    questionNmrP()
    progressBarP();
    getQst();
    getRps();
    style();
    BtnChanges();
    
}
function back() { 
    counter--; 
    questionNmrP();
    progressBarP();
    getQst();
    getRps(); 
      
}

function questionNmrP() {
    Nmr.innerHTML = `${counter + 1}/23`;
}
function progressBarP() {



    if (counter + 1 <= 1) {
        progress.style.width = '50%';
    }
        
    if(counter == 0){
        backBtn.style.display = 'none'
    }if (counter >= 1 & counter  <= 22 ) {
        progress.style.width = `${50 + (50 / 22) * counter}%`;
    }if (counter >= 22){
       startBtn.removeEventListener('click', startTest);
    }
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
    if (counter == 0) {
        reponse.innerHTML = '';
        var label = document.createElement('label');
        label.setAttribute('class', 'label1')
        label.textContent = "NON"
        reponse.appendChild(label);
        var label1 = document.querySelector('.label1');
        var R1 = document.createElement('input');
        R1.value = questionner[counter].input1;
        R1.type = 'radio';
        R1.name = "Q1"
        label1.appendChild(R1);

        var label = document.createElement('label');
        label.setAttribute('class', 'label2')
        label.textContent = "OUI"
        reponse.appendChild(label);
        var label2 = document.querySelector('.label2');
        var R2 = document.createElement('input');
        R2.value = questionner[counter].input1;
        R2.type = 'radio';
        R2.name = "Q1"
        label2.appendChild(R2);
    } 
}

function style() {
    contentAria.style.backgroundColor = '#FFF'
}

function BtnChanges() {
    if (counter == 0) {
        btnAria.style.width = '100%';
        btnAria.style.display = 'flex';
        btnAria.style.justifyContent = 'flex-end';
        startBtn.type = 'submit'
        startBtn.textContent = 'question suivante';
        startBtn.style.width = '45%';
        startBtn.style.margin = '1em 0';
    }if (counter == 1) {
        btnAria.style.flexDirection = "row-reverse"
        btnAria.style.justifyContent = 'space-between';
        backBtn.textContent = "question d'avant";
        backBtn.style.display = 'block';
        btnAria.appendChild(backBtn);
        
        
    }
    
}





