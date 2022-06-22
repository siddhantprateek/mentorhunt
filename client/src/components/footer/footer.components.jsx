import './footer.styles.css';

const Footer = () => {
    const dt = new Date()
    const year = dt.getFullYear()
    return (
    <div className="footer">
        <div className="footer-container">
            <div className='left-footer'>
                <a href="https://github.com/siddhantprateek/rteach">
                    <img src={`https://img.icons8.com/ios-glyphs/30/000000/github.png`} alt=""/>
                </a>
                
                <p>Maintainer - Siddhant Prateek Mahayanayak</p>
                <p>&#169; All Copyrights Reserved, {year} </p>
            </div>
            <div className="right-footer">
                <p><b>Contributors</b></p>
                <a href="https://github.com/siddhantprateek/rteach/graphs/contributors">
                    <img src="https://contrib.rocks/image?repo=siddhantprateek/rteach" height="30px" alt=""/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer