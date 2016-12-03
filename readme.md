# Raw HTML Template
---
## Documentation for developers

This codebase is the raw HTML/CSS/JS for Healthsprings.net This contains all the template styling and basic functionality. You may use this code to port over to whatever platform HealthSprings is going to be using.

## Overview

This template uses a few tools to make it work. You don't need to modify the tools, it's all ready to go.

Here is a complete list of tools being used:

+ [SASS][3]
+ [NODEJS][1]/[NPM][2]
+ [Gulp][4]
+ [Bootstrap][5]
+ [jQuery][6]

## Directory Structure

The project is structured in a simple way. Here is the project outline:

```
root
│   gulpfile.js // Gulp File Script
│   index.html  // index html file
│   package.json // NPM Generated File
│   readme.md    // ReadMe Mardkown (you are here)
│
└──dev // All development happens here
|   └──js // All Javascript
|   |   main.js     // Main javascript file
|   |      └──vendors // All 3rd party libraries
|   └──scss
|      └──base
|      |    base.scss
|      |
|      └──components
|      |   
|      |
|      └──helpers
|      |    font.scss
|      |    text.scss
|      |
|      └──layout
|      |
|      └──shared
|      |    colors.scss
|      |
|      └──vendors
|
└──public
   └──assets
        └──css
        |    app.css
        |
        └──img
        |
        └──js
            main.js
```

## How to Use

This project requires [NODEJS][1] and [NPM][2]

*Note: NPM comes with NODEJS*

+ Install [Node/NPM][1]
+ cd into project directory `$: cd /Project/direcotry`
+ Install dependencies: `$: npm install`
+ Then run `$: gulp watch`

**Note** You only need to run the `npm install` the first time you use this. After you've installed all the dependencies, it will create a folder called *node_modules* where it installs all the dependencies.

### Gulp Watch

Gulp watch needs to be running while developing, otherwise your work will not be compiled.

If you create a new file inside the SCCS folder, you need to restart the watch by first stoping the watch `ctrl + c` then typing the command `$: gulp watch` again.

## How it works

The gulp watch command will watch for file changes inside `dev/scss` and `dev/js`. When a file changes and gets saved, two things will happen:

#### SCSS to CSS

It will take the app.scss inside `root/dev/scss/app.scss` and process it with Sass. Sass takes the SCSS language and converts it to CSS, the gulp script takes an additional step and minifies it into a file called `public/assets/css/app.css`.

*When you create a new SCSS file, don't forget to register it in the app.scss file and restart `gulp watch`.*

#### JS

Afterwords, it looks for changes inside the `dev/js` folder. If it

[1]: https://nodejs.org/en/
[2]: https://www.npmjs.com
[3]: http://sass-lang.com
[4]: http://gulpjs.com
[5]: http://getbootstrap.com
[6]: http://jquery.com
