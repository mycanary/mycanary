# Mycanary

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.

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

Update Angular CLI manually

```bash
[kushal@april87 mycanary]$ time yarn
yarn install v1.22.10
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@2.3.1: The platform "linux" is incompatible with this module.
info "fsevents@2.3.1" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@1.2.13: The platform "linux" is incompatible with this module.
info "fsevents@1.2.13" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@2.1.3: The platform "linux" is incompatible with this module.
info "fsevents@2.1.3" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning "@angular-devkit/build-angular > webpack-dev-server > webpack-dev-middleware@3.7.2" has incorrect peer dependency "webpack@^4.0.0".
warning " > codelyzer@6.0.1" has incorrect peer dependency "@angular/compiler@>=2.3.1 <12.0.0 || ^11.0.0-next || ^11.1.0-next || ^11.2.0-next".
warning " > codelyzer@6.0.1" has incorrect peer dependency "@angular/core@>=2.3.1 <12.0.0 || ^11.0.0-next || ^11.1.0-next || ^11.2.0-next".
[4/4] Building fresh packages...
Done in 33.16s.

real    0m33.535s
user    0m28.994s
sys     0m11.188s
[kushal@april87 mycanary]$ time yarn run ng update
yarn run v1.22.10
$ ng update
The installed local Angular CLI version is older than the latest stable version.
Installing a temporary version to perform the update.
✔ Package successfully installed.
An unhandled exception occurred: Cannot locate bin for temporary package: @angular/cli.
See "/tmp/ng-GNCjSu/angular-errors.log" for further details.
error Command failed with exit code 127.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

real    0m12.693s
user    0m9.690s
sys     0m2.055s
[kushal@april87 mycanary]$ time ng update
Using package manager: 'yarn'
Collecting installed dependencies...
Found 35 dependencies.
    We analyzed your package.json, there are some packages to update:
    
      Name                               Version                  Command to update
     --------------------------------------------------------------------------------
      @angular/cdk                       12.0.1 -> 12.0.2         ng update @angular/cdk
      @angular/cli                       12.0.0 -> 12.0.2         ng update @angular/cli
      @angular/core                      12.0.1 -> 12.0.2         ng update @angular/core
      @angular/material                  12.0.1 -> 12.0.2         ng update @angular/material
    
    There might be additional packages which don't provide 'ng update' capabilities that are outdated.
    You can update the additional packages by running the update command of your package manager.

real    0m4.744s
user    0m3.832s
sys     0m0.497s
[kushal@april87 mycanary]$ time ng update @angular/cli
Using package manager: 'yarn'
Collecting installed dependencies...
Found 35 dependencies.
Fetching dependency metadata from registry...
    Updating package.json with dependency @angular-devkit/build-angular @ "12.0.2" (was "12.0.0")...
    Updating package.json with dependency @angular/cli @ "12.0.2" (was "12.0.0")...
  UPDATE package.json (1471 bytes)
✔ Packages successfully installed.
** Executing migrations of package '@angular/cli' **

▸ Remove invalid 'skipTests' option in '@schematics/angular:module' Angular schematic options.
  Migration completed.


real    0m41.657s
user    0m33.452s
sys     0m13.669s
[kushal@april87 mycanary]$ 
```
