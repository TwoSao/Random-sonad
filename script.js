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

// Kuvame konsoolis juhuslikult valitud sõna.
const sona = juhuslikSona();
console.log("Juhuslik sõna:", sona.eesti);