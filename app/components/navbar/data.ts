type navbarsData = {
  navbars: navbar[]
}

type navbar = {
  label: string
  href: string
  id: number
}

let data: navbarsData = {
  navbars: [
    { label: 'About', href: '#about', id: 1 },
    { label: 'Experience', href: '#experience', id: 2 },
    { label: 'Projects', href: '#projects', id: 3 },
    { label: 'Contact', href: '#contact', id: 4 },
  ],
}

export { data }
