import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  myDate = new Date();
  user:any;
   constructor(private api:ApiService,private router:Router){}

 hour=this.myDate.getHours()

  wish=`Good ${(this.hour<12 && 'morning') || (this.hour<17 && 'Afternoon') || (this.hour<20 && 'Evening') || (this.hour>20 && 'Night')}`;

   itemsong:any

   ngOnInit():void{
      this.api.getSong().subscribe(res=>{
        this.itemsong=res;
    })
   }

   playmusic(item:any){
    this.router.navigate(['/song',{id:item.id}])
   }

   userName=window.localStorage.getItem('userName')
}
