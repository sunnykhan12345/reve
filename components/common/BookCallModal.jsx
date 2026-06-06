"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import { defaultLocale, translations } from "@/lib/translations";

// Add once in app/layout.jsx or global CSS entry:
// import "react-phone-input-2/lib/style.css";

function getModalText(locale) {
  return (
    translations?.[locale]?.bookCallModal ||
    translations?.[defaultLocale]?.bookCallModal ||
    translations?.en?.bookCallModal
  );
}

function ChevronIcon({ open }) {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      className={`shrink-0 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        d="M0.75 0.75L6.04289 6.04289C6.37623 6.37623 6.54289 6.54289 6.75 6.54289C6.95711 6.54289 7.12377 6.37623 7.45711 6.04289L12.75 0.75"
        stroke="#141B34"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SelectField({ icon, value, placeholder, options = [], onChange }) {
  const normalizedOptions = options.map((option) => {
    if (typeof option === "string") {
      return { value: option, label: option };
    }

    return {
      value: option.value ?? option.label ?? "",
      label: option.label ?? option.value ?? "",
    };
  });

  const selectedOption = normalizedOptions.find(
    (option) => option.value === value,
  );

  return (
    <div className="relative w-full">
      <div className="flex h-[54px] w-full cursor-pointer items-center gap-3 rounded-[48px] bg-[#F6F6F7] px-4 md:h-[56px]">
        <span className="grid h-5 w-5 shrink-0 place-items-center">{icon}</span>

        <span
          className={`min-w-0 flex-1 truncate text-base ${
            selectedOption ? "text-black" : "text-[#7A7C81]"
          }`}
        >
          {selectedOption?.label || placeholder}
        </span>

        <ChevronIcon open={false} />
      </div>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        aria-label={placeholder}
      >
        <option value="">{placeholder}</option>
        {normalizedOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function UserIcon() {
  return (
    <svg width="20" height="19" viewBox="0 0 20 19" fill="none">
      <path
        d="M0.75 17.75C3.08579 15.2726 6.25702 13.75 9.75 13.75C13.243 13.75 16.4142 15.2726 18.75 17.75M14.25 5.25C14.25 7.73528 12.2353 9.75 9.75 9.75C7.26472 9.75 5.25 7.73528 5.25 5.25C5.25 2.76472 7.26472 0.75 9.75 0.75C12.2353 0.75 14.25 2.76472 14.25 5.25Z"
        stroke="#50565D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M2.5 7.5C2.5 5.84315 3.84315 4.5 5.5 4.5H18.5C20.1569 4.5 21.5 5.84315 21.5 7.5V16.5C21.5 18.1569 20.1569 19.5 18.5 19.5H5.5C3.84315 19.5 2.5 18.1569 2.5 16.5V7.5Z"
        stroke="#50565D"
        strokeWidth="1.5"
      />
      <path
        d="M4.5 7L10.5858 12.0715C11.4054 12.7545 12.5946 12.7545 13.4142 12.0715L19.5 7"
        stroke="#50565D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServiceIcon() {
  return (
    <svg width="21" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7Z"
        stroke="#50565D"
        strokeWidth="1.5"
      />
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1 .6 1.65 1.65 0 0 0-.4 1.08V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09A1.65 1.65 0 0 0 15 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.2.61.76 1 1.4 1H21a2 2 0 1 1 0 4h-.09A1.65 1.65 0 0 0 19.4 15Z"
        stroke="#50565D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CountryIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z"
        stroke="#50565D"
        strokeWidth="1.5"
      />
      <path
        d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z"
        stroke="#50565D"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function BusinessIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 21V7.8C4 6.11984 4 5.27976 4.32698 4.63803C4.6146 4.07354 5.07354 3.6146 5.63803 3.32698C6.27976 3 7.11984 3 8.8 3H15.2C16.8802 3 17.7202 3 18.362 3.32698C18.9265 3.6146 19.3854 4.07354 19.673 4.63803C20 5.27976 20 6.11984 20 7.8V21"
        stroke="#50565D"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M2.75 21H21.25M8 8H10M14 8H16M8 12H10M14 12H16M9 21V16.8C9 16.52 9 16.38 9.0545 16.273C9.10243 16.1789 9.17892 16.1024 9.273 16.0545C9.37996 16 9.51997 16 9.8 16H14.2C14.48 16 14.62 16 14.727 16.0545C14.8211 16.1024 14.8976 16.1789 14.9455 16.273C15 16.38 15 16.52 15 16.8V21"
        stroke="#50565D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BookCallModal({
  open,
  onClose,
  locale = defaultLocale,
}) {
  const t = getModalText(locale);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    country: "",
    businessDescription: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [openSelect, setOpenSelect] = useState(null);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.classList.add("overflow-hidden");

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("overflow-hidden");
    };
  }, [open, onClose]);

  if (!open || !t) return null;

  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = t.errors.nameRequired;

    if (!form.email.trim()) {
      nextErrors.email = t.errors.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = t.errors.emailInvalid;
    }

    if (!form.phone.trim()) {
      nextErrors.phone = t.errors.phoneRequired;
    } else if (form.phone.replace(/\D/g, "").length < 7) {
      nextErrors.phone = t.errors.phoneInvalid;
    }

    if (!form.service) nextErrors.service = t.errors.serviceRequired;
    if (!form.country) nextErrors.country = t.errors.countryRequired;

    if (!form.businessDescription.trim()) {
      nextErrors.businessDescription = t.errors.businessRequired;
    } else if (form.businessDescription.trim().length < 10) {
      nextErrors.businessDescription = t.errors.businessMin;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      country: "",
      businessDescription: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    setSuccess(true);
    resetForm();

    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 2200);
  };

  return (
    <>
      <style>{`
        .book-call-phone.react-tel-input {
          height: 100%;
          width: 100%;
          font-family: inherit;
        }

        .book-call-phone .special-label {
          display: none !important;
        }

        .book-call-phone .form-control {
          height: 100% !important;
          width: 100% !important;
          border: 0 !important;
          border-radius: 48px !important;
          background: transparent !important;
          padding-left: 64px !important;
          padding-right: 16px !important;
          color: #000 !important;
          font-size: 16px !important;
          box-shadow: none !important;
          outline: none !important;
        }

        .book-call-phone .form-control::placeholder {
          color: #7A7C81 !important;
        }

        .book-call-phone .flag-dropdown,
        .book-call-phone .flag-dropdown.open {
          width: 54px !important;
          border: 0 !important;
          border-radius: 48px 0 0 48px !important;
          background: transparent !important;
        }

        .book-call-phone .selected-flag,
        .book-call-phone .selected-flag:hover,
        .book-call-phone .selected-flag:focus,
        .book-call-phone .flag-dropdown.open .selected-flag {
          width: 54px !important;
          border-radius: 48px 0 0 48px !important;
          background: transparent !important;
          box-shadow: none !important;
          outline: none !important;
        }

        .book-call-phone .selected-flag .flag {
          left: 18px !important;
        }

        .book-call-phone .selected-flag .arrow {
          left: 28px !important;
          border-top-color: #50565D !important;
        }

        .book-call-phone .selected-flag .arrow.up {
          border-bottom-color: #50565D !important;
        }

        .book-call-phone .country-list {
          left: 0 !important;
          top: calc(100% + 8px) !important;
          width: 360px !important;
          max-width: calc(100vw - 48px) !important;
          max-height: 230px !important;
          margin: 0 !important;
          padding: 8px !important;
          border: 1px solid #ECECEC !important;
          border-radius: 18px !important;
          background: #fff !important;
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.14) !important;
          overflow-x: hidden !important;
          z-index: 9999 !important;
        }

        .custom-select-open .book-call-phone .country-list {
          display: none !important;
        }

        .book-call-phone .country-list .search {
          margin: 0 0 6px !important;
          padding: 0 !important;
          background: #fff !important;
        }

        .book-call-phone .country-list .search-box {
          width: 100% !important;
          height: 40px !important;
          margin: 0 !important;
          padding: 0 14px !important;
          border: 1px solid #E5E5E5 !important;
          border-radius: 12px !important;
          color: #000 !important;
          font-size: 14px !important;
          outline: none !important;
        }

        .book-call-phone .country-list .country {
          min-height: 40px !important;
          margin: 0 !important;
          padding: 10px 12px !important;
          border-radius: 12px !important;
          color: #50565D !important;
          font-size: 14px !important;
          line-height: 1.25 !important;
        }

        .book-call-phone .country-list .country .flag {
          margin-right: 10px !important;
        }

        .book-call-phone .country-list .country.highlight,
        .book-call-phone .country-list .country:hover {
          background: #F6F6F7 !important;
          color: #000 !important;
        }
      `}</style>

      <div className="fixed inset-0 z-[999] grid place-items-center overflow-y-auto px-4 py-4">
        {" "}
        <button
          type="button"
          aria-label={t.close}
          onClick={onClose}
          className="fixed inset-0 bg-black/30 backdrop-blur-[6px]"
        />
        <div className="relative z-10 grid w-full max-w-[936px] mx-auto max-h-[90vh] overflow-y-auto rounded-[16px] bg-white p-4 shadow-[0_24px_80px_rgba(0,0,0,0.18)] md:grid-cols-[1fr_1fr] md:p-6">
          {" "}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 z-[400] grid h-6 w-6 cursor-pointer place-items-center rounded-full bg-[#E5E5E5] text-sm text-black shadow-sm transition hover:bg-[#F6F6F6]"
            aria-label={t.close}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M5 3.88906L8.88906 0L10 1.11094L6.11094 5L10 8.88906L8.88906 10L5 6.11094L1.11094 10L0 8.88906L3.88906 5L0 1.11094L1.11094 0L5 3.88906Z"
                fill="black"
              />
            </svg>
          </button>
          <div className="relative hidden min-h-full overflow-hidden rounded-[12px] md:block">
            <Image
              src="/images/contact.png"
              alt={t.imageAlt}
              fill
              sizes="420px"
              className="object-cover"
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="form-scroll! relative z-20 flex flex-col overflow-visible px-1 py-1 md:px-6 md:pr-2"
          >
            <h2 className="max-w-[330px] text-[26px] font-bold leading-[1.05] tracking-[-0.03em] text-black sm:text-[30px]">
              {t.title}
            </h2>

            <p className="mt-3 text-sm leading-none text-[#50565D]">
              {t.subtitle}
            </p>

            <div className="mt-6 space-y-3 md:mt-7">
              <div>
                <div className="flex h-[54px] items-center gap-3 rounded-[48px] bg-[#F6F6F7] px-4 md:h-[56px]">
                  <UserIcon />
                  <input
                    type="text"
                    value={form.name}
                    onChange={(event) =>
                      updateField("name", event.target.value)
                    }
                    placeholder={t.fullName}
                    className="h-full w-full bg-transparent text-base text-black outline-none placeholder:text-[#7A7C81]"
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 px-4 text-xs text-reve-red">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <div className="flex h-[54px] items-center gap-3 rounded-[48px] bg-[#F6F6F7] px-4 md:h-[56px]">
                  <EmailIcon />
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) =>
                      updateField("email", event.target.value)
                    }
                    placeholder={t.email}
                    className="h-full w-full bg-transparent text-base text-black outline-none placeholder:text-[#7A7C81]"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 px-4 text-xs text-reve-red">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="relative z-[250]">
                <div
                  className="h-[54px] rounded-[48px] bg-[#F6F6F7] md:h-[56px]"
                  onMouseDown={() => setOpenSelect(null)}
                >
                  <PhoneInput
                    country="ae"
                    value={form.phone}
                    onChange={(value) => updateField("phone", value)}
                    enableSearch
                    disableSearchIcon
                    countryCodeEditable={false}
                    searchPlaceholder={t.searchCountry}
                    placeholder={t.phoneNumber}
                    preferredCountries={[
                      "ae",
                      "sa",
                      "qa",
                      "kw",
                      "om",
                      "bh",
                      "pk",
                      "in",
                      "gb",
                      "us",
                    ]}
                    inputProps={{
                      name: "phone",
                      required: true,
                      autoComplete: "tel",
                    }}
                    containerClass="book-call-phone !h-full !w-full"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 px-4 text-xs text-reve-red">
                    {errors.phone}
                  </p>
                )}
              </div>
              <div className="relative z-[220]">
                <SelectField
                  icon={<ServiceIcon />}
                  value={form.service}
                  placeholder={t.service}
                  options={t.serviceOptions}
                  onChange={(value) => updateField("service", value)}
                />
                {errors.service && (
                  <p className="mt-1 px-4 text-xs text-reve-red">
                    {errors.service}
                  </p>
                )}
              </div>

              <div className="relative z-[210]">
                <SelectField
                  icon={<CountryIcon />}
                  value={form.country}
                  placeholder={t.country}
                  options={t.countryOptions}
                  onChange={(value) => updateField("country", value)}
                />
                {errors.country && (
                  <p className="mt-1 px-4 text-xs text-reve-red">
                    {errors.country}
                  </p>
                )}
              </div>

              <div>
                <div className="flex h-[76px] items-start gap-3 rounded-[28px] bg-[#F6F6F7] px-4 py-4 md:h-[82px]">
                  <BusinessIcon />
                  <textarea
                    value={form.businessDescription}
                    onChange={(event) =>
                      updateField("businessDescription", event.target.value)
                    }
                    placeholder={t.describeBusiness}
                    rows={2}
                    className="h-full w-full resize-none bg-transparent text-base leading-[1.35] text-black outline-none placeholder:text-[#7A7C81]"
                  />
                </div>
                {errors.businessDescription && (
                  <p className="mt-1 px-4 text-xs text-reve-red">
                    {errors.businessDescription}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-5 flex justify-end md:mt-6">
              <button
                type="submit"
                className="flex h-[54px] min-w-[150px] cursor-pointer items-center justify-between gap-4 rounded-[48px] bg-reve-red px-6 text-base font-medium text-white transition hover:bg-black md:h-[56px]"
              >
                {t.submit}
                <span className="grid h-8 w-8 place-items-center rounded-[40px] bg-white text-reve-red">
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                    <path
                      d="M15.75 5.74988L0.75 5.74988"
                      stroke="#E23022"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.75 0.75L16.0429 5.04289C16.3762 5.37623 16.5429 5.54289 16.5429 5.75C16.5429 5.95711 16.3762 6.12377 16.0429 6.45711L11.75 10.75"
                      stroke="#E23022"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>
          {success && (
            <div className="absolute inset-0 z-[500] grid place-items-center bg-white/90 px-6 text-center backdrop-blur-sm">
              <div className="rounded-[18px] bg-white px-8 py-7 shadow-soft">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#E9FBEF] text-2xl text-green-600">
                  ✓
                </div>
                <h3 className="mt-4 text-2xl font-bold text-black">
                  {t.successTitle}
                </h3>
                <p className="mt-2 max-w-[320px] text-base leading-[1.5] text-[#50565D]">
                  {t.successMessage}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
