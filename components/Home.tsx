import { PastorMessage } from "./PastorMessage";
import { About } from "./About";
import { Groups } from "./Groups";
import { Events } from "./Events";
import { Testimonies } from "./Testimonies";
import { Give } from "./Give";
import { Newsletter } from "./Newsletter";

export function Home() {
  return (
    <>
      <div id="home">
        <PastorMessage />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="groups">
        <Groups />
      </div>
      <div id="events">
        <Events />
      </div>
      <div id="testimonies">
        <Testimonies />
      </div>
      <div id="give">
        <Give />
      </div>
      <div id="contact">
        <Newsletter />
      </div>
    </>
  );
}