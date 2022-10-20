import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallbooks',
  templateUrl: './viewallbooks.component.html',
  styleUrls: ['./viewallbooks.component.css']
})
export class ViewallbooksComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }
  fetchData=()=>{
    this.myapi.viewData().subscribe(
      (data)=>{
        this.bookData=data
      }
    )
  }

  deleteBook=(id:any)=>{
    let data={
      "id":id
  }
  this.myapi.deleteBook(data).subscribe(
    (resp)=>{
      alert("Deleted")
    }
  )
  this.fetchData()
  }


  bookData:any=[]

  ngOnInit(): void {
  }

}
