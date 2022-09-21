import React, { Component } from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Page } from "./Page"

export default{
    title: 'Components/Page',
    component: Page,
}as ComponentMeta<typeof Page>

const Template: ComponentStory<typeof Page>=(args)=><Page {...args}/>

export const page = Template.bind({});
page.args={

}