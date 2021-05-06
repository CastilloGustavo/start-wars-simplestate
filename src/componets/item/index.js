import './styles.scss';

const ItemPlanet = (props) => {
    const { item } = props;

    return(
        <div className="div_main_item_planet">
            <h4>{item.name}</h4>
        </div>
    )
}

export default ItemPlanet;

