const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
const { body, validationResult } = require('express-validator');

// GET /api/blog - Get all published blogs
router.get('/', async (req, res) => {
    try {
        const { category, featured, limit = 10, skip = 0 } = req.query;

        const query = { published: true };
        if (category) query.category = category;
        if (featured === 'true') query.featured = true;

        const blogs = await Blog.find(query)
            .select('-content') // Exclude full content for listing
            .sort({ createdAt: -1 })
            .limit(parseInt(limit))
            .skip(parseInt(skip));

        const total = await Blog.countDocuments(query);

        res.json({
            success: true,
            data: blogs,
            total,
            limit: parseInt(limit),
            skip: parseInt(skip)
        });
    } catch (error) {
        console.error('Get blogs error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch blogs'
        });
    }
});

// GET /api/blog/:slug - Get single blog by slug
router.get('/:slug', async (req, res) => {
    try {
        const blog = await Blog.findOne({
            slug: req.params.slug,
            published: true
        });

        if (!blog) {
            return res.status(404).json({
                success: false,
                error: 'Blog post not found'
            });
        }

        // Increment views
        blog.views += 1;
        await blog.save();

        res.json({
            success: true,
            data: blog
        });
    } catch (error) {
        console.error('Get blog error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch blog post'
        });
    }
});

// POST /api/blog - Create new blog (admin only)
router.post('/',
    [
        body('title').trim().notEmpty().withMessage('Title is required'),
        body('slug').trim().notEmpty().withMessage('Slug is required'),
        body('excerpt').trim().notEmpty().withMessage('Excerpt is required'),
        body('content').trim().notEmpty().withMessage('Content is required')
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const blog = new Blog(req.body);
            await blog.save();

            res.status(201).json({
                success: true,
                message: 'Blog post created successfully',
                data: blog
            });
        } catch (error) {
            console.error('Create blog error:', error);
            res.status(500).json({
                success: false,
                error: 'Failed to create blog post'
            });
        }
    }
);

// PUT /api/blog/:id - Update blog (admin only)
router.put('/:id', async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!blog) {
            return res.status(404).json({
                success: false,
                error: 'Blog post not found'
            });
        }

        res.json({
            success: true,
            message: 'Blog post updated successfully',
            data: blog
        });
    } catch (error) {
        console.error('Update blog error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to update blog post'
        });
    }
});

// DELETE /api/blog/:id - Delete blog (admin only)
router.delete('/:id', async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);

        if (!blog) {
            return res.status(404).json({
                success: false,
                error: 'Blog post not found'
            });
        }

        res.json({
            success: true,
            message: 'Blog post deleted successfully'
        });
    } catch (error) {
        console.error('Delete blog error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to delete blog post'
        });
    }
});

module.exports = router;
