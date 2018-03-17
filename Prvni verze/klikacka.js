let pocetSusenek = 0;

let pracovnici = [];

function Pracovnik(id, jmeno, obrazek, vyroba, cena, zvyseniCeny) {
    this.id = id;
    this.jmeno = jmeno;
    this.obrazek = obrazek;
    this.vyroba = vyroba;
    this.cena = cena;
    this.zvyseniCeny = zvyseniCeny;
    this.pocet = 0;
}
  
$(document).ready( function() {
    updatePSusenek();
    $("#cookie").click(clickSusenky);
    
    vytvorPracovnika(new Pracovnik(0, "Makač", "obrazky/pracovnik1.png", 1, 10, 2));
    vytvorPracovnika(new Pracovnik(1, "Tejtek", "obrazky/pracovnik2.png", 10, 200, 20));
    vytvorPracovnika(new Pracovnik(2, "Hubert", "obrazky/pracovnik3.png", 100, 3000, 500));
    vytvorPracovnika(new Pracovnik(3, "Bagr", "obrazky/pracovnik4.png", 2000, 50000, 10000));
    vytvorPracovnika(new Pracovnik(4, "Jeřáb", "obrazky/pracovnik5.png", 20000, 500000, 100000));
    
    updateSusenekZaSekundu();
    
    setInterval(function (){
        makeCookies();
    }, 2000);
});

function makeCookies() {
    pocetSusenek += susenekZaSekundu();
    updatePSusenek();
}

function clickSusenky() {
    pocetSusenek += 1;
    updatePSusenek();
}

function updatePSusenek() {
    $("#pocet-susenek").text(pocetSusenek + " sušenek");
}

function kupPracovnika(id) {
    let pracovnik = pracovnici[id];
    
    if (pocetSusenek >= pracovnik.cena) {
        pocetSusenek -= pracovnik.cena;
        updatePSusenek();
        pracovnik.pocet += 1;
        pracovnik.cena += pracovnik.zvyseniCeny;

        updateHTML(id);
        updateSusenekZaSekundu();
    } 
}

function susenekZaSekundu() {
    let susenek = 0;
    
    for (let i = 0; i < pracovnici.length; i++) {
        if (pracovnici[i] !== undefined) {
            susenek += pracovnici[i].vyroba * pracovnici[i].pocet;
        }      
    }
    
    return susenek;
}

function vytvorPracovnika(pracovnik) {
    pracovnici[pracovnik.id] = pracovnik;
    
    vytvorPracovnikaHTML(pracovnik);
}

function vytvorPracovnikaHTML(pracovnik) {
    let novyPracovnik =
            $("<div>")
            .addClass("pracovnik")
            .attr("id", "pracovnik-C" + pracovnik.id);

    let nadpis = $("<h2>")
                .addClass("pracovnik")
                .text(pracovnik.jmeno);
    novyPracovnik.append(nadpis);
    
    let obrazekDiv = $("<div>")
            .addClass("pracovnik-obrazek")
            .click(function() { kupPracovnika(pracovnik.id); });
    let img = $("<img>").attr("src", pracovnik.obrazek);
    
    obrazekDiv.append(img);        
    novyPracovnik.append(obrazekDiv);
    
    novyPracovnik.append($("<p>").addClass("pracovnik-za-sekundu"));
    
    let pocet = createP("pracovnik-pocet", 0);
    novyPracovnik.append(pocet);
    
    let cenaElem = createP("pracovnik-cena", "Cena: ");
    let span =  $("<span>");
    span.addClass("pracovnik-cena-cislo");
    span.text(pracovnik.cena);
    cenaElem.append(span);
    novyPracovnik.append(cenaElem);   
    
    $("#produkce").append(novyPracovnik);
    
    updateHTML(pracovnik.id);
}

function updateHTML(id) {
    $("#pracovnik-C" + id + " p.pracovnik-za-sekundu").text("Vyrobí " + pracovnici[id].vyroba +  " sušenek za sekundu");
    $("#pracovnik-C" + id + " p.pracovnik-pocet").text(pracovnici[id].pocet);
    $("#pracovnik-C" + id + " .pracovnik-cena-cislo").text(pracovnici[id].cena);
}

function updateSusenekZaSekundu() {
    $("#susenek-za-sekundu").text(susenekZaSekundu() + " sušenek za sekundu");
}

function createP(className, text) {
    let p = $("<p>");
    p.addClass(className);
    p.text(text);
    return p;
}