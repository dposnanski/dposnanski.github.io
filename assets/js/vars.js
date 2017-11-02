var works = [
  {
    title: "El Jardín",
    description: "WordPress Website Design",
    pic: "../assets/img/relaunch.png",
    alt: "WordPress Website Design: El Jardín Vegano",
    web: "jardin.html"
  },
  {
    title: "Qeep",
    description: "App Translation",
    pic: "../assets/img/qeep.png",
    alt: "App Translation: Qeep",
    web: "qeep.html"
  },
  {
    title: "Jobfox",
    description: "App Translation",
    pic: "../assets/img/jobfox.png",
    alt: "App Translation: Jobfox",
    web: "jobfox.html"
  },
  {
    title: "Nocturnalia",
    description: "Something Cool",
    pic: "../assets/img/nocturnalia.png",
    alt: "Web Development: Nocturnalia",
    web: "nocturnalia.html"
  }
];

var services = [
  {
    title: "Translation",
    description: "I specialize in Spanish translation, specifically multimedia content such as websites, videos, software, and video games. If you need subtitling, dubbing, localization, transcreation, or proofreading services, I can help you!",
    button: "Request Quote",
    web: "translation.html",
    startPrice: ""
  },
  {
    title: "Web Development",
    description: "I can help you get an astonishingly cool website. Whether it's for a non-profit project, an e-commerce website, a blog, or a professional website showcasing your skills and services, I guarantee you will love the design!",
    button: "Request Quote",
    web: "webdev.html",
    startPrice: ""
  }
];

