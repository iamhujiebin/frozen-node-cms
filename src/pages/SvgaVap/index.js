import {useRef, useState} from "react";
import Vap from 'video-animation-player'
import SVGA from 'svgaplayerweb'
import {Col, Input, message, Row, Select} from "antd";
import MP4Box from "mp4box"
import {httpRaw} from "@/utils";

const {Search} = Input;

function SvgaVap() {
    let svgaPlayer = useRef(null)
    let svgaParser = useRef(null)
    let vapPlayer = useRef(null)
    const inputFile = useRef(null)
    const [svgaVap, setSvgaVap] = useState("svga")
    const [loading, setLoading] = useState(false)
    const handleChange = (value) => {
        setSvgaVap(value)
    }
    const vapLoadError = (e) => {
        alert("vapLoadError:" + e)
        setLoading(false)
    }
    const onSearch = (url) => {
        setLoading(true)
        if (svgaVap === 'svga') {
            svgaParser.current = new SVGA.Parser()
            svgaPlayer.current = new SVGA.Player('#demoCanvas')
            // svgaParser.current.load("https://oss.iludo.live/nextvideo/gifts/4cf8b7cec0df4fb3a80d05aa2281049a.svga", function (videoItem) {
            svgaParser.current.load(url, function (videoItem) {
                svgaPlayer?.current?.setVideoItem(videoItem)
                svgaPlayer?.current?.startAnimation()
                setLoading(false)
            }, function (e) {
                message.error("svga err:" + e)
                setLoading(false)
            })
        }
        if (svgaVap === 'vap') {
            let config2 = {}
            httpRaw.post("/vap/vapc", {"mp4": url}).then(config => {
                let vap = new Vap().play(Object.assign({}, {
                    container: vapPlayer.current,
                    src: url,
                    config: config,
                    loop: false,
                    beginPoint: 0,
                    accurate: true,
                    onLoadError: vapLoadError,
                }, {})).on('ended', () => {
                    // 结束后清理
                    vap = null
                    const divElement = vapPlayer.current;
                    while (divElement.firstChild) {
                        divElement.removeChild(divElement.firstChild);
                    }
                    console.log('play ended')
                })
                setLoading(false)
            }).catch(e => {
                message.error("vap err:" + e)
                setLoading(false)
            })
        }
    }
    const onFile = (e) => {
        const file = e.target.files[0];
        const fileReader = new FileReader();

        fileReader.onload = function () {
            const arrayBuffer = fileReader.result;
            arrayBuffer.fileStart = 0

            let mp4box = MP4Box.createFile()
            mp4box.onError = function (e) {
                console.log("err:", e)
            };
            mp4box.onReady = function (info) {
                console.log("info:", info)
            };
            mp4box.onMoovStart = function () {
                console.log("Starting to receive File Information");
            }
            mp4box.appendBuffer(arrayBuffer)
            mp4box.flush()
        };

        fileReader.readAsArrayBuffer(file);
    }
    return (
        <div>
            <input onChange={onFile} ref={inputFile} type="file"/>
            <p>console查看文件信息</p>
            <Row justify='center' type='flex'>
                <Col>
                    <Select
                        defaultValue={svgaVap}
                        style={{
                            minWidth: 100
                        }}
                        onChange={handleChange}
                        options={[
                            {
                                value: 'svga',
                                label: 'svga',
                            },
                            {
                                value: 'vap',
                                label: 'vap',
                            },
                        ]}
                    />
                </Col>
            </Row>
            <Row justify='center' type='flex' className='text-center'>
                <Col>
                    <Search
                        style={{
                            minWidth: 500
                        }}
                        placeholder="input svga or vap link"
                        loading={loading}
                        enterButton="Play"
                        size="large"
                        onSearch={onSearch}
                    />
                </Col>
            </Row>
            {svgaVap === 'svga' && (
                <Row justify={"center"}>
                    <Col>
                        <div id='demoCanvas' style={{width: 500, height: 500}}></div>
                    </Col>
                </Row>
            )}
            {svgaVap === 'vap' && (
                <Row justify={"center"}>
                    <Col>
                        <div ref={vapPlayer}/>
                    </Col>
                </Row>
            )}

        </div>
    )
}

export default SvgaVap