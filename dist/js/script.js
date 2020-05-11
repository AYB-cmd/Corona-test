const questionner = [
    {
        "Q": "Pensez-vous avoir ou avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?",
        "element": ["label", "label"],
        "text": ["NON", "OUI"],
        "input": "input",
        "type": "radio",
        "value": [1, 2],
        "name": "Q1",
        "R": []
    },
    {
        "Q": "Que pensez-vous de votre corps?",
        "element": ["label", "label", "label", "label"],
        "text": ["Bien", "Fatigue", "Moyen", "trop fatigue"],
        "input": "input",
        "type": "radio",
        "value": [1, 2, 1, 1],
        "name": "Q2",
        "R": ""
    },
    {
        "Q": " Quel est votre âge ? Ceci, afin de calculerun facteur de risque spécifique. ",
        "element": ["label"],
        "text": ["Ans"],
        "input": "input",
        "type": "text",
        "value": [],
        "name": "Q3",
        "R": ""
    },
    {
        "Q": " Lgana hahowa  ",
        "element": ["label",],
        "text": ["Ans"],
        "input": "input",
        "type": "text",
        "value": [],
        "name": "Q3",
        "R": ""
    },


];






var contentAria = document.getElementById('terminal');
var progress = document.getElementById('progress');
var btnAria = document.getElementById('bot');
var startBtn = document.getElementById('start');
var backBtn = document.getElementById('backBtn');
var Nmr = document.querySelector('.index');
var question = document.querySelector('.question');
var reponse = document.querySelector('.reponse');
var counter = -1;


// buttons
startBtn.addEventListener('click', startTest)
backBtn.addEventListener('click', back)




// var form_being_submitted = false; // global variable

// function checkForm(form)
// {
//   if(form.firstname.value == "") {
//     alert("Please enter your first and last names");
//     form.firstname.focus();
//     return false;
//   }
//   return true;
// }






function Form(e) {
    var r = document.getElementsByTagName('input')
    if (counter >= 0) {
        startBtn.setAttribute('form', 'FORM')
       
        e.preventDefualt();  
    }
    
}

function startTest() {


    Form()
    counter++
    questionNmrP()
    progressBarP();
    postQst();
    postRps();
    style();
    BtnChanges();
}
function back() {
    counter--;
    questionNmrP();
    progressBarP();
    postQst();
    postRps();
}

function questionNmrP() {
    Nmr.innerHTML = `${counter + 1}/23`;
}
function progressBarP() {



    if (counter <= 0) {
        progress.style.width = '50%';
    }
    if (counter == 0) {
        backBtn.style.display = 'none'
    } if (counter >= 1 & counter <= 22) {
        progress.style.width = `${50 + (50 / 22) * counter}%`;
    } if (counter >= 22) {
        startBtn.removeEventListener('click', startTest);
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
    } if (counter == 1) {
        btnAria.style.flexDirection = "row-reverse"
        btnAria.style.justifyContent = 'space-between';
        backBtn.textContent = "question d'avant";
        backBtn.style.display = 'block';
        btnAria.appendChild(backBtn);

    }

}

// postINFO

function postQst() {
    if (counter >= 0) {
        question.innerHTML = '';
        var Q = document.createElement('h2');
        Q.textContent = questionner[counter].Q;
        question.appendChild(Q);
    }
}

function postRps() {
    reponse.innerHTML = '';
    for (let i = 0; i < questionner[counter].element.length; i++) {
        var q = questionner[counter];
        var rps = document.createElement(questionner[counter].element[i]);
        rps.textContent = questionner[counter].text[i];
        reponse.appendChild(rps);
        reponse.lastChild.setAttribute('id', `${i}`);
        var selected = document.getElementById(`${i}`);
        var r = document.createElement(questionner[counter].input);
        r.type = q.type;
        r.value = q.value;
        r.name = q.name;
        r.required = true
        selected.appendChild(r);
    }

}