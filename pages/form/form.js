import {Input} from '@nextui-org/react';
import {Button} from "@nextui-org/react";
import styles from "./styles.module.css"
import {useState} from "react";

export default function RunningInputForm() {
    const [runningTime, setRunningTime] = useState('');
    const [runningPace, setRunningPace] = useState('');
    const [runningDistance, setRunningDistance] = useState('');
    const [result, setFinalResult] = useState('');

    function handleSubmit() {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://hideousbisquesystemcall.colinfitzgeral8.repl.co/convert');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = () => {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                setFinalResult(data["converted_result"])
            } else {
                console.error()
            }
        };
        xhr.send(JSON.stringify({
            "running_time": runningTime,
            "running_pace": runningPace,
            "running_distance": runningDistance
        }));
    }

    return (
        <div className={styles.flexColumn}>
            <Input css={{width: "300px", marginBottom: "20px"}} onChange={(event) => setRunningTime(event.target.value)}
                   label="Running Time"/>
            <Input css={{width: "300px", marginBottom: "20px"}} onChange={(event) => setRunningPace(event.target.value)}
                   label="Running Pace (Minutes Per Mile)"/>
            <Input css={{width: "300px", marginBottom: "20px"}}
                   onChange={(event) => setRunningDistance(event.target.value)} label="Running Distance (Miles)"/>
            <Button onClick={handleSubmit} css={{width: "300px", marginBottom: "20px"}}>Submit</Button>
            {result !== '' && (
                <div>{result}</div>
            )}
        </div>
    )
}