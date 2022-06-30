import db from "../config/database.js";
 
const Product = db.collection('products',
{
   title: "",
   price: 0.0
}, {
   freezeTableName: true
});
console.log("collection retrieved!");
 
export default Product;
