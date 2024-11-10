const ContactSection = () => (
  <section className="h-screen flex items-center justify-center transition-all bg-copper">
    <div className="container text-center">
      <h2 className="text-4xl font-heading mb-4">Kontakt</h2>
      <form className="max-w-lg mx-auto p-8 shadow-lg rounded-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-body">
            Dein Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="font-body w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="font-body block text-lg ">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="font-body block text-lg ">
            Nachricht
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="font-body w-full text-white py-2 rounded-md"
        >
          Senden
        </button>
      </form>
    </div>
  </section>
);

export default ContactSection;
