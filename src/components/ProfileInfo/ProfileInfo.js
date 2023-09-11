import { Component } from "react";
import { FaMars, FaMarsStrokeUp } from "react-icons/fa6";
import './profile-info.css'

export default class ProfileInfo extends Component{

    render(){
        return <div className="wrapper">
            <div className="name-div">
                <span className="name">Name</span>
                <input type="text" placeholder="Name..."/>
            </div>
            <div className="gender-div">
                <span className="gender">Gender</span>
                <div className="genders">
                    <span className="icon-male"><FaMars/></span>
                    <span className="text-male">Male</span>
                    <span className="icon-female"><FaMarsStrokeUp/></span>
                    <span className="text-female">Female</span>
                </div>
            </div>
        </div>
    }
}