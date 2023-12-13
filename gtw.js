document.addEventListener("DOMContentLoaded",()=>{
    function elementoCasuale(array) {
        const indiceCasuale = Math.floor(Math.random() * array.length);
        return array[indiceCasuale];
      }
    const parole=["madre","parola","eroe","soqquadro","scoprire","volere","aiuola","zaino","pacchia","italia","libro","informatica","dolere","potere","soqquadro","rinvenire","ottenere"];
    let elemento_casuale=elementoCasuale(parole);
    let paragrafo=document.getElementById("miaP");
    let stringa='';
    for(let i=0;i<elemento_casuale.length;i++){
        stringa+="_";
    }
    paragrafo.innerHTML=stringa;
    paragrafo.style="font-weight:bold;letter-spacing:5px;"
    //creazione spazio per stringa effettuata 
    let invia_parola=document.getElementById("invia_parola");
    let invia_lettera=document.getElementById("invia_lettera");
    let campo_lettera=document.getElementById("campo_lettera");
    let campo_parola=document.getElementById("campo_parola");
    let guessedLetters = []; 
    invia_lettera.onclick=function(e){
        let lettera=campo_lettera.value;
        let s=elemento_casuale.split(""); 
        let ss="";
        if (s.includes(lettera)) {  //il metodo includes ci permette di capire se una stringa include una' altra stringa
            guessedLetters.push(lettera); //il metodo push permette di aggiungere all'array la lettera indovinata
        }
        for (let i=0;i<s.length;i++) { //iteriamo su ogni valore dell'array per controllare se esso è presente nelle guessed letters
            if (guessedLetters.includes(s[i])) {  //se il valore dell'array è presente nelle guessed letters si aggiunge il carattere indovinato alla stringa
                ss+=`<b>${s[i]}</b>`;   //template literal
            } else {
                ss+="_";
            }
        }
        paragrafo.innerHTML = ss;
    }
    invia_parola.onclick=function(e){
        let ss="";
        if(elemento_casuale===campo_parola.value){
            ss=elemento_casuale;
            paragrafo.innerHTML=`<b>${ss}<b>`
        }
        else{
            alert("parola errata!");
        }
    }
    console.log(elemento_casuale); //questa parte andrebbe eliminata, tuttavia per comodità nel testing è ancora presente 
    console.log("questa parte andrebbe eliminata, tuttavia per comodità nel testing è ancora presente!");
});