export class Tatto
{
  idTatto: number=0;
  nombre: string ="";
  idArtista: number=0;
  descripcion: string="";
  imagen: string="";

  constructor(idTatto: number, nombre:string,idArtista:number,descripcion: string,imagen:string){
    this.idTatto=idTatto;
    this.nombre=nombre;
    this.idArtista=idArtista;
    this.descripcion=descripcion;
    this.imagen=imagen;
  }

}
