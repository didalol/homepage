

const Footer = () => {
  const today = new Date();
  return (
    <footer>
      <p className="text-center  text-sm  text-slate-600">Copyright &#169; {`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`} Huala. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer;