// script.js
document.addEventListener("DOMContentLoaded", function() {
    let placar1 = 0;
    let placar2 = 0;

    const placarDisplay1 = document.getElementById("placar1");
    const placarDisplay2 = document.getElementById("placar2");

    const add100E1Button = document.getElementById("add100E1");
    const add50E1Button = document.getElementById("add50E1");
    const resetE1Button = document.getElementById("resetE1");

    const add100E2Button = document.getElementById("add100E2");
    const add50E2Button = document.getElementById("add50E2");
    const resetE2Button = document.getElementById("resetE2");

    // Funções para equipe 1
    add100E1Button.addEventListener("click", function() {
        placar1 += 100;
        placarDisplay1.textContent = placar1;
    });

    add50E1Button.addEventListener("click", function() {
        placar1 += 50;
        placarDisplay1.textContent = placar1;
    });

    resetE1Button.addEventListener("click", function() {
        placar1 = 0;
        placarDisplay1.textContent = placar1;
    });

    // Funções para equipe 2
    add100E2Button.addEventListener("click", function() {
        placar2 += 100;
        placarDisplay2.textContent = placar2;
    });

    add50E2Button.addEventListener("click", function() {
        placar2 += 50;
        placarDisplay2.textContent = placar2;
    });

    resetE2Button.addEventListener("click", function() {
        placar2 = 0;
        placarDisplay2.textContent = placar2;
    });
});
