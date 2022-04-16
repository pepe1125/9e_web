var felhasznalonev = localStorage.getItem('username'); var jelszo = localStorage.getItem('password');

if (felhasznalonev != null && jelszo != null) { 
    sessionStorage.setItem('username', felhasznalonev)
    sessionStorage.setItem('password', jelszo)
}

function torleees(){
localStorage.removeItem('username'); localStorage.removeItem('password');
}

var NikeDunkLow = 150000;
var Air_Jordan_4_Retro = 250000;
var Adidas_Yeezy_Slide_Glow = 100000;
    


    function kosarba(termek) {
        db = Number(prompt('Hány darabot akarsz?'))
        localStorage.setItem(termek, db)
    }
    
    function torles(){
        localStorage.clear()
    }
    
    function kosar(){
        var list = "<tr><th class='elsosor'>Termék neve</th><th class='elsosor'>Darabszám</th><th class='elsosor'>Ár</th><th>-</th></tr>\n"
    
        var ossz = 0;
        var darab = 0;
        var key = "";
    
    
        for (var i = 0; i <= localStorage.length - 1; i++) {
            key = localStorage.key(i);
            darab = parseInt(localStorage.getItem(key));
            list += "<tr><td class='adatok'>" + key + "</td><td class='adatok'>" + darab + "</td>" + "</td><td class='adatok'>" + (window[key] * darab) + " Ft" + "</td><td>" + "<button class='gomb' style=\"width:50%; background-color:red\" onclick='RemoveItem(\"" + key + "\")'>Törlés</button>" + "</td></tr>";

            ossz += window[key] * darab;
        }
    
        list += "<tr> <th>Összesen: </th> <th> </th> <th>" + ossz + " Ft" + "</th></tr>"
        
    document.getElementById('table').innerHTML = list
    document.getElementById('table').style.display = 'table'
    
    }


    function RemoveItem(item) {
        localStorage.removeItem(item)
    }

