export const supportedLocales = [
  { code: "en", label: "EN", name: "English" },
  { code: "fr", label: "FR", name: "Français" },
];

export const defaultLocale = "en";

export const translations = {
  en: {
    common: {
      bookCall: "Book A Call",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      chooseLanguage: "Choose language",
      iconPlaceholder: "Icon placeholder",
      previous: "Previous",
      next: "Next",
    },
    nav: {
      home: "Home",
      services: "Our Services",
      about: "About Us",
      options: "Best Option",
      process: "Process",
      reviews: "Reviews",
    },
    bookCallModal: {
      title: "Do You Want To Start A Business In The UAE?",
      subtitle: "Book a free consultation with one of our Specialists.",
      imageAlt: "Book a consultation",
      fullName: "Full name",
      email: "Email",
      phoneNumber: "Phone Number",
      service: "Service",
      country: "Country",
      describeBusiness: "Describe your business",
      searchCountry: "Search country",
      submit: "Book A Call",
      close: "Close",
      successTitle: "Thank you!",
      successMessage:
        "Your request has been submitted successfully. Our team will contact you soon.",
      errors: {
        nameRequired: "Full name is required",
        emailRequired: "Email is required",
        emailInvalid: "Enter a valid email address",
        phoneRequired: "Phone number is required",
        phoneInvalid: "Enter a valid phone number",
        serviceRequired: "Please select a service",
        countryRequired: "Please select a country",
        businessRequired: "Please describe your business",
        businessMin: "Please add at least 10 characters",
      },
      serviceOptions: [
        { value: "businessSetup", label: "Business Setup" },
        { value: "projectManagement", label: "Project Management" },
        { value: "marketing360", label: "Marketing 360" },
        { value: "bankingFinance", label: "Banking & Finance" },
      ],
      countryOptions: [
        { value: "ae", label: "United Arab Emirates" },
        { value: "sa", label: "Saudi Arabia" },
        { value: "qa", label: "Qatar" },
        { value: "kw", label: "Kuwait" },
        { value: "om", label: "Oman" },
        { value: "bh", label: "Bahrain" },
        { value: "in", label: "India" },
        { value: "pk", label: "Pakistan" },
        { value: "gb", label: "United Kingdom" },
        { value: "us", label: "United States" },
      ],
    },
    hero: {
      title: "Empowering Global Entrepreneurs to Build Businesses in UAE",
      leftAlt: "Dubai skyline business setup placeholder",
      centerAlt: "Business consultants walking in Dubai placeholder",
      rightAlt: "Office consultation placeholder",
    },
    services: {
      badge: "Our Services",
      title: "End-to-End Business Solutions",
      description:
        "From concept to launch, we guide investors and entrepreneurs from around the world in bringing their visions to life crafting bold, future-ready businesses in the ever evolving landscape of the United Arab Emirates.",
      previous: "Previous service",
      next: "Next service",
      cards: {
        businessSetup: {
          title: "Business Setup",
          description:
            "Ready to launch your business in Dubai? Whether it’s a free zone setup, an offshore company, or a dynamic mainland presence we’ve got you covered every step of the way!",
        },
        projectManagement: {
          title: "Project Management",
          description:
            "Expanding into Dubai? From securing prime commercial space and building your dream team to making your business fully operational we take care of it all.",
        },
        marketing360: {
          title: "Marketing 360",
          description:
            "From crafting your logo to building a complete brand identity, we design websites, set up and manage social media creating a powerful digital footprint.",
        },
        bankingFinance: {
          title: "Banking & Finance",
          description:
            "We simplify the setup of corporate bank accounts, personal banking, and digital payment gateways making the process quick and stress-free.",
        },
      },
    },
    about: {
      badge: "About Us",
      title: "Connecting Entrepreneurs around the world.",
      description:
        "At Le Rêve, we specialize in guiding global investors and entrepreneurs into the thriving UAE market—offering bespoke, end-to-end solutions designed to establish, elevate, and empower their ventures with excellence at every stage.",
      happyClients: "200+ Happy Clients",
      clientAlt: "Client {number}",
      imageAlt: "Entrepreneurs handshake placeholder",
    },
    options: {
      badge: "Our Option",
      title: "Best Setup Option For Businesses",
      cards: {
        freeZones: {
          title: "Free Zones",
          imageAlt: "Free zone office placeholder",
          points: [
            "Retain 100% ownership of your Dubai company.",
            "0% corporate and income tax rate.",
            "No custom duties.",
          ],
        },
        mainland: {
          title: "Main Land",
          imageAlt: "Main land Dubai city placeholder",
          points: [
            "Business activities not limited.",
            "Operate anywhere inside and outside the country.",
            "No limit on number of visas.",
          ],
        },
      },
    },
    process: {
      badge: "Our Process",
      title: "The Process Of Business Setup In Dubai",
      steps: {
        prepareDocumentation: "Prepare Documentation",
        businessLicence: "Business Licence",
        visaProcess: "Visa Process",
        bankAccount: "Bank Account",
      },
    },
    reviews: {
      badge: "Our Testimonials",
      title: "Success Stories from Clients",
      rating: "5 star rating",
      founder: "Founder, Pupdot",
      cards: {
        short:
          "I wanted to take a moment and appreciate the incredible work this team has done.",
        long: "I wanted to take a moment and appreciate the incredible work this team has done. Loved how creatively the webpages were designed and the content is structured. Every member contributed meaningfully and purposefully.",
        compact: "I wanted to take a moment and appreciate them. Good job.",
        medium:
          "I wanted to take a moment and appreciate the incredible work this team has done. Loved how creatively the webpages were designed and the content is structured.",
        purposeful:
          "I wanted to take a moment and appreciate the incredible work this team has done. Every member contributed meaningfully and purposefully.",
      },
    },
    finalCta: {
      title: "Ready to Elevate Your Business? Book a Call Today!",
      avatarAlt: "Client avatar",
    },
    footer: {
      copyright: "© copyright 2026 reveprojects.com | All Rights Reserved",
      brandAria: "Rêve home",
      socialAria: "Open {name}",
    },
  },
  fr: {
    common: {
      bookCall: "Réserver un appel",
      openMenu: "Ouvrir le menu de navigation",
      closeMenu: "Fermer le menu de navigation",
      chooseLanguage: "Choisir la langue",
      iconPlaceholder: "Espace réservé pour l’icône",
      previous: "Précédent",
      next: "Suivant",
    },
    bookCallModal: {
      title: "Vous souhaitez créer une entreprise aux EAU ?",
      subtitle:
        "Réservez une consultation gratuite avec l’un de nos spécialistes.",
      imageAlt: "Réserver une consultation",
      fullName: "Nom complet",
      email: "E-mail",
      phoneNumber: "Numéro de téléphone",
      service: "Service",
      country: "Pays",
      describeBusiness: "Décrivez votre activité",
      searchCountry: "Rechercher un pays",
      submit: "Réserver un appel",
      close: "Fermer",
      successTitle: "Merci !",
      successMessage:
        "Votre demande a été envoyée avec succès. Notre équipe vous contactera bientôt.",
      errors: {
        nameRequired: "Le nom complet est requis",
        emailRequired: "L’e-mail est requis",
        emailInvalid: "Veuillez saisir une adresse e-mail valide",
        phoneRequired: "Le numéro de téléphone est requis",
        phoneInvalid: "Veuillez saisir un numéro de téléphone valide",
        serviceRequired: "Veuillez sélectionner un service",
        countryRequired: "Veuillez sélectionner un pays",
        businessRequired: "Veuillez décrire votre activité",
        businessMin: "Veuillez ajouter au moins 10 caractères",
      },
      serviceOptions: [
        { value: "businessSetup", label: "Création d’entreprise" },
        { value: "projectManagement", label: "Gestion de projet" },
        { value: "marketing360", label: "Marketing 360" },
        { value: "bankingFinance", label: "Banque & finance" },
      ],
      countryOptions: [
        { value: "ae", label: "Émirats arabes unis" },
        { value: "sa", label: "Arabie saoudite" },
        { value: "qa", label: "Qatar" },
        { value: "kw", label: "Koweït" },
        { value: "om", label: "Oman" },
        { value: "bh", label: "Bahreïn" },
        { value: "in", label: "Inde" },
        { value: "pk", label: "Pakistan" },
        { value: "gb", label: "Royaume-Uni" },
        { value: "us", label: "États-Unis" },
      ],
    },
    nav: {
      home: "Accueil",
      services: "Nos services",
      about: "À propos",
      options: "Meilleure option",
      process: "Processus",
      reviews: "Avis",
    },
    hero: {
      title:
        "Aider les entrepreneurs internationaux à créer des entreprises aux EAU",
      leftAlt:
        "Espace réservé de la skyline de Dubaï pour la création d’entreprise",
      centerAlt: "Espace réservé de consultants d’affaires marchant à Dubaï",
      rightAlt: "Espace réservé de consultation en bureau",
    },
    services: {
      badge: "Nos services",
      title: "Solutions d’affaires de bout en bout",
      description:
        "De l’idée au lancement, nous accompagnons les investisseurs et entrepreneurs du monde entier pour donner vie à leurs ambitions et créer des entreprises audacieuses, modernes et prêtes pour l’avenir aux Émirats arabes unis.",
      previous: "Service précédent",
      next: "Service suivant",
      cards: {
        businessSetup: {
          title: "Création d’entreprise",
          description:
            "Prêt à lancer votre entreprise à Dubaï ? Zone franche, société offshore ou présence dynamique sur le mainland : nous vous accompagnons à chaque étape.",
        },
        projectManagement: {
          title: "Gestion de projet",
          description:
            "Vous développez votre activité à Dubaï ? De l’espace commercial à l’équipe idéale, nous préparons votre structure pour une mise en opération complète.",
        },
        marketing360: {
          title: "Marketing 360",
          description:
            "Du logo à l’identité de marque complète, nous créons des sites web, gérons les réseaux sociaux et construisons une présence digitale solide.",
        },
        bankingFinance: {
          title: "Banque & finance",
          description:
            "Nous simplifions l’ouverture de comptes bancaires professionnels, les services bancaires personnels et les solutions de paiement numérique.",
        },
      },
    },
    about: {
      badge: "À propos",
      title: "Connecter les entrepreneurs à travers le monde.",
      description:
        "Chez Le Rêve, nous guidons les investisseurs et entrepreneurs internationaux vers le marché dynamique des EAU avec des solutions sur mesure, complètes et conçues pour établir, développer et valoriser leurs projets avec excellence.",
      happyClients: "200+ clients satisfaits",
      clientAlt: "Client {number}",
      imageAlt: "Espace réservé d’une poignée de main entre entrepreneurs",
    },
    options: {
      badge: "Notre option",
      title: "La meilleure option de création pour les entreprises",
      cards: {
        freeZones: {
          title: "Zones franches",
          imageAlt: "Espace réservé de bureau en zone franche",
          points: [
            "Conservez 100 % de la propriété de votre société à Dubaï.",
            "0 % d’impôt sur les sociétés et les revenus.",
            "Aucun droit de douane.",
          ],
        },
        mainland: {
          title: "Mainland",
          imageAlt: "Espace réservé de la ville de Dubaï mainland",
          points: [
            "Activités commerciales non limitées.",
            "Opérez partout à l’intérieur et à l’extérieur du pays.",
            "Aucune limite sur le nombre de visas.",
          ],
        },
      },
    },
    process: {
      badge: "Notre processus",
      title: "Le processus de création d’entreprise à Dubaï",
      steps: {
        prepareDocumentation: "Préparer les documents",
        businessLicence: "Licence commerciale",
        visaProcess: "Processus de visa",
        bankAccount: "Compte bancaire",
      },
    },
    reviews: {
      badge: "Nos témoignages",
      title: "Réussites de nos clients",
      rating: "Note de 5 étoiles",
      founder: "Fondateur, Pupdot",
      cards: {
        short:
          "Je voulais prendre un moment pour saluer le travail remarquable réalisé par cette équipe.",
        long: "Je voulais prendre un moment pour saluer le travail remarquable réalisé par cette équipe. J’ai adoré la créativité du design des pages et la structure du contenu. Chaque membre a contribué avec sérieux et efficacité.",
        compact:
          "Je voulais prendre un moment pour les remercier. Excellent travail.",
        medium:
          "Je voulais prendre un moment pour saluer le travail remarquable réalisé par cette équipe. J’ai adoré la créativité du design des pages et la structure du contenu.",
        purposeful:
          "Je voulais prendre un moment pour saluer le travail remarquable réalisé par cette équipe. Chaque membre a contribué avec sérieux et efficacité.",
      },
    },
    finalCta: {
      title:
        "Prêt à faire évoluer votre entreprise ? Réservez un appel dès aujourd’hui !",
      avatarAlt: "Avatar client",
    },
    footer: {
      copyright: "© copyright 2026 reveprojects.com | Tous droits réservés",
      brandAria: "Accueil Rêve",
      socialAria: "Ouvrir {name}",
    },
  },
};

export function getByPath(source, path) {
  return path.split(".").reduce((value, key) => {
    if (value && Object.prototype.hasOwnProperty.call(value, key)) {
      return value[key];
    }

    return undefined;
  }, source);
}
