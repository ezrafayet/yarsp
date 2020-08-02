# yarsp

Yet Another React.js Starter-Pack - in progress 💎🛡 

## Choices and discussions

* Works both with or without Docker (see "how to run" sections bellow)
* React's components are all functional components (no class involved)
* Routes and rights regarding access to those routes are generated from the array stored in routes.ts
* NB: YOUR API ENDPOINTS/GATEWAY MUST ALWAYS CONTROLL ACCESS, DO NOT RELY ON A FRONT-ONLY ACCESS-CONTROL STRATEGY
* No default export used
* Typescript - so no "prop-type" library needed
* A context hook is used to store application-level data, so Redux should not be used here
* Fetch is used for API calls, but an abstract layer is used to normalize fetching. If you add a library (say Axios or unfetch) you'll only need it in one file. 
* Sass - will probably be replaced by css in js
* CRA scripts (start, build ...) - will be removed in later versions

## Versions tested

React 16  
React-dom 16  
React-router-dom 5  

## Run localy (dev mode)

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

* Fetch have been replaced by setTimeout, to mock a fetching, don't be surprised ...
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

## Deploy

The choice is yours:
* AWS S3 Buckets are very strong, easy and cheap to start to hosting a static website (paired with Route53 and CloudFront). Start by droping the files, you'll build a deploy and rollback strategy when needed.
* Host it on a server with or without Docker (AWS / Heroku / DigitalOcean allows both strategies)

## Good practises used

## TODO
*[x] Setup React  
*[x] Setup the router   
*[x] Add abstract fetch routes   
*[ ] Build a layout page with statuses 
*[ ] Build a window   
*[x] Add a default route to handle mail actions   
*[ ] Get rid of the "fsevents" error   
*[ ] Add Docker   
*[ ] Change the flavors strategy   
*[ ] Remove CRA scripts    
*[ ] Add testing   
 
