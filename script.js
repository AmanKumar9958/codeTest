function updateOutput(){
    const htmlCode = document.getElementById('html').value;
    const cssCode = `<style>${document.getElementById('css').value}</style>`
    const jsCode = `<script>${document.getElementById('js').value}</script>`;
    const output = document.getElementById('outputFrame');


    output.contentDocument.body.innerHTML = htmlCode + cssCode;
    output.contentWindow.eval(jsCode);
}
document.querySelectorAll('textarea').forEach((textarea) => {
    textarea.addEventListener('input', updateOutput);
})

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    alert("Hello")
})

const button = document.getElementById('alertButton');
button.addEventListener('click', function() {
    alert('Hello! This is your alert message.');
});