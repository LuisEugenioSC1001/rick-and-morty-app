// Definición de las consultas GQL a utilizar en la aplicación

// Trae todos los personajes de rick y morty
export const characters = `query characters($page: Int, $filter: FilterCharacter) {
  characters(page: $page, filter: $filter) {
    info {
      count
      pages
      next
      prev
    }
    results {
      id
      name
      image
    }
  }
}
`;

// Trae un personaje en especifico mediante su id
export const characterById = `query characterById($id: ID!) {
  character(id: $id) {
    id
    name
    image
    status
    species
    type
    gender
    origin {
      id
      name
    }
    location {
      id
      name
    }
    episode{
      id
      name
      episode
    }
  }
}

`;

// Trae un episodio en especifico mediante su id
export const episodeById = `query edpisodeById($id: ID!) {
  episode(id: $id) {
    id
    name
    air_date
    episode
    characters {
      id
      name
      image
    }
  }
}
`;
