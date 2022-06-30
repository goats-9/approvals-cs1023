import { MongoClient } from "mongodb";
 
var url = "mongodb://localhost:27017/mern_db";
var client = new MongoClient(url);
await client.connect();
const db = client.db();
console.log("database connected!");
 
export default db;