# bridgeperformance.nl — Astro

Compacte site voor Bridge Performance: expert coaching (★★★★/★★★★★) en inhuur als bridgeprofessional.
Cursussen, leerlijnen, Weektraining, themalessen en clinics staan voortaan op bridgeacademie.nl.

## Lokaal draaien

```
npm install
npm run dev
```

## Bouwen

```
npm run build
npm run preview
```

## Deployen (Vercel)

1. Push deze map naar een nieuwe GitHub-repository (zie stappen in de chat met Claude).
2. Log in op vercel.com met GitHub, klik "Add New… → Project", kies de repository.
3. Vercel herkent Astro automatisch. Klik "Deploy".
4. Koppel daarna het domein bridgeperformance.nl bij Project → Settings → Domains.

## Nog open (niet in deze versie)

- **Contactformulier verstuurt nog geen echte mail.** Het opent nu het eigen e-mailprogramma van de bezoeker met alles vooringevuld (werkt altijd, maar is niet ideaal op mobiel/webmail). Voor een formulier dat rechtstreeks mailt zonder dat de bezoeker iets hoeft te doen: een gratis dienst zoals Web3Forms of Formspree koppelen, of een eigen Vercel-functie bouwen.
- **Juridische pagina's** (algemene voorwaarden, privacyverklaring, herroepingsrecht) zijn aangepast aan het nieuwe, kleinere aanbod (alleen coaching + inhuur, geen losse digitale producten of clinics meer op deze site) — nog niet juridisch gecheckt.
