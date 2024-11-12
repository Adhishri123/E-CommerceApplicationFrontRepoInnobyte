import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonserviceService } from '../../../service/commonservice.service';

@Component({
  selector: 'app-postcategory',
  templateUrl: './postcategory.component.html',
  styleUrl: './postcategory.component.css'
})
export class PostcategoryComponent implements OnInit {

  constructor(private fb:FormBuilder,private http:CommonserviceService,private router:Router) { }

  categoryForm :FormGroup;

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      id:[0],
      name:[null,[Validators.required]],
      description:[null,[Validators.required]],
    });
  }

  onSubmit() {
      if(this.categoryForm.valid) {
         this.http.addCategory(this.categoryForm.value).subscribe(
          (data) => {
            if(data.id != null) {
              alert('Category posted successfully...!');
              this.router.navigateByUrl('/admin/dashboard');
            }
          }
         );
      }
  }

  // onSubmit() {
  //   this.http.addCategory(this.categoryForm.value).subscribe(
  //     (data:any) => {
  //       if(data.id != null) {
  //         console.log(data);
  //         alert('Category posted successfully...!');
  //         this.router.navigateByUrl("/admin/dashboard");
  //       }
  //     }
  //   );
  // }
}
