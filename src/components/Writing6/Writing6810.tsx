import React, {SyntheticEvent, useState} from 'react';
import style from './Writing6810.module.scss'
import {getTokenFromCookie, URL} from "../../utility";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {TimeOutAlert} from "../TimeOutAlert/TimeOutAlert";


type Prop = {
    day: number,
    content: string
}

export function Writing6810(props: Prop) {

    const [content1, setContent1] = useState('');
    const [content2, setContent2] = useState('');
    const [content3, setContent3] = useState('');
    const [content4, setContent4] = useState('');
    const [fiveAisChecked, setFiveAisChecked] = useState(false);
    const [content5a, setContent5a] = useState('');
    const [fiveBisChecked, setFiveBisChecked] = useState(false);
    const [content5b, setContent5b] = useState('');
    const [fiveCisChecked, setFiveCisChecked] = useState(false);
    const [content5c, setContent5c] = useState('');
    const [fiveDisChecked, setFiveDisChecked] = useState(false);
    const [content5d, setContent5d] = useState('');
    const [fiveEisChecked, setFiveEisChecked] = useState(false);
    const [content5e, setContent5e] = useState('');
    const [fiveFisChecked, setFiveFisChecked] = useState(false);
    const [content5f, setContent5f] = useState('');
    const [fiveGisChecked, setFiveGisChecked] = useState(false);
    const [content5g, setContent5g] = useState('');

    const [sixAisChecked, setsixAisChecked] = useState(false);
    const [content6a, setContent6a] = useState('');
    const [sixBisChecked, setsixBisChecked] = useState(false);
    const [content6b, setContent6b] = useState('');
    const [sixCisChecked, setsixCisChecked] = useState(false);
    const [content6c, setContent6c] = useState('');
    const [sixDisChecked, setsixDisChecked] = useState(false);
    const [content6d, setContent6d] = useState('');
    const [sixEisChecked, setsixEisChecked] = useState(false);
    const [content6e, setContent6e] = useState('');
    const [sixFisChecked, setsixFisChecked] = useState(false);
    const [content6f, setContent6f] = useState('');
    const [sixGisChecked, setsixGisChecked] = useState(false);
    const [content6g, setContent6g] = useState('');

    const [content7, setContent7] = useState('');

    const [validated, setValidated] = useState(false);
    const handle5ACheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFiveAisChecked(event.target.checked);
    }

    const handle5BCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFiveBisChecked(event.target.checked);
    }
    const handle5CCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFiveCisChecked(event.target.checked);
    }
    const handle5DCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFiveDisChecked(event.target.checked);
    }
    const handle5ECheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFiveEisChecked(event.target.checked);
    }
    const handle5FCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFiveFisChecked(event.target.checked);
    }
    const handle5GCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFiveGisChecked(event.target.checked);
    }

    const handle6ACheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setsixAisChecked(event.target.checked);
    }

    const handle6BCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setsixBisChecked(event.target.checked);
    }
    const handle6CCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setsixCisChecked(event.target.checked);
    }
    const handle6DCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setsixDisChecked(event.target.checked);
    }
    const handle6ECheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setsixEisChecked(event.target.checked);
    }
    const handle6FCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setsixFisChecked(event.target.checked);
    }
    const handle6GCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setsixGisChecked(event.target.checked);
    }


    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        const form = event.currentTarget;


        const notValid = !(form as HTMLInputElement).checkValidity();

        if (!(form as HTMLInputElement).checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        if (!notValid) {
            const payload = {
                'day': props.day,
                "content1": content1,
                "content2": content2,
                "content3": content3,
                "content4": content4,
                "content5a": content5a,
                "content5b": content5b,
                "content5c": content5c,
                "content5d": content5d,
                "content5e": content5e,
                "content5f": content5f,
                "content5g": content5g,
                "fiveAisChecked": fiveAisChecked,
                "fiveBisChecked": fiveBisChecked,
                "fiveCisChecked": fiveCisChecked,
                "fiveDisChecked": fiveDisChecked,
                "fiveEisChecked": fiveEisChecked,
                "fiveFisChecked": fiveFisChecked,
                "fiveGisChecked": fiveGisChecked,
                "content6a": content6a,
                "content6b": content6b,
                "content6c": content6c,
                "content6d": content6d,
                "content6e": content6e,
                "content6f": content6f,
                "content6g": content6g,
                "sixAisChecked": sixAisChecked,
                "sixBisChecked": sixBisChecked,
                "sixCisChecked": sixCisChecked,
                "sixDisChecked": sixDisChecked,
                "sixEisChecked": sixEisChecked,
                "sixFisChecked": sixFisChecked,
                "sixGisChecked": sixGisChecked,
                "content7": content7,

            }
            const res = await fetch(URL + "api/writing6810/", {
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
        <div className={style.title}>???{props.day}???</div>
        <TimeOutAlert/>
        <div>{articles.map((article, index) => {
            return <p className={style.paragraph} key={index}>{article}</p>
        })}</div>
        <div className={style.line}></div>
        <div className={style.form}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Label>1??????????????????????????? ?????????????????????????????????????????????</Form.Label>
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
                        ???????????????20??????
                    </Form.Control.Feedback>

                </Form.Group>
                <Form.Group controlId="formBasicContent2">
                    <Form.Label>2?????????????????????????????? ?????????????????????????????????????????????</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        as="textarea" rows={5}
                        value={content2}
                        minLength={WORD_MIN_LIMIT}
                        onChange={e => setContent2(e.target.value)}/>
                    <Form.Control.Feedback type="invalid">
                        ???????????????20??????
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formBasicContent3">
                    <Form.Label>3????????????????????????????????????????????????????????????????????????????????????</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        as="textarea" rows={5}
                        value={content3}
                        minLength={WORD_MIN_LIMIT}
                        onChange={e => setContent3(e.target.value)}/>
                    <Form.Control.Feedback type="invalid">
                        ???????????????20??????
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formBasicContent4">
                    <Form.Label>4?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        as="textarea" rows={5}
                        value={content4}
                        minLength={WORD_MIN_LIMIT}
                        onChange={e => setContent4(e.target.value)}/>
                    <Form.Control.Feedback type="invalid">
                        ???????????????20??????
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formBasicContent5">
                    <Form.Label>5??????????????????????????????????????????????????????????????????????????????????????????[?????????]</Form.Label>
                    <div className={style.checkboxContainer}>
                        <div className={style.checkboxLabel}>a) ????????????</div>
                        <input className={style.checkbox}
                            type="checkbox"
                            checked={fiveAisChecked}
                            onChange={handle5ACheckboxChange}
                        />
                    </div>
                    <div className={fiveAisChecked ? style.thought : style.hiddenThought}>
                        <Form.Group controlId="Content5a">
                            <Form.Label>??????????????????</Form.Label>
                            <Form.Control
                                disabled={!fiveAisChecked}
                                required={fiveAisChecked}
                                type="text"
                                as="textarea" rows={3}
                                value={content5a}
                                minLength={WORD_MIN_LIMIT}
                                onChange={e => setContent5a(e.target.value)}/>
                            <Form.Control.Feedback type="invalid">
                                ???????????????20??????
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>


                    <div className={style.checkboxContainer}>
                        <div className={style.checkboxLabel}>b) ????????????</div>
                        <input className={style.checkbox}
                               type="checkbox"
                               checked={fiveBisChecked}
                               onChange={handle5BCheckboxChange}
                        />
                    </div>
                    <div className={fiveBisChecked ? style.thought : style.hiddenThought}>
                        <Form.Group controlId="Content5b">
                            <Form.Label>??????????????????</Form.Label>
                            <Form.Control
                                disabled={!fiveBisChecked}
                                required={fiveBisChecked}
                                type="text"
                                as="textarea" rows={3}
                                value={content5b}
                                minLength={WORD_MIN_LIMIT}
                                onChange={e => setContent5b(e.target.value)}/>
                            <Form.Control.Feedback type="invalid">
                                ???????????????20??????
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>

                    <div className={style.checkboxContainer}>
                        <div className={style.checkboxLabel}>c) ???????????????</div>
                        <input className={style.checkbox}
                               type="checkbox"
                               checked={fiveCisChecked}
                               onChange={handle5CCheckboxChange}
                        />
                    </div>
                    <div className={fiveCisChecked ? style.thought : style.hiddenThought}>
                        <Form.Group controlId="content5c">
                            <Form.Label>??????????????????</Form.Label>
                            <Form.Control
                                disabled={!fiveCisChecked}
                                required={fiveCisChecked}
                                type="text"
                                as="textarea" rows={3}
                                value={content5c}
                                minLength={WORD_MIN_LIMIT}
                                onChange={e => setContent5c(e.target.value)}/>
                            <Form.Control.Feedback type="invalid">
                                ???????????????20??????
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>


                    <div className={style.checkboxContainer}>
                        <div className={style.checkboxLabel}>d) ????????????</div>
                        <input className={style.checkbox}
                               type="checkbox"
                               checked={fiveDisChecked}
                               onChange={handle5DCheckboxChange}
                        />
                    </div>
                    <div className={fiveDisChecked ? style.thought : style.hiddenThought}>
                        <Form.Group controlId="content5d">
                            <Form.Label>??????????????????</Form.Label>
                            <Form.Control
                                disabled={!fiveDisChecked}
                                required={fiveDisChecked}
                                type="text"
                                as="textarea" rows={3}
                                value={content5d}
                                minLength={WORD_MIN_LIMIT}
                                onChange={e => setContent5d(e.target.value)}/>
                            <Form.Control.Feedback type="invalid">
                                ???????????????20??????
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>

                    <div className={style.checkboxContainer}>
                        <div className={style.checkboxLabel}>e) ????????????</div>
                        <input className={style.checkbox}
                               type="checkbox"
                               checked={fiveEisChecked}
                               onChange={handle5ECheckboxChange}
                        />
                    </div>
                    <div className={fiveEisChecked ? style.thought : style.hiddenThought}>
                        <Form.Group controlId="content5e">
                            <Form.Label>??????????????????</Form.Label>
                            <Form.Control
                                disabled={!fiveEisChecked}
                                required={fiveEisChecked}
                                type="text"
                                as="textarea" rows={3}
                                value={content5e}
                                minLength={WORD_MIN_LIMIT}
                                onChange={e => setContent5e(e.target.value)}/>
                            <Form.Control.Feedback type="invalid">
                                ???????????????20??????
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>

                    <div className={style.checkboxContainer}>
                        <div className={style.checkboxLabel}>f) ????????????</div>
                        <input className={style.checkbox}
                               type="checkbox"
                               checked={fiveFisChecked}
                               onChange={handle5FCheckboxChange}
                        />
                    </div>
                    <div className={fiveFisChecked ? style.thought : style.hiddenThought}>
                        <Form.Group controlId="content5f">
                            <Form.Label>??????????????????</Form.Label>
                            <Form.Control
                                disabled={!fiveFisChecked}
                                required={fiveFisChecked}
                                type="text"
                                as="textarea" rows={3}
                                value={content5f}
                                minLength={WORD_MIN_LIMIT}
                                onChange={e => setContent5f(e.target.value)}/>
                            <Form.Control.Feedback type="invalid">
                                ???????????????20??????
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>

                    <div className={style.checkboxContainer}>
                        <div className={style.checkboxLabel}>g) ??????</div>
                        <input className={style.checkbox}
                               type="checkbox"
                               checked={fiveGisChecked}
                               onChange={handle5GCheckboxChange}
                        />
                    </div>
                    <div className={fiveGisChecked ? style.thought : style.hiddenThought}>
                        <Form.Group controlId="content5g">
                            <Form.Label>??????????????????</Form.Label>
                            <Form.Control
                                disabled={!fiveGisChecked}
                                required={fiveGisChecked}
                                type="text"
                                as="textarea" rows={3}
                                value={content5g}
                                minLength={WORD_MIN_LIMIT}
                                onChange={e => setContent5g(e.target.value)}/>
                            <Form.Control.Feedback type="invalid">
                                ???????????????20??????
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>
                </Form.Group>

                <Form.Group controlId="formBasicContent6">
                    <Form.Label>6???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????[?????????]</Form.Label>
                    <div className={style.checkboxContainer}>
                        <div className={style.checkboxLabel}>a) ?????????????????????????????????????????????</div>
                        <input className={style.checkbox}
                               type="checkbox"
                               checked={sixAisChecked}
                               onChange={handle6ACheckboxChange}
                        />
                    </div>
                    <div className={sixAisChecked ? style.thought : style.hiddenThought}>
                        <Form.Group controlId="Content6a">
                            <Form.Label>??????????????????</Form.Label>
                            <Form.Control
                                disabled={!sixAisChecked}
                                required={sixAisChecked}
                                type="text"
                                as="textarea" rows={3}
                                value={content6a}
                                minLength={WORD_MIN_LIMIT}
                                onChange={e => setContent6a(e.target.value)}/>
                            <Form.Control.Feedback type="invalid">
                                ???????????????20??????
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>


                    <div className={style.checkboxContainer}>
                        <div className={style.checkboxLabel}>b) ?????????????????????????????????????????????</div>
                        <input className={style.checkbox}
                               type="checkbox"
                               checked={sixBisChecked}
                               onChange={handle6BCheckboxChange}
                        />
                    </div>
                    <div className={sixBisChecked ? style.thought : style.hiddenThought}>
                        <Form.Group controlId="Content6b">
                            <Form.Label>??????????????????</Form.Label>
                            <Form.Control
                                disabled={!sixBisChecked}
                                required={sixBisChecked}
                                type="text"
                                as="textarea" rows={3}
                                value={content6b}
                                minLength={WORD_MIN_LIMIT}
                                onChange={e => setContent6b(e.target.value)}/>
                            <Form.Control.Feedback type="invalid">
                                ???????????????20??????
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>

                    <div className={style.checkboxContainer}>
                        <div className={style.checkboxLabel}>c) ???????????????????????????????????????????????????</div>
                        <input className={style.checkbox}
                               type="checkbox"
                               checked={sixCisChecked}
                               onChange={handle6CCheckboxChange}
                        />
                    </div>
                    <div className={sixCisChecked ? style.thought : style.hiddenThought}>
                        <Form.Group controlId="content6c">
                            <Form.Label>??????????????????</Form.Label>
                            <Form.Control
                                disabled={!sixCisChecked}
                                required={sixCisChecked}
                                type="text"
                                as="textarea" rows={3}
                                value={content6c}
                                minLength={WORD_MIN_LIMIT}
                                onChange={e => setContent6c(e.target.value)}/>
                            <Form.Control.Feedback type="invalid">
                                ???????????????20??????
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>


                    <div className={style.checkboxContainer}>
                        <div className={style.checkboxLabel}>d) ???????????????????????????????????????????????????????????????</div>
                        <input className={style.checkbox}
                               type="checkbox"
                               checked={sixDisChecked}
                               onChange={handle6DCheckboxChange}
                        />
                    </div>
                    <div className={sixDisChecked ? style.thought : style.hiddenThought}>
                        <Form.Group controlId="content6d">
                            <Form.Label>??????????????????</Form.Label>
                            <Form.Control
                                disabled={!sixDisChecked}
                                required={sixDisChecked}
                                type="text"
                                as="textarea" rows={3}
                                value={content6d}
                                minLength={WORD_MIN_LIMIT}
                                onChange={e => setContent6d(e.target.value)}/>
                            <Form.Control.Feedback type="invalid">
                                ???????????????20??????
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>

                    <div className={style.checkboxContainer}>
                        <div className={style.checkboxLabel}>e) ???????????????????????????????????????????????????</div>
                        <input className={style.checkbox}
                               type="checkbox"
                               checked={sixEisChecked}
                               onChange={handle6ECheckboxChange}
                        />
                    </div>
                    <div className={sixEisChecked ? style.thought : style.hiddenThought}>
                        <Form.Group controlId="content6e">
                            <Form.Label>??????????????????</Form.Label>
                            <Form.Control
                                disabled={!sixEisChecked}
                                required={sixEisChecked}
                                type="text"
                                as="textarea" rows={3}
                                value={content6e}
                                minLength={WORD_MIN_LIMIT}
                                onChange={e => setContent6e(e.target.value)}/>
                            <Form.Control.Feedback type="invalid">
                                ???????????????20??????
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>

                    <div className={style.checkboxContainer}>
                        <div className={style.checkboxLabel}>f) ???????????????????????????????????????????????????</div>
                        <input className={style.checkbox}
                               type="checkbox"
                               checked={sixFisChecked}
                               onChange={handle6FCheckboxChange}
                        />
                    </div>
                    <div className={sixFisChecked ? style.thought : style.hiddenThought}>
                        <Form.Group controlId="content6f">
                            <Form.Label>??????????????????</Form.Label>
                            <Form.Control
                                disabled={!sixFisChecked}
                                required={sixFisChecked}
                                type="text"
                                as="textarea" rows={3}
                                value={content6f}
                                minLength={WORD_MIN_LIMIT}
                                onChange={e => setContent6f(e.target.value)}/>
                            <Form.Control.Feedback type="invalid">
                                ???????????????20??????
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>

                    <div className={style.checkboxContainer}>
                        <div className={style.checkboxLabel}>g) ???????????????????????????????????????</div>
                        <input className={style.checkbox}
                               type="checkbox"
                               checked={sixGisChecked}
                               onChange={handle6GCheckboxChange}
                        />
                    </div>
                    <div className={sixGisChecked ? style.thought : style.hiddenThought}>
                        <Form.Group controlId="content6g">
                            <Form.Label>??????????????????</Form.Label>
                            <Form.Control
                                disabled={!sixGisChecked}
                                required={sixGisChecked}
                                type="text"
                                as="textarea" rows={3}
                                value={content6g}
                                minLength={WORD_MIN_LIMIT}
                                onChange={e => setContent6g(e.target.value)}/>
                            <Form.Control.Feedback type="invalid">
                                ???????????????20??????
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>
                </Form.Group>
                <Form.Group controlId="formBasicContent7">
                    <Form.Label>7????????????????????????????????????????????????????????????????????????????????????????????????????????????</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        as="textarea" rows={5}
                        value={content7}
                        minLength={WORD_MIN_LIMIT}
                        onChange={e => setContent7(e.target.value)}/>
                    <Form.Control.Feedback type="invalid">
                        ???????????????20??????
                    </Form.Control.Feedback>
                </Form.Group>
                <Button className={style.button} variant="primary" type="submit">
                    ??????
                </Button>
            </Form>
        </div>

    </div>
}



