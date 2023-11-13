const bycrypt = require('bcrypt');
const mongoose = require('mongoose');

const schema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Your email address is required"],
        unique: true
    },

    username: {
        type: String,
        required: [true, 'Username is required'],
        minlength: 3,
    },

    createdAt: {
        type: Date,
        default: new Date()
    },
}, {
    collection: 'users',
    timestamp: true
});
  

userSchame.pre('save', async function(next){
    this.password = await bycrypt.hash(this.password, 12)
    next();
})

module.exports = mongoose.model("User", userSchema);