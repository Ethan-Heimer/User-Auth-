const crypto = require('crypto');

function generateRandomKey() {
    const key = crypto.randomBytes(32);
    return key.toString('base64'); 
}

console.log("random key:", generateRandomKey());