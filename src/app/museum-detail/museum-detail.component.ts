import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MuseumListService } from '../services/museumList.service';

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {
  museumRef: string;
  museumName: string;
  museumAdress: string;
  museumZipCode: string;
  museumCity: string;
  museumPhone: string;
  museumWebSite: string;
  museumOpening: string;

  constructor(private museumListService: MuseumListService, private route: ActivatedRoute) { }

  ngOnInit() {
    const museumRef = this.route.snapshot.params['museumRef'];
    this.museumName = this.museumListService.getMuseumByRefMusee(museumRef).nom_du_musee;
    this.museumOpening = this.museumListService.getMuseumByOpening(museumRef).periode_ouverture;
  }

}
