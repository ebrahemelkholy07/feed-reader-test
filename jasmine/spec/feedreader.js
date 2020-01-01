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
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('it has a url or not', function() {
            var count = allFeeds.length - 1;
            for (count; count >= 0; count--) {
                expect(allFeeds[count].url).toBeDefined();
                expect(allFeeds[count].url.length).not.toBe(0);
            }
        });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('it has name or not', function() {
            var count = allFeeds.length - 1;
            for (count; count >= 0; count--) {
                expect(allFeeds[count].name).toBeDefined();
                expect(allFeeds[count].name.length).not.toBe(0);
            }
        });
    });


    describe('Menu', function() {
        it('Hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        it('change when clickable', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Init Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, function(){
                done();
            });
        });
        it('there is one element to clickable', function(done) {
            expect($('.feed .entry').length).not.toBe(0);
            done();
        });
    });

    describe('New item Selected', function() {
        /* test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        let firstEntry, secondEntry;
        beforeEach(function(done) {
            loadFeed(0, function(){
                firstEntry = $('.entry')[0].innerText;
                loadFeed(1, function(){
                    secondEntry = $('.entry')[0].innerText;
                    done();
                });
            });
        });
        it('when a new item is loaded by the loadFeed function that the content actually changes', function(done) {
            expect(firstEntry===secondEntry).toBe(false);
            done();
        });
    });    
}());