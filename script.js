function changePage(page) {
  var content = document.getElementById('content');

  fetch(page + '.html')
    .then(response => response.text())
    .then(data => {
      content.innerHTML = data;
    })
    .catch(error => {
      console.error('Error fetching page:', error);
    });
}

function toggleTheme() {
  var body = document.body;
  body.classList.toggle('dark-theme');
}

// Initial page load
changePage('home');
