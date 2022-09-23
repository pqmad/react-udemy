
export const ItemGrid = ({titulo,url}) => {
    
  return (
    <div className="card">
        <img src={url} alt={titulo}></img>
        <p>{titulo}</p>
    </div>
  )
}
