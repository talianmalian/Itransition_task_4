class secureMessage {
    hmac;
    createHMAC(key, message) {
        const { createHmac } = require('crypto');
        const hmac = createHmac('sha256', key);
        hmac.update(message);
        this.hmac = hmac.digest('hex');
    }

};

module.exports = secureMessage;