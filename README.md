This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start mySideMenu sidemenu
```

Then, to run it, cd into `mySideMenu` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

## Todo: updgrade to @ngrx/platform once is available

* June/2017
* This example is currently using ngrx/store 2.2 (I personally do not like how store files are organized)
* @ngrx/plataform is currently in beta. This new version allows lazy loading reducers, effects. Once it is available on npm and stable will update this sample to this version as well, to organize the application better and follow Angular/Ionic files/modules organization.
