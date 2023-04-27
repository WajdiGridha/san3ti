import React,{Component} from 'react';
import {Jumbotron} from 'reactstrap';
import Header from './Header'

import NavB from './NavB';
import {Link} from 'react-router-dom';
class Home extends Component{
    
    render(){
        return(
            <>
            
        <Header/>

        <Jumbotron  className="container-fluid " style={{backgroundColor:"white"}}>
            <div className="row">
                <div className="col-12">
                    <h4 className="d-flex justify-content-center"> Services We Provide </h4>
                    <hr className="hr_reduced"/>
                </div>
            </div>
            <br></br>

<br></br>
            <div className="row ">

                <div className="col-md-4 mt-3 itemH ">
                    <Link to="/PlumberView" className="card-link">
                    <div className="card head" style={{backgroundImage:`url(./images/Plumber.png)`,boxShadow:"0px 5px 25px rgba(0, 0, 0, 0.5)"}}>
                        <div className="card-body">
                            <br></br>
                            <h5 className="card-title mb-5 " >Plumber</h5>
                            
                        </div>
                    </div>
                    </ Link>
                </div>
                <div className="col-md-4 mt-3 itemH">
                    <Link to="/CarpenterView" className="card-link">
                    <div className="card head" style={{backgroundImage:`url(./images/Carpenter.png)`,boxShadow:"0px 5px 25px rgba(0, 0, 0, 0.5)"}}>
                        <div className="card-body">
                            <br></br>
                            <h5 className="card-title mb-5 " >Carpenter</h5>
                            
                        </div>
                    </div>
                    </ Link>
                </div>

                <div className="col-md-4 mt-3 itemH">
                    <Link to="/ElectricianView" className="card-link">
                    <div className="card head" style={{backgroundImage:`url(./images/Elec.png)`,boxShadow:"0px 5px 25px rgba(0, 0, 0, 0.5)"}}>
                        <div className="card-body">
                            <br></br>
                            <h5 className="card-title mb-5 " >Electrician</h5>
                            
                        </div>
                    </div>
                    </ Link>
                </div>

            </div>
            <br></br>

            <br></br>
            <div className="row ">
            <div className="col-md-4 mt-3 itemH">
                    <Link to="/ACView" className="card-link">
                    <div className="card head" style={{backgroundImage:`url(./images/AC.png)`,boxShadow:"0px 5px 25px rgba(0, 0, 0, 0.5)"}}>
                        <div className="card-body">
                            <br></br>
                            <h5 className="card-title mb-5 " >AC Service/Repair</h5>
                            
                        </div>
                    </div>
                    </ Link>
                </div>

                <div className="col-md-4 mt-3 itemH">
                    <Link to="/BarberView" className="card-link">
                    <div className="card head" style={{backgroundImage:`url(./images/barber.png)`,boxShadow:"0px 5px 25px rgba(0, 0, 0, 0.5)"}}>
                        <div className="card-body">
                            <br></br>
                            <h5 className="card-title mb-5 " >Barber</h5>
                            
                        </div>
                    </div>
                    </ Link>
                </div>

                <div className="col-md-4 mt-3 itemH">
                    <Link to="/ApplianceView" className="card-link">
                    <div className="card head" style={{backgroundImage:`url(./images/Repair.png)`,boxShadow:"0px 5px 25px rgba(0, 0, 0, 0.5)"}}>
                        <div className="card-body">
                            <br></br>
                            <h5 className="card-title mb-5 " >Appliance Repair</h5>
                            
                        </div>
                    </div>
                    </ Link>
                </div>

                

            </div>

            
        </Jumbotron>
        </>
        );
    }
}

export default Home
