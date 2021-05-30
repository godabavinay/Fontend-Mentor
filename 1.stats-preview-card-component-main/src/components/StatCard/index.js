import React from "react";
import {
  Wrapper,
  Container,
  Column1,
  Heading,
  Content,
  Stats,
  StatItem,
  StatVal,
  StatName,
  Column2,
  Image,
  Span,
} from "./statCardElements";

const StatCard = () => {
  return (
    <Wrapper>
      <Container>
        <Column1>
          <Heading>
            Get <Span>insights</Span> that help your business grow.
          </Heading>
          <Content>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </Content>
          <Stats>
            <StatItem>
              <StatVal>10k+</StatVal>
              <StatName>Companies</StatName>
            </StatItem>
            <StatItem>
              <StatVal>314</StatVal>
              <StatName>Templates</StatName>
            </StatItem>
            <StatItem>
              <StatVal>12m+</StatVal>
              <StatName>Queries</StatName>
            </StatItem>
          </Stats>
        </Column1>
        <Column2>
          <Image></Image>
        </Column2>
      </Container>
    </Wrapper>
  );
};

export default StatCard;
