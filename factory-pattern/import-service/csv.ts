import { IDataDTO, IImport } from "./import.interface";

export class CsvImport implements IImport {

    data: IDataDTO = {
        name: '',
        email: ''
    };

    import(): IDataDTO {
        const importedData: IDataDTO = {
            name: 'csv',
            email: 'csv@emai.com'
        }
        this.data = importedData;
        return importedData;
    }
    print(): void {
        console.log('imported csv data => : ', this.data);
    }


}