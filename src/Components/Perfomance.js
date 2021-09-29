import React from 'react';
import './Perfomance.css';
import Table from './Table'


const Perfomance = () => {

    return (
        <> 
            <h1 className="mt-24 text-center perr">PERFOMANCE </h1>
            <section class="container perfomsec" id="perfomance" >
  <div class="container px-5 py-3 percrd ">
    <div class="flex flex-wrap -m-4 text-center items-center justify-center contsec">
      <div class="p-4 lg:w-1/4 md:w-2/4  w-full perp ">
        <div class="border-2 border-gray-800 px-4 py-6 cardd-1">          
          <h2 class="title-font font-medium ">Annual Return</h2>
          <p class="leading-relaxed">60%</p>
        </div>
      </div>
      
      <div class="p-4 lg:w-1/4 md:w-2/4 sm:w-1/2 w-full perp ">
        <div class="border-2 border-gray-800 px-4 py-6 cardd-2">
          <h2 class="title-font font-medium ">Quarterly Return </h2>
          <p class="leading-relaxed">12.25%</p>
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
