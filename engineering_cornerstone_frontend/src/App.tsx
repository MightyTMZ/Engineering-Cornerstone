import React from 'react';
import './App.css';
// Import NavBar and LandingPage if they are used later
// import NavBar from './components/NavBar';
// import LandingPage from './components/LandingPage';
import Article from './components/Article';

function App() {
  const sampleArticle = {
    title: "Revolutionizing Racing: AWS DeepRacer and its Role in Prompting Engineering Innovation",
    image_url: "https://cdn.hashnode.com/res/hashnode/image/upload/v1609182016503/sScVa1qev.jpeg",
    content: `
        <section>
            <p>In the rapidly evolving landscape of artificial intelligence and machine learning, AWS DeepRacer emerges as a groundbreaking platform that not only ignites the thrill of racing but also plays a pivotal role in prompting engineering innovation. This article explores the significance of AWS DeepRacer in the context of prompt engineering, highlighting its impact on fostering creativity, problem-solving skills, and the development of cutting-edge technologies.
            </p>
        </section>

        <section>
            <h3>The AWS DeepRacer Phenomenon: Racing at the Intersection of AI and Engineering</h3>
            <p>AWS DeepRacer is a fully autonomous 1/18th scale race car designed to bring the excitement of machine learning and reinforcement learning to the masses. What sets DeepRacer apart is its integration with the AWS RoboMaker service, allowing enthusiasts to train their models in a simulated environment before putting their AI creations to the test on a physical race track. This unique combination of racing and AI showcases the intersection of engineering and technology, providing a dynamic platform for innovation.</p>
        </section>
        

        <section>
            <h3>Fostering Creativity and Problem-Solving Skills:</h3>
            <p>AWS DeepRacer serves as a creative playground for engineers and AI enthusiasts alike. Participants are not only challenged to build and train models that can navigate a track autonomously but are also prompted to solve complex problems related to sensor integration, real-time decision-making, and optimization. This prompts engineers to think critically, experiment with diverse solutions, and refine their approaches, fostering a culture of continuous learning and innovation.
            </p>
        </section>

        <!-- Additional sections for other content points -->

        <section>
            <h3>Inspiring the Next Generation of Engineers:</h3>
            <p>AWS DeepRacer serves as an inspiration for the next generation of engineers. ... [Content truncated for brevity]</p>
        </section>

        <footer>
            <p>Article ID: 9</p>
            <p>This article is trending</p>
        </footer>
    `,
    author: "Tom Zhang",
    createdAt: "2023-12-05T22:21:55.309582Z"
  };

  return (
    <div className="container">
      {/*<NavBar />*/}
      {/*<LandingPage />*/}
      <Article {...sampleArticle} />
    </div>
  );
}

export default App;
