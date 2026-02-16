const mongoose = require('mongoose');

const chatConversationSchema = new mongoose.Schema({
    sessionId: {
        type: String,
        required: true,
        unique: true
    },
    messages: [{
        type: {
            type: String,
            enum: ['user', 'bot'],
            required: true
        },
        text: {
            type: String,
            required: true
        },
        timestamp: {
            type: Date,
            default: Date.now
        }
    }],
    userInfo: {
        name: String,
        email: String,
        phone: String
    },
    leadCaptured: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        enum: ['active', 'closed', 'converted'],
        default: 'active'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    lastActivity: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('ChatConversation', chatConversationSchema);
