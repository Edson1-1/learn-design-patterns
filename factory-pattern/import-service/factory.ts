import { IImport } from "./import.interface";
import { HubspotImport } from "./hubspot";
import { IntercomImport } from "./intercom";
import { BaseImport } from "./base";

export class ImportFactory {

    createImporter(importer: string): IImport {
        switch(importer) {
            case 'hubspot': return new HubspotImport();

            case 'intercom': return new IntercomImport();

            default: return new BaseImport();
        }
    }
}