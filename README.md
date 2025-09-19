
# Your Tribe for Life Profile Card

Redesign je visitekaartje op basis van een headless CMS en een framework.

De instructie vind je in: [INSTRUCTIONS](https://github.com/fdnd-task/your-tribe-for-life-profile-card/blob/main/docs/INSTRUCTIONS.md)


## Informatie voor installatie

If you're seeing this, you've probably already done this step. Congrats!

create a new project in the current directory

`npx sv create`

create a new project in my-app

`npx sv create my-app`

### Developing

Once you've created a project and installed dependencies with npm install (or pnpm install or yarn), start a development server:

`npm run dev`

or start the server and open the app in a new browser tab

`npm run dev -- --open`

### Building

To create a production version of your app: `npm run build`

You can preview the production build with `npm run preview`.

To deploy your app, you may need to install an `adapter` for your target environment.

## Omschrijving van het project

Het project betreft de profile card van jaar 2 cohort 2025/2026. Dit project is gebouwd met Sveltekit, NodeJS en Directus. De profile card laat mijn informatie zien. Er wordt data opgehaald uit Directus en laten zien aan de hand van NodeJS.  

## Ontwerpkeuzes uitleggen
Ik ben voor een slick en clean design gegaan zonder al te veel kleur gebruik. Ik vond het een leuk idee om een strakke UI te creeren, iets heel anders dan hoe mijn vorige profile card eruit zag. Het design is mobile first gebouwd en heeft een ander design op desktop. Mijn idee was om een ander design op desktop te handhaven omdat ik met de @media queries wilde spelen. Ook wilde ik nog animaties op de buttons zetten alleen heb ik hier geen tijd meer voor gehad. Door het design op een andere manier terug te laten komen op de desktop versie krijgt dit weer een nieuw gezicht en feel.

### Mobiel ontwerp
<img width="356" height="544" alt="Scherm­afbeelding 2025-09-13 om 12 28 32" src="https://github.com/user-attachments/assets/de4113c3-4c2a-48aa-9d7f-a45b612c1097" />

### Desktop ontwerp
<img width="865" height="532" alt="Scherm­afbeelding 2025-09-13 om 12 28 39" src="https://github.com/user-attachments/assets/ad4c2d07-4069-4689-b363-d38fdcc1cda3" />

### Figma Design:

https://www.figma.com/design/7ZWYGI0rsxWrkQ7VXewi3z/Profile-card?node-id=0-1&t=2Cnai61o8E5racY5-1

Uiteindelijk is het nabouwen van het design goed gelukt en ben ik erg tevreden met het resultaat.

### Mobiele versie
<img width="314" height="689" alt="Scherm­afbeelding 2025-09-19 om 12 09 50" src="https://github.com/user-attachments/assets/47ddfae6-dc86-4ecd-b6ef-ca76541655bb" />


### Desktop versie
<img width="1440" height="812" alt="Scherm­afbeelding 2025-09-19 om 12 09 59" src="https://github.com/user-attachments/assets/b3552cdc-aec4-4311-889c-e24a1ddf76e0" />

## Functionaliteiten uitleg

De profile card is gemaakt om meer informatie te vinden over mij als student van FDND. Er zijn verder geen echte functionaliteiten die uitgevoerd kunnen worden op de profile card. Behalve dat er op de buttons gehoverd kan worden. Wel worden de "Find me on" buttons gebruikt om naar de desbetreffende sociale media te linken. Ik vond het verder niet belangrijk om de andere buttons een functionaliteit te geven, maar hier ga ik nog wel mee verder aangezien ik nog wel wat leuke ideeen heb voor mijn profile card in de toekomst.


## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


