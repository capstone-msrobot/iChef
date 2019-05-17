import React from 'react';
import Navigation from "./Navigation"
import Footer from "./Footer"
import "./Profile.css"
import user from "./img/user.jpg";
import recipesIconSelected from "./img/recipesIcon-selected.png";
// import recipesIconNotSelected from "./img/ingredientIcon-notSelected.png";
// import equipmentIconSelected from "./img/equipmentIcon-selected.png";
import equipmentIconNotSelected from "./img/equipmentIcon-notSelected.png";
import settingsIcon from "./img/settingsIcon.png";
import logoutIcon from "./img/logoutIcon.png";


// https://bootsnipp.com/snippets/M48pA
export default class Profile extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                    <div class="container">
                        <div class="row profile">
                            <div class="col-md-3">
                                <div class="profile-sidebar">
                                    <div class="profile-userpic">
                                        <img src={user} alt="users profile picture" />
                                    </div>
                                    <div class="profile-usertitle">
                                        <div class="profile-usertitle-name">
                                            Soobinsoo
                                        </div>
                                    
                                    </div>
                                    <div class="profile-usermenu">
                                        <ul class="nav">
                                            <li class="active">
                                                {/* <a href="#"> */}
                                                 {/* check state and change image depending on if user is on recipes */}
                                                <img src={recipesIconSelected} alt="recipes" />
                                                Recipes
                                            </li>
                                            <li>
                                                {/* <a href="#"> */}
                                                 {/* check state and change image depending on if user is on recipes */}
                                                <img src={equipmentIconNotSelected} alt="equipment" />
                                                Equipment
                                            </li>
                                            <li>
                                                {/* <a href="#" target="_blank"> */}
                                                <img src={settingsIcon} alt="settings" />
                                                Settings 
                                            </li>
                                            <li>
                                                {/* <a href="#"> */}
                                                <img src={logoutIcon} alt="sign out" />
                                                Sign Out
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="profile-info">
                        <div id="show-content">
                            <div id="page-label">
                                Recipes??
                                <img src={recipesIconSelected} alt="recipes" />
                            </div>
                        </div>
                        
                    </div>
                <Footer />
            </div>
        )}
}