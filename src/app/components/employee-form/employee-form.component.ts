import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})

export class EmployeeFormComponent implements OnInit {
  isEdit = false;
  employeeId!: number;

  form = this.fb.group({
    name: this.fb.control<string | null>(null, Validators.required),
    email: this.fb.control<string | null>(null, [Validators.required, Validators.email]),
    designation: this.fb.control<string | null>(null, Validators.required),
    salary: this.fb.control<number | null>(null, [Validators.required, Validators.min(1)])
  });
  
  get name() {
    return this.form.get('name');
  }
  
  get email() {
    return this.form.get('email');
  }
  
  get designation() {
    return this.form.get('designation');
  }
  
  get salary() {
    return this.form.get('salary');
  }
  
  

  constructor(
    private fb: FormBuilder,
    private service: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeeId = Number(this.route.snapshot.paramMap.get('id'));
    this.isEdit = !!this.employeeId;

    if (this.isEdit) {
      this.service.getById(this.employeeId).subscribe(emp => {
        this.form.patchValue({
          name: emp.name,
          email: emp.email,
          designation: emp.designation,
          salary: emp.salary
        });
        
      });
    }
  }

  //new submit changes for edit button
  submit(): void {
    // 1️⃣ Stop if form is invalid
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
  
    // 2️⃣ CREATE PAYLOAD BASE
    const basePayload = {
      name: this.form.value.name!.trim(),
      email: this.form.value.email!.trim(),
      designation: this.form.value.designation!.trim(),
      salary: Number(this.form.value.salary)
    };
  
    // 3️⃣ UPDATE FLOW (PUT) → INCLUDE ID
    if (this.isEdit) {
      const updatePayload = {
        id: this.employeeId, // ✅ REQUIRED for backend
        ...basePayload
      };
  
      this.service.update(this.employeeId, updatePayload).subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('PUT /employees failed', err);
          alert('Failed to update employee.');
        }
      });
    }
    // 4️⃣ CREATE FLOW (POST) → NO ID
    else {
      this.service.create(basePayload).subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('POST /employees failed', err);
          alert('Failed to create employee.');
        }
      });
    }
  }
  
  cancel(): void {
    this.router.navigate(['/']);
  }
}
