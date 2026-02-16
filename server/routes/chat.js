const express = require('express');
const router = express.Router();
const ChatConversation = require('../models/ChatConversation');
const Contact = require('../models/Contact');

// POST /api/chat/message - Save chat message
router.post('/message', async (req, res) => {
    try {
        const { sessionId, type, text } = req.body;

        if (!sessionId || !type || !text) {
            return res.status(400).json({
                success: false,
                error: 'Missing required fields'
            });
        }

        let conversation = await ChatConversation.findOne({ sessionId });

        if (!conversation) {
            conversation = new ChatConversation({ sessionId, messages: [] });
        }

        conversation.messages.push({ type, text });
        conversation.lastActivity = new Date();

        await conversation.save();

        res.json({
            success: true,
            message: 'Message saved',
            data: conversation
        });
    } catch (error) {
        console.error('Save message error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to save message'
        });
    }
});

// POST /api/chat/capture-lead - Capture lead from chat
router.post('/capture-lead', async (req, res) => {
    try {
        const { sessionId, name, email, phone } = req.body;

        if (!sessionId || !name || !email) {
            return res.status(400).json({
                success: false,
                error: 'Missing required fields'
            });
        }

        // Update conversation with user info
        const conversation = await ChatConversation.findOne({ sessionId });
        if (conversation) {
            conversation.userInfo = { name, email, phone };
            conversation.leadCaptured = true;
            await conversation.save();
        }

        // Create lead in contacts
        const contact = new Contact({
            name,
            email,
            phone,
            message: 'Lead captured from AI chatbot',
            source: 'chat',
            status: 'new'
        });

        await contact.save();

        res.json({
            success: true,
            message: 'Lead captured successfully',
            data: { id: contact._id }
        });
    } catch (error) {
        console.error('Capture lead error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to capture lead'
        });
    }
});

// GET /api/chat/conversations - Get all conversations (admin)
router.get('/conversations', async (req, res) => {
    try {
        const { status, limit = 50, skip = 0 } = req.query;

        const query = status ? { status } : {};

        const conversations = await ChatConversation.find(query)
            .sort({ lastActivity: -1 })
            .limit(parseInt(limit))
            .skip(parseInt(skip));

        const total = await ChatConversation.countDocuments(query);

        res.json({
            success: true,
            data: conversations,
            total,
            limit: parseInt(limit),
            skip: parseInt(skip)
        });
    } catch (error) {
        console.error('Get conversations error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch conversations'
        });
    }
});

// GET /api/chat/conversation/:sessionId - Get single conversation
router.get('/conversation/:sessionId', async (req, res) => {
    try {
        const conversation = await ChatConversation.findOne({
            sessionId: req.params.sessionId
        });

        if (!conversation) {
            return res.status(404).json({
                success: false,
                error: 'Conversation not found'
            });
        }

        res.json({
            success: true,
            data: conversation
        });
    } catch (error) {
        console.error('Get conversation error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch conversation'
        });
    }
});

module.exports = router;
