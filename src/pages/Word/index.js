import {Col, Divider, Grid, Row, Tabs} from "antd";

const items = ['常用', '人物', '角色', '五官', '表情', '头发', '装饰', '服装', '鞋饰', '尾&翅&角', '姿势', '动作', '环境', '风格']

const style = {
    background: '#0092ff',
    padding: '8px 0',
};

function WordContent({}) {
    return (
        <div>
            <Divider orientation="left">图像优化</Divider>
            <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
            </Row>
            <Divider orientation="left">镜头视角</Divider>
            <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
            </Row>
            <Divider orientation="left">其他常用</Divider>
            <Row gutter={[16, 24]}>
                <Col className="gutter-row" span={3}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={3}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={3}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={3}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={3}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={3}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={3}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={3}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={3}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={3}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={3}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={3}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={3}>
                    <div style={style}>col-6</div>
                </Col>
            </Row>
        </div>
    )
}

function Word() {
    return (
        <div>
            <Tabs
                defaultActiveKey="1"
                tabPosition={"top"}
                size={"large"}
                style={{
                    height: 220,
                }}
                items={items.map((item, i) => {
                    const id = String(i);
                    return {
                        label: `${item}`,
                        key: id,
                        disabled: i === 28,
                        children: (
                            <div>
                                <WordContent/>
                            </div>
                        ),
                    };
                })}
            />
        </div>
    )
}

export default Word