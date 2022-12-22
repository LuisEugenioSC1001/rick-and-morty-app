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
