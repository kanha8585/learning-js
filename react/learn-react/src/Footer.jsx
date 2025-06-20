function Footer() {
    return (
        <>
        <footer className="Footer" style={{textAlign:"center",display:"flex",margin:"auto"}}>
        <div>
            <ul style={{fontSize:"18px",padding:"20px",listStyle:"none",
                backgroundColor:"#ff6600",
                lineHeight:"30px",
                height:"200px",gap:"40px",
                justifyContent:"space-between"}}>
                <li>
                    <a href="/" style={{textDecoration:"none",color:"white"}}>Contact Us</a>
                </li>
                <li>
                    <a href="/" style={{textDecoration:"none",color:"white"}}>Email: support@shopsmart.com</a>
                </li>
                <li>
                    <a href="/" style={{textDecoration:"none",color:"white"}}>Phone: +91-9876543210</a>
                </li>
                <li>
                    <a href="/" style={{textDecoration:"none",color:"white"}}>Address: 123, Main Street, Delhi, India</a>
                </li>
                <li>
                    <a href="/" style={{textDecoration:"none",color:"white"}}>Working Hours: Mon-Sat: 9 AM - 8 PM</a>
                </li>
            </ul>
            
        </div>
           <div>
                <ul>
                    <li>
                        <a href="">About Us</a>
                    </li>
                </ul>
            </div>

               <div>
                <ul>
                    <li>
                        <a href="">Address</a>
                    </li>
                </ul>
            </div>
            </footer>
            </>
        
    )
}

export default Footer;