// pricingData.js — Aether AI Pricing Configuration
// DO NOT hardcode final prices. All prices are computed dynamically via matrix.

export const pricingMatrix = {
  starter: 19,
  pro: 49,
  enterprise: 99,
};

export const currencyRates = {
  USD: { rate: 1,     symbol: '$',  code: 'USD' },
  INR: { rate: 83,   symbol: '₹',  code: 'INR' },
  EUR: { rate: 0.92, symbol: '€',  code: 'EUR' },
};

export const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Perfect for solo builders & indie makers',
    priceKey: 'starter',
    highlighted: false,
    badge: null,
    cta: 'Start for Free',
    features: [
      { text: '10,000 API calls / month', included: true },
      { text: 'AI Analytics Dashboard', included: true },
      { text: '3 Active Workflows', included: true },
      { text: 'Standard Security Monitoring', included: true },
      { text: 'Predictive Insights', included: false },
      { text: 'Priority Support', included: false },
      { text: 'Custom Integrations', included: false },
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'For growing teams scaling with intelligence',
    priceKey: 'pro',
    highlighted: true,
    badge: 'Most Popular',
    cta: 'Get Started',
    features: [
      { text: '500,000 API calls / month', included: true },
      { text: 'AI Analytics Dashboard', included: true },
      { text: 'Unlimited Active Workflows', included: true },
      { text: 'Smart Security Monitoring', included: true },
      { text: 'Predictive Insights', included: true },
      { text: 'Priority Support (24/7)', included: true },
      { text: 'Custom Integrations', included: false },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'For large teams with mission-critical workloads',
    priceKey: 'enterprise',
    highlighted: false,
    badge: null,
    cta: 'Contact Sales',
    features: [
      { text: 'Unlimited API calls', included: true },
      { text: 'AI Analytics Dashboard', included: true },
      { text: 'Unlimited Active Workflows', included: true },
      { text: 'Smart Security + Threat Intel', included: true },
      { text: 'Predictive Insights (Advanced)', included: true },
      { text: 'Dedicated Support Manager', included: true },
      { text: 'Custom Integrations & SLA', included: true },
    ],
  },
];
