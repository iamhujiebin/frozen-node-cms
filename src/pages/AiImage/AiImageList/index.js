import "./index.css"
import {Divider, Space} from "antd";
import {CheckCircleTwoTone, HeartTwoTone} from '@ant-design/icons';

const ABlock = () => {
    return (
        <div className={'ai-image-list'}>
            <img src="http://47.244.34.27:7002/uploads/file/a9f7e97965d6cf799a529102a973b8b9_20230719184701.png"
                 alt={''}/>
            <img src="http://47.244.34.27:7002/uploads/file/9ab62b5ef34a985438bfdf7ee0102229_20230719184704.png"
                 alt={''}/>
            <Space direction="vertical">
                <HeartTwoTone twoToneColor="#eb2f96"/>
                <CheckCircleTwoTone twoToneColor="#52c41a"/>
            </Space>
            <Divider/>
        </div>
    )
}

const items = [1, 2]
const AiImageList = () => {
    return (
        <div>
            {items.map(item => (
                <ABlock/>
            ))}
        </div>
    );
};

export default AiImageList
