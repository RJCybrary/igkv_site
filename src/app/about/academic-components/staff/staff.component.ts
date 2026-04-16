import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';  // Import FormControl
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';


interface Content {
Office_Name: any; // The Content interface
  img_url: string;
  Employee_Name: string;
  Post_Name: string;
  Emp_id: Number;
}

@Component({
  selector: 'app-staff',
  standalone: false,
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent {

  /* for pagination */
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  pageSize = 30;
  currentPage = 0;
  paginatedContents: Content[] = [];

  officeControl = new FormControl();
  postControl = new FormControl();
  empControl = new FormControl();


  empployeeList_Data: any;
  Office_id: any;
  isshowUnLink: boolean = false;
  imageUrl: string = environment.PhotoUrl + 'staff_banner_1.jpg';
  // searchControl: FormControl = new FormControl('');  // Initialize the search control
  // searchDesignationControl: FormControl = new FormControl('');  // Initialize search control for designation


  errorImage: any=environment.PhotoUrl + 'Img_notFound.png';
  start_id:number = 0;

  postList: any[] = [];
  officeList: any[] = [];
  empList: any [] = [];
  totalRecords: number = 0; // Initialize it with 0



  filteredOfficeList: { Post_Office_Code: any; Office_Name: string }[] = [];
  filteredPostList: { Post_Code: any; Post_Name: string }[] = [];
  filteredEmpList: { Emp_Id: any; Emp_FName_E: string }[] = [];


  event: any;
  getObject: any;
  selectedOfficeName: any;
  selectedDesignationeName: any;
  selectedEmployeeName: any;
  searchForm: FormGroup;
  employees: any[] = [];
  constructor(private fb: FormBuilder, private ds: DataService, private activateroute: ActivatedRoute, private route: Router) {
    this.searchForm = this.fb.group({
      Emp_FName_E: [''],
  });
  }

  StartRowFrom: any = 0
  ngOnInit(): void {
   
    this.activateroute.paramMap.subscribe((result) => {
      const currentUrl = this.route.url;
      this.Office_id = result.get('id');
      if (currentUrl.includes('about/staff')) {
        this.isshowUnLink = true;
        this.Office_id = '';
      }
      // else{
      //   this.selectedOffice=this.Office_id
      // }

      this.getOfficeList();
      this.getoPostList();
      this.getEmpIDList();
      this.getdata();

    
      this.officeControl.valueChanges.subscribe((value) => {
        this.filterOffices(value || '');
      });
      
      this.postControl.valueChanges.subscribe((value) => {
        this.filterDesignition(value || '');
      });
      
      this.empControl.valueChanges.subscribe((value) => {
        this.filterEmplyee(value || '');
      });
      

    });
   

  }

//   onSearch(): void {
//     const filters = this.searchForm.value;
//     this.ds.searchEmployeeDetails(filters).subscribe((response) => {
//         this.employees = response.employees;
//     });
// }


currentPages: number = 1;  // Initialize the current page to 1

changePage(direction: string): void {
  // Update the currentPage based on the direction ('next' or 'previous')
  if (direction === 'next') {
    this.currentPages++;
  } else if (direction === 'previous' && this.currentPages > 1) {
    this.currentPages--;
  }

  // Trigger the getdata method with the updated currentPage
  this.getdata(this.currentPages);
}

getdata(pageNumber: number = 1): void {
  // Get the selected filter values
  const emp_id = this.selectedEmployee || '';
  const designation = this.selectedDesignation || '';
  const office = this.Office_id || '';
  const filters = this.searchForm.value.Emp_FName_E || '';  // Ensure default value if no filter applied
  const pageSize = 30;
  const startRowFrom = (pageNumber - 1) * pageSize;
  const queryString = `${emp_id},${designation},${office},${filters},${startRowFrom},${pageSize}`;
  
  // Call the API
  this.ds.postapi(`allStaffDetails/empSearch/${queryString}`, null).subscribe(
    (result: any) => {
      this.loading = false;
      this.employees = result.employees || [];
      this.empployeeList_Data = result.employeeOverview || [];
      this.totalRecords = result.employeeOverview?.length || 0; 
      this.updatePaginatedContents();  // Update pagination contents if needed
    },
    (error) => {
      console.error('API Error:', error);
      this.employees = [];  // Handle the error case gracefully
    }
  );
}




  loading: boolean = true;
  selectedDesignation: any | null = null;
  selectedOffice: any | null = null;
  selectedEmployee: any | null = null;

  onErrorImage(event: any) {
    event.target.src = this.errorImage;
  }



  onOfficeSelected(event: MatAutocompleteSelectedEvent): void {
    const selectedOffice = event.option.value; 
    if (selectedOffice) {
      this.Office_id = selectedOffice.Post_Office_Code; 
      this.selectedOfficeName = selectedOffice.Office_Name; 

    }
    this.getdata();
  }
  
  onPostSelected(event: MatAutocompleteSelectedEvent): void {
    const selectedDesignation = event.option.value; 
    if (selectedDesignation) {
      this.selectedDesignation = selectedDesignation.Post_Code; 
      this.selectedDesignationeName = selectedDesignation.Post_Name; 
    }
    this.getdata(); 
  }

  onEmpSelected(event: MatAutocompleteSelectedEvent): void {
    const selectedEmployee = event.option.value; 
    if (selectedEmployee) {
      this.selectedEmployee = selectedEmployee.Emp_Id; 
      this.selectedEmployeeName = selectedEmployee.Emp_FName_E; 
    }
    this.getdata();
  }
  


  getOfficeList(){
    this.ds.postapi('allStaffDetails/getOffice', null).subscribe((result: any) => {
      this.officeList = result.officeDetails;
      this.filteredOfficeList = [...this.officeList]; // Initialize filtered list
    });
  } 

  getoPostList(){
    this.ds.postapi(`allStaffDetails/getPost`,null).subscribe((result:any)=>{
      this.postList = result.officeDetails;  // Store the result in officeList
      this.filteredPostList = [...this.postList]; // Initialize filtered list
    })
  } 

  getEmpIDList(){
    this.ds.postapi(`allStaffDetails/getEmpId`,null).subscribe((result:any)=>{
      this.empList = result.officeDetails;  // Store the result in officeList
      this.filteredEmpList = [...this.empList]; // Initialize filtered list
    })
  } 


filterOffices(value: string): void {
  const filterValue = value.toLowerCase();
  this.filteredOfficeList = this.officeList.filter((office: any) =>
    office.Office_Name.toLowerCase().includes(filterValue)
  );
}

filterDesignition(value: string): void {
  const filterValue = value.toLowerCase();
  this.filteredPostList = this.postList.filter((post: any) =>
    post.Post_Name.toLowerCase().includes(filterValue)
  );
}

filterEmplyee(value: string): void {
  const filterValue = value.toLowerCase();
  this.filteredEmpList = this.empList.filter((emp: any) =>
    emp.Emp_FName_E.toLowerCase().includes(filterValue)
  );
}

displayOfficeName(office: any): string {
  return office && office.Office_Name ? office.Office_Name : '';
}

displayPostName(post: any): string {
  return post ? post.Post_Name : '';
}

displayEmpName(emp: any): string {
  return emp ? emp.Emp_FName_E : '';
}


  getPageNumbers(): number[] {
    const totalPages = 20; 
    const pageNumbers = [];
    for (let i = 10; i <= totalPages * 10; i += 10) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }


  refreshPage() {
    window.location.reload();
  }

  /* code for pagination */

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedContents();
  }
  
  updatePaginatedContents() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedContents = this.empployeeList_Data.slice(startIndex, endIndex);
  }
  
}


