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



var btnAria = document.getElementById('bot');
var contentAria = document.getElementById('terminal');
var progress = document.getElementById('progress');
var start = document.getElementById('start');
var Nmr = document.querySelector('.index');
var question = document.querySelector('.question');
var reponse = document.querySelector('.reponse');

counter = -1;


start.addEventListener('click', startTest)

function startTest() {
    progressBarP();
    getQst()
    getRps()
    style();
    startBtnChanges()
}

function questionNmrP() {
    Nmr.innerHTML = `${counter + 1}/23`;
}
function progressBarP() {
    if (counter <= 0) {
        progress.style.width = '50%';
    } if (counter + 1 >= 1 & counter + 1 <= 22 ) {
        progress.style.width = `${50 + (50 / 21) * counter}%`;
    }if (counter > 20){
       start.removeEventListener('click', startTest);
    }
    counter++;
    questionNmrP()
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

function startBtnChanges() {
    if (counter == 0) {
        btnAria.style.width = '100%';
        btnAria.style.display = 'flex';
        btnAria.style.justifyContent = 'flex-end';
        start.textContent = 'question suivante';
        start.style.width = '45%';
        start.style.margin = '1em 0';
        
    }if (counter == 1) {
        btnAria.style.flexDirection = "row-reverse"
        btnAria.style.justifyContent = 'space-between';
        var btn = document.createElement('button');
        btn.setAttribute('class' ,'btn')
        btn.setAttribute('id','backBtn')
        btn.textContent = "question d'avant";
        btn.style.width = '45%';
        btn.style.margin = '1em 0';
        btnAria.appendChild(btn);
        
        
    }
return btn;
}













// function questionNmrN() {
//     Nmr.innerHTML = `${counter - 1}/23`;
// }
// function progressBarN() {
//      if (counter + 1 >= 1 & counter + 1  <= 22 ) {
//         progress.style.width = `${50 - (50 / 21) * counter}%`;
//     }if (counter < 1 || counter > 22){
//        btn.removeEventListener('click', Back());
//     }
//     counter++;
//     questionNmrN()
// }
// function back() {
//     progressBarN()
//     getQst()
//     getRps()
//     style();
//     startBtnChanges()
// }
// btn.addEventListener('click',back())

