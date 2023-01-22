import { IImport } from "./import.interface";
import { HubspotImport } from "./hubspot";
import { CsvImport } from "./csv";
import { BaseImport } from "./base";

export class ImportFactory {

    createImporter(importer: string): IImport {
        switch(importer) {
            case 'hubspot': return new HubspotImport();

            case 'csv': return new CsvImport();

            default: return new BaseImport();
        }
    }
}