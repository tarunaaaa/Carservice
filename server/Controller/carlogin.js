const databasefile= require('../database/db');


const insertuserdata = async(req,res)=>{
    try{
    const db=await databasefile.main()
    const collection = await db.collection('carsignup');
    
    //const insertresult=await collection.insertOne(req.body)
    const findresult=await collection.findOne({email:req.body.email});
    console.log("inserted documents =>", findresult);


    if(findresult){
      
       if( findresult.password==req.body.password)
      {
    res.status(200).json({
        status:200,
        msg:"record exist",
        
     })
    }}
    else{
        res.status(400).json({
            status:400,
            msg:"record doesn't exists"
        })
    }
}
    catch(error){
        console.error('Error during login:',error);
        res.status(500).send('error during login');
    }
}
module.exports={insertuserdata}