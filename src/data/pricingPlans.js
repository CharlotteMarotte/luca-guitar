export const pricingPlans = {
  withContract: [
    {
      heading: "Probestunde",
      description:
        "Zum gegenseitigen Kennenlernen. Wir können uns anschauen, wo deine Interessen liegen und wie ich dich am besten unterstützen kann.",
      priceOptions: [
        {
          duration: "45 Minuten",
          price: "20€",
        },
      ],
    },
    {
      heading: "Ab vier Terminen/Monat",
      description:
        "Vertrag, vierteljährlich kündbar. Wöchentliche Unterrichtseinheiten, angepasst an deine Bedürfnisse.",
      priceOptions: [
        {
          duration: "60 Minuten",
          price: "35€",
        },
      ],
      isHighlighted: true,
      benefits: [
        "Regelmäßiger fester Termin ",
        "Unterrichtsmaterialien (Noten, Tabs)",
        "Kaufberatung Gitarre",
        "Hausbesuch möglich gegen Aufpreis",
        "Unterricht in Musiktheorie, Gehörbildung, Noten/Tabs lesen (optional)",
        "45-minütiger Unterricht für 30€",
      ],
    },
    {
      heading: "Zwei bis drei Termine/Monat",
      description:
        "Vertrag, vierteljährlich kündbar. Regelmäßige Unterrichtseinheiten, angepasst an deine Bedürfnisse.",
      priceOptions: [
        {
          duration: "60 Minuten",
          price: "40€",
        },
      ],
      benefits: [
        "Regelmäßiger fester Termin ",
        "Unterrichtsmaterialien (Noten, Tabs)",
        "Kaufberatung Gitarre",
        "Hausbesuch möglich gegen Aufpreis",
        "Unterricht in Musiktheorie, Gehörbildung, Noten/Tabs lesen (optional)",
        "45-minütiger Unterricht für 35€",
      ],
    },
  ],
  withoutContract: [
    {
      heading: "Individuelle Einzelstunde",
      description:
        "Ideal für gezielte Vertiefung oder als Geschenk-Gutschein. 12 Monate gültig.",
      priceOptions: [
        {
          duration: "60 Minuten",
          price: "47€",
        },
      ],
      benefits: [
        "Zugang zu grundlegenden Lernmaterialien",
        "Möglichkeit ein Thema zu vertiefen",
        "Flexibilität bei der Stundenbuchung",
        "Kein langfristiger Vertrag",
        "45-minütiger Unterricht für 42€",
      ],
    },
    {
      heading: "Zeitkarten (2er/5er/10er)",
      description:
        "Flexibilität für Berufstätige oder als Geschenk-Gutschein. 12 Monate gültig.",
      priceOptions: [
        {
          duration: "60 Minuten",
          price: "45€",
        },
      ],
      benefits: [
        "Übertragbar",
        "Zugang zu grundlegenden Lernmaterialien",
        "Flexibilität bei der Stundenbuchung",
        "Kein langfristiger Vertrag",
        "45-minütiger Unterricht für 45€",
      ],
    },
  ],
};
