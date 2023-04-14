function Welcome() {
  return (
    <section className="video">
      <div className="container">
        <h2 className="section__title video-title">WELCOME TO D&M LEASING</h2>
        <h4 className="section__subtitle video__text">
          Find out how easy it is to lease from D&M
        </h4>

        <iframe
          className="video__content"
          width="1000"
          height="500"
          src="https://www.youtube.com/embed/FeEUhbK7Qrw?controls=0"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
export default Welcome;
