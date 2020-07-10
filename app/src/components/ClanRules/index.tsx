import React from 'react';
import styled from 'styled-components';
import { useGlobalState } from '../GlobalContextProvider';
import { Accordion, AccordionDetail, AccordionSummary } from '../Accordion';

type RuleStyleProps = {
  darkMode: boolean;
};

type ClanRule = {
  id: string;
  title: string;
  description: string;
};

type ClanRulesData = {
  data: {
    allClanRule: {
      rules: [ClanRule];
    };
  };
};

export const StyledSummary = styled(AccordionSummary)<RuleStyleProps>`
  color: ${props =>
    props.darkMode
      ? props.theme.colors.yellow
      : props.theme.colors.textDefault};
  cursor: auto;
  font-weight: 500;
`;

const StyledDetail = styled(AccordionDetail)`
  text-align: left;
  line-height: 1.7;
  font-size: 0.9rem;
`;

const Rule = styled.div<RuleStyleProps>`
  box-shadow: ${props => props.theme.colors.shadow};
  border: ${props =>
    props.darkMode ? 0 : `1px solid ${props.theme.colors.bgDivider}`};
  margin-bottom: 1rem;
`;

const ClanRules = ({ data }: ClanRulesData) => {
  const { darkMode } = useGlobalState();

  const { rules } = data.allClanRule;

  return (
    <Accordion>
      {rules &&
        rules.map(rule => (
          <Rule key={rule.id} darkMode={darkMode}>
            <StyledSummary darkMode={darkMode}>{rule.title}</StyledSummary>
            <StyledDetail>{rule.description}</StyledDetail>
          </Rule>
        ))}
    </Accordion>
  );
};

export { ClanRules };
