import React from "react";
import { Box, SimpleGrid, Icon } from '@chakra-ui/react';
import Project from "../components/sections/Project";
import MainPage from "../components/layouts/MainPage";
import { GoNote } from 'react-icons/go';
import { GiKnifeFork } from 'react-icons/gi';
import { FaBlogger, FaCalculator, FaCloudSunRain, FaCode } from 'react-icons/fa';


export default function Portfolio() {
  return (
    <MainPage>
<Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
      
   <Project
          icon={<Icon as={FaCalculator} color="#4a0d99"  w={10} h={10} />}
          title={'Unpaid overtime calculator'}
          text={
            'A full-stack app that calculates the amount of unpaid hours and salary you have worked over one year. Admin has access to all the user entries via a login page.'
          }
          link1={"https://the-right-to-switch-off.herokuapp.com/"}
          link2={"https://github.com/michellewatts20000/unpaid-overtime-calc"}
        />
        <Project
          icon={<Icon as={GiKnifeFork} color="#4a0d99" w={10} h={10} />}
          title={"What's in my pantry?"}
          text={
            "What's in my pantry is an easy to use, all-in-one recipe search app that will display recipes based on a list of food items that are currently in your pantry."
          }
          link1={"https://michellewatts20000.github.io/whats-in-my-pantry/"}
          link2={"https://github.com/michellewatts20000/whats-in-my-pantry"}
        />
        <Project
          icon={<Icon color="#4a0d99" as={FaBlogger} w={10} h={10} />}
          title={'Tech Blog'}
          text={
            'A full-stack app that lets you write and comment about tech related issues. Create an account, check out other peoples blogs, write a blog, edit your blog, delete your blog or comment on a blog.'
          }
          link1={"https://boiling-beach-99511.herokuapp.com/"}
          link2={"https://github.com/michellewatts20000/tech-blog"}
        />
        <Project
          icon={<Icon color="#4a0d99" as={GoNote} w={10} h={10} />}
          title={'Note Taker'}
          text={
            'Write notes and save them for later. Click on the delete button next to a note to delete from the apps memory.'
          }
           link1={"https://hidden-sands-80026.herokuapp.com/notes"}
          link2={"https://github.com/michellewatts20000/note-taker"}
        />
        <Project
          icon={<Icon color="#4a0d99" as={FaCloudSunRain} w={10} h={10} />}
          title={'Weather dashboard'}
          text={
            'The weather dashboard is an app that gives you the current weather and UV index for a place you search for and a 5 day forecast.'
          }
          link1={"https://michellewatts20000.github.io/weather-dashboard"}
          link2={"https://github.com/michellewatts20000/weather-dashboard"}
        />
        <Project
          icon={<Icon color="#4a0d99" as={FaCode} w={10} h={10} />}
          title={'Code quiz'}
          text={
            'You have 75 seconds to answer 5 coding questions. Once you have finished the quiz you will be asked to enter your initials to get yourself on the high scores table.'
          }
          link1={"https://michellewatts20000.github.io/code-quiz/"}
          link2={"https://github.com/michellewatts20000/code-quiz"}
        />



       </SimpleGrid>
    </Box>
    </MainPage>
  );
}
