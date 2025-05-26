import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-vaccine-batch',
  templateUrl: './add-vaccine-batch.component.html',
  styleUrls: ['./add-vaccine-batch.component.css']
})
export class AddVaccineBatchComponent {
  vaccineForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.vaccineForm = this.fb.group({
      vaccineName: ['', Validators.required],
      batchNumber: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      expirationDate: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.vaccineForm.valid) {
      console.log('New Vaccine Batch:', this.vaccineForm.value);
      // TODO: Replace console.log with API call to backend service
      alert('Vaccine batch added successfully!');
      this.vaccineForm.reset();
    } else {
      this.vaccineForm.markAllAsTouched();
    }
  }
}
