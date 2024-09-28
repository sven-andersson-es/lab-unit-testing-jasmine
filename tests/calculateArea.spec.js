describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should have the function calculateArea defined", () => {
            expect(typeof calculateArea).toBe("function")
        });
        it('should take two numbers as arguments', () => {
            expect(calculateArea.length).toBe(2);
        });
        it('should calculate the area of a rectangle', () => {
            expect(calculateArea(4,4)).toBe(16);
        });
        it('should return undefined if any of the two arguments is not provided', () => {
            expect(calculateArea()).toBe(undefined);
            expect(calculateArea(4)).toBe(undefined);
            expect(calculateArea(undefined,4)).toBe(undefined);
        });
    })    
})