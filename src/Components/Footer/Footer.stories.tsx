import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";

import { Footer} from "./Footer";

export default{
    title:"Components/Footer",
    component: Footer,

} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer>=(args)=><Footer {...args}/>

export const PrimaryFooter = Template.bind({});

PrimaryFooter.args={
backgroundColor: "var(--primary-button-color)",
height: "148px",
width: "100%"}
