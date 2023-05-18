import React from "react";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";


const Section2 = () => {
  return (
    <div
      id="section2"
      className="d-flex justify-content-center align-items-center"
    >
      <div className="container m-auto my-5">
        <h1 className="title-s2 text-center my-5">
          Kenapa harus menggunakan Invent?
        </h1>
        <div className="row py-5 m-auto px-5">
          <div className="col-lg-6 col-md-12 col-xs-12 p-5">
            <div className="row mb-3 ">
              <div className="col-lg-3">
                <img src={logo1} alt="" className="mb-3"/>
              </div>
              <div className="col-lg-9">
                <h1 className="text-white title-about ">Murah</h1>
                <p className="text-white desc-about ">
                  Kami menyediakan biaya pemasaran <br /> yang rendah
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12 p-5">
            <div className="row mb-3   ">
              <div className="col-lg-3">
                <img src={logo2} alt="" className="mb-3"/>
              </div>
              <div className="col-lg-9 ">
              <h1 className="text-white title-about">Berkualitas</h1>
                <p className="text-white desc-about">
                  Website kami memiliki desain <br /> yang menarik dan professional
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5 m-auto px-5 pb-5">
          <div className="col-lg-6 col-md-12 col-xs-12  p-5">
            <div className="row mb-3 ">
              <div className="col-lg-3 ">
                <img src={logo3} alt="" className="mb-3"/>
              </div>
              <div className="col-lg-9">
              <h1 className="text-white title-about">Jangkauan Luas</h1>
                <p className="text-white desc-about">
                Anda dapat mencapai audience yang <br /> lebih luas secara online
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12  p-5">
            <div className="row mb-3 ">
              <div className="col-lg-3 ">
                <img src={logo4} alt="" className="mb-3"/>
              </div>
              <div className="col-lg-9">
              <h1 className="text-white title-about">Mudah digunakan</h1>
                <p className="text-white desc-about">
                  Kami memberi kemudahan untuk <br /> pengguna website kami
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