var skills = [
  {
    image: "<svg viewBox='0 0 128 128'><path fill='#E44D26' d='M19.037 113.876l-10.005-112.215h109.936l-10.016 112.198-45.019 12.48z'></path><path fill='#F16529' d='M64 116.8l36.378-10.086 8.559-95.878h-44.937z'></path><path fill='#EBEBEB' d='M64 52.455h-18.212l-1.258-14.094h19.47v-13.762h-34.511l.33 3.692 3.382 37.927h30.799zM64 88.198l-.061.017-15.327-4.14-.979-10.975h-13.817l1.928 21.609 28.193 7.826.063-.017z'></path><path fill='#fff' d='M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zM63.952 24.599v13.762h33.244l.276-3.092.628-6.978.329-3.692z'></path></svg>",
    name: "HTML5"
  },
  {
    image: "<svg viewBox='0 0 128 128'><path fill='#1572B6' d='M18.814 114.123l-10.054-112.771h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z'></path><path fill='#33A9DC' d='M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z'></path><path fill='#fff' d='M64.001 51.429h18.302l1.264-14.163h-19.566v-13.831h34.681999999999995l-.332 3.711-3.4 38.114h-30.95v-13.831z'></path><path fill='#EBEBEB' d='M64.083 87.349l-.061.018-15.403-4.159-.985-11.031h-13.882l1.937 21.717 28.331 7.863.063-.018v-14.39z'></path><path fill='#fff' d='M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881h-13.876z'></path><path fill='#EBEBEB' d='M64.048 23.435v13.831000000000001h-33.407999999999994l-.277-3.108-.63-7.012-.331-3.711h34.646zM64.001 51.431v13.831000000000001h-15.209l-.277-3.108-.631-7.012-.33-3.711h16.447z'></path></svg>",
    name: "CSS3"
  },
  {
    image: "<svg viewBox='0 0 128 128'><path fill-rule='evenodd' clip-rule='evenodd' fill='#494949' d='M64.094 126.224c34.275-.052 62.021-27.933 62.021-62.325 0-33.833-27.618-61.697-60.613-62.286-34.652-.618-63.608 27.5-63.617 61.597-.01 35.079 27.612 63.064 62.209 63.014zm-.101-121.594c32.907-.011 59.126 26.725 59.116 60.28-.011 31.679-26.925 58.18-59.092 58.187-32.771.007-59.125-26.563-59.124-59.608.002-32.193 26.766-58.848 59.1-58.859zM39.157 35.896c.538 1.793-.968 2.417-2.569 2.542-1.685.13-3.369.257-5.325.406 6.456 19.234 12.815 38.183 19.325 57.573.464-.759.655-.973.739-1.223 3.574-10.682 7.168-21.357 10.651-32.069.318-.977.16-2.271-.188-3.275-1.843-5.32-4.051-10.524-5.667-15.908-1.105-3.686-2.571-6.071-6.928-5.644-.742.073-1.648-1.524-2.479-2.349 1.005-.6 2.003-1.704 3.017-1.719 8.872-.135 17.747-.135 26.618.008 1.018.017 2.016 1.15 3.021 1.765-.88.804-1.639 2.01-2.668 2.321-1.651.498-3.482.404-5.458.58 6.463 19.225 12.793 38.057 19.349 57.56 2.931-9.736 5.658-18.676 8.31-27.639 2.366-8.001.956-15.473-3.322-22.52-1.286-2.119-2.866-4.175-3.595-6.486-.828-2.629-1.516-5.622-1.077-8.259.745-4.469 4.174-6.688 8.814-7.113-25.392-23.566-65.294-15.13-79.997 10.475 5.66-.261 11.064-.604 16.472-.678 1.022-.013 2.717.851 2.957 1.652zM49.274 113.867c-.118.345-.125.729-.218 1.302 10.943 3.034 21.675 2.815 32.659-.886l-16.78-45.96c-5.37 15.611-10.52 30.575-15.661 45.544zM40.818 111.789l-25.281-69.35c-11.405 22.278-2.729 56.268 25.281 69.35zM117.246 67.227c.802-10.534-2.832-25.119-5.97-27.125-.35 3.875-.106 8.186-1.218 12.114-2.617 9.255-5.817 18.349-8.899 27.468-3.35 9.912-6.832 19.779-10.257 29.666 16.092-9.539 24.935-23.618 26.344-42.123z'></path></svg>",
    name: "WordPress"
  },
  {
    image: "<svg viewBox='0 0 128 128'><path fill='#5B4282' d='M75.701 65.603c-2.334-.768-5.694-.603-10.08-.603h-17.621v23h18.844c2.944 0 5.012-.315 6.203-.535 2.099-.376 3.854-1.104 5.264-1.982 1.409-.876 2.568-2.205 3.478-3.881.908-1.676 1.363-3.637 1.363-5.83 0-2.568-.658-4.54-1.975-6.436-1.316-1.896-3.141-2.965-5.476-3.733zM73.282 55.087c2.317-.688 4.064-1.89 5.239-3.487 1.176-1.598 1.763-3.631 1.763-6.044 0-2.286-.549-4.314-1.646-6.054s-2.662-2.413-4.699-3.056c-2.037-.641-5.53-.446-10.48-.446h-15.459v20h16.587c4.042 0 6.939-.38 8.695-.913zM126 18.625c0-9.182-7.443-16.625-16.625-16.625h-91.75c-9.182 0-16.625 7.443-16.625 16.625v91.75c0 9.182 7.443 16.625 16.625 16.625h91.75c9.182 0 16.625-7.443 16.625-16.625v-91.75zm-35.447 66.12c-1.362 2.773-3.047 4.911-5.052 6.415-2.006 1.504-4.521 2.78-7.544 3.548-3.022.769-6.728 1.292-11.113 1.292h-27.844v-69h27.42c5.264 0 9.485.609 12.665 2.002 3.181 1.395 5.671 3.497 7.474 6.395 1.801 2.898 2.702 5.907 2.702 9.071 0 2.945-.8 5.708-2.397 8.308-1.598 2.602-4.011 4.694-7.237 6.292 4.166 1.222 7.37 3.304 9.61 6.248 2.24 2.945 3.36 6.422 3.36 10.432 0 3.227-.681 6.225-2.044 8.997z'></path></svg>",
    name: "Bootstrap"
  },
  {
    image: "<svg viewBox='0 0 128 128'><path fill='#F0DB4F' d='M1.408 1.408h125.184v125.185h-125.184z'></path><path fill='#323330' d='M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z'></path></svg>",
    name: "JavaScript"
  },
  {
    image: "<svg viewBox='0 0 128 128'><path fill='#0868AC' d='M9.625 32.181c-11.029 15.851-9.656 36.476-1.231 53.32.2.404.41.801.617 1.198l.394.759.246.437.439.786c.262.461.53.92.804 1.379l.459.756c.304.491.615.976.933 1.46l.398.614c.439.655.888 1.309 1.352 1.951l.039.05.228.308c.401.553.814 1.099 1.232 1.639l.464.59c.373.469.752.935 1.138 1.399l.435.52c.518.61 1.047 1.217 1.586 1.812l.033.033.061.068c.527.575 1.066 1.137 1.612 1.699l.517.521c.423.426.853.845 1.287 1.262l.527.5c.58.547 1.166 1.083 1.764 1.607l.028.022.307.262c.527.456 1.063.909 1.603 1.353l.664.529c.441.354.887.702 1.336 1.044l.714.543c.496.365.995.724 1.499 1.075l.546.387.15.107c.478.329.967.646 1.456.963l.63.42c.75.474 1.51.943 2.279 1.396l.63.355c.565.326 1.134.646 1.71.959.312.168.632.327.946.488.407.213.811.429 1.225.636l.283.137.501.242c.641.306 1.287.607 1.94.897l.41.184c.748.327 1.502.641 2.263.941l.551.217c.704.271 1.418.539 2.135.791l.268.093c.787.275 1.581.53 2.381.779l.575.172c.814.245 1.619.538 2.458.693 53.339 9.727 68.833-32.053 68.833-32.053-13.013 16.953-36.111 21.425-57.996 16.446-.829-.187-1.633-.446-2.442-.685l-.609-.185c-.79-.242-1.573-.497-2.352-.765l-.323-.117c-.698-.245-1.387-.504-2.074-.769l-.582-.229c-.752-.297-1.5-.607-2.239-.931l-.447-.198c-.635-.288-1.263-.578-1.889-.879l-.546-.262c-.491-.239-.977-.493-1.461-.743-.324-.171-.654-.332-.975-.51-.592-.317-1.172-.646-1.751-.982l-.591-.33c-.769-.452-1.528-.921-2.28-1.397l-.615-.41c-.545-.351-1.088-.709-1.623-1.079l-.522-.367c-.516-.365-1.027-.734-1.534-1.109l-.679-.514c-.465-.355-.927-.713-1.384-1.082l-.617-.495c-.582-.479-1.156-.959-1.724-1.453l-.189-.159c-.614-.539-1.216-1.092-1.812-1.647l-.511-.491c-.441-.42-.875-.843-1.302-1.277l-.51-.509c-.543-.556-1.076-1.119-1.598-1.69l-.079-.084c-.552-.604-1.092-1.221-1.621-1.844l-.424-.504c-.394-.475-.785-.956-1.167-1.442l-.427-.532c-.459-.596-.908-1.189-1.347-1.794-12.15-16.574-16.516-39.432-6.805-58.204M43.862 18.825c-7.977 11.478-7.543 26.844-1.321 38.983 1.043 2.035 2.216 4.01 3.528 5.889 1.195 1.713 2.52 3.751 4.106 5.127.575.633 1.176 1.251 1.79 1.858l.472.465c.596.578 1.201 1.146 1.828 1.698l.074.064.018.018c.693.608 1.408 1.191 2.135 1.767l.485.378c.729.559 1.472 1.107 2.233 1.631l.065.049c.336.232.678.448 1.019.672l.483.319c.544.349 1.095.689 1.655 1.015l.235.136c.483.278.972.552 1.463.818l.521.271c.339.177.678.358 1.023.53l.155.07c.703.346 1.412.68 2.136.995l.472.194c.579.246 1.164.486 1.75.71l.75.275c.533.198 1.068.378 1.607.559l.727.233c.767.238 1.525.539 2.324.672 41.183 6.823 50.691-24.886 50.691-24.886-8.57 12.343-25.168 18.233-42.879 13.635-.787-.207-1.562-.431-2.333-.674l-.701-.227c-.548-.177-1.092-.365-1.631-.562l-.736-.274c-.592-.228-1.176-.462-1.756-.708l-.473-.2c-.727-.316-1.443-.65-2.148-.999-.363-.177-.72-.364-1.078-.548l-.622-.32c-.458-.248-.914-.506-1.363-.77l-.326-.185c-.558-.325-1.107-.661-1.651-1.008l-.498-.332c-.359-.232-.717-.469-1.069-.707-.759-.524-1.498-1.072-2.226-1.628l-.501-.395c-7.752-6.12-13.898-14.486-16.819-23.971-3.062-9.836-2.402-20.878 2.903-29.84M72.657 8.847c-4.702 6.92-5.164 15.514-1.901 23.156 3.441 8.113 10.491 14.476 18.72 17.495.339.125.679.237 1.022.354l.451.143c.485.152.966.329 1.467.424 22.74 4.394 28.908-11.669 30.549-14.034-5.402 7.779-14.482 9.646-25.623 6.942-.88-.213-1.847-.531-2.695-.832-1.088-.388-2.16-.83-3.201-1.329-1.978-.951-3.864-2.104-5.612-3.424-9.969-7.565-16.162-21.994-9.657-33.745'></path></svg>",
    name: "jQuery"
  }

];

