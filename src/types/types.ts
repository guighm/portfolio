export type Language = {
    id: number,
    image: string
}

export type Project = {
    id: number,
    name: string,
    type: string,
    link: string,
}

export type ProjectDTO = {
    id: number,
    technologies: string[],
    description: string
}

export type Technology = {
    id: number,
    image: string
}

export type Repo = {
    id: number,
    name: string,
    languages_url: string,
    html_url: string,
    description: string
}