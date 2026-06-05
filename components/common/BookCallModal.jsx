"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const services = [
  "Business Setup",
  "Project Management",
  "Marketing 360",
  "Banking & Finance",
];

const countries = [
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Oman",
  "Bahrain",
  "India",
  "Pakistan",
  "United Kingdom",
  "United States",
];

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

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 9C5 5.70017 5 4.05025 6.02513 3.02513C7.05025 2 8.70017 2 12 2C15.2998 2 16.9497 2 17.9749 3.02513C19 4.05025 19 5.70017 19 9V15C19 18.2998 19 19.9497 17.9749 20.9749C16.9497 22 15.2998 22 12 22C8.70017 22 7.05025 22 6.02513 20.9749C5 19.9497 5 18.2998 5 15V9Z"
        stroke="#50565D"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M11 19H13"
        stroke="#50565D"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ServiceIcon() {
  return (
    <svg
      width="21"
      height="22"
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.754159 14.3822C0.788116 14.059 1.02233 13.7985 1.49076 13.2776L2.52183 12.1249C2.77386 11.8058 2.95271 11.25 2.95271 10.7498C2.95271 10.25 2.7738 9.69404 2.5218 9.37501L1.49076 8.22231C1.02233 7.70137 0.788114 7.4409 0.754157 7.11768C0.720203 6.79446 0.895156 6.49083 1.24507 5.88358L1.73865 5.02698C2.11195 4.37915 2.29859 4.05523 2.61617 3.92607C2.93375 3.7969 3.29291 3.89883 4.01125 4.10267L5.23148 4.44637C5.69009 4.55212 6.17124 4.49213 6.58999 4.27698L6.92687 4.08261C7.28595 3.85262 7.56215 3.51352 7.71503 3.11493L8.04899 2.11754C8.26856 1.45753 8.37835 1.12752 8.63973 0.938758C8.9011 0.75 9.24828 0.75 9.94264 0.75H11.0574C11.7518 0.75 12.099 0.75 12.3603 0.938758C12.6217 1.12752 12.7315 1.45753 12.9511 2.11754L13.285 3.11493C13.4379 3.51352 13.7141 3.85262 14.0732 4.08261L14.4101 4.27698C14.8288 4.49213 15.31 4.55212 15.7686 4.44637L16.9888 4.10267C17.7071 3.89883 18.0663 3.7969 18.3839 3.92607C18.7015 4.05523 18.8881 4.37915 19.2614 5.02698L19.755 5.88358C20.1049 6.49083 20.2798 6.79446 20.2459 7.11768C20.2119 7.4409 19.9777 7.70137 19.5093 8.22231L18.4782 9.37501C18.2263 9.69404 18.0473 10.25 18.0473 10.7498C18.0473 11.25 18.2262 11.8058 18.4782 12.1249L19.5093 13.2776C19.9777 13.7985 20.2119 14.059 20.2459 14.3822C20.2798 14.7055 20.1049 15.0091 19.755 15.6163L19.2614 16.4729C18.8881 17.1207 18.7015 17.4447 18.3839 17.5738C18.0663 17.703 17.7071 17.6011 16.9888 17.3972L15.7686 17.0535C15.3099 16.9477 14.8287 17.0078 14.4099 17.223L14.0731 17.4174C13.714 17.6474 13.4379 17.9864 13.2851 18.385L12.9511 19.3825C12.7315 20.0425 12.6217 20.3725 12.3603 20.5612C12.099 20.75 11.7518 20.75 11.0574 20.75H9.94264C9.24828 20.75 8.9011 20.75 8.63973 20.5612C8.37835 20.3725 8.26856 20.0425 8.04899 19.3825"
        stroke="#50565D"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M13.9689 14.1783L14.4992 14.7087V14.7087L13.9689 14.1783ZM14.7498 9.4006L13.9998 9.39738V9.4006H14.7498ZM14.0835 9.12322L14.6137 9.65366V9.65366L14.0835 9.12322ZM12.2267 10.9792L11.6965 10.4487V10.4487L12.2267 10.9792ZM10.5203 10.9791L11.0505 10.4487L10.5203 10.9791ZM7.32184 7.53095L7.85213 8.06132V8.06132L7.32184 7.53095ZM12.1003 6.75018V7.50019L12.1035 7.50018L12.1003 6.75018ZM12.3777 7.41638L12.9081 7.94669L12.9081 7.94668L12.3777 7.41638ZM10.5215 9.27278L9.99114 8.74247L9.99113 8.74248L10.5215 9.27278ZM1.31682 17.4463L1.84715 17.9767L1.84716 17.9767L1.31682 17.4463ZM4.05366 20.1832L4.58399 20.7135L4.58403 20.7135L4.05366 20.1832ZM6.53983 11.3947L5.78984 11.3928L6.53983 11.3947ZM5.95389 12.809L6.48424 13.3393L5.95389 12.809ZM6.46217 12.1937L5.76962 11.9059L6.46217 12.1937ZM10.1044 14.9602L10.1063 15.7102L10.1044 14.9602ZM8.68994 15.5462L8.15957 15.016L8.68994 15.5462ZM9.30524 15.0378L9.01732 14.3453L9.30524 15.0378ZM10.1044 14.9602L10.1063 15.7102C11.0419 15.7078 11.888 15.692 12.5977 15.5751C13.3135 15.4572 13.9852 15.2226 14.4992 14.7087L13.9689 14.1783L13.4386 13.6479C13.2388 13.8477 12.9206 14.0017 12.3538 14.0951C11.7809 14.1894 11.0517 14.2078 10.1025 14.2102L10.1044 14.9602ZM13.9689 14.1783L14.4992 14.7087C14.7207 14.4872 14.9305 14.2524 15.0929 13.9541C15.2585 13.6502 15.3513 13.3249 15.4067 12.9441C15.5104 12.2324 15.4998 11.1632 15.4998 9.4006H14.7498H13.9998C13.9998 11.2426 14.0057 12.1554 13.9224 12.728C13.8843 12.9893 13.8328 13.1317 13.7756 13.2366C13.7154 13.3473 13.6241 13.4625 13.4386 13.6479L13.9689 14.1783ZM14.7498 9.4006L15.4998 9.40381C15.5042 8.38432 14.2722 7.87413 13.5533 8.59277L14.0835 9.12322L14.6137 9.65366C14.3875 9.87973 13.9984 9.72018 13.9998 9.39738L14.7498 9.4006ZM14.0835 9.12322L13.5533 8.59277L11.6965 10.4487L12.2267 10.9792L12.757 11.5096L14.6137 9.65366L14.0835 9.12322ZM12.2267 10.9792L11.6965 10.4487C11.5181 10.627 11.2289 10.627 11.0505 10.4487L10.5203 10.9791L9.98997 11.5094C10.754 12.2734 11.9928 12.2735 12.757 11.5096L12.2267 10.9792ZM6.53983 11.3947L7.28983 11.3966C7.29225 10.448 7.31057 9.7189 7.40498 9.14602C7.49838 8.57923 7.65234 8.26107 7.85213 8.06132L7.32184 7.53095L6.79155 7.00057C6.27753 7.51451 6.04289 8.18638 5.92494 8.90212C5.808 9.61178 5.79222 10.4578 5.78984 11.3928L6.53983 11.3947ZM7.32184 7.53095L7.85213 8.06132C8.03757 7.87591 8.1528 7.78463 8.2635 7.72435C8.36847 7.66719 8.51095 7.61565 8.77234 7.57761C9.34502 7.49425 10.258 7.50018 12.1003 7.50018V6.75018V6.00018C10.3374 6.00018 9.2681 5.98964 8.5563 6.09325C8.17545 6.14868 7.85015 6.24147 7.54618 6.40699C7.24792 6.56939 7.01303 6.77913 6.79155 7.00057L7.32184 7.53095ZM12.1003 6.75018L12.1035 7.50018C11.7813 7.50156 11.6208 7.11264 11.8474 6.88608L12.3777 7.41638L12.9081 7.94668C13.6273 7.22742 13.1162 5.99583 12.0971 6.00019L12.1003 6.75018ZM12.3777 7.41638L11.8474 6.88607L9.99114 8.74247L10.5215 9.27278L11.0518 9.80309L12.9081 7.94669L12.3777 7.41638ZM10.5215 9.27278L9.99113 8.74248C9.22818 9.5055 9.22473 10.7443 9.98997 11.5094L10.5203 10.9791L11.0505 10.4487C10.8733 10.2715 10.8725 9.98247 11.0518 9.80308L10.5215 9.27278ZM1.31682 20.1832L1.84715 19.6529C1.38428 19.19 1.38428 18.4395 1.84715 17.9767L1.31682 17.4463L0.786489 16.916C-0.262163 17.9647 -0.262163 19.6649 0.786489 20.7135L1.31682 20.1832ZM4.05366 20.1832L3.52333 19.6529C3.06046 20.1157 2.31001 20.1157 1.84715 19.6529L1.31682 20.1832L0.786489 20.7135C1.83514 21.7622 3.53534 21.7622 4.58399 20.7135L4.05366 20.1832ZM8.68994 15.5462L8.15957 15.016L3.52329 19.6529L4.05366 20.1832L4.58403 20.7135L9.2203 16.0765L8.68994 15.5462ZM1.31682 17.4463L1.84716 17.9767L6.48424 13.3393L5.95389 12.809L5.42355 12.2787L0.786474 16.916L1.31682 17.4463ZM6.53983 11.3947L5.78984 11.3928C5.78928 11.609 5.78849 11.7304 5.78141 11.8214C5.77824 11.862 5.77458 11.8842 5.77218 11.8957C5.77105 11.9011 5.77022 11.9039 5.76992 11.9049C5.76976 11.9055 5.76966 11.9057 5.76964 11.9058C5.76963 11.9058 5.76963 11.9058 5.76962 11.9059L6.46217 12.1937L7.15472 12.4816C7.30123 12.1292 7.28894 11.7455 7.28983 11.3966L6.53983 11.3947ZM5.95389 12.809L6.48424 13.3393C6.72923 13.0943 7.00828 12.8339 7.15472 12.4816L6.46217 12.1937L5.76962 11.9059C5.7696 11.9059 5.7695 11.9062 5.76903 11.907C5.76852 11.908 5.76709 11.9106 5.76411 11.9151C5.75782 11.9247 5.74485 11.9427 5.71865 11.9732C5.65984 12.0417 5.57535 12.1269 5.42355 12.2787L5.95389 12.809ZM10.1044 14.9602L10.1025 14.2102C9.75356 14.2111 9.36982 14.1988 9.01732 14.3453L9.30524 15.0378L9.59316 15.7304C9.59317 15.7304 9.59317 15.7304 9.59322 15.7304C9.59327 15.7303 9.59354 15.7302 9.59408 15.7301C9.59507 15.7298 9.59792 15.729 9.60334 15.7278C9.61477 15.7254 9.63703 15.7218 9.67767 15.7186C9.76866 15.7115 9.89004 15.7107 10.1063 15.7102L10.1044 14.9602ZM8.68994 15.5462L9.2203 16.0765C9.37212 15.9247 9.45732 15.8402 9.52577 15.7814C9.55628 15.7552 9.57431 15.7422 9.58389 15.7359C9.58843 15.7329 9.59101 15.7315 9.59197 15.731C9.59285 15.7305 9.59312 15.7304 9.59316 15.7304L9.30524 15.0378L9.01732 14.3453C8.665 14.4918 8.40458 14.7709 8.15957 15.016L8.68994 15.5462Z"
        fill="#50565D"
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

export default function BookCallModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    country: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

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

  if (!open) return null;

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

    if (!form.name.trim()) {
      nextErrors.name = "Full name is required";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s()]{7,20}$/.test(form.phone)) {
      nextErrors.phone = "Enter a valid phone number";
    }

    if (!form.service) {
      nextErrors.service = "Please select a service";
    }

    if (!form.country) {
      nextErrors.country = "Please select a country";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    setSuccess(true);

    setForm({
      name: "",
      phone: "",
      service: "",
      country: "",
    });

    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
      <button
        type="button"
        aria-label="Close modal"
        onClick={onClose}
        className="absolute inset-0 bg-black/30 backdrop-blur-[6px]"
      />

      <div className="relative z-10 grid w-full max-w-[936px] overflow-hidden rounded-[16px] bg-white p-5 shadow-[0_24px_80px_rgba(0,0,0,0.18)] md:grid-cols-[1fr_1fr] md:p-6">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 grid h-6 w-6 place-items-center rounded-full bg-[#E5E5E5] cursor-pointer text-sm text-black shadow-sm transition hover:bg-[#F6F6F6]"
          aria-label="Close"
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 3.88906L8.88906 0L10 1.11094L6.11094 5L10 8.88906L8.88906 10L5 6.11094L1.11094 10L0 8.88906L3.88906 5L0 1.11094L1.11094 0L5 3.88906Z"
              fill="black"
            />
          </svg>
        </button>

        <div className="relative hidden min-h-[340px] overflow-hidden rounded-[12px] md:block">
          <Image
            src="/images/contact.png"
            alt="Book a consultation"
            fill
            sizes="420px"
            className="object-cover"
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col px-1 py-1 md:px-6"
        >
          <h2 className="max-w-[330px] text-[30px] font-bold leading-[1.05] tracking-[-0.03em] text-black">
            Do You Want To Start A Business In The UAE?
          </h2>

          <p className="mt-3 text-sm leading-none text-[#50565D]">
            Book a free consultation with one of our Specialists.
          </p>

          <div className="mt-8 space-y-4">
            <div>
              <div className="flex h-[56px] items-center gap-3 rounded-[48px] bg-[#F6F6F7] px-4 ">
                <UserIcon />
                <input
                  type="text"
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  placeholder="Full name"
                  className="h-full w-full bg-transparent text-base text-black outline-none placeholder:text-[#7A7C81]"
                />
              </div>
              {errors.name && (
                <p className="mt-1 px-4 text-xs text-reve-red">{errors.name}</p>
              )}
            </div>

            <div>
              <div className="flex h-[56px] items-center gap-3 rounded-[48px] bg-[#F6F6F7] px-4 ">
                <PhoneIcon />
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  placeholder="Phone Number"
                  className="h-full w-full bg-transparent text-base text-black outline-none placeholder:text-[#7A7C81]"
                />
              </div>
              {errors.phone && (
                <p className="mt-1 px-4 text-xs text-reve-red">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <div className="flex h-[56px] items-center gap-3 rounded-[48px] bg-[#F6F6F7] px-4 ">
                <ServiceIcon />
                <select
                  value={form.service}
                  onChange={(event) =>
                    updateField("service", event.target.value)
                  }
                  className="h-full w-full appearance-none bg-transparent text-base text-[#50565D] outline-none"
                >
                  <option value="">Service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                <svg
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.75 0.75L6.04289 6.04289C6.37623 6.37623 6.54289 6.54289 6.75 6.54289C6.95711 6.54289 7.12377 6.37623 7.45711 6.04289L12.75 0.75"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {errors.service && (
                <p className="mt-1 px-4 text-xs text-reve-red">
                  {errors.service}
                </p>
              )}
            </div>

            <div>
              <div className="flex h-[56px] items-center gap-3 rounded-[48px] bg-[#F6F6F7] px-4 ">
                <CountryIcon />
                <select
                  value={form.country}
                  onChange={(event) =>
                    updateField("country", event.target.value)
                  }
                  className="h-full w-full appearance-none bg-transparent text-base text-[#50565D] outline-none"
                >
                  <option value="">Country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                <svg
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.75 0.75L6.04289 6.04289C6.37623 6.37623 6.54289 6.54289 6.75 6.54289C6.95711 6.54289 7.12377 6.37623 7.45711 6.04289L12.75 0.75"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeWinejoin="round"
                  />
                </svg>
              </div>
              {errors.country && (
                <p className="mt-1 px-4 text-xs text-reve-red">
                  {errors.country}
                </p>
              )}
            </div>
          </div>

          <div className="mt-7 flex justify-end">
            <button
              type="submit"
              className="flex h-[56px] min-w-[150px] items-center justify-between gap-4 rounded-[48px] bg-reve-red px-6 text-base font-medium text-white transition hover:bg-black cursor-pointer"
            >
              Book A Call
              <span className="grid h-8 w-8 place-items-center rounded-[40px] bg-white text-reve-red">
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
          <div className="absolute inset-0 z-30 grid place-items-center bg-white/90 px-6 text-center backdrop-blur-sm">
            <div className="rounded-[18px] bg-white px-8 py-7 shadow-soft">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#E9FBEF] text-2xl text-green-600">
                ✓
              </div>
              <h3 className="mt-4 text-2xl font-bold text-black">Thank you!</h3>
              <p className="mt-2 max-w-[320px] text-base leading-[1.5] text-[#50565D]">
                Your request has been submitted successfully. Our team will
                contact you soon.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
