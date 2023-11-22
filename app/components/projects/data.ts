type projectsData = {
  heading: string
  projects: project[]
}

type project = {
  name: string
  downloadUrl: string
  id: number
  poster: string
}

let data: projectsData = {
  heading: 'PROJECTS',
  projects: [
    { name: '', downloadUrl: '', id: 1, poster: '' },
    { name: '', downloadUrl: '', id: 2, poster: '' },
    { name: '', downloadUrl: '', id: 3, poster: '' },
  ],
}

export { data }
