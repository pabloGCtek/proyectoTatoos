export class Artista{
    idArtista: number;
    intro: String;
    imagen: String;
    nombre: String;

    constructor(nombre: String, intro:String, imagen:String){
        
        this.intro = intro;
        this.nombre = nombre;
        this.imagen = imagen;
    }
}