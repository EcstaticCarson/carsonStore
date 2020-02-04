import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss']
})
export class ObjectComponent implements OnInit {

  objects = [
    {
      id: '1',
      pName: 'Ninja\'s Kunai',
      pDesc: 'Whether it be Naruto or an actual Shinobi, a ninja must always have one',
      additionalInfo: 'Popularly used by Naruto/Shinobi fans',
      price: '10',
      img: 'src/assets/imageFolder/objects/CosplayObject.jpeg',
      quantity: 0
    },
    {
      id: '2',
        pName: 'Cosplay Swords',
        pDesc: 'A warrior must always have a blade to carry',
        additionalInfo: 'Design can be made at the specific request',
        price: '40',
        img: 'src/assets/imageFolder/objects/CosplaySwords.jpg',
        quantity: 0
    },
    {
      id: '3',
        pName: 'Cloud\'s Bastard Sword',
        pDesc: 'Wielding a sword like Cloud takes strength! Do you have it?',
        additionalInfo: 'Famously used by Final Fantasy 7 character: Cloud',
        price: '70',
        img: 'src/assets/imageFolder/objects/FF7CloudSword.jpg',
        quantity: 0
    },
    {
      id: '4',
        pName: 'Glass Daggers',
        pDesc: 'They\'re pretty, deadly, and powerful. What more do you want?',
        additionalInfo: 'Seen more commonly in Elder Scroll Series',
        price: '70',
        img: 'src/assets/imageFolder/objects/GlassDaggers.jpeg',
        quantity: 0
    },
    {
      id: '5',
        pName: 'Mercy\'s Staff & Plasma Gun',
        pDesc: 'Heroes never die!',
        additionalInfo: 'From the game Overwatch',
        price: '90',
        img: 'src/assets/imageFolder/objects/MercyOverwatchObjects.jpg',
        quantity: 0
    },
    {
      id: '6',
        pName: 'Reaper\'s Hellfire Shotguns',
        pDesc: 'The grave cannot hold me - Reaper',
        additionalInfo: 'From the game Overwatch',
        price: '40',
        img: 'src/assets/imageFolder/objects/ReaperGuns.jpg',
        quantity: 0
    },
    {
      id: '7',
        pName: 'Lothar\'s Sword',
        pDesc: 'Wield the sword of the Lion of Azeroth',
        additionalInfo: 'From the video game series: Warcraft',
        price: '60',
        img: 'src/assets/imageFolder/objects/WarcraftSword.jpg',
        quantity: 0
    },
    {
      id: '8',
        pName: 'The Master Sword',
        pDesc: 'Wield the Sword of Time and vanquish evil!',
        additionalInfo: 'From the video game series: Legend of Zelda',
        price: '50',
        img: 'src/assets/imageFolder/objects/ZeldaSword.jpg',
        quantity: 0
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
