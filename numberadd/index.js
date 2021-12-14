const fs = require('fs');
const util = require('util');
module.exports = async function (context, req) {
    const readfile = util.promisify(fs.readFile);
    let num;
    const {n} = req.params;
    await readfile('./content.txt', 'utf-8').then((data) => {
        console.log(data.toString());
        num = parseInt(data);
        num += parseInt(n);
        writenum(num);
    });
    context.res = {
        status: 200,
        body: num
    };
}

async function writenum(numero){
    const writefile = util.promisify(fs.writeFile);
    await writefile('./content.txt',numero.toString(), 'utf-8');
}