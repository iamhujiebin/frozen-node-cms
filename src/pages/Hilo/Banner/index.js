import {Swiper} from "antd-mobile";

const Banner = ({banners}) => {
    return (
        <>
            <div title='自动播放' style={{height: 150, background: "grey", borderRadius: 10}}>
                {banners.length > 0 && (<Swiper loop autoplay>
                    {banners.map((item, index) => (<Swiper.Item key={index}>
                        <img style={{"width": "100%", height: 150, borderRadius: 10}} src={item.bannerUrl}
                             onClick={() => window.open(item.actionUrl)}/>
                    </Swiper.Item>))}
                </Swiper>)}
            </div>
        </>
    )
}

export default Banner