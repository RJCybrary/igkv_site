import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-patent',
  standalone: false,
  templateUrl: './patent.component.html',
  styleUrls: ['./patent.component.scss']
})
export class PatentComponent implements OnInit {
  displayedColumns: string[] = [
    'Patent_Number',
    'Title',
    'Description',
    'Grant_Date',
    'Expiry_Date',
    'Year_of_Patent_Awarded',
    'File'
  ];
  dataSource = new MatTableDataSource<any>();
  imageUrl: string = environment.PhotoUrl + 'research-patents-banner.jpg';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private ds: DataService) {}

  ngOnInit() {
    this.getPatent();
  }

  getPatent() {
    this.ds.getapi(`patents_copyright/getAllPatentCopyrights/P`).subscribe((result: any) => {
      this.dataSource.data = result;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
