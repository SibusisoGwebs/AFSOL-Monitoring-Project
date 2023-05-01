import { Component, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchTerm = '';
  @Input() page!: string;

  constructor(activatedRoute: ActivatedRoute, private router: Router){
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm) this.searchTerm = this.searchTerm;
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
      this.router.navigateByUrl('search/'+term);
    }
  }

  searchMaintain(term: string):void{
    if(term){
      this.router.navigateByUrl(`fleet-monitor/${term}`);
    }
  }

}
