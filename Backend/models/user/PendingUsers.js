import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    regNumber: {
        type: String,
        required: true,
        unique: true
    },
    specialization: {
        type: String,
    },
    researchArea: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "Image"
    }
}, {
    timestamps: true
})

const PendingUser = mongoose.model('PendingUsers', userSchema);
export default PendingUser;