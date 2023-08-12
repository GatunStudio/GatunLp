import React from "react";
import { motion, useScroll } from "framer-motion";
import { LoremIpsum } from "./LoremIpsum";
import wallpaper from "../Dist/wallpaper2.gif";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { ArrowDownward, GitHub, LinkedIn, WebAsset } from "@mui/icons-material";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import ApiIcon from "@mui/icons-material/Api";

export default function ScrollContent() {
  const { scrollYProgress } = useScroll();
  console.log("scroll", scrollYProgress);
  return (
    <>
      {/*<motion.div
        className="progress-bar"
        style={{ 
           
            position:'fixed',
            top: '11%',
            left: 0,
            right: 0,
            height: '10px',
            background:'#ffffff',
            transformOrigin: '0%',
          
          scaleX: scrollYProgress }}
        /> */}
      <section>
        <motion.div
          className="App"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
        >
          <div
            style={{
              backgroundImage: `url(${wallpaper})`,
              backgroundSize: "cover",
              backgroundPosition: "left",
              backgroundRepeat: "no-repeat",
              height: "120vh",
              width: "100%",
              position: "relative",
              top: "0",
              left: "0",
              zIndex: "40",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "0%",
                left: "10%",
                color: "white",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                fontSize: "3rem",
                textAlign: "center",
                textShadow: "0 0 10px #000000",
                zIndex: "20",
                width: //verify if is in mobile
                { xs: "80%", sm: "80%", md: "40%", lg: "40%" },

                //display: "none",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  marginTop: "20vh",
                  fontSize: "4rem",
                  fontWeight: "1000",
                  letterSpacing: ".3rem",
                  textShadow: "0 0 10px #000000",
                }}
              >
                {" "}
                GΛTUN Studio{" "}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "2.0rem",
                  fontWeight: "500",
                  letterSpacing: ".1rem",
                  textShadow: "0 0 10px #000000",
                }}
              >
                {" "}
                get one, be amazed{" "}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  marginTop: "10vh",
                  fontSize: "1.5rem",
                  fontWeight: "500",
                  letterSpacing: ".1rem", 
                  textAlign: "center",
                  textShadow: "0 0 10px #000000",
                }}
              >
               O Seu Destino de Diversão e Tecnologia!
 
              </Typography>   <Typography
                variant="h5"
                sx={{
                  fontSize: "1.5rem",
                  marginTop: "1vh",
                  fontWeight: "300",
                  letterSpacing: ".1rem", 
                  textAlign: "justify",
                  textShadow: "0 0 40px #f215ea",
                }}
              > 

Nossa missão na Gatun é levar a emoção dos jogos eletrônicos e a potência da montagem de computadores diretamente para você. Explore o que temos a oferecer e embarque nessa jornada conosco!
 
              </Typography>   <Typography
                variant="h5"
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "300",
                  fontStyle: "italic",

                  marginTop: "1vh",
                  letterSpacing: ".1rem", 
                  textAlign: "center",
                  textShadow: "0 0 10px #000000",
                }}
              > 
