# portfolio-generator

## Description

The purpose of this project is to experiment with some of the capiabilities of Node.
The main file of the project is app.js. It uses the inquirer package to ask the user
for information about themselves and their github projects using the commmand line 
prompt. After answering all the questions, a html file will be created in the dist 
directory with some css formating already added to it. The css formating originates
from the style.css file in the src directory and gets copied into the dist directory.
In addition to app.js, there are 2 more js files used to make the custom html file.
The files generate-site.js (in utils directory) and page-template.js (in src directory)
are used to display the content and create the page template respectively.

## Project Contents
- dist directory (final files go here, __index.html__ and __style.css__)
- src directory (supporting files are here, __page-template.js__ and __style.css__)
- utils directory (other suporting file is here, __generate-site.js__)
- app.js file (main file)
- package.json and package-lock.json (files needed for fs module and inquirer package)
- gitignore for the **node_modules** directory

### Additional Libraries
- npm inquirer package
- Node.js fs module

## Contributors
Made by Michael Brown (aka randomguy1234)