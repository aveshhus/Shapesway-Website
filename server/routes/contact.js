const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { body, validationResult } = require('express-validator');

// POST /api/contact - Submit contact form
router.post('/',
    [
        body('name').trim().notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Valid email is required'),
        body('message').trim().notEmpty().withMessage('Message is required')
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { name, email, phone, service, message } = req.body;

            const contact = new Contact({
                name,
                email,
                phone,
                service,
                message,
                source: 'contact_form'
            });

            await contact.save();

            // TODO: Send email notification to admin

            res.status(201).json({
                success: true,
                message: 'Thank you for contacting us! We will get back to you soon.',
                data: { id: contact._id }
            });
        } catch (error) {
            console.error('Contact form error:', error);
            res.status(500).json({
                success: false,
                error: 'Failed to submit contact form. Please try again.'
            });
        }
    }
);

// GET /api/contact - Get all contacts (admin only)
router.get('/', async (req, res) => {
    try {
        const { status, limit = 50, skip = 0 } = req.query;

        const query = status ? { status } : {};

        const contacts = await Contact.find(query)
            .sort({ createdAt: -1 })
            .limit(parseInt(limit))
            .skip(parseInt(skip));

        const total = await Contact.countDocuments(query);

        res.json({
            success: true,
            data: contacts,
            total,
            limit: parseInt(limit),
            skip: parseInt(skip)
        });
    } catch (error) {
        console.error('Get contacts error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch contacts'
        });
    }
});

// PATCH /api/contact/:id - Update contact status
router.patch('/:id', async (req, res) => {
    try {
        const { status, notes } = req.body;
        const contact = await Contact.findById(req.params.id);

        if (!contact) {
            return res.status(404).json({
                success: false,
                error: 'Contact not found'
            });
        }

        if (status) contact.status = status;
        if (notes) contact.notes.push({ text: notes, addedBy: 'Admin' });

        await contact.save();

        res.json({
            success: true,
            message: 'Contact updated successfully',
            data: contact
        });
    } catch (error) {
        console.error('Update contact error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to update contact'
        });
    }
});

module.exports = router;
