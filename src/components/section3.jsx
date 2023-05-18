import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";
import event3 from "../assets/event3.png";

const Section3 = () => {
  return (
    <div id="section3">
      <h1 className="title-s3 text-center my-5">Our Events</h1>
      <Container>

        <div className="row mb-5 justify-content-center">
          <div className="col-md-5 col-lg-4 col-sm-8 mb-5">
            <Card style={{ width: '18rem' }} className="m-auto event" id="event">
              <Card.Img variant="top" src={event1} />
              <Card.Body className="p-4">
                <Card.Title className="mb-3 title-card">Pestapora</Card.Title>
                <Card.Text className="text-card">
                Pestapora adalah selebrasi pertunjukan musik Indonesia, yang diselenggarakan oleh Boss Creator.
                </Card.Text>
                <Button id="tombol">Get Ticket</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-5 col-lg-4 col-sm-8 mb-5">
            <Card  style={{ width: '18rem' }} className="m-auto event" id="event">
              <Card.Img variant="top" src={event2} />
              <Card.Body className="p-4">
                <Card.Title className="mb-3 title-card">Cherrypop</Card.Title>
                <Card.Text className="text-card">
                Cherrypop event musik  yang melibatkan pelaku sub budaya anak muda dari berbagai genre musik
                </Card.Text>
                <Button id="tombol">Get Ticket</Button>
              </Card.Body>
            </Card> 
          </div>
          <div className="col-md-5 col-lg-4 col-sm-8 mb-5">
            <Card  style={{ width: '18rem' }} className="m-auto event" id="event">
              <Card.Img variant="top" src={event3} />
              <Card.Body className="p-4">
                <Card.Title className="mb-3 title-card">Swaranostalgia</Card.Title>
                <Card.Text className="text-card">
                  Swaranostalgia adalah sebuah konser musik yang dibuat untuk
                  memanjakan dan melepas kerinduan
                </Card.Text>
                <Button id="tombol">Get Ticket</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>

    </div>
  );
};

export default Section3;
