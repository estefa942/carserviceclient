# CarServiceClient

## Componentes:
Para este proyecto se añadieron los componentes:
-Home: Es la pantalla que se carga por defecto en la aplicación, y permite escoger entre las 3 listas que se tienen para visualizar: Car list, Owner List y Car For Owners List.
-Owner list: Lista todos los propietarios existentes y también permite eliminar varios propietarios a la vez.
-Owner-edit: Permite editar la información de un propietario o guardar uno neuvo.
-Car-for-owner-list: Permite listar los carros existentes que poseen dueño.

## Servicios:
En el servicio de Owner se encuentra los siguientes métodos:
-getOwner(dni): Obtiene el owner identificado por el dni que ingresa por argumento. Ejecuta el método get de HTTP.
-createOwner(owner): Recibe como parámetro el nuevo owner. Ejecuta el método post de HTTP.
-deleteOwner(href): Recibe como parámetro el href que identifica al owner. Ejecuta el método delete de HTTP.
-updateOwner(href, owner): Recibe como parámetros un href para identificar el owner que deseamos modificar por el segundo parámetro. Ejecuta el método put de HTTP.

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
