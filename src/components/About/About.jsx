import { Typography } from '@material-tailwind/react';
import { BsDot } from "react-icons/bs";

const About = () => {
  return (
    <div className="space-y-6">
      <Typography variant="h2">Welcome to BookHaven 📚✨</Typography>
      <Typography variant="h3">About Us</Typography>
      <Typography variant="h5">Introduction</Typography>
      <Typography variant="paragraph">
        At BookHaven, we believe that every page turned is an adventure waiting
        to unfold. Our digital shelves are stacked with literary treasures,
        waiting for curious minds to explore. Whether you’re a seasoned
        bibliophile or a fresh-faced reader, this is your sanctuary—a place
        where words come alive.
      </Typography>
      <Typography variant="h3">Meet the Team</Typography>
      <ul className="space-y-4 list-disc pl-3">
        <li className="flex items-center flex-row gap-2">
          <BsDot />
          <Typography variant="h6">Mst Surnaly Akter (Founder) :</Typography>
          <Typography variant="small">
            A dreamer and a lover of stories, Alice envisioned BookHaven as a
            refuge for book enthusiasts.
          </Typography>
        </li>
        <li className="flex items-center flex-row gap-2">
          <BsDot />
          <Typography variant="h6">Ethan Grant (Developer):</Typography>
          <Typography variant="small">
            The wizard behind the code, Ethan weaves the digital threads that
            connect readers to their next favorite book.
          </Typography>
        </li>
        <li className="flex items-center flex-row gap-2">
          <BsDot />
          <Typography variant="h6">Lena Brooks (Content Curator):</Typography>
          <Typography variant="small">
            A wordsmith herself, Lena handpicks each title, ensuring our
            collection spans genres, cultures, and emotions.
          </Typography>
        </li>
      </ul>
      <Typography variant="h3">Our Mission</Typography>
      <Typography variant="paragraph">
        At BookHaven, our mission is to inspire and empower readers worldwide.
        We believe in the power of stories to educate, entertain, and enlighten.
        Our goal is to connect readers with the books that speak to them,
        fostering a deep appreciation for literature and a lifelong love of
        reading. We&apos;re dedicated to curating a diverse collection of books,
        fostering meaningful discussions, and championing literacy initiatives.
      </Typography>

      <Typography variant="paragraph">
        Feel free to explore BookHaven’s virtual shelves. Happy reading! 🌟📖
      </Typography>
    </div>
  );
}

export default About