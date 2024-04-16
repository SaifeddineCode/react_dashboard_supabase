import React from 'react'
import { Doughnut } from 'react-chartjs-2';


const Countries = () => {

    const data = {

        labels: ['America', 'Asia', 'Europe','Africa'],
        datasets: [
          {
            label: '# of Votes',
            data: [20, 40, 25,15],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(86, 255, 114, 0.6)',
            ],
            borderColor: [
              'white',
              'white',
              'white',
              'white'
            ],
            borderWidth: 3,
          },
        ],
      };
      // const options = {
      //   layout: {
      //     padding: {
      //       top: 60,
      //       bottom: 60,
      //       left: 60,
      //       right: 60,
      //     },
      //   },
      // };

  return (

    <div className='bg-white rounded-xl shadow-md p-4' >
        <h3 className='font-semibold text-xl mb-6' > Current Visits </h3>
        <Doughnut data={data}/>
    </div>

  )
}

export default Countries