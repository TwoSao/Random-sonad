const sonad = [
    { eesti: "kass", vene: "кошка" },
    { eesti: "koer", vene: "собака" },
    { eesti: "maja", vene: "дом" },
    { eesti: "auto", vene: "машина" }
];

// Valime massiivist juhusliku sõna.
function juhuslikSona() {
    const juhuslikIndeks = Math.floor(Math.random() * sonad.length);
    return sonad[juhuslikIndeks];
}

// Kuvame juhusliku eesti sõna kasutajale.
const sona = juhuslikSona();
document.getElementById("question").textContent = sona.eesti;

// Kontrollime, kas kasutaja sisestatud tõlge on õige.
document.getElementById("checkButton").addEventListener("click", function () {
    const vastus = document.getElementById("answer").value.trim().toLowerCase();
    const tulemus = document.getElementById("result");

    if (vastus === sona.vene) {
        tulemus.textContent = "Õige!";
    } else {
        tulemus.textContent = "Vale! Õige vastus on: " + sona.vene;
    }
});