# Food Timetable Node
A school food menu implemented in node.js using docker and mysql

## Build and Run
It is essential that the database server already has the dbs initialize, that is at least empty.

The dbs default to `food_timetable_dev` `food_timetable_test` and `food_timetable_prod`.

The node packages must also be installed via `npm i`

To build the app you will need docker and docker-compose

To create simply run `docker-compose build` and then run `docker-compose up -d`

The app is now running on [http://localhost:5000](http://localhost:5000)

The `-d` flag makes the container(s) run in the background

The mysql database can be accessed on localhost:3305

### Static Files

The frontend is stored in `/static`, the dist folder is included but can be rebuilt using the following:

You will need
 - [NPM](https://www.npmjs.com/)
 - [Gulp](http://gulpjs.com/)
 - [Sass](http://sass-lang.com/) *make sure to install via the command line*

To build:
Goto the static folder
`cd app/static`

Install node packages
`npm i`

Run gulp build tool
`gulp`

If developing frontend run
`gulp watch`

Files are output to the `dist` directory
