import mongoose from 'mongoose';

const songSchema = mongoose.Schema({
    id: Number,
    title: String,
    albumId: Number
});

const Song = mongoose.model('songs', songSchema);
export default Song;