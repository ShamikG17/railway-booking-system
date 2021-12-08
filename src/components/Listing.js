import React from "react";
import Home from "./Home"
import "../styles/Listing.css"

const Listing = () => {
  return (
    <>
      <Home />
      
      <section class="listings">
        <div className="row gx-0">
          <div className="col-md-3 filter-bar">
            <div className="filter-head">Filter Results</div>
            <div className="dep-filter">
            <p className="option-heading">Departure Timing</p>
            <div className="row gx-0">
              <div className="col-md-6">
                <form >
                  <input type="checkbox" />  Early Morning <br />
                  <input type="checkbox" />  Morning <br />
                  <input type="checkbox" />  Afternoon<br />
                  <input type="checkbox" />  Night <br />
                </form>
                </div>
              <div className="col-md-6 timings">
                <span className="label">12am - 6am</span> <br />
                <span className="label">6am - 12pm</span> <br />
                <span className="label">12pm - 6pm</span> <br />
                <span className="label">6pm - 12 am</span> <br />
              </div>
              </div>
            </div>
            <hr />
            <div className="arr-filter">
            <p className="option-heading">Arrival Timing</p>
            <div className="row gx-0">
              <div className="col-md-6">
                <form >
                  <input type="checkbox" />  Early Morning <br />
                  <input type="checkbox" />  Morning <br />
                  <input type="checkbox" />  Afternoon<br />
                  <input type="checkbox" />  Night <br />
                </form>
                </div>
              <div className="col-md-6 timings">
                <span className="label">12am - 6am</span> <br />
                <span className="label">6am - 12pm</span> <br />
                <span className="label">12pm - 6pm</span> <br />
                <span className="label">6pm - 12 am</span> <br />
              </div>
              </div>
              </div>
            <hr />
            <div className="fare-classes">
              <p className="option-heading">Fare Classes</p>
              <form >
                <input type="checkbox" />  Early Morning <br />
                <input type="checkbox" />  Morning <br />
                <input type="checkbox" />  Afternoon <br />
                <input type="checkbox" />  Night <br />
              </form>
            </div>



          </div>
          <div className="col-md-9 train-list">
            <div className=" row gx-0 table-heads">
              <div className="col-md-3">Train name</div>
              <div className="col-md-3">Departure</div>
              <div className="col-md-3">Duration</div>
              <div className="col-md-3">Arrival</div>
            </div>

            <div className="train-card">
            <div className=" row gx-0 card-upper">
              <div className="col-md-3 number-name card-upper-col">
                <div className="train-number">12345</div>
                <div className="train-name">Deccan Queen</div>
              </div>

              <div className="col-md-3 departure card-upper-col">
                <div className="dep-time">5:00</div>
                <div className="dep-place">Pune</div>
              </div>

              <div className="col-md-3 duration card-upper-col">5hrs</div>

              <div className="col-md-3 arrival card-upper-col">
              <div className="arr-time">5:00</div>
                <div className="arr-place">Pune</div>
              </div>
            </div>
            <hr className="hr" />
            <div className="row gx-0 card-lower">
              <div className="col-md-2 coach-type">
                <div className="type">Sleeper class</div>
                <div className="price">R 300</div>
                <div className="avalability">Available-0030</div>
              </div>
              <div className="col-md-2 coach-type">
                <div className="type">Sleeper class</div>
                <div className="price">R 300</div>
                <div className="avalability">Available-0030</div>
              </div>
              <div className="col-md-2 coach-type">
                <div className="type">Sleeper class</div>
                <div className="price">R 300</div>
                <div className="avalability">Available-0030</div>
              </div>
            </div>
            </div>

            <div className="train-card">
            <div className=" row gx-0 card-upper">
              <div className="col-md-3 number-name card-upper-col">
                <div className="train-number">12345</div>
                <div className="train-name">Deccan Queen</div>
              </div>

              <div className="col-md-3 departure card-upper-col">
                <div className="dep-time">5:00</div>
                <div className="dep-place">Pune</div>
              </div>

              <div className="col-md-3 duration card-upper-col">5hrs</div>

              <div className="col-md-3 arrival card-upper-col">
              <div className="arr-time">5:00</div>
                <div className="arr-place">Pune</div>
              </div>
            </div>
            <div className="row gx-0 card-lower">
              <div className="col-md-2 coach-type">
                <div className="type">Sleeper class</div>
                <div className="price">R 300</div>
                <div className="avalability">Available-0030</div>
              </div>
              <div className="col-md-2 coach-type">
                <div className="type">Sleeper class</div>
                <div className="price">R 300</div>
                <div className="avalability">Available-0030</div>
              </div>
              <div className="col-md-2 coach-type">
                <div className="type">Sleeper class</div>
                <div className="price">R 300</div>
                <div className="avalability">Available-0030</div>
              </div>
            </div>
            </div>
          
        </div>
        </div>

      </section>


    </>
  );
};

export default Listing;
