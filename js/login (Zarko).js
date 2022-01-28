document.getElementById("test").addEventListener("submit", closeModal);
//NOTE: U OVOM SLUCAJU closeModal FUNKCIJA NE MORA DA POSTOJI
// document.getElementById("test").addEventListener("submit", () => $('#myModal').modal('hide'));
// document.getElementById("test").addEventListener("submit", () => {
//  $('#myModal').modal('hide');
//});
function closeModal() {
  $('#myModal').modal('hide');
}

function validate() {
  var user = document.getElementById("user");
  var psw = document.getElementById("psw");
  //var mod = document.getElementById("no-mod");
  var nav = document.getElementById("nav-list");
  //var btn = document.getElementById("cls-mod");
  // var modal1 = document.getElementById("myModal");

  if (user.value.trim() == "") {
    user.placeholder = "You must enter username";
    user.classList.add("invalid");
    psw.classList.remove("invalid");
    return false;
  } else if (psw.value.trim() == "") {
    psw.placeholder = "You must enter password";
    psw.classList.add("invalid");
    user.classList.remove("invalid");
    return false;
  } else {
    alert("Welcome user");
    nav.removeChild(nav.firstElementChild);
    //mod.parentNode.removeChild(mod);
    return true;

  }
}

// function closeModal() {
//   mod.remove();
// }

/*$('#cls-mod').click(function() { ovo je jquery za zatvaranje modula koji ne mogu da provalim sa js
    $('#myModal').modal('hide');
  });*/

function showTime() {
  var currentTime = new Date();
  var diem = "AM";
  var h = currentTime.getHours();
  var m = currentTime.getMinutes();
  var s = currentTime.getSeconds();

  if (h == 0) {
    h = 12;
  } else if (h > 12) {
    h = h - 12;
    diem = "PM";
  }
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  var myClock = document.getElementById("clock");
  // myClock.textContent = h + ":" + m + ":" + s + " " + diem;
  myClock.textContent = `${h}:${m}:${s} ${diem}`;
  setTimeout('showTime()', 1000);
}
//showTime() umesto ovde ja sam je pozvao u html
function countDown() {
  var eventDate = new Date('January 01, 2020, 00:00:01');
  var nowDate = new Date();
  var diffTime = eventDate.getTime() - nowDate.getTime();
  if (diffTime <= 0) {
    clearTimeout(timer);
    document.write("Happy 2020");
  }
  var seconds = Math.floor(diffTime / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);

  seconds %= 60;
  minutes %= 60;
  hours %= 24;

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  document.getElementById('dbox').textContent = days;
  document.getElementById('hbox').textContent = hours;
  document.getElementById('mbox').textContent = minutes;
  document.getElementById('sbox').textContent = seconds;

  var timer = setTimeout('countDown()', 1000);
}

$(document).ready(function () { //pokusao sam da ovo uradim preko external js fajla ali ne radi
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, a[href='#myPage']").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
})