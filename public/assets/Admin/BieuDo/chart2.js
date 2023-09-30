var ctx2 = document.getElementById('doughnut').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Đà Lạt', 'Bảo Lộc', 'Bảo Lâm', 'Cát Tiên', 'Di Linh', 'Đạ Huoai', 'Đạ Tẻh', 'Đam Rông', 'Đơn Dương', 'Đức Trọng', 'Lạc Dương', 'Lâm Hà'],

        datasets: [{
            label: 'Employees',
            data: [42, 12, 8, 6, 10, 88, 27, 60, 16, 74, 64, 13],
            backgroundColor: [
                'rgb(136,69,97)',
                'rgb(86,131,193)',
                'rgb(170,38,154)',
                'rgb(82,213,37)',
                'rgb(95,116,6)',
                'rgb(213,163,212)',
                'rgb(205,197,239)',
                'rgb(98,171,142)',
                'rgb(88,47,109)',
                'rgb(214,211,99)',
                'rgb(108,178,99)',
                'rgb(174,235,211)'

            ],
            borderColor: [
                'rgb(136,69,97)',
                'rgb(86,131,193)',
                'rgb(170,38,154)',
                'rgb(82,213,37)',
                'rgb(95,116,6)',
                'rgb(213,163,212)',
                'rgb(205,197,239)',
                'rgb(98,171,142)',
                'rgb(88,47,109)',
                'rgb(214,211,99)',
                'rgb(108,178,99)',
                'rgb(174,235,211)'

            ],
            borderWidth: 1
        }]

    },
    options: {
        responsive: true
    }
});