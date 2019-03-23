import { Component, OnInit } from '@angular/core';
import { ArcTimelineItem } from '../ArcTimelineItem';
import { ArcDataServerService } from '../arc-data-server.service'
import { MessageService } from '../message.service';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn, ReactiveFormsModule } from '@angular/forms';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-timeline-items-list',
  templateUrl: './timeline-items-list.component.html',
  styleUrls: ['./timeline-items-list.component.scss']
})
export class TimelineItemsListComponent implements OnInit {
  form: FormGroup;
  //heroes = TLITEMS;
  heroes: ArcTimelineItem[];
  public localData: ArcTimelineItem[];

  activityTypes: string[];


  /* Highcharts */
  Highcharts = Highcharts; // required
  chartConstructor = 'chart'; // optional string, defaults to 'chart'
  //chartOptions = { ... }; // required
  chartOptions = {
    series: [{
      data: [1, 2, 3]
    }]
  };
  //chartCallback = function (chart) { ... } // optional function, defaults to null
  updateFlag = false; // optional boolean
  oneToOneFlag = true; // optional boolean, defaults to false
  runOutsideAngular = false; // optional boolean, defaults to false





  constructor(private timelineItemListService: ArcDataServerService
    , private formBuilder: FormBuilder
    , private messageService: MessageService) {
  }



  onChanges(): void {

    // Subscribe to changes on the selectAll checkbox
    this.form.get('selectAll').valueChanges.subscribe(bool => {
      this.form
        .get('activityTypes')
        .patchValue(Array(this.activityTypes.length).fill(bool), { emitEvent: false });
    });

    // Subscribe to changes on the music preference checkboxes
    this.form.get('activityTypes').valueChanges.subscribe(val => {
      const allSelected = val.every(bool => bool);
      if (this.form.get('selectAll').value !== allSelected) {
        this.form.get('selectAll').patchValue(allSelected, { emitEvent: false });
      }
    });
  }

  ngOnInit() {
    //this.filter = this.timelineItemListService.filter;
    this.getActivityTypes();
    this.getTimelineItemsNew();

    this.onChanges();
  }

  submit() {
    console.log(this.form.value);

    // Filter out the unselected ids
    const selectedActivityTypes = this.form.value.activityTypes
      .map((checked, index) => checked ? this.activityTypes[index] : null)
      .filter(value => value !== null);

    console.log(selectedActivityTypes);
    this.timelineItemListService.filter.activityType = selectedActivityTypes;


    // Reload List after applying the filters
    this.getTimelineItemsNew();
  }


  // selectedTimelineItem: ArcTimelineItem;
  // onSelect(tlItem: ArcTimelineItem): void {
  //   this.messageService.add('Selected an entry');
  //   this.selectedTimelineItem = tlItem;
  // }

  getTimelineItemsNew(): void {
    console.log("component-getTimelineItemsNew()");
    this.timelineItemListService.getTimelineItemsNew()
      .subscribe(html => this.localData = html["response"]);
  }

  getActivityTypes(): void {
    this.timelineItemListService.getActivityTypes()
      .subscribe(html => {
        this.activityTypes = html["response"];

        // Initialise Form, source here http://marcusresell.com/2018/07/18/dynamic-checkbox-angular/
        // Create a FormControl for each available music preference, initialize them as unchecked, and put them in an array
        const formControls = this.activityTypes.map(control => new FormControl(false));

        // Create a FormControl for the select/unselect all checkbox
        const selectAllControl = new FormControl(false);

        // Simply add the list of FormControls to the FormGroup as a FormArray, add the selectAllControl separetely
        this.form = this.formBuilder.group({
          activityTypes: new FormArray(formControls),
          selectAll: selectAllControl
        });
      });

  }
}
