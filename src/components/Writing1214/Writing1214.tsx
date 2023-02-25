import React, {SyntheticEvent, useState} from 'react';
import style from './Writing1214.module.scss'
import {getTokenFromCookie, URL} from "../../utility";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


type Prop = {
    day: number,
    content: string
}

export function Writing1214(props: Prop) {

    const [content1, setContent1] = useState('');

    const [validated, setValidated] = useState(false);
    const handleSubmit = async (event: SyntheticEvent) => {
        const form = event.currentTarget;

        const notValid = !(form as HTMLInputElement).checkValidity();

        if (notValid) {
            event.preventDefault();
            event.stopPropagation();
        }

        console.log(notValid);

        setValidated(true);

        if (!notValid) {

            const payload = {
                'day': props.day,
                "content1": content1,

            }
            const res = await fetch(URL + "api/writing1214/", {
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
            if (response.status === "Success") {

                alert(response.message)
                window.location.href = "/home"

            } else {
                alert(response.message)
            }
        }


    };


    const articles = props.content.split("\n\n")


    const WORD_MIN_LIMIT = 20;
    return <div className={style.container}>
        <div className={style.title}>第{props.day}天</div>
        <div>{articles.map((article, index) => {
            return <p className={style.paragraph} key={index}>{article}</p>
        })}</div>
        <div className={style.line}></div>
        <div className={style.form}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Label>写作练习</Form.Label>
                <Form.Group controlId="formBasicContent1">
                    <Form.Control
                        required
                        minLength={WORD_MIN_LIMIT}
                        type="text"
                        as="textarea" rows={5}
                        value={content1}
                        onChange={e => setContent1(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        请至少输入20个字
                    </Form.Control.Feedback>

                </Form.Group>

                <Button className={style.button} variant="primary" type="submit">
                    提交
                </Button>
            </Form>
        </div>

    </div>
}



