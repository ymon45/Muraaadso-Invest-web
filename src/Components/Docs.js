    import React from 'react'
    import './Doc.css'


    
const Docs = ({data}) => {
    return (
        <> 
                <h1 className="doctitle">DOCUMENTS</h1>
                <div className="docheader" id="document">
                    <h3 className="docname">Doccument Name</h3>
                    <h3 className="docdesc">Document Description</h3>
                    <div className="sideheader">
                    <h3 className="Download">Download</h3>
                    <h3 className="View">View</h3>

                    </div>
                    
                </div>
        {data.map((data) => {
            const {name, desc, URL} = data
            return(
                <div className="container docs">
                <h2>{name}</h2>
                <p>{desc}</p>
                <div className="btns">
                <a href={URL} download >Download</a>
                <a href="#">View</a>
          </div>
                 </div>

            )
        })}
        
        </>
    )
}

export default Docs
