import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import {Box} from "@mui/material";
import Style from "./Experience.module.scss"

export default function ExperienceTimeline(props) {

    const timelineElements = props.experienceTimeline

    return (

        <Timeline>
            {timelineElements.map((element,index) => {
                return (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent className={Style.date}>
                            {element.date}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Box>
                               <p className={Style.employer}>{element.employer}</p>
                               <p className={Style.position}>{element.position}</p>
                            </Box>
                        </TimelineContent>
                    </TimelineItem>
                    )

            })}

        </Timeline>
    )
}
