import React, { useEffect, useRef } from "react";
import ApexCharts from 'apexcharts'


const ACHiringPipelineComponents = () => {

    const chartRef = useRef(null);

    useEffect(() => {
      const options = {
        series: [{
          data: [95, 85, 65, 90],
        }],
        chart: {
          type: 'bar',
          height: 220,
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
            
        },
    },
        dataLabels: {
          enabled: false,
        },
        
        xaxis: {
          categories: ['Screening', 'Interviews', 'Rejected', 'Hired'],
        },
      };
    
      const chart = new ApexCharts(chartRef.current, options);
      chart.render();
    
      // Clean up on component unmount
      return () => {
        chart.destroy();
      };
    }, []); // Empty dependency array to ensure the effect runs only once on mount
    
    

    return (
    <div className="m-4">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl">Hiring Pipeline</h1>
        <select className="border-2 rounded-lg font-bold outline-none">
          <option>Last Month</option>
          <option>Last Week</option>
          <option>Last Day</option>
          <option>Last Year</option>
        </select>
      </div>
      <div ref={chartRef}>
    {/* Chart will be rendered here */}
      </div>
    </div>
  );
};

export default ACHiringPipelineComponents;
