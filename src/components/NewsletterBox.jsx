import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const NewsletterBox = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState("");

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim() === "") {
            alert("Email is required");
            return;
        }
        alert(`Subscribed with: ${email}`);
        setEmail("");
    };

    return (
        <div className="py-20">
            <div className="max-w-2xl mx-auto text-center">
                <p className="text-2xl font-semibold text-gray-800">
                    {t("NewsletterBox.title1")}
                </p>
                <p className="mt-4 text-sm text-gray-600 md:text-base">
                    {t("NewsletterBox.title2")}
                </p>
                <form action="#" className="mt-6" onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center gap-4 sm:flex-row">
                        <input
                            type="email"
                            placeholder={t("NewsletterBox.title3")}
                            className="flex-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 sm:w-auto"
                            value={email}
                            onChange={handleChange}
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 text-white transition bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 active:bg-gray-700"
                        >
                            {t("NewsletterBox.title4")}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewsletterBox;
