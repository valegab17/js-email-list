// SETUP INIZIALE 
const listaOutput = document.getElementById("lista");
const bottone = document.getElementById("btn");
const endpoint = `https://flynn.boolean.careers/exercises/api/random/mail`;

// Funzione per generare la mailing list
function generaEmail() {
    listaOutput.innerHTML = ""; // Svuoto la lista per poi aggiungere nuove email 

    for (let i = 0; i < 10; i++) { // Ad ogni iterazione richiedo all'API una email
        axios.get(endpoint) // Chiamata AJAX con Axios
            .then(response => { // Codice da eseguire in caso di successo
                const mail = response.data.response; // Seleziono la singola email
                listaOutput.innerHTML += `<li>${mail}</li>`; // Stampo le email dentro a dei <li> che aggiungo alla mia lista ul
            })
            .catch(error => { // Codice da eseguire in caso di errore
                console.error(error.message);
            })
            .finally(() => { // Codice da eseguire a prescindere
                console.log("fatto tutto, fine della chiamata");
            })
    }
};

// Evento che al click del bottone fa il fetch di altre 10 mail
bottone.addEventListener("click", generaEmail);

// Richiamo funzione per generare 10 email al caricamento
generaEmail();