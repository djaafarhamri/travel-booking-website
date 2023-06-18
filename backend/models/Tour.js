import mongoose from 'mongoose';

const tourSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,
        required: true,
    },
    adress: {
        type: String,
        required: true,
    },
    distance: {
        type: Number,
        required: true,
    },
    photo: {
        type: String,
    },
    desc: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    maxGroupSize: {
        type: Number,
        required: true
    },
    reviews: {
        type: mongoose.types.ObjectId,
        ref: 'Review'
    },
    featured: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

export default mongoose.model('Tour', tourSchema);
