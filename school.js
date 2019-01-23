function calFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function semFunction() {
  window.location = "./seminar.html"
}

function schFunction() {
  window.location = "./school.html"
}

function indFunction() {
  window.location = "./index.html"
}

window.onclick = function(event) {
  if (!event.target.matches('.dropBtn')) {
    var dropdowns = document.getEleentsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
