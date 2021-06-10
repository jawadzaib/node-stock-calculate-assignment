import { calculateStock } from '../src/functions';

test("Check if correct stock calculated", async () => {
    calculateStock("PRO481716/07/95").then(response => {
        expect(response.stock).toBe(3019);
    })
})
test("Check if refund transaction also applied in calculation", async () => {
    calculateStock("PRO481716/07/95").then(response => {
        expect(response.stock).not.toBe(3029);
    })
})

test("error testing on invalid sku", async () => {
    expect(calculateStock("invalid")).rejects.toThrowError("Item not found");
})