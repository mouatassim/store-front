import "./Navbar.css";

interface Props {
  showMenue: () => void;
}

const Toggler = ({ showMenue }: Props) => {
  return (
    <a
      href="#"
      className="toggle-button icon--small nav__toggler"
      onClick={showMenue}
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </a>
  );
};

export default Toggler;
