const path = require('path');

exports.index = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
};

exports.entry = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'entry.html'));
};