// import React from "react";
import { Grid, Box} from '@mui/material';
import MButton from '../components/MButton'
import LinearProgressWithLabel from '../components/MLinearProgress'
import CenteredImage from '../components/CenteredImage';
import {useEffect, useState} from "react";
import styles from "./Home.module.css";

function Home(){
    const [isLoading, setIsLoading] = useState(true);
    const [formData, setFormData] = useState({});
    const [text,setText] = useState("");
    const [mbtiScores, setMbtiScores] = useState({ 
      entj: 50,
      entp: 10,
      enfj: 40,
      enfp: 10,
      estj: 50,
      estp: 10,
      esfj: 40,
      esfp: 10,
      intj: 50,
      intp: 10,
      infj: 40,
      infp: 10,
      istj: 50,
      istp: 10,
      isfj: 40,
      isfp: 10   });  

    console.log(mbtiScores.entj)
    const [progress, setProgress] = useState(50);
    const onChange = (event) => {
        console.log("hello");
        setText(event.target.value);
    }
    const onClick = (event) => {
      console.log(text);
    }

    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

    }
  
    const handlePredictClick = (event) => {
      console.log("Hello CLikc")
      const text_copy = text;
      setIsLoading(true);
      fetch('http://127.0.0.1:5000/prediction/', 
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(text_copy)
        })
        .then(response => response.json())
        .then(response => {
            setMbtiScores(response.result);
            setIsLoading(false);
          });
        }
    return(
        <div>
        <h1> MBTI Prediction  </h1>
            <input type='text' 
              placeholder='당신의 생각을 적어주세요.'
                name='profile_img' 
                className={styles.input}
                onChange={onChange}>
            </input>
        <MButton text="검사" onclick={handlePredictClick} ></MButton>
    <hr></hr>
  

    <h1> Result</h1>

    <CenteredImage src="logo192.png"/>

    <h2> MBTI </h2>
    <p>
        당신의 MBTI는 ~~ 단어를 많이 사용하고 ~~ 단어를 많이 사용하는 특징이 있는데, ~~~ 단어를 많이 사용하는 거 같아서 ~~~ MBTI 입니다
        이 내용을 바꿔야 합니다. powermode 가 작동하고 있다. 근데 좀 별로인거 같다. power mode 를 조금 수정하니까 괜찮다. 

    </p>
    <LinearProgressWithLabel mbti_name="ENTJ" value={mbtiScores.entj} />
    <LinearProgressWithLabel mbti_name="ENTP" value={mbtiScores.entp} />
    <LinearProgressWithLabel mbti_name="ENFJ" value={mbtiScores.enfj} />
    <LinearProgressWithLabel mbti_name="ENFP" value={mbtiScores.enfp} />
    <LinearProgressWithLabel mbti_name="ESTJ" value={mbtiScores.estj} />
    <LinearProgressWithLabel mbti_name="ESTP" value={mbtiScores.estp} />
    <LinearProgressWithLabel mbti_name="ESFJ" value={mbtiScores.esfj} />
    <LinearProgressWithLabel mbti_name="ESFP" value={mbtiScores.esfp} />

    <LinearProgressWithLabel mbti_name="INTJ" value={mbtiScores.intj} />
    <LinearProgressWithLabel mbti_name="INTP" value={mbtiScores.intp} />
    <LinearProgressWithLabel mbti_name="INFJ" value={mbtiScores.infj} />
    <LinearProgressWithLabel mbti_name="INFP" value={mbtiScores.infp} />
    <LinearProgressWithLabel mbti_name="ISTP" value={mbtiScores.istp} />
    <LinearProgressWithLabel mbti_name="ISTJ" value={mbtiScores.istj} />
    <LinearProgressWithLabel mbti_name="ISFJ" value={mbtiScores.isfj} />
    <LinearProgressWithLabel mbti_name="ISFP" value={mbtiScores.isfp} />


    </div>
    );
    }

 
export default Home;