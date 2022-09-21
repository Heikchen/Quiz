import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import {Quiz} from "./Quiz";

export default{
    title: 'Components/Quiz',
    component: Quiz,

}as ComponentMeta<typeof Quiz>;

const Template: ComponentStory<typeof Quiz>=(args)=><Quiz{...args}/>

export const quiz = Template.bind({});

quiz.args={
    height: '200px'
}