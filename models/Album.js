import mongoose from 'mongoose';

const albumSchema = mongoose.Schema({
    id: Number,
    title: String,
    year: String,
    coverImage: String,
    //songIds: Array,
    songIds: {
        type: [Number],
        default: []
    }
});

const Album = mongoose.model('albums', albumSchema);
export default Album;