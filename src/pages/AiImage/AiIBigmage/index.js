import {Image} from 'antd'

const AiBigImage = ({image1, image2}) => {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div style={{marginRight: 10}}>
                <Image
                    width={360}
                    src={image1}
                />
            </div>
            <Image
                width={360}
                src={image2}
            />
        </div>
    );
};

export default AiBigImage
