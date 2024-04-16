import React from 'react'

import { Bar } from 'react-chartjs-2';
import {Chart as ChartJs} from "chart.js/auto"


const Visits = () => {

    const currentYear = new Date().getFullYear()


    const data = {
        labels: [currentYear, 'February', 'March', 'April', 'May', 'June', 'July','August','Sep'],
        datasets: [
          {
            label: '',
            data: [65, 59, 80, 81, 56, 55, 40,55,77],
            fill: false,
            // borderColor: 'rgb(75, 192, 192)',
            backgroundColor : "rgb(32 101 209)",
            borderRadius : "20",
            barThickness : "10"
          },
        ]
    }

      const options = {
        scales: {
          x: {
            type: 'category', // Specify the type of scale for the x-axis
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], 
            grid: {
                display: false, // Hide x-axis grid lines
              },// Edit the labels for the x-axis
          },
            y: {
                type: 'linear', // Use 'linear' type for numerical data on the y-axis
                ticks: {
                stepSize: 20, // Set the step size between ticks
                },
            }
        },
        plugins: {
            legend: {
              display: false, // Hide the legend
            },
          },
      };

  return (
    <div className='bg-white rounded-xl p-5 shadow-md '>
        <div className='mb-4'> 
            <h2 className='text-xl font-semibold mb-8'> Website Visits </h2>
            <p className='text-gray-500 font-semibold'>(+47%) than last year</p>
        </div>
        <Bar data={data} options={options} />
    </div>

  )
}

export default Visits