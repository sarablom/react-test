/*

* *** Olika former av test: ***
* Komponenttest: testa en komponent i taget, hittar ca 10-50% av felen - kan sätta igång och testa tidigt, vilket kan spara tid längre fram i projektet
* Integrationstest: Testar två eller fler komponenter i taget
* Systemtest: Testar systemet som helhet, hittar upptill 85% av felen
* Acceptanstest: Användare och kund testar

* *** BDD - Behavoir driven development***

Utgår från TSS, men är ett mer specifikt sätt att arbeta med test. man företar att arbeta med naturligt spårk, dvs engelska itsället för JS för att beskriva scenarion (user stories).
Målet är att det ska vara lätt att läsa och hänga med i testkoden.
Jest cucumber - npm-paket

Feature: Logging in
    Scenario: Entering a correct password
    Given I have previously created a password
    When I enter my password correctly
    Then I should be granted access

* *** Praktiska testtyper: ***

*Smoke test - kollar att det inte finns några uppenbara fel i koden. Lätta att göra, men inte så användbara
*Black box - testa som som man inte vet något om koden - testa utifrån designskiss som utgår från kravspec och user stories
*White box - testa med kunskap om koden - man använder sin kunskap om hur koden ser ut när man skriver testfallen

testing-library.com
Core API - queries

https://github.com/testing-library/jest-dom
*/