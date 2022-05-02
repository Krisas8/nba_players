

export default function Pics ({teamId}) {
    return (
        <>
        <img src={require(`./memory_images/${teamId}.gif`)} />
        </>
    )
}