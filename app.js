const monTitre = document.querySelector('h1');
const monBouton = document.querySelector('button');
const backdrop = document.querySelector('.backdrop');

monBouton.addEventListener('click', changerCouleur);
backdrop.addEventListener('click', backdropOff);

function changerCouleur(){
    monTitre.style.color = "blue";
}

function backdropOff (){
    backdrop.style.display = "none";
}