import * as fs from 'fs';
import * as path from 'path';
import Transaction from './interfaces/TransactionItem';
import StockItem from './interfaces/StockItem';
import { error } from 'console';


export const calculateStock = (sku: string): Promise<StockItem> => {
    return new Promise((resolve, reject) => {
        try {
            
            const stockJson = fs.readFileSync(path.resolve('files/stock.json'));
            const transactionsJson = fs.readFileSync(path.resolve('files/transactions.json'));
            
            let transactions: Transaction[] = JSON.parse(transactionsJson.toString());
            const stocks: StockItem[] = JSON.parse(stockJson.toString());

            
            let stockItem: StockItem|undefined = stocks.find(item => item.sku === sku);
            transactions = transactions.filter(item => item.sku === sku);
            if(!stockItem && transactions.length === 0) {
                throw new Error("Item not found");
            }
            if(!stockItem) {
                stockItem = {sku: sku, stock: 0};
            }
            let total = (stockItem.stock) ? stockItem.stock : 0;
            transactions.forEach(item => {
                total += item.qty;
            })
            resolve({sku: stockItem.sku, stock: total});
        } catch(error: any) {
            reject(error);
        }
    })
}