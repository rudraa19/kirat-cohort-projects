import React from "react";

function Navbar() {
    return(
        <>
        <div style={{backgroundColor: 'rgb(250, 250, 250)', width: '100%', height: '60px', position: 'sticky', top: 0, display: 'flex', alignItems: 'center', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', border: '0 solid #e5e7eb', borderBottomWidth: '1px'}}>
            <a href="/" style={{textDecoration: 'none'}}><div style={{color: 'rgb(9, 9, 11)', paddingLeft: '1rem', fontSize: '1.5rem', lineHeight: '2rem', fontWeight: 600}}>
                CohortProjects
            </div></a>
        </div>
        <br />   
        </> 
    )
}

export default Navbar;