import { AdEntity } from "../types";
import { ValidationError } from "../utils/errors";

interface NewAdEntity extends Omit<AdEntity, 'id'> {
    id?: string; //ominelismy id i wstawiamy id ktore jest nieobowiazkowe
}

export class AdRecord implements AdEntity {
    public id: string;
    public name: string;
    public description: string;
    public price: number;
    public url: string;
    public lat: number;
    public lon: number;
    
    constructor(obj: NewAdEntity) {
        if (!obj.name || obj.name.length > 100) {
            throw new ValidationError('Nazwa ogloszenia nie moze byc pusta ani przekraczac 100 znakow.');
        }

        if (obj.description.length > 1000) {
            throw new ValidationError('Tresc ogloszenia nie moze przekraczac 1000 znakow.');
        }

        if (obj.price < 0 || obj.price > 9999999) {
            throw new ValidationError('Cena nie moze byc mniejsza od zero i wieksza od 9 999 999.')
        }

        //TODO: Check if URL is valid!
        if (!obj.url || obj.url.length > 100) {
            throw new ValidationError('Link ogloszenia ogloszenia nie moze byc pusty ani przekraczac 100 znakow.');
        }

        if (typeof obj.lat !== 'number' || typeof obj.lon !== 'number') {
            throw new ValidationError('Nie mozna zlokalizowac ogloszenia.')
        }

        this.name = obj.name;
        this.description = obj.description;
        this.price = obj.price;
        this.url = obj.url;
        this.lat = obj.lat;
        this.lon = obj.lon;
    }
}