export type Movie = {
  id: string
  title: string
  category: string
  likes: number
  dislikes: number
  selected: boolean
}

export type MoviesState = {
  list: Movie[]
  status: 'loading' | 'failed' | 'success'
  categories: string[]
}
