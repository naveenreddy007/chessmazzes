"use client";

import { useState } from "react";

export default function ContactPage() {
  const email = "playchessmazes@gmail.com";
  const phone = "9346436368";

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`https://formsubmit.co/ajax/b17ad46eb4fe502f667cbbddf51c6f72`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  }
  
  return (
    <div className="min-h-[85vh] flex flex-col justify-center pt-28 pb-16 sm:pt-36 sm:pb-24">
      <section className="relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10 animate-float-slow" />
        
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-foreground/10 bg-foreground/5 mb-8">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-medium text-foreground/70 tracking-wide uppercase">Contact Us</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-8">
                Let&apos;s talk about <br />
                <span className="gradient-text">Your Chess Journey.</span>
              </h1>
              
              <p className="text-lg text-foreground/50 mb-12 max-w-md leading-relaxed">
                Whether you&apos;re a player looking to improve or an academy seeking AI integration, we&apos;re here to help.
              </p>

              <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
                <div className="space-y-8">
                  <div className="group">
                    <div className="text-xs text-foreground/30 uppercase tracking-[0.2em] font-bold mb-3 group-hover:text-accent transition-colors">Email Us</div>
                    <a href={`mailto:${email}`} className="text-foreground hover:text-accent font-medium text-lg transition-colors break-all">
                      {email}
                    </a>
                  </div>

                  <div className="group">
                    <div className="text-xs text-foreground/30 uppercase tracking-[0.2em] font-bold mb-3 group-hover:text-primary transition-colors">Call Us</div>
                    <a href={`tel:${phone}`} className="text-foreground hover:text-primary font-medium text-lg transition-colors">
                      +91 {phone}
                    </a>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="group">
                    <div className="text-xs text-foreground/30 uppercase tracking-[0.2em] font-bold mb-3 group-hover:text-secondary transition-colors">Headquarters</div>
                    <div className="text-foreground/80 leading-relaxed">
                      Hyderabad, <br />
                      Telangana, India
                    </div>
                  </div>

                  <div className="group">
                    <div className="text-xs text-foreground/30 uppercase tracking-[0.2em] font-bold mb-3 group-hover:text-secondary transition-colors">Branch Office</div>
                    <div className="text-foreground/80 leading-relaxed">
                      Anantapur, <br />
                      Andhra Pradesh, India
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Trust Badge */}
              <div className="mt-16 p-6 rounded-2xl bg-foreground/[0.02] border border-foreground/5 inline-flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald/10 flex items-center justify-center text-emerald">
                  ✓
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">Direct Support</div>
                  <div className="text-xs text-foreground/40">We typically respond within 24 hours</div>
                </div>
              </div>
            </div>

            <div className="glass-card-strong p-8 sm:p-12 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl -z-10" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 blur-3xl -z-10" />
              
              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-emerald/10 text-emerald rounded-full flex items-center justify-center text-3xl mx-auto mb-6 animate-bounce">
                    ✓
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">Message Sent!</h3>
                  <p className="text-foreground/50 mb-8">
                    Thank you for reaching out. We&apos;ve received your message and will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="btn-secondary text-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-foreground mb-2">Send Message</h3>
                    <p className="text-foreground/40">Fill out the form below and we&apos;ll get back to you.</p>
                  </div>
                  
                  <form 
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* FormSubmit Configuration */}
                    <input type="hidden" name="_subject" value="New Contact Form Submission - ChessMazes" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-foreground/50 uppercase tracking-widest ml-1" htmlFor="name">Full Name</label>
                        <input 
                          id="name"
                          name="name"
                          type="text" 
                          required
                          className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all placeholder:text-foreground/20" 
                          placeholder="Garry Kasparov" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-foreground/50 uppercase tracking-widest ml-1" htmlFor="email">Email Address</label>
                        <input 
                          id="email"
                          name="email"
                          type="email" 
                          required
                          className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all placeholder:text-foreground/20" 
                          placeholder="garry@example.com" 
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-foreground/50 uppercase tracking-widest ml-1" htmlFor="phone">Mobile Number</label>
                        <input 
                          id="phone"
                          name="phone"
                          type="tel" 
                          required
                          className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all placeholder:text-foreground/20" 
                          placeholder="+91 93464 36368" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-foreground/50 uppercase tracking-widest ml-1" htmlFor="type">I am a...</label>
                        <div className="relative">
                          <select 
                            id="type"
                            name="user_type"
                            required
                            className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all appearance-none cursor-pointer"
                          >
                            <option value="Player" className="bg-surface">Chess Player</option>
                            <option value="Academy" className="bg-surface">Chess Academy</option>
                            <option value="Other" className="bg-surface">Other</option>
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-foreground/40">
                            ↓
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-foreground/50 uppercase tracking-widest ml-1" htmlFor="message">How can we help?</label>
                      <textarea 
                        id="message"
                        name="message"
                        required
                        rows={4} 
                        className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none placeholder:text-foreground/20" 
                        placeholder="Tell us about your requirements..." 
                      />
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={status === "loading"}
                      className="w-full py-5 rounded-xl font-bold text-white bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-shift hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-1 active:scale-[0.98] group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="flex items-center justify-center gap-2">
                        {status === "loading" ? "Sending..." : "Send Message"}
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </button>

                    {status === "error" && (
                      <p className="text-xs text-rose text-center font-medium">
                        Oops! Something went wrong. Please try again.
                      </p>
                    )}

                    <p className="text-[10px] text-center text-foreground/20 uppercase tracking-[0.2em] font-medium">
                      Secure & Encrypted Submission
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
