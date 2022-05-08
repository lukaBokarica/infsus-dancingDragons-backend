import mongoose from 'mongoose';

const agentSchema = mongoose.Schema({
    id: Number,
    artistId: Number,
    contractId: Number
});

const Agent = mongoose.model('agents', agentSchema);
export default Agent;