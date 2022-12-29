
export default function CardPlan(props) {
    <div className="Card-Plan">
        <img aria-hidden="true" alt="" className="card-plan__Icon-Ilustration" src={props.src} />
        <div>
            <h5 className="card-plan__Name-Plan">{props.namePlan}</h5>
            <p className="card-plan__price">{props.price}</p>
        </div>
    </div>
}