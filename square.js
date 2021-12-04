
var month= document.getElementById('square').getContext('2d');
var square = new Chart(month, {
    type: 'doughnut',
    data: {
       
        datasets: [{
            label: '# of Votes',
            data: [65, 35, ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
        
            borderWidth: 1,
            cutout: "80%"
        }]
    },
   
});
