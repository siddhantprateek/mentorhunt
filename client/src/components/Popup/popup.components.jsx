
const PopUp = ({togglePopup}) => {
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={togglePopup}>x</span>
            </div>
        </div>
    )
}
export default PopUp;