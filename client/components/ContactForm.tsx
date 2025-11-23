import { useEffect, useState } from "react";
import AOS from "aos";
import { useForm } from "react-hook-form";
import { portfolioData } from "@/data/portfolioData";
import { Send, Mail, Phone, MapPin, CheckCircle } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      // EmailJS integration
      // To use this, you need to:
      // 1. Install EmailJS: npm install @emailjs/browser
      // 2. Initialize with your service ID, template ID, and public key from https://www.emailjs.com
      // 3. Uncomment the code below and replace with your credentials

      // import emailjs from "@emailjs/browser";
      // emailjs.init("YOUR_PUBLIC_KEY");

      // const templateParams = {
      //   to_email: portfolioData.email,
      //   from_name: data.name,
      //   from_email: data.email,
      //   message: data.message,
      // };

      // await emailjs.send(
      //   "YOUR_SERVICE_ID",
      //   "YOUR_TEMPLATE_ID",
      //   templateParams
      // );

      // For now, simulate successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError("Failed to send message. Please try again.");
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div
          data-aos="fade-up"
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full" />
          <p className="text-foreground text-lg opacity-80 max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </div>

        {/* </div><div className="grid md:grid-cols-3 gap-8 mb-12"> */}
          {/* Contact Info Cards
          <div
            data-aos="fade-up"
            className="bg-secondary dark:bg-slate-900 p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail size={24} />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-foreground opacity-80 break-all">
              {portfolioData.email}
            </p>
          </div> */}

          {/* Phone card commented out since portfolioData.phone is not defined */}
          {/* <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-secondary dark:bg-slate-900 p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone size={24} />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-foreground opacity-80">{portfolioData.phone}</p>
          </div> */}

          {/* <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-secondary dark:bg-slate-900 p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Location</h3>
            <p className="text-foreground opacity-80">{portfolioData.location}</p>
          </div>
        </div> */}

        {/* Contact Form */}
        <div data-aos="fade-up" className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-secondary dark:bg-slate-900 p-8 rounded-xl shadow-lg space-y-6"
          >
            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Full Name
              </label>
              <input
                type="text"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
                placeholder="Ginta Sabilr"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-border text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                placeholder="gintasabilr@example.com"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-border text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Message
              </label>
              <textarea
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
                placeholder="Your message here..."
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-border text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              {errors.message && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </span>
              )}
            </div>

            {/* Success Message */}
            {submitSuccess && (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 flex items-center gap-3">
                <CheckCircle className="text-green-600 dark:text-green-400" />
                <span className="text-green-700 dark:text-green-300">
                  Message sent successfully! I'll get back to you soon.
                </span>
              </div>
            )}

            {/* Error Message */}
            {submitError && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <p className="text-red-700 dark:text-red-300">{submitError}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:opacity-90 disabled:opacity-50 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
