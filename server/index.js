require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcrypt')
const app = express();
const cors = require('cors');
const cookieParser = require("cookie-parser")
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cookieParser())
app.use(cors());

const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    host: 'mail.google.com',
    port: 465,
    secure: true,
    service: 'gmail',

    auth: {
        user: process.env.EMAIL,
        pass: process.env.app_password,
    },
    tls: {
        rejectUnauthorized: false
    }
});

//mongo code
const connect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log("connected to mondodb");
    } catch (error) {
        throw error;
    }
};
mongoose.connection.on('disconnected', () => { //if mongodb got disconnected
    console.log("mongodb disconnected");
});


/////----user schema
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },

});
const User = mongoose.model('User', userSchema);




/////routes----User

app.post('/signup-user', async (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    try {
        const user = await User.findOne({ email: req.body.email })
        console.log(user);
        if (!user) {
            console.log(user);
            const newperson = new User(
                { ...req.body, password: hash }
            );
            try {

                const saveduser = await newperson.save();
                res.status(200).json(saveduser)

            } catch (err) {
                console.log(err);
            }
        }
        else {

            res.status(200).json(0)
        }
    }
    catch (err) {
        console.log(err);
    }

});

app.post('/login-user', async (req, res) => {
    try {

        const user = await User.findOne({ email: req.body.email })
        console.log(user);
        // console.log(user.password);
        // console.log(req.body.password);
        if (user === null) {
            res.status(200).json(0)  //incorrect email
        } else {
            let isPasswordCorrect
            isPasswordCorrect = await bcrypt.compare(req.body.password[0], user.password);
            if (isPasswordCorrect) {
                res.status(200).json(1)  //correct
            }
            else
                res.status(200).json(-1)  //incorrect password
        }
    } catch (err) {
        console.log(err);
        res.status(200).json("error came")

    }
})
app.delete('/delete-user', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (user == null) {
            res.status(200).json(0)  // incorrect mail
        } else {
            let isPasswordCorrect
            isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
            if (isPasswordCorrect) {
                await User.findByIdAndDelete(user._id);
                res.status(200).json(1)  //user deleted
            }
            else
                res.status(200).json(2)  //incorrect password
        }
    } catch (err) {
        console.log(err);
        res.status(200).json("error aa gaya")

    }
})

app.put("/update-user", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (user == null) {
            res.status(200).json(0)  //user not found
        }
        else {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);
            const userflight = await User.findByIdAndUpdate(user._id, { $set: { ...req.body, password: hash } }, { new: true });
            res.status(200).json(1)  //successfully updated
        }
    } catch (err) {
        console.log(err);
    }

})





///------worker schema

const workerSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    status: { type: Boolean, default: false },// available
    phone: { type: Number },
    work: { type: String },
    rating: { type: String, default: "5" },
    age: { type: Number },
    state: { type: String },
    city: { type: String },
    amount: { type: Number },
    photo: { type: String },
    name: { type: String },
    emaily: { type: String },
    address: { type: String },
    phony: { type: Number },
    time: { type: String },
    emailcustomer: { type: String }


});
const Worker = mongoose.model('Worker', workerSchema);



//////routes---worker

app.post('/carrers/signup-worker', async (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    try {
        const worker = await Worker.findOne({ email: req.body.email })
        if (worker == null) {
            const newworker = new Worker(
                { ...req.body, password: hash }
            );
            try {
                // console.log(newworker);


                const savedworker = await newworker.save();
                res.status(200).json(1)

            } catch (err) {
                console.log(err);
            }
        }
        else {

            res.status(200).json(0)
        }
    }
    catch (err) {
        console.log(err);
    }

})


app.post('/carrers/login-worker', async (req, res) => {
    try {

        const worker = await Worker.findOne({ email: req.body.email })
        if (worker == null) {
            res.status(200).json(0)  //incorrect email
        } else {
            let isPasswordCorrect
            isPasswordCorrect = await bcrypt.compare(req.body.password[0], worker.password);
            if (isPasswordCorrect) {

                res.status(200).json(1)
            }
            else
                res.status(200).json(-1)  //incorrect password
        }
    } catch (err) {
        console.log(err);
        res.status(200).json("error came")

    }
})
app.delete('/carrers/delete-worker', async (req, res) => {
    try {
        const worker = await Worker.findOne({ email: req.body.email })
        if (worker == null) {
            res.status(200).json(0)  // incorrect email
        } else {
            let isPasswordCorrect
            isPasswordCorrect = await bcrypt.compare(req.body.password, worker.password);
            if (isPasswordCorrect) {
                await Worker.findByIdAndDelete(worker._id);
                res.status(200).json(1)  //worker deleted
            }
            else
                res.status(200).json(-1)  //incorrect password
        }
    } catch (err) {
        console.log(err);
        res.status(200).json("error came")

    }
})


