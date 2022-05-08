import mongoose from 'mongoose';

const artistSchema = mongoose.Schema({
    userId: Number,
    imageURL: String,
    artistName: String,
    genre: String,
    contract: Number,
    //albums: Array,
    albums: {
        type: [Number],
        default: []
    }
});

const Artist = mongoose.model('artists', artistSchema);
export default Artist;