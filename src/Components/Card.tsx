interface Props {
    children: React.ReactNode,
    img?: string
}

const Card = ({children, img}: Props) => {
    return (
    <div className="card" style={{width: '18rem' }}>
        {img ? <img src={img} className="card-img-top" alt="..."></img> : ''}
        <div className="card-body">
          {children}
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    )
}

export default Card