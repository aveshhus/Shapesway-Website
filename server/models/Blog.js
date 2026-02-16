const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    excerpt: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        default: 'Shapesway Team'
    },
    category: {
        type: String,
        enum: ['Web Development', 'Mobile Apps', 'AI', 'Digital Marketing', 'Technology', 'Business'],
        default: 'Technology'
    },
    tags: [String],
    featured: {
        type: Boolean,
        default: false
    },
    published: {
        type: Boolean,
        default: false
    },
    featuredImage: String,
    metaTitle: String,
    metaDescription: String,
    views: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Update updatedAt on save
blogSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('Blog', blogSchema);
