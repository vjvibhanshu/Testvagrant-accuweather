## Testvagrant-accuweather [![npm](https://img.shields.io/npm/v/react.svg?style=flat)]()

Repo for Testvagrant Technologies, test automation project that validates weather information from different sources(UI and API) and enables a comparison between them.

## Overview

To work on this, https://www.accuweather.com/ as the UI layer and api.openweathermap.org/data/2.5/weather API were used.
This project have two test cases one is `Comparator` and other one is `Variance` which validates the data from both UI and API.

* In order to pass the `Comparator` case, Temperature from UI and API for a city needs to be matched.
* In order to pass the `Variance` case, Temperature difference between UI and API should be within the range which is specified in the test data.

## Pre-requisites

* Install Node.js
* Follow [instructions on the node.js site](https://nodejs.org/en/download/) to install Node.js.

## Running tests

* Copy the repo to your local machine
* Execute command  `npm install` to install the cypress and other project dependecies
* Execute command `npm run test` to run the test cases in headless mode
  Chrome and Firefox browsers can be run for headed mode with below commands:

```
test_chrome_headed
test_firefox_headed
```

## Reporting

* After execution of test cases execute command `npm run openReports` It will start the server and open report on the webbrowser, to quit press `ctrl + c`
* Please find below the snip of reporting:
* Videos also added for each test case in the report:

#EOF README

