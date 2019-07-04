# Project Overview

In this project we are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where I, the student came in, to complete the Jasmine tests.


## About this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development." This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!

Testing an JQuery Ajax API was also a great approach to learning how an API works and this was a big bonus!


## Installation

This is an HTML SPA (single page application) so just load the index.html in the browser, navigate to the page footer where you will find the list of Jasmine menu of tests on the application. Each Jasmine test spec is provided by name in the sub menu and can be clicked on to execute.

## Jasmine Overview

In the footer of the index.html you will find the Jasdmine tests. If all tests are passing everything will appear in green and you should see a header with green background stating as follows: "8 specs, 0 failures, ...".  If any of the tests fail you will see a red highlighted header and then you need to check sub menu items of "The menu" to see which test specs have failed.  The failed test specs will show in red font color and you can click on them to read the details of why the test spec failed. 


## Jasmine Tests Performed

The project required completing a number of DOM and JQuery Ajax API Jasmine tests.

Below you will find a list detailing the Jasmine tests specs completed.

#1. RSS Feeds

It was important to check that the RSS feed array was complete, i.e. the Jasmine specs confirmed that the feeds array is populated and that all feed objects of the array contained both URL and name values.  This was a test completed on the SPA app.js file.

#2. Side menu

By default the side menu of the SPA is hidden.  When the menu icon (top left hand corner) is clicked the side menu appears.  When the menu icon is clicked again it is hidden (toggles). This Jasmine test was completed on the index.html via simulating clicks on the menu icon and then testing the expected results, using JavaScript vanilla HTMLElement.click() method.

#3. Async API

The async API uses a combination of:
- Google's deprecated Feed Reader API, 
- four separate RSS Feeds and 
- JQuery Ajax 
    - to call and display the feed articles and specifically:
    - the feed article headers hyperlinked to the actual articles themselves.  
    
The Jasmine test specs needed to confirm that:

1. Firstly, the LoadFeeds function which is called by the Google Feed Reader API and itself calls the JQuery Ajax's API populates the Handlebars configured HTML container with news feeds and 
2. Secondly, to ensure that all the news feeds that are called and displayed are unique and for this the JQuery jQuery.uniqueSort() proved very useful. 

Jasmine "done" was used for both async function tests to ensure the spec was only called once the beforeEach asynchronous function had been completed.  Jasmines's done does this my taking the word "done" as an async function callback and calling it once the asnc function has completed it's work and then adding the same word "done" to the spec function to call it and use it as a spec callback (in the same manner as the beforeEach async function).  

For details regarding Jasmine Asynchronous Work please visit Jasmine [Jasmine](https://jasmine.github.io/tutorials/async) 

# Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
