const databasefile = require('../database/db');

// Add New Car Brand and Type
const addCarBrandAndType = async (req, res) => {
    try {
        const db = await databasefile.main();
        const collection = db.collection('carbrand');

        const { brand, modelYearRange, carType, basePrice } = req.body;

        // Validate input
        if (!brand || !modelYearRange || !carType || !basePrice) {
            return res.status(400).json({
                status: 400,
                error: 'All fields (brand, modelYearRange, carType, basePrice) are required!',
            });
        }

        // Insert into database
        const result = await collection.insertOne({
            brand,
            modelYearRange,
            carType,
            basePrice,
            createdAt: new Date(),
        });

        res.status(201).json({
            status: 201,
            message: 'Car brand and type added successfully!',
            car: {
                id: result.insertedId,
                brand,
                modelYearRange,
                carType,
                basePrice,
                createdAt: new Date(),
            },
        });
    } catch (error) {
        console.error('Error adding car brand and type:', error);
        res.status(500).json({
            status: 500,
            error: 'Internal Server Error',
        });
    }
};
module.exports={addCarBrandAndType}