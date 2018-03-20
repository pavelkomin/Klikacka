class CookieKlikacka {   
    constructor () {
        this.IO = new CookieKlikackaHTML(); 
        
        this.pocetSusenek = 0;
        this.pracovnici = [];             
    }
    
    set pocetSusenek(pocet) {
        this.pocetSusenekPromenna = pocet;
        this.IO.updatePSusenek(pocet);
    }
    
    get pocetSusenek() {
        return this.pocetSusenekPromenna;
    }

    makeCookies() {
        this.pocetSusenek += this.susenekZaSekundu();        
    }

    clickSusenky() {
        this.pocetSusenek = this.pocetSusenek + 1;
    }

    kupPracovnika(id) {
        let pracovnik = this.pracovnici[id];

        if (this.pocetSusenek >= pracovnik.cena) {
            this.pocetSusenek -= pracovnik.cena;
            pracovnik.pocet += 1;
            pracovnik.cena += pracovnik.zvyseniCeny;

            this.IO.updateHTML(this.pracovnici[id]);
            this.IO.updateSusenekZaSekundu(this.susenekZaSekundu());
        } 
    }

    susenekZaSekundu() {
        let susenek = 0;

        for (let i = 0; i < this.pracovnici.length; i++) {
            if (this.pracovnici[i] !== undefined) {
                susenek += this.pracovnici[i].vyroba * this.pracovnici[i].pocet;
            }      
        }

        return susenek;
    }

    vytvorPracovnika(pracovnik) {
        this.pracovnici[pracovnik.id] = pracovnik;

        this.IO.vytvorPracovnikaHTML(pracovnik, this);
    }    
}

function CookieKlikackaPracovnik(id, jmeno, obrazek, vyroba, cena, zvyseniCeny) {
    this.id = id;
    this.jmeno = jmeno;
    this.obrazek = obrazek;
    this.vyroba = vyroba;
    this.cena = cena;
    this.zvyseniCeny = zvyseniCeny;
    this.pocet = 0;
} 


  


