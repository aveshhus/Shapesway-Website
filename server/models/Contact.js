const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        trim: true
    },
    service: {
        type: String,
        trim: true
    },
    message: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['new', 'contacted', 'converted', 'closed'],
        default: 'new'
    },
    source: {
        type: String,
        enum: ['contact_form', 'chat', 'whatsapp'],
        default: 'contact_form'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    notes: [{
        text: String,
        addedAt: {
            type: Date,
            default: Date.now
        },
        addedBy: String
    }]
});

module.exports = mongoose.model('Contact', contactSchema);
