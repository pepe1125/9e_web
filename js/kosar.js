var felhasznalonev = localStorage.getItem('felhasznalo'); var jelszo = localStorage.getItem('jelszo'); var bej = localStorage.getItem('Bejelenetkezve')

if (felhasznalonev != null && jelszo != null && bej != null) {
    sessionStorage.setItem('felhasznalo', felhasznalonev)
    sessionStorage.setItem('jelszo', jelszo)
    sessionStorage.setItem('Bejelenetkezve', bej)
}

function torleees() {
    localStorage.removeItem('felhasznalo'); localStorage.removeItem('jelszo'); localStorage.removeItem('Bejelenetkezve')
}

function kosarba(termek) {
    db = Number(prompt('Hány darabot akarsz?'))
    localStorage.setItem(termek, db)
}

function torles() {
    localStorage.clear()
}

function kosar() {
    var list = "<thead><tr><th>Termék neve</th><th class='td-qty'>Darabszám</th><th>Ár</th><th>Törlés</th> </tr> </thead>\n"




    var ossz = 0;
    var darab = 0;
    var key = "";


    for (var i = 0; i <= localStorage.length - 1; i++) {
        key = localStorage.key(i);
        darab = parseInt(localStorage.getItem(key));
        list += "<tr><td class='adatok'>" + key + "</td><td class='adatok'>" + darab + "</td>" + "</td><td class='adatok'>" + (window[key] * darab) + " Ft" + "</td><td>" + "<button class='gomb' style=\"width:80%; background-color:red\" onclick='RemoveItem(\"" + key + "\")'>Törlés</button>" + "</td></tr>";

        ossz += window[key] * darab;
    }

    list += "<tr><td colspan='3' align='right'>Összesen:</td><td class='total' colspan='2'><b>" +  ossz + ' Ft' + "</b></td></tr>"

    document.getElementById('table').innerHTML = list
    document.getElementById('table').style.display = 'table'

}

function RemoveItem(item) {
    localStorage.removeItem(item)
    alert('Sikeresen törölted!')
    location.reload()
}


function nincs(){
    alert('Jelenleg ebből a termékből nincs elérhető darab')
}


var AirJordan1RetroHigh_Dior = 3150000;
var NikeAirForce1_Low_ManchesterBee = 67000;
var NikeKyrie_6_WhiteUniversityRed = 35000;
var AirJordan1RetroHigh_TravisScott = 565000;
var NikeAirMax_270_Golf_WhiteBlack = 55000;
var Jordan4Retro_OffWhiteSail = 471000;


var NikeAirForce1_Low_LX_UV_Reactive = 50000;
var AirJordan1Mid_BlackNobleRed = 60000;
var NikeAirVaporMax_2020_Flyknit = 30000;
var AirJordan1RetroHigh_HotPucnh = 150000;
var AirJordan1Low_SE_Mighty_SwooshersPing = 85000;
var AdidasUltraBoost_40_TiedDyeRose= 45000;


var NikeAirMoreUptempo_ScorttiePippen = 70000;
var AdidasHardenVol_5_CéearMint = 40000;
var ConverseNotAChuckHi_Black_Lemon_Venom= 25000;
var AdidasNMDR1_StarWarsMandalorian = 50000;
var Jordan11RetroLow_LegendBlue = 90000;
var AirJordan1Mid_SignalBlue = 65000;

var AirJordan1Low_Mulberry = 43000;
var AdidasUltraBoost_TripleWhite = 38000;
var NikeBlazerMid_77_SunsetPulse = 40000;
var NikeDunkLow_GreenStrike = 55000;
var NikeAirMax90_Recraft_HyperGrape = 35000;
var AdidasMagmurRunner_NakedWhite = 90000;

var AirJordan1Mid_LightSmokeGrey_Anthracite = 69000;
var Jordan4Retro_WhiteOreo = 180000;
var Jordan11Retro_CoolGray = 70000;
var AirJOrdan1RetroHigh_OG_Prototype = 60000;
var AirJordan1RetroHigh_Fearless_UNC_Chicago = 130000;
var AirJordan1Mid_Linen = 56000;







