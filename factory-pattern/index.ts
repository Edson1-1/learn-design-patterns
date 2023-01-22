
import { importData } from "./import-service";

console.log('------ calling Intercom importer --------');
let data = importData('intercom');

console.log('------ calling Hubspot importer --------');
data = importData('hubspot');



console.log('------ calling CSV importer --------'); 
// we dont have an implementation for that but it will return an empty object
data = importData('csv');
