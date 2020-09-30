import React from 'react';
import './Card.css'

function Card(props) {
    return (
        <div className="outer-div">
            <div className="inner-div">
                <div className="user-div">
                <div className="img-div">
                    <img src={props.user.data.avatar_url} alt=""/>
                </div>
                <div className="acc-div">
                   <div className="username">
                        <p>UserName :</p>
                        <p>
                            {props.user.data.login}
                        </p>
                   </div>
                    <div className="name">
                        <p>Name :</p>
                        {props.user.data.name !== null?(
                            <p>
                                {props.user.data.name}
                            </p>
                        ):(
                            <p>N/A</p>
                        )}
                    </div>
                    <div className="link">
                    <p>Profile-Url :</p>
                        <a href={props.user.data.html_url} className="acc-link" target='blank'>{props.user.data.login}</a>
                    </div>
                </div>
                </div>
                <div className="outer-details-div">
                <div className="details-div1">
                   <div className="joined">
                       <p>Joined :</p>
                        <p>{props.user.data.created_at.slice(0,10)}</p>
                   </div>
                   <div className="public_repos">
                       <p>Public Repos :</p>
                        <p>{props.user.data.public_repos}</p>
                   </div>
                   <div className="public_gits">
                       <p>Public Gists :</p>
                        <p>{props.user.data.public_gists}</p>
                   </div>
                </div>
                <div className="details-div2">
                   <div className="followers">
                       <p>Followers :</p>
                   <p>{props.user.data.followers}</p>
                   </div>
                    <div className="following">
                        <p>Following :</p>
                    <p>{props.user.data.following}</p>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Card;
