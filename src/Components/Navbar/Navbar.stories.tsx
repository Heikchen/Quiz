import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import {Navbar} from "./Navbar";



export default{
    title: 'Components/Navbar',
    component: Navbar,
    argTypes:{onhandleClick:{action:'clicked'}}
}as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args}/>;

export const navbar = Template.bind({});
navbar.args ={

}