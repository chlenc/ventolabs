"use client";

import { useState, useTransition } from "react";

import { Button } from "@/components/site/Button";
import { Locale, siteContent } from "@/lib/site";

export function ContactForm({ locale }: { locale: Locale }) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isPending, startTransition] = useTransition();
  const form = siteContent[locale].ui.form;
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

  return (
    <form
      className="contact-form"
      id="contact-form"
      onSubmit={(event) => {
        event.preventDefault();
        const target = event.currentTarget;
        const formData = new FormData(target);

        startTransition(async () => {
          setStatus("idle");

          try {
            const payload = {
              name: String(formData.get("name") || ""),
              email: String(formData.get("email") || ""),
              company: String(formData.get("company") || ""),
              inquiryType: String(formData.get("inquiryType") || ""),
              details: String(formData.get("details") || ""),
              locale,
            };

            if (endpoint) {
              const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
              });

              if (!response.ok) {
                throw new Error("Submission failed");
              }
            } else {
              const subject = encodeURIComponent(
                `VentoLabs inquiry: ${payload.inquiryType}`,
              );
              const body = encodeURIComponent(
                [
                  `Name: ${payload.name}`,
                  `Email: ${payload.email}`,
                  `Company / role: ${payload.company}`,
                  `Inquiry type: ${payload.inquiryType}`,
                  "",
                  payload.details,
                ].join("\n"),
              );
              window.location.href = `mailto:hello@ventolabs.ai?subject=${subject}&body=${body}`;
            }

            target.reset();
            setStatus("success");
          } catch {
            setStatus("error");
          }
        });
      }}
    >
      <div className="contact-form__grid">
        <label className="field">
          <span>{form.name}</span>
          <input name="name" required type="text" />
        </label>
        <label className="field">
          <span>{form.email}</span>
          <input name="email" required type="email" />
        </label>
        <label className="field">
          <span>{form.company}</span>
          <input name="company" type="text" />
        </label>
        <label className="field">
          <span>{form.inquiryType}</span>
          <select defaultValue={form.types.businessImplementation} name="inquiryType">
            <option>{form.types.businessImplementation}</option>
            <option>{form.types.strategyAudit}</option>
            <option>{form.types.training}</option>
            <option>{form.types.individualHelp}</option>
          </select>
        </label>
      </div>
      <label className="field field--textarea">
        <span>{form.details}</span>
        <textarea
          name="details"
          placeholder={form.placeholderDetails}
          required
          rows={6}
        />
      </label>
      <p className="contact-form__privacy">{form.privacy}</p>
      <div className="contact-form__actions">
        <Button disabled={isPending} label={form.submit} type="submit" />
        {status === "success" ? (
          <p className="form-status is-success">{form.success}</p>
        ) : null}
        {status === "error" ? (
          <p className="form-status is-error">{form.error}</p>
        ) : null}
      </div>
    </form>
  );
}
