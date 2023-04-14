function Form() {
  return (
    <div className="container">
      <h2 className="section__title contacts__title">Contacts Us</h2>
      <p className="section__subtitle contacts__text">
        Feel free to contact us with questions, potencial partnerships or media
        inquiries
      </p>
      <form action="#" className="form">
        <input className="form__input" type="text" placeholder="Name" />
        <input className="form__input" type="email" placeholder="E-mail" />
        <textarea className="form__textarea" placeholder="Your text"></textarea>
        <button className="form__btn black-btn" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
export default Form;
