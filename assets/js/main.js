//*salvo l'endpoint in una variabile
const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";

//*salvo i DOM nodes necessari
const buttonEl = document.getElementById("btn");
const mailboxEl = document.getElementById("mail-box");

//*inizializzo l'eventListener del bottone per generare le e-mail

buttonEl.addEventListener("click", () => {
  console.clear(); //*cancella ciò che era presente in console in precedenza
  mailboxEl.innerHTML = ""; //*sovrascrivo l'interno della row
  //*inizializzo il ciclo for per generare 10 email
  for (let i = 0; i < 10; i++) {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); //* loggo in console il risultato del ciclo for
        const col6 = document.createElement("div"); //*genero il div .col
        col6.className = "col-6 mt-3 mb-3"; //*assegno le classi bootstrap alla col
        const card = document.createElement("div"); //*genero il div .card
        mailboxEl.appendChild(col6); //*inserisco le col-6 dentro la row #mail-box
        card.className = "border rounded p-3 text-center bg-light-subtle"; //*assegno le classi bootstrap alla card
        card.textContent = data.response; //*inserisco la response dell'API dentro la card
        col6.appendChild(card); //*inserisco le card dentro le col-6
        buttonEl.className = "btn btn-lg btn-success mt-3 mb-3"; //*modifico il bottone dopo averlo cliccato la prima volta
        buttonEl.textContent = "Genera 10 nuove mail"; //*modifico il testo del bottone dopo il primo 'click' event
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
