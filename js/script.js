import Contagem from "./countdown.js";

const lanse_a_braba_cont = new Contagem("13 November 2022 23:00:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

function exibeTime() {
    tempos.forEach((tempo, index) => {
        tempo.innerHTML = lanse_a_braba_cont.total[index]
    });
}
exibeTime();
setInterval(exibeTime, 1000);