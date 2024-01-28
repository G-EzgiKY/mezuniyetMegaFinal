import React from 'react'
import './Proje.css';
import './Galeri.css';


function Proje() {
    return (
        <>
            <>
                <br />

                <div className="header2">

                    <h1 style={{ textAlign: "center" }}>PROJELERİMİZ</h1>
                </div>

                <div className="row">
                    <div className="col-3 col-s-3 menu">
                        <br />
                        <ul>
                            <a href="#tamamlanan"><li>TAMAMLANAN PROJELER</li></a>
                            <a href="#devam"><li>DEVAM EDEN PROJELER</li></a>
                            <a href="#plan"><li>PLANLANAN PROJELER</li></a>







                        </ul>
                    </div>

                    <div className="col-6 col-s-9">
                        <h1 style={{ textAlign: "center", color: "green" }}>SİZLER İÇİN ÇALIŞIYORUZ</h1>
                        <p style={{ textAlign: "center", color: "green" }}>SİZ DEĞERLİ VATANDAŞLARIMIZIN MUTLULUĞU BİZİM İÇİN ÇOK DEĞERLİ</p>
                        <iframe style={{ width: "100%", height: "350px" }} src="https://www.youtube.com/embed/ql8Meq4lq48" ></iframe>
                        <p style={{ textAlign: "center" }}><i >Meram'da imar uygulamalarından kentsel dönüşüm projelerine, konut hamlelerinden doğalgaza kadar birçok alanda çalıştık, çalışıyoruz.</i></p>
                    </div>

                    <div >
                        <div id='tamamlanan' style={{
                            display: "block", fontSize: "30px", fontWeight: "bold", textAlign: "center", color: "darkgreen", backgroundColor: "lightgreen",
                            textShadow: "1px 1px 2px white, 0 0 25px white, 0 0 5px white", border: "5px solid green", borderRadius: "20px"
                        }}>TAMAMLANAN PROJELER</div></div>

                    <div className="gallery1">
                        <br />
                        <a target="_blank" href="https://www.meram.bel.tr/proje/nazmiye-muslu-spor-salonu-tadilati-yapim-isi">
                            <img className='img3' src="nazmiye.jpg" alt="Cinque Terre" width="600" height="400" />
                        </a>
                        <div className="desc1">Nazmiye Muslu Spor Salonu Tadilatı Yapım İşi</div>
                    </div>

                    <div className="gallery1">
                        <br />
                        <a target="_blank" href="https://www.meram.bel.tr/proje/10-adet-acik-hali-saha-yapimi">
                            <img className='img3' src="haliisaha.jpg" alt="Cinque Terre" width="600" height="400" />
                        </a>
                        <div className="desc1">10 Adet Açık Halı Saha Yapımı</div>
                    </div>
                    <div className="gallery1">
                        <br />
                        <a target="_blank" href="https://www.meram.bel.tr/proje/6-adet-acik-hali-saha-yapilmasi">
                            <img className='img3' src="altiacik.jpg" alt="Cinque Terre" width="600" height="400" />
                        </a>
                        <div className="desc1">6 Adet Açık Halı Saha Yapılması</div>
                    </div>
                    <div className="gallery1">
                        <br />
                        <a target="_blank" href="https://www.meram.bel.tr/proje/tantavi-kultur-ve-sanat-merkezi">
                            <img className='img3' src="tantavi.jpg" alt="Cinque Terre" width="600" height="400" />
                        </a>
                        <div className="desc1">Tantavi Kültür ve Sanat Merkezi</div>
                    </div>
                    <div id='devam' style={{
                        display: "block", fontSize: "30px", fontWeight: "bold", textAlign: "center", color: "darkgreen", backgroundColor: "lightgreen",
                        textShadow: "1px 1px 2px white, 0 0 25px white, 0 0 5px white", border: "5px solid green", borderRadius: "20px"
                    }}>DEVAM EDEN PROJELER</div>

                    <div className="gallery1">
                        <br />
                        <a target="_blank" href="https://www.meram.bel.tr/proje/sukran-mahallesi-2-adet-tescilli-tasinmazin-rekonstruksiyon-ikmal-insaati-isi">
                            <img className='img3' src="sukranm.jpg" alt="Cinque Terre" width="600" height="400" />
                        </a>
                        <div className="desc1">Şükran Mahallesi 2 Adet Tescilli Taşınmazın Rekonstrüksiyon İkmal İnşaatı İşi</div>
                    </div>
                    <div className="gallery1">
                        <br />
                        <a target="_blank" href="https://www.meram.bel.tr/proje/bizim-meram-koyu-konut-yapi-kooperatifi">
                            <img className='img3' src="bmeramko.jpg" alt="Cinque Terre" width="600" height="400" />
                        </a>
                        <div className="desc1">Bizim Meram Köyü Konut Yapı Kooperatifi</div>
                    </div>

                    <div id='plan' style={{
                        display: "block", fontSize: "30px", fontWeight: "bold", textAlign: "center", color: "darkgreen", backgroundColor: "lightgreen",
                        textShadow: "1px 1px 2px white, 0 0 25px white, 0 0 5px white", border: "5px solid green", borderRadius: "20px"
                    }}>PLANLANAN PROJELER</div>

                    <div className="gallery1">
                        <br />
                        <a target="_blank" href="https://www.meram.bel.tr/proje/sukran-mah-kafeterya-ve-cevre-duzenlemesi-2">
                            <img className='img3' src="sukrocevre.jpg" alt="Cinque Terre" width="600" height="400" />
                        </a>
                        <div className="desc1">Şükran Mah. Kafeterya ve Çevre Düzenlemesi</div>
                    </div>










                </div>



                <div className="footer2">


                    <p style={{ textAlign: 'center' }}>TÜM HAKLAR SAKLIDIR</p>
                </div>



            </>

        </>
    )
}

export default Proje