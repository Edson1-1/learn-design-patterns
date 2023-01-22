import { IDataDTO, IImport } from "./import.interface";

export class BaseImport implements IImport {

    data: IDataDTO = {
        name: '',
        email: ''
    };

    import(): IDataDTO {
        return this.data;
    }
    print(): void {
        console.log('base data => : ', this.data);
    }


}