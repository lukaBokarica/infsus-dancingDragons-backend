import mongoose from 'mongoose';

const genreSchema = mongoose.Schema({
    id: Number,
    name: String,
    //artistIds: Array,
    artistIds: {
        type: [Number],
        default: []
    }
});

const Genre = mongoose.model('genres', genreSchema);
export default Genre;