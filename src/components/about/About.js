import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>About me: </span></p>
            <p> {info.bio} </p>
        </>
    }

    function careerText() {
        return <>
            <p><span style={{color: info.baseColor}}>My career goals: </span></p>
            <p> {info.careerBio} </p>
        </>
    }

    function educationText() {
        return <>
            <p style={{color: info.baseColor}}>Education:</p>
            <ul>
                {info.education.map((school, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{school.emoji}</Box>{school.label}</li>))}
            </ul>
        </>;
    }

    function skillsText() {
        return <>
            <p style={{color: info.baseColor}}> Tech skills - junior level:</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Exposed To:</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Planning to learn:</p>
            <ul className={Style.skills}>
                {info.skills.planningToLearn.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Languages:</p>
            <ul className={Style.skills}>
                {info.skills.languages.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Other skills:</p>
            <ul className={Style.skills}>
                {info.skills.otherSkills.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function hobbiesText() {
        return <>
            <p style={{color: info.baseColor}}>Hobbies:</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>))}
            </ul>
        </>;
    }

    return (<Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
        <Terminal text={aboutMeText()}/>
        <Terminal text={careerText()}/>
        <Terminal text={skillsText()}/>
        <Terminal text={educationText()}/>
        <Terminal text={hobbiesText()}/>
    </Box>)
}