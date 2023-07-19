import {Input} from "antd";

const {TextArea} = Input;

const AiTextArea = () => {
    return (
        <>
            <TextArea
                size={"middle"}
                showCount
                maxLength={1000}
                style={{
                    height: 320,
                }}
                placeholder={'promts'}
            />
        </>
    );
};

export default AiTextArea;
