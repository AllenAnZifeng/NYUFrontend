import style from './Game.module.scss'
import {getTokenFromCookie, getUserNameFromCookie, URL} from "../../utility";
import user_avatar from './avatar/User.png'
import supervisor_avatar from './avatar/Supervisor.png'
import client1_avatar from './avatar/Client 1.png'
import client2_avatar from './avatar/Client 2.png'
import client3_avatar from './avatar/Client 3.png'
import client4_avatar from './avatar/Client 4.png'
import client5_avatar from './avatar/Client 5.png'
import client6_avatar from './avatar/Client 6.png'
import client7_avatar from './avatar/Client 7.png'
import client8_avatar from './avatar/Client 8.png'
import client9_avatar from './avatar/Client 9.png'
import client10_avatar from './avatar/Client 10.png'
import client11_avatar from './avatar/Client 11.png'
import client12_avatar from './avatar/Client 12.png'
import client13_avatar from './avatar/Client 13.png'
import client14_avatar from './avatar/Client 14.png'
import {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Draggable from 'react-draggable';
import ModalDialog from 'react-bootstrap/ModalDialog';
import React from "react";
import {ChatBox} from "./ChatBox";
import {TimeOutAlert} from "../TimeOutAlert/TimeOutAlert";

class DraggableModalDialog extends React.Component {
    render() {
        return <Draggable handle=".modal-title"><ModalDialog {...this.props} />
        </Draggable>
    }
}

export interface textResponse {
    speaker: string;
    text: string;
}

export interface questionResponse extends textResponse {
    choices: string;
}

export type choicePayload = {
    choice: string
}

export function Game() {


    const [chat, setChat] = useState<any>([])
    const [score, setScore] = useState(0);
    const [displayID, setDisplayID] = useState(0);
    const [realID, setRealID] = useState(0);
    const [showArr, setShowArr] = useState<boolean[]>([]);
    const visitorCount = 14;

    const clientColorHighlight = () => {
        for (let i = 0; i < visitorCount; i++) {
            const visitorElement = document.querySelector('#client' + (i + 1)) as HTMLElement;
            visitorElement!.style.color = "";
        }
        const visitorElement = document.querySelector('#client' + (displayID + 1)) as HTMLElement;
        visitorElement!.style.color = "#ff8300";
    }
    const elicitResponse = async (payload: choicePayload = {"choice": ""}) => {

        console.log(payload)
        const res = await fetch(URL + "api/game/", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + getTokenFromCookie()
            },
            body: JSON.stringify(payload),
        })
        const response = await res.json()

        console.log(response)
        const msgs = response.responses
        const score = response.score
        const newDisplayID = response.scenario_display_id
        const realID = response.scenario_true_id

        const newshowArr = new Array<boolean>(msgs.length).fill(false)
        newshowArr[0] = true

        // if (newDisplayID!==displayID){
        //     const falseShowArr = new Array<boolean>(showArr.length).fill(false)
        //     setShowArr(showArr)
        //
        // }

        setScore(score)
        setDisplayID(newDisplayID)
        setRealID(realID)
        setShowArr((oldArr) => [...oldArr, ...newshowArr])
        setChat((chat: any) => [...chat, ...msgs])




    }

    useEffect(() => {

        const response = async () => {
            await elicitResponse()
        }

        response().catch((e) => {
            console.log(e)
        })

    }, [])

    useEffect(()=>{
        clientColorHighlight()
        const element = document.querySelector('#chat_content');
        element!.scrollTop = element!.scrollHeight;
        console.log('rerender')

    })




    return <>
        <div className={style.container}>
            <div className={style.leftPanel}>
                <div className={style.userInfo}>

                    <div className={style.avatar}><img className={style.avatar} src={user_avatar} alt={"????????????"}/>
                    </div>
                    <div className={style.username}>{getUserNameFromCookie()}</div>
                </div>
                <div className={style.score}>?????????{score}</div>
                <div className={style.clientsHeader}>???????????????</div>

                <div className={style.clients}>
                    <div className={style.clientInfo}>
                        <div><img className={style.avatar} src={client1_avatar} alt={"?????????1??????"}/></div>
                        <div id={'client1'} className={style.clientName}>???1????????????</div>
                    </div>
                    <div className={style.clientInfo}>
                        <div><img className={style.avatar} src={client2_avatar} alt={"?????????2??????"}/></div>
                        <div id={'client2'} className={style.clientName}>???2????????????</div>
                    </div>
                    <div className={style.clientInfo}>
                        <div><img className={style.avatar} src={client3_avatar} alt={"?????????3??????"}/></div>
                        <div id={'client3'} className={style.clientName}>???3????????????</div>
                    </div>
                    <div className={style.clientInfo}>
                        <div><img className={style.avatar} src={client4_avatar} alt={"?????????4??????"}/></div>
                        <div id={'client4'} className={style.clientName}>???4????????????</div>
                    </div>
                    <div className={style.clientInfo}>
                        <div><img className={style.avatar} src={client5_avatar} alt={"?????????5??????"}/></div>
                        <div id={'client5'} className={style.clientName}>???5????????????</div>
                    </div>
                    <div className={style.clientInfo}>
                        <div><img className={style.avatar} src={client6_avatar} alt={"?????????6??????"}/></div>
                        <div id={'client6'} className={style.clientName}>???6????????????</div>
                    </div>
                    <div className={style.clientInfo}>
                        <div><img className={style.avatar} src={client7_avatar} alt={"?????????7??????"}/></div>
                        <div id={'client7'} className={style.clientName}>???7????????????</div>
                    </div>
                    <div className={style.clientInfo}>
                        <div><img className={style.avatar} src={client8_avatar} alt={"?????????8??????"}/></div>
                        <div id={'client8'} className={style.clientName}>???8????????????</div>
                    </div>
                    <div className={style.clientInfo}>
                        <div><img className={style.avatar} src={client9_avatar} alt={"?????????9??????"}/></div>
                        <div id={'client9'} className={style.clientName}>???9????????????</div>
                    </div>
                    <div className={style.clientInfo}>
                        <div><img className={style.avatar} src={client10_avatar} alt={"?????????10??????"}/></div>
                        <div id={'client10'} className={style.clientName}>???10????????????</div>
                    </div>
                    <div className={style.clientInfo}>
                        <div><img className={style.avatar} src={client11_avatar} alt={"?????????11??????"}/></div>
                        <div id={'client11'} className={style.clientName}>???11????????????</div>
                    </div>
                    <div className={style.clientInfo}>
                        <div><img className={style.avatar} src={client12_avatar} alt={"?????????12??????"}/></div>
                        <div id={'client12'} className={style.clientName}>???12????????????</div>
                    </div>
                    <div className={style.clientInfo}>
                        <div><img className={style.avatar} src={client13_avatar} alt={"?????????13??????"}/></div>
                        <div id={'client13'} className={style.clientName}>???13????????????</div>
                    </div>
                    <div className={style.clientInfo}>
                        <div><img className={style.avatar} src={client14_avatar} alt={"?????????14??????"}/></div>
                        <div id={'client14'} className={style.clientName}>???14????????????</div>
                    </div>


                </div>
            </div>
            <div className={style.rightPanel}>
                <div className={style.header}>
                    <div>???{displayID + 1}????????????</div>
                    <TimeOutAlert/>

                </div>
                <div className={style.content} id={'chat_content'}>
                    {chat.map((c: textResponse | questionResponse, index: number) => {
                        return <ChatBox showArr={showArr} setShowArr={setShowArr} setChat={setChat} length={showArr.length} elicitResponse={elicitResponse} message={c} index={index} key={index}/>
                    })}
                </div>

            </div>

        </div>
    </>
}