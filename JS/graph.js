//gráfico donut
var xValues = ["Calorias Consumidas", "Calorias Queimadas"];
var yValues = [60, 40];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: false,
      text: ""
    }
  }
});

var xValue = ['Tempo de Atividade'];
var yValue = [35, 65];
var barColors = [
  "#1e7145",
  "#a3a3a3",
  "#",
  "#",
  "#"
];
new Chart("dchart", {
  type: "doughnut",
  data: {
    labels: xValue,
    datasets: [{
      backgroundColor: barColors,
      data: yValue
    }]
  },
  options: {
    title: {
      display: false,
      text: "sad"
    }
  }
});

//===============================================================================

var xValues = [50,60,70,80,90,100,110,120,130,140,150];
var yValues = [7,8,8,9,9,9,10,11,14,14,15];

//gráfico de linha
new Chart("lineChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(255,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:17}}],
    }
  }
});