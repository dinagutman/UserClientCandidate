import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpsService } from './https.service';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private httpService:HttpsService) { }
url='User/getAllCandidates';
  GetAllCandidate(){
   return this.httpService.get("User","getAllCandidates");
  }
}
