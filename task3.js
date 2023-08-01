const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
    } else {
        const text = data.replace(/\s+/g, ' ').trim().split(' ');
        const words = text.filter(word => word !== ''); //removing empty strings
        console.log(`Total word count: ${words.length}`);
    }
});
