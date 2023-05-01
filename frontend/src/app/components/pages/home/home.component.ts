import { Component, OnInit } from '@angular/core';
import { ReportGraphsService } from 'src/app/services/report-graphs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private reportService: ReportGraphsService){}

  ngOnInit(): void {
    this.reportService.LineChart();
    this.reportService.BarChart();
    this.reportService.DoughnutChart('DoughnutChart', 'Donna');
    this.reportService.DoughnutChart('DoughnutChart2', 'Fatima');
    this.reportService.DoughnutChart('DoughnutChart3', 'Rhadia');
  }

}
