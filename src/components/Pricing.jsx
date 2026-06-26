import React, { useState, useMemo, memo } from 'react';
import { pricingMatrix, currencyRates, pricingPlans } from '../data/pricingData';

// ─── Isolated price-display subcomponent ────────────────────────────────────
// Wrapped in React.memo so it only re-renders when its own props change,
// keeping the rest of the card tree completely static during currency/billing
// state updates.
const PriceDisplay = memo(function PriceDisplay({ priceKey, currency, isAnnual, highlighted }) {
  const price = useMemo(() => {
    const base = pricingMatrix[priceKey];
    const { rate } = currencyRates[currency];
    const monthly = base * rate;
    return isAnnual ? monthly * 12 * 0.8 : monthly;
  }, [priceKey, currency, isAnnual]);

  const { symbol } = currencyRates[currency];
  const period = isAnnual ? '/yr' : '/mo';

  const formatted = useMemo(() => {
    if (currency === 'INR') {
      return Math.round(price).toLocaleString('en-IN');
    }
    return price % 1 === 0
      ? price.toLocaleString()
      : price.toFixed(2);
  }, [price, currency]);

  return (
    <div className="flex items-end gap-1.5 mt-3 mb-1">
      <span className={`text-4xl font-extrabold tracking-tight ${highlighted ? 'text-white' : 'text-white'}`}>
        {symbol}{formatted}
      </span>
      <span className={`text-sm font-medium mb-1.5 ${highlighted ? 'text-indigo-300' : 'text-gray-500'}`}>
        {period}
      </span>
    </div>
  );
});

// ─── Annual savings badge ────────────────────────────────────────────────────
const SavingsBadge = memo(function SavingsBadge({ priceKey, currency, isAnnual }) {
  const savings = useMemo(() => {
    if (!isAnnual) return null;
    const base = pricingMatrix[priceKey];
    const { rate, symbol } = currencyRates[currency];
    const monthlyTotal = base * rate * 12;
    const annualTotal = monthlyTotal * 0.8;
    const saved = monthlyTotal - annualTotal;
    if (currency === 'INR') return `${symbol}${Math.round(saved).toLocaleString('en-IN')} saved`;
    return `${symbol}${saved.toFixed(0)} saved`;
  }, [priceKey, currency, isAnnual]);

  if (!savings) return null;
  return (
    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2 py-0.5 rounded-full">
      {savings}/yr
    </span>
  );
});

