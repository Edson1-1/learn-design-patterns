import { ImportFactory } from "./factory";
import { IDataDTO } from "./import.interface";

export const importData = (source: string): IDataDTO => {

    const importer = new ImportFactory().createImporter(source);

    const data: IDataDTO = importer.import();
    importer.print();

    return data;

}
