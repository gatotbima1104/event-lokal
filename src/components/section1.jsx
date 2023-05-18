import React from "react";

const Section1 = () => {
  return (
    <div
      id="banner"
      className="d-flex justify-content-center align-items-center"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="title-header mt-5">
              Temukan dan Promosikan Event <br />
              yang tak Terlupakan
            </h1>
          </div>
          <div className="row">
            <div className="col-md-5">
              <p className="sub-title mt-3">
                Apakah Anda siap untuk menjelajahi dunia acara yang luar biasa? <br />
                Temukan dan Promosikan Event yang Tak Terlupakan, <br /> kami sangat
                antusias untuk menghubungkan orang <br /> dengan acara yang menakjubkan
                dan tak terlupakan. <br /> Baik kamu seorang pecinta event yang penuh <br />
                semangat atau seorang penyelenggara acara yang <br /> ingin
                mempromosikan karya terbaik Anda, kami siap <br /> membantu.
              </p>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <button className="cari">Cari Events</button>
          </div>
          <div className="row my-5 border"></div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
