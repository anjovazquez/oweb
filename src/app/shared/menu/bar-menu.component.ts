import {Component, OnInit, NgZone, Inject} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {DialogService} from 'ontimize-web-ng2/ontimize';

@Component({
  moduleId: module.id,
  selector: 'bar-menu',
  templateUrl: 'bar-menu.component.html',
  styleUrls: ['bar-menu.component.css']
})
export class BarMenuComponent implements OnInit {

  public showVersionCallback: Function;

  constructor(private router: Router, private actRoute: ActivatedRoute,
      private zone: NgZone,  @Inject(DialogService) private dialogService: DialogService) {
  }

  public ngOnInit() {
    this.showVersionCallback = this.showVersion.bind(this);
  }

  public showVersion() {
    this.dialogService.alert('VERSION', '0.0.1');
  }

}
