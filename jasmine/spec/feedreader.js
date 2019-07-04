/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        /* allFeeds is an aray of checking the length allows us to 
         * know if and how many items there are in the array */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        /* Using JS array find together with JS arrow syntax to  
         * traverse the array "url" values to ensure non are null */
        it('all feeds have a URL', function() {
            expect(allFeeds.find(feed => feed.URL === null)).toBe(undefined);
 
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        /* Using JS array find together with JS arrow syntax to  
         * traverse the array feed "name" values to ensure non are null */
        it('all feeds have a name', function() {
            expect(allFeeds.find(feed => feed.name === null)).toBe(undefined);
 
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* Selecting the HTML body tag using JQuery and saving as a variable */
        var body = $('body');
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        /* Checking that the body has class "menu-hidden" as a default */
        it('is hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         /* Checking the side menu visibilty requires using HTMLElement.click()
          * function to simulate a mouse click on the menu icon.  In the first test
          * it was necessary to add an afterEach click to return the menu to its
          * hidden state. In the second test two clicks are required to rehide 
          * the, i.e. return the menu to its default state. */
         
        describe('The menu shows', function() {
         beforeEach(function() {
            $(".menu-icon-link").click();
         });
         afterEach(function() {
            $(".menu-icon-link").click(); 
         });
            it('is visible when clicked a first time', function() {
            expect(body.hasClass('menu-hidden')).toBe(false);
            });
        });
        describe('The menu is rehidden', function() {
         beforeEach(function() {
            $(".menu-icon-link").click();
            $(".menu-icon-link").click();
        });
            it('is hidden when clicked a second time', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
             });
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });
    
        /* Checks if there's content by checking the length of the array
        *  is at least 1 item long */
        it('Completes work', function() {
            const feedContainer = $('.feed .entry');
            expect(feedContainer.length >= 1).toBe(true);
            
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        /* Used JQuery Array uniqueSort function to remove any duplicates
         * from the actual array of news feeds and then checked expecting
         * the number of feed items to equal the orginal array meaning that
         * there are no duplicates */
        it('the two feeds are not the same', function(done){
            const feedContainer = $('.feed .entry');
            uniqueFeeds = jQuery.uniqueSort(feedContainer);
            expect(feedContainer.length === uniqueFeeds.length).toBe(true);
            
            done();
            });
    });
}());
