import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Commemorative = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Destroy existing chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Sample data - to be replaced with real data later
    const years = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];
    const casesHandled = [24, 35, 48, 67, 84, 105, 130, 158, 195, 238, 275, 320, 368, 412, 450];
    const clientGrowth = [10, 18, 30, 45, 62, 80, 105, 135, 168, 205, 245, 290, 340, 395, 440];
    const teamSize = [3, 5, 7, 9, 12, 15, 18, 22, 26, 30, 34, 38, 42, 46, 50];
    
    const ctx = chartRef.current.getContext('2d');
    
    // Create luxury gradient for the chart to better match the anniversary artwork
    const gradientFill1 = ctx.createLinearGradient(0, 0, 0, 400);
    gradientFill1.addColorStop(0, 'rgba(45, 45, 45, 0.7)');
    gradientFill1.addColorStop(1, 'rgba(45, 45, 45, 0)');
    
    // Gold/amber color from the artwork
    const gradientFill2 = ctx.createLinearGradient(0, 0, 0, 400);
    gradientFill2.addColorStop(0, 'rgba(176, 132, 59, 0.6)');
    gradientFill2.addColorStop(1, 'rgba(176, 132, 59, 0)');
    
    const gradientFill3 = ctx.createLinearGradient(0, 0, 0, 400);
    gradientFill3.addColorStop(0, 'rgba(100, 100, 100, 0.45)');
    gradientFill3.addColorStop(1, 'rgba(100, 100, 100, 0)');

    // Create and configure the chart
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: years,
        datasets: [
          {
            label: 'Casos Atendidos',
            data: casesHandled,
            borderColor: '#232323',
            backgroundColor: gradientFill1,
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#232323',
            pointBorderColor: '#232323',
            pointHoverBackgroundColor: '#000',
            pointHoverBorderColor: '#000',
            borderWidth: 2.5,
          },
          {
            label: 'Crescimento de Clientes',
            data: clientGrowth,
            borderColor: '#B0843B',
            backgroundColor: gradientFill2,
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#B0843B',
            pointBorderColor: '#B0843B',
            pointHoverBackgroundColor: '#916C2F',
            pointHoverBorderColor: '#916C2F',
            borderWidth: 2.5,
          },
          {
            label: 'Tamanho da Equipe',
            data: teamSize,
            borderColor: '#606060',
            backgroundColor: gradientFill3,
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#606060',
            pointBorderColor: '#606060',
            pointHoverBackgroundColor: '#505050',
            pointHoverBorderColor: '#505050',
            borderWidth: 2.5,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: {
                family: 'Raleway',
                size: 12,
                weight: 500
              },
              color: '#333',
              padding: 20,
              usePointStyle: true,
              boxWidth: 8
            }
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            titleFont: {
              family: 'Raleway',
              size: 14
            },
            bodyFont: {
              family: 'Raleway',
              size: 13
            },
            padding: 15,
            cornerRadius: 10,
            displayColors: false
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              font: {
                family: 'Raleway',
                size: 11
              }
            }
          },
          y: {
            grid: {
              color: 'rgba(200, 200, 200, 0.2)',
              drawBorder: false
            },
            ticks: {
              font: {
                family: 'Raleway',
                size: 11
              }
            }
          }
        },
        interaction: {
          intersect: false,
          mode: 'index'
        },
        animation: {
          duration: 2000,
          easing: 'easeOutQuart'
        }
      }
    });
    
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <section id="commemorative" className="py-16 px-4 md:px-10 lg:px-16 bg-[#e7e7e7]">  
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-[Playfair_Display] text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">15 Anos de <span className="text-[#B0843B]">Excelência</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Celebrando uma trajetória de sucesso e dedicação na advocacia, consolidando nossa posição 
            como referência em soluções jurídicas que transformam desafios em resultados.
          </p>
        </div>

        {/* Anniversary Logo Section - Luxurious Design */}
        <div className="relative flex justify-center mb-20 mt-8">
          {/* Gold accent elements - more subtle */}
          <div className="absolute inset-0 flex justify-center items-center opacity-5">
            <div className="w-3/4 h-1 bg-gradient-to-r from-transparent via-amber-700 to-transparent"></div>
          </div>
          <div className="absolute inset-0 flex justify-center items-center opacity-5">
            <div className="w-1 h-3/4 bg-gradient-to-b from-transparent via-amber-700 to-transparent"></div>
          </div>
          
          {/* Main image with refined luxury effects that harmonize with the background */}
          <div className="relative transform hover:scale-105 transition-transform duration-700">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-gray-300 via-[#B0843B]/10 to-gray-300 rounded-xl blur-xl opacity-30"></div>
            <div className="relative z-10 overflow-hidden">
              <img 
                src="/assets/images/Arte15anos.png" 
                alt="MRVG 15 Anos" 
                className="h-auto w-full max-w-md object-contain transition-all duration-500" 
              />
            </div>
          </div>
        </div>

        {/* Luxurious Data Visualization - matching the artwork style */}
        <div className="bg-white shadow-xl rounded-xl p-8 md:p-10 mb-16 border border-gray-200 relative overflow-hidden">
          {/* Elegant corner accents - matched to artwork colors */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#B0843B]/30 rounded-tl-xl"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#B0843B]/30 rounded-br-xl"></div>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-10 text-center relative">
            <span className="relative inline-block font-[Playfair_Display]">
              Nossa Evolução
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-28 h-0.5 bg-gradient-to-r from-transparent via-[#B0843B] to-transparent"></span>
            </span>
          </h3>
          
          <div className="relative h-[420px] z-10 mt-8">
            <canvas ref={chartRef}></canvas>
          </div>
          
          <div className="mt-8 text-center text-gray-500 text-sm italic">
            * Os dados representam estimativas e serão atualizados com informações precisas
          </div>
        </div>

        {/* Key Achievements - Luxury Style matching the artwork */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-gray-800 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#B0843B]/5 to-[#B0843B]/10 rounded-bl-3xl"></div>
            <div className="text-5xl font-bold text-gray-800 mb-2">450<span className="text-[#B0843B]">+</span></div>
            <div className="text-xl font-medium text-gray-700">Casos de Sucesso</div>
            <p className="mt-4 text-gray-600">
              Construímos um legado de soluções jurídicas efetivas para nossos clientes.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#B0843B] hover:shadow-lg transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#B0843B]/5 to-[#B0843B]/10 rounded-bl-3xl"></div>
            <div className="text-5xl font-bold text-gray-800 mb-2">50<span className="text-[#B0843B]">+</span></div>
            <div className="text-xl font-medium text-gray-700">Profissionais</div>
            <p className="mt-4 text-gray-600">
              Nossa equipe multidisciplinar oferece expertise jurídica de alto nível.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-gray-800 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#B0843B]/5 to-[#B0843B]/10 rounded-bl-3xl"></div>
            <div className="text-5xl font-bold text-gray-800 mb-2">98<span className="text-[#B0843B]">%</span></div>
            <div className="text-xl font-medium text-gray-700">Satisfação de Clientes</div>
            <p className="mt-4 text-gray-600">
              O compromisso com a excelência reflete-se na confiança de nossos clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commemorative;