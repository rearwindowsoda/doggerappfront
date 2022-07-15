# Zaczynamy zabawę z aplikacją Dogger

Aplikacja Dogger służy właścicielom psów do dzielenia się zdjęciami zawierającymi krótki opis swoich pociech z innymi. 

Każdemu zalogowanemu użytkownikowi przysługuje jeden głos. W każdej chwili może on zmienić swoje zdanie i zagłosować na zdjęcie innego pieska. 

W czasie rzeczywistym przeliczane są głosy na najlepsze zdjęcia. Top 10 najlepszych postów wyświetla się pod zakładką "Top 10 Dogs".

# Instalacja
1. Potrzebujesz dostęp do backendu aplikacji, znajdziesz go pod tym adresem

[DoggerAppBackend](https://https://github.com/rearwindowsoda/doggerapp)

2. Z racji tego, że aplikacja nie przechowuje żadnych zdjęć lokalnie (tylko tymczasowo), potrzebujesz dostępu do API Imgur. Imgur posiada darmowe api. 

[Więcej informacji tutaj](https://apidocs.imgur.com/)


3. Musisz edytować wszysktie przykładowe pliki konfiguracyjne znajdujące się na backendzie:
 - Folder src > config > cors > cors.example.ts - tutaj wpisujesz adres, z którego twój frontend będzie wysyłał zapytania.
 - Folder src > db > config.example.ts - uzupełnij to danymi dostępowymi do API Imgur.
 - Folder jwt > token-secret.example > Wygeneruj sekretną sól, która posłuży do autoryzowania użytkowników. Polecam skorzystać z, wbudowanego w Node.js, modułu Crypto i wygenerować sobie długą losową sól.
 - Zmień nasłuchiwanie w pliku app.ts na wszystkie interfejsy sieciowe.
 - W folderze utils > data-source.example.ts wpisz poprawne dane do połączenia się z twoją bazą MySQL.
 - Zbuduj aplikację i umieść ją na serwerze! 
 - Testuj aplikacje przygotowanymi przeze mnie kolekcjami do Insomnia (znajdziesz je w tym repo w root)

4. Musisz edytować wszystkie przykładowe pliki konfiguracyjne znajdujące się na frontendzie:
- Tutaj nie ma tego za dużo, edytuj plik axios.ts znajdujący się w folderze interceptors. Wpisz tam baseUrl twojego API.
- Zbuduj aplikację i umieść ją na serwerze.
- 

## Uwaga!

### Nie udostępniaj nikomu danych konfiguracyjnych!


## React Available Scripts



### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
