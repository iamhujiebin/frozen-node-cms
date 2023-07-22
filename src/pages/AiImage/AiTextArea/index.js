import {Button, Input} from "antd";

const {TextArea} = Input;

const AiTextArea = ({prompt, setPrompt, placeholder, submit}) => {
    return (
        <>
            <TextArea
                size={"middle"}
                showCount
                maxLength={1000}
                style={{
                    height: 320,
                }}
                placeholder={placeholder}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
            />
            <Button type={"primary"} onClick={submit}>生成图片</Button>
        </>
    );
};

export default AiTextArea;
