
export default function Post({ params }: { params: { idPost: string } }) {
  return <div>My Post: {params.idPost}</div>
}