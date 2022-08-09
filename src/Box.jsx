import React, { useState } from "react";
import data from "./data.json";
export default function Box({ }) {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <div>
            <div id="chatbox">

                <div id="friendslist">

                    <div id="search">
                        <input type="text" id="searchfield" onChange={(event) => {
                            setSearchTerm(event.target.value)
                        }} placeholder="Search Contacts" />
                    </div>
                    <div>
                        <div class="onlinefriendbox">
                        {data.map((val,key)=>{
                            return (
                                <span key={key}>
                                <img class="onlinefrienddimg"
                                    src={val.img} alt="" />
                                <p class="onlinename">{val.author.slice(0,5)}</p>
                            </span>
                            )
                        })}     
                        </div>
                        
                        <div class="chatbox">
                            <div id="friends">
                               
                                {data.filter((val)=>{
                                    if(searchTerm==""){
                                        return val
                                    }
                                    else if(val.author.toLocaleLowerCase().includes(searchTerm.toLowerCase())){
                                        return val
                                    }
                                }).map((val, key) => {
                                    return (
                                        <div class="friend" key={key} >
                                            <img src={val.img} />
                                            <p>
                                                <strong>{val.author}</strong>
                                                <div className="messages">hello friend</div>
                                            </p>
                                            <div class="status away"></div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
