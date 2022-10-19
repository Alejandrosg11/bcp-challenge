import {Deserializable} from "./deserializable.model";

export class Agency implements Deserializable {
    public agencia: string;
    public distrito: string;
    public provincia: string;
    public departamento: string;
    public direccion: string;
    public lat: number;
    public lon: number;

    deserialize(input: any): this {
        return Object.assign(this, input);
    }
}