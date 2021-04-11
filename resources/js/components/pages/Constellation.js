import ConstellationList from "../combo/ConstellationList";

function Constellation() {
    return (
        <div className="container">
            <section className="constellation_block">
                <div className="block_title">
                    <h1>星座運勢</h1>
                </div>
                <div className="block_content">
                    <ConstellationList />
                </div>
            </section>
        </div>
    );
}

export default Constellation;
