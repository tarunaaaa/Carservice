const databasefile= require('../database/db');
const getuserdata = async(req,res)=>{
    const db=await databasefile.main()
    const collection = await db.collection('carsignup');
    
    const findresult=await collection.find({}).toArray();
    console.log('find documents=>',findresult);
    res.send({
        status:200,
        msg:findresult
    })
}

const insertdata = async(req,res)=>{
    try{
    const db=await databasefile.main()
    const collection = await db.collection('carsignup');
    
    const insertresult=await collection.insertOne(req.body)
    console.log("inserted documents =>", insertresult)
    res.send({
        status:200,
        msg:insertresult
     })
    }
    catch(error){
        
    }
}
module.exports={insertdata , getuserdata}