import { Component,OnInit} from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-relax',
  templateUrl: './relax.component.html',
  styleUrls: ['./relax.component.css']
})
export class RelaxComponent implements OnInit {
  constructor(private api:ApiService){}
  melody:any;

 ngOnInit():void{
      this.api.getMelodies().subscribe(data=>{
       this.melody=data; 
      })
 }

 mSong(song:any){
  let audio=new Audio();
  audio.src=song;
  audio.play();
 }

}
