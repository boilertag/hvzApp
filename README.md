# hvzApp
This is the repository for the Purdue Boiler League of Tag Humans vs Zombies mobile app.
Its intended platforms are Android and iOS.

===========
=Changelog=
===========
2016.08.07.2251
there are 6 projects in this directory
ionic v0.1:	bltApp_v0.1
ionic v0.2:	bltApp_v0.2
ionic v0.3:	bltApp_v0.3
ts v0.1:	HvZApp
ts v0.2:	HvZApp_v0.2
demo app:	kitchenSink

NOTE: the ts projects seem to have an extreme number of files, possibly due to the package.json file. If possible, either cut down number of packages used in package.json or refrain from renaming/moving files from node_modules under the ts projects.


2016.08.03.0030
there are 6 projects in this directory
v0.1:                myApp
v0.2:                mySide
v0.2.5:              HvZApp
v0.3:                bltApp_v0.3
Ionic 2 tutorial:    test
example demo:        kitchenSink



2016.07.09.1511
there are 4 projects in this directory: kitchenSink, myApp, myBlank, and mySide

kitchenSink is a demo app that features a lot of example elements which is really nice. based off of krisrak's project: https://github.com/krisrak/ionic-angularjs-kitchensink

myApp was the first iteration of BLT's hvz app. it was based off a tab template and was the first implementation of the home screen's layout.

myBlank is based off of the blank template, and doesn't really do anything.

mySide is the current (up-to-date) app that showcases the home template, some resemblance of a theme, and a sidebar.

+++++++++++++++++
+Troubleshooting+
+++++++++++++++++
-if 'ionic serve -l' or otherwise isn't working for a freshly created Ionic 2 project (some sort of error about packages missing and needing to run 'npm install'), then run 'npm --production=false install'
-to include .scss files for each component, edit /app/theme/app.core.scss with the respective @import "../pages/(component)/(scss file name)"
-app.variables.scss contains all of the global sass vars used within the app. this includes anything from default menu item colors to background colors, as well as the standard color palette that can be used with elements