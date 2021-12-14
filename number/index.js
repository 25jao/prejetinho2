module.exports = async function (context, req) {
    const fs = require('fs');
    const util = require('util');
    const readfile = util.promisify(fs.readFile);
    let num;
    await readfile('./content.txt', 'utf-8').then((data) => {
        console.log(data.toString());
        num = parseInt(data);
    });
    context.res = {
        status: 200,
        body: num
    };
}