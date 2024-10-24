import Link from 'next/link'
interface RepoProps {
  name: string
}
const RepoDirs: React.FC<RepoProps> = async ({ name }) => {
  const username = 'bradtraversy'
  const response = await fetch(
    `https://api.github.com/repos/${username}/${name}/contents`
  )
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const contents = await response.json()
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const dirs = contents.filter((content: any) => content.type === 'dir')

  return (
    <div className="mt-2 ">
      <h3 className="text-xl font-bold">Directories</h3>
      <ul>
        {
          /* eslint-disable @typescript-eslint/no-explicit-any */
          dirs.map((dir: any) => (
            <li key={dir.path}>
              <Link
                className="underline"
                href={`https://github.com/${username}/${name}/tree/master/${dir.path}`}
              >
                {dir.path}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
export default RepoDirs
