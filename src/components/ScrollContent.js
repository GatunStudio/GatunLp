import React from "react";
import { motion, useScroll } from "framer-motion";
import { LoremIpsum } from "./LoremIpsum";
import wallpaper from "../Dist/wallpaper2.gif";
import logo from "../Dist/logo.png";
import rhyan from "../Dist/rhyan.jpg";
import rhyan1 from "../Dist/rhyan01.png";
import rhyan2 from "../Dist/rhyan02.png";
import rhyan3 from "../Dist/rhyan03.png";

import caique from "../Dist/caique.jpg";
import cuco from "../Dist/cucoproject.png";
import finapp from "../Dist/finapp.png";
import horrorgame from "../Dist/horrorgame.png";
import combatviewer from "../Dist/combatviewer.jpg";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { ArrowDownward, GitHub, Instagram, LinkedIn, WebAsset } from "@mui/icons-material";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import ApiIcon from "@mui/icons-material/Api"; 
import './animatedStyle.css';
export default function ScrollContent() {
  const { scrollYProgress } = useScroll();
  console.log("scroll", scrollYProgress);
  return [
    <div
      style={{  
        // gradient background
        background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
        
        // background: linear-gradient(180deg, #000000 0%, #090a0f 100%);
      }}


    > 
    <div id='stars3'></div> 
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
          viewport={{ once: true }}
        >
          <Grid container 
            spacing={0}
          >
            <Grid item
            //in large screens 6, in cellphone 12
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}

               
            >
              <Typography
                variant="h1"
                sx={{
                  marginTop: "20vh",
                  fontSize: "4rem",
                  fontWeight: "1000",
                  letterSpacing: ".3rem",
                  textAlign: "center",
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
                  textAlign: "center",
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
                  marginLeft: "2vw",
                  marginRight: "2vw",
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
                left: "45%",

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
            </Grid>

            <Grid item 
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6} >
              <img
               src = {logo}
                style={{
                  height: "50vh",
                  width: "50vh", 
                  marginTop: "20vh", 
                  marginLeft: "10vw", 
                }}
                alt = ""
              />

          </Grid>
          </Grid>
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
              fontSize: "3rem",
              fontWeight: "500",
              letterSpacing: ".1rem",
              textAlign: "center",
              textShadow: "0 0 10px #000000",
            }}
          >
            {" "}
            Soluções{" "}
          </p>
        </Box>
        <section className="Solution" 
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            viewport={{ once: true }}
            style = {{
              alignSelf: "center",
              justifySelf: "center",
              width: "100%", 
            }}
          >
            <Grid container spacing={3} justifyContent={"center"}
            sx = {{
              paddingX: "5vw",
            }}


            
            >
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ textAlign: "center" }}>
                  <Card 
                  style = {{
                    //gradient
                    background: "linear-gradient(45deg, #3c0d7f97 30%, #262891 90%)",
                  }}
                  >
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
                  <Card 
                  style = {{
                    //gradient
                    background: "linear-gradient(45deg, #0d3c7f97 30%, #612691 90%)",
                  }}
                  >
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
                  <Card  style = {{
                    //gradient
                    background: "linear-gradient(45deg, #47139097 30%, #267191 90%)",
                  }}>
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
                        Temos super máquinas para você
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ textAlign: "center" }}>
                  <Card  
                  style = {{
                    //gradient
                    background: "linear-gradient(45deg, #660d7f97 30%, #262891 90%)",
                  }}
                  >
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
      </div>,
        <div
      style={{  
        // gradient background
        background:   "linear-gradient(180deg, #dd1d1d00 0%, #420354 100%)",
        // background: linear-gradient(180deg, #000000 0%, #090a0f 100%);
      }}


    >  
    <div id='stars2'></div> 
        <div
          style={{
            marginTop: "50vh",
            width: "100%",
            position: "relative",
            top: "0",
            left: "0",
            zIndex: "10",
          }}
        >
          <a href="#sobre"></a>
          <section className="more">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              viewport={{ once: true }}
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
                    textShadow: "0 0 10px #550548",
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
                    textAlign: "justify",
                    margin: "0 10vw",
                    textShadow: "0 0 10px #000000",
                  }}
                >
                  {" "}
                  Nossa jornada começou com a visão de proporcionar algo mais do que apenas produtos; queríamos construir pontes entre os jogadores e seus sonhos virtuais, entre as demandas de desempenho e as máquinas que as concretizam. Desde então, temos nos dedicado incansavelmente a essa visão, trabalhando para oferecer produtos e serviços que não apenas atendam às expectativas, mas as superem.
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: "400",
                    letterSpacing: ".1rem",
                    textAlign: "justify",
                    margin: "2vh 10vw",
                    textShadow: "0 0 10px #000000",
                  }}
                >
                  {" "}
                  Agradecemos por fazer parte da nossa jornada até agora e esperamos que você se junte a nós para explorar os limites do entretenimento digital e da tecnologia de ponta. Bem-vindo à Gatun, onde a diversão encontra a tecnologia e os sonhos ganham vida.
                  </Typography>
                  <IconButton
              sx={{ 
                color: "white",
                zIndex: "20",
                top: "20vh",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
              onClick={() => {
                // find a section
                const section = document.querySelector(".tripulantes");
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
 
 </motion.div> 
              <Box sx={{ textAlign: "center", marginTop: "60vh" }}>
                <Typography
                  className="tripulantes"
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
                  O melhor da nossa nave são os tripulantes {" "}
                </Typography>
                
              </Box>
              <Grid container spacing={2} sx={{ marginTop: "5vh", padding:'20px' }}>
                <Grid item 
              xs={12}
              sm={12}
              md={3}
              lg={3}
              xl={3}>
                 <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y:0, transition: { duration: 0.5,
                    delay: 0.2} }}
                  viewport={{ once: true }}
                  animate={{ 
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.2,
                    },
                    
                  }}
                >
                  <Avatar 
                  alt="Caique Ponjjar"
                  src={caique}
                  sx={{
                    width: "25vh",
                    height: "25vh",
                    margin: "0 auto",
                    marginTop: "5vh",
                    border: "solid 5px #550548",
                  }}
                  />
</motion.div>
<motion.div 
                  initial={{ opacity: 0,  x: 50 }}
                  whileInView={{ opacity: 1, x:0, transition: { duration: 0.5,
                    delay: 0.5} }}
                  viewport={{ once: true }}
                  animate={{ 
                    x: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.5,
                    },
                    
                  }}
                >
                  <Typography
                  variant="h5"
                  sx={{
                    fontSize: "2.0rem",
                    fontWeight: "400",
                    marginTop: "1vh",
                    letterSpacing: ".1rem",
                    textAlign: "center", 
                    textShadow: "0 0 10px #000000", 
                  }}
                >
                  Caique Ponjjar
                 </Typography> </motion.div>

                    
                

                  
                  </Grid> 
                  <Grid item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  xl={3}
                  >

<motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y:0, transition: { duration: 0.5,
                          delay: 0.7} }}
                        viewport={{ once: true }}
                        animate={{ 
                          y: 0,
                          transition: {
                            duration: 0.5,
                            delay: 1.5,
                          },
                          
                        }}
                      >

                    <Card  
                    >
                      <CardHeader 
                      title="Cuco"
                      sx={{
                        textAlign: "center",
                        fontSize: "2.0rem",
                        fontWeight: "800", 
                        letterSpacing: ".1rem",
                        textShadow: "0 0 10px #f710ae",
                      }}
                      />
                      <CardMedia
                      component="img"
                      src = {cuco}
                      alt="cuco"
                      sx={{
                        width: "100%",
                        height: "250px",  
                        border: "solid 5px #550548",
                        borderRadius: "20px", 
                      }}
                      />
                      
                      <CardContent>
                        <Typography
                        variant="h6"
                        sx={{
                          textAlign: "justify",
                        }} 
                      >  Aplicativo de anotações dinâmico disponivel na playstore.  </Typography>
                      </CardContent>
                    </Card>
                    </motion.div>




                        


                  
                  </Grid>
              
                  <Grid item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  xl={3}
                  >    <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y:0, transition: { duration: 0.5,
                    delay: 0.9} }}
                  viewport={{ once: true }}
                  animate={{ 
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 1.7,
                    },
                    
                  }}
                >
                   <Card >
                   <CardHeader 
                      title="The Night Trees"
                      sx={{
                        textAlign: "center",
                        fontSize: "2.0rem",
                        fontWeight: "800", 
                        letterSpacing: ".1rem",
                        textShadow: "0 0 10px #f710ae",
                      }}
                      />
                      <CardMedia
                      component="img"
                      src = {horrorgame}
                      alt=""
                      sx={{
                        width: "100%",
                        height: "250px",   
                        border: "solid 5px #550548",
                      }}
                      />
                      <CardContent>
                      <Typography
                        variant="h6" 
                        sx = {{
                          textAlign: "justify",

                                                  }}  > 
                         Jogo de terror multiplayer com mais de 1000 downloads. 
                        </Typography>
                      </CardContent>
                    </Card> 
                    </motion.div>
                    </Grid> 
                    <Grid item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  xl={3}
                  > <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y:0, transition: { duration: 0.5,
                    delay: 1.1} }}
                  viewport={{ once: true }}
                  animate={{ 
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 1.7,
                    },
                    
                  }}
                >
                    <Card  
                    >
                      <CardHeader 
                      title="CombatViewer"
                      sx={{
                        textAlign: "center",
                        fontSize: "2.0rem",
                        fontWeight: "800", 
                        letterSpacing: ".1rem",
                        textShadow: "0 0 10px #f710ae",
                      }}
                      />
                      <CardMedia
                      component="img"
                      src = {combatviewer}
                      alt=""
                      sx={{
                        width: "100%",
                        height: "250px",  
                        border: "solid 5px #550548",
                        borderRadius: "20px", 
                      }}
                      />
                      
                      <CardContent>
                        <Typography
                        variant="h6"
                        sx={{
                          textAlign: "justify",
                        }} 
                      >  Visualizador em um caixão de areia utilizado pelo Exército Brasileiro  </Typography>
                      </CardContent>
                    </Card>