var languages = [
  {
    language: "Spanish",
    image: "../assets/img/icons8-sombrero.png",
    title: "Sombrero"
  },
  {
    language: "English",
    image: "../assets/img/icons8-us-capitol.png",
    title: "US Capitol"
  },
  {
    language: "German",
    image: "../assets/img/icons8-german-shepherd.png",
    title: "German Shepherd"
  },
  {
    language: "Italian",
    image: "../assets/img/icons8-spaghetti.png",
    title: "Spaghetti"
  }
];

var socials = [
  {
    web: "https://facebook.com/dposnanski",
    image: "../assets/img/icons8-facebook.png",
    icon: "fa-facebook",
    label: "Facebook"
  },

  {
    web: "https://linkedin.com/in/dposnanski",
    image: "../assets/img/icons8-linkedin.png",
    icon: "fa-linkedin",
    label: "Linkedin"
  },
  {
    web: "https://github.com/dposnanski",
    image: "../assets/img/icons8-github.png",
    icon: "fa-github",
    label: "Github"
  }
  /*{
    web: "https://twitter.com/dposnanski",
    image: "../assets/img/icons8-twitter-squared.png",
    icon: "fa-twitter",
    label: "Twitter"
  },
  {
    web: "https://instagram.com/dposnanski",
    image: "../assets/img/icons8-instagram.png",
    icon: "fa-instagram",
    label: "Instagram"
  },
  {
    web: "https://youtube.com/c/DeliePosnanski",
    image: "../assets/img/icons8-youtube-filled.png",
    icon: "fa-youtube",
    label: "Youtube"
  },
  {
    web: "https://pinterest.com/dposnanski",
    image: "../assets/img/icons8-pinterest.png",
    icon: "fa-pinterest",
    label: "Pinterest"
  }*/
];

