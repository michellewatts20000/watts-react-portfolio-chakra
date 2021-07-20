import React from "react";
import { Box, SimpleGrid } from '@chakra-ui/react';
import Project from "../components/sections/Project";
import MainPage from "../components/layouts/MainPage";
import calculator from "../components/images/calculator.png";
import pantry from "../components/images/pantry.png";
import blogger from "../components/images/blogger.png";
import note from "../components/images/note.png";
import weather from "../components/images/weather.png";
import code from "../components/images/code-img-land.png";

export default function Portfolio() {
  return (
    <MainPage>
      <Box mb="10">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} >

          <Project
            icon={calculator}
            title={'Unpaid overtime calculator'}
            tech={"node.JS, MySQL"}
            text={
              'A full-stack app that calculates the amount of unpaid hours and salary you have worked over one year.'
            }
            link1={"https://unpaid-overtime.herokuapp.com"}
            link2={"https://github.com/michellewatts20000/unpaid-overtime-calc"}
          />
          <Project
            icon={pantry}
            title={"What's in my pantry?"}
            tech={"HTML, CSS, JS, Bootstrap"}
            text={
              "What's in my pantry is an easy to use, all-in-one recipe search app that will display recipes based on a list of food items that are currently in your pantry."
            }
            link1={"https://michellewatts20000.github.io/whats-in-my-pantry/"}
            link2={"https://github.com/michellewatts20000/whats-in-my-pantry"}
          />
          <Project
            icon={blogger}
            title={'Tech Blog'}
            tech={"node.JS, MySQL"}
            text={
              'A full-stack app that lets you write and comment about tech related issues. Create an account, check out other peoples blogs.'
            }
            link1={"https://boiling-beach-99511.herokuapp.com/"}
            link2={"https://github.com/michellewatts20000/tech-blog"}
          />
          <Project
            icon={note}
            title={'Note Taker'}
            tech={"node.JS, HTML, CSS"}
            text={
              'Write notes and save them for later. Keep track of tasks. Click on the delete button next to a note to delete from the applications memory.'
            }
            link1={"https://hidden-sands-80026.herokuapp.com/notes"}
            link2={"https://github.com/michellewatts20000/note-taker"}
          />
          <Project
            icon={weather}
            title={'Weather dashboard'}
            tech={"API, JS, HTML, CSS"}
            text={
              'The weather dashboard is an app that gives you the current weather and UV index for a place you search for and a 5 day forecast.'
            }

            link1={"https://michellewatts20000.github.io/weather-dashboard"}
            link2={"https://github.com/michellewatts20000/weather-dashboard"}
          />
          <Project
            icon={code}
            title={'Code quiz'}
            tech={"JS, HTML, CSS"}
            text={
              'You have 75 seconds to answer 5 coding questions. Once you have finished the quiz you will be asked to enter your initials to the high scores.'
            }
            link1={"https://michellewatts20000.github.io/code-quiz/"}
            link2={"https://github.com/michellewatts20000/code-quiz"}
          />
        </SimpleGrid>
      </Box>
    </MainPage>
  );
}
