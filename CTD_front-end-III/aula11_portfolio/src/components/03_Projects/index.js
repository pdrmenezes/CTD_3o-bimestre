import React from "react";
import "./style.css"

const data = [
  {
    id: "1",
    name: "Lorem Ipsum",
    link: "https://github.com/brunowbbs/Frontend-III",
    image:
      "https://howedu.com.br/wp-content/uploads/2021/05/Captura-de-Tela-2021-05-06-a%CC%80s-10.21.22-1024x603.png",
  },
  {
    id: "2",
    name: "Lorem Ipsum",
    link: "https://github.com/brunowbbs/Frontend-III",
    image:
      "https://howedu.com.br/wp-content/uploads/2021/05/Captura-de-Tela-2021-05-06-a%CC%80s-10.21.22-1024x603.png",
  },
  {
    id: "3",
    name: "Lorem Ipsum",
    link: "https://github.com/brunowbbs/Frontend-III",
    image:
      "https://howedu.com.br/wp-content/uploads/2021/05/Captura-de-Tela-2021-05-06-a%CC%80s-10.21.22-1024x603.png",
  },
  {
    id: "4",
    name: "Lorem Ipsum",
    link: "https://github.com/brunowbbs/Frontend-III",
    image:
      "https://howedu.com.br/wp-content/uploads/2021/05/Captura-de-Tela-2021-05-06-a%CC%80s-10.21.22-1024x603.png",
  },
  {
    id: "5",
    name: "Lorem Ipsum",
    link: "https://github.com/brunowbbs/Frontend-III",
    image:
      "https://howedu.com.br/wp-content/uploads/2021/05/Captura-de-Tela-2021-05-06-a%CC%80s-10.21.22-1024x603.png",
  },
];

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1 className="title-projects">Projetos Recentes</h1>
      <ul className="list-projects">
        {/* ao invés de projects.image e projects.name, desestruturamos o objeto para que o código das propriedades fique mais clean */}
        {data.map(({ image, name, link }) => {
          return (
            <a href={link}>
              <li className="item-list-projects">
                <img src={image} />
                <p className="project-title">{name}</p>
              </li>
            </a>
          )
        })}
      </ul>

    </div>
  )
}