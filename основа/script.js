const compass = document.querySelector(".compass");
const needle = document.querySelector(".compass__needle");

if (compass && needle) {
    document.addEventListener("mousemove", (event) => {
        const { left, top, width, height } = compass.getBoundingClientRect();
        const x = event.clientX - left - width / 2;
        const y = event.clientY - top - height / 2;

        if (Math.hypot(x, y) > 8) {
            const angle = Math.atan2(y, x) * 180 / Math.PI + 90;
            needle.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
        }
    });
}

const timeButton = document.querySelector(".map-control--time");
const timeLabel = document.querySelector(".map-control__time-label");

if (timeButton && timeLabel) {
    timeButton.addEventListener("click", () => {
        const dawn = document.body.dataset.time !== "dawn";
        document.body.dataset.time = dawn ? "dawn" : "dusk";
        timeButton.setAttribute("aria-pressed", String(dawn));
        timeLabel.textContent = dawn ? "Рассвет" : "Сумерки";
    });
}

const note = document.querySelector(".field-note__text");
const nextNote = document.querySelector(".field-note__next");
const notes = [
    "После дождя здесь проступает старый тракт.",
    "Ветер несёт запах полыни с дальних холмов.",
    "На рассвете степь кажется бескрайней и тихой.",
    "У старой колеи трава выше и гуще, чем вокруг.",
    "Перед закатом дальние холмы становятся золотыми.",
    "После полудня тень редких кустарников спасает от жары.",
    "У горизонта облака собираются быстрее, чем кажется.",
    "На открытом плато ветер меняется почти незаметно.",
    "К вечеру дорога мягко светится в последних лучах."
];
let noteIndex = 0;

function showNextNote() {
    if (note) {
        noteIndex = (noteIndex + 1) % notes.length;
        note.textContent = notes[noteIndex];
    }
}

nextNote?.addEventListener("click", showNextNote);
window.setInterval(() => {
    if (!document.hidden) showNextNote();
}, 9000);
