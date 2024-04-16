import React from 'react'
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJs} from "chart.js/auto"

const Conversion = () => {

    const currentYear = new Date().getFullYear()


    const data = {
        labels: ["Italy", 'Japan', 'Ghana', 'Canada', 'France', 'Nigeria', 'South Korea','Netherland','United State','United Kingdom'],
        datasets: [
          {
            label: '',
            data: [400, 550, 590, 610, 700, 740, 780,880,1000,1300],
            fill: false,
            backgroundColor : "rgb(32 101 209)",
            borderRadius : "20",
            barThickness : "10"
          },
        ]
    }

      const options = {
        indexAxis: 'y', // Set the index axis to y (to make bars horizontal)
        scales: {
            y: {
              type: 'category', // Specify the type of scale for the y-axis
              
            },
            x: {
              type: 'linear', // Use 'linear' type for numerical data on the x-axis
              ticks: {
                stepSize:   300, // Set the step size between ticks
              },
              grid: {
                display: false, // Hide y-axis grid lines
              },
            },
          },
        plugins: {
            legend: {
              display: false, // Hide the legend
            },
          },
      };

  return (
    <div className='bg-white rounded-xl p-5 shadow-md '>
        <div>
            <h3 className='text-xl font-bold mb-8'>Conversion Rates</h3>
            <p className='text-gray-500 font-semibold mb-5'> (+47%) than last year </p>
        </div>
        <Bar data={data} options={options} />
    </div>
  )
}

export default Conversion
