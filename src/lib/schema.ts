export const JSON_LD_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "ConsultingFirm",
    "name": "ecco Consultants",
    "url": "https://eccoc.com.au",
    "logo": "https://eccoc.com.au/logo.png",
    "description": "Leading Business Consultants in Australia & New Zealand providing strategy, operations, and profit improvement advice.",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Suite 4, 756 Blackburn Rd",
        "addressLocality": "Clayton",
        "addressRegion": "VIC",
        "postalCode": "3168",
        "addressCountry": "AU"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+61 3 8516 9999",
        "contactType": "customer service",
        "areaServed": ["AU", "NZ"],
        "availableLanguage": "English"
    },
    "sameAs": [
        "https://www.linkedin.com/company/ecco-consultants"
    ]
};
