const Footer = () => {
  const tmpDiv = document.createElement("div");
  tmpDiv.innerHTML = `<footer
        style="
          background-color: rgb(49, 49, 49);
          color: white;
          height: 100px;
          position: absolute;
          width: 100%;
          bottom: 0;
          z-index: 100;
          text-align: center;
        "
      >
        <p style="font-size: larger">
          Made By
          <a
            style="
              color: black;
              background-color: white;
              padding: 5px;
              border-radius: 10px;
            "
            href="https://www.github.com/c19h3r"
            >C19H3R</a
          >
        </p>
      </footer>`;
  return tmpDiv;
};

export default Footer;
