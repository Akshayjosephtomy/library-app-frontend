import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  status:boolean=false

  name=""
  author=""
  pdate=""
  price=""
  readvalue=()=>{
    let data={
      "name":this.name,
      "author":this.author,
      "pdate":this.pdate,
      "price":this.price
    }
    console.log(data)
    this.myapi.addBook(data).subscribe(
      (response)=>{
        console.log(response)
        
      }
    )
    alert("book added successfully")
    this.name=""
    this.author=""
    this.pdate=""
    this.price=""
    this.status=true
  }

  ngOnInit(): void {
  }

}