Com entusiasmo,
A Equipe Gatun
              </Typography>
              <IconButton
              sx={{  
                transform: "translate(-50%, -50%)",
                color: "white",
                zIndex: "20", 
                marginTop: "10vh",
                backgroundColor: "rgba(104, 4, 92, 0.5)",
              }}
              onClick={() => {
                // find a section
                const section = document.querySelector(".Solution");
                // scroll to that section - 100px
                if (section) {
                  let newSection =
                    section.getBoundingClientRect().top +
                    window.pageYOffset -
                    200;
                  window.scrollTo({ top: newSection, behavior: "smooth" });
                }
              }}
            >
              <ArrowDownward sx={{ fontSize: "3rem" }} />
            </IconButton>
            </Box>

  
          </div>
        </motion.div>
      </section>
      <div
        style={{
          marginTop: "80vh",
          width: "100%",
          position: "relative",
          top: "0",
          left: "0",
          zIndex: "10",
        }}
      >
        <Box>
          <p
            style={{
              fontSize: "2rem",
              fontWeight: "400",
              letterSpacing: ".1rem",
              textAlign: "center",
              textShadow: "0 0 10px #000000",
            }}
          >
            {" "}
            Soluções{" "}
          </p>
        </Box>
        <section className="Solution">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            viewport={{ once: true }}
          >
            <Grid container spacing={0} justifyContent={"center"}
            
            >
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ textAlign: "center" }}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia height="140">
                      <WebAsset
                        sx={{
                          fontSize: "5rem",
                          color: "primary.main",
                          textAlign: "center",
                        }}
                      />
                    </CardMedia>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        sx={{ color: "primary.main" }}
                        component="div"
                      >
                        Sites
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Desenvolvimento de aplicações web
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ textAlign: "center" }}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia height="140">
                      <DeveloperModeIcon
                        sx={{
                          fontSize: "5rem",
                          color: "primary.main",
                          textAlign: "center",
                        }}
                      />
                    </CardMedia>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        sx={{ color: "primary.main" }}
                        component="div"
                      >
                        Aplicativos
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Desenvolvimento de aplicações mobile
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ textAlign: "center" }}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia height="140">
                      <BuildCircleIcon
                        sx={{
                          fontSize: "5rem",
                          color: "primary.main",
                          textAlign: "center",
                        }}
                      />
                    </CardMedia>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        sx={{ color: "primary.main" }}
                        component="div"
                      >
                        Montamos seu PC
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Montamos seu PC Gamer, Workstation ou para uso doméstico
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ textAlign: "center" }}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia height="140">
                      <VideogameAssetIcon
                        sx={{
                          fontSize: "5rem",
                          color: "primary.main",
                          textAlign: "center",
                        }}
                      />
                    </CardMedia>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        sx={{ color: "primary.main" }}
                        component="div"
                      >
                        GameDev
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Desenvolvimento de jogos 2D e 3D
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            </Grid>
            <IconButton
              sx={{
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                zIndex: "20",
                top: "20vh",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
              onClick={() => {
                // find a section
                const section = document.querySelector(".more");
                // scroll to that section - 100px
                if (section) {
                  let newSection =
                    section.getBoundingClientRect().top +
                    window.pageYOffset -
                    200;
                  window.scrollTo({ top: newSection, behavior: "smooth" });
                }
              }}
            >
              <ArrowDownward sx={{ fontSize: "3rem" }} />
            </IconButton>
          </motion.div>
        </section>

        <div
          style={{
            marginTop: "80vh",
            width: "100%",
            position: "relative",
            top: "0",
            left: "0",
            zIndex: "10",
          }}
        >
          <section className="more">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              viewport={{ once: false }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                },
              }}
            >
              <Box sx={{ textAlign: "center", marginTop: "10vh" }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "2rem",
                    fontWeight: "400",
                    letterSpacing: ".1rem",
                    textAlign: "center",
                    textShadow: "0 0 10px #000000",
                  }}
                >
                  {" "}
                  Sobre nós{" "}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: "400",
                    letterSpacing: ".1rem",
                    textAlign: "center",
                    textShadow: "0 0 10px #000000",
                  }}
                >
                  {" "}
                  Somos uma empresa de desenvolvimento de software e hardware,
                  com foco em soluções para o seu negócio.{" "}
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center", marginTop: "10vh" }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "2rem",
                    fontWeight: "400",
                    letterSpacing: ".1rem",
                    textAlign: "center",
                    textShadow: "0 0 10px #000000",
                  }}
                >
                  {" "}
                  Temos os melhores profissionais{" "}
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center", marginTop: "10vh" }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "2rem",
                    fontWeight: "400",
                    letterSpacing: ".1rem",
                    textAlign: "center",
                    textShadow: "0 0 10px #000000",
                  }}
                >
                  {" "}
                  Entre em contato conosco{" "}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "5vh",
                  }}
                >
                  <IconButton
                    aria-label="linkedin"
                    sx={{ color: "primary.main" }}
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/company/gatun",
                        "_blank"
                      )
                    }
                  >
                    <LinkedIn sx={{ fontSize: "3rem" }} />
                  </IconButton>
                  <IconButton
                    aria-label="github"
                    sx={{ color: "#ffff" }}
                    onClick={() =>
                      window.open("https://github.com/GatunStudio", "_blank")
                    }
                  >
                    <GitHub sx={{ fontSize: "3rem" }} />
                  </IconButton>
                </Box>
              </Box>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
}
