import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    margin-bottom: 6rem;
`;

const Text = styled.p`
    line-height: 1.5;
    color: #777777;

    & + & {
        margin-top: 1rem;
    }
`;

const SectionTitle = styled.h3`
    color: #444444;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
`;

const SectionItemTitle = styled.div`
    font-weight: bold;
    color: #444444;
    margin-top: 1rem;
`;

const SectionItemTimeframe = styled.div`
    margin: 0.5rem 0px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #a19dff;
    filter: brightness(0.75);
    font-weight: bold;
    font-size: 0.75rem;
`;

const SectionItemDescription = styled(Text)``;

const AboutMe = () => {
    return (
        <Wrapper>
            <h2 style={{ color: "#333333", marginBottom: "0.5rem" }}>About Me</h2>
            <Text>
                Hello! My name is Ben Schoelkopf and I'm a self-taught programmer, designer, and
                entrepreneur.
            </Text>
            <Text>
                I've been coding websites since I was 13 years old, and I've been working with the
                React framework for 4+ years. I've also started multiple businesses, such as{" "}
                <a href='https://hubtrk.com'>Hubtrack</a> and{" "}
                <a href='https://acepricecompare.com'>AcePriceCompare.</a>
            </Text>
            <SectionTitle>Education</SectionTitle>
            <ul style={{ color: "#777777" }}>
                <li>
                    <SectionItemTitle>Self-taught</SectionItemTitle>
                    <SectionItemTimeframe>2015-Present</SectionItemTimeframe>
                    <SectionItemDescription>Youtube, Udemy, Skillshare</SectionItemDescription>
                </li>
                <li>
                    <SectionItemTitle>Hofstra University</SectionItemTitle>
                    <SectionItemTimeframe>2020-Present</SectionItemTimeframe>
                    <SectionItemDescription>
                        Discrete Structures, Programming 1, 2, and 3, Computer Architecture
                    </SectionItemDescription>
                </li>
            </ul>
            <SectionTitle>Experience</SectionTitle>
            <ul>
                <li>
                    <SectionItemTitle>Bedford Ace Hardware</SectionItemTitle>
                    <SectionItemTimeframe>2012-Present</SectionItemTimeframe>
                    <SectionItemDescription>
                        My family store, learned to interact with customers and manage IT for a
                        small-medium size business. Also one of my first clients when I started
                        building websites and web apps.
                    </SectionItemDescription>
                </li>
                <li>
                    <SectionItemTitle>
                        <a href='https://hubtrk.com'>Hubtrack</a>
                    </SectionItemTitle>
                    <SectionItemTimeframe>2019-Present</SectionItemTimeframe>
                    <SectionItemDescription>
                        My first business that I found success with. Aimed towards Ace Hardware
                        stores, which lead me to scrape AceHardware.com for every store's email
                        address. Still being used by Ace Hardware stores to this day.
                    </SectionItemDescription>
                </li>
                <li>
                    <SectionItemTitle>Clocky</SectionItemTitle>
                    <SectionItemTimeframe>January 2021-July 2021</SectionItemTimeframe>
                    <SectionItemDescription>
                        My first internship. Clocky is an e-commerce store, and I did things like
                        developed the sliding cart as well as fix bugs when nobody else on the
                        engineering team could figure them out. I also became comfortable with
                        Shopify and Shopify development.
                    </SectionItemDescription>
                </li>
                <li>
                    <SectionItemTitle>
                        <a href='https://acepricecompare.com'>AcePriceCompare</a>
                    </SectionItemTitle>
                    <SectionItemTimeframe>2021-Present</SectionItemTimeframe>
                    <SectionItemDescription>
                        My latest business. Also targeted towards Ace Hardware stores, this product
                        allows stores to compare what they charge to the stores around them. It gets
                        the prices by scraping AceHardware.com. Used the same marketing strategy as
                        with Hubtrack, with the addition of also cold-calling stores that don't have
                        email addresses.
                    </SectionItemDescription>
                </li>
            </ul>
        </Wrapper>
    );
};

export { AboutMe };
