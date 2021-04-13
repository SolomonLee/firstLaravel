const ConstellationItem = props => {
    const arrData = [props.conclusion, props.love, props.work, props.money];
    const dataItems = arrData.map(data => (
        <section key={data.title}>
            <h6>
                {data.title}
                <small>運勢等級 : {data.level}</small>
            </h6>
            <p>{data.comment}</p>
        </section>
    ));

    return (
        <div className="constellation_item">
            <div className="item_title">
                <img src={props.img} alt={props.name} />
                <p>{props.name}</p>
            </div>
            <div className="item_content">
                <h5>日期 : {props.date}</h5>
                {dataItems}
            </div>
        </div>
    );
};

export default ConstellationItem;
