import {useEffect, useRef} from "react";
import Vap from 'video-animation-player'
import SVGA from 'svgaplayerweb'
import config from './demo.json'
import demo from './demo.mp4'
import config2 from './vapc.json'
import demo2 from './video.mp4'
import man from "@/assets/man.png"
import woman from "@/assets/woman.png"
import car from "./car.svga"
import cp from "./cp.svga"


function Test() {
    let vapPlayer = useRef(null)
    let vapPlayer2 = useRef(null)
    let svgaPlayer = useRef(null)
    let svgaParser = useRef(null)
    let svgaPlayer2 = useRef(null)
    let svgaParser2 = useRef(null)

    useEffect(() => {
        vapPlayer.current = new Vap().play(Object.assign({}, {
            container: vapPlayer.current,
            // 素材视频链接
            src: demo,
            // 素材配置json对象
            config: config,
            // width: 900,
            // height: 400,
            // 同素材生成工具中配置的保持一致
            // fps: 20,
            // 是否循环
            loop: true,
            // 起始播放时间点
            beginPoint: 0,
            // 精准模式
            accurate: true
            // 播放起始时间点(秒)
        }, {
            // 融合信息（图片/文字）,同素材生成工具生成的配置文件中的srcTag所对应，比如[imgUser] => imgUser
            imgUser: man,
            imgAnchor: woman,
            textUser: 'jiebin',
            textAnchor: 'mengyin',
            type: 2
        }))
        vapPlayer2.current = new Vap().play(Object.assign({}, {
            container: vapPlayer2.current,
            // 素材视频链接
            src: demo2,
            // 素材配置json对象
            config: config2,
            // width: 900,
            // height: 400,
            // 同素材生成工具中配置的保持一致
            // fps: 20,
            // 是否循环
            loop: true,
            // 起始播放时间点
            beginPoint: 0,
            // 精准模式
            accurate: true
            // 播放起始时间点(秒)
        }, {
            // 融合信息（图片/文字）,同素材生成工具生成的配置文件中的srcTag所对应，比如[imgUser] => imgUser
            name: "皇马人",
        }))
    }, [])
    useEffect(() => {
        svgaParser.current = new SVGA.Parser()
        svgaPlayer.current = new SVGA.Player('#demoCanvas')
        // svgaParser.current.load("https://oss.iludo.live/nextvideo/gifts/4cf8b7cec0df4fb3a80d05aa2281049a.svga", function (videoItem) {
        svgaParser.current.load(car, function (videoItem) {
            svgaPlayer.current.setVideoItem(videoItem)
            svgaPlayer.current.startAnimation()
        })
    }, [])
    useEffect(() => {
        svgaParser2.current = new SVGA.Parser()
        svgaPlayer2.current = new SVGA.Player('#demoCanvas2')
        svgaParser2.current.load(cp, function (videoItem) {
            svgaPlayer2.current.setVideoItem(videoItem)
            svgaPlayer2.current.startAnimation()
            svgaPlayer2.current.setImage(man, 'sender_avatar');
        })
    }, [])
    return (
        <>
            <div id='demoCanvas2' style={{width: 100, height: 100}}></div>
            <div id='demoCanvas' style={{width: 100, height: 100}}></div>
            <div ref={vapPlayer}/>
            <div ref={vapPlayer2}/>
        </>
    )
}

export default Test