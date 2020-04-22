import { Component, Input, OnInit } from '@angular/core';
import { MuseumListService } from '../services/museumList.service';

@Component({
  selector: 'app-add-museum',
  templateUrl: './add-museum.component.html',
  styleUrls: ['./add-museum.component.css']
})
export class AddMuseumComponent implements OnInit {
  @Input() museumId : number;
  @Input() museumName : string;
  @Input() museumAdress : string;
  @Input() museumZipCode : string;
  @Input() museumCity : string;
  @Input() museumPhone : string;
  @Input() museumWebSite : string;
  @Input() museumOpening : string;
  constructor(private museumListService: MuseumListService) { }

  ngOnInit() {
  }

}
