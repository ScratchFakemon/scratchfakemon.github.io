document.addEventListener("DOMContentLoaded", () => {
  let navbar = document.getElementsByClassName("navbar")[0];
  navbar.innerHTML = `<a href="./">Home</a>
        <a href="link">Link this Site</a>
        <a href="buttonclicker">Button Clicker</a>
        <a href="numguess">Number Guesser</a>
        <a href="friendsites">Friendsites</a>
        `;

  let links = document.getElementsByClassName("links")[0];
  links.innerHTML = `<a href="https://scratch.mit.edu/users/Scratch_Fakemon/">
          <img src="https://scratch.mit.edu/favicon.ico" />Scratch
        </a>
        <a href="https://www.youtube.com/@Scratch_Fakemon">
          <img src="https://www.youtube.com/s/desktop/1ff7e4cf/img/favicon_32x32.png" />YouTube
        </a>
        <a href="https://github.com/ScratchFakemon">
          <img src="https://github.githubassets.com/favicons/favicon-dark.png" />GitHub
        </a>
        <a href="mailto:scratchfakemon@gmail.com">
          <img src="Mail Icon.svg" />Email
        </a>`;

  let head = document.getElementsByTagName("head")[0];
  head.innerHTML += `<link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      rel="icon"
      type="image/x-icon"
      href="https://uploads.scratch.mit.edu/get_image/user/117698316_18x18.png"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Bungee+Tint&family=Jersey+20&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Mona+Sans:ital,wght@0,200..900;1,200..900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css">`;
});
