import Nav from "../Nav"


const Header = () => {
    return <div>
        <Nav />
        <div>
            <h1 className="text-display_lg font-bold">Display Lg</h1>
            <h2 className="text-headline_md">HeadLine Md</h2>
            <h3 className="text-headline_sm">HeadLine sm</h3>
            <p className="text-title_md">This is  the first medium emphasis text</p>
            <p className="text-title_sm">This is another medium emphasis text</p>
            <p>This is a body text, it is normally very long</p>
            <p className="text-label_md">this is a label text</p>
        </div> 
    </div>
}

export default Header