Zcela funkční první verze klikačky bez závěrečného refaktorování. Pro vytvoření nového zakupitelného dělníka, který produkuje sušenky, včetně daného HTML, stačí napsat:

vytvorPracovnika(new Pracovnik(id, jmeno, url obrazku, kolik vyrobí za sekundu, cena, navyšení ceny při koupi));
např. vytvorPracovnika(new Pracovnik(0, "Makač", "obrazky/pracovnik1.png", 1, 10, 2));
