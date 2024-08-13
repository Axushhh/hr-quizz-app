import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-resume',
  templateUrl: './upload-resume.component.html',
  styleUrls: ['./upload-resume.component.css']
})
export class UploadResumeComponent implements OnInit {
  uploadForm: FormGroup;
  file: File | null = null;

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  constructor(
    private fb: FormBuilder,  
    private http:HttpClient,
    private router: Router
  ) {
    this.uploadForm = this.fb.group({
      name: [''],
      email: [''],
      resume: [null]
    });
  }
  ngOnInit(): void { }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onFileDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      this.file = event.dataTransfer.files[0];
      this.uploadForm.patchValue({
        resume: this.file
      });
    }
  }

  onFileSelect(event: any) {
    this.file = event.target.files[0];
      console.log("Selected file====>", this.file);
      
      this.uploadForm.patchValue({
        resume: this.file
      });
    
  }

  // onSubmit() {
  //   // const formData: FormData = new FormData();
  //   // formData.append('name', this.uploadForm.get('name')?.value);
  //   // formData.append('email', this.uploadForm.get('email')?.value);
  //   // if (this.file) {
  //   //   formData.append('resume', this.file);
  //   // }

  //   // this.http.post('http://localhost:8080/api/upload', formData).subscribe(response => {
  //   //   this.router.navigate(['/quiz']);
  //   // });
  // }

  onSubmit() {
    if (!this.file) {
      alert('Please select a file before submitting.');
      return;
    }else {
      this.router.navigateByUrl("quiz-instructions")
    }
  }

  openFileDialog() {
    this.fileInput.nativeElement.click();
  }

  clearFile(){
    this.file = null;
    this.uploadForm.patchValue({
      resume: null
    });
    this.fileInput.nativeElement.value = '';
  }
  }

