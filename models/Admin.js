import mongoose from 'mongoose';

const adminSchema = mongoose.Schema({
    userId: Number,
    position: String
});

const Admin = mongoose.model('admins', adminSchema);
export default Admin;