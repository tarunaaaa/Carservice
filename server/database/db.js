const { MongoClient } = require('mongodb');
//const url = 'mongodb://localhost:27017';
const url='mongodb+srv://taruna:Taruna123@cluster0.3wyu8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const client = new MongoClient(url);
const dbName = 'Carservice';
async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    return db;
    
   // const collection = db.collection('student'); 
  
    // the following code examples can be pasted here...
  
    return collection;
  }
  module.exports={ main };