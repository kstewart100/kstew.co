import React from 'react';

const QUOTES = [
  {
    id: 'pet-food',
    quote:
      'When we see results with 75% certainty, we typically go back to the team to make adjustments to the campaigns. We always see these results as directional insights.',
    attribution: 'Brand marketer at mid-sized pet food company',
    avatar: '/images/case-studies/flexible-lift-confidence/quote-avatar-pet-food.png',
  },
  {
    id: 'ecommerce',
    quote:
      'We are typically please with seeing a positive lift campaign with 75% certainty.',
    attribution: 'Brand marketer at large e-commerce company',
    avatar:
      '/images/case-studies/flexible-lift-confidence/quote-avatar-ecommerce.png',
  },
] as const;

export function FlexibleLiftCertaintyQuotes() {
  return (
    <div
      className="my-5 space-y-10 first:mt-0 last:mb-0 sm:space-y-12"
      aria-label="Brand marketer quotes on 75% certainty"
    >
      {QUOTES.map((item) => (
        <blockquote
          key={item.id}
          className="flex items-start gap-5 sm:items-center sm:gap-8"
        >
          <img
            src={item.avatar}
            alt=""
            width={250}
            height={250}
            className="h-20 w-20 shrink-0 rounded-full sm:h-24 sm:w-24"
          />
          <div>
            <p className="font-heading text-[18px] font-normal leading-relaxed text-color-text-primary sm:text-[20px]">
              {item.quote}
            </p>
            <footer className="mt-2 font-body text-sm italic text-color-text-primary">
              {item.attribution}
            </footer>
          </div>
        </blockquote>
      ))}
    </div>
  );
}
