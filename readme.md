##Blaze & Express boilerpalte

Super basic blaze/express starter template. Official standalone Blaze is [coming soon](https://github.com/meteor/blaze/issues/11) at which point we'll switch to that. Until then though, we're using eface2face's [meteor-client](https://github.com/eface2face/meteor-client/) package.

###Getting Started
 * Clone or download this repo and run `npm i`
 * Start with `npm start`

###Features
 * Builds LESS/JS you put in  `/client` into `/public`. This includes handling all your Blaze-related templates and template logic. Templates should be placed in JS/HBS pairs inside `/client/templates/<template folder>` *nb: templates will be named based on the filename, you don't need `<template>` tags
 * Ships with [prerender](https://github.com/prerender/prerender) support, you just need to set the `PRERENDER_SERVICE_URL` env var.
 * Uses [page.js](https://github.com/visionmedia/page.js) for routing (see `/clients/routes`)

###Future Plans
 * Integrate official Blaze NPM module
 * Flesh out express-side of the boilerplate