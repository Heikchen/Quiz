import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import {Categorie} from "./Categorie";

export default{
    title: 'Components/Categorie',
  component: Categorie,

}as ComponentMeta<typeof Categorie>;

const Template: ComponentStory<typeof Categorie> = (args) => <Categorie {...args} />;

export const QuizCategorie = Template.bind({});
QuizCategorie.args = {
rows:["hello"],
  position: "absolute",
  top:"0"
};