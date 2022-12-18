import styles from '../styles/Home.module.css'
import RunningInputForm from "./form/form";
import {Text, Spacer} from "@nextui-org/react";

export default function Home() {
    return (
        <div className={styles.background}>
            <Text
                h1
                size={60}
                css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                }}
                weight="bold"
            >
                Running Pace Calculator
            </Text>
            <h3>
                by Colin FitzGerald
            </h3>
            <h3>
                Enter any two to calculate pace, time or distance.
            </h3>
            <RunningInputForm/>
            <Text
                h1
                size={30}
                css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                }}
                weight="bold"
            >
                Who Uses a Pace Calculator?
            </Text>
            <Text>
                Both new and experienced runners can benefit from pace calculators. Knowing your pace can help you train
                and run better, whether you&apos;re running your first race, striving to set a personal best, or going
                for a training run.
            </Text>
            <Text
                h1
                size={30}
                css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                }}
                weight="bold"
            >
                Why are pace calculators useful?
            </Text>
            <Text>
                Pace calculators can help you figure out how quickly you should run if you have a specific finish time
                in mind for a particular distance or race. Find out what speed you need to run a 20-minute 5K or a
                sub-1:30 half marathon, for example.
            </Text>
            <Spacer y={1}/>
            <Text>
                Pace calculators can also be used to figure out what your pace was during a training run in the
                neighborhood or on the track.Find out how quickly you ran for that 30-minute 4-mile training run, for
                example.
            </Text>
            <Spacer y={1}/>
            <Text>
                Finally, they can assist you in determining the distance you ran. For example, you may figure out how
                far you ran by entering your pace and the length of your training run or race.
            </Text>
            <Spacer y={1}/>
        </div>
    )
}
