const fs = require('fs');

const environmentName = <your-environment-file-name>
const collectionName = <your-collection-file-name>
const testDirectory = <your-test-directory>
  
const collection = require(`${testDirectory}/${collectionName}`);
const environment = require(`${testDirectory}/${environmentName}`);

const values = environment.values;
const adjustedValues = values.filter(variable => {
    return JSON.stringify(collection).includes(variable.key);
})

const newContents = () => {return {...environment, values: adjustedValues}};

fs.writeFile(`${testDirectory}/${environmentName}`, JSON.stringify(newContents()), (err) => {
    err ? console.error(err) :
    console.log("File processed succesfully")
})
