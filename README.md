<!DOCTYPE html>
<html lang="en">
    <head>
        <title>My protfolio</title>
        <meta charset="UTF-8">
        <style>
            html{
                scroll-behavior: smooth;
            }
            .lead {
                border: 1px solid black;
                border-radius: 5px;
                border-width: 0px;
                border-style: solid;
                background-color: bisque;
                height: 60px;
            }
            .lead:hover{
                box-shadow: 2px 2px 2px;
                cursor:cell;
            }
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color:antiquewhite;
                scroll-behavior: smooth;
            }
            header{
                position:sticky;
                top:0;
                z-index:1000; 
            }
            .icons{
                background-color: rgb(236, 215, 187);
                display: flex;
                border:0px solid;
                border-radius:5px;
                padding:10px;
                margin-bottom: 50px;
                
               
            }
            .icons a{
                display:flex;
                gap:70px;
                height:50px;
            }
            .home:hover, .about:hover ,.contact:hover ,.project:hover{
                box-shadow: 2px 2px 2px;
                
            }
        button{
            background-color: rgb(132, 129, 129);
            border-radius:5px;
            padding:4px;
            margin:5px
        }
        button:hover{
            background-color: pink;
        }
        .eyelashes{
            padding-top: 10px;
        }
        section {
    scroll-margin-top: 120px;
}
        
        
        #home, #project ,#about, #contact ,#skills,#github{
            display:block;
            border: 0px solid;
            border-radius: 10px;
            background-color: beige;
            margin:10px;
            padding:10px;
            text-align: center;

        }
         .project-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 24px;
        margin:10px;
        border: 0px solid;
        background-color: beige;
      }
      
            

        </style>

    </head>
    <body>
    <header>
        <section class="icons">
        <nav>
    <a>
        <button type="button" onclick="location.href='#home'" class="home">Home</button>
        <button type="button" onclick="location.href='#project'" class="project">Projects</button>
        <button type="button" onclick="location.href='#about'" class="about">About me</button>
        <button type="button" onclick="location.href='#contact'" class="contact">Contact</button>
    </a>
       </nav>

        </section>
    </header>
    <main class="eyelashes">
        <section id="home">
            <h1><bold>My portfolio</bold></h1>
            <h1>Laureen Muthoni</h1>
            <p>Aspiring software developer and a student pursuing bachelors of software development in the KCA university.</p>
            <img src="muthoni.jpeg"  alt="Laureen Muthoni"  width="200">
        </section>
        
        <section id="about">
            <h2>About Me</h2>
            <p>Hello, I'm Laureen, a student at the KCA university pursuing bachelors of software development.</p>
            <p>My interests are coding, web designing and web developing</p>
        </section>
        
        <section id="project">
            <h2>My projects</h2>
            <div class="lead"><p>I have created and designed a website for online shopping of designer clothes.</p></div>
            <button type="button" onclick="location.href='project1.html'">project 1</button>
            <br>
            <div class="lead"><p>In this project i have made a study guide for future develpoers on how to learn about <strong>HTML</strong></p></div>
            <button type="button" onclick="location.href='project2.html'">project 2</button>
            <br>
            <div class="lead"><p>I have also been working on a project that works like a calculator, using python, that has other unique arithmatic operations such as floordivision,modulus and exponent. For now you can only key in not more than two numbers.</p></div>
            <P>It is yet to be completed and i will be adding more features to it in the future.</P>
           <button type="button" onclick="location.href='project3.html'">project 3</button>
           <br>
        </section>
        <section id="github">
         <div class="project-grid" id="projects-container">
          <p>Loading projects...</p>
          </div>
          </section>
        
        <section id="skills">
        <h2>my skills</h2>
            <div class="skill">
                <p>HTML-75%</p>
                <div style="background-color: #ddd; width: 100%; height: 20px;"></div>
                    <div style="background-color: #4CAF50; width: 75%; height: 100%;"></div>
            </div>
            <div class="skill">
                <p>CSS-30%</p>
                <div style="background-color: #ddd; width: 100%; height: 20px;"></div>
                    <div style="background-color: #4CAF50; width: 60%; height: 100%;"></div>
            </div>
            <div class="skill">
                <p>JavaScript-30%</p>
                <div style="background-color: #ddd; width: 100%; height: 20px;"></div>
                    <div style="background-color: #4CAF50; width: 50%; height: 100%;"></div>
            </div>
            <div class="skill">
                <p>Python-70%</p>
                <div style="background-color: #ddd; width: 100%; height: 20px;"></div>
                    <div style="background-color: #4CAF50; width: 70%; height: 100%;"></div>
            </div>
            <div class="skill">
                <p>Java-40%</p>
                <div style="background-color: #ddd; width: 100%; height: 20px;"></div>
                    <div style="background-color: #4CAF50; width: 40%; height: 100%;"></div>
            </div>
        <br>
        <hr>
        <p>Thank you for visiting my portfolio!</p>
        </section>
        
    </main>
    <footer>
        <section id="contact">
            <h2>contact</h2>
            <p>you can contact me at:</p>
            <p> my email <a href="email:kirimi@gmail.com">kirimi@gmail.com</a></p>
            <p>my phone number<a href="0769512305">0769 512 305</a></p>
            <a href="https://github.com/kimireen85-eng">https://github.com/kimireen85-eng</a></p>
        </section>
    </footer>
        <script src="script.js" defer></script>
    </body>
</html>
