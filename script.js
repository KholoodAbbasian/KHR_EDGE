// نمودار عملکرد کارکنان
document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    const performanceChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['فصل اول', 'فصل دوم', 'فصل سوم', 'فصل چهارم'],
            datasets: [{
                label: 'عملکرد کارکنان',
                data: [25, 40, 35, 50],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
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
