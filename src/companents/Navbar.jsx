import React from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container d-flex justify-content-center align-items-center">


                <button className="navbar-toggler "

                    type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink
                            style={{
                                backgroundColor: "lightgrey", color: "whitesmoke",
                                fontSize: "20px",

                                border: "1px solid green",
                                borderRadius: "8px", margin: "2px",
                                WebkitBoxReflect: "below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4))",
                                textShadow: "2px 2px 25px green",
                                height: "70px",
                                fontFamily: "Helvetica Neue",



                            }}
                            className="nav-link " to="/baskan"><b>BAŞKAN</b>

                            <img
                                className='img2'
                                style={{ border: "0.5px solid green", borderRadius: "8px", }} src="baskanf.jpg" alt="Başkanın resmi" width="50px" height="50px" /></NavLink>
                        <NavLink


                            style={{
                                backgroundColor: "lightgrey", color: "whitesmoke",
                                fontSize: "20px",

                                border: "1px solid green",
                                borderRadius: "8px", margin: "2px",
                                WebkitBoxReflect: "below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4))",
                                textShadow: "2px 2px 25px green",
                                height: "70px",
                                fontFamily: "Helvetica Neue",



                            }}
                            className="nav-link " to="/kurumsal">  <b >KURUMSAL</b>
                        </NavLink>
                        <NavLink
                            style={{
                                backgroundColor: "lightgrey", color: "whitesmoke",
                                fontSize: "20px",

                                border: "1px solid green",
                                borderRadius: "8px", margin: "2px",
                                WebkitBoxReflect: "below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4))",
                                textShadow: "2px 2px 25px green",
                                height: "70px",
                                fontFamily: "Helvetica Neue",
                            }}
                            className="nav-link " to="/hizmett"><b>HİZMET</b></NavLink>
                        <NavLink
                            style={{ backgroundColor: "lightgrey", margin: "30px", borderRadius: "15px", fontSize: "40px", color: "whitesmoke", border: "1px solid ", borderColor: "green" }}

                            className="nav-link " to="/">  <div style={{

                                textShadow: "1px 100px 100px white, 0 0 500px white, 0 0 5px green",

                            }} >MERAM BELEDİYESİ </div><h6 style={{
                                textAlign: "center", color: "whitesmoke",
                                textShadow: "1px 1px 100px white, 0 0 5px white, 0 0 5px green",

                            }}>GÖNÜLLERİN BELEDİYESİ</h6> </NavLink>
                        <NavLink
                            style={{
                                backgroundColor: "lightgrey", color: "whitesmoke",
                                fontSize: "20px",

                                border: "1px solid green",
                                borderRadius: "8px", margin: "2px",
                                WebkitBoxReflect: "below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4))",
                                textShadow: "2px 2px 25px green",
                                height: "70px",
                                fontFamily: "Helvetica Neue",
                            }}
                            className="nav-link " to="/proje"><b>PROJELER</b></NavLink>
                        <NavLink
                            style={{
                                backgroundColor: "lightgray", color: "whitesmoke",
                                fontSize: "20px",

                                border: "1px solid green",
                                borderRadius: "8px", margin: "2px",
                                WebkitBoxReflect: "below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4))",
                                textShadow: "2px 2px 25px green",
                                height: "70px",
                                fontFamily: "Helvetica Neue",
                            }}
                            className="nav-link " to="/meram"><b>MERAM</b></NavLink>
                        <NavLink
                            style={{
                                backgroundColor: "lightgrey", color: "whitesmoke",
                                fontSize: "20px",

                                border: "1px solid green",
                                borderRadius: "8px", margin: "2px",
                                WebkitBoxReflect: "below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4))",
                                textShadow: "2px 2px 25px green",
                                height: "70px",
                                fontFamily: "Helvetica Neue",

                            }}
                            className="nav-link " to="/iletisim"><b>İLETİŞİM</b></NavLink>

                    </ul>
                </div>
            </div>


        </nav>

    )
}

export default Navbar