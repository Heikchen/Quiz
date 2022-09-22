import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Logos } from "./Logos";

export default{
    title:"Components/Logos",
    component: Logos,

} as ComponentMeta<typeof Logos>;

const Template: ComponentStory<typeof Logos>=(args)=><Logos {...args}/>

export const githubLogo = Template.bind({});
githubLogo.args={
   logo: "github",
   size:"3",
    link:"#",
   
}

