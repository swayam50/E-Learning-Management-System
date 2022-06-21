const path = require('path');

const index = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
};

const entry = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'entry.html'));
};

module.exports = {
    index,
    entry
};