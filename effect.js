const effects = document.querySelector("#dropdown");
const labels = document.querySelectorAll(".form-item");
const form = document.querySelector(".comment")
const glow = document.querySelector(".survey-form-glow");

function selectEffects() {

    switch (effects.value) {
        case "3": {
            prevState = "3";
            glow.classList.add("add");
            setRootObj();
            break;
        }
        case "2": {
            prevState = "2";
            setRootObj();
            glow.classList.remove("add");

            break;
        }
        case "1": {
            prevState = "1";
            glow.classList.remove("add");
            setRootObj();
            break;
        }
        case "0": {
            prevState = "0";
            resetRootObj();
            glow.classList.remove("add");
            console.log("none");
            break;
        }
    }
}

function setRootObj() {

    let root = document.documentElement;
    root.style.setProperty("--color-change", "#457b9d");
    root.style.setProperty("--form-width", "0");
    root.style.setProperty("--border-transform", "0%");
    root.style.setProperty("--text-transform", "-140%");
    root.style.setProperty("--push-form", "0%");
    root.style.setProperty("--width-change", "100%");

}

function resetRootObj() {

    let root = document.documentElement;
    root.style.setProperty("--color-change", "black");
    root.style.setProperty("--form-width", "-5rem");
    root.style.setProperty("--border-transform", "-170%");
    root.style.setProperty("--text-transform", "0%");
    root.style.setProperty("--push-form", "10%");
    root.style.setProperty("--width-change", "90%");
}