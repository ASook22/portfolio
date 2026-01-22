// src/components/Contact.jsx
export default function Contact() {
  const contactMethods = [
    {
      icon: "✉️",
      title: "Email",
      value: "ajsooklal@gmail.com",
      isEmail: true // flag to make this one special
    },
    {
      icon: "🐱",
      title: "GitHub",
      value: "@asook22",
      link: "https://github.com/asook22"
    },
    {
      icon: "🔗",
      title: "LinkedIn",
      value: "Amrit Sooklal",
      link: "https://linkedin.com/in/amrit-sooklal"
    }
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText('ajsooklal@gmail.com');
    alert('Email copied to clipboard: ajsooklal@gmail.com');
    // Optional: You can replace alert with a nicer toast later
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2>Let's Connect</h2>
        <p className="section-intro">
          I'm currently open to new opportunities, collaborations, or just a friendly chat.
        </p>

        <div className="contact-grid">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="contact-card"
              onClick={method.isEmail ? copyEmail : undefined}
              style={method.isEmail ? { cursor: 'pointer' } : {}}
            >
              <span className="contact-icon">{method.icon}</span>
              <h3>{method.title}</h3>
              <p>{method.value}</p>

              {/* For non-email cards, wrap in <a> */}
              {!method.isEmail && method.link && (
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link-overlay"
                  onClick={(e) => e.stopPropagation()} // prevent card click from triggering
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}