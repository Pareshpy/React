import React, { useState } from 'react'
import "../components/search.css"

function searchBar() {
    const [searchValue,setSearchValue] = useState("");
    const handelInputChange = (e)=>{
        setSearchValue(e.target.value);
    }
  return (
    <>
      
      <div className="heading">
      <a href="index.html">
        <h3>PURULIA DOCTORS</h3>
      </a>

    </div>
    <div className="search-box">
      <input type="search" name="search" id="search" placeholder=" Search Doctors, Symptoms, Specialist"/>
      <a href="#" className="search-btn"><i className="fas fa-search"></i></a>
    </div>

    <div className="maincon">
      <div className="container">
        <div className="box box1">Doctors</div>
        <div className="box box2">CLINICS</div>
        <div className="box box3">BLOOD BANK</div>
      </div>
    </div>

    </>
  )
}

export default searchBar
