import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";
import post1 from "./project1.md";
import post2 from "./project2.md";

const mainFeaturedPost = {
  title: "Software Development Engineer II - Advertising",
  description: "Remote ∙ Silicon Valley, CA",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
};

const featuredPosts = [
  {
    title: "Application deadline : December 31, 2022, 11:35 PM",
    locationType: "Posted on: January 26, 2022, 08:20 PM",
    description: "Company Division: Amazon Advertising",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
];

const posts = [post1, post2];

const sidebar = {
  title: "About Amazon",
  description:
    "Earth's most customer-centric company. When Amazon.com launched in 1995, it was with the mission “to be Earth’s most customer-centric company, where customers can find and discover anything they might want to buy online, and endeavors to offer its customers the lowest possible prices.” This goal continues today, but Amazon’s customers are worldwide now, and have grown to include millions of Consumers, Sellers, Content Creators, and Developers & Enterprises. Each of these groups has different needs, and we always work to meet those needs, innovating new solutions to make things easier, faster, better, and more cost-effective.",

  pastProjects: [
    { title: "March 2022", url: "#" },
    { title: "February 2022", url: "#" },
    { title: "January 2022", url: "#" },
    { title: "November 2021", url: "#" },
  ],
  diversity: [
    {
      diversityTitle: "Amazon's Diversity",
      diversityDescription:
        "Amazon is committed to a diverse and inclusive workplace. Amazon is an equal opportunity employer and does not discriminate on the basis of race, national origin, gender, gender identity, sexual orientation, protected veteran status, disability, age, or other legally protected status. For individuals with disabilities who would like to request an accommodation, please visit https://www.amazon.jobs/en/disability/us",
    },
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
        <Header title="Amazon" />
        <main>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 1, md: 3 }, p: { xs: 1, md: 2 } }}
          >
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
            <Grid container spacing={5} sx={{ mt: 3 }}>
              <Main
                title="About the Role"
                description="Amazon Advertising operates at the intersection of eCommerce and advertising, a rich array of digital display advertising solutions with the goal of helping our customers find and discover anything they want to buy. We help advertisers reach Amazon customers on Amazon.com, across our other owned and operated sites, on other high quality sites across the web, and on millions of Kindles, tablets, and mobile devices. We start with the customer and work backwards in everything we do, including advertising. If you’re interested in joining a rapidly growing team working to build a unique, world-class advertising group with a relentless focus on the customer, you’ve come to the right place.
              Our team enables the most advanced advertisers to scale through the application of cutting-edge technology and creativity. On this team you will have owner-level impact in shaping the future and the satisfaction of seeing your solutions making a big difference for our customers. We provide efficient bulk management of advertising campaigns in addition to building out new, real-time technologies for access to reporting and analytics data. These are highly-visible initiatives with a lot of space for intelligent architecture and green-field development."
                responsibilitiesTitle="Job Responsibilities"
                responsibilities="
· Design and develop software products that impact many areas of our business, 
· Define requirements, create software designs, implement code to these specifications,
· Provide thorough unit and integration testing, and support products while deployed and used by our stakeholders,
· Collaboration with other engineers on the team, product managers, technical program managers, and partner teams.
· Dealing with ambiguity when solving problems
Impact and Career Growth:
· Have an opportunity to contribute across the full stack as well as new AWS technologies and big data
· Build the next generation of our solutions
· Opportunity to grow and broaden your technical skills as you work in an environment that thrives on creativity, experimentation, and product innovation.
Be part of a team of industry-leading experts that are building and operating novel solutions for the most advanced brands and advertisers working with Amazon. The solutions that we build will set new standards for quality and efficiency in advertising. We are re-thinking the way that companies can scale their businesses with Amazon. "
                basicQualitificationsTitle="Basic Qualitifications"
                basicQualitifications="· 1+ years of experience contributing to the architecture and design (architecture, design patterns, reliability and scaling) of new and current systems.
              · 2+ years of non-internship professional software development experience
              · Programming experience with at least one modern language such as Java, C++, or C# including object-oriented design"
                prefferedQualitificationsTitle="Preffered Qualitifications"
                prefferedQualitifications="· 3+ years of non-internship professional software development experience.
              · Experience building complex software systems that have been successfully delivered to customers
              · Knowledge of professional software engineering practices & best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations
              · Ability to take a project from scoping requirements through launch
              · Experience in communicating with customers, other technical teams, and management to collect requirements, describe software product features, and technical designs."
                posts={posts}
              />

              <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                diversity={sidebar.diversity}
                pastProjects={sidebar.pastProjects}
                social={sidebar.social}
              />
            </Grid>
          </Paper>
        </main>
      </Container>
    </ThemeProvider>
  );
}
