// Comment mettre le sous total
let sstotal = document.querySelector("td.sstotal");

// Recuperer le montant ht (sstotal.innerhtml)
const tvaDom = 8.50;

// calcul de la tva
 // let montantTVA = sstotal.innerHTML * tvaDom / 100;
  let montantTVA = parseFloat(sstotal.innerHTML * tvaDom / 100).toFixed(2);
// conversion avec decimal 

// calcul TTC
let ttc = parseInt(sstotal.innerHTML) + montantTVA;

// mettre a jour element html de la facture
tdTVA = document.querySelector("td.tva");
tdTVA.innerHTML = Number.parseFloat(montantTVA)

let tdTotal = document.querySelector("td.total");
tdTotal.innerHTML =  Number.parseFloat(ttc).toFixed(2);