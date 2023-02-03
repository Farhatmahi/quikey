const Footer = () => {
  return (
    <footer className="container mx-auto px-4 md:px-0">
      <div class="footer-cta mt-44">
        <h2 class="text-3xl mb-5">Get in touch!</h2>
        <form action="mail.php" method="POST">
          <input type="text" placeholder="Your Email" name="email" />
          <i class="fa-solid fa-paper-plane" onclick="this.form.submit()"></i>
          <FaPaperPlane />
          <img class="mt-2" src="./assets/img/home/Line 5.png" alt="" />
        </form >
      </div>
    </footer>
  );
};

export default Footer;
