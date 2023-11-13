import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";
import post1 from "./event1.md";
import post2 from "./event2.md";

const mainFeaturedPost = {
  title: "Asset & Wealth Management GFG Asia Summer Associate Info Session",
  description:
    "This session will be led fully in Mandarin and is for 1st Year MEng students. \n Learn about the Summer Associate program in the Global Families Group, Asia Team!",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Inflation and the Cost of Living",
    date: "Nov 05",
    description:
      "J.P. Morgan Research explores how the rising cost of living is impacting spending on consumer staples. Are Consumers Spending Less?",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
  {
    title: "ESG At J.P. Morgan",
    date: "Nov 02",
    description:"Access our latest ESG research and insights, and discover how we are helping support a sustainable and inclusive economy for our clients and the communities we serve.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
];

const posts = [post1, post2];

const sidebar = {
  title: "About",
  description:
    "JPMorgan Chase (NYSE: JPM) is one of the oldest financial institutions in the United States. With a history dating back over 200 years, heres where we stand today.We are a leading global financial services firm with assets of $2.4 trillion. We operate in more than 60 countries. We have over 240,000 employees.",
  pastEvents: [
    { title: "March 2022", url: "#" },
    { title: "February 2021", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 2018", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function EventDetail() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="JPMorgan Chase & Co." />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main
              title="From the firehouse"
              description="Join us virtually to learn about summer internship
              opportunities at J.P. Morgan in the Global Private Bank, Global
              Families Group, Asia. The Global Families Group works exclusively
              with international individuals and families who have investments,
              business interests and family circumstances across the United
              States and the Asia Pacific region. You’ll hear from some of our
              Senior Leaders as we will cover topics the Summer Associate
              Program, J.P. Morgan, and more!
              We are a leader in investment banking, financial services for consumers and small businesses, commercial banking, financial transaction processing and asset management.
Our stock is a component of the Dow Jones Industrial Average.

Starting your career at JPMorgan Chase means more than just having a job: it means joining a team that’s invested in your success. With over 35 different businesses and corporate functions and more than 20 analyst and associate program tracks, we offer the opportunity to take on meaningful work, learn new skills, and develop lasting relationships. Our 10+ Early Insights programs help high school and early college students learn more about careers in financial services and how their skills will help us innovate. Explore our global career opportunities in North America, Latin America, Europe, Middle East, Africa and Asia Pacific.
              "
              posts={posts}
            />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              pastEvents={sidebar.pastEvents}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}
