let years = []
let temperatures = []

async function getData() {
    const response = await fetch("GLB.Ts+dSST.csv");
    const data = await response.text();
    const rows = data.split("\n").slice(1);
    rows.forEach((elem) => {
            const row = elem.split(",");
            const year = row[0];
            years.push(row[0])
            const temp = row[1];
            temperatures.push(row[1])
            console.log(year, temp);
    });
}

async function makeChart(years, temperatures){
    await getData()
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: years,
        datasets: [{
          label: 'Land-Ocean: Global Means',
          data: temperatures,
          borderColor: [
            'rgb(150, 99, 132)',
          ],
          borderWidth: 2,
          fill: {value: -3}
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 23
                    }
                }
            }
        }
      }
    });
}
makeChart(years,temperatures)