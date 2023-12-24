const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');


const customerSchema = new mongoose.Schema({
    c_name : {
        type : String,
        required : true
    },
    c_contact : {
        type : String,
        require: true
    },
    c_gender : {
        type : String,
        required : true
    },
    c_address : {
        type : String,
        require: true
    },
    c_ticket_from : {
        type : String,
    },
    c_ticket_no : {
        type : String,
    },
    c_relation : {
        type : String,
        required : true
    },
    c_details : {
        type : String,
        required : true
    },
    c_company : {
        type : String,
    },
    c_nights : {
        type : Number,
        required : true
    },
    c_roomType : {
        type : String,
        required : true
    },
    c_passport : {
        type : String,
        required : true
    },
    c_airline : {
        type : String,
    },
    c_PNR : {
        type : String,
    },
    c_voucher_no : {
        type : Number,
    },
    c_packagePrices : {
        type : Number,
        required : true
    },
    c_transaction : {
        type : Number,
        required : true
    },
    c_blanceAmount : {
        type : Number,
        required : true
    },
    c_Visa : {
        type : String,
    },
    c_Vaccine : {
        type : String,
    },
    c_Ticket : {
        type : String,
    },
    c_Voucher : {
        type : String,
    },
    c_receivingDate : {
        type : String,
    },
    c_travelDate : {
        type : String,
    },
    date : {
        type : Date,
        default : Date.now,
    }

});



const Costomer = mongoose.model('CUSTOMER', customerSchema);
module.exports = Costomer;