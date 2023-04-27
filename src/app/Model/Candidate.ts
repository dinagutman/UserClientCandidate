export class Candidate {
    name?: string
    beginYear?: Date
    lastUpdateDate?: Date
    languages?: any
  languagesCodes: any;

    constructor(name?: string, beginYear?: Date, lastUpdateDate?: Date, languages?: any[]) {
        this.name = name;
        this.beginYear=beginYear;
        this.lastUpdateDate=lastUpdateDate;
        this.languages=languages;
    }
}