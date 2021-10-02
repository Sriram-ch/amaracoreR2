import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Service } from './service';
import Tabulator from "tabulator-tables";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title: string = 'amaracoreR2';
  table: any;
  data: any[] = [];

  constructor(private service: Service) { }

  ngOnInit() {

    this.service.getData().subscribe((res: any) => {
      this.table.setData(res);
    });

    //Build Tabulator
    this.table = new Tabulator("#table", {
      placeholder: "No Data Available!",
      responsiveLayout: true,
      layout: "fitColumns",
      tooltips: true,
      height: 'inherit',
      pagination: "local",
      resizableColumns:true,
      paginationSize: 10,
      dataTree: false,
      columns: [
          { title: "#",field: "id", hozAlign: "center", headerSort: true, width: 100},
          { title: "Avatar", field: "avatar", hozAlign: "left", headerSort: false },
          { title: "First Name", field: "first_name", hozAlign: "center", headerSort: false },
          { title: "Last Name", field: "last_name", hozAlign: "center", headerSort: false },
          { title: "Phone", field: "phone", hozAlign: "center", headerSort: false },
          { title: "Email Id", field: "email", hozAlign: "center", headerSort: false },
          { title: "Company", field: "email", hozAlign: "center", headerSort: false },
          { title: "Job Title", field: "job_title", hozAlign: "center", headerSort: false },
      ],
  });
    
  }
}
