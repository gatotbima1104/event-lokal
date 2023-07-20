import React from "react";
import ReactGA from "react-ga";

const Section1 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    ReactGA.event({
      category: "Button",
      action: "Click",
      label: "Cari Events - Clicked by User",
    });

    // Replace '1234567890' with the phone number you want to contact
    const phoneNumber = "+6285156086291";

    // Replace 'Check out our upcoming event!' with your pre-defined message
    const message =
      "Kami tertarik untuk mempromosikan event kami di Event Lokal website anda";

    // Create the WhatsApp link with the 'https://wa.me/' format and message parameter
    const whatsappLink =
      "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    // Open the link in a new tab/window
    window.open(whatsappLink, "_blank");
  };

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
                Apakah Anda siap untuk menjelajahi dunia acara yang luar biasa?{" "}
                <br />
                Temukan dan Promosikan Event yang Tak Terlupakan, <br /> kami
                sangat antusias untuk menghubungkan orang <br /> dengan acara
                yang menakjubkan dan tak terlupakan. <br /> Baik kamu seorang
                pecinta event yang penuh <br />
                semangat atau seorang penyelenggara acara yang <br /> ingin
                mempromosikan karya terbaik Anda, kami siap <br /> membantu.
              </p>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <button className="cari" type="submit" onClick={handleSubmit}>
              Cari Events
            </button>
          </div>
          <div className="row my-5 border"></div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
