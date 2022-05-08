import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    id: Number,
    firstName: String,
    lastName: String,
    dateOfBirth: String,
    username: String,
    password: String
});

const User = mongoose.model('users', userSchema);
export default User;