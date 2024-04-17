import Layout from '../components/Layout'
import Link from 'next/link'

const Index = () => (
   <Layout>
    <div className="row mt-5 justify-content-center">
        <h1>Welcome to your music world!</h1>
    </div>
    <div className="row mt-5 justify-content-center">
        <div className="col-md-4">
        <img src="https://lh3.googleusercontent.com/DBCU30ZliSo2iQcwtF9BQCfC7wi5rOkknjSTKF6cLNsmM_Z0R6wNH9x21f4AFofWWKUNDUDjhP9fz2Wm0foeHtmbvKpZKfuZZg=w1200-h630-rj-pp-e365" className="img-responsive" width="300" height="224" />
        </div>
        <div className="col-md-4">
        <img src="https://th.bing.com/th/id/R.68dfe88cf6b31cd31cd47dbdca6532d2?rik=TuGUAjVAyn0S4g&riu=http%3a%2f%2f4.bp.blogspot.com%2f_ElKidml1fME%2fTUO61WssTgI%2fAAAAAAAAAHY%2fwMJeHdiWfgE%2fs1600%2ftaylor%2bswift%2bmakeup.jpg&ehk=BP7FZ3zL9w%2fmLA15UxhnnGPM4WnBxt23wO%2bEuEDQfOs%3d&risl=&pid=ImgRaw&r=0" className="img-responsive" width="300" height="224" />
        </div>
        <div className="col-md-4">
        <img src="https://th.bing.com/th/id/R.8879750cf685a44b075e3f3908a506da?rik=RyzcSYs%2fyJwrEw&riu=http%3a%2f%2fwww.sinaimg.cn%2fdy%2fslidenews%2f5_img%2f2011_38%2f453_6457_533421.jpg&ehk=%2fD29qq3sa1wNQA0uk6%2fk41I%2fY0g4RO8UZwp85wlLaWM%3d&risl=&pid=ImgRaw&r=0" className="img-responsive" width="300" height="224" />
        </div>
        
    </div>
    <div className="row mt-5 justify-content-center">
        <h3>Explore Top Music Powered by your Scrobbles</h3>
    </div>
    <div className="row mt-5 justify-content-center">
        <Link href="/spotify">
            <a className="btn btn-success">Enter</a>
        </Link>
    </div>
   </Layout>
)

export default Index