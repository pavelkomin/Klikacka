$(document).ready( function() {
    let game = new CookieKlikacka();
    $("#cookie").click(function() {game.clickSusenky(); } );
    
    game.vytvorPracovnika(new CookieKlikackaPracovnik(0, "Makač", "obrazky/pracovnik1.png", 1, 10, 2));
    game.vytvorPracovnika(new CookieKlikackaPracovnik(1, "Tejtek", "obrazky/pracovnik2.png", 10, 200, 20));
    game.vytvorPracovnika(new CookieKlikackaPracovnik(2, "Hubert", "obrazky/pracovnik3.png", 100, 3000, 500));
    game.vytvorPracovnika(new CookieKlikackaPracovnik(3, "Bagr", "obrazky/pracovnik4.png", 2000, 50000, 10000));
    game.vytvorPracovnika(new CookieKlikackaPracovnik(4, "Jeřáb", "obrazky/pracovnik5.png", 20000, 500000, 100000));
    
    game.IO.updateSusenekZaSekundu(game.susenekZaSekundu());
    
    setInterval(function (){
        game.makeCookies();
    }, 2000);
});