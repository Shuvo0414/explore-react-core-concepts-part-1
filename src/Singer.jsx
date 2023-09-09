export default function Singer ({singer}) {
    return (
        <div>
            <h3>ID: {singer.id}</h3>
            <h4>Singer: {singer.name}</h4>
            <p>Age: {singer.age}</p>
        </div>
    )
}