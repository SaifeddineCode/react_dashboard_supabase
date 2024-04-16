import React from 'react'
import { Radar } from 'react-chartjs-2';


const Languages = () => {

    const data = {
        labels: ['Javascript', 'Typescript', 'Golang', 'Rust', 'Flutter', 'C++'],
        datasets: [
          {
            label: 'My Radar Chart',
            data: [65, 59, 80, 81, 56, 55],
            backgroundColor: 'rgba(54, 162, 235, 0.2)', // Fill color for the area
            borderColor: 'rgba(54, 162, 235, 1)', // Border color for the data
            borderWidth: 1, // Border width for the data
            pointBackgroundColor: 'rgba(54, 162, 235, 1)', // Background color for the points
            pointBorderColor: '#fff', // Border color for the points
            pointHoverBackgroundColor: '#fff', // Background color for the points on hover
            pointHoverBorderColor: 'rgba(54, 162, 235, 1)', // Border color for the points on hover
          },
        ],
      };
    
      const options = {
        scales: {
          r: {
            suggestedMin: 0, // Minimum value for the scale
            suggestedMax: 100, // Maximum value for the scale
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
        <h3 className='text-xl font-semibold mb-8' >Current Language</h3>
        <Radar data={data} options={options} />
    </div>

  )

}

export default Languages