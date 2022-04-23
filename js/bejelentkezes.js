
function elfelejtett(nincsfel, nincsjel) {
  if (localStorage.getItem("felhasznalo") == null && localStorage.getItem("jelszo") == null) {
    nincsfel.style.display = "none"
    nincsjel.style.display = "none"
    document.getElementById('felhasznalonev').innerHTML = "Ezen a gépen nincs aktív felhasználó <br><br> Kérlek regisztrálj!"
   } else {
    document.getElementById('felhasznalonev').innerHTML = localStorage.getItem("felhasznalo")
    document.getElementById('jelszo').innerHTML = localStorage.getItem("jelszo")
  }
}

function reg(user, pass, pass2) {
if (user != '' && pass != '' && pass2 !=''){
  if (pass == pass2) {
    localStorage.setItem('felhasznalo', user);
    localStorage.setItem('jelszo', pass);
    window.open("bejelentkezes.html","_self")
  } else if (pass != pass2) {
    alert("Nem egyezik a két jelszó")
  }}
}

function van(user, pass){
  if (localStorage.getItem("felhasznalo") != null && localStorage.getItem("jelszo") != null){
    document.getElementById('letezik').innerHTML = "Már rendelkezel egy felhasználóval, kattints ide hogy bejelentkezz"
  } 
}

function log(user, pass) {

  if (user == localStorage.getItem("felhasznalo") && pass == localStorage.getItem("jelszo")){
    alert("SIKERES BEJELENTKEZÉS")
    window.open("webshop_index.html","_self")
    localStorage.setItem('Bejelenetkezve', 'yes')
  } else if(user != localStorage.getItem("felhasznalo") && pass != localStorage.getItem("jelszo")) {
    alert("Hibás adatok")
  } else if(pass != localStorage.getItem("jelszo")){
    alert("Hibás adatok")
  }

}

function torles() {
  sessionStorage.clear();
  localStorage.clear();
}

function felhasznalo(bej, kij) {
  if (localStorage.getItem("Bejelenetkezve") == "yes") {
      document.getElementById('asd').innerHTML = localStorage.getItem('felhasznalo')
      bej.style.display = "none"
      kij.style.display = "block"
  }
  else if (localStorage.getItem("Bejelenetkezve") == "no") {
      kij.style.display = "none"
  }
}

function kijel() {
  localStorage.setItem("Bejelenetkezve", "no");
  location.reload();
}

