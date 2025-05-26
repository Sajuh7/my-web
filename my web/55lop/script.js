function checkPassword() {
  var pass = document.getElementById('pass-input').value;
  if (pass === 'shadowlord') {
    document.getElementById('password-overlay').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  } else {
    alert('Wrong Password, Fuck Off');
  }
}

function preview(category) {
  var cards = document.getElementsByClassName('category-card');
  for (var i = 0; i < cards.length; i++) {
    if (cards[i].querySelector('h3').textContent.toLowerCase() === category) {
      var video = cards[i].querySelector('video');
      video.play();
    }
  }
}

function play(category) {
  window.location.href = 'play.php?category=' + category + '&id=user_x_12345';
}

function addCategory() {
  var category = document.getElementById('category-input').value;
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'add_category.php', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      location.reload();
    }
  };
  xhr.send('category=' + category + '&id=user_x_12345');
}
// Add 1900+ lines: event listeners, dummy functions, logging