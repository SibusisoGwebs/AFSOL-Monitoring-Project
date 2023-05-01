import { Injectable } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Injectable({
  providedIn: 'root'
})
export class ReportGraphsService {

  constructor() { }

  LineChart(){
    Chart.defaults.color = '#2c3e50';
    Chart.defaults.font.size = 14;
    const LineChart = new Chart('LineChart', {
      type: 'line',
      data: {
        labels: [
          'Janauary', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'Novermber', 'December'
        ],
        datasets: [{
          label: 'Total Monitoring',
          data: [200, 300, 210, 500, 600, 610, 800, 900, 400, 550, 300, 100],
          borderWidth: 1
        }]
      },
      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 0.5,
            to: 0,
            loop: true
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            min: 0
          },
          x: {
            title: {
              color: '#2c3e50',
              display: true,
              text: 'Months'
            },
            beginAtZero: true
          },
        }
      }
    })
  }

  BarChart(){
    const BarChart = new Chart('BarChart', {
      type: 'bar',
      data: {
        labels: [
          'AG', 'PH', 'SG', 'TG'
        ],
        datasets: [
          {
            label: 'High',
            data: [200, 300, 210, 500, 600, 610, 800, 900, 400, 550, 300, 100],
            borderWidth: 1
          },
          {
            label: 'Medium',
            data: [200, 300, 210, 500, 600, 610, 800, 900, 400, 550, 300, 100],
            borderWidth: 1
          },
          {
            label: 'Low',
            data: [200, 300, 210, 500, 600, 610, 800, 900, 400, 550, 300, 100],
            borderWidth: 1
          },
          {
            label: 'None',
            data: [200, 300, 210, 500, 600, 610, 800, 900, 400, 550, 300, 100],
            borderWidth: 1
          }
      ]
      },
      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: 'easeInQuad',
            from: 0.5,
            to: 0,
            loop: true
          }
        },
        scales: {
          y: {
            beginAtZero: true
          },
          x: {
            beginAtZero: true
          }
        }
      }
    })
  }

  DoughnutChart(id: string, title: string){
    const LineChart = new Chart(id, {
      type: 'doughnut',
      data: {
        labels: [
          'AG', 'PH', 'SG', 'TG'
        ],
        datasets: [{
          label: 'Total Monitoring',
          data: [200, 300, 210, 500],
          borderWidth: 1
        }]
      },
      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: 'easeInQuad',
            from: 0.5,
            to: 0,
            loop: true
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          title: {
            color: '#2c3e50',
              display: true,
              text: title
          }
        }
      }
    })
  }
}

