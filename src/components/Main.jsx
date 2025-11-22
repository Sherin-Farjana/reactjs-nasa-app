export default function Main(props) {
    const { data } = props

    console.log("Sherin:", data)  // <-- Works!

    return (
        <div className="imgContainer">
            <img 
                src={data.hdurl || data.url}
                alt={data.title || "bg-img"}
                className="bgImage"
            />
        </div>
    )
}
