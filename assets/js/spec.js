// https://jasmine.github.io/2.1/introduction
// Format taken from this tutorial


describe("InspiroType", function() {
    it("should handle user mode selection for changing to hard mode", function() {
        // should be set to easy at first
        expect(currentlySelectedQuotes).toBe(easyQuotes);

        handleUserModeSelection('hard');

        expect(currentlySelectedQuotes).toBe(hardQuotes);
    });

    it("should handle user mode selection for changing to easy mode", function() {
        
        handleUserModeSelection('hard');
        // should be set to hard at first
        expect(currentlySelectedQuotes).toBe(hardQuotes);

        handleUserModeSelection('easy');

        expect(currentlySelectedQuotes).toBe(easyQuotes);
    });
});
