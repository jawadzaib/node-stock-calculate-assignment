import { calculateStock } from '../src/functions';

test("Check if correct stock calculated", async () => {
    calculateStock("MQI908424/70/79").then(response => {
        expect(response.stock).toBe(3111);
    })
})

test("error testing on invalid sku", async () => {
    expect(calculateStock("invalid")).rejects.toThrowError("Item not found");
})