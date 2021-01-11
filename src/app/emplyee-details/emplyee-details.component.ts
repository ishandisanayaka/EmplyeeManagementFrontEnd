import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emplyee-details',
  templateUrl: './emplyee-details.component.html',
  styleUrls: ['./emplyee-details.component.css']
})
export class EmplyeeDetailsComponent implements OnInit {

  id:number
  employee:Employee
  constructor(private route:ActivatedRoute,private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.employee=new Employee();
    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
      this.employee=data;
    })
  }

}
