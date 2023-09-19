document.addEventListener("DOMContentLoaded", () => {
    fetch('nav.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('#navbar').innerHTML = html;
        })
        .catch(err => console.warn('Something went wrong.', err));
});