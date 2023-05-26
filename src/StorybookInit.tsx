import { Storybook } from '@components/Storybook';
import { SwitchScgScnStory } from '@components/SwitchScgScn/SwitchScgScnStory';
import { TooltipStory } from '@components/Tooltip/TooltipStory';
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  body {
    font-family: Roboto;
  }
`;

export const StorybookInit = () => {
  return (
    <>
      <Global />
      <Storybook>
        <SwitchScgScnStory />
        <TooltipStory />
      </Storybook>
    </>
  );
};
