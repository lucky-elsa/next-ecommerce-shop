import Link from "next/link"

const Home = () => {
  return (
    <div className="flex flex-col">
      <Link href="/pagination/csr">Pagination - Task 1</Link>
      <Link href="/pagination/1">Pagination - Task 2</Link>
    </div>
  )
}

export default Home
