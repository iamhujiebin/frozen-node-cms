import "./index.css"
import AiTextArea from "@/pages/AiImage/AiTextArea";
import AiBigImage from "@/pages/AiImage/AiIBigmage";
import AiImageList from "@/pages/AiImage/AiImageList";
import {useEffect, useState} from "react";
import {http} from "@/utils";

const AiImage = () => {
    const [curIndex, setCurIndex] = useState(0)
    const [prompt, setPrompt] = useState('')
    const [placeholder, setPlaceholder] = useState('')
    const [image1, setImage1] = useState('')
    const [image2, setImage2] = useState('')
    const [imageList, setImageList] = useState([])
    useEffect(() => {
        fetchImageList()
    }, [])
    useEffect(() => {
        if (imageList.length > curIndex) {
            setImage1(imageList[curIndex].image1)
            setImage2(imageList[curIndex].image2)
            setPlaceholder(imageList[curIndex].prompt)
        }
    }, [curIndex])
    const fetchImageList = () => {
        http.get("ai/images").then(r => {
            if (r.data?.length > 0) {
                setImageList(r.data)
                setImage1(r.data[0].image1)
                setImage2(r.data[0].image2)
                setPlaceholder(r.data[0].prompt)
            }
        }).catch(e => {
            alert(e)
        })
    }
    const submit = () => {
        console.log('come submit')
        http.post("ai/images", {prompts: prompt}).then(r => {
            if (r.data) {
                setImage1(r.data.image1)
                setImage2(r.data.image2)
                setImageList(prevState => {
                    return [r.data, ...prevState]
                })
            }
        })
    }
    return (
        <div className={'container'}>
            <div style={{flexGrow: 1}}><AiTextArea prompt={prompt} setPrompts={setPrompt} placeholder={placeholder}
                                                   submit={submit}/>
            </div>
            <div style={{flexGrow: 1}}><AiBigImage image1={image1} image2={image2}/></div>
            <div style={{flexGrow: 1}}><AiImageList imageList={imageList} placeholder={placeholder} curIndex={curIndex}
                                                    setCurIndex={setCurIndex}/></div>
        </div>
    );
};

export default AiImage;
