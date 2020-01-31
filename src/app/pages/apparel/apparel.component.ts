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
      pDesc: 'Be the Vigilante to save a city',
      additionalInfo: 'From the TV show, Arrow (not to be mistaken for the Cartoon)',
      price: '150',
      img: '/assets/imageFolder/Apparel/GreenArrow.png',
      quantity: 0
    },
    {
      id: '2',
      pName: 'Splinter Cell',
      pDesc: 'Live in the world of Sam Fisher and covertly save the world',
      additionalInfo: 'From the video game, Splinter Cell',
      price: '350',
      img: '/assets/imageFolder/Apparel/SplinterCell.png',
      quantity: 0
    },
    {
      id: '3',
      pName: 'Assassin\'s Creed',
      pDesc: 'I\'m on a mission to fight Crusaders',
      additionalInfo: 'From the video game series, Assassin\'s Creed',
      price: '100',
      img: '/assets/imageFolder/Apparel/AssassinsCreed.png',
      quantity: 0
    },
    {
      id: '4',
      pName: 'BioShock\'s Big Sister',
      pDesc: 'If you hear or see a Big Sister, best run',
      additionalInfo: 'From the video game, Bioshock 2',
      price: '130',
      img: '/assets/imageFolder/Apparel/BioshockBigSister.png',
      quantity: 0
    },
    {
      id: '5',
      pName: 'Brotherhood of Steel',
      pDesc: 'Without us, humanity is sure to perish',
      additionalInfo: 'From the popular video game series, Fallout',
      price: '300',
      img: '/assets/imageFolder/Apparel/BrotherhoodofSteel.png',
      quantity: 0
    },
    {
      id: '6',
      pName: 'Diablo\'s Malthiel',
      pDesc: 'The Angel of Death has come for you',
      additionalInfo: 'From the video game series, Diablo',
      price: '200',
      img: '/assets/imageFolder/Apparel/Diablo3Malthiel.png',
      quantity: 0
    },
    {
      id: '7',
      pName: 'Aquaman\'s Mera',
      pDesc: 'The absence of water is not my weakness. It\'s all of yours',
      additionalInfo: 'Character from the movie, Aquaman',
      price: '80',
      img: '/assets/imageFolder/Apparel/AquamanCera.png',
      quantity: 0
    },
    {
      id: '8',
      pName: 'Predator',
      pDesc: 'Go and be the hunter, instead of the hunted.',
      additionalInfo: 'From the movie, Predator',
      price: '180',
      img: '/assets/imageFolder/Apparel/Predator.png',
      quantity: 0
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
