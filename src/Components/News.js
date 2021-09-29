import React from 'react'
import './News.css'
const News = () => {
    return (
        <div classNameName="container">
            <section className="container newsec ">
                <div className="titletxt ">
                <h1>Invest & News</h1>
                <p>Kala soco xogta ugu dambeysay ee billaha ah</p>
                </div>
  <div className="container px-5 py-10 mx-auto whoo">
    <div className="flex flex-wrap crdds">
      <div className="p-4 md:w-2/3 crd">
        <div className="h-full overflow-hidden newss">
          <img className="object-cover object-center w-full lg:h-48 md:h-56" src="/images/news1.png" alt="blog" />
          <div className="p-6 bg-white ">
            <h2 className="mb-1 text-xs font-medium tracking-widest title-font txtdate">28/Aug/2021</h2>
            <h1 className="mb-3 text-lg font-medium title-font">Muraadso launches first eCommerce application in Africa</h1>
            <p className="mb-3 leading-relaxed">Muraadso lunching the first eCommerce application in africa this october 2021</p>
            
          </div>
        </div>
      </div>
      
      <div className="p-4 md:w-2/3 crd">
        <div className="h-full overflow-hidden newss">
          <img className="object-center w-full lg:h-48 md:h-56" src="/images/news2.jpg" alt="blog" />
          <div className="p-6 bg-white ">
            <h2 className="mb-1 text-xs font-medium tracking-widest title-font txtdate">28/Aug/2021</h2>
            <h1 className="mb-3 text-lg font-medium title-font">Muraadso opened its third showroom in Hargeisa</h1>
            <p className="leading-relaxed mb-11">Third showroom in a row opening in Xero Awr Road in Hargeisa </p>
         
          </div>
        </div>
      </div>
      
      <div className="p-4 md:w-2/3 crd">
        <div className="h-full overflow-hidden newss">
          <img className="object-cover w-full lg:h-48 md:h-56" src="/images/news3.jpg" alt="blog" />
          <div className="p-6 bg-white ">
            <h2 className="mb-1 text-xs font-medium tracking-widest title-font txtdate">28/Aug/2021</h2>
            <h1 className="mb-3 text-lg font-medium title-font">Muraadso on the eyes of global media</h1>
            <p className="leading-relaxed mb-11">In 2021 Muraadso's rise has been the subject of much international media attention.</p>
            
          </div>
        </div>
      </div>
      
    </div>
  </div>

</section>
            
        </div>
    )
}

export default News
