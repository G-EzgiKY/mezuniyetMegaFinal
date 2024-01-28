import React from 'react'
import './Hizmet.css';

function Hizmett() {
    return (
        <>
            <br />

            <div className="header1">

                <h1 style={{ textAlign: "center" }}>HİZMETLERİMİZ</h1>
            </div>

            <div className="row">
                <div className="col-3 col-s-3 menu">
                    <ul>
                        <li>İYİ Kİ DOĞDUN BEBEK</li>
                        <li>EVLİLİK İŞLEMLERİ</li>
                        <li>BAŞVURU KILAVUZU</li>
                        <li>RUHSAT İŞLEMLERİ</li>
                        <li>STANDART DOSYA PLANI</li>
                        <li>ÇALIŞMA YÖNETMENLİKLERİ</li>
                        <li>BEYANNAME FORMLARI</li>
                        <li>ARABULUCULUK</li>
                        <li>HİZMET STANDARTLARI</li>
                        <li>SIK SORULAN SORULAR</li>


                    </ul>
                </div>

                <div className="col-6 col-s-9">
                    <h1 style={{ textAlign: "center", color: "green" }}>HER ZAMAN YANINIZDAYIZ</h1>
                    <p style={{ textAlign: "center", color: "green" }}>SİZ DEĞERLİ VATANDAŞLARIMIZIN MUTLULUĞU BİZİM İÇİN ÇOK DEĞERLİ</p>
                    <iframe style={{ width: "100%", height: "350px" }} src="https://www.youtube.com/embed/Ix0TWD4WrPk" ></iframe>
                    <p style={{ textAlign: "center" }}><i >Teyzemiz mutlu oldu, biz daha çok mutlu olduk.</i></p>
                </div>

                <div className="col-3 col-s-12">
                    <div className="aside">
                        <h2>VERGİ TAKVİMİ</h2>
                        <br />

                        <table >
                            <thead>
                                <tr>
                                    <th>Vergi Çeşiti</th>
                                    <th>Birinci Taksit</th>
                                    <th>İkinci Taksit</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Emlak Vergisi</td>
                                    <td>31Mayıs</td>
                                    <td>30Kasım</td>
                                </tr>
                                <tr>
                                    <td>Çevre Temizlik Vergisi</td>
                                    <td>31Mayıs</td>
                                    <td>30Kasım</td>
                                </tr>
                                <tr>
                                    <td>İlan Reklam Vergisi</td>
                                    <td>31Mayıs</td>
                                    <td>30Kasım</td>
                                </tr>
                                <tr>
                                    <td>Eğlence Vergisi</td>
                                    <td>Her ayın 20'sinde peşin ödenir</td>
                                    <td>-</td>
                                </tr>
                            </tbody>


                        </table>
                        <br />
                        <hr />
                        <div>
                            <p>MERAM BELEDİYESİ VERGİ DAİRESİ</p>
                            <p>MERAM</p>
                            <hr />
                            <p>VERGİ NO</p>
                            <p>	6 160 016 236</p>
                            <hr />
                            <p>IBAN</p>
                            <p>tr33 0001 2009 5240 0007 0000 02</p>
                        </div>


                    </div>
                </div>
            </div>



            <div className="footer1">


                <p style={{ textAlign: 'center' }}>TÜM HAKLAR SAKLIDIR</p>
            </div>



        </>
    )
}

export default Hizmett