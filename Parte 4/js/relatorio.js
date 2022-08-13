const ctx = document.getElementById('graphic02').getContext('2d');
const graphic02 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto',
            'Setembro ', 'Outubro ', 'novembro', 'Dezembro',
        ],
        datasets: [{
            label: 'R$',
            data: [14124.80, 19028.00, 15053.90, 12165.30, 21534.40, 23637.68, 28030.16,
                23281.42, 24939.09, 28548.70, 26841.60, 43748.72,
            ],
            fill: false,
            borderColor: 'rgba(33,150,243, 0.3)',
            backgroundColor: 'rgb(33,150,243)',
        }]
    },
    options: {
        responsive: true,
        plugins: {
            subtitle: {
                display: true,
                text: 'Histórico de Vendas do Ano de 2021',
            },
        }
    }
});

const rhy = document.getElementById('graphic01').getContext('2d');
const graphic01 = new Chart(rhy, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto',
            'Setembro ', 'Outubro ', 'novembro', 'Dezembro',
        ],
        datasets: [{
            label: 'R$',
            data: [14124.80, 19028.00, 15053.90, 12165.30, 21534.40, 23637.68, 28030.16,
                23281.42, 24939.09, 28548.70, 26841.60, 43748.72,
            ],
            fill: false,
            borderColor: 'rgba(33,150,243, 0.2)',
            backgroundColor: 'rgb(33,150,243)',
        }]
    },
    options: {
        responsive: true,
        plugins: {
            subtitle: {
                display: true,
                text: 'Histórico de Vendas dos Ùltimos 12 Meses',
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
});

const ufr = document.getElementById('graphic03').getContext('2d');
const graphic03 = new Chart(ufr, {
    type: 'doughnut',
    data: {
        labels: ['Boleto bancário', 'Cartão de Crédito', 'Cartão de Débito', ],
        datasets: [{
            label: 'R$',
            data: [55159.51, 97432.26, 128342.01, ],
            fill: false,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Formas de Pagamento'
            }
        }
    },
});

const bfr = document.getElementById('graphic04').getContext('2d');
const graphic04 = new Chart(bfr, {
    type: 'bar',
    data: {
        labels: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira',
            'Sexta-Feira', 'Sábado',
        ],
        datasets: [{
            label: 'R$',
            data: [46204.61, 32938.00, 32234.30, 32684.71, 31697.76, 48189.76, 56044],
            fill: false,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(112, 255, 199)',
                'rgb(210, 61, 255)',
                'rgb(255, 191, 226)',
                'rgb(143, 169, 179)',
            ],
        }]
    },
    options: {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Vendas por Dia da Semana'
            }
        }
    },
});

const cip = document.getElementById('graphic05').getContext('2d');
const graphic05 = new Chart(cip, {
    type: 'bar',
    data: {
        labels: ['Indicador 1', 'Indicador 2', 'Indicador 3', 'Indicador 4', 'Indicador 5',
            'Indicador 6', 'Indicador 7',
        ],
        datasets: [{
            label: 'R$',
            data: [12677.30, 4197.50, 3483.10, 1023.10, 120918.70, 105541.15, 15952.92],
            fill: false,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(112, 255, 199)',
                'rgb(210, 61, 255)',
                'rgb(255, 191, 226)',
                'rgb(143, 169, 179)',
            ],
        }]
    },
    options: {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Vendas por Indicação:'
            }
        }
    },
});

const lao = document.getElementById('graphic06').getContext('2d');
const graphic06 = new Chart(lao, {
    type: 'bar',
    data: {
        labels: ['Indicador 1', 'Indicador 2', 'Indicador 3', 'Indicador 4', 'Indicador 5',
            'Indicador 6', 'Indicador 7',
        ],
        datasets: [{
            label: 'Produto vendido',
            data: [160, 47, 45, 14, 1658, 1399, 226],
            fill: false,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(112, 255, 199)',
                'rgb(210, 61, 255)',
                'rgb(255, 191, 226)',
                'rgb(143, 169, 179)',
            ],
        }]
    },
    options: {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Quantidade de Produtos Vendidos, Pelos Indicadores:'
            }
        }
    },
});

const tuo = document.getElementById('graphicJan1').getContext('2d');
const graphicJan1 = new Chart(tuo, {
    type: 'doughnut',
    data: {
        labels: ['Boleto bancário', 'Cartão de Crédito', 'Cartão de Débito', ],
        datasets: [{
            label: 'R$',
            data: [3614.60, 4622.90, 5887.30, ],
            fill: false,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Formas de Pagamento Referente a Janeiro'
            }
        }
    },
});

