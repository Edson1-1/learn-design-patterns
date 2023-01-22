import { IDataDTO, IImport } from "./import.interface";

export class IntercomImport implements IImport {

    data: IDataDTO = {
        name: '',
        email: ''
    };

    import(): IDataDTO {
        const importedData: IDataDTO = {
            name: 'intercom',
            email: 'intercom@emai.com'
        }
        this.data = importedData;
        return importedData;
    }
    print(): void {
        console.log('imported intercom data => : ', this.data);
    }


}