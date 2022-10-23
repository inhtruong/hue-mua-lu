// document.getElementById("header").addEventListener("wheel", myFunction);

// function myFunction() {
//     let h = document.documentElement.clientHeight
//     let w = document.documentElement.offsetWidth
//     console.log(w);
// }

const ctx = document.getElementById("hueChart");
const NUMBER_CFG = [
  375, 375, 372, 369, 368, 381, 395, 400
];

const labels = [
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Mực nước",
      data: NUMBER_CFG,
      borderColor: "rgba(113, 132, 214, 0.75)",
      backgroundColor: "rgba(113, 132, 214, 0.5)",
      tension: 0.41,
      fill: true,
      
    },
  ],
};
const lineMulti = {
  id: 'lineMulti',
  beforeDatasetsDraw(chart, args, pluginOptions) {
    const { ctx, chartArea: {top, bottom, left, right, width, height}, scales: {x, y} } = chart;
    console.log({top, bottom, left, right, width, height});

    ctx.save();

    ctx.font = 'bold 11px sans-serif';
    ctx.fillStyle = 'gray';
    ctx.textAlign = 'center';
    for(let i = 0; i < data.labels.length; i++) {
      ctx.fillText(data.datasets[0].data[i], chart.getDatasetMeta(0).data[i].x, chart.getDatasetMeta(0).data[i].y - 12)
    }
    
    ctx.strokeStyle = 'gray';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.setLineDash([6, 6]);
    ctx.moveTo(x.getPixelForValue(0), y.getPixelForValue(100));
    ctx.lineTo(right, y.getPixelForValue(100));
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
    ctx.setLineDash([]);

    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.setLineDash([6, 6]);
    ctx.moveTo(x.getPixelForValue(0), y.getPixelForValue(200));
    ctx.lineTo(right, y.getPixelForValue(200));
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
    ctx.setLineDash([]);

    ctx.strokeStyle = 'red';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.setLineDash([6, 6]);
    ctx.moveTo(x.getPixelForValue(0), y.getPixelForValue(350));
    ctx.lineTo(right, y.getPixelForValue(350));
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
    ctx.setLineDash([]);
  }
};

const myChart = new Chart(ctx, {
  type: "line",
  data: data,
  plugins: [lineMulti],
  options: {
    plugins: {
      title: {
        display: true,
        text: "Mực nước sông Hương sáng ngày 15/10/2022",
      },
    },
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});


const map = document.getElementById("hueMap");
const nameStreet = [
  "",
  "Vạn Xuân",
  "Chi Lăng",
  "Bạch Đằng",
  "Mai Thúc Loan",
  "Hùng Vương",
  "Trường Chinh",
  "Trần Quang Khải",
  "Bến Nghé",
  "Đống Đa"
]
const data2 = {
  labels: nameStreet,
  datasets: [
    {
      label: 'Dataset 1',
      data: [{x: 10, y: 10, r: 1}]
    },
    {
      label: 'Mực nước: 0.4m',
      data: [{x: 1.05, y: 6, r: 10}],
      backgroundColor: 'red'
    },
    {
      label: 'Mực nước: 0.5m',
      data: [{x: 6.2, y: 8, r: 15}],
      backgroundColor: 'red'
    },
    {
      label: 'Mực nước: 0.6m',
      data: [{x: 5.75, y: 8, r: 20}],
      backgroundColor: 'red'
    },
    {
      label: 'Mực nước: 0.4m',
      data: [{x: 4.8, y: 7.4, r: 10}],
      backgroundColor: 'red'
    },
    {
      label: 'Mực nước: 0.3m',
      data: [{x: 7.4, y: 1, r: 10}],
      backgroundColor: 'red'
    },
    {
      label: 'Mực nước: 0.5m',
      data: [{x: 8.5, y: 0.8, r: 15}],
      backgroundColor: 'red'
    },
    {
      label: 'Mực nước: 0.3m',
      data: [{x: 7.25, y: 2.5, r: 10}],
      backgroundColor: 'red'
    },
    {
      label: 'Mực nước: 0.5m',
      data: [{x: 7.05, y: 3, r: 15}],
      backgroundColor: 'red'
    },
    {
      label: 'Mực nước: 0.5m',
      data: [{x: 6.8, y: 0.7, r: 15}],
      backgroundColor: 'red'
    }
  ]
}

const myMap = new Chart(map, {
  type: "bubble",
  data: data2,
  plugins: [],
  options: {
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        displayColors: false,
        callbacks: {
          title: function(context) {
            return nameStreet[context[0].datasetIndex];
          },
          label: function(context) {
            return context.dataset.label;
          }
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          display: false
        },
        grid: {
          display: false,
          drawBorder: false
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          display: false
        },
        grid: {
          display: false,
          drawBorder: false
        }
      }
    }
  },
});