fetch('/template_theme/footer.html')
    .then(response => response.text())
    .then(data => {
        document.body.insertAdjacentHTML('beforeend', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
