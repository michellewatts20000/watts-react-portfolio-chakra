import React from "react";
import { Box, SimpleGrid, Image, Center } from '@chakra-ui/react';
import Project from "../components/sections/Project";
import MainPage from "../components/layouts/MainPage";


export default function Portfolio() {
  return (
    <MainPage>
<Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
      
   <Project
          icon={<Center><Image src="https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1525&q=80" rounded={'full'} align={["center", "center", "left", "left"]} alt="Calculator" /></Center>}
          title={'Unpaid overtime calculator'}
          text={
            'A full-stack app that calculates the amount of unpaid hours and salary you have worked over one year. Admin has access to all the user entries via a login page.'
          }
          link1={"https://unpaid-overtime.herokuapp.com"}
          link2={"https://github.com/michellewatts20000/unpaid-overtime-calc"}
        />
        <Project
         icon={<Center><Image src="https://images.unsplash.com/photo-1580116270858-8a0d62b15426?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1580&q=80" rounded={'full'} align={["center", "center", "left", "left"]} alt="Pantry" /></Center>}
          title={"What's in my pantry?"}
          text={
            "What's in my pantry is an easy to use, all-in-one recipe search app that will display recipes based on a list of food items that are currently in your pantry."
          }
          link1={"https://michellewatts20000.github.io/whats-in-my-pantry/"}
          link2={"https://github.com/michellewatts20000/whats-in-my-pantry"}
        />
        <Project
          icon={<Center><Image src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1652&q=80" rounded={'full'} align={["center", "center", "left", "left"]} alt="Blogger" /></Center>}
          title={'Tech Blog'}
          text={
            'A full-stack app that lets you write and comment about tech related issues. Create an account, check out other peoples blogs, write a blog, edit your blog, delete your blog or comment on a blog.'
          }
          link1={"https://boiling-beach-99511.herokuapp.com/"}
          link2={"https://github.com/michellewatts20000/tech-blog"}
        />
        <Project
          icon={<Center><Image src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80" rounded={'full'} align={["center", "center", "left", "left"]} alt="Note pad" /></Center>}
          title={'Note Taker'}
          text={
            'Write notes and save them for later. Click on the delete button next to a note to delete from the apps memory.'
          }
           link1={"https://hidden-sands-80026.herokuapp.com/notes"}
          link2={"https://github.com/michellewatts20000/note-taker"}
        />
        <Project
          icon={<Center><Image src="https://images.unsplash.com/photo-1562155618-e1a8bc2eb04f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1668&q=80" rounded={'full'} align={["center", "center", "left", "left"]} alt="Thunderstorm" /></Center>}
          title={'Weather dashboard'}
          text={
            'The weather dashboard is an app that gives you the current weather and UV index for a place you search for and a 5 day forecast.'
          }
          link1={"https://michellewatts20000.github.io/weather-dashboard"}
          link2={"https://github.com/michellewatts20000/weather-dashboard"}
        />
        <Project
          icon={<Center><Image src="./img/code-img-land.png" rounded={'2xl'} align={["center", "center", "left", "left"]} alt="Code quiz" /></Center>}
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
