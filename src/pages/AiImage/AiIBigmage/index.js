import {Image} from 'antd'

const AiBigImage = () => {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div style={{marginRight: 10}}>
                <Image
                    width={400}
                    src="http://47.244.34.27:7002/uploads/file/a9f7e97965d6cf799a529102a973b8b9_20230719184701.png"
                />
            </div>
            <Image
                width={400}
                src="http://47.244.34.27:7002/uploads/file/9ab62b5ef34a985438bfdf7ee0102229_20230719184704.png"
            />
        </div>
    );
};

export default AiBigImage
