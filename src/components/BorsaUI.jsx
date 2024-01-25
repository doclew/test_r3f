import { useDispatch } from "react-redux";
import { setImpColor } from "../reducers/ImpColorSlice";
import { setBaseTexture } from "../reducers/BaseTextureSlice";

export default function BorsaUI() {
  const dispatch = useDispatch();

  function changeToOrange() {
    dispatch(setBaseTexture("/piazzate/COLOR.png"));
  }
  function changeToPattern() {
    dispatch(setBaseTexture("/ripetute/COLOR.jpg"));
  }
  function changeToBlack() {
    dispatch(setImpColor("black"));
  }
  function changeToRed() {
    dispatch(setImpColor("#970c08"));
  }

  function changeToWhite() {
    dispatch(setImpColor("#cccccc"));
  }
  function changeToYellow() {
    dispatch(setImpColor("#d4ab16"));
  }

  return (
    <>
      <div className="ui-cnt">
        <div className="box-cnt">
          <h3>Colore</h3>
          <button id="btn-col1" onClick={changeToOrange}></button>
          <button id="btn-col2" onClick={changeToPattern}></button>
        </div>
        <div className="box-cnt">
          <h3>Impunture</h3>
          <button id="btn-imp1" onClick={changeToRed}></button>
          <button id="btn-imp2" onClick={changeToYellow}></button>
          <button id="btn-imp3" onClick={changeToBlack}></button>
          <button id="btn-imp4" onClick={changeToWhite}></button>
        </div>
      </div>
    </>
  );
}
