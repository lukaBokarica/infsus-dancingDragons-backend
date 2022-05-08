import mongoose from 'mongoose';

const contractSchema = mongoose.Schema({
    id: Number,
    startDate: String,
    endDate: String,
    artistId: Number,
    agentId: Number,
    value: Number
});

const Contract = mongoose.model('contracts', contractSchema);
export default Contract;