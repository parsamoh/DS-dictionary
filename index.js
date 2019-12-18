const csv = require('csv-parser')
const fs = require('fs')
const results = [];
 
fs.createReadStream('./dictionery.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {

    const jsonContent = JSON.stringify(results);


      fs.writeFile('./dictionary.json' , jsonContent , (err) => {
          console.log
      })
    
  });