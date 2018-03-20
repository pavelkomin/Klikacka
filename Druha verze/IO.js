class CookieKlikackaHTML {
    
    updatePSusenek(pocetSusenek) {
        $("#pocet-susenek").text(pocetSusenek + " sušenek");
    }

    vytvorPracovnikaHTML(pracovnik, self) {
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
                .click(function() { self.kupPracovnika(pracovnik.id); });
        let img = $("<img>").attr("src", pracovnik.obrazek);

        obrazekDiv.append(img);        
        novyPracovnik.append(obrazekDiv);

        novyPracovnik.append($("<p>").addClass("pracovnik-za-sekundu"));

        let pocet = this.createP("pracovnik-pocet", 0);
        novyPracovnik.append(pocet);

        let cenaElem = this.createP("pracovnik-cena", "Cena: ");
        let span =  $("<span>");
        span.addClass("pracovnik-cena-cislo");
        span.text(pracovnik.cena);
        cenaElem.append(span);
        novyPracovnik.append(cenaElem);   

        $("#produkce").append(novyPracovnik);

        this.updateHTML(pracovnik);
    }

    updateHTML(pracovnik) {
        $("#pracovnik-C" + pracovnik.id + " p.pracovnik-za-sekundu").text("Vyrobí " + pracovnik.vyroba +  " sušenek za sekundu");
        $("#pracovnik-C" + pracovnik.id + " p.pracovnik-pocet").text(pracovnik.pocet);
        $("#pracovnik-C" + pracovnik.id + " .pracovnik-cena-cislo").text(pracovnik.cena);
    }

    updateSusenekZaSekundu(susenekZaSekundu) {
        $("#susenek-za-sekundu").text(susenekZaSekundu + " sušenek za sekundu");
    }

    createP(className, text) {
        let p = $("<p>");
        p.addClass(className);
        p.text(text);
        return p;
    } 
}
