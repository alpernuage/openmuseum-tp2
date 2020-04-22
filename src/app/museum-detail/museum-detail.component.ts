import { Component, OnInit, Input } from '@angular/core';
import { MuseumListService } from '../services/museumList.service';

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {
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
