import {useEffect, useState} from "react";
import {httpHilo} from "@/utils";


const Event = ({events}) => {
    return (
        <div style={{margin: 10}}>
            <p style={{fontWeight: 500}}>Event</p>
            <div>
                {events.map((item, index) => (
                    <img key={index} style={{borderRadius: 10, marginBottom: 5}} width={"100%"} height={140}
                         src={item.bannerUrl}/>
                ))}
            </div>
        </div>
    )
}

export default Event