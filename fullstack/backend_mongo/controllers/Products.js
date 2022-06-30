
import Product from "../models/productModel.js";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
 
export const getAllProducts = async (req, res) => {
   try {
       const products = await Product.find().toArray();
       const retProducts = products.map(item => ({ id: item._id, title: item.title, price: item.price }));
       // console.log("retProducts:", retProducts)
       res.json(retProducts);
   } catch (error) {
       console.log(error.message)
       res.json({ message: error.message });
   }
}
export const getProductById = async (req, res) => {
   try {
       const mongodb = require("mongodb");
       const prodid = new mongodb.ObjectId(req.params.id);   
       const product = await Product.findOne({
           _id: prodid
       });
       const retProduct = { id: product._id, title: product.title, price: product.price };
       // console.log("Returning:", retProduct)
       res.json(retProduct);
   } catch (error) {
       console.log(error.message)
       res.json({ message: error.message });
   }
}
export const createProduct = async (req, res) => {
   try {
       await Product.insertOne(req.body);
       res.json({
           "message": "Product Created"
       });
   } catch (error) {
       console.log(error.message)
       res.json({ message: error.message });
   }
}
export const updateProduct = async (req, res) => {
   try {
       const mongodb = require("mongodb");
       const prodid = new mongodb.ObjectId(req.params.id);   
       await Product.updateOne(
           {
               _id: prodid
           },
           {
               $set: {
                   title: req.body.title,
                   price: req.body.price
               }
           }
       );
       res.json({
           "message": "Product Updated"
       });
   } catch (error) {
       console.log(error.message)
       res.json({ message: error.message });
   }
}
export const deleteProduct = async (req, res) => {
   try {
       const mongodb = require("mongodb");
       const prodid = new mongodb.ObjectId(req.params.id);   
       Product.deleteOne(
           {
               _id: prodid
           },
           function (err, obj) {
               if (err) throw err;
           });
       res.json({
           "message": "Product Deleted"
       });
   } catch (error) {
       console.log(error.message);
       res.json({ message: error.message });
   }
}

