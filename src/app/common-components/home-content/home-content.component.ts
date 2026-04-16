import { Component,HostListener,OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home-content',
  standalone: false,
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent  {

  departmentList_data: any;
  collegeList_data:any;
  kvkList_data:any;
  departmentCount_data: any;
  collegeCount_data: any;
  kvkCount_data: any;
  Activity_data:any;
  countclg1: any;
  countclg2: any;
  displayedDepartmentList: any;
  displayedKvkList: any;
  displayedClgList: any;
  infra_List_data: any;
  infraList: any;
  router: any;
  kvkListAfterTrim:any;

  bookIconImg: string = environment.PhotoUrl + 'home-book-icon.png';
  AllCollegeIcon: string = environment.PhotoUrl + 'home-icon-all-college.jpg';
  
  displayedData: any; // This will hold the data to display
  maxItems: number = 4; // Default to 4 for smaller screens
  constituteData:any
  affiliatedData: any;

  //code by tushil
  dephoverIndex: number = 0;
  conclghoverIndex: number = 0;
  affclghoverIndex: number = 0;
  kvkhoverIndex: number = 0;


 
  Department_Images = [
    { img: `${environment.PhotoUrl}home-icon-ABM.jpg`, description: 'Agri Business Management' },    
    { img: `${environment.PhotoUrl}home-icon-economics.jpg`, description: 'Agricultural Economics' },
    { img: `${environment.PhotoUrl}home-icon-extension.jpeg`, description: 'Agricultural Extension' },
    { img: `${environment.PhotoUrl}home-icon-micro.jpg`, description: 'Agricultural Microbiology' },
    { img: `${environment.PhotoUrl}home-icon-APFE.jpg`, description: 'Agricultural Processing & Food Engineering' },
    { img: `${environment.PhotoUrl}	home-icon-Stat.jpg`, description: 'Agricultural Statistics' },
    { img: `${environment.PhotoUrl}home-icon-agrometrology.png`, description: 'Agrometeorolgy' },
    { img: `${environment.PhotoUrl}home-icon-agronomy.jpg`, description: 'agronomy' },
    { img: `${environment.PhotoUrl}home-icon-entomology.jpg`, description: 'Entomology' },
    { img: `${environment.PhotoUrl}home-icon-FMPE.jpg`, description: 'Farm Machinery and Power Engineering' },
    { img: `${environment.PhotoUrl}home-icon-floriculture.jpg`, description: 'Floriculture and Landscape' },
    { img: `${environment.PhotoUrl}home-icon-forestry.jpg`, description: 'Forestry' },
    { img: `${environment.PhotoUrl}	home-icon-fruit_science.jpg`, description: 'Fruit Science' },
    { img: `${environment.PhotoUrl}home-icon-GPB.jpg`, description: 'Genetics and Plant Breeding' },
    { img: `${environment.PhotoUrl}home-icon-PMBB.jpg`, description: 'PMBB' },
    { img: `${environment.PhotoUrl}home-icon-PLPATH.jpg`, description: 'Plant Path' },
    { img: `${environment.PhotoUrl}	home-icon-Physiology.jpg`, description: 'Plant Physioogy' },
    { img: `${environment.PhotoUrl}home-icon-SWE.jpg`, description: 'Soil and Water Engg.' },
    { img: `${environment.PhotoUrl}home-icon-SoilS.jpg`,description:'Soil Science and Agricultural Chemistry'},
    { img: `${environment.PhotoUrl}home-icon-vegetable_science.jpg`,description:'Vegetable Scinece'},
  ];


  Constituent_College_Images = [
    { img: `${environment.PhotoUrl}home-icon-all-college.jpg`,description:'COA Raipur'},
    { img: `${environment.PhotoUrl}home-icon-all-college.jpg`,description:'BTC Bilaspur'},
    { img: `${environment.PhotoUrl}home-icon-all-college.jpg`,description:'RMD Ambikapur'},
    { img: `${environment.PhotoUrl}home-icon-all-college.jpg`,description:'SG Jagdalpur'},
    { img: `${environment.PhotoUrl}home-icon-all-college.jpg`,description:'BRSM Mungeli'},
    { img: `${environment.PhotoUrl}home-icon-all-college.jpg`,description:'SK Kawardha'},
    { img: `${environment.PhotoUrl}home-icon-all-college.jpg`,description:'COA Janjgir-Champa'},
    { img: `${environment.PhotoUrl}home-icon-all-college.jpg`,description:'DKS Bhatapara'},

  ];

  Affiliated_College_Images = [
    { img:`${environment.PhotoUrl}home-icon-all-college.jpg`,description:'Bhartiya College Durg'},
    { img:`${environment.PhotoUrl}home-icon-all-college.jpg`,description:'Chhattisgarh College Bhilai'},
    { img: `${environment.PhotoUrl}home-icon-all-college.jpg`,description:'Mahamaya College Dhamtari'},
    { img:`${environment.PhotoUrl}home-icon-all-college.jpg`,description:'Bhartiya Engg. College Durg'},
    { img: `${environment.PhotoUrl}home-icon-all-college.jpg`,description:'Bhoramdeo College Kawardha'},
    { img: `${environment.PhotoUrl}home-icon-all-college.jpg`,description:'CG College Engg. Bhilai'},
    { img: `${environment.PhotoUrl}home-icon-all-college.jpg`,description:'COA Dantewada'},
    { img: `${environment.PhotoUrl}home-icon-all-college.jpg`,description:'COA Raigarh'},
    { img: `${environment.PhotoUrl}home-icon-all-college.jpg`,description:'MDS Ambikapur'},
    { img: `${environment.PhotoUrl}home-icon-all-college.jpg`,description:'Shriram College Rajnandgaon'},
    { img: `${environment.PhotoUrl}home-icon-all-college.jpg`,description:'Ramnivas Sharda College Rajnandgaon'},

  ];
  kvkData: any;
  affilatedClgdata: any;
  affiliatedClgData: any;
  afilatedCampus: any;
  setKvk: any;
  
  constructor(private ds:DataService){}

  ngOnInit(): void{
    this.getDpartmentlist();
    this.getcollegeList();
    this.getKvklist();
    this.getInfraStructureList(59)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.adjustDisplayData();
  }

  adjustDisplayData() {
    const screenWidth = window.innerWidth;
    // Department
    this.maxItems = screenWidth <= 768 ? 4 : this.displayedDepartmentList?.length;
    this.displayedData = this.displayedDepartmentList?.slice(0, this.maxItems);
   // ConstituteDate College 
   this.maxItems = screenWidth <= 768 ? 4 : this.displayedClgList?.length;
   this.constituteData = this.displayedClgList?.slice(0, this.maxItems);
     // kvk
   this.maxItems = screenWidth <= 768 ? 4 : this.setKvk?.length;
   this.kvkData = this.setKvk?.slice(0, this.maxItems);
      // Affiliated collage
    this.maxItems = screenWidth <= 768 ? 4 : this.affilatedClgdata?.length;
    this.afilatedCampus = this.affilatedClgdata?.slice(0, this.maxItems);
  
  //  this.maxItems = screenWidth <= 768 ? 4 : this.displayedClgList?.length;
  //  this.constituteData = this.displayedClgList?.slice(0, this.maxItems);

  }


  getDpartmentlist(){
    const office_id = null;
    this.ds.postapi(`department/departmentList/${office_id}`,null).subscribe((result:any)=>{
      if(result){
        this.departmentList_data = result;
        this.departmentCount_data = result?.length;
        this.displayedDepartmentList = this.departmentList_data?.slice(0, 8);
        this.adjustDisplayData();
      } else{
        this.departmentList_data = [];
        this.departmentCount_data = [];
        this.displayedDepartmentList = [];
      }
    },(error)=>{
      console.error('Error fetching department', error);
    })
  }


  getcollegeList(){
    const college_type_id=null;
    const office_id=null;
    this.ds.postapi(`college/CollegeTypeList/${college_type_id},${office_id}`,null).subscribe((result:any)=>{
      if(result){
        this.collegeList_data = result;
        this.collegeCount_data = result.length;
        const constituentClg = this.collegeList_data.filter((college: { College_Type_Id: number; }) => college.College_Type_Id === 1).length;
        const affilatedClg = this.collegeList_data.filter((college: { College_Type_Id: number; }) => college.College_Type_Id === 2).length;
        this.countclg1 = constituentClg;
        this.countclg2 = affilatedClg
        this.displayedClgList = this.collegeList_data.slice(0, 8);
        this.affilatedClgdata = this.collegeList_data.filter((college: { College_Type_Id: number; }) => college.College_Type_Id === 2).slice(0, 11);
        this.adjustDisplayData()

      } else{
        this.collegeList_data = [];
        this.collegeCount_data = [];
        this.countclg1 = [];
        this.countclg2 = []
        this.displayedClgList = [];
        this.affilatedClgdata = []
      }
    },(error)=>{
      console.error('Error fetching college list', error);
    })
  }

  getKvklist(){
    this.ds.postapi('kvk/kvklist',null).subscribe((result:any)=>{
      if(result){
        this.kvkList_data = result;
        this.kvkCount_data = result.length;
        this.displayedKvkList = this.kvkList_data.slice(0, 8);
          this.kvkListAfterTrim = this.displayedKvkList.map((kvk: { office_name: string; }) => {
            const officeParts = kvk.office_name.split(',');
            // Return a new object with the split office name and district name
            return {
              ...kvk,
              officeName: officeParts[0].trim(),  // "Krishi Vigyan Kendra"
              districtName: officeParts[1] ? officeParts[1].trim() : ''  // "Bilaspur"
            };
          });
          this.setKvk = this.kvkListAfterTrim
          this.adjustDisplayData();
      } else{
        this.kvkList_data = [];
        this.kvkCount_data = [];
        this.displayedKvkList = [];
        this.kvkListAfterTrim = [];

      }
    },(error)=>{
      console.error('Error fetching kvk list', error);
    })
  }

  getInfraStructureList(id:number){
    this.ds.postapi(`officeInfrastrucutre/${id}`,null).subscribe((result:any)=>{
      if(result){
        this.infraList = result;
      } else{
        this.infraList = [];
      }
    },(error)=>{
      console.error('Error fetching infrastructure list', error);
    })
  }

  
}


// getcollegeList(){
//   const college_type_id=null;
//   const office_id=null;
//   this.ds.postapi(`college/CollegeTypeList/${college_type_id},${office_id}`,null).subscribe((result:any)=>{
//     if(result){
//       this.collegeList_data = result;
//       this.collegeCount_data = result.length;
//       const constituentClg = this.collegeList_data.filter((college: { College_Type_Id: number; }) => college.College_Type_Id === 1).length;
//       this.affilatedClgdata = this.collegeList_data.filter((college: { College_Type_Id: number; }) => college.College_Type_Id === 2).slice(0, 8);
//       const affilatedClg = this.collegeList_data.filter((college: { College_Type_Id: number; }) => college.College_Type_Id === 2).length;
//       this.countclg1 = constituentClg;
//       this.countclg2 = affilatedClg
//       this.displayedClgList = this.collegeList_data.slice(0, 8);
//       this.adjustDisplayData()
//     } else{
//       this.collegeList_data = [];
//       this.collegeCount_data = [];
//       this.countclg1 = [];
//       this.countclg2 = []
//       this.displayedClgList = [];
//       this.affilatedClgdata = []
//     }
//   },(error)=>{
//     console.error('Error fetching college list', error);
//   })
// }