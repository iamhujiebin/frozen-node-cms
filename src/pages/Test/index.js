import "./index.css"
import TIM from 'tim-js-sdk';
import {useEffect} from "react";
import genTestUserSig from "@/pages/Test/GenerateTestUserSig";
import {Button} from "antd";

const Test = () => {
    let tim = null
    const onSdkReady = (event) => {
        console.log("ready:", event)
    };
    const onMessageReceived = (event) => {
        console.log("msg:", event)
    };
    useEffect(() => {
        // let sig = genTestUserSig({
        //     SDKAPPID: 40000066,
        //     SECRETKEY: "",
        //     EXPIRETIME: 1789831707,
        //     userID: "27338733ef9347ff87d6a0c50cd5657e"
        // })
        // console.log(sig)
        tim = TIM.create({
            SDKAppID: 40000066 // Replace `0` with the `SDKAppID` of your IM app during access.
        });
        tim.on(TIM.EVENT.SDK_READY, onSdkReady);
        tim.on(TIM.EVENT.MESSAGE_RECEIVED, onMessageReceived);
        tim.login({
            userID: '27338733ef9347ff87d6a0c50cd5657e',
            userSig: "eJwtzU0LgkAQBuD-sueQ1f0WOvR1ECwDhbqauxtTmptKGNF-T9OBObwPzDsflMWp9zINClHgYbT4Z9Dm0YGFiQUhclhjFaHCWik0z3HBcKEZZ8LMN62*586BRiHF43A*eQeVQaHPpZKU8oBNanoHzehicOILLOYWuA4vIVbOJvpZlSDOOl9Ffb15b1MoD8nJ1f5xne327c0oe4mW6PsDFi44tQ__"
            // userSig: sig.userSig,
        }).then(r => {
            console.log("login:", r)
        })
    }, [])
    const sendMsg = () => {
        let message = tim.createTextMessage({
            to: 'da9e12a3b4de4aa9b7620e49ec5219bc',
            conversationType: TIM.TYPES.CONV_C2C,
            // 消息优先级，用于群聊（v2.4.2起支持）。如果某个群的消息超过了频率限制，后台会优先下发高优先级的消息，详细请参考：https://cloud.tencent.com/document/product/269/3663#.E6.B6.88.E6.81.AF.E4.BC.98.E5.85.88.E7.BA.A7.E4.B8.8E.E9.A2.91.E7.8E.87.E6.8E.A7.E5.88.B6)
            // 支持的枚举值：TIM.TYPES.MSG_PRIORITY_HIGH, TIM.TYPES.MSG_PRIORITY_NORMAL（默认）, TIM.TYPES.MSG_PRIORITY_LOW, TIM.TYPES.MSG_PRIORITY_LOWEST
            // priority: TIM.TYPES.MSG_PRIORITY_NORMAL,
            payload: {
                text: 'bye bye!'
            },
            // v2.20.0起支持C2C消息已读回执功能，如果您发消息需要已读回执，需购买旗舰版套餐，并且创建消息时将 needReadReceipt 设置为 true
            needReadReceipt: true
            // 消息自定义数据（云端保存，会发送到对端，程序卸载重装后还能拉取到，v2.10.2起支持）
            // cloudCustomData: 'your cloud custom data'
        });
// 2. 发送消息
        let promise = tim.sendMessage(message);
        promise.then(function (imResponse) {
            // 发送成功
            console.log(imResponse);
        }).catch(function (imError) {
            // 发送失败
            console.warn('sendMessage error:', imError);
        });
    }
    const contantList = () => {
        let promise = tim.getConversationList();
        promise.then(function (imResponse) {
            const conversationList = imResponse.data.conversationList; // 全量的会话列表，用该列表覆盖原有的会话列表
            const isSyncCompleted = imResponse.data.isSyncCompleted; // 从云端同步会话列表是否完成
            console.log("imResponse:", imResponse)
            console.log("conversationList:", conversationList)
            console.log("isSyncCompleted:", isSyncCompleted)
        }).catch(function (imError) {
            console.warn('getConversationList error:', imError); // 获取会话列表失败的相关信息
        });
    }
    const userList = () => {
        let promise = tim.getUserProfile({
            userIDList: ['da9e12a3b4de4aa9b7620e49ec5219bc'] // 请注意：即使只拉取一个用户的资料，也需要用数组类型，例如：userIDList: ['user1']
        });
        promise.then(function (imResponse) {
            console.log(imResponse.data); // 存储用户资料的数组 - [Profile]
        }).catch(function (imError) {
            console.warn('getUserProfile error:', imError); // 获取其他用户资料失败的相关信息
        });

    }
    const contactDetail = () => {
        let promise = tim.getConversationProfile("C2Cda9e12a3b4de4aa9b7620e49ec5219bc");
        promise.then(function (imResponse) {
            // 获取成功
            console.log(imResponse.data.conversation); // 会话资料
        }).catch(function (imError) {
            console.warn('getConversationProfile error:', imError); // 获取会话资料失败的相关信息
        });
    }
    const joinGroup = () => {
        let promise = tim.joinGroup({groupID: 'HTGS#a93989299'});
        promise.then(function (imResponse) {
            switch (imResponse.data.status) {
                case TIM.TYPES.JOIN_STATUS_WAIT_APPROVAL: // 等待管理员同意
                    break;
                case TIM.TYPES.JOIN_STATUS_SUCCESS: // 加群成功
                    console.log(imResponse.data.group); // 加入的群组资料
                    break;
                case TIM.TYPES.JOIN_STATUS_ALREADY_IN_GROUP: // 已经在群中
                    break;
                default:
                    break;
            }
        }).catch(function (imError) {
            console.warn('joinGroup error:', imError); // 申请加群失败的相关信息
        });
    }

    return (
        <>
            <p>测试hilo websocket</p>
            <Button onClick={sendMsg}>发送消息</Button>
            <Button onClick={contantList}>拉取会话列表</Button>
            <Button onClick={userList}>获取用户资料</Button>
            <Button onClick={contactDetail}>获取会话资料</Button>
            <Button onClick={joinGroup}>加入群组</Button>
        </>
    );
};

export default Test;
