import self from "../img/self.png"
import mock1 from "../img/mock1.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Michał",
    lastName: "Perek",
    initials: "mp",
    position: "an Intern Full Stack Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in Kraków, Poland'
        },
        {
            emoji: "💼",
            text: "Ringer Axel Springer Polska"
        },
        {
            emoji: "📧",
            text: "perek.michal.1@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/MichalPerek",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/perekmichal/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }

    ],
    bio: "I am a former mechanical design engineer taking his first steps in the inspiring world of IT as a self-taught developer. I am ambitious & hardworking, with passion for learning. Open-minded, proactive, good team player with experience in multicultural & agile work environments with daily communication in English.",
    careerBio: "My career goal is to become a skilled full-stack software engineer. Once I will achieve solid experience in traditional web development, I plan to start learning techniques of blockchain and web 3.0 development.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'redux', 'git', 'material ui', 'html', 'css'],
            exposedTo: ['node.js', 'postrgeSQL', 'grafana', 'sass'],
            planningToLearn: ['typescript', 'solidity', 'web3js', 'next.js', 'aws', 'bootstrap'],
            otherSkills: ['communication & presentation skills', 'mechanical engineering', '3d cad design', '3d printing', 'technical documentation', 'manual skills'],
            languages: ['english - c1', 'polish - native'],
        }
    ,
    education: [
        {
            label: 'mEng: mechanical engineering @AGH UST 2018-2020',
            emoji: '🎓'
        },
        {
            label: 'bEng: mechanical engineering @AGH UST 2014-2018',
            emoji: '🎓'
        },

    ],
    hobbies: [
        {
            label: 'investing & business',
            emoji: '💸'
        },
        {
            label: 'blockchain & web3',
            emoji: '🌐'
        },
        {
            label: 'self development',
            emoji: '🏆'
        },
        {
            label: 'cars (especially mazda mx-5)',
            emoji: '🏎️'
        },
        {
            label: 'traveling',
            emoji: '🗺️'
        },
        {
            label: 'hiking',
            emoji: '🥾'
        },
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'gym',
            emoji: '👟'
        },
        {
            label: 'cycling',
            emoji: '🚲'
        }

    ],
    experience: [
        {
            date: "07.2022 - currently",
            employer: "Ringer Axel Springer Poland",
            position: "Intern Full-Stack Developer"
        },
        {
            date: "07.2021 - 06.2022",
            employer: "Haptology",
            position: "Mechanical Design Engineer"
        },
        {
            date: "12.2018 - 06.2021",
            employer: "TechnipFMC",
            position: "Mechanical Design Engineer"
        },
        {
            date: "03.2018 - 11.2018",
            employer: "FEV Poland",
            position: "Mechanical Design Engineer"
        },

    ],
    portfolio: [
        {
            title: "Where in the world?",
            live: "https://all-countries-dev.netlify.app/",
            source: "https://github.com/MichalPerek/AllCountries",
            image: mock1
        }
    ]
}