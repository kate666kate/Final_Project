import Head from 'next/head';
import Link from 'next/link';

const Header = (props) => (
    <div>
        <Head>            
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" rel="stylesheet" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.bundle.min.js"></script>
            <title>My next.js app!</title>
        </Head>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/" style={{ color: 'red', fontSize: '20px', lineHeight: '30px' }}>Home</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link href="/about">
                            <a className="nav-link" style={{ color: 'red', fontSize: '20px', lineHeight: '30px' }}>About Us</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/album-tracks">
                            <a className="nav-link" style={{ color: 'red', fontSize: '20px', lineHeight: '30px' }}>Album Tracks</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/artist-albums">
                            <a className="nav-link" style={{ color: 'red', fontSize: '20px', lineHeight: '30px' }}>artist-albums</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/search-artists">
                            <a className="nav-link" style={{ color: 'red', fontSize: '20px', lineHeight: '30px' }}>Search Artists</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/spotify">
                            <a className="nav-link" style={{ color: 'red', fontSize: '20px', lineHeight: '30px' }}>Sign In</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
);

export default Header;