const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";

fetch(endpoint)
.then (response => response.json())
.then(data => {
    console.log(data)
})