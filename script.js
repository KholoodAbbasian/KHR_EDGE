// نمودار عملکرد کارکنان
document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    const performanceChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['فصل اول', 'فصل دوم', 'فصل سوم', 'فصل چهارم'],
            datasets: [{
                label: 'عملکرد کارکنان',
                data: [20, 35, 30, 50],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)'
                ],
                borderColor: 'rgba(0, 0, 0, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
