var prob10 = document.querySelector('#prob10')
var prob100 = document.querySelector('#prob100')
var prob10000 = document.querySelector('#prob10000')


function losuj(rozmiar, zakres) {
    var los = []
    for (i = 0; i < rozmiar; i++) {
        los.push(Math.floor(Math.random() * zakres))
    }
    return los
}
function sortNumber(a, b) {
    return a - b
}

function timePerformance(rozmiarTablicy, zakresLiczbWTablicy, iloscPowtorzen) {
    var time = 0
    var liczby = []
    for (j = 0; j < iloscPowtorzen; j++) {
        liczby = losuj(rozmiarTablicy, zakresLiczbWTablicy)
        time -= performance.now()
        liczby.sort(sortNumber)
        time += performance.now()
    }

    return time / iloscPowtorzen
}

prob10.innerHTML = timePerformance(10, 100, 1000)
prob100.innerHTML = timePerformance(100, 100, 1000)
prob10000.innerHTML = timePerformance(10000, 100, 1000)

var wyniki = [prob10,prob100,prob10000]


function formatowanie() { // siec->wylacz pamiec robocza 
    time0 = performance.now()
    iloscPowtorzen = 10
    for(var j = 0;j<iloscPowtorzen;j++){// zmieniac ilosc powtorzen na 10,100 i 10000
        var table = document.createElement('table')
        table.style.border = '1px solid black'
        for (var i = 0; i < 3; i++) {
            var tr = table.insertRow()
            var td = tr.insertCell()
            td.appendChild(document.createTextNode(wyniki[i].innerText))
            td.style.border = '1px solid black'
    
        }
        document.getElementById("formatowanie").appendChild(table)
    }
    
    time1 = performance.now()
}

formatowanie()
document.querySelector("#czasFormatowania").innerHTML = time1 - time0 + ' milisekund'

//sortowanie babelkowe https://eduinf.waw.pl/inf/alg/003_sort/m0004.php


