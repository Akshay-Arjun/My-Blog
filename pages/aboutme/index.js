import Head from 'next/head';
import React from 'react';
import { HOME_OG_IMAGE_URL, ORG_NAME } from '../../lib/constants';
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import "bootstrap-icons/font/bootstrap-icons.css";
export default function Index() {

  return (
    <>
      <Layout>
        <Head>
          <title>About Me  | {ORG_NAME}</title>
          <meta
            name="description"
            content={`${ORG_NAME}`}
          />
          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
        </Head>
        <Container>
          <div className='content-center pb-10 mb-5'>
          <h1 className="mt-5 mb-7 text-3xl text-accent-3 text-center font-bold">
          About Me
            </h1>
            // The below code copy pasted from my peronal website. So Tailwind is not used.
            <div style={{ alignContent:'space-evenly' ,paddingLeft:"20px"}}>
  <h2 style={{ textAlign: "center" }}>
    Hi there{" "}
    <span role="img" aria-label="Waving hand">
      👋
    </span>
    , I'm 4k5h4y 4rjun 
    
  </h2>
  <h3 style={{ textAlign: "center" }}>
    Doing my B.Tech in Computer Science (Cybersecurity) at SR University,
    India
  </h3>
  <br />
  <ul style={{textAlign: 'left',alignContent:'space-evenly',paddingRight: '20px'}}>
    
    <li>
      
      🔭 I’m currently working on{" "}
      <a
        href="https://thereisnoearthb.org"
        style={{ color: "#1DA1F2" }}
      >
        There is no earth b website
      </a>{" "}
      ,{" "}<a href="https://akshay-blog.vercel.app" style={{ color: "#1DA1F2" }}>
        My personal blog 
      </a>{" "}
      and{" "}
      <a href="https://akshay-arjun.vercel.app" style={{ color: "#1DA1F2" }}>
        My personal website
      </a>
      .
    </li>
    <li>🌱 I’m currently learning Web development and Ethical Hacking.</li>
    <li>💬 Talk to me about Cybersecurity,  <a href="https://voiceformenindia.com/" style={{ color: "#1DA1F2" }}>
    Gender biased laws.
      </a> </li>
    <li>
      🎮 Games I play Valorant,{" "}
      <a
        href="https://app.hackthebox.com/profile/425207"
        style={{ color: "#1DA1F2" }}
      >
        Capture the flag
      </a>
      .
    </li>
    <li>
      📫 How to reach me :{" "}
      <a href="https://akshay-arjun.vercel.app/Contact" style={{ color: "#1DA1F2" }}>
        Contact Form.
      </a>
    </li>
    <li>
      ⚡ Unfunny fact: India doesn't have Men rights & Gender neutral laws.
    </li>
    <li>
      📖 I read a lot of Blogs on Hacking & Hindu <del>mythology</del> history.
    </li>
    <li>
      🐍 Favourite programming language is{" "}
      <a
        href="https://imgs.xkcd.com/comics/python.png"
        style={{ color: "#1DA1F2" }}
      >
        Python
      </a>
      .
    </li>
  </ul>

  <br />
  <h3 style={{ textAlign: "left" }}>Connect with me:</h3>
  <ul>
    
    <li>
      <a href="https://twitter.com/x4k5h4yx"  style={{color: '#1DA1F2',paddingBottom:"200px"}} target="blank"><img style={{ textAlign: "center" }} src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="x4k5h4yx" /></a> 

      <a href="https://instagram.com/_thearjun_"  style={{color: '#1DA1F2'}} target="blank"><img style={{ textAlign: "center" }} src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="_thearjun_"/></a> 
      <a href="https://www.linkedin.com/in/akshayvollala/"  style={{color: '#1DA1F2'}} target="blank"><img style={{ textAlign: "center" }} src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="_thearjun_"  /></a> 
      
      <a href="https://github.com/Akshay-Arjun"  style={{color: '#1DA1F2', height:"30" ,width:"40"}} target="blank"><img style={{ textAlign: "center" }} src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="_thearjun_"  /></a>  
      </li>
  </ul>
  <h3 style={{ textAlign: "left" }}>Download Resume : </h3>
  <a href="https://github.com/Akshay-Arjun/Akshay-Arjun/raw/main/Akshay%20%20Vollala's%20Resume.pdf"  style={{color: '#1DA1F2', height:"30" ,width:"40"}} target="blank"><img style={{ textAlign: "center" }} src="https://img.shields.io/badge/Resume-100000?style=for-the-badge&logo=readme&logoColor=white" alt="_thearjun_"  /></a>  
    </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}