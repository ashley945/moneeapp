# Moneeapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version
Angular CLI: 11.2.8
Node: 12.18.2
OS: win32 x64
Angular: 11.2.9

`npm install` 후 실행하시기 바랍니다.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Developer's Remarks
기본 node.js로 프론트엔드만 구동하도록 설계하였습니다. 초기화면으로 /login페이지로 설정하였으며 따로 DB와 연동하지는 않았습니다.
URL경로가 /login일때는 login component를, /main일때는 main component를 보여줍니다.
이 외의 잘못된 URL을 사용했을 때는 login 페이지로 돌려보냅니다.
UI디자인으로는 ANT DESIGN의 ng-zorro 패키지를 사용했습니다.


