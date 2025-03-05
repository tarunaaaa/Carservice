const databasefile = require('../database/db');
const nodemailer = require('nodemailer');

// Booking API
const bookCarService = async (req, res) => {
    try {
        console.log("Booking Request Data:", req.body);
        const { name, email, carBrand, carType, serviceType, timing, notes } = req.body;

        // Validate input fields
        if (!name || !email || !carBrand || !carType || !serviceType || !timing) {
            return res.status(400).json({
                status: 400,
                error: 'All fields (name, email, carBrand, carType, serviceType, timing) are required!',
            });
        }

        const db = await databasefile.main();
        const collection = db.collection('carBookings');

        // Create Booking Data
        const bookingData = {
            name,
            email,
            carBrand,
            carType,
            serviceType,
            timing,
            notes: notes || "No additional notes", 
            createdAt: new Date()
        };

        // Insert Booking into Database
        const insertResult = await collection.insertOne(bookingData);
        console.log('Booking Saved:', insertResult);

        // Send Email Notification
        await sendBookingEmails(email, bookingData);

        res.status(201).json({
            status: 201,
            message: 'Booking successful! A confirmation email has been sent.',
            data: insertResult,
        });

    } catch (error) {
        console.error('Error during booking:', error);
        res.status(500).json({
            status: 500,
            error: 'Internal Server Error',
        });
    }
};

// Function to send emails using NodeMailer
const sendBookingEmails = async (userEmail, bookingData) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'gungunbansal001@gmail.com', // Your Email
            pass: 'rzac szlf bhah fgrb'  // Your Email Password (Use app password for security)
        }
    });
    // Get Booking Details by User Email


    // Email content
    const userMailOptions = {
        from: 'gungunbansal001@gmail.com',
        to: userEmail,
        subject: 'Car Service Booking Confirmation',
        text: `Dear ${bookingData.name},\n\nYour booking has been confirmed!\n\nDetails:\nCar Brand: ${bookingData.carBrand}\nCar Type: ${bookingData.carType}\nService Type: ${bookingData.serviceType}\nTiming: ${bookingData.timing}\nNotes: ${bookingData.notes}\n\nThank you for choosing us!\n\nBest regards,\nCar Service Team`
    };

    const adminMailOptions = {
        from: 'gungunbansal001@gmail.com',
        to: 'tarunabasnal7373@gmail.com',
        subject: 'New Car Service Booking',
        text: `New Booking Received!\n\nCustomer Details:\nName: ${bookingData.name}\nEmail: ${bookingData.email}\nCar Brand: ${bookingData.carBrand}\nCar Type: ${bookingData.carType}\nService Type: ${bookingData.serviceType}\nTiming: ${bookingData.timing}\nNotes: ${bookingData.notes}\n\nCheck the admin dashboard for more details.`
    };

    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);
};

// Get Booking Details by User Email
const getBookingByEmail = async (req, res) => {
    try {
        const { email } = req.query; 
        
        if (!email) {
            return res.status(400).json({
                status: 400,
                error: 'Email is required!',
            });
        }

        const db = await databasefile.main();
        const collection = db.collection('carBookings');

        const bookings = await collection.find({ email }).toArray();

        if (!bookings.length) {
            return res.status(404).json({
                status: 404,
                error: 'No bookings found for this user!',
            });
        }

        res.status(200).json({
            status: 200,
            message: 'User booking details fetched successfully!',
            bookings: bookings.map(booking => ({
                id: booking._id,
                name: booking.name,
                email: booking.email,
                carBrand: booking.carBrand,
                carType: booking.carType,
                serviceType: booking.serviceType,
                timing: booking.timing,
                notes: booking.notes || "No additional notes",
                createdAt: booking.createdAt,
            })),
        });
    } catch (error) {
        console.error('Error fetching booking details:', error);
        res.status(500).json({
            status: 500,
            error: 'Internal Server Error',
        });
    }
};





module.exports = { bookCarService ,getBookingByEmail};
