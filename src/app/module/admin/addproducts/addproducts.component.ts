import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonserviceService } from '../../../service/commonservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrl: './addproducts.component.css'
})
export class AddproductsComponent implements OnInit {

  constructor(private fb:FormBuilder,private http:CommonserviceService,private router:Router) { }

  productForm:FormGroup;
  listofcategories:any = [];
  selectedFile:File | null;
  imagePreview:string | ArrayBuffer | null;

  ngOnInit(): void {
    this.productForm =this.fb.group({
      categoryId:[null,[Validators.required]],
      name:[null,[Validators.required]],
      price:[null,[Validators.required]],
      description:[null,[Validators.required]],
      stock:[null,[Validators.required]],
      createdAt:[null,[Validators.required]],
      updatedAt:[null,[Validators.required]],
    });
    this.getAllCategory();
  }

  getAllCategory() {
    this.http.getAllCategory().subscribe(
      (res) => {
        this.listofcategories = res;
      }
    );
  }

  onFileSelected(event:any) {
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }

  previewImage() {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    }
    reader.readAsDataURL(this.selectedFile);
  }

  onSubmit() {
    if(this.productForm.valid) {
      const formData: FormData = new FormData();
      formData.append('image',this.selectedFile);
      formData.append('categoryId',this.productForm.get('categoryId').value);
      formData.append('name',this.productForm.get('name').value);
      formData.append('price',this.productForm.get('price').value);
      formData.append('description',this.productForm.get('description').value);
      formData.append('stock',this.productForm.get('stock').value);
      formData.append('createdAt',this.productForm.get('createdAt').value);
      formData.append('updatedAt',this.productForm.get('updatedAt').value);

      this.http.addProduct(formData).subscribe(
        (res) => {
          if(res.id != null) {
             alert('Product Posted Successfully...!');
             this.router.navigateByUrl('/admin/dashboard');
          }
        }
      );
    }
    else {
      for(const i in this.productForm.controls) {
        this.productForm.controls[i].markAsDirty();
        this.productForm.controls[i].updateValueAndValidity();
      }
    }
  }
}
