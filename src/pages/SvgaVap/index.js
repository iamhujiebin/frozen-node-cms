import {useRef, useState} from "react";
import Vap from 'video-animation-player'
import SVGA from 'svgaplayerweb'
import {Col, Input, message, Row, Select} from "antd";
import MP4Box from "mp4box"
import man from "@/assets/man.png"

const {Search} = Input;

function readVapc(data) {
    let offset = 0;
    while (offset < data.byteLength) {
        const boxSize = data.getUint32(offset);
        const boxType = String.fromCharCode(
            data.getUint8(offset + 4),
            data.getUint8(offset + 5),
            data.getUint8(offset + 6),
            data.getUint8(offset + 7)
        );
        if (boxType === 'vapc') {
            const boxData = new Uint8Array(data.buffer, offset + 8, boxSize - 8);
            // 将Uint8Array转换为字符串
            const str = String.fromCharCode.apply(null, boxData);

            // 将字符串转换为JSON对象
            const json = JSON.parse(str);
            return json
        }

        offset += boxSize;
    }
}

function SvgaVap() {
    let svgaPlayer = useRef(null)
    let svgaParser = useRef(null)
    let vapPlayer = useRef(null)
    let vap = null
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
            // 先清理之前播放的
            const divElement = vapPlayer.current;
            while (divElement.firstChild) {
                divElement.removeChild(divElement.firstChild);
            }
            vap = null
            let config = {}
            // 获取mp4文件内容并解析
            fetch(url)
                .then(response => response.arrayBuffer())
                .then(buffer => {
                    const data = new DataView(buffer);
                    config = readVapc(data)
                    let source2 = {}
                    if (config?.src?.length > 0) {
                        config.src.map(item => {
                            if (item.srcType === "img") {
                                source2[item.srcTag] = man
                            }
                            if (item.srcType === "txt") {
                                source2[item.srcTag] = "jiebin"
                            }
                        })
                    }
                    console.log("source2:", source2)
                    vap = new Vap().play(Object.assign({}, {
                        container: vapPlayer.current,
                        src: url,
                        config: config,
                        loop: true,
                        beginPoint: 0,
                        accurate: true,
                        width: config?.info?.w ? config.info.w : 100,
                        height: config?.info?.h ? config.info.h : 100,
                        onLoadError: vapLoadError,
                    }, source2)).on('ended', () => {
                        console.log('play ended')
                    })
                    setLoading(false)
                })
                .catch(error => {
                    console.error('Error:', error);
                });

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