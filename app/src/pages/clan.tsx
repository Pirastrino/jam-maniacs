import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { SEO } from '../components';
import { Clan } from '../../types/coc';
import { Image } from '../components/LazyImage';
import { Badge } from '../components/Badge';

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
  padding: 0rem 2rem;
`;

const ClanInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 250px;
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
  flex-wrap: wrap;
  * {
    margin-bottom: 1rem;
    margin-right: 1rem;
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
              <Image
                url={clan.badgeUrls.large}
                urlSmall={clan.badgeUrls.small}
                alt="clan-badge"
              />
            </BadgeImgHolder>
            <ClanDetails>
              <h1>{clan.name}</h1>
              <Row>
                <Badge color="blue">{clan.tag}</Badge>
                <Badge color="red400">{clan.warLeague.name}</Badge>
                <Badge color="yellow">{clan.clanPoints}</Badge>
                <Badge color="blue">{clan.members}</Badge>
              </Row>
            </ClanDetails>
          </ClanInfo>
        </Wrapper>
      )}
    </>
  );
};

export default ClanPage;
