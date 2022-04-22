var felhasznalonev2 = sessionStorage.getItem('felhasznalo'); var jelszo2 = sessionStorage.getItem('jelszo');
var felhasznalonev = localStorage.getItem('felhasznalo'); var jelszo = localStorage.getItem('jelszo');

if (felhasznalonev != null && jelszo != null) { 
    sessionStorage.setItem('felhasznalo', felhasznalonev)
    sessionStorage.setItem('jelszo', jelszo)
    }
function atrak(){
    localStorage.setItem('felhasznalo', felhasznalonev2)
    localStorage.setItem('jelszo', jelszo2)
}

function vasarlas(){
    alert('Sikeres vásárlás');
    window.open('fooldal.html', '_self');
}