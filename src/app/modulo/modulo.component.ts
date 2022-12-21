import { Component } from '@angular/core';
import DatosJson from "src/assets/TipoCita.json";

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.css']
})
export class ModuloComponent {

  tipos: any = DatosJson;
  TipoDocu: any[]=[]; // Declaración de la variable "items"

  constructor() {
    this.getXMLData();
  }

  async getXMLData() {
    const response = await fetch('../assets/TipoDocumento.xml');
    const text = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, 'text/xml');
    this.TipoDocu = Array.from(xml.querySelectorAll('tipod')).map(TipoDocu => {
      return {
        id: TipoDocu.getAttribute('id'),
        document: TipoDocu.textContent
        
      };
    });
  }

}
