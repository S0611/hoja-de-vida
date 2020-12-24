const path = require('path');

module.exports = (req, res, next) => {
    res.status(404).sendFile(path.resolve('public', 'pages','not-found.html'));
}