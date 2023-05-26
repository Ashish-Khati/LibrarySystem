require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcrypt')
const app = express();
const cors = require('cors');
const cookieParser = require("cookie-parser")
const jwt=require('jsonwebtoken');
const JWT_SECRET="lksdfjsldjturieoeri8457498fueyf7374uyer74tgklf";
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
        console.log("Myself:::",user);
        // console.log(user.password);
        // console.log(req.body.password);
        if (user === null) {
            res.status(200).json(0)  //incorrect email
        } else {
            let isPasswordCorrect
            isPasswordCorrect = await bcrypt.compare(req.body.password[0], user.password);
            if (isPasswordCorrect) {
                const token=jwt.sign({firstName:user.firstName, email:user.email},JWT_SECRET);
                console.log("token generated:",token)
                if(res.status(201)){
                    return res.json({status:"ok",data:token})
                }
                else{
                    return res.json({error:"error"});
                }
            }
            else
                res.status(200).json(-1)  //incorrect password
        }
    } catch (err) {
        console.log(err);
        res.status(200).json("error came")

    }
})

app.post("/user/data",async (req,res)=>{
    const {token}=req.body;
    try{
        console.log("insideeeee")
        const user=jwt.verify(token,JWT_SECRET,(err,res)=>{
            if(err)
            return "token expired";
            return res
        });
        console.log('helllooooo')
        console.log("value of user is:",user)
        if(user=="token expired")
        {
            res.send({status:"error",data:"token expired"})
        }
        const useremail=user.email;
        User.findOne({email:useremail}).then((data)=>{
            res.send({status:"OK",data:data})
        })
        .catch(error)
        {
            res.send({status:"error",data:error})
        }
    }
    catch(error){
       
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


///------book schema

const booksSchema = new mongoose.Schema({
    bookName: { type: String, required: true },
    authorName:{type:String,required:true},
    ISBN: { type: String, required: true },
    category: { type: String },
    publisher:{type:String},
    entryDate:{type:String},
    quantity: { type: Number },
   price: { type: String },
   photo:{type:String},
   available:{type:Number},
   


});
const Books = mongoose.model('Books', booksSchema);



// .addBook route 
app.put("/update-book", async (req, res) => {
    try {
        const book = await Books.findOne({ ISBN: req.body.ISBN })
        if (book == null) {
            res.status(200).json(0)  //user not found
        }
        else {
            const booky = await Books.findByIdAndUpdate(book._id, { $set: req.body }, { new: true });
            res.status(200).json(1)  //successfully updated
        }
    } catch (err) {
        console.log(err);
    }

})
app.post('/addbook',async(req,res)=>{
    const{bookName,ISBN,category,quantity,price,image,authorName,publisher,entryDate}=req.body;
    if(!bookName || !ISBN || !category|| !quantity|| !price|| !authorName|| !publisher ||!entryDate )
    return res.status(422).json({error:"Please fill all required field"})
    const book=new Books(req.body)
    const savedbook= await book.save();
    res.status(200).json(1);

})

app.get("/getbooks", async (req, res) => {
    try {
        const books = await Books.find();
        res.status(200).json(books)
    } catch (err) {
        console.log(err);
    }

})

app.get("/findbybook", async (req, res) => {
    const { authorName } = req.body //sorting according to service

    try {
        const books = await Books.find({ authorName:authorName });
        res.status(200).json(books)
    } catch (err) {
        console.log(err);
    }
})

app.put("/updatebook/:id", async (req, res) => {
    try {
        const book = await Books.findById(req.params.id)
        console.log(book)
        // if (worker == null) {
        //     res.status(200).json(0)  //worker not found
        // }
        // else {
        //     const workerflight = await Worker.findByIdAndUpdate(worker._id, { $set: { ...req.body } }, { new: true });
        //     console.log(workerflight);
        //     res.status(200).json(workerflight)  //successfully updated
        // }
    } catch (err) {
        console.log(err);
    }

})

app.delete('/deletebook', async (req, res) => {
    try {
        const worker = await Books.findOne({ email: req.body.email })
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


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    connect();
    console.log(`Listening on port ${PORT}`)
})