module.exports = {
    USER: 'YOUR_EMAIL_ADDRESS', 
    PASS: 'PASSWORD_FOR_EMAIL'
}

const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const creds = require('./config');


let transport = {
    
}