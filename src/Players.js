import Pics from "./Pics"

export default function Players({players}) {
    return (
        <main className="players_table">
        
        {players.map((player) => {
            const {first_name, last_name, team} = player;
            const teamFullName = team.full_name;
            const teamId = team.id;
            return (
            <>
            <div key={player.id} className="players">
            <h3 >{first_name}, {last_name}</h3>
            <div>
            <div className="team">
            <p>{team.full_name}</p>
            <Pics teamId={teamId}/>
            </div>
            </div>
            </div>
            </>
            )}
        )}         
        </main>
    )
}