const req = document.getElementById('graphicJan2').getContext('2d');
const graphicJan2 = new Chart(req, {
    type: 'bar',
    data: {
        labels: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira',
            'Sexta-Feira', 'Sábado',
        ],
        datasets: [{
            label: 'R$',
            data: [794.40, 1880.90, 2828.30, 1963.50, 2363.20, 2571.10, 1723.40, ],
            fill: false,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(112, 255, 199)',
                'rgb(210, 61, 255)',
                'rgb(255, 191, 226)',
                'rgb(143, 169, 179)',
            ],
        }]
    },
    options: {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Vendas por Dia da Semana Referente a Janeiro'
            }
        }
    },
});

const ybk = document.getElementById('graphicFev1').getContext('2d');
const graphicFev1 = new Chart(ybk, {
    type: 'doughnut',
    data: {
        labels: ['Boleto bancário', 'Cartão de Crédito', 'Cartão de Débito', ],
        datasets: [{
            label: 'R$',
            data: [3083.00, 7697.70, 8247.30, ],
            fill: false,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Formas de Pagamento Referente a Fevereiro'
            }
        }
    },
});

const cyi = document.getElementById('graphicFev2').getContext('2d');
const graphicFev2 = new Chart(cyi, {
    type: 'bar',
    data: {
        labels: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira',
            'Sexta-Feira', 'Sábado',
        ],
        datasets: [{
            label: 'R$',
            data: [2488.50, 1798.70, 2301.90, 2734.00, 1988.40, 2906.60, 4809.90, ],
            fill: false,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(112, 255, 199)',
                'rgb(210, 61, 255)',
                'rgb(255, 191, 226)',
                'rgb(143, 169, 179)',
            ],
        }]
    },
    options: {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Vendas por Dia da Semana Referente a Fevereiro'
            }
        }
    },
});

const dat = document.getElementById('graphicMar1').getContext('2d');
const graphicMar1 = new Chart(dat, {
    type: 'doughnut',
    data: {
        labels: ['Boleto bancário', 'Cartão de Crédito', 'Cartão de Débito', ],
        datasets: [{
            label: 'R$',
            data: [5053.90, 6000.00, 4000.00, ],
            fill: false,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Formas de Pagamento Referente a Março'
            }
        }
    },
});

const çpo = document.getElementById('graphicMar2').getContext('2d');
const graphicMar2 = new Chart(çpo, {
    type: 'bar',
    data: {
        labels: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira',
            'Sexta-Feira', 'Sábado',
        ],
        datasets: [{
            label: 'R$',
            data: [3000.00, 2000.00, 1000.90, 2000.80, 1000.80, 2000.80, 4053.90, ],
            fill: false,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(112, 255, 199)',
                'rgb(210, 61, 255)',
                'rgb(255, 191, 226)',
                'rgb(143, 169, 179)',
            ],
        }]
    },
    options: {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Vendas por Dia da Semana Referente a Março'
            }
        }
    },
});

const qcb = document.getElementById('graphicAbr1').getContext('2d');
const graphicAbr1 = new Chart(qcb, {
    type: 'doughnut',
    data: {
        labels: ['Boleto bancário', 'Cartão de Crédito', 'Cartão de Débito', ],
        datasets: [{
            label: 'R$',
            data: [6730.00, 1601.50, 3831.80, ],
            fill: false,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Formas de Pagamento Referente a Abril'
            }
        }
    },
});

const loy = document.getElementById('graphicAbr2').getContext('2d');
const graphicAbr2 = new Chart(loy, {
    type: 'bar',
    data: {
        labels: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira',
            'Sexta-Feira', 'Sábado',
        ],
        datasets: [{
            label: 'R$',
            data: [1958.70, 596.40, 359.90, 1134.30, 753.90, 1026.50, 6362.60, ],
            fill: false,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(112, 255, 199)',
                'rgb(210, 61, 255)',
                'rgb(255, 191, 226)',
                'rgb(143, 169, 179)',
            ],
        }]
    },
    options: {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Vendas por Dia da Semana Referente a Abril'
            }
        }
    },
});

