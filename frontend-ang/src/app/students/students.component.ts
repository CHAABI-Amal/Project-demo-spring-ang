import {Component, OnInit, ViewChild} from '@angular/core';
import {StudentsService} from "../services/students.service";
import {Student} from "../model/students.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit{
  students! : Array<Student>;
  studentsDataSource! : MatTableDataSource<Student>
  displayedColumns:string[]=['id','firstName','lastName','code','programId','payments'];

  @ViewChild(MatPaginator) paginator! :MatPaginator;
  @ViewChild(MatSort) sort! :MatSort;
  constructor(private studentsService:StudentsService,private router:Router) {
  }
  ngOnInit(): void {
    this.studentsService.getStudents().subscribe({
      next:value => {
        this.students=value;
        this.studentsDataSource=new MatTableDataSource<Student>(this.students);
        this.studentsDataSource.paginator=this.paginator;
        this.studentsDataSource.sort=this.sort;
        },
      error:err => {
        console.log(err);
      }
    })
  }

  studentPayments(student: Student) {
      this.router.navigateByUrl(`/admin/student-details/${student.code}`)
  }

  filterStudents(event: Event) {
    let value=(event.target as HTMLInputElement).value;
    this.studentsDataSource.filter=value;
  }
}
