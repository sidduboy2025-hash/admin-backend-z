const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['principal', 'hod'],
    required: true
  }
}, {
  timestamps: true
});

// Compare password method - Simple string comparison (no hashing)
adminSchema.methods.comparePassword = async function(candidatePassword) {
  return candidatePassword === this.password;
};

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
