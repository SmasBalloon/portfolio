import "./contact.css";
import DiscordWebhook from "discord-webhook-ts";
import { EnvelopeOpenIcon, GitHubLogoIcon, LinkedInLogoIcon, InstagramLogoIcon, DiscordLogoIcon, Link2Icon } from "@radix-ui/react-icons";

import { useState } from "react";
const WEBHOOK_URL =
  "https://discord.com/api/webhooks/1338869320716914772/3f6eryqmk3SyLgPL-bBhrIUBo-4BxZzzUbQfUdX_Z5vDK544n92cOxAg2itbZqJIJxmJ"; // Remplace avec ton URL

export function Contact() {
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const user = "<@682531276078841881>";

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !subject.trim() || !message.trim()) {
      alert("Remplis tous les champs !");
      return;
    }

    const discordClient = new DiscordWebhook(WEBHOOK_URL);

    const requestBody = {
      content: `Nouveau message  ${user}`, // ✅ Mentionne l'utilisateur
      embeds: [
        {
          title: subject, // ✅ Titre = sujet
          description: message, // ✅ Description = message
          fields: [
            {
              name: "📧 Email",
              value: email,
              inline: true,
            },
          ],
          footer: {
            text: "Formulaire de contact",
          },
        },
      ],
    };

    try {
      await discordClient.execute(requestBody);
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("Erreur :", error);
      alert("Échec de l'envoi !");
    }
  };

  return (
    <>
      <div className="bas">
        <div className="lien">
          <h1 className="Contactme">
            Contact <span className="ME">ME!</span>
          </h1>
          <h2>
            <EnvelopeOpenIcon />
            <span className="Mail">
              MAIL :
            </span>
          </h2>
          <a href="mathis.sauvage24750@gmail.com" className="email">
            mathis.sauvage24750@gmail.com
          </a>
          <h2>
            <Link2Icon />
            <span className="Mail">
              Resaux :
            </span>
          </h2>
          <div className="contact">
            <a
              className="github"
              href="https://github.com/SmasBalloon"
              title="GitHub"
            >
              <GitHubLogoIcon width={30} height={30} className="github"/>
            </a>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/mathis-sauvage-4379b7327/"
              title="linkedin"
            >
              <LinkedInLogoIcon width={30} height={30} className="linkedin"/>
            </a>
            <a
              className="Instagram"
              href="https://www.instagram.com/sauvage_math/"
              title="Instagram"
            >
              <InstagramLogoIcon width={30} height={30} className="Instagram" />
            </a>
            <a
              className="discord"
              href="https://discord.com/users/682531276078841881"
              title="discord"
            >
              <DiscordLogoIcon width={30} height={30} className="discord"/>
            </a>
          </div>
        </div>

        <form onSubmit={sendMessage}>
          <input
            value={email}
            type="email"
            id="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            value={subject}
            type="text"
            id="subject"
            placeholder="Enter your Subject"
            onChange={(e) => setSubject(e.target.value)}
          />
          <div className="message">
            <textarea
              value={message}
              id="text"
              placeholder="Enter your Message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
