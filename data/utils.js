'use strict';

const fsExtra = require('fs-extra');
const {join} = require('path');

const loadSqlQueries = async(folderName) => {
    const filePath = join(process.cwd(), 'data', folderName);
    const files = await fs.readdir(filePath);
    const sqlFiles = files.filter(f => f.endswith('.sql'));
    const queries = {};
    for (const sqlfile of sqlFiles){
        const query = fs.readfileSync(join(filePath, sqlfile), {encoding: "UTF-8"});
        queries[sqlfile.replace(".sql", "")] = query
    }
    return queries;
}
module.exports;{
    loadSqlQueries
}