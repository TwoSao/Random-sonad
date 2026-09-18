// Sõnade massiiv sisaldab eesti ja vene keele tõlkeid.

const sonad = [
    { eesti: "server", vene: "сервер" },
    { eesti: "klient", vene: "клиент" },
    { eesti: "võrk", vene: "сеть" },
    { eesti: "andmebaas", vene: "база данных" },
    { eesti: "sõlm", vene: "узел" },
    { eesti: "protokoll", vene: "протокол" },
    { eesti: "ühendus", vene: "соединение" },
    { eesti: "andmed", vene: "данные" },
    { eesti: "turvalisus", vene: "безопасность" },
    { eesti: "hajus", vene: "распределённый" }
];

// Valime esimese ülesande jaoks juhusliku sõna!
const sonaEt = sonad[Math.floor(Math.random() * sonad.length)];

// Valime teise ülesande jaoks juhusliku sõna.
const sonaRu = sonad[Math.floor(Math.random() * sonad.length)];

// Kuvame eesti sõna, millele tuleb leida venekeelne vaste.
document.getElementById("questionEt").textContent = sonaEt.eesti;

// Kuvame vene sõna, millele tuleb leida eestikeelne vaste.
document.getElementById("questionRu").textContent = sonaRu.vene;

// Kontrollime eesti sõna venekeelset tõlget.
document.getElementById("checkRuButton").addEventListener("click", function () {
    const vastus = document.getElementById("answerRu").value.trim().toLowerCase();
    const tulemus = document.getElementById("resultRu");

    if (vastus === sonaEt.vene) {
        tulemus.textContent = "Õige!";
    } else {
        tulemus.textContent = "Vale! Õige vastus on: " + sonaEt.vene;
    }
});

// Kontrollime vene sõna eestikeelset tõlget.
document.getElementById("checkEtButton").addEventListener("click", function () {
    const vastus = document.getElementById("answerEt").value.trim().toLowerCase();
    const tulemus = document.getElementById("resultEt");

    if (vastus === sonaRu.eesti) {
        tulemus.textContent = "Õige!";
    } else {
        tulemus.textContent = "Vale! Õige vastus on: " + sonaRu.eesti;
    }
});

// Lisame sõnad valikumenüüsse
const wordSelect = document.getElementById("wordSelect");
const translationArea = document.getElementById("translationArea");
const selectedWord = document.getElementById("selectedWord");
const translationInput = document.getElementById("translationInput");
const checkTranslationButton = document.getElementById("checkTranslationButton");
const translationResult = document.getElementById("translationResult");

// Lisame kõik sõnad valikumenüüsse
sonad.forEach(function (sona) {
    const option = document.createElement("option");
    option.value = sona.eesti;
    option.textContent = sona.eesti;
    wordSelect.appendChild(option);
});

// Kui kasutaja valib sõna
wordSelect.addEventListener("change", function () {
    if (wordSelect.value !== "") {
        translationArea.style.display = "block";
        selectedWord.textContent = wordSelect.value;
        translationInput.value = "";
        translationResult.textContent = "";
    } else {
        translationArea.style.display = "none";
    }
});

// Kontrollime valitud sõna tõlget
checkTranslationButton.addEventListener("click", function () {
    const valitudSona = sonad.find(function (sona) {
        return sona.eesti === wordSelect.value;
    });

    if (!valitudSona) {
        translationResult.textContent = "Vali kõigepealt sõna!";
        return;
    }

    const vastus = translationInput.value.trim().toLowerCase();

    if (vastus === valitudSona.vene.toLowerCase()) {
        translationResult.textContent = "Õige!";
    } else {
        translationResult.textContent =
            "Vale! Õige vastus on: " + valitudSona.vene;
    }
});