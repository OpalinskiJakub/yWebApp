# YWebApp

Zagrożenia:
------------
<br />
1. Użytkownik próbuje stworzyć konto o takiej samej nazwie jak konto już istniejące.<br />
2.Użytkownik poniżej (tutaj podać jaki wiek) próbuje dokonać rejestracji.<br />
3.Użytkownik próbuje użyć nieobsługiwanych znaków przy rejestracji konta.<br />

4. Próba dodania postu bez treści.<br />
5. Próba usunięcia nie swojego komentarzu/posta.<br />
6. Próba zarejestrowania się poprzez serwis nie obsługiwany przez witrynę.<br />

7. Próba stworzenia konta z hasłem, które nie jest wystarczająco skomplikowane.
8. Próba polubienia/skomentowania posta, który nie jest już dostępny.
9. Próba wyboru nieobsługiwanej wersji językowej.
10. Próba wejścia na profil użytkownika, który już nie istnieje.
11. Korzystanie z serwisu bez potwierdzonego adresu e-mail.
12. Uzytkownik proboje dostac sie na endpoint bez autoryzacji.

7. Próba stworzenia konta z hasłem, które nie jest wystarczająco skomplikowane.<br />
8. Próba polubienia/skomentowania posta, który nie jest już dostępny.<br />
9. Próba wyboru nieobsługiwanej wersji językowej portalu.<br />
10. Próba wejścia na profil użytkownika, który już nie istnieje.<br />
11. Korzystanie z serwisu bez potwierdzonego adresu e-mail.<br />
12. Próba natychmiastowego usunięcia konta z serwisu.<br />
13. Próba publikacji posta/komentarza o zbyt dużej liczbie znaków.<br />
14. Próba stworzenia konta bez podania adresu e-mail/nazwy użytkownika/hasła.<br />
15. Proba dostania sie na endpoint bez autoryzacji.

Na next time
Przypadki uźycia (diagram UML)
Wymagania (cele) aplikacji (np. możliwość rejestracji)

--------------------------
Przykład opisu przypadku użycia jakiejś aplikacji z IO z Palaczem
--------------------------
Przypadek użycia Sprawdź ilość dostępnych wejść na karcie magnetycznej
Główny aktor: klient ośrodka narciarskiego
Zakres/system: System ośrodka narciarskiego
Poziom: cel użytkownika
Scenariusz podstawowy:
1. Klient wsuwa oficjalną kartę wejściową do automatu przeznaczonego do
sprawdzania informacji o karcie.
2. Klient na ekranie dotykowym wybiera z menu głównego opcje czytaj informacje z
karty.
3. Automat odczytuje dane z karty i po zakończeniu wyświetla gotowość do dalszego
działania.
4. Klient wybiera opcje sprawdź ilość dostępnych wejść.
5. System automatu ukazuje klientowi konkretną liczbę wejść wraz z opisem.
6. Klient wybiera opcję zakończenia sprawdzania informacji poprzez wybór opcji
Zakończ i wyjdź.
7. Automat wysuwa kartę.
Rozszerzenia scenariusza:
 1a. Klient wsunął kartę złą stroną:
1a.1 Automat na ekranie dotykowym wyświetla informacje o złym wprowadzeniu
karty oraz wyświetla krótką animację poprawnego wprowadzania karty.
 2a. (4a. 6a.) Ekran automatu nie reaguje na polecenia (lub wydaje się być wyłączony)
2a.1 Klient naciska fizyczny przycisk Połącz z pomocą.
 2a.1.2 Przycisk nie działa.
 2a.1.2 Klient ma możliwość zadzwonienia do pomocy technicznej używając
numeru wskazanego na urządzeniu.
2a.2 Klient oczekuje na połączenie z konsultantem pomocy technicznej.
2a.3 Klient postępuje wraz z poleceniami pomocy technicznej.
 3a. Automat nie odczytuje danych z karty.
3a.1 Klient ma możliwość wyboru zakończenia działań. (patrz pkt 6)
3a.2 Automat wysuwa kartę.
3a.3 Klient powtarza operację lub kontaktuje się z pomocą techniczną (patrz pkt
2a.1-2a.3)
 5a. Automat ukazuje błędne lub niepełne informacje.
5a.1 Klient kontaktuje się z pomocą. (patrz pkt 2a.1-2a.3)
 7a. Automat nie wysuwa karty.
7a.1 Klient kontaktuje się z pomocą. (patrz pkt 2a.1-2a.3)
