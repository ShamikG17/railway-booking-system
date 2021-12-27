import React from "react";
import "../styles/Listing.css";
import SearchBar from "./SearchBar";
import trains from "./trains.js";
import Navbar from "./Navbar";

const Listing = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          background: "#f4f4f4",
          margin: "2rem 3rem",
          "border-radius": "10px",
        }}
      >
        <SearchBar />
      </div>

      <section class="listings">
        <div className="row gx-5">
          <div className="col-md-3 filter-bar">
            <div className="filter-head">Filter Results</div>
            <div className="dep-filter">
              <p className="option-heading">Departure Timing</p>
              <div className="row gx-0">
                <div className="col-md-6">
                  <form>
                    <input type="checkbox" /> Early Morning <br />
                    <input type="checkbox" /> Morning <br />
                    <input type="checkbox" /> Afternoon
                    <br />
                    <input type="checkbox" /> Night <br />
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
                  <form>
                    <input type="checkbox" /> Early Morning <br />
                    <input type="checkbox" /> Morning <br />
                    <input type="checkbox" /> Afternoon
                    <br />
                    <input type="checkbox" /> Night <br />
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
              <form>
                <input type="checkbox" /> 2S - Second Sleeper <br />
                <input type="checkbox" /> SL - Sleepr Clas <br />
                <input type="checkbox" /> 3A - AC 3-Tier
                <br />
                <input type="checkbox" /> 2A - AC 2-Tier <br />
                <input type="checkbox" /> 1A - First Class AC <br />
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

            {trains.map((train) => (
              <div className="train-card">
                <div className=" row gx-0 card-upper">
                  <div className="col-md-3 number-name card-upper-col">
                    <div className="train-number">{train.number}</div>
                    <div className="train-name">{train.name}</div>
                  </div>

                  <div className="col-md-3 departure card-upper-col">
                    <div className="dep-time">{train.departure}</div>
                    <div className="dep-place">{train.departure_place}</div>
                  </div>

                  <div className="col-md-3 duration card-upper-col">
                    {train.duration}hrs
                  </div>

                  <div className="col-md-3 arrival card-upper-col">
                    <div className="arr-time">{train.arrival}</div>
                    <div className="arr-place">{train.arrival_place}</div>
                  </div>
                </div>
                <hr className="hr" />
                <div className="row gx-0 card-lower">
                  <div className="col-md-2 coach-type">
                    <div className="type">Sleeper class(SL)</div>
                    <div className="price">₹ 300</div>
                    <div className="avalability">Available-0030</div>
                  </div>
                  <div className="col-md-2 coach-type">
                    <div className="type">AC 3 tier(3A)</div>
                    <div className="price">₹ 700</div>
                    <div className="avalability">Available-0050</div>
                  </div>
                  <div className="col-md-2 coach-type">
                    <div className="type">AC 2 Tier(2A)</div>
                    <div className="price">₹ 1000</div>
                    <div className="avalability">Available-0020</div>
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="train-card">
              <div className=" row gx-0 card-upper">
                <div className="col-md-3 number-name card-upper-col">
                  <div className="train-number">12345</div>
                  <div className="train-name">Rajdhani Express</div>
                </div>

                <div className="col-md-3 departure card-upper-col">
                  <div className="dep-time">13:00</div>
                  <div className="dep-place">Mumbai</div>
                </div>

                <div className="col-md-3 duration card-upper-col">10hrs</div>

                <div className="col-md-3 arrival card-upper-col">
                  <div className="arr-time">23:00</div>
                  <div className="arr-place">Delhi</div>
                </div>
              </div>
              <hr className="hr" />
              <div className="row gx-0 card-lower">
                <div className="col-md-2 coach-type">
                  <div className="type">Sleeper class(SL)</div>
                  <div className="price">₹ 300</div>
                  <div className="avalability">Available-0030</div>
                </div>
                <div className="col-md-2 coach-type ">
                  <div className="type">AC 3 tier(3A)</div>
                  <div className="price">₹ 700</div>
                  <div className="avalability">Available-0050</div>
                </div>
                <div className="col-md-2 coach-type">
                  <div className="type">AC 2 Tier(2A)</div>
                  <div className="price">₹ 1000</div>
                  <div className="avalability">Available-0020</div>
                </div>
              </div>
            </div>
            <div className="train-card">
              <div className=" row gx-0 card-upper">
                <div className="col-md-3 number-name card-upper-col">
                  <div className="train-number">43589</div>
                  <div className="train-name">Duronto Express</div>
                </div>

                <div className="col-md-3 departure card-upper-col">
                  <div className="dep-time">10:00</div>
                  <div className="dep-place">Nagpur</div>
                </div>

                <div className="col-md-3 duration card-upper-col">12hrs</div>

                <div className="col-md-3 arrival card-upper-col">
                  <div className="arr-time">22:00</div>
                  <div className="arr-place">Chennai</div>
                </div>
              </div>
              <hr className="hr" />
              <div className="row gx-0 card-lower">
                <div className="col-md-2 coach-type">
                  <div className="type">Sleeper class(SL)</div>
                  <div className="price">₹ 300</div>
                  <div className="avalability">Available-0030</div>
                </div>
                <div className="col-md-2 coach-type ">
                  <div className="type">AC 3 tier(3A)</div>
                  <div className="price">₹ 700</div>
                  <div className="avalability">Available-0050</div>
                </div>
                <div className="col-md-2 coach-type">
                  <div className="type">AC 2 Tier(2A)</div>
                  <div className="price">₹ 1000</div>
                  <div className="avalability">Available-0020</div>
                </div>
              </div>
            </div>
            <div className="train-card">
              <div className=" row gx-0 card-upper">
                <div className="col-md-3 number-name card-upper-col">
                  <div className="train-number">12345</div>
                  <div className="train-name">Godavari Express</div>
                </div>

                <div className="col-md-3 departure card-upper-col">
                  <div className="dep-time">9:00</div>
                  <div className="dep-place">Hyderabad</div>
                </div>

                <div className="col-md-3 duration card-upper-col">12hrs</div>

                <div className="col-md-3 arrival card-upper-col">
                  <div className="arr-time">20:00</div>
                  <div className="arr-place">Vishakapatnam</div>
                </div>
              </div>
              <hr className="hr" />
              <div className="row gx-0 card-lower">
                <div className="col-md-2 coach-type">
                  <div className="type">Sleeper class(SL)</div>
                  <div className="price">₹ 300</div>
                  <div className="avalability">Available-0030</div>
                </div>
                <div className="col-md-2 coach-type ">
                  <div className="type">AC 3 tier(3A)</div>
                  <div className="price">₹ 700</div>
                  <div className="avalability">Available-0050</div>
                </div>
                <div className="col-md-2 coach-type">
                  <div className="type">AC 2 Tier(2A)</div>
                  <div className="price">₹ 1000</div>
                  <div className="avalability">Available-0020</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