// ─── Individual Plan Card ────────────────────────────────────────────────────
const PlanCard = memo(function PlanCard({ plan, currency, isAnnual }) {
  const { highlighted, badge, name, tagline, features, cta, priceKey, id } = plan;

  return (
    <div
      className={`relative group flex flex-col rounded-2xl p-7 border transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-2 ${
        highlighted
          ? 'bg-gradient-to-b from-indigo-950/60 to-[#03000a] border-indigo-500/50 shadow-[0_0_50px_rgba(99,102,241,0.12)]'
          : 'bg-white/[0.03] border-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.03)]'
      }`}
    >
      {/* Glow backdrop for highlighted card */}
      {highlighted && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-600/10 via-purple-600/5 to-transparent pointer-events-none" />
      )}

      {/* Popular badge */}
      {badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
          <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg shadow-indigo-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block" />
            {badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-1">
          <h3 className={`text-xl font-bold ${highlighted ? 'text-white' : 'text-gray-100'}`}>
            {name}
          </h3>
        </div>
        <p className={`text-xs leading-relaxed ${highlighted ? 'text-indigo-300/80' : 'text-gray-500'}`}>
          {tagline}
        </p>

        {/* Price — isolated to prevent full card re-render */}
        <PriceDisplay
          priceKey={priceKey}
          currency={currency}
          isAnnual={isAnnual}
          highlighted={highlighted}
        />

        <div className="flex items-center gap-2 h-5">
          <SavingsBadge priceKey={priceKey} currency={currency} isAnnual={isAnnual} />
        </div>
      </div>

      {/* Divider */}
      <div className={`my-6 border-t ${highlighted ? 'border-indigo-500/20' : 'border-white/5'}`} />

      {/* Feature list */}
      <ul className="space-y-3 flex-grow relative z-10">
        {features.map((feat, i) => (
          <li key={i} className="flex items-start gap-2.5">
            {feat.included ? (
              <svg className="w-4 h-4 mt-0.5 shrink-0 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-4 h-4 mt-0.5 shrink-0 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            <span className={`text-sm ${feat.included ? (highlighted ? 'text-gray-200' : 'text-gray-300') : 'text-gray-600'}`}>
              {feat.text}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <div className="mt-8 relative z-10">
        <button
          id={`pricing-cta-${id}`}
          type="button"
          aria-label={`Select the ${name} plan`}
          className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03000a] ${
            highlighted
              ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white hover:shadow-lg hover:shadow-indigo-600/40 hover:shadow-[0_0_22px_rgba(99,102,241,0.35)] focus-visible:ring-indigo-500'
              : 'bg-white/5 text-gray-200 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_16px_rgba(255,255,255,0.08)] focus-visible:ring-white/20'
          }`}
        >
          {cta}
        </button>
      </div>
    </div>
  );
});

// ─── Main Pricing Section ─────────────────────────────────────────────────────
export default function Pricing() {
  // Isolated state — changes here only re-render PriceDisplay & SavingsBadge
  const [isAnnual, setIsAnnual] = useState(false);
  const [currency, setCurrency] = useState('USD');

  return (
    <section id="pricing" className="relative py-24 bg-[#03000a] overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section header */}
        <div className="text-center mb-14 max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Simple,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Transparent
            </span>{' '}
            Pricing
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-light">
            One platform, three tiers of intelligence. No hidden costs, no surprises.
          </p>
        </div>

        {/* ── Controls row: Billing toggle + Currency switcher ─────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">

          {/* Billing Toggle */}
          <div className="relative flex items-center bg-white/5 border border-white/10 rounded-full p-1">
            <button
              id="billing-toggle-monthly"
              type="button"
              aria-label="Switch pricing to monthly billing"
              aria-pressed={!isAnnual}
              onClick={() => setIsAnnual(false)}
              className={`relative px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03000a] ${
                !isAnnual ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              Monthly
            </button>
            <button
              id="billing-toggle-annual"
              type="button"
              aria-label="Switch pricing to annual billing"
              aria-pressed={isAnnual}
              onClick={() => setIsAnnual(true)}
              className={`relative px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03000a] flex items-center gap-2 ${
                isAnnual ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              Annual
              <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-1.5 py-0.5 rounded-full">
                -20%
              </span>
            </button>
          </div>

          {/* Currency Switcher */}
          <div className="relative">
            <select
              id="currency-switcher"
              aria-label="Select currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="appearance-none bg-white/5 border border-white/10 text-gray-300 text-sm font-semibold rounded-full px-5 py-2 pr-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03000a] focus:border-indigo-500/50 transition-all duration-200 hover:border-white/20 cursor-pointer"
              style={{ WebkitAppearance: 'none' }}
            >
              {Object.entries(currencyRates).map(([code, { symbol }]) => (
                <option key={code} value={code} className="bg-[#0a0a1a] text-gray-200">
                  {symbol} {code}
                </option>
              ))}
            </select>
            {/* Custom dropdown arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── Pricing cards grid ───────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {pricingPlans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              currency={currency}
              isAnnual={isAnnual}
            />
          ))}
        </div>

        {/* Bottom notice */}
        <p className="text-center text-xs text-gray-600 mt-12">
          All prices exclude applicable taxes. Enterprise plans billed annually. Need a custom volume plan?{' '}
          <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">Talk to us</a>.
        </p>

      </div>
    </section>
  );
}
