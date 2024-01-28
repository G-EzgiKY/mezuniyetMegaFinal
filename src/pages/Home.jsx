import React from 'react';
import NavbarTwo from '../companents/NavbarTwo';
import './Galeri.css';
import { Link } from 'react-router-dom';




function Home() {

    function Image() {

        const imagestyle = {
            // 'contain', 'fill', 'none' gibi diğer değerleri de deneyebilirsin
            width: '100%',
            height: '450px',
            objectposition: 'bottom',






        };




        return (
            <img

                style={imagestyle}
                src="https://static.daktilo.com/sites/1085/uploads/2024/01/09/konya-ili-meram-belediye-baskanligi-10-memur-alacak.jpg"
                alt="Example Image"
            />
        );
    }


    return (
        <div  >

            <br />




            {Image()}

            <br /><br />
            <nav className="navbar bg-body-tertiary div1" style={{ border: "3px solid green", borderRadius: "5px" }}>
                <div style={{ backgroundColor: "rgb(103, 230, 161)" }} className="container-fluid">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Arama Yapın" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit"><b>ARA</b></button>
                    </form>
                </div>
            </nav>
            <br /><br />
            <a href="https://www.meram.bel.tr/hizli-odeme"><button className="button button2">VERGİ ÖDEME</button></a>
            <a href="https://www.meram.bel.tr/hizli-odeme"><button className="button button2">HIZLI ÖDEME</button></a>
            <a href="https://www.meram.bel.tr/ihaleler"><button className="button button2">İHALELER</button></a>
            <a href="https://www.meram.bel.tr/e-imar"><button className="button button2">ONLINE e-İMAR</button></a>
            <a href="https://www.meram.bel.tr/e-belediye-hizmetleri"><button className="button button2">e-BELEDİYE</button></a>
            <a href="https://www.meram.bel.tr/nobetci-eczaneler"><button className="button button2">ECZANELER</button></a>
            <a href="#haber"><button className="button button2">HABERLER</button></a>






            <br />

            <br />
            <br />
            <div className="background">
                <div className="transbox" style={{
                    display: "block", fontSize: "50px", fontWeight: "bold", textAlign: "center", color: "gray",
                    textShadow: "1px 1px 2px white, 0 0 25px white, 0 0 5px white"
                }}>TEVAZU, SAMİMİYET VE GAYRETLE</div></div>


            <br />

            <iframe style={{ width: "100%", height: "550px" }} src="https://www.youtube.com/embed/Eer48hinLY0" ></iframe>


            <br /><br /><br />
            <div >
                <div id='haber' style={{
                    display: "block", fontSize: "50px", fontWeight: "bold", textAlign: "center", color: "darkgreen", backgroundColor: "lightgreen",
                    textShadow: "1px 1px 2px white, 0 0 25px white, 0 0 5px white", border: "5px solid green", borderRadius: "20px"
                }}>EN SON GELİŞMELER</div>
            </div>






            <br /><br /><br />
            <div className="responsive">
                <div className="gallery">
                    <a target="_blank" href="merambelyenibina.jpg">
                        <img className='img2' src="merambelyenibina.jpg" alt="Cinque Terre" width="600" height="400" />
                    </a>
                    <div className="desc"><b><i>YENİ HİZMET BİNAMIZ   </i><br />🏛</b></div>
                </div>
            </div>


            <div className="responsive">
                <div className="gallery">
                    <a target="_blank" href="http://localhost:3000/proje">
                        <img className="img2" src="bizimmeram.jpg" alt="Forest" width="600" height="400" />
                    </a>
                    <div className="desc"> <b><i>MERAM DAHA DA GELİŞİYOR <br /><br /></i> </b></div>
                </div>
            </div>

            <div className="responsive">
                <div className="gallery">
                    <a target="_blank" href="https://uretkenakademi.com/yazilim-ogren">
                        <img className='img2' src="merammuretken.jpg" alt="Northern Lights" width="600" height="400" />
                    </a>
                    <div className="desc"><b><i>MEGA YAZILIM VE ÜRETKEN AKADEMİ İŞ BİRLİĞİ</i></b></div>
                </div>
            </div>

            <div className="responsive">
                <div className="gallery">
                    <a target="_blank" href="https://www.meram.bel.tr/haber/meram-belediyesi-nden-egitime-mega-katki">
                        <img className="img2" src="meramuretken.jpg" alt="Mountains" width="600" height="400" />
                    </a>
                    <div className="desc"><b><i>MEGA YAZILIM AKADEMİSİ BAŞLADI </i></b></div>
                </div>
            </div>

            <div className="clearfix"></div>








            <br /><br /><br />
            <div className='div1' style={{ fontFamily: 'sans-serif', textAlign: "center", color: "white" }}> <br />İSTEK, ÖNERİ VE ŞİKAYETLER İÇİN
                <hr />
                <a href="http://localhost:3000/iletisim"><button className='button5' style={{ border: "none", borderRadius: "20px", backgroundColor: "lightcyan" }}>BİZE ULAŞIN</button></a>
                <br />

                <br />
                <a href="https://www.instagram.com/mustafakavuss/"><button className='button5' style={{ border: "none", borderRadius: "20px", margin: "10px" }}><img style={{ width: "15px" }} src="insta.jpg" alt="" /></button></a>

                <a href="https://twitter.com/MustafaKavus"><button className='button5' style={{ border: "none", borderRadius: "20px", margin: "10px" }}><img style={{ width: "15px" }} src="x.jpg" /></button></a>
                <a href="https://www.facebook.com/mustafakavuss"><button className='button5' style={{ border: "none", borderRadius: "20px", margin: "10px" }}><img style={{ width: "15px" }} src="facebook.jpg" /></button></a>
                <br /><br />

            </div>


            <div className="footer">
                <p style={{ textAlign: 'center' }}>TÜM HAKLAR SAKLIDIR</p>


            </div>













        </div>
    );
}

export default Home;
