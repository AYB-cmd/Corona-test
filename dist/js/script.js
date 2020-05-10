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
    getRps()

    style();

}

function getQst() {
    if (counter == 0) {
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

function questionNmr() {
    score.innerHTML = `${counter + 1}/23`;
}
function progressBar() {
    if (counter <= 0) {
        progress.style.width = '50%';
    } if (counter + 1 >= 1 & counter + 1 <= 22 ) {
        progress.style.width = `${50 + (50 / 21) * counter}%`;
    }if (counter > 20){
       start.removeEventListener('click', startTest);
    }
    counter++;
    questionNmr()
}

function style() {
    contentAria.style.backgroundColor = '#FFF'
}
start.addEventListener('click', startTest)

