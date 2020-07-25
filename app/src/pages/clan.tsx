import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { SEO } from '../components';
import { Clan } from '../../types/coc';
import { Image } from '../components/LazyImage';
import { Badge } from '../components/Badge';

// @ts-ignore
import UsersIcon from '../assets/icons/users-solid.svg';
// @ts-ignore
import TrophyIcon from '../assets/icons/trophy-solid.svg';

const clanDataQuery = graphql`
  {
    clan(id: { eq: "98cb9bf1-a185-5c5f-8ec8-cf1207a42aec" }) {
      warFrequency
      type
      badgeUrls {
        large
        small
      }
      clanLevel
      clanPoints
      clanVersusPoints
      name
      members
      requiredTrophies
      tag
      warLeague {
        name
      }
      warLosses
      warTies
      warWinStreak
      warWins
    }
  }
`;

type ClanDataQueryResult = {
  clan: Partial<Clan>;
};

const Wrapper = styled.div`
  margin: auto;
  max-width: 900px;
  padding: 2rem;
`;

const ClanInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;

  @media (min-width: ${props => props.theme.respondUp.md}) {
    align-items: flex-start;
    text-align: left;
    max-height: 250px;
  }
`;

const BadgeImgHolder = styled.div`
  width: 250px;
  height: 250px;
`;

const ClanDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  div {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }

  @media (min-width: ${props => props.theme.respondUp.md}) {
    align-items: flex-start;
  }
`;

const ClanPage = () => {
  const { clan } = useStaticQuery<ClanDataQueryResult>(clanDataQuery);

  return (
    <>
      <SEO title="Maniacs Brno | Clan" />
      {clan && (
        <Wrapper>
          <ClanInfo>
            <BadgeImgHolder>
              <Image url={clan.badgeUrls.large} alt="clan-badge" />
            </BadgeImgHolder>
            <ClanDetails>
              <h1>{clan.name}</h1>
              <Row>
                <Badge color="blue">{clan.tag}</Badge>
                <Badge icon={<UsersIcon />} color="blue">
                  {clan.members}
                </Badge>
                <Badge color="red400">{clan.warLeague.name}</Badge>
                <Badge icon={<TrophyIcon />} color="yellow">
                  {clan.clanPoints}
                </Badge>
              </Row>
            </ClanDetails>
          </ClanInfo>
        </Wrapper>
      )}
    </>
  );
};

export default ClanPage;
