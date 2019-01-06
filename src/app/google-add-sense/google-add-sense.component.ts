import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-google-add-sense',
  template:  ` <div>
   </div>   
  <br>            
`,
  styleUrls: ['./google-add-sense.component.css']
})


export class GoogleAddSenseComponent implements OnInit, AfterViewInit {
  
  @Input() Client: String  ;
  @Input() Slot:String;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(()=>{
     try{
       (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
     }catch(e){
       console.error("error");
     }
   },2000);
}  
}
