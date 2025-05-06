const EmailLink = () => {
  const email = "konyalaanilreddy00@gmail.com";
  const subject = "Hey!";
  const body = `Let's connect and if it's feasible, let's collaborate. 
  
I'd love to hear from you.`;

  return (
    <a
      href={`mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`}
      className="text-white underline"
    >
      Pop me an email
    </a>
  );
};

export default EmailLink;
