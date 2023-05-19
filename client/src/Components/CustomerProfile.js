import React from "react";
import { Component } from "react";
import Loading from "./Loading";
class CustomerProfile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let Customer = null;
    if (this.props.customer != null) {
      Customer = this.props.customer;
    }
    if (this.props.isLoading === true) {
      return <Loading />;
    } else {
      return (
        <div
          className="container-fluid"
          style={{ paddingLeft: "12%", paddingRight: "12%" }}
        >
          <div className="row">
            <div className="col-12 container-fluid">
              <h2 className="feature-heading container-fluid">Profile</h2>
              <hr className="feature-line" />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12">
              <div className="card">
                <div
                  className="card-header color text-white"
                  style={{ paddingLeft: "30%" }}
                >
                  <h2>
                    {Customer !== null && Customer.Customer_Username}'s Profile
                  </h2>
                </div>
                <div className="card-body" style={{ paddingLeft: "18%" }}>
                  <div style={{ paddingLeft: "30%" }}>
                    <br></br>
                    <div
                      className="profile-image-container"
                      style={{
                        backgroundImage: `url(https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?w=740&t=st=1682605172~exp=1682605772~hmac=ad3e869d7a5b9bdd34b07e5b0e4e0f1cd9f6ed081b483e6397a8d62bf81b88d4)`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <br></br>
                  </div>

                  <div className="row d-flex justify-content-start">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="#c89710"
                        class="bi bi-person"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                      </svg>
                    </div>
                    <h5 className="card-title col-sm-3 ">Name:</h5>

                    <h5 className="card-title col-sm-3 ">
                      {Customer !== null && Customer.Name}
                    </h5>
                  </div>

                  <div className="row d-flex justify-content-start">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="#c89710"
                        class="bi bi-telephone"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                      </svg>
                    </div>
                    <h5 className="card-title col-sm-3 ">Mobile Number:</h5>
                    <h5 className="card-title col-sm-3">
                      {Customer !== null && Customer.mobileNo}
                    </h5>
                  </div>
                  <div className="row d-flex justify-content-start">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="#c89710"
                        class="bi bi-geo-alt"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                    </div>
                    <h5 className="card-title col-sm-3 ">City:</h5>
                    <h5 className="card-title col-sm-3">
                      {Customer !== null && Customer.City}
                    </h5>
                  </div>

                  <div className="row d-flex justify-content-start">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="#c89710"
                        class="bi bi-gender-male"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
                        />
                      </svg>{" "}
                    </div>
                    <h5 className="card-title col-sm-3 ">Gender:</h5>
                    <h5 className="card-title col-sm-3">
                      {Customer !== null && Customer.Gender}
                    </h5>
                  </div>

                  <div className="row d-flex justify-content-start">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="#c89710"
                        class="bi bi-envelope-at"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                        <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                      </svg>
                    </div>
                    <h5 className="card-title col-sm-3">Email:</h5>
                    <h5 className="card-title col-sm">
                      {Customer !== null && Customer.email}
                    </h5>
                  </div>

                  <div className="row d-flex justify-content-start">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="#c89710"
                        class="bi bi-house"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                      </svg>
                    </div>
                    <h5 className="card-title col-sm-3">Address:</h5>
                    <h5 className="card-title col-sm-3">
                      {Customer !== null && Customer.Address}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default CustomerProfile;
