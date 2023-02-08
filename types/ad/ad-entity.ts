export interface NewAdEntity extends Omit<AdEntity, 'id'> {
    id?: string; //ominelismy id i wstawiamy id ktore jest nieobowiazkowe
}
export interface AdEntity {
    id: string;
    name: string;
    description: string;
    price: number;
    url: string;
    lat: number; //latitiude
    lon: number; //lontitiude
}