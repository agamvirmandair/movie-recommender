import Button from '@mui/material/Button'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import RowAndColumnSpacing from '../RowAndColumnFunction';
import BasicButtons from '../BasicButtons'
import Stack from '@mui/material/Stack';

import { Link, useNavigate } from 'react-router-dom';
import allInOne from '../test';





const questions = [
    {
        question: 'What are your favorite movie scenes to watch',
        action: 'High-octane car chases and explosive action sequences',
        drama: 'Deep emotional exploration of complex characters and relationships',
        comedy: 'Laughter and humor in everyday situations',
        horror: 'Spine-tingling scares and supernatural elements'

    },
    {
        question: 'What kind of setting do you prefer?',
        action: ' Exotic locations with intense action sequences',
        drama: 'Realistic and immersive settings that feel authentic',
        comedy: 'Everyday places filled with humor and chaos',
        horror: 'Dark and eerie environments that create tension'
    },
    {
        question: 'What kind of movie poster would catch your eye?',
        action: 'Explosive action scenes with a heroic figure front and center.',
        drama: 'A poignant image of two characters in a dramatic moment',
        comedy: 'A colorful poster featuring comedic actors in humorous poses',
        horror: 'A dark and eerie design with hints of horror and suspense'
    },
    {
        question: 'Which movie plot twist do you find most intriguing?',
        action: 'A surprising betrayal with high stakes',
        drama: "An unexpected revelation about a character's past",
        comedy: 'A hilarious misunderstanding that leads to chaos',
        horror: ' A shocking supernatural revelation'
    },
    {
        question: 'Which movie soundtrack appeals to you the most?',
        action: 'High-energy music with epic orchestral scores',
        drama: 'Melodic compositions that evoke deep emotions',
        comedy: 'Upbeat and catchy tunes that make you smile',
        horror: 'Eerie and atmospheric sounds that create tension'
    },
    {
        question: 'How do you like your movie dialogue?',
        action: 'Full of one-liners and memorable catchphrases',
        drama: 'Thought-provoking and laden with emotional depth',
        comedy: 'Packed with humor and witty banter',
        horror: 'Filled with suspenseful and ominous lines'
    },
    {
        question: "What's your favorite movie quote?",
        action: '"I’ll be back."',
        drama: '"Were you rushing or were you dragging?"',
        comedy: '"Why so serious?"',
        horror: "Heeere's Johnny!"
    },
    {
        question: "Which movie director's work do you admire the most?",
        action: 'Christopher Nolan',
        drama: 'Judd Apatow',
        comedy: 'Micheal Bay',
        horror: 'James Wan'
    },
    {
        question: 'What type of travel destination appeals to you?',
        action: 'A place with extreme sports and physical challenges',
        drama: 'A historical or culturally rich location with deep significance',
        comedy: 'A vibrant and lively destination',
        horror: 'A place known for its haunted or eerie legends'
    }
]

function Home() {
    const [answers, setAnswers] = React.useState(new Array(9));
    const navigate = useNavigate(); 

    // React.useEffect(() => {
    //   console.log(answers);
    // }, [answers]);

    return (
        <div className="App">
            <header className="App-header">
              <span style={{fontSize: 50, textDecoration: 'underline', }}>MOVIE BASED ON YOUR INTERESTS!!!!</span>
                <body style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
                    <Box sx={{ display: "flex", justifyContent: 'center', alignItems: "center", flexDirection: 'column' }}>

                        {
                            questions.map((q, index) => (

                                <RowAndColumnSpacing
                                    index={index}
                                    setAnswers={setAnswers}
                                    question={q.question}
                                    action={q.action}
                                    drama={q.drama}
                                    horror={q.horror}
                                    comedy={q.comedy}


                                />
                            )
                            )
                        }

                    </Box>
                    <Stack spacing={0} direction="row" sx={{ margin: 10, display: "flex", justifyContent: 'center', alignItems: "center" }}>
                        <Link to={'/movies'}><Button variant="outlined"
                        sx={{color:"lightgreen", border: 3}}
                        onClick={async ()=>{
                            const result = await allInOne(answers)
                            navigate('/movies', {state: result})
                        }}
                        >SUBMIT</Button>
                        </Link>
                    </Stack>
                </body>
            </header>
        </div>
    )



}

export default Home;
