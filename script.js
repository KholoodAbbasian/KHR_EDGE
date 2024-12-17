document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('analysisChart').getContext('2d');
    const analysisChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['فصل اول', 'فصل دوم', 'فصل سوم', 'فصل چهارم'],
            datasets: [{
                label: 'تحلیل عملکرد',
                data: [30, 50, 40, 60],
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
