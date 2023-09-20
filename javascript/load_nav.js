fetch('/template_theme/nav.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('#footer').innerHTML = data;
    })
    .catch(error => {
        console.error('Error:', error);
    });
