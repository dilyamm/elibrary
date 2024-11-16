// Bar Chart: Most Borrowed Book Categories
Highcharts.chart('bar-chart', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Most Borrowed Book Categories'
    },
    xAxis: {
        categories: ['Fiction', 'Non-Fiction', 'Science', 'History', 'Technology']
    },
    yAxis: {
        title: {
            text: 'Number of Borrows'
        }
    },
    series: [{
        name: 'Borrows',
        data: [150, 120, 90, 80, 70] // Example data
    }]
});

// Pie Chart: User Preferences by Format
Highcharts.chart('pie-chart', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'User Preferences by Format'
    },
    series: [{
        name: 'Users',
        colorByPoint: true,
        data: [{
            name: 'eBooks',
            y: 55, // Percentage
            sliced: true,
            selected: true
        }, {
            name: 'Audiobooks',
            y: 25
        }, {
            name: 'PDFs',
            y: 20
        }]
    }]
});
