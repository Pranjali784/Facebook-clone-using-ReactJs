import React from "react";
import './HeaderArea.css'
import {AiOutlineSearch, AiFillHome, AiOutlineWallet} from 'react-icons/ai'
import {MdOndemandVideo} from 'react-icons/md'
import {FaRegFlag, FaUsers, FaPlusCircle, FaFacebookMessenger, FaBell} from 'react-icons/fa'
import MainArea from "../MainArea/MainArea";
function HeaderArea(){
    return(
        <div className="HomePage">
            <div className="header">

            <div className="first-header">
                <div className="logo">
                    <img src="/images/logo.png" alt="logo" style={{height:"50px" ,padding:"1rem"}}/>
                </div>
                <div className="Search">
                    <AiOutlineSearch style={{height:"4rem"}}/>
                    <input placeholder="Search Facebook" type="Search"/>
                </div>
            </div>
            <div className="middle-header">
                <div className="Icon">
                    <AiFillHome fontSize="2.3rem" color="#1877F2"/>
                </div>
                <div className="Icon">
                    <FaRegFlag fontSize="2.3rem" />
                </div>
                <div className="Icon">
                    <MdOndemandVideo fontSize="2.3rem" />
                </div>
                <div className="Icon">
                    <FaUsers fontSize="2.3rem" />
                </div>
                <div className="Icon">
                    <AiOutlineWallet fontSize="2.3rem" />
                </div>
            </div>
            <div className="third-header">
                
                <div className="plus">
                    <FaPlusCircle fontSize ="2rem"/>
                </div>
                <div className="plus">
                    <FaFacebookMessenger fontSize ="2rem"/>
                </div>
                <div className="plus">
                    <FaBell fontSize ="2rem"/>
                </div>
                <div className="Pluss">
                    <img src="/images/1.jpeg" alt="dp" style={{height:"40px"}}/>
                </div>
            </div>
            </div>
            <MainArea/>
        </div>
    )
}
export default HeaderArea