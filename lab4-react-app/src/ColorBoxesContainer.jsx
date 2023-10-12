import ColorBox from "./colorbox";

export default function ColorBoxesContainer({colors}) {
    const boxes = [];

    for (let i = 0; i < 25; i++) {
        boxes.push(<ColorBox key={i} colorsArray={colors} />);
    }
    return <div className="ColorBoxesContainer">{boxes}</div>
}
