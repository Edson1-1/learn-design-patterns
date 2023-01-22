import { IDataDTO, IImport } from "./import.interface";

export class HubspotImport implements IImport {

    data: IDataDTO = {
        name: '',
        email: ''
    };


    import(): IDataDTO {
        const importedData: IDataDTO = {
            name: 'hubspot',
            email: 'hubspot@emai.com'
        }
        this.data = importedData;
        return importedData;
    }
    print(): void {
        console.log('imported hubspot data => : ', this.data);
    }


}