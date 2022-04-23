var felhasznalonev2 = sessionStorage.getItem('felhasznalo'); var jelszo2 = sessionStorage.getItem('jelszo'); var bej2 = sessionStorage.getItem('Bejelenetkezve');
var felhasznalonev = localStorage.getItem('felhasznalo'); var jelszo = localStorage.getItem('jelszo'); var bej = localStorage.getItem('Bejelenetkezve')

if (felhasznalonev != null && jelszo != null && bej != null) { 
    sessionStorage.setItem('felhasznalo', felhasznalonev)
    sessionStorage.setItem('jelszo', jelszo)
    sessionStorage.setItem('Bejelenetkezve', bej)
    }
function atrak(){
    localStorage.setItem('felhasznalo', felhasznalonev2)
    localStorage.setItem('jelszo', jelszo2)
    localStorage.setItem('Bejelenetkezve', bej2)

    


}

function vasarlas(){
    alert('Sikeres vásárlás');
    window.open('fooldal.html', '_self');
}

