function cambio() { //questa funzione fa cambiare l'immagine centrale quando viene cliccata
    const element = document.getElementById("Foto");
    element.querySelector("img").src = "g2aF2.jpg";
  }

  function aggiungiBordo(){ //questa funzione aggiunge un bordo al tasto "Esplora i giochi" quando cliccato
  document.querySelector(".esplora").classList.add("bordo")
}
const button_add = document.querySelector(".esplora")
button_add.addEventListener("click", aggiungiBordo);

function showDiv() { //queste funzioni mostrano e nascondono un codice sconto quando cliccate
  var x = document.getElementById("Sconto");
  x.classList.remove("nascosto");
}

function hideDiv() {
  var x = document.getElementById("Sconto");
  x.classList.add("nascosto");
}

//questa parte di codice crea un div per condividere sui social
var condivisione = document.createElement('div');

document.body.appendChild(condivisione);

var Tasto = document.createElement('button');

Tasto.textContent = 'Condividi sui social la nostra pagina!';

Tasto.addEventListener('click', function() {
  alert('Grazie per aver condiviso!');
});

document.body.appendChild(Tasto);


//questa parte di codice sfrutta le variabili data-* per il funzionamento dell'acquisto dei giochi
const gameButtons = document.querySelectorAll(".compra");

gameButtons.forEach((button) => {
  const gameId = button.dataset.gameId;
  button.addEventListener("click", () => {
    alert(`Acquistato gioco ${gameId}`);
  });
});



// Quando si carica la pagina, verifica se c'è un codice di autorizzazione nell'URL e se sì, scambialo con un token di accesso
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
        fetchData(code);
    }
};

async function Frees(){
const url = 'https://free-epic-games.p.rapidapi.com/free';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'da95e0eb1cmsha27f7491f499c9ep1d19e0jsn7af133e05f2d',
		'X-RapidAPI-Host': 'free-epic-games.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}