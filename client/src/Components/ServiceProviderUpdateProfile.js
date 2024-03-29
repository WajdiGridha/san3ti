import React, { Component } from "react";
import {
  Form,
  Input,
  Button,
  Label,
  Col,
  Row,
  FormGroup,
  FormFeedback,
} from "reactstrap";
class ServiceProviderUpdateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:
        typeof this.props.serviceProvider === "undefined"
          ? ""
          : this.props.serviceProvider._id,
      Name:
        typeof this.props.serviceProvider === "undefined"
          ? ""
          : this.props.serviceProvider.Name,
      MobileNo:
        typeof this.props.serviceProvider === "undefined"
          ? ""
          : this.props.serviceProvider.MobileNo,
      Gender:
        typeof this.props.serviceProvider === "undefined"
          ? ""
          : this.props.serviceProvider.Gender,
      City:
        typeof this.props.serviceProvider === "undefined"
          ? ""
          : this.props.serviceProvider.City,
      Email:
        typeof this.props.serviceProvider === "undefined"
          ? ""
          : this.props.serviceProvider.email,
      Price:
        typeof this.props.serviceProvider === "undefined"
          ? ""
          : this.props.serviceProvider.Price,
      Occupation:
        typeof this.props.serviceProvider === "undefined"
          ? ""
          : this.props.serviceProvider.Occupation,
      Description:
        typeof this.props.serviceProvider === "undefined"
          ? ""
          : this.props.serviceProvider.Description,
      touched: {
        Name: false,
        MobileNo: false,
        City: false,
        Address: false,
        Email: false,
      },
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateServiceProviderInfo(this.state);
  };

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  validate = (Name, MobileNo, Email, City) => {
    const errors = {
      Name: "",
      MobileNo: "",
      Email: "",
      City: "",
    };
    if (this.state.touched.Name && Name.length < 3)
      errors.Name = "Name should be of minimum length of 3 characters";
    if (this.state.touched.Name && Name.length > 30)
      errors.Name = "Name should not be greater than 30 characters";

    if (this.state.touched.City && City.length < 2)
      errors.City = "Enter Valid City";

    const reg = /^\d{10}$/;
    if (this.state.touched.MobileNo && !reg.test(MobileNo))
      errors.MobileNo = "Enter a valid Mobile Number";
    if (
      this.state.touched.Email &&
      Email.split("").filter((x) => x === "@").length !== 1
    )
      errors.Email = "Enter a valid email";
    return errors;
  };

  render() {
    const errors = this.validate(
      this.state.Name,
      this.state.MobileNo,
      this.state.Email,
      this.state.City
    );
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 container-fluid">
            <h2 className="feature-heading ">Update Your Profile</h2>
            <hr className="feature-line" />
          </div>
        </div>
        <Form className="myForm container-fluid" onSubmit={this.handleSubmit}>
          <Row className="container-fluid" form>
            <Col className="container-fluid" md={6}>
              <FormGroup className="container-fluid">
                <Label htmlFor="Name">Name</Label>
                <Input
                  required
                  type="text"
                  id="Name"
                  name="Name"
                  value={this.state.Name}
                  onChange={this.handleInputChange}
                  valid={errors.Name === ""}
                  invalid={errors.Name !== ""}
                  onBlur={this.handleBlur("Name")}
                />
                <FormFeedback>{errors.Name}</FormFeedback>
              </FormGroup>
            </Col>
            <Col className="container-fluid" md={6}>
              <FormGroup className="container-fluid">
                <Label htmlFor="MobileNo">Mobile Number</Label>
                <Input
                  type="text"
                  id="MobileNo"
                  name="MobileNo"
                  value={this.state.MobileNo}
                  onChange={this.handleInputChange}
                  valid={errors.MobileNo === ""}
                  invalid={errors.MobileNo !== ""}
                  onBlur={this.handleBlur("MobileNo")}
                />
                <FormFeedback>{errors.MobileNo}</FormFeedback>
              </FormGroup>
            </Col>
          </Row>
          <Row className="container-fluid" form>
            <Col className="container-fluid" md={6}>
              <FormGroup className="container-fluid">
                <Label htmlFor="Gender">Gender</Label>
                <Input
                  required
                  type="select"
                  name="Gender"
                  id="Gender"
                  value={this.state.Gender}
                  className="form-control"
                  onChange={this.handleInputChange}
                >
                  <option defaultValue>Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Input>
              </FormGroup>
            </Col>
            <Col className="container-fluid" md={6}>
              <FormGroup className="container-fluid">
                <Label htmlfor="Occupation">Occupation</Label>
                <Input
                  required
                  type="select"
                  name="Occupation"
                  id="Occupation"
                  value={this.state.Occupation}
                  className="form-control"
                  onChange={this.handleInputChange}
                >
                  <option defaultValue>Select</option>
                  <option value="Plumber">Plumber</option>
                  <option value="Carpenter">Carpenter</option>
                  <option value="Electrician">Electrician</option>
                  <option value="AC Service/Repair">AC Service/Repair</option>
                  <option value="Barber">Barber</option>
                  <option value="Appliance Repair">Appliance Repair</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row className="container-fluid" form>
            <Col className="container-fluid" md={6}>
              <FormGroup className="container-fluid">
                <Label htmlFor="City">City</Label>
                <Input
                  type="text"
                  id="City"
                  name="City"
                  value={this.state.City}
                  onChange={this.handleInputChange}
                  valid={errors.City === ""}
                  invalid={errors.City !== ""}
                  onBlur={this.handleBlur("City")}
                />
                <FormFeedback>{errors.City}</FormFeedback>
              </FormGroup>
            </Col>

            <Col className="container-fluid" md={6}>
              <FormGroup className="container-fluid">
                <Label htmlFor="Email">Email</Label>
                <Input
                  type="text"
                  id="Email"
                  name="Email"
                  value={this.state.Email}
                  onChange={this.handleInputChange}
                  valid={errors.Email === ""}
                  invalid={errors.Email !== ""}
                  onBlur={this.handleBlur("Email")}
                />
                <FormFeedback>{errors.Email}</FormFeedback>
              </FormGroup>
            </Col>
          </Row>

          <Row className="container-fluid" form>
            <Col className="container-fluid" md={6}>
              <FormGroup className="container-fluid">
                <Label htmlfor="Description">Description</Label>
                <Input
                  required
                  type="textarea"
                  rows="3"
                  name="Description"
                  id="Description"
                  value={this.state.Description}
                  onChange={this.handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col className="container-fluid" md={6}>
              <FormGroup className="container-fluid">
                <Label htmlfor="Price">Average Price</Label>
                <Input
                  required
                  type="number"
                  name="Price"
                  id="Price"
                  placeholder="Average Price in Rupees"
                  value={this.state.Price}
                  onChange={this.handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Button
            type="submit"
            className="mb-2"
            style={{ backgroundColor: "#14274e", marginLeft: "30px" }}
          >
            Update
          </Button>
        </Form>
      </div>
    );
  }
}

export default ServiceProviderUpdateProfile;
