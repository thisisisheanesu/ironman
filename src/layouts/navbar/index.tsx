import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="https://x.com/thisisisheanesu" target="_blank">
            <img src="/icons/twitter-x.svg" alt="Twitter" />
          </a>
        </li>
        <li>
          <a href="https://github.com/thisisisheanesu/ironman" target="_blank">
            <img src="/icons/github.svg" alt="Github" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;