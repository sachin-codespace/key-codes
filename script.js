const container = document.querySelector(".key-container");

container.innerHTML = generateHTML("-", "-", "-");

window.addEventListener("keydown", (e) => {
    container.innerHTML = generateHTML(e.key, e.code, e.key.charCodeAt(0));
});

function generateHTML(key, code, keyCode) {
    return `
        <div class="key-item">
            <h4 class="heading">Key</h4>
            <h4 class="text">${key}</h4>
        </div>
        <div class="key-item">
            <h4 class="heading">Code</h4>
            <h4 class="text">${code}</h4>
        </div>
        <div class="key-item">
            <h4 class="heading">KeyCode</h4>
            <h4 class="text">${keyCode}</h4>
        </div>
    `;
}