app.put("/carrers/update-worker", async (req, res) => {
    try {
        const worker = await Worker.findOne({ email: req.body.email })
        if (worker == null) {
            res.status(200).json(0)  //worker not found
        }
        else {
            const workerflight = await Worker.findByIdAndUpdate(worker._id, { $set: { ...req.body } }, { new: true });
            console.log(workerflight);
            res.status(200).json(workerflight)  //successfully updated
        }
    } catch (err) {
        console.log(err);
    }

})

app.put("/carrers/update-password", async (req, res) => {
    try {
        const worker = await Worker.findOne({ email: req.body.email })
        if (worker == null) {
            res.status(200).json(0)  //worker not found
        }
        else {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);
            const workerflight = await Worker.findByIdAndUpdate(worker._id, { $set: { ...req.body, password: hash } }, { new: true });
            res.status(200).json(workerflight)  //successfully updated
        }
    } catch (err) {
        console.log(err);
    }

})

app.put("/book-worker", async (req, res) => {
    console.log(req.body);
    const worker = await Worker.findOne({ email: req.body.email })
    const workerflight = await Worker.findByIdAndUpdate(worker._id, { $set: { status: true } }, { new: true });

    await Worker.findByIdAndUpdate(worker._id, { $set: { name: req.body.name } }, { new: true });
    await Worker.findByIdAndUpdate(worker._id, { $set: { emaily: req.body.email } }, { new: true });
    await Worker.findByIdAndUpdate(worker._id, { $set: { address: req.body.address } }, { new: true });
    await Worker.findByIdAndUpdate(worker._id, { $set: { time: req.body.time } }, { new: true });
    await Worker.findByIdAndUpdate(worker._id, { $set: { phony: req.body.phone } }, { new: true });
    const workerflight1 = await Worker.findByIdAndUpdate(worker._id, { $set: { emailcustomer: req.body.emailcustomer } }, { new: true });



    console.log(workerflight1);

    // for Worker
    var mailOptions = {
        from: process.env.EMAIL,
        to: req.body.email,//email to be sended
        subject: "Regarding Booking",
        html: `<div className="outer-flight-div" style='max-width: 100vw;'><div className="flight-section" style='width:60%;background-color: blue;margin:auto;@media screen and (max-width:640px) {.flight-section{width:80%;}}'><h1 style='text-align: center;margin-top: 2rem;padding-top:4rem;@media screen and (max-width:640px) {h1{text-align: center;margin-top: 2rem;padding-top:3rem;}}'>Confirmed Booking</h1><p style='margin-top: 2rem;text-align: center;font-size: 1.2rem;font-weight: 600;@media screen and (max-width:640px) { .flight-section p{margin:1.2rem}}'>Customer Name: <span style='color:#0b1560;'>${workerflight1.name}</span></p><div className="flight-time" style='padding: 2rem 0;margin:auto; @media screen and (max-width:640px) {.flight-time{flex-direction: column; }}'>
        <div className="from"></div></div><div className="flight-footer-section" style='padding-bottom: 2rem;'><p>Time: ${workerflight1.time}</p><p>Phone Number:${workerflight1.phony}</p><p>Customer Address: ${workerflight1.address}</p></div></div></div></div>`  // html body
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });

    //for Customer

    var mailOptions1 = {
        from: process.env.EMAIL,
        to: req.body.emailcustomer,//email to be sended
        subject: "Regarding Booking",
        html: `<div><h1 style='font-weight:bold'>Your Booking is confirmed</h1></div>`  // html body
    };
    transporter.sendMail(mailOptions1, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });



})
app.put("/cancelbooking-worker/:id", async (req, res) => {

    const workerflight = await Worker.findByIdAndUpdate(req.params.id, { $set: { status: false } }, { new: true });
    var mailOptions = {
        from: process.env.EMAIL,
        to: "satidevang2001@gmail.com",//email to be sended
        subject: "INFOMATION",
        html: `<div><h1 style='font-weight:bold'>Booking Cancelled</h1></div>`  // html body
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });




    res.status(200).json(workerflight)  //successfully updated

})
app.post("/findbyservice", async (req, res) => {
    const work = req.body.work //sorting according to service


    try {
        const workers = await Worker.find({ work: work });
        // console.log(workers);
        res.status(200).json(workers)
    } catch (err) {
        return next(err);
    }

})

app.get("/findbylocation", async (req, res) => {
    const { city } = req.body //sorting according to service

    try {
        const workers = await Worker.find({ city: city });
        res.status(200).json(workers)
    } catch (err) {
        console.log(err);
    }

})













const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    connect();
    console.log(`Listening on port ${PORT}`)
})