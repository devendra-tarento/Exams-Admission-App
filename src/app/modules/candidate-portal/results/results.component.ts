import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatePortalService } from '../services/candidate-portal.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  //#region (global variables)
  hallTicketDetails = {
    exmaCycleName: 'Exam Cycle 1',
    studentDetails: {
      firstName: 'Rajash',
      lastName: 'Kumaravel',
      roolNumber: '12345 89078',
      DOB: '24-01-1998',
    }, 
    hallTicketDetqails: {
      courseName: 'M. Sc. Nursing',
      courseYear: '2022 - 2023'
    }
  }

  examTableHeader = [
    {
      header: 'Name of exam',
      columnDef: 'examName',
      cell: (element: Record<string, any>) => `${element['examName']}`,
      cellStyle: {
        'background-color': '#0000000a',
        'color': '#00000099'
      }
    },{
      header: 'Internal mark',
      columnDef: 'internalMarks',
      cell: (element: Record<string, any>) => `${element['internalMarks']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '135px', 'color': '#00000099'
      }
    },{
      header: 'External mark',
      columnDef: 'externalMarks',
      cell: (element: Record<string, any>) => `${element['externalMarks']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '135px', 'color': '#00000099'
      }
    },{
      header: 'Total marks',
      columnDef: 'totalMarks',
      cell: (element: Record<string, any>) => `${element['totalMarks']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '135px', 'color': '#00000099'
      }
    },{
      header: 'Status',
      columnDef: 'status',
      cell: (element: Record<string, any>) => `${element['status']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '135px', 'color': '#00000099'
      }
    },
  ]

  examTableData= [
    {
      examName: 'Exam 1', 
      internalMarks: '45', 
      externalMarks: '45',
      totalMarks: '90',
      status: 'Pass',
      hasStyle: true,
      cellStyle: {
          status: {
          'color': 'green'
        },
      }
    },{
      examName: 'Exam 2', 
      internalMarks: '45', 
      externalMarks: '45',
      totalMarks: '95',
      status: 'Pass',
      hasStyle: true,
      cellStyle: {
          status: {
          'color': 'green'
        },
      }
    },{
      examName: 'Exam 3', 
      internalMarks: '25', 
      externalMarks: '5',
      totalMarks: '30',
      status: 'Fail',
      hasStyle: true,
      cellStyle: {
          status: {
          'color': 'red'
        },
      }
    },
  ]

  isHallTicket = true
  //#endregion

  //#region (constructor)
  constructor(
    private router: Router,
    private candidatePortalService: CandidatePortalService
  ) {}
  //#endregion

  ngOnInit(): void {
    this.intialisation()
  }

  //#region (intialisation)
  intialisation() {
    this.getExamResults()
  }

  getExamResults() {
    this.candidatePortalService.getResults()
    // .pipe(mergeMap((res: any) => {
    //   return this.formateResultDetails(res)
    // })).subscribe((results: any)) {

    // }
  }

  // formateResultDetails(examData: any) {
  //   let formatedData = examData
  //   return formatedData;
  // }

  //#endregion

  //#region (navigate to modify)
  redirectToRequestRevalution() {
    this.router.navigateByUrl('/candidate-portal/request-revalution')
  }
  //#endregion

}
