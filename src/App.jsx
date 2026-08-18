import { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import { getUsers } from "./api";
import Header from "./components/Header";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import Lets from "./components/Lets";
import OurWorking from "./components/OurWorking";
import Team from "./components/Team";
import Crud from "./components/Crud";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    const data = await getUsers();
    setUsers(data);
  }

  return (
    <Container maxWidth="lg" sx={{ paddingX: { xs: "16px", md: "24px" } }}>
      <Header />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "50px", md: "110px" },
          paddingBottom: { xs: "50px", md: "110px" },
        }}
      >
        <Services />
        <CaseStudies />
        <Lets />
        <OurWorking />
        <Team users={users} />
        <Crud users={users} setUsers={setUsers} />
        <Testimonials users={users} />
        <ContactUs />
      </Box>

      <Footer />
    </Container>
  );
}
