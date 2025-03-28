const databasefile = require('../database/db');

// Fetch All Car Brands
const getCarBrands = async (req, res) => {
    try {
        const db = await databasefile.main();
        const collection = db.collection('carbrand');

        // Fetch only the 'brand' field from the database
        const carBrands = await collection.find({}, { projection: { _id: 0, brand: 1 } }).toArray();

        // Extract the brand names from the result
        const brands = carBrands.map((item) => item.brand);

        res.status(200).json({
            status: 200,
            message: 'Car brands fetched successfully!',
            brands,
        });
    } catch (error) {
        console.error('Error fetching car brands:', error);
        res.status(500).json({
            status: 500,
            error: 'Internal Server Error',
        });
    }
};

module.exports = { getCarBrands };