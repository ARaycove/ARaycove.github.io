document.addEventListener('DOMContentLoaded', (event) => {
    fetch('/template_theme/nav.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

