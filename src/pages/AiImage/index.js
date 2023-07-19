import "./index.css"
import AiTextArea from "@/pages/AiImage/AiTextArea";
import AiBigImage from "@/pages/AiImage/AiIBigmage";
import AiImageList from "@/pages/AiImage/AiImageList";

const AiImage = () => {
    return (
        <div className={'container'}>
            <div style={{flexGrow: 1}}><AiTextArea/></div>
            <div style={{flexGrow: 1}}><AiBigImage/></div>
            <div style={{flexGrow: 1}}><AiImageList/></div>
        </div>
    );
};

export default AiImage;
