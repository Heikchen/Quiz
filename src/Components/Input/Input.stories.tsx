import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Input} from "./Input";

export default{
    title: 'Components/Input',
    component: Input,
}as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input>=(args)=><Input {...args}/>

export const textInput = Template.bind({});
textInput.args={
    type:"text",
    width:"80%",
    placeholder:"text",
}
export const passwordInput = Template.bind({});
passwordInput.args={
    type:"password",
    placeholder:"password",
}
export const emailInput = Template.bind({});
emailInput.args={
    type:"email",
    placeholder:"email",
}