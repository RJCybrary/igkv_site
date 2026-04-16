import { Component,  OnInit, ViewChild } from '@angular/core';
import {NgModule} from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

interface Content { // The Content interface
  title: string;
  date: string;
  about: string;
  src: string;
}

@Component({
  selector: 'app-nss-details',
  standalone: false,
  templateUrl: './nss-details.component.html',
  styleUrls: ['./nss-details.component.scss'],
}) 


export class NssDetailsComponent  implements OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

    // totalItems: number = 0;
    // itemsPerPage: number = 5;
    // paginatedPrograms: any[] = [];
  

  bannerImg:String=environment.PhotoUrl + 'StudentWelfare-NSS-AwarnessProgramDetails-banner.jpg';

  yoga_awareness = [
    { src: environment.PhotoUrl + 'StudentWelfare-PublicServices-AwarenessProgram-Yoga-1.jfif', title: 'Yoga Awareness and Demonstration Program',date:'12 June 2022',about:'Yoga demonstration program was organized by Indira Gandhi Agricultural University Raipur and The Yoga Institute Raipur to encourage people towards yoga.  On this occasion Mr. Ganesh Sharma, Honorable Chairman of Chhattisgarh Yoga Commission, was present as the chief guest and presided over by Dr. Girish Chandel Mani, Vice Chancellor, Indira Gandhi Agricultural University Raipur, all the students of National Service Scheme were present on this occasion.'},
    // { src: environment.PhotoUrl + 'StudentWelfare-PublicServices-AwarenessProgram-Yoga-2.JPG', title: 'Yoga Awareness and Demonstration Program',date:'12 June 2022',about:'Yoga demonstration program was organized by Indira Gandhi Agricultural University Raipur and The Yoga Institute Raipur to encourage people towards yoga.  On this occasion Mr. Ganesh Sharma, Honorable Chairman of Chhattisgarh Yoga Commission, was present as the chief guest and presided over by Dr. Girish Chandel Mani, Vice Chancellor, Indira Gandhi Agricultural University Raipur, all the students of National Service Scheme were present on this occasion.'},
    // { src: environment.PhotoUrl + 'StudentWelfare-PublicServices-AwarenessProgram-Yoga-3.JPG', title: 'Yoga Awareness and Demonstration Program',date:'12 June 2022',about:'Yoga demonstration program was organized by Indira Gandhi Agricultural University Raipur and The Yoga Institute Raipur to encourage people towards yoga.  On this occasion Mr. Ganesh Sharma, Honorable Chairman of Chhattisgarh Yoga Commission, was present as the chief guest and presided over by Dr. Girish Chandel Mani, Vice Chancellor, Indira Gandhi Agricultural University Raipur, all the students of National Service Scheme were present on this occasion.'},
    // { src: environment.PhotoUrl + 'StudentWelfare-PublicServices-AwarenessProgram-Yoga-4.JPG', title: 'Yoga Awareness and Demonstration Program',date:'12 June 2022',about:'Yoga demonstration program was organized by Indira Gandhi Agricultural University Raipur and The Yoga Institute Raipur to encourage people towards yoga.  On this occasion Mr. Ganesh Sharma, Honorable Chairman of Chhattisgarh Yoga Commission, was present as the chief guest and presided over by Dr. Girish Chandel Mani, Vice Chancellor, Indira Gandhi Agricultural University Raipur, all the students of National Service Scheme were present on this occasion.'},
   
  ];
  
  environment_day = [
    { src: environment.PhotoUrl + '	StudentStudentWelfare-NSS-AwarnessProgram-EnvironmentDay-1.jpg',title: 'Environment Day',date:'5 May 2022',about:'Like every year, World Environment Day was celebrated by planting trees, under the guidance of Hon’ble Vice-Chancellor Dr. Girish Chandel, under the joint auspices of the National Service Scheme’s student and student unit, resolved to preserve it by planting fruitful and shady plants in the university campus took a resolution. In this work sequence, the chief guest gave a detailed message on tree and water conservation.'},
    // { src: environment.PhotoUrl + '	StudentStudentWelfare-NSS-AwarnessProgram-EnvironmentDay-2.jpg',title: 'Environment Day',date:'5 May 2022',about:'Like every year, World Environment Day was celebrated by planting trees, under the guidance of Hon’ble Vice-Chancellor Dr. Girish Chandel, under the joint auspices of the National Service Scheme’s student and student unit, resolved to preserve it by planting fruitful and shady plants in the university campus took a resolution. In this work sequence, the chief guest gave a detailed message on tree and water conservation.'},
    // { src: environment.PhotoUrl + '	StudentStudentWelfare-NSS-AwarnessProgram-EnvironmentDay-3.jpg',title: 'Environment Day',date:'5 May 2022',about:'Like every year, World Environment Day was celebrated by planting trees, under the guidance of Hon’ble Vice-Chancellor Dr. Girish Chandel, under the joint auspices of the National Service Scheme’s student and student unit, resolved to preserve it by planting fruitful and shady plants in the university campus took a resolution. In this work sequence, the chief guest gave a detailed message on tree and water conservation.'},
    // { src: environment.PhotoUrl + '	StudentStudentWelfare-NSS-AwarnessProgram-EnvironmentDay-4.jpg',title: 'Environment Day',date:'5 May 2022',about:'Like every year, World Environment Day was celebrated by planting trees, under the guidance of Hon’ble Vice-Chancellor Dr. Girish Chandel, under the joint auspices of the National Service Scheme’s student and student unit, resolved to preserve it by planting fruitful and shady plants in the university campus took a resolution. In this work sequence, the chief guest gave a detailed message on tree and water conservation.'},

  ];

  world_bicycle_day = [
    { src: environment.PhotoUrl + '	StudentStudentWelfare-NSS-AwarnessProgram-World_Bicycle_Day-1.jpg',title: 'World Bicycle Day ',date:'3 June 2022',about:'On the occasion of World Cycle Day 3rd June 2022. The volunteers of National Service Scheme took out a cycle rally from Agriculture College to University, Dharampura and Administrative Building, Dr. (Major) GK Srivastava, Dean Student Welfare and Dr. M.P. Thakur, Dean Agriculture College, Raipur.Hon’ble Vice-Chancellor Dr. Girish Chandel, Indira Gandhi Agricultural University gave a message to encourage all the volunteers to use cycles in their daily routine.'},
    // { src: environment.PhotoUrl + '	StudentStudentWelfare-NSS-AwarnessProgram-World_Bicycle_Day-2.jpg',title: 'World Bicycle Day ',date:'3 June 2022',about:'On the occasion of World Cycle Day 3rd June 2022. The volunteers of National Service Scheme took out a cycle rally from Agriculture College to University, Dharampura and Administrative Building, Dr. (Major) GK Srivastava, Dean Student Welfare and Dr. M.P. Thakur, Dean Agriculture College, Raipur.Hon’ble Vice-Chancellor Dr. Girish Chandel, Indira Gandhi Agricultural University gave a message to encourage all the volunteers to use cycles in their daily routine.'},
    // { src: environment.PhotoUrl + '	StudentStudentWelfare-NSS-AwarnessProgram-World_Bicycle_Day-3.jpg',title: 'World Bicycle Day ',date:'3 June 2022',about:'On the occasion of World Cycle Day 3rd June 2022. The volunteers of National Service Scheme took out a cycle rally from Agriculture College to University, Dharampura and Administrative Building, Dr. (Major) GK Srivastava, Dean Student Welfare and Dr. M.P. Thakur, Dean Agriculture College, Raipur.Hon’ble Vice-Chancellor Dr. Girish Chandel, Indira Gandhi Agricultural University gave a message to encourage all the volunteers to use cycles in their daily routine.'},
    // { src: environment.PhotoUrl + '	StudentStudentWelfare-NSS-AwarnessProgram-World_Bicycle_Day-4.jpg',title: 'World Bicycle Day ',date:'3 June 2022',about:'On the occasion of World Cycle Day 3rd June 2022. The volunteers of National Service Scheme took out a cycle rally from Agriculture College to University, Dharampura and Administrative Building, Dr. (Major) GK Srivastava, Dean Student Welfare and Dr. M.P. Thakur, Dean Agriculture College, Raipur.Hon’ble Vice-Chancellor Dr. Girish Chandel, Indira Gandhi Agricultural University gave a message to encourage all the volunteers to use cycles in their daily routine.'},
  ];

  ambedakar_jayanti = [
    { src: environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-AmbedkarJayanti-1.jpg',title: 'DR BHIMRAO AMBEDKAR JAYANTI ',about:'Dr. Bhimrao Ambedkar Jayanti celebration was done under the joint auspices of Agriculture College Raipur and National Service Scheme.  Hon’ble Vice Chancellor Dr. Girish Chandel was present as the chief guest on this occasion.  On this occasion, 150 students of the National Service Scheme boys and girls unit were present.',date:'14 April 2022'},
    // { src: environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-AmbedkarJayanti-2.jpg',title: 'DR BHIMRAO AMBEDKAR JAYANTI ',about:'Dr. Bhimrao Ambedkar Jayanti celebration was done under the joint auspices of Agriculture College Raipur and National Service Scheme.  Hon’ble Vice Chancellor Dr. Girish Chandel was present as the chief guest on this occasion.  On this occasion, 150 students of the National Service Scheme boys and girls unit were present.',date:'14 April 2022'},
    // { src: environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-AmbedkarJayanti-3.jpg',title: 'DR BHIMRAO AMBEDKAR JAYANTI ',about:'Dr. Bhimrao Ambedkar Jayanti celebration was done under the joint auspices of Agriculture College Raipur and National Service Scheme.  Hon’ble Vice Chancellor Dr. Girish Chandel was present as the chief guest on this occasion.  On this occasion, 150 students of the National Service Scheme boys and girls unit were present.',date:'14 April 2022'},
    // { src: environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-AmbedkarJayanti-4.jpg',title: 'DR BHIMRAO AMBEDKAR JAYANTI ',about:'Dr. Bhimrao Ambedkar Jayanti celebration was done under the joint auspices of Agriculture College Raipur and National Service Scheme.  Hon’ble Vice Chancellor Dr. Girish Chandel was present as the chief guest on this occasion.  On this occasion, 150 students of the National Service Scheme boys and girls unit were present.',date:'14 April 2022'},

  ];

  world_tobacco_day = [
    { src: environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-World_Tobacco_Day-1.jpg',title: 'World Tobacco Day',about:'On 31st May 2022, on the occasion of World Tobacco Day, a rally was organized by Agriculture College, Raipur National Service Scheme Girls unit for tobacco prohibition awareness and protested by telling side effects of tobacco cigarettes and burning Gutka pouches.  Also took an oath to stay away from it.',date:'31st May 2022'},
    // { src: environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-World_Tobacco_Day-2.jpg',title: 'World Tobacco Day',about:'On 31st May 2022, on the occasion of World Tobacco Day, a rally was organized by Agriculture College, Raipur National Service Scheme Girls unit for tobacco prohibition awareness and protested by telling side effects of tobacco cigarettes and burning Gutka pouches.  Also took an oath to stay away from it.',date:'31st May 2022'},
    // { src: environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-World_Tobacco_Day-3.jpg',title: 'World Tobacco Day',about:'On 31st May 2022, on the occasion of World Tobacco Day, a rally was organized by Agriculture College, Raipur National Service Scheme Girls unit for tobacco prohibition awareness and protested by telling side effects of tobacco cigarettes and burning Gutka pouches.  Also took an oath to stay away from it.',date:'31st May 2022'},
    // { src: environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-World_Tobacco_Day-4.jpg',title: 'World Tobacco Day',about:'On 31st May 2022, on the occasion of World Tobacco Day, a rally was organized by Agriculture College, Raipur National Service Scheme Girls unit for tobacco prohibition awareness and protested by telling side effects of tobacco cigarettes and burning Gutka pouches.  Also took an oath to stay away from it.',date:'31st May 2022'},
  ];

  health_checkup_camp = [
    { src: environment.PhotoUrl + '	StudentStudentWelfare-NSS-AwarnessProgram-Health_Checkup_Camp-1.jpg',title: 'Health Checkup Camp',about:'A health check-up camp for the students of the college was organized by the National Service Scheme under the joint auspices of Horizon Hospital.  Dr. Sharma Orthopedic specialist provided various types of bone related information to the students and all the officers and employees of the college through seminars, as well as blood pressure sugar test, blood test and bone density test of the students also done.',date:' 23 June 2022'},
    // { src: environment.PhotoUrl + '	StudentStudentWelfare-NSS-AwarnessProgram-Health_Checkup_Camp-2.jpg',title: 'Health Checkup Camp',about:'A health check-up camp for the students of the college was organized by the National Service Scheme under the joint auspices of Horizon Hospital.  Dr. Sharma Orthopedic specialist provided various types of bone related information to the students and all the officers and employees of the college through seminars, as well as blood pressure sugar test, blood test and bone density test of the students also done.',date:' 23 June 2022'},
    // { src: environment.PhotoUrl + '	StudentStudentWelfare-NSS-AwarnessProgram-Health_Checkup_Camp-3.jpg',title: 'Health Checkup Camp',about:'A health check-up camp for the students of the college was organized by the National Service Scheme under the joint auspices of Horizon Hospital.  Dr. Sharma Orthopedic specialist provided various types of bone related information to the students and all the officers and employees of the college through seminars, as well as blood pressure sugar test, blood test and bone density test of the students also done.',date:' 23 June 2022'},
    // { src: environment.PhotoUrl + '	StudentStudentWelfare-NSS-AwarnessProgram-Health_Checkup_Camp-4.jpg',title: 'Health Checkup Camp',about:'A health check-up camp for the students of the college was organized by the National Service Scheme under the joint auspices of Horizon Hospital.  Dr. Sharma Orthopedic specialist provided various types of bone related information to the students and all the officers and employees of the college through seminars, as well as blood pressure sugar test, blood test and bone density test of the students also done.',date:' 23 June 2022'},
  ];

  Vaccination_Camp =[
    {src:environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Vaccination_Camp-1.jpg',title:'Covid-19 Booster Dose Vaccination Camp',date:'23 July 2022',about:'A Covid-19 booster dose vaccination camp was organized at the IGKV Community Hall, in which all the students, officers and employees of the University campus got benefited from it.'},
    // {src:environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Vaccination_Camp-2.jpg',title:'Covid-19 Booster Dose Vaccination Camp',date:'23 July 2022',about:'A Covid-19 booster dose vaccination camp was organized at the IGKV Community Hall, in which all the students, officers and employees of the University campus got benefited from it.'},
    // {src:environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Vaccination_Camp-1.jpg',title:'Covid-19 Booster Dose Vaccination Camp',date:'23 July 2022',about:'A Covid-19 booster dose vaccination camp was organized at the IGKV Community Hall, in which all the students, officers and employees of the University campus got benefited from it.'},
    // {src:environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Vaccination_Camp-2.jpg',title:'Covid-19 Booster Dose Vaccination Camp',date:'23 July 2022',about:'A Covid-19 booster dose vaccination camp was organized at the IGKV Community Hall, in which all the students, officers and employees of the University campus got benefited from it.'},

  ];

  hareli_tihaar =[
    {src:environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Hareli_Tihaar-1.jpg',title:'Hareli  Tihaar',date:'28 July 22',about:'On the occasion of Hareli festival, Chhattisgarhi games were organized among all the students of Indira Gandhi Krishi Vishvidayalay Campas, in which Tug  War, Phugary, Geydi Running   coconut throwing, worshiping bulls and agricultural machinery on this occasion and tree plantation program was also organized.  '},
    // {src:environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Hareli_Tihaar-2.jpg',title:'Hareli  Tihaar',date:'28 July 22',about:'On the occasion of Hareli festival, Chhattisgarhi games were organized among all the students of Indira Gandhi Krishi Vishvidayalay Campas, in which Tug  War, Phugary, Geydi Running   coconut throwing, worshiping bulls and agricultural machinery on this occasion and tree plantation program was also organized.  '},
    // {src:environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Hareli_Tihaar-4.jpg',title:'Hareli  Tihaar',date:'28 July 22',about:'On the occasion of Hareli festival, Chhattisgarhi games were organized among all the students of Indira Gandhi Krishi Vishvidayalay Campas, in which Tug  War, Phugary, Geydi Running   coconut throwing, worshiping bulls and agricultural machinery on this occasion and tree plantation program was also organized.  '},
    // {src:environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Hareli_Tihaar-3.jpg',title:'Hareli  Tihaar',date:'28 July 22',about:'On the occasion of Hareli festival, Chhattisgarhi games were organized among all the students of Indira Gandhi Krishi Vishvidayalay Campas, in which Tug  War, Phugary, Geydi Running   coconut throwing, worshiping bulls and agricultural machinery on this occasion and tree plantation program was also organized.  '},
  ];
  har_ghar_tiranga =[
    {src:environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-HarGharTiranga-1.jpg',title:'HAR GHAR TRICANGA  PROGRAM ',date:'13 to 15 August 2022',about:'Har Ghar Tiranga program was organized by Agricultural College Raipur National Service Scheme from 13 to 15 August 2022 under the Amrit Mahotsav of Independence.  In which Hon’ble Vice-Chancellor along with all the students and  officers and employees participated in this flag march rally.'},
    // {src:environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-HarGharTiranga-2.jpg',title:'HAR GHAR TRICANGA  PROGRAM ',date:'13 to 15 August 2022',about:'Har Ghar Tiranga program was organized by Agricultural College Raipur National Service Scheme from 13 to 15 August 2022 under the Amrit Mahotsav of Independence.  In which Hon’ble Vice-Chancellor along with all the students and  officers and employees participated in this flag march rally.'},
    // {src:environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-HarGharTiranga-3.jpg',title:'HAR GHAR TRICANGA  PROGRAM ',date:'13 to 15 August 2022',about:'Har Ghar Tiranga program was organized by Agricultural College Raipur National Service Scheme from 13 to 15 August 2022 under the Amrit Mahotsav of Independence.  In which Hon’ble Vice-Chancellor along with all the students and  officers and employees participated in this flag march rally.'},
    // {src:environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-HarGharTiranga-4.jpg',title:'HAR GHAR TRICANGA  PROGRAM ',date:'13 to 15 August 2022',about:'Har Ghar Tiranga program was organized by Agricultural College Raipur National Service Scheme from 13 to 15 August 2022 under the Amrit Mahotsav of Independence.  In which Hon’ble Vice-Chancellor along with all the students and  officers and employees participated in this flag march rally.'},
  ];
  independence_day =[
    {src:environment.PhotoUrl + '	StudentStudentWelfare-NSS-AwarnessProgram-IndependenceDay-1.jpg',title:'INDEPENDENCE DAY',date:'15 August 2022',about:'Plantation program was done by NSS Students on the day of independence Day'},
    // {src:environment.PhotoUrl + '	StudentStudentWelfare-NSS-AwarnessProgram-IndependenceDay-2.jpg',title:'INDEPENDENCE DAY',date:'15 August 2022',about:'Plantation program was done by NSS Students on the day of independence Day'},
    // {src:environment.PhotoUrl + '	StudentStudentWelfare-NSS-AwarnessProgram-IndependenceDay-3.jpg',title:'INDEPENDENCE DAY',date:'15 August 2022',about:'Plantation program was done by NSS Students on the day of independence Day'},
    // {src:environment.PhotoUrl + '	StudentStudentWelfare-NSS-AwarnessProgram-IndependenceDay-4.jpg',title:'INDEPENDENCE DAY',date:'15 August 2022',about:'Plantation program was done by NSS Students on the day of independence Day'},
  ];

  blood_donation_camp =[
    {src:environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-BloodDonationCamp-1.jpg',title:'Blood Donation Camp ',date:'27 September 2022',about:'A blood donation camp was organized by National Service Scheme Agriculture College, Raipur under the joint auspices of Ramakrishna Care Hospital Raipur, in which 70 students donated blood.  On this occasion, Dr. KL Nandeha, Dean, College of Agriculture, Raipur addressed the students and encouraged them.'},
    // {src:environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-BloodDonationCamp-2.jpg',title:'Blood Donation Camp ',date:'27 September 2022',about:'A blood donation camp was organized by National Service Scheme Agriculture College, Raipur under the joint auspices of Ramakrishna Care Hospital Raipur, in which 70 students donated blood.  On this occasion, Dr. KL Nandeha, Dean, College of Agriculture, Raipur addressed the students and encouraged them.'},
    // {src:environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-BloodDonationCamp-3.jpg',title:'Blood Donation Camp ',date:'27 September 2022',about:'A blood donation camp was organized by National Service Scheme Agriculture College, Raipur under the joint auspices of Ramakrishna Care Hospital Raipur, in which 70 students donated blood.  On this occasion, Dr. KL Nandeha, Dean, College of Agriculture, Raipur addressed the students and encouraged them.'},
    // {src:environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-BloodDonationCamp-4.jpg',title:'Blood Donation Camp ',date:'27 September 2022',about:'A blood donation camp was organized by National Service Scheme Agriculture College, Raipur under the joint auspices of Ramakrishna Care Hospital Raipur, in which 70 students donated blood.  On this occasion, Dr. KL Nandeha, Dean, College of Agriculture, Raipur addressed the students and encouraged them.'},
  ];
  world_heart_day =[
    {src:environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-World_Heart_Day-1.jpg',title:'“World heart Day” Walkathon (Fast walking)',date:'29 September 2022',about:'A walkathon rally was organized by by NH MMI Narayana Multispeciality Hospital on the occasion of International Heart Day.  45 Volunteers of Agricultural College National Service Scheme Girls Unit participated in this rally.'},
    // {src:environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-World_Heart_Day-2.jpg',title:'“World heart Day” Walkathon (Fast walking)',date:'29 September 2022',about:'A walkathon rally was organized by by NH MMI Narayana Multispeciality Hospital on the occasion of International Heart Day.  45 Volunteers of Agricultural College National Service Scheme Girls Unit participated in this rally.'},
    // {src:environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-World_Heart_Day-3.jpg',title:'“World heart Day” Walkathon (Fast walking)',date:'29 September 2022',about:'A walkathon rally was organized by by NH MMI Narayana Multispeciality Hospital on the occasion of International Heart Day.  45 Volunteers of Agricultural College National Service Scheme Girls Unit participated in this rally.'},
    // {src:environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-World_Heart_Day-4.jpg',title:'“World heart Day” Walkathon (Fast walking)',date:'29 September 2022',about:'A walkathon rally was organized by by NH MMI Narayana Multispeciality Hospital on the occasion of International Heart Day.  45 Volunteers of Agricultural College National Service Scheme Girls Unit participated in this rally.'},

  ]; 
  
  swachchh_bharat_abhiyaan =[
    {src:environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Swachchh_Bharat_Abhiyaan-1.jpg',title:'Swachchh Bharat Abhiyaan',date:'2 October 2022',about:'Swachh Bharat Abhiyan 2.0, 1 to 30 October 2022 A cleanliness and awareness program was organized by the Agricultural College Raipur National Service Scheme on 19 October 2022 under the mega cleanliness drive.  In which a rally was organized and slogans were raised to make people aware of cleanliness.'},
    // {src:environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Swachchh_Bharat_Abhiyaan-2.jpg',title:'Swachchh Bharat Abhiyaan',date:'2 October 2022',about:'Swachh Bharat Abhiyan 2.0, 1 to 30 October 2022 A cleanliness and awareness program was organized by the Agricultural College Raipur National Service Scheme on 19 October 2022 under the mega cleanliness drive.  In which a rally was organized and slogans were raised to make people aware of cleanliness.'},
    // {src:environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Swachchh_Bharat_Abhiyaan-3.jpg',title:'Swachchh Bharat Abhiyaan',date:'2 October 2022',about:'Swachh Bharat Abhiyan 2.0, 1 to 30 October 2022 A cleanliness and awareness program was organized by the Agricultural College Raipur National Service Scheme on 19 October 2022 under the mega cleanliness drive.  In which a rally was organized and slogans were raised to make people aware of cleanliness.'},
    // {src:environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Swachchh_Bharat_Abhiyaan-4.jpg',title:'Swachchh Bharat Abhiyaan',date:'2 October 2022',about:'Swachh Bharat Abhiyan 2.0, 1 to 30 October 2022 A cleanliness and awareness program was organized by the Agricultural College Raipur National Service Scheme on 19 October 2022 under the mega cleanliness drive.  In which a rally was organized and slogans were raised to make people aware of cleanliness.'},
  ];

  adventure_camp =[
    {src:environment.PhotoUrl + '	StudentStudentWelfare-NSS-AwarnessProgram-AdventureCamp-1.jpg',title:'Adventure Camp',date:'14 to 23, October 2022',about:'Government of India, Ministry of Youth Affairs and Sports, Directorate of National Service Scheme, organized an adventure camp for the year 2022 in Manali, Himachal Pradesh from 14 to 23 October 2022 as per the instructions of Delhi.  Kumari Chanchal Thakur and Kumari Neeta Bhai BSC BSC first year participated in this camp.'},
    // {src:environment.PhotoUrl + '	StudentStudentWelfare-NSS-AwarnessProgram-AdventureCamp-2.jpg',title:'Adventure Camp',date:'14 to 23, October 2022',about:'Government of India, Ministry of Youth Affairs and Sports, Directorate of National Service Scheme, organized an adventure camp for the year 2022 in Manali, Himachal Pradesh from 14 to 23 October 2022 as per the instructions of Delhi.  Kumari Chanchal Thakur and Kumari Neeta Bhai BSC BSC first year participated in this camp.'},
    // {src:environment.PhotoUrl + '	StudentStudentWelfare-NSS-AwarnessProgram-AdventureCamp-3.jpg',title:'Adventure Camp',date:'14 to 23, October 2022',about:'Government of India, Ministry of Youth Affairs and Sports, Directorate of National Service Scheme, organized an adventure camp for the year 2022 in Manali, Himachal Pradesh from 14 to 23 October 2022 as per the instructions of Delhi.  Kumari Chanchal Thakur and Kumari Neeta Bhai BSC BSC first year participated in this camp.'},
    // {src:environment.PhotoUrl + '	StudentStudentWelfare-NSS-AwarnessProgram-AdventureCamp-4.jpg',title:'Adventure Camp',date:'14 to 23, October 2022',about:'Government of India, Ministry of Youth Affairs and Sports, Directorate of National Service Scheme, organized an adventure camp for the year 2022 in Manali, Himachal Pradesh from 14 to 23 October 2022 as per the instructions of Delhi.  Kumari Chanchal Thakur and Kumari Neeta Bhai BSC BSC first year participated in this camp.'},
  ]

  rashtriya_ekta_diwas =[
    {src:environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-RashtriyEktaDiwas-1.jpg',title:'Rashtriya Ekta Diwas',date:'31 October 2022',about:'On the occasion of Sardar Vallabhbhai Patel Jayanti, the program was organized all over India as National Unity Day.  On this occasion Unity Run was organized by Agriculture College Raipur National Service Scheme and oath of National Unity Day was administered in Agriculture College seminar hall.  A total of 50 girl students of the NSS Girls Unit were present in this event.'},
    // {src:environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-RashtriyEktaDiwas-2.jpg',title:'Rashtriya Ekta Diwas',date:'31 October 2022',about:'On the occasion of Sardar Vallabhbhai Patel Jayanti, the program was organized all over India as National Unity Day.  On this occasion Unity Run was organized by Agriculture College Raipur National Service Scheme and oath of National Unity Day was administered in Agriculture College seminar hall.  A total of 50 girl students of the NSS Girls Unit were present in this event.'},
    // {src:environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-RashtriyEktaDiwas-3.jpg',title:'Rashtriya Ekta Diwas',date:'31 October 2022',about:'On the occasion of Sardar Vallabhbhai Patel Jayanti, the program was organized all over India as National Unity Day.  On this occasion Unity Run was organized by Agriculture College Raipur National Service Scheme and oath of National Unity Day was administered in Agriculture College seminar hall.  A total of 50 girl students of the NSS Girls Unit were present in this event.'},
    // {src:environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-RashtriyEktaDiwas-4.jpg',title:'Rashtriya Ekta Diwas',date:'31 October 2022',about:'On the occasion of Sardar Vallabhbhai Patel Jayanti, the program was organized all over India as National Unity Day.  On this occasion Unity Run was organized by Agriculture College Raipur National Service Scheme and oath of National Unity Day was administered in Agriculture College seminar hall.  A total of 50 girl students of the NSS Girls Unit were present in this event.'},
  ];

  nss_volunteer_competition =[
    {src:environment.PhotoUrl + '	StudentStudentWelfare-NSS-AwarnessProgram-VolunteerCompetetion-1.jpg',title:'NSS Volunteer Competition',date:'22-23 November 2022',about:'A competition was organized among all the volunteers of Agriculture College Raipur National Service Scheme unit.  In which essay-debate and quiz, Rangoli and painting competitions were organized.  Its award was given by the Honorable Vice Chancellor on 26 November 2022.'},
    // {src:environment.PhotoUrl + '	StudentStudentWelfare-NSS-AwarnessProgram-VolunteerCompetetion-2.jpg',title:'NSS Volunteer Competition',date:'22-23 November 2022',about:'A competition was organized among all the volunteers of Agriculture College Raipur National Service Scheme unit.  In which essay-debate and quiz, Rangoli and painting competitions were organized.  Its award was given by the Honorable Vice Chancellor on 26 November 2022.'},
    // {src:environment.PhotoUrl + '	StudentStudentWelfare-NSS-AwarnessProgram-VolunteerCompetetion-3.jpg',title:'NSS Volunteer Competition',date:'22-23 November 2022',about:'A competition was organized among all the volunteers of Agriculture College Raipur National Service Scheme unit.  In which essay-debate and quiz, Rangoli and painting competitions were organized.  Its award was given by the Honorable Vice Chancellor on 26 November 2022.'},
    // {src:environment.PhotoUrl + '	StudentStudentWelfare-NSS-AwarnessProgram-VolunteerCompetetion-4.jpg',title:'NSS Volunteer Competition',date:'22-23 November 2022',about:'A competition was organized among all the volunteers of Agriculture College Raipur National Service Scheme unit.  In which essay-debate and quiz, Rangoli and painting competitions were organized.  Its award was given by the Honorable Vice Chancellor on 26 November 2022.'},
  ];

  constitution_day =[
    {src:environment.PhotoUrl + '	StudentStudentWelfare-NSS-AwarnessProgram-ConstitutionDay-1.jpg',title:'Constitution Day Of India',date:'26 December 2022',about:'On 26 December 2022, the Constitution Day was made by all the three units together.  The Preamble of the Constitution was read out by the Hon’ble Vice-Chancellor.  NSS volunteers of all units  were present in this programme.'},
    // {src:environment.PhotoUrl + '	StudentStudentWelfare-NSS-AwarnessProgram-ConstitutionDay-2.jpg',title:'Constitution Day Of India',date:'26 December 2022',about:'On 26 December 2022, the Constitution Day was made by all the three units together.  The Preamble of the Constitution was read out by the Hon’ble Vice-Chancellor.  NSS volunteers of all units  were present in this programme.'},
    // {src:environment.PhotoUrl + '	StudentStudentWelfare-NSS-AwarnessProgram-ConstitutionDay-3.jpg',title:'Constitution Day Of India',date:'26 December 2022',about:'On 26 December 2022, the Constitution Day was made by all the three units together.  The Preamble of the Constitution was read out by the Hon’ble Vice-Chancellor.  NSS volunteers of all units  were present in this programme.'},
    // {src:environment.PhotoUrl + '	StudentStudentWelfare-NSS-AwarnessProgram-ConstitutionDay-4.jpg',title:'Constitution Day Of India',date:'26 December 2022',about:'On 26 December 2022, the Constitution Day was made by all the three units together.  The Preamble of the Constitution was read out by the Hon’ble Vice-Chancellor.  NSS volunteers of all units  were present in this programme.'},
  ];

  internation_womens_day =[
    {src:environment.PhotoUrl + "StudentStudentWelfare-NSS-AwarnessProgram-InternationalWomen'sDay-1.jpg",title:'Innovation and Technology for Gender Equality and  Women’s Health',date:'17 March 2023',about:'On the occasion of International Women’s Day celebration 2023, a one-day seminar was organized by the college National Service Scheme student unit on March 17, 2023 at Seminar Hall Agriculture College Raipur.  The symposium was based on the theme "Innovation and Technology for Gender Equality and  Women’s Health".  This program was organized in the chief guest of Hon’ble V.C. Dr. Grish Chandel, Dean Student Welfare Dr. Sanjay Sharma Dean Agriculture College Raipur Dr. G K Das in the program, Keynote Speaker of the seminar Dr. Rita Venugopal Director  Women’s Study Center and Professor Physical Education School Pt. RSU, Raipur and Ms. Jaya Jadwani, a nationally renowned writer director speaker.  A total of 120 women officers and students of the university were present on this occasion.'},
    // {src:environment.PhotoUrl + "StudentStudentWelfare-NSS-AwarnessProgram-InternationalWomen'sDay-2.jpg",title:'Innovation and Technology for Gender Equality and  Women’s Health',date:'17 March 2023',about:'On the occasion of International Women’s Day celebration 2023, a one-day seminar was organized by the college National Service Scheme student unit on March 17, 2023 at Seminar Hall Agriculture College Raipur.  The symposium was based on the theme "Innovation and Technology for Gender Equality and  Women’s Health".  This program was organized in the chief guest of Hon’ble V.C. Dr. Grish Chandel, Dean Student Welfare Dr. Sanjay Sharma Dean Agriculture College Raipur Dr. G K Das in the program, Keynote Speaker of the seminar Dr. Rita Venugopal Director  Women’s Study Center and Professor Physical Education School Pt. RSU, Raipur and Ms. Jaya Jadwani, a nationally renowned writer director speaker.  A total of 120 women officers and students of the university were present on this occasion.'},
    // {src:environment.PhotoUrl + "StudentStudentWelfare-NSS-AwarnessProgram-InternationalWomen'sDay-3.jpg",title:'Innovation and Technology for Gender Equality and  Women’s Health',date:'17 March 2023',about:'On the occasion of International Women’s Day celebration 2023, a one-day seminar was organized by the college National Service Scheme student unit on March 17, 2023 at Seminar Hall Agriculture College Raipur.  The symposium was based on the theme "Innovation and Technology for Gender Equality and  Women’s Health".  This program was organized in the chief guest of Hon’ble V.C. Dr. Grish Chandel, Dean Student Welfare Dr. Sanjay Sharma Dean Agriculture College Raipur Dr. G K Das in the program, Keynote Speaker of the seminar Dr. Rita Venugopal Director  Women’s Study Center and Professor Physical Education School Pt. RSU, Raipur and Ms. Jaya Jadwani, a nationally renowned writer director speaker.  A total of 120 women officers and students of the university were present on this occasion.'},
    // {src:environment.PhotoUrl + "StudentStudentWelfare-NSS-AwarnessProgram-InternationalWomen'sDay-4.jpg",title:'Innovation and Technology for Gender Equality and  Women’s Health',date:'17 March 2023',about:'On the occasion of International Women’s Day celebration 2023, a one-day seminar was organized by the college National Service Scheme student unit on March 17, 2023 at Seminar Hall Agriculture College Raipur.  The symposium was based on the theme "Innovation and Technology for Gender Equality and  Women’s Health".  This program was organized in the chief guest of Hon’ble V.C. Dr. Grish Chandel, Dean Student Welfare Dr. Sanjay Sharma Dean Agriculture College Raipur Dr. G K Das in the program, Keynote Speaker of the seminar Dr. Rita Venugopal Director  Women’s Study Center and Professor Physical Education School Pt. RSU, Raipur and Ms. Jaya Jadwani, a nationally renowned writer director speaker.  A total of 120 women officers and students of the university were present on this occasion.'},

  ];

  pravaasi_bhartiya_diwas =[
    {src:environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-PravaasiDiwas-1.jpg',title:'Pravasi Bharatiya Divas program',date:'7-9 January 2023 ',about:'The Pravasi Bharatiya Divas program was organized from 7 to 9 January 2023 in Indore metropolis of Madhya Pradesh.  Ku. Pitambara Bareth, a student of the NSS Girls Unit, Raipur participated.'},
    // {src:environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-PravaasiDiwas-2.jpg',title:'Pravasi Bharatiya Divas program',date:'7-9 January 2023 ',about:'The Pravasi Bharatiya Divas program was organized from 7 to 9 January 2023 in Indore metropolis of Madhya Pradesh.  Ku. Pitambara Bareth, a student of the NSS Girls Unit, Raipur participated.'},
    // {src:environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-PravaasiDiwas-3.jpg',title:'Pravasi Bharatiya Divas program',date:'7-9 January 2023 ',about:'The Pravasi Bharatiya Divas program was organized from 7 to 9 January 2023 in Indore metropolis of Madhya Pradesh.  Ku. Pitambara Bareth, a student of the NSS Girls Unit, Raipur participated.'},
    // {src:environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-PravaasiDiwas-4.jpg',title:'Pravasi Bharatiya Divas program',date:'7-9 January 2023 ',about:'The Pravasi Bharatiya Divas program was organized from 7 to 9 January 2023 in Indore metropolis of Madhya Pradesh.  Ku. Pitambara Bareth, a student of the NSS Girls Unit, Raipur participated.'},
  ];

  allContents: Content[] = []; // Apply the Content type
  paginatedContents: Content[] = []; // Apply the Content type
  pageSize = 5;
  currentPage = 0;

  // currentPage: number = 1;
  currentSlide: number = 0;
  totalPages: number = 17;

  ngOnInit() {
    
    this.loadContents(); // Your method to load content
    this.updatePaginatedContents();
    setInterval(() => this.nextSlide(), 2000);  
    
  }


  loadContents() {
    // Load or fetch your data into allContents
    this.allContents = [
      
    ...this.environment_day,
    ...this.world_bicycle_day,
    ...this.yoga_awareness,
    ...this.world_tobacco_day,
    ...this.Vaccination_Camp,
    ...this.hareli_tihaar,
    ...this.har_ghar_tiranga,
    ...this.independence_day,
    ...this.blood_donation_camp,
    ...this.world_heart_day,
    ...this.swachchh_bharat_abhiyaan,
    ...this.adventure_camp,
    ...this.rashtriya_ekta_diwas,
    ...this.nss_volunteer_competition,
    ...this.constitution_day,
    ...this.internation_womens_day,
    ...this.pravaasi_bhartiya_diwas
      
    ];
  }
  

  updatePaginatedContents() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedContents = this.allContents.slice(startIndex, endIndex);
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedContents();
  }


  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.constitution_day.length;
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.currentSlide = 0; // Reset to the first slide of the new page
    }
  }

  // Move to the next page
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.currentSlide = 0; // Reset to the first slide of the new page
    }
  }
}
