# yarsp

Yet Another React.js Starter-Pack - in progress 💎🛡 

## choices

* Typescript
* Sass - should probably be replaced by css in js
* Using CRA scripts, will be removed in later version
* You have the choice to use docker or not

## Run localy

* npm i
* npm run start

It will:
* Show "loading" for a second, the app is loading and session being set
* Show the public landing page
* if you go to /shared you'll see the shared page
* if you go to /action/accept/kzW4 you'll see the action page
* if you go to /private you will see a 403 error
* if you go to /anything you will see a 404 error

## Improvements

Many improvements have to be made, some are in the todo bellow, others are here :
* Check if it is a good practise to use a function inside useEffect and pass setState to it
* Check if the routes couldn't be written better

## Notes

Be sure to addapt this to your own strategy. Especially regarding :
* Generating Routes could be improved (without passing a component)
* Generating routes: should add a router to display the good landing page
* Windows / menus strategy
* Project is using typescript
* Project is using sass

## Run on docker (port 3000)

* to come

## Run on docker (server)

* to come

## Build

* npm run build:local for local build
* npm run build:production for production

## TODO
*[x] Setup React  
*[x] Setup the router   
*[ ] Add abstract fetch routes   
*[ ] Build a layout page with statuses   
*[ ] Build a window   
*[x] Add a default route to handle mail actions   
*[ ] Get rid of the "fsevents" error   
*[ ] Add Docker   
*[ ] Change the flavors strategy   
*[ ] Remove CRA scripts   
 
