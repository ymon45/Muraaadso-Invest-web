import ReactPlayer from 'react-player'
import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className="container herosec ">
            <section class="body-font ">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
      <div class="heeroo lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left  mb-16 md:mb-0 ">
      <h1 class="herotxt title-font sm:text-4xl text-3xl mb-4 font-medium">INVEST WITH
        <br class="inline-block" /> <span>MURAADso</span>
      </h1>
      <h4 class="mb-8 txth4 text-xl">Try investing with Muraadso</h4>
      <p class="mb-8 txtp leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, delectus? 
      <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, eligendi?</p>
      <div class="flex lg:flex-auto lg:items-center  lg:justify-center bbtn">
        <button class="getbtn inline-flex text-white lg:py-3 lg:px-11  sm:py-4 sm:px-8 focus:outline-none  text-lg">Get Started</button>
        <button class="watchbtn ml-4 inline-flex  lg:py-3 lg:px-11  sm:py-2 sm:px-8 focus:outline-none text-lg">Watch Video</button>
      </div>
      </div>
      <div class="lg:max-w-md lg:w-1/2 md:w-1/2 w-2/6">
      {/* <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
       <ReactPlayer className="vido" url="https://www.youtube.com/watch?v=qS5MdsgyWb4&t=22s" />
      </div>
      </div>
            </section>
        </div>
    )
  }
  
  export default Hero
  