/*var questions = [
  {
    q: "What inspired you to become a web developer?",
    a: "I had made a couple of personal websites back when I was 16 and I really enjoyed it. I remember a lot of sleepless nights playing around with the code trying to make it look exactly how I wanted it to. I studied programming on my last high-school semester but then, I went on to college and studied a completely different thing. I ended up working at Costumer Service, Translation and Tourism related companies. I really liked translation, but I remembered those days when I was a teenager and how passionate I was about making my websites. I had made an online store with Prestashop and then moved it to Wordpress, and I remembered my teenage years, and building websites with passion. So I then decided it was the path I wanted to take!"
  },
  {
    q: "What kind of projects do you like to work on?",
    a: "I like to work on creative, beautiful projects that make the world a better place. Be it making people feel happy through humor, giving people the chance to store and share their memories, informing and educating them, aiding other people, helping animals, you name it!"
  },
  {
    q: "What do you need in order to start working on a project?",
    a: "For translation related services: I would need the document, movie, website or project you need translated and the preferred delivery date. For web development services: I would need to know what kind of website I'd be developing and which content you would like to publish. Is it a photography portfolio website? An online store? A landing page? A blog? If you have an idea of the sections on your website, along with the content and pictures, that would be great!"
  },
  {
    q: "What is your preferred communication method and how often do you keep in touch while working on a project?",
    a: "I find written communication forms to be better, I prefer email and WhatsApp, we can Skype to arrange the details of the project though. I like having everything documented so I can look back, review and double check projects :-) We would arrange milestone projects, and, depending on the project's length and complexity, I'd keep you up to date at least once a week."
  },
  {
    q: "What is your average project turnaround?",
    a: "It really depends on the complexity of the project, but, if you provide me with all the necessary information, pictures and content from the start, it will go a lot faster :-) My estimate is around one week."
  }
];*/
