# Angular & Typescript
> GitHub Clone
> git clone https://github.com/hamitmizrak/offline-techcareer-angular-app

- ng serve --port 9999 --open
- npm run tsc_nodemon

[Angular GitHub](https://github.com/hamitmizrak/offline-techcareer-angular-app) 

## Git Kurulumu
https://www.git-scm.com/download/win
git config --global user.name "Hamit Mizrak"
git config --global user.email "hamitmizrak@gmail.com"

---

##  Node JS 
https://nodejs.org/en/download/package-manager

---
##  Version
node -v
npm -v 
java --version
git --version
git -v
ng v
ng version 
ng --help



--
##  Npm Komutları
npm init
npm init -y
npm list 
npm list -g 
npm list -g  --depth=0

npm root 
npm root -g

npm config list -l

npm install 
npm i
npm install --save bootstrap
npm uninstall --save bootstrap
npm update bootstrap

##  Npm Clean
npm uninstall -g @angular/cli
npm cache clean

## Angular İçin Öncelikle Kurmamız gerekenler
npm install -g typescript
npm i typescript

npm install -g @angular/cli
npm i @angular/cli

npm i  bootstrap
npm i  fontawesome
npm i -g nodemon
npm i alertifyjs

## Angular Kurulumu
```sh
ng new tech-angular-app
cd tech-angular-app
ng serve 
ng serve --open 

ng serve --port 9999 --open
http://localhost:9999
curl localhost:9999
```

## Angular CLI Hazır Bileşenler
ng generate component loginComponent 
ng g v login
ng g pipe loginPipeline
ng g service loginService
ng g module loginModule
ng g directive loginDirective
ng g interface loginInterface
ng g enum loginEnum

## NPM install Ekle(3.libraries)
npm i font-awesome 
npm i bootstrap
npm i jquery
npm i -g nodemon
npm i alertifyjs

## 3.Parti Uygulamalar Ekle
### Font-awesome
```sh	
Terminal => npm i font-awesome 
angular.json => 
 "styles": [
              "src/styles.css",
              "node_modules/font-awesome/css/font-awesome.css"
            ],

 <i class="fa fa-car"></i>
```

### Bootstrap
```sh	
Terminal => npm i bootstrap
angular.json => 
 "styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],

 "scripts": [
              "node_modules/bootstrap/dist/js/bootstrap.min.js",
              "node_modules/jquery/dist/css/jquery.min.js"
            ],

<div class="alert alert-primary" role="alert">Bootstrap Çalıştı</div>
```

### jQuery
```sh	
Terminal => npm i jquery
angular.json => 
 "scripts": [
              "node_modules/jquery/dist/css/jquery.min.js"
            ],

<div class="alert alert-primary" role="alert">Bootstrap Çalıştı</div>
```

### Json Server
```sh	
Terminal => 
npm i -g json-server
json-server --watch --port 4444 blog.json 
ng serve --port 9999 --open
```

### Blog Service
```sh	
/src/services
ng g s blogPage
```


### AlertifyJS
```sh	
Terminal => npm i alertifyjs
/services/ => ng g service AlertifyMessage


angular.json => 
    "styles": [
              "src/styles.css",
              "node_modules/font-awesome/css/font-awesome.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "node_modules/alertifyjs/build/css/alertify.min.css",
              "node_modules/alertifyjs/build/css/themes/bootstrap.min.css"
            ],
            "scripts": [
              "node_modules/bootstrap/dist/js/bootstrap.min.js",
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/alertifyjs/build/alertify.min.js"
            ],
```

### typescript
- Typescript bir değişiklik olduğunda otomatik olarak derleme yapsın
```sh 
npm i -g nodemon
1:YOL
tsc TypeScriptTutorial.ts
tsc --watch TypeScriptTutorial.ts
nodemon -q typescript/TypeScriptTutorial.js

2.YOL (package.json)
"tsc_nodemon": " tsc --watch nodemon typescript/TypeScriptTutorial.ts && nodemon -q typescript/TypeScriptTutorial.js"
npm run tsc_nodemon
```

    
--- 
# Project Step
## Angular CLI Hazır Bileşenler
ng generate component loginComponent 
ng g c blogHeader 
ng g v login
ng g pipe loginPipeline
ng g service loginService
ng g module loginModule
ng g directive loginDirective
ng g interface loginInterface
ng g enum loginEnum


cd ./src
ng g c blogNavbar
ng g c blogHeader
ng g c blogMain
ng g c blogContent
ng g c blogFooter
ng g c blogAbout
ng g c blogPage
ng generate pipe searchBlogFilter
ng g p searchBlogFilter
ng g c formPage


- ng serve --port 9999 --open
- npm run tsc_nodemon

-- styles.css
angular.json
"src/styles.css",

---

## Hatalar Ve çözümü
- This syntax requires an imported helper but module 'tslib' cannot be found.

- npm i tslib --save-dev
npm i


######
# TechAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
