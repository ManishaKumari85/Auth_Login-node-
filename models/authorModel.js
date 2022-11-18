const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({

    fname: {
        type: String,
    
    },
    lname: {
        type: String,
        
    },
    title: {
        type: String,
        
        enum: ['Mr', 'Mrs', 'Miss'] 
    },
    email: {
        type: String,
    
        unique: true
    },
    password: {
        type: String,
        required: true
    }

}, { timestamps: true })

module.exports = mongoose.model('author', authorSchema)
