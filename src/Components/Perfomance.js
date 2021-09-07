import React from 'react';
import './Perfomance.css';
import Table from './Table'


const Perfomance = () => {

    return (
        <> 
            <h1 className="mt-24 text-center perr">PERFOMANCE </h1>
            <section class="container perfomsec">
  <div class="container px-5 py-3  ">
    <div class="flex flex-wrap -m-4 text-center items-center justify-center contsec">
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full ">
        <div class="border-2 border-gray-800 px-4 py-6 cardd-1">          
          <h2 class="title-font font-medium ">Annualized Rate</h2>
          <p class="leading-relaxed">11.64%</p>
        </div>
      </div>
      
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full ">
        <div class="border-2 border-gray-800 px-4 py-6 cardd-2">
          <h2 class="title-font font-medium ">Annualized Disturbation Rate</h2>
          <p class="leading-relaxed">5.18%</p>
        </div>
      </div>
      
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full ">
        <div class="border-2 border-gray-800 px-4 py-6 cardd-3" >
          <h2 class="title-font font-medium ">NAV per share</h2>
          <p class="leading-relaxed">$12.9</p>
        </div>
      </div>
      
    </div>
  </div>
</section>
        <section className="tt">
            <h1>Monthly Total Returns</h1>
            <p>Specific Monthly Returns</p>
        </section>

        <Table />
        </>

    )
}

export default Perfomance
