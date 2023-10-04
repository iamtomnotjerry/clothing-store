import {BackgroundImage, Body, DirectoryItemContainer} from './directory-item.style.jsx'

const DirectoryItem = ({ category }) => {
    const { imageUrl, id, title  } = category
  return (
    <DirectoryItemContainer>
      <BackgroundImage
        imageUrl={imageUrl}
      />
      <Body className="body">
        <h2>{title}</h2>
        <p>Shop Now </p>
      </Body>
    </DirectoryItemContainer>
  )
}
export default DirectoryItem