const hlo = document.getElementById('graphicMai1').getContext('2d');
const graphicMai1 = new Chart(hlo, {
    type: 'doughnut',
    data: {
        labels: ['Boleto bancário', 'Cartão de Crédito', 'Cartão de Débito', ],
        datasets: [{
            label: 'R$',
            data: [3474.50, 7092.60, 10967.30, ],
            fill: false,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Formas de Pagamento Referente a Maio'
            }
        }
    },
});

const bmc = document.getElementById('graphicMai2').getContext('2d');
const graphicMai2 = new Chart(bmc, {
    type: 'bar',
    data: {
        labels: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira',
            'Sexta-Feira', 'Sábado',
        ],
        datasets: [{
            label: 'R$',
            data: [3027.50, 4680.30, 1656.90, 2473.40, 1624.20, 2966.70, 5105.40, ],
            fill: false,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(112, 255, 199)',
                'rgb(210, 61, 255)',
                'rgb(255, 191, 226)',
                'rgb(143, 169, 179)',
            ],
        }]
    },
    options: {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Vendas por Dia da Semana Referente a Maio'
            }
        }
    },
});

const pal = document.getElementById('graphicJun1').getContext('2d');
const graphicJun1 = new Chart(pal, {
    type: 'doughnut',
    data: {
        labels: ['Boleto bancário', 'Cartão de Crédito', 'Cartão de Débito', ],
        datasets: [{
            label: 'R$',
            data: [4317.40, 7988.38, 11331.90, ],
            fill: false,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Formas de Pagamento Referente a Junho'
            }
        }
    },
});

const zop = document.getElementById('graphicJun2').getContext('2d');
const graphicJun2 = new Chart(zop, {
    type: 'bar',
    data: {
        labels: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira',
            'Sexta-Feira', 'Sábado',
        ],
        datasets: [{
            label: 'R$',
            data: [3487.00, 1778.50, 2643.70, 2829.20, 3768.78, 3320.50, 5810.00, ],
            fill: false,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(112, 255, 199)',
                'rgb(210, 61, 255)',
                'rgb(255, 191, 226)',
                'rgb(143, 169, 179)',
            ],
        }]
    },
    options: {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Vendas por Dia da Semana Referente a Junho'
            }
        }
    },
});

const lzo = document.getElementById('graphicJul1').getContext('2d');
const graphicJul1 = new Chart(lzo, {
    type: 'doughnut',
    data: {
        labels: ['Boleto bancário', 'Cartão de Crédito', 'Cartão de Débito', ],
        datasets: [{
            label: 'R$',
            data: [3720.00, 10027.86, 14282.30, ],
            fill: false,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Formas de Pagamento Referente a Julho'
            }
        }
    },
});

const rbo = document.getElementById('graphicJul2').getContext('2d');
const graphicJul2 = new Chart(rbo, {
    type: 'bar',
    data: {
        labels: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira',
            'Sexta-Feira', 'Sábado',
        ],
        datasets: [{
            label: 'R$',
            data: [4470.10, 2937.90, 3150.10, 3334.80, 3422.46, 5742.90, 4971.90, ],
            fill: false,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(112, 255, 199)',
                'rgb(210, 61, 255)',
                'rgb(255, 191, 226)',
                'rgb(143, 169, 179)',
            ],
        }]
    },
    options: {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Vendas por Dia da Semana Referente a Julho'
            }
        }
    },
});

const mpl = document.getElementById('graphicAgo1').getContext('2d');
const graphicAgo1 = new Chart(mpl, {
    type: 'doughnut',
    data: {
        labels: ['Boleto bancário', 'Cartão de Crédito', 'Cartão de Débito', ],
        datasets: [{
            label: 'R$',
            data: [3335.90, 7043.62, 12901.90, ],
            fill: false,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Formas de Pagamento Referente a Agosto'
            }
        }
    },
});

const btt = document.getElementById('graphicAgo2').getContext('2d');
const graphicAgo2 = new Chart(btt, {
    type: 'bar',
    data: {
        labels: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira',
            'Sexta-Feira', 'Sábado',
        ],
        datasets: [{
            label: 'R$',
            data: [4395.72, 2607.30, 2603.70, 2357.00, 1907.20, 3906.30, 5504.20, ],
            fill: false,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(112, 255, 199)',
                'rgb(210, 61, 255)',
                'rgb(255, 191, 226)',
                'rgb(143, 169, 179)',
            ],
        }]
    },
    options: {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Vendas por Dia da Semana Referente a Agosto'
            }
        }
    },
});

