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

// Contact Us API
const contactUs = async (req, res) => {
    try {
        console.log("Contact Us Request Data:", req.body);
        const { name, email, message } = req.body;

        // Validate input fields
        if (!name || !email || !message) {
            return res.status(400).json({
                status: 400,
                error: 'All fields (name, email, message) are required!',
            });
        }

        const db = await databasefile.main();
        const collection = db.collection('contactus');

        // Create Contact Data
        const contactData = {
            name,
            email,
            message,
            createdAt: new Date()
        };

        // Insert Contact Submission into Database
        const insertResult = await collection.insertOne(contactData);
        console.log('Contact Submission Saved:', insertResult);

        // Send Email Notification
        await sendContactEmails(email, contactData);

        res.status(201).json({
            status: 201,
            message: 'Thank you for contacting us! We will get back to you shortly.',
            data: insertResult,
        });

    } catch (error) {
        console.error('Error during contact submission:', error);
        res.status(500).json({
            status: 500,
            error: 'Internal Server Error',
        });
    }
};
// get contact us data
// Get All Contact Submissions API
const getAllContactSubmissions = async (req, res) => {
    try {
        const db = await databasefile.main();
        const collection = db.collection('contactus');

        // Fetch all contact submissions from the database
        const contactSubmissions = await collection.find({}).toArray();

        // Check if there are any submissions
        if (contactSubmissions.length === 0) {
            return res.status(404).json({
                status: 404,
                message: 'No contact submissions found.',
            });
        }

        // Return the contact submissions
        res.status(200).json({
            status: 200,
            message: 'Contact submissions retrieved successfully.',
            data: contactSubmissions,
        });

    } catch (error) {
        console.error('Error retrieving contact submissions:', error);
        res.status(500).json({
            status: 500,
            error: 'Internal Server Error',
        });
    }
};

// Function to send emails for Contact Us
const sendContactEmails = async (userEmail, contactData) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'gungunbansal001@gmail.com', // Your Email
            pass: 'rzac szlf bhah fgrb'  // Your Email Password (Use app password for security)
        }
    });

    // Email content for user
    const userMailOptions = {
        from: 'gungunbansal001@gmail.com',
        to: userEmail,
        subject: 'Thank you for contacting us!',
        text: `Dear ${contactData.name},\n\nThank you for reaching out to us. We have received your message:\n\n"${contactData.message}"\n\nWe will get back to you shortly.\n\nBest regards,\nCar Service Team`
    };

    // Email content for admin
    const adminMailOptions = {
        from: 'gungunbansal001@gmail.com',
        to: 'tarunabasnal7373@gmail.com',
        subject: 'New Contact Form Submission',
        text: `New Contact Form Submission Received!\n\nCustomer Details:\nName: ${contactData.name}\nEmail: ${contactData.email}\nMessage: ${contactData.message}\n\nCheck the admin dashboard for more details.`
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

// Get All Booking Details
const getAllBookings = async (req, res) => {
    try {
        const db = await databasefile.main();
        const collection = db.collection('carBookings');

        // Fetch all bookings from the database
        const bookings = await collection.find({}).toArray();

        if (!bookings.length) {
            return res.status(404).json({
                status: 404,
                error: 'No bookings found!',
            });
        }

        res.status(200).json({
            status: 200,
            message: 'All booking details fetched successfully!',
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
        console.error('Error fetching all booking details:', error);
        res.status(500).json({
            status: 500,
            error: 'Internal Server Error',
        });
    }
};
// Function to send emails for Booking Confirmation
const sendBookingEmails = async (userEmail, bookingData) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'gungunbansal001@gmail.com', // Your Gmail
            pass: 'rzac szlf bhah fgrb'  // Your Gmail App Password
        }
    });

    // Email content for user
    const userMailOptions = {
        from: 'gungunbansal001@gmail.com',
        to: userEmail,
        subject: 'Booking Confirmation - Car Service',
        text: `Dear ${bookingData.name},\n\nYour car service booking has been confirmed:\n\nCar Brand: ${bookingData.carBrand}\nCar Type: ${bookingData.carType}\nService Type: ${bookingData.serviceType}\nTiming: ${bookingData.timing}\n\nThank you for choosing our service!\n\nBest regards,\nCar Service Team`
    };

    // Email content for admin
    const adminMailOptions = {
        from: 'gungunbansal001@gmail.com',
        to: 'tarunabasnal7373@gmail.com',
        subject: 'New Car Service Booking',
        text: `New Car Service Booking Received!\n\nCustomer Details:\nName: ${bookingData.name}\nEmail: ${bookingData.email}\nCar Brand: ${bookingData.carBrand}\nCar Type: ${bookingData.carType}\nService Type: ${bookingData.serviceType}\nTiming: ${bookingData.timing}\nNotes: ${bookingData.notes}\n\nCheck the admin dashboard for more details.`
    };

    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);
};




module.exports = { bookCarService, getBookingByEmail, contactUs, getAllBookings ,getAllContactSubmissions};