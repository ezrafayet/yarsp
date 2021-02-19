# yarsp

Yet Another React.js Starter-Pack 💎🛡 

## What is this project about ?

This is my own launcher-pack - it will most likely still evolve

## Choices

* The project generates routes with access control using **route.ts**.
* The project is using **Typescript**.
* The project is using **useContext** to manage application-level state.
* The project is using **Sass**.
* The project is using **CRA scripts** - it should be removed in later versions.
* The project is using **functions** to define components - not classes.

* NB: Do NOT rely on a front-strategy-only to grant access rights, your back **MUST** control them on each request.

## Out of the box

* Error pages (404, 403, Server unavailable).
* The login/logout and session logic.
* The routing logic.
* A page layout.
* An app-level context.

## Run localy

* npm i
* npm run start

- Follow the buttons (Login, Navigate to another private page, logout)
- Note that if you try to access /private you will get a 403 error page

**If I refresh the page I loose the session**

This is the expected behaviour here. You should get your session from the server.

## Notes

* There is no navbar,
* There are no animation, no style (appart from resetting all css and adding responsive breakpoints)
* Fetch have been replaced by setTimeout to mock a fetching, don't be surprised ...

## Build

* npm run build for local build

**About the .env:**    

The environment variables will be used only during the build of the app. You can check CRA documentation for a strategy using **.env.local**, **.env.production** ...

## Deploy

The choice is yours:
* **AWS S3** Buckets paired with Route53 and CloudFront are very strong, easy and cheap to host a static website with low traffic. Start by droping the files, you'll build a deploy-and-rollback strategy when needed, with **CodeBuild** or other platforms as **buddy.io**.
* **Host it** on a server with or without Docker (AWS / Heroku / DigitalOcean)

## Good practises used

## TODO LEFT
*[ ] Remove CRA  
*[ ] Add Docker for server hosting   
*[ ] Add tests    
 
