// Utility function cli()
function cli() {
  let x = document.getElementById("gui");
  let y = document.getElementById("cli");
  let btn = document.getElementById("btn");
  let cn = document.getElementsByClassName("content")[0];
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    btn.innerHTML = "CLI";
    Object.assign(cn.style, { borderStyle: "none" });
  } else {
    x.style.display = "none";
    y.style.display = "block";
    y.style.height = "26vw";
    btn.innerHTML = "GUI";
    Object.assign(cn.style, { borderStyle: "solid" });
  }
}

$(document).ready(function () {
  // Terminal functionalities
  $("#cli").terminal(
    {
      echo: function (args) {
        this.echo(args);
      },
      ls: function () {
        this.echo("blog resume whoogle adguard nextcloud");
      },
      pwd: function () {
        this.echo("Hello, " + args + ". Welcome to this terminal.");
      },
      whoami: function () {
        const currentYear = new Date().getFullYear();
        const birthYear = 1999;
        const age = currentYear - birthYear;
      
        this.echo(
          `Hi there, Welcome to my website. I am Saroj Kumar Mahato, a ${age}-year-old, recent B.Tech graduate in Information Technology from UCET, Hazaribagh. I am a programmer, scripter, Linux/Cloud Enthusiast, Nix Fan, Chess lover and Open-Source Contributor whenever I find the need and have the knowledge to do so. I spend most of my time tweaking my local/cloud systems(currently NixOS everywhere), writing blogs/online posts though not very often. You can find some of my open-source Projects hosted via Github.`
        );
      },
      help: function () {
        this.echo(
          "List of available commands. \n\n[ echo ls pwd whoami help clear ]"
        );
      },
    },
    {
      greetings: 'Hey there!, Welcome to my website. Type "help" to know more.',
    }
  );

  // Text slider using Typed.js
  if ($(".text-slider").length == 1) {
    var typed_strings = $(".text-slider-items").text();
    var typed = new Typed(".text-slider", {
      strings: typed_strings.split(", "),
      typeSpeed: 90,
      loop: true,
      backDelay: 900,
      backSpeed: 30,
    });
  }
});
