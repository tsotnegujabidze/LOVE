// when no clicked, make button go to random place

const no = document.getElementById("no");

const button = document.querySelector("button");

no.addEventListener("click", () => {
    const x = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight));
    no.style.position = "absolute";
    no.style.left = `${x}px`;
    no.style.top = `${y}px`;
});

yes.addEventListener("click", () => {
    window.location.href = "index2.html";
});