</motion.div>



                        


                  
                  </Grid>
                  </Grid> 
                  <Grid container spacing={2} sx={{ marginTop: "0vh", paddingX:'20px' }}>
                <Grid item 
              xs={12}
              sm={12}
              md={3}
              lg={3}
              xl={3}>
                 <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y:0, transition: { duration: 0.5,
                    delay: 0.2} }}
                  viewport={{ once: true }}
                  animate={{ 
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.2,
                    },
                    
                  }}
                >
                  <Avatar 
                  alt="Rhyan Michelin"
                  src={rhyan}
                  sx={{
                    width: "25vh",
                    height: "25vh",
                    margin: "0 auto",
                    marginTop: "5vh",
                    border: "solid 5px #550548",
                  }}
                  />
</motion.div>
<motion.div 
                  initial={{ opacity: 0,  x: 50 }}
                  whileInView={{ opacity: 1, x:0, transition: { duration: 0.5,
                    delay: 0.5} }}
                  viewport={{ once: true }}
                  animate={{ 
                    x: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.5,
                    },
                    
                  }}
                >
                  <Typography
                  variant="h5"
                  sx={{
                    fontSize: "2.0rem",
                    fontWeight: "400",
                    marginTop: "1vh",
                    letterSpacing: ".1rem",
                    textAlign: "center", 
                    textShadow: "0 0 10px #000000", 
                  }}
                >
                  Rhyan Michelin
                 </Typography> </motion.div>

                    
                

                  
                  </Grid> 
                  <Grid item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  xl={3}
                  >

<motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y:0, transition: { duration: 0.5,
                          delay: 0.7} }}
                        viewport={{ once: true }}
                        animate={{ 
                          y: 0,
                          transition: {
                            duration: 0.5,
                            delay: 1.5,
                          },
                          
                        }}
                      >

                    <Card  
                    >
                      <CardHeader 
                      title="Capa Twitter"
                      sx={{
                        textAlign: "center",
                        fontSize: "2.0rem",
                        fontWeight: "800", 
                        letterSpacing: ".1rem",
                        textShadow: "0 0 10px #f710ae",
                      }}
                      />
                      <CardMedia
                      component="img"
                      src = {rhyan1}
                      alt="capa twitter"
                      sx={{
                        width: "100%",
                        height: "250px",  
                        border: "solid 5px #550548",
                        borderRadius: "20px", 
                      }}
                      />
                      
                      <CardContent>
                        <Typography
                        variant="h6"
                        sx={{
                          textAlign: "justify",
                        }} 
                      >   Artes e Design de personagens </Typography>
                      </CardContent>
                    </Card>
                    </motion.div>




                        


                  
                  </Grid>
              
                  <Grid item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  xl={3}
                  >    <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y:0, transition: { duration: 0.5,
                    delay: 0.9} }}
                  viewport={{ once: true }}
                  animate={{ 
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 1.7,
                    },
                    
                  }}
                >
                   <Card >
                   <CardHeader 
                      title="Post Bolo de Chocolate "
                      sx={{
                        textAlign: "center",
                        fontSize: "2.0rem",
                        fontWeight: "800", 
                        letterSpacing: ".1rem",
                        textShadow: "0 0 10px #f710ae",
                      }}
                      />
                      <CardMedia
                      component="img"
                      src = {rhyan2}
                      alt=""
                      sx={{
                        width: "100%",
                        height: "250px",   
                        border: "solid 5px #550548",
                      }}
                      />
                      <CardContent>
                      <Typography
                        variant="h6" 
                        sx = {{
                          textAlign: "justify",

                                                  }}  > 
                          Social Media para produtos
                        </Typography>
                      </CardContent>
                    </Card> 
                    </motion.div>
                    </Grid> 
                    <Grid item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  xl={3}
                  > <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y:0, transition: { duration: 0.5,
                    delay: 1.1} }}
                  viewport={{ once: true }}
                  animate={{ 
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 1.7,
                    },
                    
                  }}
                >
                    <Card  
                    >
                      <CardHeader 
                      title="Ilustração Gaara"
                      sx={{
                        textAlign: "center",
                        fontSize: "2.0rem",
                        fontWeight: "800", 
                        letterSpacing: ".1rem",
                        textShadow: "0 0 10px #f710ae",
                      }}
                      />
                      <CardMedia
                      component="img"
                      src = {rhyan3}
                      alt=""
                      sx={{
                        width: "100%",
                        height: "250px",  
                        border: "solid 5px #550548",
                        borderRadius: "20px", 
                      }}
                      />
                      
                      <CardContent>
                        <Typography
                        variant="h6"
                        sx={{
                          textAlign: "justify",
                        }} 
                      >  Ilustrações e Desenhos digitais   </Typography>
                      </CardContent>
                    </Card>
</motion.div>



                        


                  
                  </Grid>
                  </Grid>
                        <motion.div 
                        initial="hidden"
                        animate="visible"
                        className="footer"
                        transition={{ duration: 1.5 }}
                      >

              <Box sx={{ textAlign: "center", marginTop: "30vh" }}>
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
                  </IconButton> <IconButton
                    aria-label="instagram"
                    sx={{ color: "#ff6af0" }}
                    onClick={() =>
                      window.open("https://instagram.com/GatunStudio", "_blank")
                    }
                  >
                    <Instagram sx={{ fontSize: "3rem" }} />
                  </IconButton>
                </Box>
                  <div style = {{width: "100%", height: "10vh"}}></div>
              </Box>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  ];
}
