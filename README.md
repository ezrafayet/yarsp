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
* Fetch is used for API calls, but an abstract layer is used to normalize fetching. If you add a library (say Axios, unfetch or react-refetch by Heroku team) you'll only need it in one file. 
* Sass - will probably be replaced by css in js
* CRA scripts (start, build ...) - will be removed in later versions
* There is no navbar, why ? there are too many different choices and situations
* There are no animation, no style (appart from resetting all css and adding responsive breakpoints)

## What is the difference with other starterpacks ?

Here you have everything setup to quickly develop your app :
* Api calls can be made out of the box
* Error pages (404, 403, Server unavailable) are handled out of the box
* The login/logout and session logic are already here
* The routing logic is already here
* A page layout is available out of the box (to help you to handle page loading and page statuses)
* A context is defined on the App level

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
* From the login page, click on "login", you are logged in
* Click on "go to /page", you will access the route /page, forbidden before
* Click on "log out", you are logged out

## If I refresh the page I loose the session

This is the expected behaviour. As all single pages applications, you get your session from the server. In this case there is no server to hold the session. If so, you would not be logged out.

## Improvements

Many improvements have to be made, some are in the todo bellow, others are here :
* Check if it is a good practise to use a function inside useEffect and pass setState to it
* Check if the routes couldn't be written better

## .env strategy

Environment vars can be set in the .env, they will be read when transpiling.
You could create one .env.local, .env.production ... with react-scripts or by using "env-cmd -f ./.env.local npm run-script build", but this strategy is enough. 

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

## Deploy

The choice is yours:
* AWS S3 Buckets are very strong, easy and cheap to start to hosting a static website (paired with Route53 and CloudFront). Start by droping the files, you'll build a deploy-and-rollback strategy when needed, with buddy.io or aws pipes.
* Host it on a server with or without Docker (AWS / Heroku / DigitalOcean allows both strategies)

## Good practises used

## TODO
*[x] Setup React  
*[x] Setup the router   
*[x] Add abstract fetch routes   
*[ ] Add breakpoints in scss
*[x] Build a basic session/login/logout mockup   
*[x] Build a layout page with statuses   
*[x] Build a window layout with statuses   
*[x] Add a default route to handle mail/callback actions   
*[ ] Get rid of the "fsevents" error   
*[ ] Add Docker   
*[x] Change the .env strategy  
*[ ] Remove CRA scripts     
*[ ] Add testing    
 
