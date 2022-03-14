// commentaires vanillajs es6
/**
 * commentaire
 * multilignes
 */
/**
 * generer nombre aleatoire entre 1 et 150
 * afficher liste aleatoire de 1 à n
 * recuperer nombre propose
 * verifier le nombre
 * - si le nombre est bon :
 * afficher message gagnant
 * 
 * - si le nombre pas bon :
 * verifier limite :
 * - si limite atteinte : 
 * afficher bon nombre
 * afficher message perdu
 * 
 * - si limite non atteinte
 * afficher indice
 */

// generer nombre aléatoire entre 1 et 150
function devineMoi(min, max){
    // generateur aleatoire javascript
    return Math.floor(Math.random() * max) + min;
}

let resultat = devineMoi(1, 150);

alert(resultat);

// generer nombre aleatoire entre 1 et 15
function essai(min, max){
    //nombre essai
    return Math.floor(Math.random() * max) + min;
}
let nbrE = essai(1, 15);
let tour = 0;

// afficher nbrE dans le jeux
let spanE = document.querySelector("span.essai");
spanE.innerHTML = nbrE;

// ecouteur sur le bouton
let bt = document.querySelector("button");
bt.addEventListener("click", function(){
    let reponse = document.querySelector("input#reponse");

    //comparer reponse et resultat
    if(reponse == resultat){

        //afficher message gagnant
        let win = document.querySelector(".reponse");
        win.innerHTML = "YOU WIN !!";




    } else {
        console.log("non, le bon nombre est :"+resultat);

        // recuperer nbr essai
        tour += 1;
        console.log(nbrE--),
        if(){
            console.log("perdu");
        } else {
            console.log("essai encore");
        }


        }

    }

});