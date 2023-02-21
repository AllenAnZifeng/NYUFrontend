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


        const res = await fetch(URL + "test/", {
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
        const displayID = response.scenario_display_id
        const realID = response.scenario_true_id

        setScore(score)
        setDisplayID(displayID)
        setRealID(realID)
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
    })


    return <>
        <div className={style.container}>
            <div className={style.leftPanel}>
                <div className={style.userInfo}>

                    <div className={style.avatar}><img className={style.avatar} src={user_avatar} alt={"用户头像"}/>
                    </div>
                    <div className={style.username}>{getUserNameFromCookie()}</div>
                </div>
                <div className={style.clientsHeader}>来访者列表</div>

                <div className={style.clients}>
                    <div className={style.clientInfo}>
                        <div><img className={style.avatar} src={client1_avatar} alt={"来访者1头像"}/></div>
                        <div id={'client1'} className={style.clientName}>第1位来访者</div>
                    </div>
                    <div className={style.clientInfo}>
                        <div><img className={style.avatar} src={client2_avatar} alt={"来访者2头像"}/></div>
                        <div id={'client2'} className={style.clientName}>第2位来访者</div>
                    </div>
                    <div className={style.clientInfo}>
                        <div><img className={style.avatar} src={client3_avatar} alt={"来访者3头像"}/></div>
                        <div id={'client3'} className={style.clientName}>第3位来访者</div>
                    </div>
                    <div className={style.clientInfo}>
                        <div><img className={style.avatar} src={client4_avatar} alt={"来访者4头像"}/></div>
                        <div id={'client4'} className={style.clientName}>第4位来访者</div>
                    </div>
                    <div className={style.clientInfo}>
                        <div><img className={style.avatar} src={client5_avatar} alt={"来访者5头像"}/></div>
                        <div id={'client5'} className={style.clientName}>第5位来访者</div>
                    </div>
                    <div className={style.clientInfo}>
                        <div><img className={style.avatar} src={client6_avatar} alt={"来访者6头像"}/></div>
                        <div id={'client6'} className={style.clientName}>第6位来访者</div>
                    </div>
                    <div className={style.clientInfo}>
                        <div><img className={style.avatar} src={client7_avatar} alt={"来访者7头像"}/></div>
                        <div id={'client7'} className={style.clientName}>第7位来访者</div>
                    </div>
                    <div className={style.clientInfo}>
                        <div><img className={style.avatar} src={client8_avatar} alt={"来访者8头像"}/></div>
                        <div id={'client8'} className={style.clientName}>第8位来访者</div>
                    </div>
                    <div className={style.clientInfo}>
                        <div><img className={style.avatar} src={client9_avatar} alt={"来访者9头像"}/></div>
                        <div id={'client9'} className={style.clientName}>第9位来访者</div>
                    </div>
                    <div className={style.clientInfo}>
                        <div><img className={style.avatar} src={client10_avatar} alt={"来访者10头像"}/></div>
                        <div id={'client10'} className={style.clientName}>第10位来访者</div>
                    </div>
                    <div className={style.clientInfo}>
                        <div><img className={style.avatar} src={client11_avatar} alt={"来访者11头像"}/></div>
                        <div id={'client11'} className={style.clientName}>第11位来访者</div>
                    </div>
                    <div className={style.clientInfo}>
                        <div><img className={style.avatar} src={client12_avatar} alt={"来访者12头像"}/></div>
                        <div id={'client12'} className={style.clientName}>第12位来访者</div>
                    </div>
                    <div className={style.clientInfo}>
                        <div><img className={style.avatar} src={client13_avatar} alt={"来访者13头像"}/></div>
                        <div id={'client13'} className={style.clientName}>第13位来访者</div>
                    </div>
                    <div className={style.clientInfo}>
                        <div><img className={style.avatar} src={client14_avatar} alt={"来访者14头像"}/></div>
                        <div id={'client14'} className={style.clientName}>第14位来访者</div>
                    </div>


                </div>
            </div>
            <div className={style.rightPanel}>
                <div className={style.header}>
                    <div>第{displayID + 1}位来访者</div>
                    <div>分数：{score}</div>
                </div>
                <div className={style.content} id={'chat_content'}>
                    {chat.map((c: textResponse | questionResponse, index: number) => {
                        return <ChatBox elicitResponse={elicitResponse} message={c} key={index}/>
                    })}
                </div>

            </div>

        </div>
    </>
}