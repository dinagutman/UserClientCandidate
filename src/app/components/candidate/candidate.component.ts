import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']

})
export class CandidateComponent implements OnInit {
  allCandidate: any[] = []
  language:string[]=["Java","Angular","React", "NodeJS",".NET","C#" ,"Python","JS"];
  expirience:string[]=['Junior','Senior']
  exeChange: string ="";
  lanChange: string="";


  candidateForm: FormGroup = new FormGroup({});
  constructor(private CandidateSer: CandidateService) {
    this.createForm();
  }

  ngOnInit(): void {
  }
 
  createForm() {
    this.candidateForm = new FormGroup({
      experience: new FormControl('', [Validators.required]),
      language: new FormControl('', [Validators.required]),

    })
  }
  getSelected(){

     this.exeChange=this.candidateForm.get("experience")?.value;
     this.lanChange=this.candidateForm.get("language")?.value;
  }


}
