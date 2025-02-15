export const Contact = () => {
  const handleformsubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  }
  
  
    return (


      
        <section className="section-contact">
            <h2 className="contact-title">Contact Us</h2>

        <div className="contact-wrapper">
            <form action={handleformsubmit}>

        <input type="text" 
        required
        autoComplete="false"
        placeholder="Enter your name"
        name="username"
         />

        <input className="form-control"
        type="email" 
        required
        autoComplete="false"
        placeholder="Enter your email"
        name="email"
         />


         <textarea className="form-control" rows="10"
         placeholder="Enter your message"
         name="message"
         required
         autoComplete="false"></textarea>

        <button type="submit">send</button>

            </form>
            </div>

        </section>

       
    )
}