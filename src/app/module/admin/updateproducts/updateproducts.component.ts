import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonserviceService } from '../../../service/commonservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateproducts',
  templateUrl: './updateproducts.component.html',
  styleUrl: './updateproducts.component.css'
})
export class UpdateproductsComponent {
  
  constructor(private fb:FormBuilder,private http:CommonserviceService,private router:Router,private activatedRoute:ActivatedRoute) { }

  productId = this.activatedRoute.snapshot.params['productId'];

  productForm:FormGroup;
  listofcategories:any = [];
  selectedFile:File | null;
  imagePreview:string | ArrayBuffer | null;
  existingImage: string | null = null;
  imageChanged = false;

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
    this.getProductById();
  }

  getAllCategory() {
    this.http.getAllCategory().subscribe(
      (res) => {
        this.listofcategories = res;
      }
    );
  }

  getProductById() {
    this.http.getProductById(this.productId).subscribe(
      res => {
        this.productForm.patchValue(res);
        this.existingImage = 'data:image/jpeg;base64,'+ res.byteImage;
      }
    );
  }

  onFileSelected(event:any) {
    this.selectedFile = event.target.files[0];
    this.previewImage();
    this.imageChanged = true;

    this.existingImage = null;
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
      if(this.imageChanged && this.selectedFile) {
        formData.append('image',this.selectedFile);
      }
      formData.append('categoryId',this.productForm.get('categoryId').value);
      formData.append('name',this.productForm.get('name').value);
      formData.append('price',this.productForm.get('price').value);
      formData.append('description',this.productForm.get('description').value);
      formData.append('stock',this.productForm.get('stock').value);
      formData.append('createdAt',this.productForm.get('createdAt').value);
      formData.append('updatedAt',this.productForm.get('updatedAt').value);

      this.http.updateProduct(this.productId,formData).subscribe(
        (res) => {
          if(res.id != null) {
             alert('Product Updated Successfully...!');
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

