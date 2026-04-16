import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute,Router, NavigationEnd } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-r-lab-facilities',
  standalone: false,
  templateUrl: './r-lab-facilities.component.html',
  styleUrls: ['./r-lab-facilities.component.scss']
})
export class RLabFacilitiesComponent {
  Office_id:any;
  Office_Head_Data: any;
  Office_Page_Data: any;
  facility:any;
  facility_img:any
  imageUrl: string = 'assets/images/about/prashasanik-bhavan.jpg';
  knowledge_centre_img:string=environment.PhotoUrl + 'research-KTRC-banner.jpeg';
  KTRC_HeadImg:string='https://igkv.ac.in/__Files/Service_Book/1886/Photo_Sign_Thumb/Photo__20240112124707423.jpg';
  Richharia_Lab_img:string=environment.PhotoUrl + 'research-RRL-banner.JPG';
  RABI_img:string=environment.PhotoUrl + 'research-R-ABI-banner.jpg';
  tissue_culture_img:string= environment.PhotoUrl + 'research-Tissue-Culture-Lab-banner.jpg';
  biocontrol_lab_img:string=environment.PhotoUrl + 'research-bio-control-lab.JPG';
  mushroom_lab_img:string=environment.PhotoUrl + 'research-mushroom-lab-banner.JPG';
  phytosanitary_lab_img:string=environment.PhotoUrl + 'reseach-Phytosanitary_Lab-banner.jpeg';
  HulasPathakImg:string=environment.PhotoUrl + 'research-RABI-hulas_pathak.jpg';
  onerrorImg:string=environment.PhotoUrl + 'Img_notFound.png';
  MriduMegha:string=environment.PhotoUrl + 'research-RABI-mridu-megha.jpg';
  abhijeet:string=environment.PhotoUrl + 'research-RABI-abhijeet-sharma.jpg';
  ashish:string=environment.PhotoUrl + 'research-RABI-ashish.jpg';
  NishiRaj :string=environment.PhotoUrl + 'research-RABI-NishiRaj.jpg';
  
  /* new */
  award_data:any;
  person_name!:string;
  person_post!:string;
  person_img!:string;
  infraList:any;
  Institution_setup_type_ID!:string;
  activities_data:any;
  errorImage:any=environment.PhotoUrl + 'no_image_available_1.jpg';
  currentUrl!:string;

  Abhinav =[
    { src: environment.PhotoUrl + 'research-RABI-abhinav.png',description:'ABHINAV'},
    // { src: environment.PhotoUrl + 'research-RABI-abhinav.png',description:'ABHINAV'},
    // { src: environment.PhotoUrl + 'research-RABI-abhinav.png',description:'ABHINAV'},
    // { src: environment.PhotoUrl + 'research-RABI-abhinav.png',description:'ABHINAV'},
    // Add more images as needed
  ];

  Udbhav =[
    { src: environment.PhotoUrl + 'reasearch-RABI-udbhav.png',description:'UDBHAV'},
    // { src: environment.PhotoUrl + 'reasearch-RABI-udbhav.png',description:'UDBHAV'},
    // { src: environment.PhotoUrl + 'reasearch-RABI-udbhav.png',description:'UDBHAV'},
    // { src: environment.PhotoUrl + 'reasearch-RABI-udbhav.png',description:'UDBHAV'},
    // Add more images as needed
  ];

  currentSlide = 0;
  infra_List_data: any;
  facility1: any;
  facility_img1: any;
  facility2: any;
  facility_img2: any;
  facility3: any;
  facility_img3: any;
  facility4: any;
  facility_img4: any;


  constructor(private ds: DataService, private activateroute: ActivatedRoute,private route:Router) {}

  ngOnDestroy() {
    this.infraList = [];
    this.Office_id = null;
  }

