# Voorbeelden json-server

In de map `json-server` vind je een `db.json` terug met JSON-data, dit stelt een database voor.
De dependency `json-server` stelt ons in staat om deze JSON-data aan te bieden als een RESTful API.

In de map `vanilla` vind je een voorbeeld hoe je de data kan ophalen van de API in vanilla JavaScript.

In de map `vue` vind je een voorbeeld hoe je de data kan ophalen van de API in een Vue-applicatie.

## json-server opstarten

Om de JSON-server op te starten, voer je volgend commando uit in de map `json-server`:

```bash
npm run dev
```

Merk op: als je dit in een eigen project wil gebruiken, moet je de dependency `json-server` installeren, een `db.json` toevoegen met de gewenste data en een script toevoegen in je `package.json` om de JSON-server op te starten, bekijk het `dev`-script in de `package.json` van de map `json-server` voor een voorbeeld.

## vanilla voorbeeld

Om het vanilla voorbeeld te bekijken, open je het bestand `index.html` in de map `vanilla` in je browser.

In VSCode kan je dit doen door rechtermuisklik te doen op `index.html` en te kiezen voor `Open with Live Server`. Hiervoor moet je wel de extensie `Live Server` installeren.

In WebStorm kan je dit doen door rechtermuisklik te doen op `index.html` en te kiezen voor `Run index.html`.

## Vue voorbeeld

Bekijk hiervoor de README.md in de map `vue`.
