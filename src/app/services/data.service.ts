import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  signIn = false;
  signOut = true;

  products: IProduct[] = [
    {
      id: '1',
      pName: 'Green Arrow',
      pDesc: 'Be the Vigilante to save a city',
      additionalInfo: 'From the TV show, Arrow',
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
      pName: 'Assassin Creed',
      pDesc: 'While I thought that I was learning how to live, I have been learning how to die',
      additionalInfo: 'From the video game series, Assassin\'s Creed',
      price: '100',
      img: '/assets/imageFolder/Apparel/AssassinsCreed.png',
      quantity: 0
    },
    {
      id: '4',
      pName: 'BioShock Big Sister',
      pDesc: 'If you hear or see a Big Sister, best run',
      additionalInfo: 'From the video game, Bioshock 2',
      price: '130',
      img: '/assets/imageFolder/Apparel/BioshockBigSister.png',
      quantity: 0
    },
    {
      id: '5',
      pName: 'Brotherhood of Steel',
      pDesc: 'We are the only salvation this tortured planet and its people have. Without us, humanity is sure to perish',
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
      pName: 'Aquamans Mera',
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

  getProducts(): IProduct[] {
    return this.products;
  }

  getProduct(fantasy: string): Observable<IProduct> {
    return of(
      this.products.find(
        somethingElse => somethingElse.id === fantasy
      ));
  }
}
