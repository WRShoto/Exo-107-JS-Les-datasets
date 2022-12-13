// Elements pour lesquels vous créerez des datasets directement dans le code HTML.
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');

// Elements pour lesquels vous créerez des datasets depuis JavaScript.
let p5 = document.getElementById('p5');
let p6 = document.getElementById('p6');
let p7 = document.getElementById('p7');
let p8 = document.getElementById('p8');

//debut code perso:

let number = p1.dataset.number;
p1.innerHTML += ": " + number;

let caractere = p2.dataset.caractere;
p2.innerHTML += ": " + caractere;

let tableau = p3.dataset.liste.split('|');
for (let hobby of tableau){
    p3.innerHTML +="<br> blabla" +"<br> un re blabla" + hobby.trim();
}

let booleenTest = p4.dataset.booleenTest;
booleenTest = booleenTest.toLowerCase() === 'true';
if (booleenTest){
    p4.innerHTML += ": la valeur est true"
}

else{
    p4.innerHTML +=": la valeur est false"
}

//2eme partie de l'exo
p5.dataset.number1 ="10";
console.log(p5.dataset.number1)

p6.dataset.carac ="blabla";
console.log(p6.dataset.carac)

p7.dataset.liste = "pas compris pour celui la "
console.log(p7.dataset.liste)

p8.dataset.boolean = 'true'
console.log(p8.dataset.boolean)