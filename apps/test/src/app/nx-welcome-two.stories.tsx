import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NxWelcomeTwo } from './nx-welcome-two';

const Story: ComponentMeta<typeof NxWelcomeTwo> = {
  component: NxWelcomeTwo,
  title: 'NxWelcomeTwo',
};
export default Story;

const Template: ComponentStory<typeof NxWelcomeTwo> = (args) => (
  <NxWelcomeTwo {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
