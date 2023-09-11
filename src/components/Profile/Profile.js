import { Component } from 'react'
import { FaAngleRight, FaUserLarge } from "react-icons/fa6";
import  './profile.css'

export default class Profile extends Component{

    render(){
        return <div className='profile-wrapper'>
            <div className='profile-img'><span className='profile-icon'><FaUserLarge/></span></div>
            <div className='info'>
                <h1>Let's get you set up</h1>
                <p>It should only take a couple of minutes to pair with your watch</p>
            </div>
            <button className='arrow-icon'><FaAngleRight/></button>
        </div>
    }
}