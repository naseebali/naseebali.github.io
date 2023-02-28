import Head from "next/head";
import Header from "./header";
import Footer from "./Footer";
import styled from "styled-components";
import { media, theme } from "../components/Style";
const { colors, fontSizes, fonts } = theme;

const Container = styled.div`
  min-height: 100vh;
`;
const Main2 = styled.main`
  /* margin: auto; */
  max-width: 1440px;
  min-height: 100vh;
  margin: 0px auto;
  ${media.mediumLcd`margin: 0px 50px;`}
  ${media.thone`margin: 0px;`}
`;
const Layout = ({ children }) => {
  return (
    <Container>
      <Head>
        <title>Usama Asif | Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main2>{children}</Main2>
      <Footer />
    </Container>
  );
};

export default Layout;
