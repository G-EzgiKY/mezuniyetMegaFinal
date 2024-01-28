import React from 'react'
import { NavLink } from 'react-router-dom'


function NavbarTwo() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="light" style={{ border: "solid", borderColor: "greenyellow" }}>
            <div className="container">


                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink
                            style={{
                                backgroundColor: "lightgreen", color: "green",
                                fontSize: "20px",
                                borderColor: "green",
                                border: " solid",
                                borderRadius: "8px", margin: "2px"
                            }}
                            className="nav-link " to="/baskan"><b>BAŞKAN</b>
                            <img
                                style={{ border: "solid", borderRadius: "8px" }} src="data:image/jpeg;base64,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" alt="Başkanın resmi" width="150px" /></NavLink>
                        <NavLink
                            style={{
                                backgroundColor: "white", color: "green",
                                fontSize: "20px",
                                borderColor: "green",
                                border: " solid",
                                borderRadius: "8px", margin: "2px",

                            }}
                            className="nav-link " to="/kurumsal"><br /><br /><b >KURUMSAL</b>
                        </NavLink>
                        <NavLink
                            style={{
                                backgroundColor: "white", color: "green",
                                fontSize: "20px",
                                borderColor: "green",
                                border: " solid",
                                borderRadius: "8px", margin: "2px"
                            }}
                            className="nav-link " to="/hizmett"><br /><br /><b>HİZMET</b></NavLink>
                        <NavLink
                            style={{ backgroundColor: "green", margin: "30px", borderRadius: "15px", borderBlockStyle: "solid", fontSize: "40px", color: "white", borderColor: "greenyellow" }}

                            className="nav-link " to="/">  MERAM BELEDİYESİ</NavLink>
                        <NavLink
                            style={{
                                backgroundColor: "white", color: "green",
                                fontSize: "20px",
                                borderColor: "green",
                                border: " solid",
                                borderRadius: "8px", margin: "2px"
                            }}
                            className="nav-link " to="/proje"><b>PROJELER</b></NavLink>
                        <NavLink
                            style={{
                                backgroundColor: "white", color: "green",
                                fontSize: "20px",
                                borderColor: "green",
                                border: " solid",
                                borderRadius: "8px", margin: "2px"
                            }}
                            className="nav-link " to="/meram"><b>MERAM</b></NavLink>
                        <NavLink
                            style={{
                                backgroundColor: "white", color: "green",
                                fontSize: "20px",
                                borderColor: "green",
                                border: " solid",
                                borderRadius: "8px", margin: "2px",

                            }}
                            className="nav-link " to="/iletisim"><b>İLETİŞİM</b></NavLink>

                    </ul>
                </div>
            </div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit"><b>ARA</b></button>
                    </form>
                </div>
            </nav>
        </nav>
    )
}

export default NavbarTwo