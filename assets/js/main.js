//*salvo l'endpoint in una variabile
const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";

//*salvo i DOM nodes necessari
const buttonEl = document.getElementById('btn')
const colEl = document.getElementById('mails')



//*inizializzo l'eventListener del bottone per generare le e-mail

buttonEl.addEventListener("click", () => {
    //*inizializzo il ciclo for per generare 10 email 
    for (let i = 0; i < 10; i++) {
      fetch(endpoint)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
})