import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Logos } from "./Logos";

export default{
    title:"Components/Logos",
    component: Logos,

} as ComponentMeta<typeof Logos>;

const Template: ComponentStory<typeof Logos>=(args)=><Logos {...args}/>

export const GithubLogo = Template.bind({});
GithubLogo.args={
   logo: "github",
   size:"3",
    link:"#"
   
};
export const FacebookLogo = Template.bind({});
FacebookLogo.args={
     logo: "facebook",
        size:"3",
    link:"#"
};
export const TwitterLogo = Template.bind({});
TwitterLogo.args={
     logo: "twitter",
   size:"3",
    link:"#"
}

