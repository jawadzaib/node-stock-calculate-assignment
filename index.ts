import { calculateStock } from './src/functions';
import StockItem from './src/interfaces/StockItem';


calculateStock('MQI908424/70/79').then((item: StockItem) => {
    console.log(item);
}).catch(err => {
    console.error(err);
})