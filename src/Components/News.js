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
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3 crd">
        <div className="h-full overflow-hidden newss">
          <img className="object-cover object-center w-full lg:h-48 md:h-36" src="/images/news1.jpg" alt="blog" />
          <div className="p-6 bg-white ">
            <h2 className="mb-1 text-xs font-medium tracking-widest title-font txtdate">28/Aug/2021</h2>
            <h1 className="mb-3 text-lg font-medium title-font">The Catalyzer</h1>
            <p className="mb-3 leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            
          </div>
        </div>
      </div>
      
      <div className="p-4 md:w-1/3 crd">
        <div className="h-full overflow-hidden newss">
          <img className="object-cover object-center w-full lg:h-48 md:h-36" src="/images/news2.jpg" alt="blog" />
          <div className="p-6 bg-white ">
            <h2 className="mb-1 text-xs font-medium tracking-widest title-font txtdate">28/Aug/2021</h2>
            <h1 className="mb-3 text-lg font-medium title-font">The 400 Blows</h1>
            <p className="mb-3 leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
         
          </div>
        </div>
      </div>
      
      <div className="p-4 md:w-1/3 crd">
        <div className="h-full overflow-hidden newss">
          <img className="object-cover w-full lg:h-48 md:h-36" src="/images/news3.jpg" alt="blog" />
          <div className="p-6 bg-white ">
            <h2 className="mb-1 text-xs font-medium tracking-widest title-font txtdate">28/Aug/2021</h2>
            <h1 className="mb-3 text-lg font-medium title-font">Shooting Stars</h1>
            <p className="mb-3 leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            
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
