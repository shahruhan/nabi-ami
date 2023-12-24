import * as Yup from 'yup';

const phoneRegExp = /((\+92)|0)[.\- ]?[0-9][.\- ]?[0-9][.\- ]?[0-9]/
const voucherRegExp = /^[0-9]*$/


// --------Admin Register Schema----------
export const adminRegisterSchema = Yup.object({
    name: Yup.string().min(2).max(25).required('* plz enter your name'),
    email: Yup.string().email().required('* plz enter your email'),
    contact: Yup.string().min(11).max(13).matches(voucherRegExp, '* plz enter valid phone number').required('* plz enter phone number'),
    password: Yup.string().min(4).max(50).required('* plz enter your password'),
    conPassword: Yup.string()
    .required('* plz enter confirm password')
    .oneOf([Yup.ref('password'), null, "* both passwords must match"]),
});

// --------Admin SignIn Schema----------
export const signInSchema = Yup.object({
    email: Yup.string().email().required('* plz enter your email'),
    password: Yup.string().min(4).max(50).required('* plz enter your password'),
});

// ---------Customer Schema-----
export const addCustomerSchema = Yup.object({
    c_name: Yup.string().min(2).max(25).required('* plz enter name'),
    c_contact: Yup.string().min(11).max(13).matches(voucherRegExp, '* plz enter valid phone number').required('* plz enter phone number'),
    c_gender: Yup.string().required('* plz select gender'),
    c_address: Yup.string().max(150).required('* plz enter address'),
    c_ticket_from: Yup.string().max(50),
    c_ticket_no: Yup.string().max(20),
    c_relation: Yup.string().max(20).required('* plz enter relation'),
    c_details: Yup.string().max(20).required('* plz enter details'),
    c_company: Yup.string().max(50),
    c_nights: Yup.number().min(0).max(29).required('* plz select number of nights (can be zero)'),
    c_roomType: Yup.string().required('* plz select room type (can be zero)'),
    c_passport: Yup.string().max(20).required('* plz enter passport no.'),
    c_airline: Yup.string().max(20),
    c_PNR: Yup.string().max(20),
    c_voucher: Yup.string().min(1).max(10).matches(voucherRegExp, '* plz enter valid voucher number'),
    c_packagePrices: Yup.string().min(1).max(15).matches(voucherRegExp, '* plz enter valid package price').required('* plz enter package price (can be zero)'),
    c_transaction: Yup.string().min(1).max(15).matches(voucherRegExp, '* plz enter valid transaction value').required('* plz enter transaction value (can be zero)'),
    c_blanceAmount: Yup.string().min(1).max(15).matches(voucherRegExp, '* plz enter valid balance amount').required('* plz enter balance amount (can be zero)'),
});

// --------Add User Schema----------
export const addUserSchema = Yup.object({
    name: Yup.string().min(2).max(25).required('* plz enter your name'),
    contact: Yup.string().min(11).max(13).matches(voucherRegExp, '* plz enter valid phone number').required('* plz enter phone number'),
    gender: Yup.string().required('* plz select gender'),
    email: Yup.string().email().required('* plz enter your email'),
    address: Yup.string().max(150).required('* plz enter address'),
    password: Yup.string().min(4).max(50).required('* plz enter your password'),
    conPassword: Yup.string()
    .required('* plz enter confirm password')
    .oneOf([Yup.ref('password'), null, "* both passwords must match"]),
});

// --------Edit User Schema----------
export const editUserSchema = Yup.object({
    name: Yup.string().min(2).max(25).required('* plz enter your name'),
    contact: Yup.string().min(11).max(13).matches(voucherRegExp, '* plz enter valid phone number').required('* plz enter phone number'),
    gender: Yup.string().required('* plz select gender'),
    email: Yup.string().email().required('* plz enter your email'),
    address: Yup.string().max(150).required('* plz enter address'),
    password: Yup.string().min(4).max(50).required('* plz enter your password'),
    conPassword: Yup.string().required('* plz enter confirm password')
    .oneOf([Yup.ref('password'), null, "* both passwords must match"]),
});