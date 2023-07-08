const events = [
    {
        img: "https://image.whoisamy.shop/hilo/manager/74ee6581a7c14a0cb0c7ff973f9ee973.jpeg",
        url: "Item1111111111111111111111111111"
    },
    {
        img: "https://image.whoisamy.shop/hilo/manager/74ee6581a7c14a0cb0c7ff973f9ee973.jpeg",
        url: "Item1111111111111111111111111111"
    },
    {
        img: "https://image.whoisamy.shop/hilo/manager/74ee6581a7c14a0cb0c7ff973f9ee973.jpeg",
        url: "Item1111111111111111111111111111"
    },
]


const Event = ({}) => {
    return (
        <div style={{margin: 10}}>
            <p style={{fontWeight: 500}}>Event</p>
            <div>
                {events.map((item, index) => (
                    <img style={{borderRadius: 10, marginBottom: 5}} width={"100%"} height={140} src={item.img}/>
                ))}
            </div>
        </div>
    )
}

export default Event