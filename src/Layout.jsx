const Header = () => {
  return <h1 className="h1">Somali New </h1>
}



const Post = () => {
return <h3> Somali New waxa uu kunso bandhigayaa dhaman waraka kaa qarsoon ee aad jeclaan lahayd inaad ogaato.</h3>
}


const Footer = () => {
  return <p>kor kala soco wixi akhbaar ah</p>
}

const Layout = () => {
  return (
    <>
      <Header />
      <Post />
      <Footer />
    </>
  );
}
export default Layout;