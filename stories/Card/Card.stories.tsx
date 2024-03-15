import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Card } from "./Card";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Example/Card",
    component: Card,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
        design: {
            type: "figma",
            url: "https://www.figma.com/file/G568AXr4FaHwIvZ3NCadGU/The-Stray-Ferret---Design-V2?type=design&node-id=2351-22563&mode=design&t=yBAUEbIsV5HegeVD-0",
        },
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {},
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

const buttonOne = {
    primary: true,
    text: "Buy now",
    link: "#",
};

const buttonTwo = {
    primary: true,
    text: "Find out more",
    link: "#",
};

export const Base: Story = {
    args: {
        date: "8-10th Nov",
        title: "Harewood House Artisan Winter Market",
        location: "Harewood House, Leeds",
        button2: buttonTwo,
    },
};
export const withPrice: Story = {
    args: {
        title: "Harewood House Artisan Winter Market",
        location: "Harewood House, Leeds",
        price: { price: "20.00", salePrice: "15.00" },
        button1: buttonOne,
    },
};
export const withDate: Story = {
    args: {
        date: "8-10th Nov",
        title: "Harewood House Artisan Winter Market",
        location: "Harewood House, Leeds",
        button2: buttonTwo,
    },
};
export const withButtonsOnly: Story = {
    args: {
        button1: buttonOne,
        button2: buttonTwo,
    },
};

export const withPriceAndSecondButton: Story = {
    args: {
        date: "8-10th Nov",
        title: "Harewood House Artisan Winter Market",
        location: "Harewood House, Leeds",
        price: { price: "20.00", salePrice: "15.00" },
        salePrice: "£15.00",
        button1: buttonOne,
        button2: buttonTwo,
    },
};
