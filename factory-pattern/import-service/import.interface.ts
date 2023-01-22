export interface IDataDTO {
    name: string;
    email: string;
}

export interface IImport {
    data: IDataDTO;
    import(): IDataDTO;
    print(): void;
}