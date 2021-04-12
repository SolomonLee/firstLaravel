import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    getConstellationsAsync,
    selectConstellationStatus,
    selectConstellationDatas
} from "../../reducers/constellationRedux";

import ConstellationItem from "../ConstellationItem";

const ConstellationList = () => {
    const constellationDatas = useSelector(selectConstellationDatas);
    const constellationStatus = useSelector(selectConstellationStatus);
    const dispatch = useDispatch();
    const [showAll, setShowALl] = useState(false);

    useEffect(() => {
        dispatch(getConstellationsAsync());
    }, []);

    useEffect(() => {
        console.log("useEffect get constellationDatas : ", constellationDatas);
    }, [constellationDatas]);

    const constellationItems = constellationDatas.map(constellationData => (
        <ConstellationItem
            key={constellationData.name}
            name={constellationData.name}
            date={constellationData.date}
            img={constellationData.img}
            conclusion={JSON.parse(constellationData.conclusion)}
            money={JSON.parse(constellationData.money)}
            love={JSON.parse(constellationData.love)}
            work={JSON.parse(constellationData.work)}
        />
    ));

    const handleResearch = () => {
        dispatch(getConstellationsAsync());
    };

    const handleShowAll = () => {
        setShowALl(!showAll);
    };

    return (
        <div
            className="constellation_list_box"
            boxtype={constellationStatus}
            showall={!showAll ? null : ""}
        >
            <div className="box_title">
                <button className="btn btn-info" onClick={handleShowAll}>
                    open all
                </button>
                <button className="btn btn-danger" onClick={handleResearch}>
                    research
                </button>
            </div>
            <div className="box_content">{constellationItems}</div>
            <div className="box_bottom"></div>
        </div>
    );
};

export default ConstellationList;
