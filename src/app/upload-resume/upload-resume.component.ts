import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-resume',
  templateUrl: './upload-resume.component.html',
  styleUrls: ['./upload-resume.component.css']
})
export class UploadResumeComponent {
  uploadForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.uploadForm = this.fb.group({
      name: [''],
      email: [''],
      resume: [null]
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.patchValue({
        resume: file
      });
    }
  }

  onSubmit() {
    const formData: FormData = new FormData();
    formData.append('name', this.uploadForm.get('name')?.value);
    formData.append('email', this.uploadForm.get('email')?.value);
    formData.append('resume', this.uploadForm.get('resume')?.value);

    this.http.post('http://localhost:8080/api/upload', formData).subscribe(response => {
      this.router.navigate(['/quiz']);
    });
  }
}
