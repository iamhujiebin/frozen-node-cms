import {Button, Input, Space} from "antd";

const {TextArea} = Input;

const AiTextArea = ({prompt, setPrompt, placeholder, submit}) => {
    return (
        <>
            <Space direction={"vertical"}>
                <TextArea
                    size={"middle"}
                    showCount
                    maxLength={1000}
                    style={{
                        height: 320,
                        width: 280,
                    }}
                    placeholder={placeholder}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />
                <Button type={"primary"} onClick={submit}>生成图片</Button>
            </Space>
        </>
    );
};

export default AiTextArea;
