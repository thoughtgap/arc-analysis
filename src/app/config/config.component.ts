import { Component, OnInit } from '@angular/core';
import { ArcTimelineItem } from '../ArcTimelineItem';
import { ArcDataServerService } from '../arc-data-server.service'
import { MessageService } from '../message.service';
 
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  heroes: ArcTimelineItem[] = [];
  baseUrl: string;
 
  constructor(public ArcDataServer: ArcDataServerService) { }
 
  ngOnInit() {
    this.getBaseUrl();
    //this.getFilesStatus();
  }
 
  // Get only 1-5 entry
  // getHeroes(): void {
  //   this.ArcDataServer.getTimelineItemsNew()
  //     .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  // }

  /** Base URL Functions */
  getBaseUrl(): void {
    this.baseUrl = this.ArcDataServer.getBaseUrl();
  }
  setBaseUrl(): void {
    this.ArcDataServer.setBaseUrl(this.baseUrl);
  }
  resetBaseUrl(): void {
    this.ArcDataServer.resetBaseUrl();
  }



  filesExtract(): void {
    this.ArcDataServer.filesExtract()
      .subscribe(json => {
        alert("Finished extracting");
      });
  }

  layer2Reload(): void {
    this.ArcDataServer.filesJsonexportReload()
      .subscribe(json => {
        alert("Finished reloading");
      });
  }

  classificationsReload(): void {
    this.ArcDataServer.classificationsReload()
      .subscribe(json => {
        alert("Finished reloading");
      });
  }

}