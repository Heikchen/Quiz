import React from "react";
import { ComponentMeta, ComponentStory  } from "@storybook/react";

import {Link} from "./Link"

export default{
    title: 'Components/Link',
  component: Link,
parameters:{pseudo:{hover:true}}
}as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Link',
};