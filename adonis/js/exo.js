// c'est un commentaire

// variable

// Question : Comment on déclare une variable ?
//let a = ""; // let a = 0;
//const b = ""; // const b = 0;

// Question : Comment affecter une chaine de caractère à une variable ?
//let c = 'Bonjour à toi';

// Question : Comment changer une valeur dans une variable ?
//c = 'Bonjour non à toi';

// Question : Comment verifier le contenu d'une variable ?
//alert(c);

// Question : De quoi avons-nous besoin pour faire une adition ?
//let d = 5 + 6;
//ou 
//let e = 5; let f = 6;
//let total = e + f;

// Question : De quoi avons-nous besoin pour une concaténation ?
//let section = 'DWEB';

//let salutation = 'Bonjour ';
//alert(salutation + section);

// exercice
/**
 * - Créer 4 variables 3 numériques et une avec la chaine de caractères suivante :
 * "le total est : "
 * vous devez mettre en place une division, une multiplication, une soustraction et une addition
 * avec des chiffres differents et afficher pour chaque operation une alerte avec le resultat.
 */

let nbr1 = 1;
let nbr2 = 2;
let nbr3 = 3;
let nbr4 = 4;
//const msg = 'le total est : ';
/* alert(msg);
alert(nbr1+nbr2+nbr3); */
//alert(msg+(nbr1+nbr2+nbr3));

nbr1 = 3;
nbr2 = 5;
nbr3 = 6;

//alert(msg+(nbr1/nbr2/nbr3));

nbr1 = 5;
nbr2 = 4;
nbr3 = 2;

//alert(msg+(nbr1*nbr2*nbr3));

nbr1 = 50;
nbr2 = 4;
nbr3 = 2;

//alert(msg+(nbr1-nbr2-nbr3));

//alert(msg+(nbr1*nbr2/nbr3 + (nbr3-nbr2*nbr1) ))

// Question : Comment changer le contenu d'un élément html
// identifier element html h1

let bh1 = document.querySelector("h1");

bh1.innerHTML = "Bienvenue Soltice";

// Question : Comment changer le contenu d'un element html et l'affecter dans un autre element
// identifier element html h2
let bh2 = document.querySelectorAll("h2");

// identifier le 2 eme element h2
bh2[1].innerHTML = "Section en avant";

// affecter contenu du 2eme h2 dans h3
let bh3 = document.querySelector("h3");
let changeH2 = bh2[1].innerHTML = "Merci";

bh3.innerHTML = changeH2
let bh2s = document.querySelector("h2.ssh2");
bh2s.innerHTML = "Benjamin est con";

// Exercice 
/**
 * Creer la variable 'paragraphe' puis recuperer l'element html p et ajouter le contenu suivant : 
 * La DWEB est en vacance à partir du 1er Mars 2022
 * 
 */

let paragraphe = document.querySelector("p");
paragraphe.innerHTML = "La DWEB est en vacance à partir du 1er Mars 2022";

// Question : Comment ajouter un element html en JavaScript ?
// dans la div.info, ajouter un element html
// cibler element parent
let divI = document.querySelector('div.info'); //Selection

// Creation nouveau paragraphe
let pHtml = document.createElement('p')
let pTxt = document.createTextNode('La DWEB maitrise JavaScript');


// Ajouter texte dans la balise html p
pHtml.appendChild(pTxt);

// Ajouter le paragraphe dans la div.info
divI.append(pHtml);

console.log(pHtml);

// Comment poser une question ?
//window.prompt("Poser une question")

// Comment recuperer une reponse a une question ?
//let reponse = document.querySelector("p.r");
//reponse.innerHTML = prompt("Comment va Soltice ce matin?");

// Exercice
/**
 * Questionnaire :
 * Poser les questions correspondant aux textes des paragraphes present dans la
 * division 'div.form'
 * Afficher pour chaque paragraphe, les reponses 
 * Option : Mettre en masjuscule le NOM et la ville
 */

/*
divF.children[0].append(""+prompt("Votre Nom").toUpperCase())
*/

/* let n = prompt("Votre Nom?");
let nom = document.querySelector("p.nom");
nom.append(n);*/

// Question : Comment verifier si une variable est vide ou pas ?
let action = "Test";

if(action != ""){
    action = "Il écoute de la musique";
    alert(action);
} else {
    alert(action);
}

// Question : Comment stocker les 6 mois de l'année dans une variable ?
let annee = ["janvier","fevrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","decembre"];
//console.log(annee);

// Compter le nombre d'element d'un tableau

let nbrAnnee = annee.length;

// Boucle for
//let i = 0; //0 est un chiffre

// si i est plus petit que nbrAnnee alors ajoute a i +1
for(let i = 0; i < nbrAnnee; i++) {
    // test
    //console.log(i);
    
    // afficher le mois de mars manuellement
    //console.log(annee[2]);

    // pour afficher 1 fois le mois de mars
    if(annee[i] == "mars"){
        console.log(annee[i]);
    }
}

// autre boucle

    annee.forEach(mois => {
        //console.log(mois);
        if(mois == "aout"){
            let message = "SOltice est né au mois :" +mois;

            alert(message);
        }
    })


    // Question : Comment mettre en place automatiquement ...
    // afficher un nom dans un element html vide
    function afficherNom(){
        let dA = document.querySelector("div.afficher");

        //dA.children[0].innerHTML = "Soltice";
        dA.children[0].innerHTML = prompt("Quel est votre prenom?");

        return dA;
    }


    // executer function afficheNom
    afficherNom();