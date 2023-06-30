import {useRef, useState} from "react";
import Vap from 'video-animation-player'
import SVGA from 'svgaplayerweb'
import {Col, Input, Row, Select, Tooltip} from "antd";
import {InfoCircleOutlined, UserOutlined} from '@ant-design/icons';

const {Search} = Input;

function SvgaVap() {
    let svgaPlayer = useRef(null)
    let svgaParser = useRef(null)
    let vapPlayer = useRef(null)
    const [svgaVap, setSvgaVap] = useState("svga")
    const [config, setConfig] = useState("")
    const handleChange = (value) => {
        setSvgaVap(value)
    }
    const onSearch = (url) => {
        if (svgaVap === 'svga') {
            svgaParser.current = new SVGA.Parser()
            svgaPlayer.current = new SVGA.Player('#demoCanvas')
            // svgaParser.current.load("https://oss.iludo.live/nextvideo/gifts/4cf8b7cec0df4fb3a80d05aa2281049a.svga", function (videoItem) {
            svgaParser.current.load(url, function (videoItem) {
                svgaPlayer?.current?.setVideoItem(videoItem)
                svgaPlayer?.current?.startAnimation()
            })
        }
        if (svgaVap === 'vap') {
            new Vap().play(Object.assign({}, {
                container: vapPlayer.current,
                src: url,
                config: config,
                loop: true,
                beginPoint: 0,
                accurate: true
            }, {}))
        }
    }
    return (
        <div>
            <Row justify='center' type='flex'>
                <Col>
                    <Select
                        defaultValue={svgaVap}
                        style={{
                            width: 1000
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
            <Row justify='center' type='flex' className='text-center'
                 style={svgaVap === 'vap' ? {} : {display: "none"}}>
                <Col>
                    <Input
                        style={{
                            width: 1000
                        }}
                        placeholder="config url"
                        prefix={<UserOutlined className="site-form-item-icon"/>}
                        suffix={
                            <Tooltip title="vap config url">
                                <InfoCircleOutlined
                                    style={{
                                        color: 'rgba(0,0,0,.45)',
                                    }}
                                />
                            </Tooltip>
                        }
                        onChange={(e) => setConfig(e.target.value)}
                    />
                </Col>
            </Row>
            <Row justify='center' type='flex' className='text-center'>
                <Col>
                    <Search
                        style={{
                            width: 1000
                        }}
                        placeholder="input svga or vap link"
                        allowClear
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