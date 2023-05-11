import { Component, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchTerm = '';
  @Input() page!: string;
  user!: User;

  constructor(activatedRoute: ActivatedRoute, private router: Router, private authService: AuthenticateService){
    this.authService.userObservable.subscribe(user => {
      this.user = user;
    })
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm){
        this.searchTerm = this.searchTerm;
      }
    })
  }

  onPage(term: string){
    if(this.page === 'fleet'){
      this.search(term)
    }else{
      this.searchMaintain(term)
    }
  }

  search(term:string):void{
    if(term){
      this.router.navigateByUrl(this.user.name+'/search/'+term);
    }
  }

  searchMaintain(term: string):void{
    if(term){
      this.router.navigateByUrl(`fleet-monitor/${term}`);
    }
  }

}
