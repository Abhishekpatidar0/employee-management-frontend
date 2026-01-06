
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports : [CommonModule,RouterModule],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  // 🔹 Load all employees from backend
  loadEmployees(): void {
    this.employeeService.getAll().subscribe({
      next: (data) => {
        this.employees = data;
         //initialize filtered list as well
      },
      error: () => {
        alert('Failed to load employees');
      }
    });
  }

  // 🔹 Delete employee
  deleteEmployee(id: number): void {
    if (!confirm('Are you sure you want to delete this employee?')) {
      return;
    }

    this.employeeService.delete(id).subscribe({
      next: () => {
        // ✅ Backend already deleted, update UI instantly
        this.employees = this.employees.filter(emp => emp.id !== id);
      },
      error: (err) => {
        console.error('Delete error:', err);
        alert('Delete failed');
      }
    });
  }

  // 🔹 Navigate to edit page
  editEmployee(id: number): void {
    this.router.navigate(['/edit', id]);
  }
}
  













