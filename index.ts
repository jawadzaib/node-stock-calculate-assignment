import { calculateStock } from './src/functions';
import StockItem from './src/interfaces/StockItem';


calculateStock('PRO481716/07/95').then((item: StockItem) => {
    console.log(item);
}).catch(err => {
    console.error(err);
})