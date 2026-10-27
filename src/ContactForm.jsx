import { useState } from "react";
import "./App.css";
 
const FORM_ENDPOINT = "https://formspree.io/f/xppzlyrr";
 
const REASONS = [
    "Project Assistance",
    "Resume PDF",
    "Interview",
    "Other",
];
 
export default function ContactForm() {
    const [status, setStatus] = useState("idle");
 
    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("sending");
 
        const form = e.currentTarget;
        const data = new FormData(form);
 
        data.append("_subject", `${data.get("reason")} from ${data.get("name")}`);
 
        try {
            const res = await fetch(FORM_ENDPOINT, {
                method: "POST",
                body: data,
                headers: { Accept: "application/json" },
            });
 
            if (res.ok) {
                form.reset();
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }
 
    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="reason">What is your reason for contact?</label>
            <select id="reason" name="reason" required defaultValue="">
                <option value="" disabled>Choose One</option>
                {REASONS.map((r) => (
                    <option key={r} value={r}>{r}</option>
                ))}
            </select>
 
            <label htmlFor="name">Please provide a name:</label>
            <input id="name" name="name" type="text" autoComplete="name" required />
 
            <label htmlFor="email">Please provide an email to contact:</label>
            <input id="email" name="email" type="email" autoComplete="email" required />
 
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required />
 
            <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" className="hp-field" aria-hidden="true" />
 
            <button type="submit" className="btn btn-dark" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send message"}
            </button>
 
            <p className="form-status" role="status" aria-live="polite">
                {status === "success" && "Thanks! Your message was sent. I'll reply soon."}
                {status === "error" && "Something went wrong. Please try again or email me directly."}
            </p>
        </form>
    );
}