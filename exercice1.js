// Step one
let  nomVoiture = "Peugeot";
let x = 50;
let z = 5;
let w = 10;
let d = z + w;

document.getElementById('demo').innerHTML = "z vaux 5, w vaux 10, le résultat est : " +z+ " + " +w+ "";
alert(d);

// Step two
let prenom = "Jhon", nom = "doe", age = 35;
alert(10*5);
alert(10 / 2);
let l = 10; let k = 5; l += l + k;

//Step three
function maFonction(){
    alert("Salut tout le monde !")
}
window.maFonction();

//Step four
function maFonctionDeRetour(){
    document.getElementById("demoRetour").innerHTML = "Bonjour!"
}
window.maFonctionDeRetour();

//Step five
let monBouton = document.getElementById('monBouton');
monBouton.addEventListener('click', function Bouton(){
    alert("alert")
})

//Step six
let change = document.getElementById("changeSurover");
change.addEventListener('mouseover', function (){
    this.style.backgroundColor = 'red';
})

//Step seven
let txt = "une longue phrase";
let longueur = txt.length;
alert(longueur);

//Step eight
let str1 = "Bonjour";
let str2 = " le monde!";
alert(str1 + str2);

//Step nine
let listeVoitures = [
    "Renault",
    "Volvo",
    "Citroen",
];
let maVoiture = listeVoitures[2];
listeVoitures[0] = "Ford";
alert(listeVoitures.length);
listeVoitures.pop();
listeVoitures.push("Ferrari");
console.log(listeVoitures);

//Step ten
let rNumber = Math.random();
let fNumber = 15.7;
fNumber = Math.round(fNumber);

//Step eleven
let nombreUn = 10;
let nombreDeux = 5;
if(nombreUn > nombreDeux){
    alert( "nombreUn est supérieur à nombreDeux");
}

let nombreTrois = 10;
let nombreQuatre = 10;
if(nombreTrois === nombreQuatre){
    alert("nombreTrois est égal à nombreQuatre");
}

if(nombreUn !== nombreDeux){
        alert( "nombreUn n'est pas égal à nombreDeux");
}

//Step twelve
for(let y = 0; y > 9;y++){
    console.log(y);
}

//Step thirteen
let tableau = [
    "pomme",
    "banane",
    "poire",
]

for(let p = 0; p < tableau.length;p++){
    console.log(tableau[p]);
}

let i = 0;
while(i < 10){
    i++;
    console.log(i);
}
let u = 0;
while(u < 10){
    u += 2;
    console.log(u);
}

for(let a = 0; a > 10;a++){
    if (a === 5){
        alert("l'index est de 5, l'exo est terminée");
    }
}