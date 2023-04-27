import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CheckboxRequiredValidator } from '@angular/forms';
import { Candidate } from 'src/app/Model/Candidate';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-all-candidate-data',
  templateUrl: './all-candidate-data.component.html',
  styleUrls: ['./all-candidate-data.component.css']
})
export class AllCandidateDataComponent implements OnInit {

  displayedColumns: string[] = ['name', 'beginYear', 'lastUpdateDate', 'languages'];
  candidateList: Candidate[] = [];
  allLanguages = "";
  @Input() getChangeLan: string = "";
  @Input() getChangeExe: string = "";
  filterDatalist:  Candidate[] = [];
  constructor(private candidateSer: CandidateService) {
  }

  ngOnInit(): void {
    this.candidateSer.GetAllCandidate().subscribe((data: any) => {
      debugger
   this.filterDatalist= this.candidateList = data;
      this.convertLanguages();

    });
  }
  ngOnChanges(changes: SimpleChanges) {

    if (changes['getChangeLan'] && changes['getChangeLan'].currentValue)
    this.filterDatalist= this.candidateList.filter(x => x.languagesCodes.indexOf(changes['getChangeLan'].currentValue) >= 0 );
    this.checkExe(this.getChangeExe);
    if (changes['getChangeExe'] && changes['getChangeExe'].currentValue) {
      this.filterDatalist= this.candidateList.filter(x => x.languagesCodes.indexOf(this.getChangeLan) >= 0 );
      this.checkExe(changes['getChangeExe'].currentValue);
    }



  }
  checkExe(getChangeExe: string) {
    
        if (getChangeExe== "Junior") {
      this.filterDatalist = this.filterDatalist.filter(x => this.calculateYearsExperiences(x.beginYear) < 3);
      this.filterDatalist=this.filterDatalist.sort((a,b)=>this.sortByDate(b.beginYear,a.beginYear));
    }
    else if(getChangeExe== "Senior") {
      this.filterDatalist = this.filterDatalist.filter(x => this.calculateYearsExperiences(x.beginYear) >= 3);
    }  
  }
  
  calculateYearsExperiences(beginYear?: any) {
    let currentTime = new Date().getTime();
    let birthDateTime= new Date(beginYear).getTime();
    let difference = (currentTime - birthDateTime);
    return difference/(1000*60*60*24*365);
  }
  convertLanguages() {
    this.candidateList.forEach(element => {
      element.languagesCodes.forEach((lan: { name: string; }) => {
        this.allLanguages += lan.name + " , "
      }
      )
      element.languagesCodes = this.allLanguages;
      this.allLanguages = "";
    })
  }
  sortByDate(a?:Date,b?:Date){
    return b ? -1 : a ? 1 : 0;
  }





}

