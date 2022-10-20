import React from 'react';
import {Box} from "@mui/material";
import ExperienceTimeline from "./ExperienceTimeline";
import {info} from "../../info/Info";

export default function Experience() {
    return (<Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <ExperienceTimeline experienceTimeline={info.experience}/>
           </Box>
    );
};