import { htmlToJsx } from "../../util/jsx"
import { QuartzComponentConstructor, QuartzComponentProps } from "../types"

function Content({ fileData, tree }: QuartzComponentProps) {
  const content = htmlToJsx(fileData.filePath!, tree)
  const description = fileData.description
  return (
    <>
      {description && <p class="article-description popover-hint">{description}</p>}
      {fileData?.frontmatter?.image && <div className="article-header-wrap">
        <img class="article-header" src={"/recipes/img/" + fileData?.frontmatter?.image}></img>
      </div>}
      <article>{content}</article>
    </>
  )
}

export default (() => Content) satisfies QuartzComponentConstructor
