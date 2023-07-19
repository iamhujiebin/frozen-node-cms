import "./index.css"
import {Divider} from "antd";

const ABlock = () => {
    return (
        <div className={'ai-image-list'}>
            <img src="http://47.244.34.27:7002/uploads/file/a9f7e97965d6cf799a529102a973b8b9_20230719184701.png"
                 alt={''}/>
            <img src="http://47.244.34.27:7002/uploads/file/9ab62b5ef34a985438bfdf7ee0102229_20230719184704.png"
                 alt={''}/>
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
