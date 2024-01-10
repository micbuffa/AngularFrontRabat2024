export class Assignment {
  nom:string;
  dateDeRendu:Date;
  rendu:boolean;

  constructor(nom:string, dateDeRendu:Date, rendu:boolean) {
    this.nom = nom;
    this.dateDeRendu = dateDeRendu;
    this.rendu = rendu;
  }
}
