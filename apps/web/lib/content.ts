export const siteContent = {
  brand: {
    name: "ChatVentas AI",
    domain: "chatventas.cl",
    tagline: "Vende 24/7 por WhatsApp e Instagram con IA",
  },
  hero: {
    badge: "Hecho para PYMEs de Chile",
    title: "Vende 24/7 por WhatsApp e Instagram con IA",
    subtitle:
      "Atiende, recomienda y cobra automáticamente con Webpay/Mercado Pago. Califica interés (Cold/Warm/Hot) y convierte más clientes sin contratar más personal.",
    bullets: [
      "IA que responde catálogo y sugiere productos",
      "Scoring automático: Cold / Warm / Hot / Hot+",
      "Promociones por intereses de usuario",
      "Pagos integrados Webpay/Mercado Pago",
      "Dashboard con embudo, ventas y campañas",
      "Cumplimiento legal Chile (Ley 21.719)",
    ],
    cta: {
      primary: "Probar demo",
      secondary: "Agendar una llamada",
    },
    legalNote: "Al usar nuestro servicio, aceptas el tratamiento de datos según nuestra política de privacidad.",
  },
  benefits: [
    {
      title: "Vende 24/7 sin aumentar tu equipo",
      description: "Tu chatbot atiende clientes las 24 horas, los 7 días de la semana, sin descanso ni vacaciones.",
      icon: "Clock",
    },
    {
      title: "IA entrenada con tu catálogo",
      description: "Responde preguntas específicas sobre tus productos y recomienda según las necesidades del cliente.",
      icon: "Brain",
    },
    {
      title: "Promociones por intereses",
      description: "Detecta automáticamente los intereses del cliente y ofrece promociones personalizadas.",
      icon: "Target",
    },
    {
      title: "Pagos Webpay/Mercado Pago",
      description: "Integración directa con las pasarelas de pago más usadas en Chile para cerrar ventas al instante.",
      icon: "CreditCard",
    },
    {
      title: "Dashboard con embudo y estados",
      description: "Visualiza tu funnel de ventas y el estado de cada lead: Cold, Warm, Hot, Hot+.",
      icon: "BarChart3",
    },
    {
      title: "Cumplimiento legal y privacidad",
      description: "Cumple con la Ley 21.719 de protección de datos personales de Chile.",
      icon: "Shield",
    },
  ],
  howItWorks: [
    {
      step: 1,
      title: "Conecta WhatsApp/Instagram",
      description: "Vincula tus cuentas de WhatsApp Business e Instagram en minutos.",
    },
    {
      step: 2,
      title: "Importa tu catálogo",
      description: "Sube tu catálogo de productos o servicios para que la IA los conozca.",
    },
    {
      step: 3,
      title: "Activa plantillas y promociones",
      description: "Configura respuestas automáticas y promociones inteligentes.",
    },
    {
      step: 4,
      title: "Cobra con Webpay/Mercado Pago",
      description: "Los clientes pagan directamente desde el chat con links seguros.",
    },
    {
      step: 5,
      title: "Mide y optimiza",
      description: "Analiza métricas en tiempo real y mejora tu estrategia de ventas.",
    },
  ],
  pricing: {
    currency: "CLP",
    plans: [
      {
        name: "Starter",
        price: 49000,
        period: "mes",
        description: "Perfecto para empezar",
        features: ["1 canal (WhatsApp o Instagram)", "1.000 conversaciones/mes", "Panel básico", "Soporte por email"],
        cta: "Comenzar",
        popular: false,
      },
      {
        name: "Pro",
        price: 129000,
        period: "mes",
        description: "Para empresas en crecimiento",
        features: [
          "2 canales (WhatsApp + Instagram)",
          "5.000 conversaciones/mes",
          "Scoring Cold/Warm/Hot/Hot+",
          "Promociones automáticas",
          "Soporte prioritario",
        ],
        cta: "Comenzar",
        popular: true,
      },
      {
        name: "Business",
        price: 299000,
        period: "mes",
        description: "Para empresas establecidas",
        features: [
          "Canales ilimitados",
          "20.000 conversaciones/mes",
          "Múltiples usuarios y roles",
          "SLA 99% uptime",
          "Auditoría y reportes avanzados",
          "Soporte telefónico",
        ],
        cta: "Comenzar",
        popular: false,
      },
    ],
    variableCosts: "Costos variables: WhatsApp por conversación, fee de pasarela % por venta",
    annualDiscount: "15% de descuento pagando anual",
  },
  faq: [
    {
      question: "¿Qué necesito para usar WhatsApp/Instagram?",
      answer:
        "Necesitas una cuenta de WhatsApp Business y/o Instagram Business. Te ayudamos con la configuración inicial.",
    },
    {
      question: "¿Cuánto cuesta por conversación en WhatsApp?",
      answer:
        "WhatsApp cobra aproximadamente $15-30 CLP por conversación iniciada por la empresa. Este costo es adicional a tu plan.",
    },
    {
      question: "¿Puedo usar Webpay si soy PYME?",
      answer: "Sí, te ayudamos a configurar Webpay o Mercado Pago según tu tipo de empresa y necesidades.",
    },
    {
      question: "¿Cómo manejan mis datos?",
      answer:
        "Cumplimos con la Ley 21.719 de Chile. Puedes exportar o eliminar tus datos en cualquier momento desde tu panel.",
    },
    {
      question: "¿Puedo conectar mi ERP/tienda?",
      answer: "Sí, ofrecemos integraciones con los principales ERPs y plataformas de e-commerce de Chile.",
    },
    {
      question: "¿Cómo cancelo el servicio?",
      answer: "Puedes cancelar en cualquier momento desde tu panel, sin multas ni compromisos anuales.",
    },
  ],
  useCases: [
    {
      title: "Tienda de vestuario",
      problem: "Atención limitada en horario comercial",
      solution: "Chatbot 24/7 con catálogo visual",
      result: "Aumento del 40% en ventas nocturnas",
    },
    {
      title: "Ferretería",
      problem: "Consultas técnicas complejas",
      solution: "IA especializada en productos técnicos",
      result: "Reducción del 60% en llamadas de soporte",
    },
    {
      title: "Restaurante con delivery",
      problem: "Pedidos por teléfono lentos",
      solution: "Menú interactivo con pago directo",
      result: "Tiempo de pedido reducido en 70%",
    },
    {
      title: "Gimnasio",
      problem: "Consultas sobre planes y horarios",
      solution: "Asistente que agenda clases y cobra",
      result: "Conversión del 25% de leads a miembros",
    },
  ],
}
