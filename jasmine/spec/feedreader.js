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
    /*  "RSS Feeds" test suite checks the RSS feeds through running tests 
    * on the allFeeds array, ensuring (1) the array gets populated
    and (2) that both the name and url values for each feed are defined. */
    describe('RSS Feeds', function() {
       
        /* allFeeds is an array so checking the length allows us to 
         * know if and how many items there are in the array */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Using JS Array Every method via JS arrow syntax to  
         * traverse the array "url" values to ensure all are defined */
        it('all feeds have a URL', function() {
            expect(allFeeds.every(url => url)).toBeDefined();
 
         });

        /* Using JS Array Every method via JS arrow syntax to  
         * traverse the array feed "name" values to ensure all are defined */
        it('all feeds have a name', function() {
            expect(allFeeds.every(name => name)).toBeDefined();
 
         });
    });


    /* "The menu" test suite checks the functionality of the top left hand corner
     * menu icon, unsuring (1) it is hidden by default, (2) it opens when clicked
     * and (3) it is hidden when clicked again or double clicked */
    describe('The menu', function() {
        /* Selecting the HTML body tag using JQuery and saving as a variable, plus
        * having a tear down after each spec is run to ensure the menu is in its 
        * default state before each test is run on the menu */
        var body = $('body');
        afterEach(function(){
            if(body.hasClass('menu-hidden') !== true) {
                $(".menu-icon-link").click();
            }
        }, 100);

        /* Checking that the body has class "menu-hidden" as a default */
        it('is hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
         });

         /* Checking the side menu visibilty requires using HTMLElement.click()
          * function to simulate a mouse click on the menu icon.  */
        it('is visible when clicked a first time', function() {
            $(".menu-icon-link").click();
            expect(body.hasClass('menu-hidden')).toBe(false);
        });
    
        it('is hidden when clicked a second time', function() {
            $(".menu-icon-link").click();
            $(".menu-icon-link").click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });

    /* "Initial Entries" suite to check that when the loadFeed function is
     * called and completes its work, at least a single news feed is loaded
     * into the HTML container.  */
    describe('Initial Entries', function() {

        /* loadFeed() is asynchronous so this test requires the use of 
         * Jasmine's beforeEach and asynchronous done() function. */
        beforeEach(function(done) {
            loadFeed(0, done);
        });
    
        /* Checks if there's content by checking that the HTML articles
        *  list is at least 1 item long */
        it('Completes work', function() {
            const feedContainer = $('.feed .entry');
            expect(feedContainer.length >= 1).toBe(true);
            
        });
    });

    /* "New Feed Selection" suite ensures that each time the loadFeeds function 
     * is called it is populated with unique news feed items. */
    describe('New Feed Selection', function() {
        var oldFeed, newFeed;
        
        beforeEach(function(done){

            loadFeed(0, function(){
            
                oldFeed = $('.feed').html();
            
                loadFeed(1, function() {
            
                      newFeed = $('.feed').html();

                       done(); // call done when variables are fed and tests to begin
                  });
             });
            });
            
        /* Compared the length of two news feeds variables loaded one after another 
         * Asynchronously to ensure they are not equal and therefore unique.  */
        it('the two feeds are not the same', function(done){
            expect(oldFeed.length === newFeed.length).not.toEqual(true);
            done();
            });
    });
}());
