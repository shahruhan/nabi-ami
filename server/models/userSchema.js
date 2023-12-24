const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    contact : {
        type : String,
    },
    gender : {
        type : String,
    },
    address : {
        type : String,
    },
    bioData : {
        type : String,
    },
    profileImage : {
        type : String,
    },
    date : {
        type : String,
    },
    month : {
        type : String,
    },
    year : {
        type : String,
    },
    users : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true,
        trim: true
    },
    conPassword : {
        type : String,
        required : true,
        trim: true
    },
    status : {
        type : String
    },
    currentDate : {
        type : Date,
        default : Date.now,
    },
    tokens: [
        {
            token: {
                type : String,
                required : true
            }
        }
    ]

});

// Hashing the password

userSchema.pre('save', async function (next){
    if (this.isModified('password')){
        
        this.password = await bcrypt.hash(this.password, 12);
        this.conPassword = await bcrypt.hash(this.conPassword, 12);
    }
    next();
});

// generating Token

userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY); //define minimum 32 char secret key in process.env
        this.tokens = this.tokens.concat({ token: token});
        await this.save();
        return token;
    } catch (err){
        console.log(err);
    }
}

const User = mongoose.model('USER', userSchema);
module.exports = User;