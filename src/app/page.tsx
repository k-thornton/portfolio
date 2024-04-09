import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <header>
        <h1>Welcome to My Portfolio</h1>
        <p>{"Hi, I'm [Your Name]. Here's my work and projects."}</p>
      </header>
      <nav>
        <ul>
          <li>
            <Link href="/resume">
              Resume
            </Link>
          </li>
          <li>
            <Link href="/projects">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default Home;
