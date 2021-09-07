# Oliver Lunch App

Deze repository bevat de broncode voor een app waarmee de collega's van Oliver IT hun lunch kunnen bestellen... tenminste, als het ook een echte app was geweest 😏

## Ontwikkelen

Om de aan deze app te werken kun je de repo [gebruiken als template](https://github.com/oliverit/oliver-lunch/generate) voor een repo op je eigen GitHub account en deze vanuit daar clonen.

De repository maakt gebruik van [Yarn](https://classic.yarnpkg.com) voor de dependencies.

Het `yarn start` script start de app lokaal op in de browser op de url http://localhost:3000.

Het `yarn build` script maakt een productie build van de app. Dit commando wordt gebruikt door bijvoorbeeld [Netlify](https://www.netlify.com) als je daar de repo laat deployen.

Om de code die je schrijft te controleren wordt er gebruik gemaakt van [ESLint](https://eslint.org) en [Prettier](https://prettier.io). Zorg ervoor dat je je code editor (bijv. [VSCode](https://code.visualstudio.com)) dusdanig configureert dat deze de foutmeldingen van ESLint zichtbaar maakt, en de regels van Prettier (automatisch) kan toepassen.

## Architectuur

De app is gebouwd op basis van [Create React App](https://create-react-app.dev) en maakt gebruik van [Redux Toolkit](https://redux-toolkit.js.org) voor state management.

Voor de user interface wordt er gebruik gemaakt van [Material-UI](https://material-ui.com) en voor de navigatie gebruiken we [React Router](https://reactrouter.com/web/guides/quick-start).

## Opdracht

Onze collega's hebben twee problemen gemeld:

- De prijslijst ziet er niet netjes uit. Is er hier wel gebruik gemaakt van de List component van Material-UI? Het lijkt er op van niet!
- De prijzen zijn niet in Euro's en er worden punten in plaats van komma's gebruikt voor de decimalen.

Daarnaast zouden ze ook graag nog de volgende nieuwe functionaliteit zien:

- Wanneer je gaat bestellen staan er altijd 3 bestelregels en je kan deze niet verwijderen of toevoegen. Dat is erg onhandig, je zou gewoon moeten beginnen met 1 regel en dan zelf regels moeten kunnen toevoegen of verwijderen.

Wij zouden het geweldig vinden als je voor ons deze problemen kan oplossen. Veel succes!! 👌
