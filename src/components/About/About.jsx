import { Typography } from '@material-tailwind/react';

const About = () => {
  return (
    <div className="space-y-6">
      <h1 className="playfair-display font-bold text-5xl">
        Welcome to BookHaven 📚✨
      </h1>
      <h2 className="playfair-display font-bold text-3xl">About Us</h2>
      <h3 className="playfair-display font-bold text-2xl">Introduction</h3>
      <Typography variant="paragraph">
        At BookHaven, we believe that every page turned is an adventure waiting
        to unfold. Our digital shelves are stacked with literary treasures,
        waiting for curious minds to explore. Whether you’re a seasoned
        bibliophile or a fresh-faced reader, this is your sanctuary—a place
        where words come alive.
      </Typography>
      <h2 className="playfair-display font-bold text-3xl">Meet the Team</h2>
      <ul className="space-y-4 list-disc pl-7">
        <li>
          <b >Mst Surnaly Akter (Founder) :</b>
          <small>
            A dreamer and a lover of stories, Alice envisioned BookHaven as a
            refuge for book enthusiasts.
          </small>
        </li>
        <li>
          <b>Ethan Grant (Developer):</b>
          <small>
            The wizard behind the code, Ethan weaves the digital threads that
            connect readers to their next favorite book.
          </small>
        </li>
        <li>
          <b>Lena Brooks (Content Curator):</b>
          <small>
            A wordsmith herself, Lena handpicks each title, ensuring our
            collection spans genres, cultures, and emotions.
          </small>
        </li>
      </ul>
      <h2 className="playfair-display font-bold text-3xl">Our Mission</h2>
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