import ContentEditForm from "./ContentEditForm"

function ContentCard({ content, onDeleteContent, onEditContent, currentUser }) {
    const { comment, rating, user } = content

    // DELETES THE COMMENT
    const handleDelete = () => {
        fetch(`/api/contents/${content.id}`, {
            method: 'DELETE',
        })
        onDeleteContent()
        window.location.reload();
    }

    return (
        <div>
            <img src={user.avatar_img} width="250" alt="No Image Uploaded" />
            <p>"{comment}" - {user.username}, {user.location}</p>
            <p>{rating} / 5</p>
            {(currentUser.id === user.id) ? (<><button onClick={handleDelete}>DELETE</button><ContentEditForm onEditContent={onEditContent} contentID={content.id} /></>) : null}
        </div>
    )
}

export default ContentCard