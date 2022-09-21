import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Text} from "./Text";

export default{
    title: "Components/Text",
    component: Text,
    argTypes: {
    visibility: { control: 'text' },
  },

} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text>= (args) =><Text {...args}/>;

export const headerText = Template.bind({});
headerText.args={
    label: "header",
    fontSize: "24px"
}

export const paraText = Template.bind({});
paraText.args={
    label: "paragraph",
    fontSize: "16px"
}


