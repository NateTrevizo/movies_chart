makeItChart1();
makeItChart2();
const x_labels = [];
const y_data = [];
const x_labels_2 = [];
const y_data_2 = [];

async function getData() {
    const movie_response = await fetch('states.csv');
    const movie_data = await movie_response.text();


    const theWholeThing = movie_data.split('\n').slice(1);
    theWholeThing.forEach(row => {
        const columns = row.split(',');
        const state = columns[0];
        const avg_month_pay = columns[8];
        const coverage = columns[4];
        x_labels.push(state);
        y_data.push(avg_month_pay);
        y_data_2.push(coverage);
        x_labels_2.push(avg_month_pay);
        /*const popularity = columns[10];
        const premier = columns[14];
        const revenue = columns[15];
        const runtime = columns[16];
        const vote_avarage = columns[21];
        
        const vote_count = columns[22];*/
        console.log(coverage);
    });

}

async function makeItChart1() {
    await getData();
    const ctx = document.getElementById('chart_1').getContext('2d');

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: x_labels,
            datasets: [{
                label: 'Avarage insurance payment per state',
                data: y_data,
                backgroundColor:
                    'rgba(19, 57, 159, 0.2)'
                ,
                borderColor:
                    'rgba(19, 99, 132, 1)'
                ,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            tooltips: {

            }

        }
    });
}

async function makeItChart2() {
    await getData();
    const ctx = document.getElementById('chart_2').getContext('2d');

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: x_labels_2,
            datasets: [{
                label: 'Avarage coverage per insurance payment',
                data: y_data_2,
                backgroundColor:
                    'rgba(19, 57, 159, 0.2)'
                ,
                borderColor:
                    'rgba(19, 99, 132, 1)'
                ,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            tooltips: {

            }

        }
    });
}

