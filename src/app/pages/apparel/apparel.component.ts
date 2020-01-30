import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apparel',
  templateUrl: './apparel.component.html',
  styleUrls: ['./apparel.component.scss']
})
export class ApparelComponent implements OnInit {

  apparels = [
    {
      id: '1',
      pName: 'Green Arrow',
      pDesc: '',
      additionalInfo: '',
      price: '$149.99',
      img: '/assets/imageFolder/Apparel/GreenArrow.png',
      quantity: 0
    },
    {
      id: '2',
      pName: 'Splinter Cell',
      pDesc: '',
      price: '$439.99',
      additionalInfo: '',
      img: '/assets/imageFolder/Apparel/SplinterCell.png',
      quantity: 0
    },
    {
      id: '3',
      pName: 'Assassin Creed',
      pDesc: '',
      price: '$99.99',
      additionalInfo: '',
      img: '/assets/imageFolder/Apparel/AssassinsCreed.png',
      quantity: 0
    },
    {
      id: '4',
      pName: 'BioShock Big Sister',
      pDesc: '',
      price: '$129.99',
      additionalInfo: '',
      img: '/assets/imageFolder/Apparel/BioshockBigSister.png',
      quantity: 0
    },
    {
      id: '5',
      pName: 'Brotherhood of Steel',
      pDesc: '',
      price: '$249.99',
      additionalInfo: '',
      img: '/assets/imageFolder/Apparel/BrotherhoodofSteel.png',
      quantity: 0
    },
    {
      id: '6',
      pName: 'Diablo Malthiel',
      pDesc: '',
      price: '$199.99',
      additionalInfo: '',
      img: '/assets/imageFolder/Apparel/Diablo3Malthiel.png',
      quantity: 0
    },
    {
      id: '7',
      pName: 'Aquamans Cera',
      pDesc: '',
      price: '$79.99',
      additionalInfo: '',
      img: '/assets/imageFolder/Apparel/AquamanCera.png',
      quantity: 0
    },
    {
      id: '8',
      pName: 'Predator',
      pDesc: '',
      price: '$179.99',
      additionalInfo: '',
      img: '/assets/imageFolder/Apparel/Predator.png',
      quantity: 0
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