const bdz = document.getElementById('graphicSet1').getContext('2d');
const graphicSet1 = new Chart(bdz, {
    type: 'doughnut',
    data: {
        labels: ['Boleto bancário', 'Cartão de Crédito', 'Cartão de Débito', ],
        datasets: [{
            label: 'R$',
            data: [3868.50, 8888.80, 12181.79, ],
            fill: false,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Formas de Pagamento Referente a Setembro'
            }
        }
    },
});

const çmq = document.getElementById('graphicSet2').getContext('2d');
const graphicSet2 = new Chart(çmq, {
    type: 'bar',
    data: {
        labels: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira',
            'Sexta-Feira', 'Sábado',
        ],
        datasets: [{
            label: 'R$',
            data: [3444.39, 2975.00, 3898.70, 3027.80, 2822.40, 3580.76, 5190.04, ],
            fill: false,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(112, 255, 199)',
                'rgb(210, 61, 255)',
                'rgb(255, 191, 226)',
                'rgb(143, 169, 179)',
            ],
        }]
    },
    options: {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Vendas por Dia da Semana Referente a Setembro'
            }
        }
    },
});

const lça = document.getElementById('graphicOut1').getContext('2d');
const graphicOut1 = new Chart(lça, {
    type: 'doughnut',
    data: {
        labels: ['Boleto bancário', 'Cartão de Crédito', 'Cartão de Débito', ],
        datasets: [{
            label: 'R$',
            data: [3995.40, 10871.70, 13621.70, ],
            fill: false,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Formas de Pagamento Referente a Outubro'
            }
        }
    },
});

const vne = document.getElementById('graphicOut2').getContext('2d');
const graphicOut2 = new Chart(vne, {
    type: 'bar',
    data: {
        labels: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira',
            'Sexta-Feira', 'Sábado',
        ],
        datasets: [{
            label: 'R$',
            data: [4644.30, 3949.30, 3505.20, 2884.90, 4021.00, 3784.70, 5759.30, ],
            fill: false,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(112, 255, 199)',
                'rgb(210, 61, 255)',
                'rgb(255, 191, 226)',
                'rgb(143, 169, 179)',
            ],
        }]
    },
    options: {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Vendas por Dia da Semana Referente a Outubro'
            }
        }
    },
});

const fol = document.getElementById('graphicNov1').getContext('2d');
const graphicNov1 = new Chart(fol, {
    type: 'doughnut',
    data: {
        labels: ['Boleto bancário', 'Cartão de Crédito', 'Cartão de Débito', ],
        datasets: [{
            label: 'R$',
            data: [2726.80, 12326.40, 11788.40, ],
            fill: false,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Formas de Pagamento Referente a Novenbro'
            }
        }
    },
});

const dam = document.getElementById('graphicNov2').getContext('2d');
const graphicNov2 = new Chart(dam, {
    type: 'bar',
    data: {
        labels: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira',
            'Sexta-Feira', 'Sábado',
        ],
        datasets: [{
            label: 'R$',
            data: [3876.00, 3261.50, 3519.80, 2579.20, 1590.00, 3930.00, 8085.10, ],
            fill: false,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(112, 255, 199)',
                'rgb(210, 61, 255)',
                'rgb(255, 191, 226)',
                'rgb(143, 169, 179)',
            ],
        }]
    },
    options: {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Vendas por Dia da Semana Referente a Novenbro'
            }
        }
    },
});

const vic = document.getElementById('graphicDez1').getContext('2d');
const graphicDez1 = new Chart(vic, {
    type: 'doughnut',
    data: {
        labels: ['Boleto bancário', 'Cartão de Crédito', 'Cartão de Débito', ],
        datasets: [{
            label: 'R$',
            data: [4701.50, 18316.30, 20730.92, ],
            fill: false,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Formas de Pagamento Referente a Dezembro'
            }
        }
    },
});

const tor = document.getElementById('graphicDez2').getContext('2d');
const graphicDez2 = new Chart(tor, {
    type: 'bar',
    data: {
        labels: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira',
            'Sexta-Feira', 'Sábado',
        ],
        datasets: [{
            label: 'R$',
            data: [8618.006, 5104.60, 5521.20, 5956.90, 6926.42, 6268.90, 5352.70, ],
            fill: false,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(112, 255, 199)',
                'rgb(210, 61, 255)',
                'rgb(255, 191, 226)',
                'rgb(143, 169, 179)',
            ],
        }]
    },
    options: {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Vendas por Dia da Semana Referente a Dezembro'
            }
        }
    },
});