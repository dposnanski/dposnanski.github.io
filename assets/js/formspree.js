document.addEventListener('DOMContentLoaded', function () {
  var contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var msgLoad = '<div class="alert alert--loading">Sending message…</div>';
    var msgSuccess = '<div class="alert alert--success">Your message has been sent! I will get back to you soon.</div>';
    var msgError = '<div class="alert alert--error">There was an error, please check that you entered ll fields correctly and try again.</div>';
    var base64_email = 'aGVsbG9AZGVsaWUubWU=';
    var base_url = '//formspree.io/';
    var action = base_url + atob(base64_email);

    var updateMsg = function (nodes, msg) {
      var statusMessages = document.querySelectorAll('.alert--loading')
      for (i = 0; i < statusMessages.length; i++) {
        statusMessages[i].style.display = 'none'
      }
      nodes.insertAdjacentHTML('beforeend', msg);
    }

    updateMsg(contactForm, msgLoad);
    fetch(action, {
      method: 'post',
      mode: 'cors',
      body: new FormData(contactForm)
    }).then(function (response) {
      if (!response.ok) {
        updateMsg(contactForm, msgError);
        return Promise.reject(new Error(response.statusText))
      }
      updateMsg(contactForm, msgSuccess);
      return Promise.resolve(response)
    }).catch(function (error) {
      updateMsg(contactForm, msgError);
    });
  });
});
