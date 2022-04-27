# TS Boiler Plate for RedM UI

as a hobby coder i did not find a source to putting together a TS workspace. i am using this template for coding RedM UI, like menus and other interactive on screen UI. this is more for me but i am sharing because sharing is caring :P

this is very basic and should not be considered production ready. just a simple workspace that works.

this also shows basic use of module import and export for using multiple files in js for browser settings.

the main idea is to be able to code more accurately with less time debugging. you code in the "ts" directory and you get a program ready "js" directory after you compile.

# TS NOTES

- install or update cmd > npm install -g typescript@latest
- setting up a new tsconfig.json in terminal > tsc --init
- checking ts version terminal > tsc -v
- to auto compile to .js on save > tsc -w

# Using TS NOTES

- the tsconfig.json is a huge part of making modules work. the settings in this example are setup correctly as of 4/2022.
- module needs to be type in script tag <script type="module" src="./js/app.js"></script> of the html script
- in the import you need to call the ./file.js to work in browser calling the ./file in a browser wont work, ./file works for non browser programs.
- working in typescript is very similar to just working in js. it seems like compiling to es2016 that theres is not much that changes in the .js.
- i am finding that the typescript intellisense is very intuitive.
- in the tsconfig using the "outDir": "js" is very useful for putting the files in the project directory.

# discord <Flinn#6171>
