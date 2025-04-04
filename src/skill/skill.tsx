import "./skill.css";

export function Skills() {
  return (
    <div className="skill">
      <h1>
        My <span className="txtskill">Skills :</span>
      </h1>
      <div>
        <div className="title_skill">
          <h2 ><span className="neonfront">Frontend :</span>
            <p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScipt</li>
                <li>React</li>
              </ul>
            </p>
          </h2>
          
          <h2> <span className="neonback">Backend : </span>
            <p>
              <ul className="">
                <li>Node.js</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
              </ul>
            </p>
          </h2>
          <h2><span className="neonTools">Tools : </span>
            <p>
              <ul className="">
                <li>Git</li>
                <li>GitHub</li>
                <li>Postman</li>
                <li>VSCode</li>
                <li>Discord</li>
              </ul>
            </p>
          </h2>
        </div>
      <div>
      </div>
        
        
      </div>
    </div>
  )
}
