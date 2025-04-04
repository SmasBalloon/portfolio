import "./first.css"
import { DiscordLogoIcon, GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
export function First() {
  const screenHeight = window.innerHeight;
  
  var style = {
    height: screenHeight + "px"
  };

  return (
    <>
      <div className="first" style={style}>
        <div className="first__container">
          <h1 className="first__title">
            Hello, I'm 
            <span className="first__name">
              SAUVAGE MATHIS
            </span>
          </h1>
          <h2 className="first__subtitle">
            I'm a 
            <span className="first__subtitle--bold">
              IT Student
            </span>
          </h2>
          <div className="contact">
            <a className="github" href="https://github.com/SmasBalloon" title="GitHub">
              <GitHubLogoIcon width={30} height={30} className="github" />
            </a>
            <a className="linkedin" href="https://www.linkedin.com/in/mathis-sauvage-4379b7327/" title="linkedin">
              <LinkedInLogoIcon width={30} height={30} className="linkedin"/>
            </a>
            <a className="Instagram" href="https://www.instagram.com/sauvage_math/" title="Instagram">
              <InstagramLogoIcon width={30} height={30} className="Instagram"/>
            </a>
            <a className="discord" href="https://discord.com/users/682531276078841881" title="discord">
              <DiscordLogoIcon width={30} height={30} className="discord"/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}