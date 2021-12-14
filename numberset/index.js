const fs = require('fs');
const util = require('util');
module.exports = async function (context, req) {
    const {n} = req.params;
    num = parseInt(n);
    writenum(num);
    context.res = {
        status: 200,
        body: num
    };
}

async function writenum(numero){
    const writefile = util.promisify(fs.writeFile);
    await writefile('./content.txt',numero.toString(), 'utf-8');
}