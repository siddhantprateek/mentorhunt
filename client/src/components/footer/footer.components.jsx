import './footer.styles.css';

const Footer = () => {
    const dt = new Date()
    const year = dt.getFullYear()
    return (
    <div className="footer">
        <div className="footer-container">
            <a href="https://github.com/siddhantprateek/rteach">
                <img src={`https://img.icons8.com/ios-glyphs/30/000000/github.png`} alt=""/>
            </a>
            <p>Creator - Siddhant Prateek Mahayanayak</p>
            <p>&#169; All Copyrights Reserved, {year} </p>

        </div>
    </div>
  )
}

export default Footer