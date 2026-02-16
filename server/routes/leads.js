const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// This route is similar to contact but specifically for leads
// Can be extended with additional lead-specific functionality

// GET /api/leads - Get all leads
router.get('/', async (req, res) => {
    try {
        const { source, status, limit = 50, skip = 0 } = req.query;

        const query = {};
        if (source) query.source = source;
        if (status) query.status = status;

        const leads = await Contact.find(query)
            .sort({ createdAt: -1 })
            .limit(parseInt(limit))
            .skip(parseInt(skip));

        const total = await Contact.countDocuments(query);

        // Get statistics
        const stats = {
            total: await Contact.countDocuments(),
            new: await Contact.countDocuments({ status: 'new' }),
            contacted: await Contact.countDocuments({ status: 'contacted' }),
            converted: await Contact.countDocuments({ status: 'converted' }),
            bySource: {
                contact_form: await Contact.countDocuments({ source: 'contact_form' }),
                chat: await Contact.countDocuments({ source: 'chat' }),
                whatsapp: await Contact.countDocuments({ source: 'whatsapp' })
            }
        };

        res.json({
            success: true,
            data: leads,
            stats,
            total,
            limit: parseInt(limit),
            skip: parseInt(skip)
        });
    } catch (error) {
        console.error('Get leads error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch leads'
        });
    }
});

module.exports = router;
