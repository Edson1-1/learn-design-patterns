import { ImportFactory } from "./import-service/factory";
import { IDataDTO } from "./import-service/import.interface";




const importData = (source: string): IDataDTO => {

    const importer = new ImportFactory().createImporter(source);

    const data: IDataDTO = importer.import();
    importer.print();

    return data;

}





console.log('------ calling CSV importer --------');
let data:IDataDTO = importData('csv');

console.log('------ calling Hubspot importer --------');
data = importData('hubspot');



console.log('------ calling Random importer --------');
data = importData('xysy');
