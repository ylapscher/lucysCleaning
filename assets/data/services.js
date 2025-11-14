// Services data structure - translations are handled in ServiceCard component
export const primaryServices = [
  {
    id: 1,
    icon: "✨"
  },
  {
    id: 2,
    icon: "🧹"
  },
  {
    id: 3,
    icon: "📦"
  }
];

export const secondaryServices = [
  {
    id: 4,
    icon: "🏗️"
  },
  {
    id: 5,
    icon: "🏢"
  },
  {
    id: 6,
    icon: "🪟"
  }
];

export const additionalServices = [
  {
    id: 7,
    icon: "🧼"
  },
  {
    id: 8,
    icon: "🛋️"
  },
  {
    id: 9,
    icon: "⭐"
  }
];

// Keep the original services export for backward compatibility
export const services = [...primaryServices, ...secondaryServices, ...additionalServices];