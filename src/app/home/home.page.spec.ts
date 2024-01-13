import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  newsList = [
    {
      title: 'Noticia 1',
      description: 'Caso Sobornos: Corte Nacional no dio paso a recursos de revisión planteados por dos empresarios sentenciados',
      image: 'https://www.eluniverso.com/resizer/df0rxH5FrCyDYUjBUy8lBzrusAo=/480x360/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/B2O3CPCMY5FMFNPCZ47HZB67UM.jpg',
    },
    {
      title: 'Noticia 2',
      description: 'Ecuador tendrá un plan de recompensas para quien reporte actos de terrorismo de manera anónima',
      image: 'https://www.eluniverso.com/resizer/mGAcx6i3TkJdDd8vXT6bffe5r4Q=/480x360/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/DT3P6MIKVBGXHEGDBJAHZODHXU.png',
    },
    {
      title: 'Noticia 3',
      description: '859 detenidos en cuatro días de operativos para combatir el terrorismo en el país',
      image: 'https://www.eluniverso.com/resizer/ThFxVEOPzx809KV57MJMZvc72OI=/480x360/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/V4KU6J7XR5CYVOQ2BUX57COE2A.jpg',
    },
    {
      title: 'Noticia 4',
      description: 'El año 2023 ha sido el más caluroso que se haya registrado, según un análisis de la NASA',
      image: 'https://www.eluniverso.com/resizer/4jWfyKbi_H38KfINs9L-rjH1zCc=/480x360/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/PWN7AP4MYZCIBBXY6BDD3ULLKE.png',
    },
    {
      title: 'Noticia 5',
      description: 'Propuesta de subir el IVA del 12 % al 15 % preocupa por efecto en precios y porque se plantea de forma permanente, según analistas',
      image: 'https://www.eluniverso.com/resizer/_B_JK_iU6_tvOb0-1_QR2-3f2Bw=/480x360/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/3C6BGH5HDKPXXA6X5P3Z5AE47I.jpg',
    },
  ];
}
