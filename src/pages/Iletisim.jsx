import React from 'react'
import './Iletisim.css'

function Iletisim() {
    return (
        <>
            <div className="hero-image4 div4">
                <div className="hero-text4 div4">
                    <br />

                    <h3 style={{ fontSize: "80px" }}>İLETİŞİM</h3>
                    <br />
                    <h4><b>ADRES</b></h4>
                    <h5>
                        Yenişehir Mah. Azerbaycan Cad. No: 5 42010 Meram / KONYA</h5>

                    <h4><b>TELEFON</b></h4>
                    <h5>
                        0332 320 10 00</h5>

                    <h4><b>e-POSTA</b></h4>
                    <h5>
                        bizimmeram@meram.bel.tr</h5>

                    <h4><b>KEP ADRESİ</b></h4>
                    <h5>
                        merambelediyesi@hs01.kep.tr</h5>

                    <h4><b>e-TEBLİGAT</b></h4>
                    <h5>
                        35846-96487-38597</h5>

                    <h4><b>IBAN</b></h4>
                    <h5>
                        TR33 0001 2009 5240 0007 0000 02</h5>


                    <div className='div5 '>
                        <h1>İLETİŞİM FORMU</h1>
                        <form action="/action_page.php" >
                            <label for="fname">ADINIZ</label>
                            <input className='input1' type="text" id="fname" name="firstname" placeholder="ADINIZ" />

                            <label for="lname">SOYADINIZ</label>
                            <input className='input1' type="text" id="lname" name="lastname" placeholder="SOYADINIZ" />
                            <br />

                            <label for="lname">TC numaranız</label>
                            <input className='input1' type="text" id="lname" name="lastname" placeholder="11 HANELİ TC KİMLİK NUMARANIZI GİRİNİZ" />


                            <select id="country" name="country">
                                <option value="usa">MAHALLE SEÇİNİZ</option>
                                <option value="australia">ALAKOVA</option>
                                <option value="canada">ALAVARDI</option>
                                <option value="usa">ALİ ULVİ KURUCU</option>
                                <option value="usa">ALPASLAN</option>
                                <option value="usa">AŞKAN</option>
                                <option value="usa">ATEŞBAZ-I VELİ</option>
                                <option value="usa">AYANBEY</option>
                                <option value="usa">AYDOĞU</option>
                                <option value="usa">AYMANAS</option>
                                <option value="usa">BAHÇEŞEHİR</option>
                                <option value="usa">BAYAT</option>
                                <option value="usa">BORUKTOLU</option>
                            </select>

                            <label for="lname">MESAJINIZI YAZINIZ</label>
                            <textarea className='input1' type="text" id="lname" name="lastname" placeholder="BİZE İLETMEK İSTEDİKLERİNİZİ YAZINIZ" />




                            <input className='input1' type="submit" value="GÖNDER" />
                        </form>
                    </div>

                </div>











            </div>

            <div className="footer">
                <p style={{ textAlign: 'center' }}>TÜM HAKLAR SAKLIDIR</p>


            </div>




        </>
    )
}

export default Iletisim