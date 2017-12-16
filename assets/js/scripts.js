// Google Maps
/*var marker;

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: {
      lat: 45.522152,
      lng: 9.593093
    }
  });

  marker = new google.maps.Marker({
    map: map,
    draggable: false,
    title: "Somewhere Here",
    animation: google.maps.Animation.DROP,
    position: {
      lat: 45.522154,
      lng: 9.593090
    }
  });
  marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}*/

$(document).ready(function () {

  // Facebook
  /*(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=1818132841733925";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));*/

  // Smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function () {
    var href = $.attr(this, 'href');
    $root.animate({
      scrollTop: $(href).offset().top
    }, 500, function () {
      window.location.hash = href;
    });
    return false;
  });

  //Tooltips
  $(function () {
    $("#course").tooltip();
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  //Contact
  //var base64_email = 'aGVsbG9AZGVsaWUubWU=';
  //var base_url = '//formspree.io/';
  //var action = base_url + atob(base64_email);
  //$('#contact-form').attr('action', action);

  //Services
  /*var i = 0;
  while (services[i]) {
    $("#services-detail").append("\
      <div class='col-md-6 services-columns'>\
        <h2 class='services-title'>" + services[i].title + "</h2>\
        <p class='services-description'>" + services[i].description + "</p>\
        <a href='" + services[i].web + "'><button type='button' class='btn btn-lg btn-primary'>" + services[i].button + "</button></a>\
        <p>" + services[i].startPrice + "</p>\
      </div>\
    ");
    i++;
  }*/

  //About Skills
  var i = 0;
  while (skills[i]) {
    $("#skills-list").append("\
      <div class='col-xs-3 col-sm-3 col-md-2 col-xl-2 skill-img'>\
        " + skills[i].image + "\
        <h5>" + skills[i].name + "</h5>\
      </div>\
    ");
    i++;
  }

  //About Languages
  var i = 0;
  while (languages[i]) {
    $("#language-list").append("\
      <div class='col-xs-3'>\
        <img src='" + languages[i].image + "' title='" + languages[i].title + "' class='img-responsive img-lang text-center'>\
        <h5 class='text-center'>" + languages[i].language + "</h5>\
      </div>\
    ");
    i++;
  }

  /*FAQs
  var i = 0;
  while (questions[i]) {
    $("#accordion").append("\
          <div class='panel panel-default'>\
              <div class='panel-heading'>\
                <h4 class='panel-title'>\
                  <a data-toggle='collapse' data-parent='#accordion' href='#collapseOne'>\
                  <i class='fa fa-angle-right' aria-hidden='true'></i>" + questions[i].q + "\
                  </a>\
                </h4>\
              </div>\
              <div id='collapseOne' class='panel-collapse collapse'>\
                <div class='panel-body'>" + questions[i].a + "</div>\
              </div></div>\
          ");
    i++;
  }*/



  //Portfolio
  var i = 0;
  while (works[i]) {
    $("#projects").append("\
      <div class='col-sm-6'>\
        <a href='" + works[i].web + "' class='work-img'>\
          <img class='img-responsive work-logo' src='" + works[i].pic + "' alt='" + works[i].alt + "'>\
          <span class='info'>\
            <h3 class='proj-title'>" + works[i].title + "</h3>\
            <p>" + works[i].description + "</p>\
          </span>\
        </a>\
      </div>\
    ");
    i++;
  }
  $(".work-img").mouseenter(function () {
    $(".info", this).show();
  }).mouseleave(function () {
    $(".info", this).hide();
  });


  //Social Icons
  var i = 0;
  while (socials[i]) {
    $("#social").append("\
      <a href='" + socials[i].web + "' target='_blank'>\
        <span>\
          <i class='fa " + socials[i].icon + " fa-icon' aria-hidden='true' aria-label='" + socials[i].label + "'>\
          </i>\
        </span>\
      </a>\
    ");
    i++;
  }

});
