const databasefile = require('../database/db');

// Get All Users from Database
const getuserdata = async (req, res) => {
    try {
        const db = await databasefile.main();
        const collection = db.collection('usersignup');

        const findresult = await collection.find({}).toArray();
        console.log('Found Users:', findresult);

        res.status(200).json({
            status: 200,
            data: findresult,
        });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({
            status: 500,
            error: 'Internal Server Error',
        });
    }
};

// Get Specific User by Email
const getUserByEmail = async (req, res) => {
    try {
        const { email } = req.query; 
        // Get email from request params

        if (!email) {
            return res.status(400).json({
                status: 400,
                error: 'Email is required!',
            });
        }

        const db = await databasefile.main();
        const collection = db.collection('usersignup');

        const user = await collection.findOne({ email });

        if (!user) {
            return res.status(404).json({
                status: 404,
                error: 'User not found!',
            });
        }

        res.status(200).json({
            status: 200,
            message: 'User details fetched successfully!',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                mobile: user.mobile,
                password:user.password,
                age: user.age,
            },
        });
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({
            status: 500,
            error: 'Internal Server Error',
        });
    }
};
const { ObjectId } = require("mongodb");

const updateUserProfile = async (req, res) => {
    try {
        const { id, name, email, mobile, password, age } = req.body;

        console.log("Received Update Request:", req.body); // Debugging

        // Validate required fields
        if (!id || typeof id !== "string") {
            return res.status(400).json({ status: 400, error: "User ID is required and must be a string!" });
        }

        if (!name || !email || !mobile || !password || !age) {
            return res.status(400).json({ status: 400, error: "All fields (name, email, mobile, password, age) are required!" });
        }

        // Validate and convert ID to ObjectId
        let objectId;
        try {
            objectId = new ObjectId(id.trim()); // Trim to remove any unwanted spaces
        } catch (error) {
            return res.status(400).json({ status: 400, error: "Invalid user ID format!" });
        }

        const db = await databasefile.main();
        const collection = db.collection("usersignup");

        // Check if user exists
        const existingUser = await collection.findOne({ _id: objectId });
        if (!existingUser) {
            return res.status(404).json({ status: 404, error: "User not found!" });
        }

        // Update user data
        const updatedUser = await collection.updateOne(
            { _id: objectId },
            { $set: { name, email, mobile, password, age: parseInt(age) } } // Ensure age is a number
        );

        console.log("Update Result:", updatedUser); // Debugging

        if (updatedUser.modifiedCount === 0) {
            return res.status(400).json({ status: 400, message: "No changes were made." });
        }

        res.status(200).json({ status: 200, message: "User profile updated successfully!" });

    } catch (error) {
        console.error("Error updating user profile:", error);
        res.status(500).json({ status: 500, error: "Internal Server Error" });
    }
};







// Insert New User into Database
const insertdata = async (req, res) => {
    try {
        console.log("Received Data:", req.body); 
        const { name, mobile, email, password, age } = req.body;

        if (!name || !mobile || !email || !password || !age) {
            return res.status(400).json({
                status: 400,
                error: 'All fields (name, mobile, email, password, age) are required!',
            });
        }

        const db = await databasefile.main();
        const collection = db.collection('usersignup');

        const existingUser = await collection.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                status: 400,
                error: 'User already registered with this email!',
            });
        }

        const userData = {
            name,
            mobile,
            email,
            password,
            age: parseInt(age)
        };

        const insertResult = await collection.insertOne(userData);

        console.log('User Registered:', insertResult);

        res.status(201).json({
            status: 201,
            message: 'User registered successfully!',
            data: insertResult,
        });
    } catch (error) {
        console.error('Error inserting user:', error);
        res.status(500).json({
            status: 500,
            error: 'Internal Server Error',
        });
    }
};

// Login API
const loginUser = async (req, res) => {
    try {
        console.log("Login Request Data:", req.body);
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                status: 400,
                error: 'Email and password are required!',
            });
        }

        const db = await databasefile.main();
        const collection = db.collection('usersignup');

        const user = await collection.findOne({ email });

        if (!user || user.password !== password) {
            return res.status(401).json({
                status: 401,
                error: 'Invalid email or password!',
            });
        }

        console.log('User Logged In:', user);

        res.status(200).json({
            status: 200,
            message: 'Login successful!',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                mobile: user.mobile,
                password:user.password,
                age: user.age,
            },
        });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({
            status: 500,
            error: 'Internal Server Error',
        });
    }
};
//delete user
const deleteuser = async (req, res) => {
    try {
        const db = await databasefile.main();
        const collection = db.collection('usersignup');

        // Extract the email from the request parameters or body
        const userEmail = req.params.email; // Assuming the email is passed as a URL parameter

        // Check if the email is provided
        if (!userEmail) {
            return res.status(400).json({
                status: 400,
                error: 'User email is required',
            });
        }

        // Delete the user with the given email
        const deleteResult = await collection.deleteOne({ email: userEmail });

        // Check if the user was found and deleted
        if (deleteResult.deletedCount === 0) {
            return res.status(404).json({
                status: 404,
                error: 'User not found',
            });
        }

        // Return success response
        res.status(200).json({
            status: 200,
            message: 'User deleted successfully',
            data: deleteResult,
        });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({
            status: 500,
            error: 'Internal Server Error',
        });
    }
};

module.exports = { insertdata, getuserdata, getUserByEmail, loginUser , updateUserProfile  , deleteuser};
