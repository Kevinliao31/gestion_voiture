# GestionVoitures

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Questions

1. Quelle est la différence entre AngularJS et Angular ?
AngularJS (v1) est basé sur JavaScript et utilise le concept de scope et de controllers, tandis qu’Angular (v2+) est basé sur TypeScript, adopte une architecture composantielle et offre de meilleures performances et modularité.

2. Quelle est la nouveauté apportée depuis Angular 14 et confirmée en Angular 19 ?
Depuis Angular 14, des nouveautés comme les Standalone Components (qui permettent de ne plus utiliser NgModule), les Typed Forms (validation plus stricte des formulaires) et l’API Signal (introduite en Angular 16 pour optimiser le changement d’état) ont été ajoutées et confirmées en Angular 19.

3. Lister les étapes nécessaires à l’installation et/ou configuration d’Angular pour commencer le développement sur son PC.
Installer Node.js puis Angular CLI avec la commande npm install -g @angular/cli. Créer un nouveau projet avec ng new nom-du-projet, se déplacer dans le dossier du projet avec cd nom-du-projet, puis démarrer le serveur de développement avec ng serve.

4. C’est quoi un composant Angular ?
Un composant Angular est une unité de base de l’interface utilisateur qui regroupe un template HTML, une logique TypeScript et un style CSS. Chaque application Angular est composée de plusieurs composants interconnectés.

5. C’est quoi une directive Angular ? Donnez quelques exemples et dites à quoi elles servent.
Une directive Angular est un élément qui permet d’ajouter du comportement aux composants ou aux éléments HTML. On distingue trois types de directives :

Structurales (*ngIf, *ngFor, *ngSwitch) qui modifient le DOM.
Attributs (ngClass, ngStyle) qui changent l’apparence ou le comportement d’un élément.
Personnalisées qui permettent d’ajouter des comportements spécifiques aux éléments HTML.

6. C’est quoi un service Angular ?
Un service Angular est une classe injectable qui permet de centraliser la logique métier et de partager des données entre différents composants. Il est souvent utilisé pour la communication avec des API ou la gestion de l’état de l’application.

7. Que fait la fonction ngOnInit ?
La fonction ngOnInit est un hook du cycle de vie d’un composant Angular qui est exécuté après l’initialisation du composant. Elle est principalement utilisée pour effectuer des opérations comme la récupération de données ou l’initialisation de variables.

8. Quels sont les fichiers principaux générés dans un projet Angular ?
Un projet Angular génère plusieurs fichiers clés :

src/main.ts : point d’entrée de l’application.
src/index.html : fichier HTML principal.
src/app/app.module.ts : module racine où sont déclarés les composants et services.
src/app/app.component.ts/html/css : composant principal de l’application.
angular.json : fichier de configuration du projet.
package.json : liste des dépendances et scripts npm.

9. C’est quoi le mécanisme de routage en Angular et comment le met-on en œuvre ?
Le routage en Angular permet de naviguer entre différentes vues de l’application sans recharger la page. Pour l’implémenter, il faut :

Importer RouterModule dans app.module.ts.
Définir les routes dans un tableau const routes: Routes = [...].
Ajouter <router-outlet></router-outlet> dans le template du composant principal.
Utiliser routerLink pour la navigation (<a routerLink="/chemin">).

10. C’est quoi RxJS ?
RxJS (Reactive Extensions for JavaScript) est une bibliothèque permettant de gérer la programmation asynchrone et événementielle via des Observables. Elle est utilisée en Angular pour la gestion des requêtes HTTP, des événements utilisateur et des flux de données.

11. Expliquer brièvement la notion d’Observable et comment l’utiliser.
Un Observable est un objet qui émet des données de manière asynchrone. Il est utilisé pour écouter et réagir à des événements. 

Exemple d'utilisation avec Angular : 

import { Observable } from 'rxjs';

const observable = new Observable(observer => {
  observer.next('Donnée 1');
  observer.next('Donnée 2');
  observer.complete();
});

observable.subscribe(data => console.log(data));

12. Différence entre un Subject et un BehaviorSubject.
Un Subject est un Observable qui permet d’envoyer des données à plusieurs abonnés en temps réel. Il n’émet que les nouvelles valeurs après l’abonnement.
Un BehaviorSubject est similaire, mais il stocke et envoie la dernière valeur émise dès qu’un nouvel abonné s’y connecte.

13. À quoi sert le fichier angular.json ?
Le fichier angular.json configure le projet Angular, incluant les paramètres du build, les chemins des fichiers sources, les styles et scripts globaux, ainsi que les options du serveur de développement.

14. Explication des commandes Angular et JSON Server.
ng serve : Démarre le serveur de développement Angular.
ng serve --port 4500 : Démarre le serveur sur le port 4500 au lieu du port par défaut (4200).
ng g c mon-composant : Génère un nouveau composant Angular.
ng g class MaClasse : Crée une nouvelle classe TypeScript.
ng g service MonService : Génère un service Angular.
ng g guard AuthGuard : Crée un guard (protection des routes).
ng new GestionVols : Crée un nouveau projet Angular nommé "GestionVols".
json-server --watch produit.json --port 3500 : Démarre un serveur API REST mocké avec les données du fichier produit.json sur le port 3500.

15. Comment appelle-t-on cet élément @Component et quels sont ses attributs ?
L’élément @Component est un décorateur en Angular qui permet de définir un composant. Il prend un objet de configuration avec plusieurs attributs, dont :

selector : définit le nom de la balise HTML utilisée pour insérer le composant.
templateUrl / template : lien vers le fichier HTML ou code HTML en ligne.
styleUrls / styles : lien vers les fichiers CSS ou styles en ligne.
providers : permet d’injecter des services spécifiques au composant.

16. Expliquer le mécanisme de composant enfant et composant parent
En Angular, un composant parent peut contenir un composant enfant pour organiser l’interface utilisateur. La communication entre eux se fait via :

Les propriétés d’entrée (@Input) : Permettent au parent de transmettre des données à l’enfant.
Les événements (@Output) : Permettent à l’enfant d’envoyer des données au parent via EventEmitter.