  ngOnInit(): void {

    setInterval(() => this.nextSlide(), 1000);
    
    this.activateroute.paramMap.subscribe((result) => {
      this.Office_id = result.get('id');
      if(this.Office_id==1070)
        { 
          this.imageUrl= this.Richharia_Lab_img;
          this.person_name = 'Dr. Satish Balkrishna Vernulkar';
          this.person_post = 'Head';
          this.person_img = environment.PhotoUrl +'s_b_verulakar.JPG';
           const Institution_setup_type_ID = '2'
          this.getInstSetListWithDetails(this.Office_id,Institution_setup_type_ID )
  
        }
        if(this.Office_id==1073){
          this.imageUrl=this.knowledge_centre_img;
          this.person_name = 'Dr. Dhananjay Sharma';
          this.person_post = 'Nodal Officer MIS';
          this.person_img = this.KTRC_HeadImg;
          const Institution_setup_type_ID = '23'
          this.getInstSetListWithDetails(this.Office_id,Institution_setup_type_ID );
         
  
        }
        if(this.Office_id==1072){
          this.imageUrl=this.RABI_img;
          this.person_name = 'Dr. Hulas Pathak';
          this.person_post = 'Head & Principal Investigator – Chief Executive Officer (PI-CEO)';
          this.person_img = this.HulasPathakImg;
          this.infraList = [];
        }
        if(this.Office_id==1014){
          this.imageUrl=this.tissue_culture_img;
          this.person_name = 'Dr. Lilaagar Singh Verma';
          this.person_post = 'Head';
          this.person_img = environment.PhotoUrl+'lilagar_singh_verma.JPG';
          this.infraList = [];
         
        }
        if(this.Office_id==1004){
          this.imageUrl=this.biocontrol_lab_img;
          this.person_name = 'Dr. Tapas Chaudhary';
          this.person_post = 'Head';
          this.person_img =  environment.PhotoUrl+'tapas_choudhary.JPG';
          this.infraList = [];
        }
        if(this.Office_id==1071){
          this.imageUrl=this.mushroom_lab_img;
          this.person_name = 'Dr. Narendra Lakpale';
          this.person_post = 'Head';
          this.person_img =  environment.PhotoUrl+'N_Lakpale.JPG';
          this.infraList = [];
        }
       
      
      this.getLabDetails();
      this.getawarddetails(this.Office_id);
      this.getactivitiesdetails(this.Office_id);
    });

    this.route.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = this.route.url;

        

      }
    });   
  }



  getInstSetListWithDetails(id1: string, id2: string) {
    this.ds.postapi(`officeInfrastrucutre/listwithdetails/${id1}/${id2}`, null).subscribe((result: any) => {
      if (result ) {
        // Add currentSlide property for each data item
        this.infraList = result.map((item: any) => ({
          ...item,
          currentSlide: 0, // Initialize currentSlide for each data item
          
        })); this.startSliders();
      } else {
        this.infraList = [];
      }
    }, (error) => {
      console.error('Error fetching infrastructure details', error);
    });
  }
  

  getLabDetails(){
    this.ds.postapi(`OfficeDetails/${this.Office_id}`,null).subscribe((result:any)=>{
      this.Office_Head_Data = result.Office_Head_Data[0];
      this.Office_Page_Data = result.Office_Page_Data[0];
    })
  }

  getawarddetails(id:any) {
    const unit_id = id;
    const section_id = '';
    const category_id = 11;
    const emp_id = '';
    const Website_Content_ID = '';
    const RowsPerPage = 6;
    const PageNumber = 1;
    this.ds
      .postapi(
        `ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,
        null
      )
      .subscribe((result: any) => {
        this.award_data = result;
      });
  }

  getactivitiesdetails(id:any) {
    const unit_id = id;
    const section_id = '';
    const category_id = '';
    const emp_id = '';
    const Website_Content_ID = '';
    const RowsPerPage = 6;
    const PageNumber = 1;
    this.ds
      .postapi(
        `ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,
        null
      )
      .subscribe((result: any) => {
        this.activities_data = result;
      });
  }

  OnErrorImage(event:any){
    event.target.src=this.errorImage
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.infraList?.length;
  }

  startSliders() {
    this.infraList.forEach((item: any, index: number) => {
      setInterval(() => {
        if (item.institutionSetup.imageList.length > 0) {
          item.currentSlide = (item.currentSlide + 1) % item.institutionSetup.imageList.length;
        }
      }, 1000); // Adjust interval as needed
    });
  }

}