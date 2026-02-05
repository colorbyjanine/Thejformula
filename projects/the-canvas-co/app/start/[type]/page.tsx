'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Comprehensive questionnaire data for each business type
const questionnaireData: Record<string, {
  title: string;
  subtitle: string;
  sections: {
    title: string;
    questions: {
      id: string;
      type: 'text' | 'textarea' | 'select' | 'multiselect' | 'toggle' | 'range' | 'color';
      label: string;
      placeholder?: string;
      options?: string[];
      required?: boolean;
      helper?: string;
    }[];
  }[];
}> = {
  creator: {
    title: 'Content Creator',
    subtitle: "Let's build your digital home base",
    sections: [
      {
        title: 'About You',
        questions: [
          { id: 'name', type: 'text', label: 'Your name or brand name', placeholder: 'e.g., Sarah Creates', required: true },
          { id: 'tagline', type: 'text', label: 'Your tagline or bio (one liner)', placeholder: 'e.g., Helping women find their style', helper: 'The first thing visitors see' },
          { id: 'niche', type: 'select', label: 'What\'s your primary niche?', options: ['Lifestyle', 'Fashion', 'Beauty', 'Travel', 'Food', 'Fitness', 'Parenting', 'Tech', 'Finance', 'Entertainment', 'Education', 'Other'], required: true },
          { id: 'audience', type: 'textarea', label: 'Describe your ideal audience', placeholder: 'Who are they? What do they care about? What problems do you solve for them?' },
          { id: 'personality', type: 'multiselect', label: 'How would you describe your brand personality?', options: ['Fun & Playful', 'Professional', 'Inspirational', 'Edgy', 'Warm & Friendly', 'Luxurious', 'Down-to-earth', 'Bold', 'Minimalist', 'Colorful'] },
        ]
      },
      {
        title: 'Your Content',
        questions: [
          { id: 'platforms', type: 'multiselect', label: 'Where do you create content?', options: ['Instagram', 'TikTok', 'YouTube', 'Podcast', 'Blog', 'Newsletter', 'Twitter/X', 'Pinterest', 'Facebook', 'LinkedIn'], required: true },
          { id: 'content_types', type: 'multiselect', label: 'What types of content do you create?', options: ['Photos', 'Short-form video', 'Long-form video', 'Written articles', 'Podcasts', 'Courses', 'E-books', 'Newsletters'] },
          { id: 'follower_count', type: 'select', label: 'What\'s your approximate total following?', options: ['Just starting', '1K - 10K', '10K - 50K', '50K - 100K', '100K - 500K', '500K - 1M', '1M+'] },
          { id: 'content_embed', type: 'toggle', label: 'Do you want your social feeds embedded on your website?', helper: 'Show your latest Instagram posts, TikToks, etc.' },
        ]
      },
      {
        title: 'Monetization',
        questions: [
          { id: 'revenue_streams', type: 'multiselect', label: 'How do you (or want to) make money?', options: ['Brand partnerships', 'Affiliate marketing', 'Digital products', 'Courses', 'Coaching/consulting', 'Physical products', 'Memberships', 'Ad revenue', 'Donations/tips', 'Speaking'] },
          { id: 'media_kit', type: 'toggle', label: 'Do you need a media kit / press page?', helper: 'For brands to learn about partnership opportunities' },
          { id: 'affiliate_links', type: 'toggle', label: 'Do you want a "Shop My Favorites" or affiliate store?', helper: 'Link to products you recommend' },
          { id: 'sell_products', type: 'toggle', label: 'Do you sell digital products (courses, ebooks, presets)?', helper: 'We can integrate payment processing' },
          { id: 'newsletter', type: 'toggle', label: 'Do you have or want an email newsletter?', helper: 'Capture emails and grow your list' },
        ]
      },
      {
        title: 'Website Features',
        questions: [
          { id: 'pages_needed', type: 'multiselect', label: 'What pages do you need?', options: ['Home', 'About', 'Portfolio/Work', 'Services', 'Shop', 'Blog', 'Media Kit', 'Contact', 'Links Page', 'Podcast', 'Newsletter'] },
          { id: 'booking', type: 'toggle', label: 'Do you need appointment/call booking?', helper: 'For coaching calls, consultations, etc.' },
          { id: 'links_page', type: 'toggle', label: 'Do you want a "link in bio" style page?', helper: 'One page with all your important links' },
          { id: 'blog', type: 'toggle', label: 'Do you want a blog?', helper: 'Share longer content and improve SEO' },
        ]
      },
      {
        title: 'Design Preferences',
        questions: [
          { id: 'style', type: 'select', label: 'What aesthetic fits your brand?', options: ['Clean & Minimal', 'Bold & Colorful', 'Elegant & Luxe', 'Warm & Organic', 'Edgy & Modern', 'Playful & Fun', 'Classic & Timeless'] },
          { id: 'colors', type: 'multiselect', label: 'What colors represent your brand?', options: ['Neutrals/Earth tones', 'Pastels', 'Bold primaries', 'Black & White', 'Warm (reds, oranges)', 'Cool (blues, greens)', 'Pink/Blush', 'Jewel tones'] },
          { id: 'inspiration', type: 'textarea', label: 'Any websites you love? (paste links)', placeholder: 'What do you love about them?' },
          { id: 'existing_brand', type: 'toggle', label: 'Do you have existing brand assets (logo, colors, fonts)?', helper: 'We can work with what you have or create new' },
        ]
      },
    ]
  },
  ecommerce: {
    title: 'E-Commerce',
    subtitle: "Let's build your online store",
    sections: [
      {
        title: 'About Your Business',
        questions: [
          { id: 'business_name', type: 'text', label: 'Business/brand name', required: true },
          { id: 'tagline', type: 'text', label: 'Your tagline', placeholder: 'A short phrase that captures what you sell' },
          { id: 'product_type', type: 'select', label: 'What do you sell?', options: ['Physical products', 'Digital products', 'Both', 'Subscription boxes', 'Handmade/artisan goods', 'Dropshipping'], required: true },
          { id: 'category', type: 'select', label: 'Product category', options: ['Fashion/Apparel', 'Beauty/Skincare', 'Home & Living', 'Food & Beverage', 'Health & Wellness', 'Tech/Electronics', 'Art & Crafts', 'Jewelry', 'Kids & Baby', 'Pet supplies', 'Other'] },
          { id: 'brand_story', type: 'textarea', label: 'Tell us your brand story', placeholder: 'Why did you start? What makes you different?' },
        ]
      },
      {
        title: 'Products & Inventory',
        questions: [
          { id: 'product_count', type: 'select', label: 'How many products will you have?', options: ['1-10', '11-50', '51-100', '100-500', '500+'] },
          { id: 'product_variants', type: 'toggle', label: 'Do your products have variants (sizes, colors)?', helper: 'e.g., T-shirt in S, M, L and multiple colors' },
          { id: 'custom_products', type: 'toggle', label: 'Do you offer customization or made-to-order?', helper: 'Personalized products, custom sizing, etc.' },
          { id: 'subscription', type: 'toggle', label: 'Do you offer subscriptions or recurring orders?', helper: 'Monthly boxes, auto-refills, memberships' },
          { id: 'digital_delivery', type: 'toggle', label: 'Do you sell digital downloads?', helper: 'PDFs, courses, software, etc.' },
        ]
      },
      {
        title: 'Shipping & Fulfillment',
        questions: [
          { id: 'shipping_regions', type: 'multiselect', label: 'Where do you ship?', options: ['United States only', 'US & Canada', 'North America', 'Worldwide', 'Select countries only'] },
          { id: 'shipping_options', type: 'multiselect', label: 'What shipping options do you offer?', options: ['Free shipping', 'Flat rate', 'Real-time carrier rates', 'Local pickup', 'Same-day delivery'] },
          { id: 'fulfillment', type: 'select', label: 'How do you fulfill orders?', options: ['I ship myself', 'Third-party fulfillment (3PL)', 'Dropshipping', 'Print on demand', 'Mix of methods'] },
          { id: 'returns', type: 'toggle', label: 'Do you accept returns?', helper: 'We\'ll create a clear returns policy page' },
        ]
      },
      {
        title: 'Payment & Checkout',
        questions: [
          { id: 'payment_methods', type: 'multiselect', label: 'What payment methods do you need?', options: ['Credit/Debit cards', 'PayPal', 'Apple Pay', 'Google Pay', 'Shop Pay', 'Klarna/Afterpay (Buy now, pay later)', 'Crypto'] },
          { id: 'currency', type: 'select', label: 'Primary currency', options: ['USD', 'CAD', 'EUR', 'GBP', 'AUD', 'Other'] },
          { id: 'multi_currency', type: 'toggle', label: 'Do you need multi-currency support?', helper: 'Show prices in customer\'s local currency' },
          { id: 'abandoned_cart', type: 'toggle', label: 'Do you want abandoned cart recovery?', helper: 'Automatically email customers who leave items in cart' },
        ]
      },
      {
        title: 'Marketing & Growth',
        questions: [
          { id: 'email_marketing', type: 'toggle', label: 'Do you need email marketing integration?', helper: 'Mailchimp, Klaviyo, etc.' },
          { id: 'reviews', type: 'toggle', label: 'Do you want product reviews on your site?', helper: 'Social proof helps conversions' },
          { id: 'loyalty', type: 'toggle', label: 'Do you want a loyalty/rewards program?', helper: 'Points for purchases, referrals, etc.' },
          { id: 'social_shop', type: 'toggle', label: 'Do you want Instagram/Facebook shop integration?', helper: 'Sell directly on social media' },
          { id: 'blog', type: 'toggle', label: 'Do you want a blog for content marketing?', helper: 'Great for SEO and building community' },
        ]
      },
      {
        title: 'Design Preferences',
        questions: [
          { id: 'style', type: 'select', label: 'What aesthetic fits your brand?', options: ['Clean & Minimal', 'Bold & Vibrant', 'Elegant & Luxury', 'Warm & Organic', 'Modern & Sleek', 'Playful & Fun', 'Classic & Traditional'] },
          { id: 'priority', type: 'select', label: 'What\'s most important for your store?', options: ['Beautiful imagery & brand story', 'Easy navigation & fast checkout', 'Product discovery & filtering', 'Content & education', 'Community & social proof'] },
          { id: 'inspiration', type: 'textarea', label: 'Any stores you love? (paste links)', placeholder: 'What do you love about them?' },
          { id: 'existing_brand', type: 'toggle', label: 'Do you have existing brand assets?', helper: 'Logo, colors, fonts, product photos' },
        ]
      },
    ]
  },
  beauty: {
    title: 'Beauty & Wellness',
    subtitle: "Let's build your beautiful online presence",
    sections: [
      {
        title: 'About You',
        questions: [
          { id: 'business_name', type: 'text', label: 'Business/salon name', required: true },
          { id: 'your_name', type: 'text', label: 'Your name (if personal brand)', placeholder: 'e.g., Color by Janine' },
          { id: 'specialty', type: 'multiselect', label: 'What are your specialties?', options: ['Hair color', 'Haircuts & styling', 'Extensions', 'Makeup', 'Skincare/facials', 'Nails', 'Lashes/brows', 'Waxing', 'Massage', 'Body treatments', 'Wellness coaching'], required: true },
          { id: 'experience', type: 'select', label: 'Years of experience', options: ['Just starting', '1-3 years', '3-5 years', '5-10 years', '10-15 years', '15+ years'] },
          { id: 'story', type: 'textarea', label: 'Tell us your story', placeholder: 'How did you get into this industry? What\'s your philosophy?' },
        ]
      },
      {
        title: 'Your Services',
        questions: [
          { id: 'service_list', type: 'textarea', label: 'List your main services and price ranges', placeholder: 'e.g., Balayage: $200-400, Single process color: $85+' },
          { id: 'service_count', type: 'select', label: 'Approximately how many services do you offer?', options: ['1-5', '6-15', '16-30', '30+'] },
          { id: 'consultations', type: 'toggle', label: 'Do you offer free consultations?', helper: 'Many clients want to meet before booking' },
          { id: 'packages', type: 'toggle', label: 'Do you offer service packages or bundles?', helper: 'e.g., Bridal packages, monthly memberships' },
          { id: 'gift_cards', type: 'toggle', label: 'Do you want to sell gift cards online?', helper: 'Great for holidays and gifting' },
        ]
      },
      {
        title: 'Booking & Scheduling',
        questions: [
          { id: 'booking_system', type: 'select', label: 'What booking system do you use (or want)?', options: ['Vagaro', 'Square Appointments', 'Acuity', 'Calendly', 'Fresha', 'Booksy', 'Boulevard', 'Schedulicity', 'Need recommendation', 'None yet'] },
          { id: 'deposit', type: 'toggle', label: 'Do you require deposits for appointments?', helper: 'We can integrate deposit collection' },
          { id: 'cancellation', type: 'toggle', label: 'Do you have a cancellation policy?', helper: 'We\'ll make it clear on the booking page' },
          { id: 'waitlist', type: 'toggle', label: 'Do you want a waitlist feature?', helper: 'For when you\'re fully booked' },
        ]
      },
      {
        title: 'Portfolio & Content',
        questions: [
          { id: 'portfolio_size', type: 'select', label: 'How many portfolio images do you have?', options: ['Less than 10', '10-30', '30-50', '50-100', '100+'] },
          { id: 'before_after', type: 'toggle', label: 'Do you want before/after comparisons?', helper: 'Great for transformations' },
          { id: 'instagram_feed', type: 'toggle', label: 'Do you want your Instagram feed on your site?', helper: 'Automatically show your latest work' },
          { id: 'video_content', type: 'toggle', label: 'Do you have video content to feature?', helper: 'Tutorials, behind-the-scenes, etc.' },
          { id: 'testimonials', type: 'toggle', label: 'Do you want client testimonials featured?', helper: 'Reviews build trust' },
        ]
      },
      {
        title: 'Products & Retail',
        questions: [
          { id: 'sell_products', type: 'toggle', label: 'Do you sell products?', helper: 'Hair care, skincare, etc.' },
          { id: 'product_count', type: 'select', label: 'If yes, how many products?', options: ['Not selling products', '1-10', '11-30', '30+'] },
          { id: 'product_type', type: 'multiselect', label: 'What types of products?', options: ['Professional hair care', 'Styling tools', 'Skincare', 'Makeup', 'Your own line', 'Affiliate products'] },
          { id: 'formulas', type: 'toggle', label: 'Do you want to sell formulas or education?', helper: 'Digital products for other stylists' },
        ]
      },
      {
        title: 'Business Details',
        questions: [
          { id: 'location_type', type: 'select', label: 'Where do you work?', options: ['Salon suite', 'Commission salon', 'Own salon', 'Mobile/traveling', 'Home studio', 'Multiple locations'] },
          { id: 'address', type: 'text', label: 'Business address (if applicable)', placeholder: 'Street address, city, state' },
          { id: 'parking', type: 'text', label: 'Parking/access instructions', placeholder: 'Any special instructions for clients?' },
          { id: 'team', type: 'select', label: 'Do you have a team?', options: ['Just me', '2-3 people', '4-6 people', '7+ people'] },
        ]
      },
      {
        title: 'Design Preferences',
        questions: [
          { id: 'style', type: 'select', label: 'What aesthetic fits your brand?', options: ['Clean & Minimal', 'Warm & Organic', 'Elegant & Luxe', 'Bold & Editorial', 'Soft & Feminine', 'Modern & Edgy', 'Classic & Timeless'] },
          { id: 'colors', type: 'text', label: 'What colors represent your brand?', placeholder: 'e.g., Warm neutrals, blush pink, cream' },
          { id: 'inspiration', type: 'textarea', label: 'Any websites you love? (paste links)', placeholder: 'What do you love about them?' },
          { id: 'existing_brand', type: 'toggle', label: 'Do you have existing brand assets?', helper: 'Logo, colors, fonts' },
          { id: 'photos', type: 'toggle', label: 'Do you have professional photos of yourself?', helper: 'For the About page and hero' },
        ]
      },
    ]
  },
  service: {
    title: 'Service Provider',
    subtitle: "Let's build your professional presence",
    sections: [
      {
        title: 'About Your Business',
        questions: [
          { id: 'business_name', type: 'text', label: 'Business or professional name', required: true },
          { id: 'title', type: 'text', label: 'Your title/role', placeholder: 'e.g., Marketing Consultant, Financial Advisor' },
          { id: 'industry', type: 'select', label: 'What industry are you in?', options: ['Marketing/Advertising', 'Finance/Accounting', 'Legal', 'Real Estate', 'Technology', 'Healthcare', 'Design/Creative', 'Consulting', 'HR/Recruiting', 'Insurance', 'Other'] },
          { id: 'years_experience', type: 'select', label: 'Years of experience', options: ['1-3', '3-5', '5-10', '10-20', '20+'] },
          { id: 'story', type: 'textarea', label: 'Your professional story', placeholder: 'Background, expertise, what drives you' },
        ]
      },
      {
        title: 'Your Services',
        questions: [
          { id: 'services', type: 'textarea', label: 'List your main services', placeholder: 'What do you offer? Be specific.' },
          { id: 'service_delivery', type: 'multiselect', label: 'How do you deliver services?', options: ['In-person', 'Virtual/remote', 'Hybrid', 'On-site at client location', 'Productized/packaged'] },
          { id: 'pricing_model', type: 'select', label: 'How do you price your services?', options: ['Hourly rate', 'Project-based', 'Retainer', 'Package pricing', 'Value-based', 'Mix of models', 'Prefer not to show pricing'] },
          { id: 'show_pricing', type: 'toggle', label: 'Do you want pricing visible on the website?', helper: 'Some prefer to discuss pricing on calls' },
        ]
      },
      {
        title: 'Client Engagement',
        questions: [
          { id: 'booking', type: 'toggle', label: 'Do you need appointment scheduling?', helper: 'For discovery calls, consultations, etc.' },
          { id: 'contact_form', type: 'toggle', label: 'Do you want a contact/inquiry form?', helper: 'Capture leads with specific questions' },
          { id: 'form_fields', type: 'multiselect', label: 'What info do you need from inquiries?', options: ['Name', 'Email', 'Phone', 'Company', 'Budget', 'Timeline', 'Project description', 'How they found you'] },
          { id: 'lead_magnet', type: 'toggle', label: 'Do you have a free resource to offer?', helper: 'PDF guide, checklist, etc. to capture emails' },
        ]
      },
      {
        title: 'Credibility & Social Proof',
        questions: [
          { id: 'testimonials', type: 'toggle', label: 'Do you have client testimonials?', helper: 'Reviews and case studies build trust' },
          { id: 'case_studies', type: 'toggle', label: 'Do you want to feature case studies?', helper: 'Detailed examples of client results' },
          { id: 'logos', type: 'toggle', label: 'Do you have recognizable client logos to display?', helper: '"As seen in" or "Trusted by" section' },
          { id: 'certifications', type: 'multiselect', label: 'Any certifications or credentials to highlight?', options: ['Industry certifications', 'Degrees', 'Awards', 'Media features', 'Speaking engagements', 'Publications'] },
        ]
      },
      {
        title: 'Content & Resources',
        questions: [
          { id: 'blog', type: 'toggle', label: 'Do you want a blog?', helper: 'Share expertise and improve SEO' },
          { id: 'resources', type: 'toggle', label: 'Do you have resources/downloads to offer?', helper: 'Guides, templates, tools' },
          { id: 'podcast', type: 'toggle', label: 'Do you have a podcast?', helper: 'We can embed episodes' },
          { id: 'newsletter', type: 'toggle', label: 'Do you have or want an email newsletter?', helper: 'Build your list' },
        ]
      },
      {
        title: 'Design Preferences',
        questions: [
          { id: 'style', type: 'select', label: 'What aesthetic fits your brand?', options: ['Professional & Corporate', 'Modern & Minimal', 'Warm & Approachable', 'Bold & Confident', 'Creative & Unique', 'Classic & Traditional'] },
          { id: 'tone', type: 'select', label: 'What tone should your website have?', options: ['Formal & authoritative', 'Friendly & approachable', 'Innovative & forward-thinking', 'Trusted & reliable', 'Personal & authentic'] },
          { id: 'inspiration', type: 'textarea', label: 'Any websites you admire? (paste links)', placeholder: 'What do you like about them?' },
          { id: 'existing_brand', type: 'toggle', label: 'Do you have existing brand assets?', helper: 'Logo, colors, fonts, headshot' },
        ]
      },
    ]
  },
  restaurant: {
    title: 'Restaurant & Food',
    subtitle: "Let's make mouths water online",
    sections: [
      {
        title: 'About Your Restaurant',
        questions: [
          { id: 'name', type: 'text', label: 'Restaurant name', required: true },
          { id: 'concept', type: 'text', label: 'One-line concept description', placeholder: 'e.g., Modern Japanese izakaya with craft cocktails' },
          { id: 'cuisine', type: 'multiselect', label: 'Type of cuisine', options: ['American', 'Italian', 'Mexican', 'Asian Fusion', 'Japanese', 'Chinese', 'Indian', 'Mediterranean', 'French', 'BBQ', 'Seafood', 'Vegan/Vegetarian', 'Cafe/Bakery', 'Fast Casual', 'Fine Dining', 'Other'] },
          { id: 'vibe', type: 'select', label: 'What\'s the vibe?', options: ['Casual & Family-friendly', 'Trendy & Hip', 'Romantic & Intimate', 'Upscale & Fine dining', 'Fast & Convenient', 'Fun & Lively'] },
          { id: 'story', type: 'textarea', label: 'Your restaurant\'s story', placeholder: 'The history, inspiration, what makes you special' },
        ]
      },
      {
        title: 'Menu & Ordering',
        questions: [
          { id: 'menu_size', type: 'select', label: 'How large is your menu?', options: ['Small/focused (under 20 items)', 'Medium (20-50 items)', 'Large (50-100 items)', 'Extensive (100+ items)'] },
          { id: 'menu_format', type: 'select', label: 'How do you want the menu displayed?', options: ['Visual with photos for each item', 'Clean text-based list', 'PDF download', 'Mix of featured items + full PDF'] },
          { id: 'online_ordering', type: 'toggle', label: 'Do you want online ordering?', helper: 'Takeout and delivery orders through your site' },
          { id: 'ordering_system', type: 'select', label: 'If yes, what system do you use/prefer?', options: ['Not needed', 'Toast', 'Square', 'ChowNow', 'Uber Eats integration', 'DoorDash Drive', 'Custom solution', 'Need recommendation'] },
          { id: 'catering', type: 'toggle', label: 'Do you offer catering?', helper: 'We\'ll create a catering inquiry page' },
        ]
      },
      {
        title: 'Reservations',
        questions: [
          { id: 'reservations', type: 'toggle', label: 'Do you take reservations?', helper: 'Or walk-ins only' },
          { id: 'resy_system', type: 'select', label: 'What reservation system do you use?', options: ['Walk-ins only', 'OpenTable', 'Resy', 'Yelp Reservations', 'Phone only', 'Google', 'Other', 'Need recommendation'] },
          { id: 'private_events', type: 'toggle', label: 'Do you host private events?', helper: 'We\'ll add a private events page' },
          { id: 'party_size', type: 'text', label: 'Max party size / private event capacity', placeholder: 'e.g., Up to 50 for private events' },
        ]
      },
      {
        title: 'Location & Hours',
        questions: [
          { id: 'locations', type: 'select', label: 'How many locations?', options: ['1', '2-3', '4-10', '10+'] },
          { id: 'address', type: 'text', label: 'Primary address', placeholder: 'Street address, city, state', required: true },
          { id: 'hours', type: 'textarea', label: 'Hours of operation', placeholder: 'Mon-Thu: 11am-10pm\nFri-Sat: 11am-11pm\nSun: 10am-9pm' },
          { id: 'parking', type: 'text', label: 'Parking info', placeholder: 'Valet, street parking, lot, etc.' },
        ]
      },
      {
        title: 'Visuals & Content',
        questions: [
          { id: 'photos', type: 'toggle', label: 'Do you have professional food photography?', helper: 'High-quality photos are crucial for restaurants' },
          { id: 'interior_photos', type: 'toggle', label: 'Do you have interior/ambiance photos?', helper: 'Show off your space' },
          { id: 'instagram', type: 'toggle', label: 'Do you want your Instagram feed on the site?', helper: 'Show your latest dishes' },
          { id: 'video', type: 'toggle', label: 'Do you have video content?', helper: 'Behind the scenes, chef features, etc.' },
        ]
      },
      {
        title: 'Design Preferences',
        questions: [
          { id: 'style', type: 'select', label: 'What aesthetic matches your restaurant?', options: ['Rustic & Warm', 'Modern & Minimal', 'Elegant & Upscale', 'Fun & Colorful', 'Industrial & Edgy', 'Classic & Traditional'] },
          { id: 'colors', type: 'text', label: 'Brand colors (if established)', placeholder: 'e.g., Deep red, cream, gold' },
          { id: 'inspiration', type: 'textarea', label: 'Any restaurant websites you love?', placeholder: 'Links and what you like about them' },
        ]
      },
    ]
  },
  creative: {
    title: 'Creative & Artist',
    subtitle: "Let's showcase your work beautifully",
    sections: [
      {
        title: 'About You',
        questions: [
          { id: 'name', type: 'text', label: 'Name or studio name', required: true },
          { id: 'discipline', type: 'multiselect', label: 'What\'s your creative discipline?', options: ['Photography', 'Graphic Design', 'Illustration', 'Fine Art', 'Motion/Video', 'Web Design', 'UI/UX Design', '3D/CGI', 'Fashion Design', 'Interior Design', 'Architecture', 'Music/Audio', 'Writing', 'Other'] },
          { id: 'specialty', type: 'text', label: 'Your specialty or niche', placeholder: 'e.g., Editorial fashion photography, brand identity design' },
          { id: 'experience', type: 'select', label: 'Years of experience', options: ['Just starting', '1-3 years', '3-5 years', '5-10 years', '10+ years'] },
          { id: 'bio', type: 'textarea', label: 'Your artist statement or bio', placeholder: 'Your background, philosophy, what drives your work' },
        ]
      },
      {
        title: 'Your Work',
        questions: [
          { id: 'portfolio_size', type: 'select', label: 'How many projects/pieces for your portfolio?', options: ['5-10', '10-20', '20-40', '40+'] },
          { id: 'portfolio_org', type: 'select', label: 'How do you want work organized?', options: ['By project', 'By category/type', 'By client', 'Chronological', 'Featured + archive'] },
          { id: 'case_studies', type: 'toggle', label: 'Do you want detailed case studies?', helper: 'In-depth look at process and results' },
          { id: 'client_work', type: 'toggle', label: 'Is your work primarily client-based?', helper: 'Or personal/fine art' },
          { id: 'notable_clients', type: 'toggle', label: 'Do you have notable clients to feature?', helper: 'Client logos or "worked with" section' },
        ]
      },
      {
        title: 'Services & Availability',
        questions: [
          { id: 'available_hire', type: 'toggle', label: 'Are you available for hire/commissions?', helper: 'Freelance, contract work' },
          { id: 'services', type: 'textarea', label: 'What services do you offer?', placeholder: 'List your offerings' },
          { id: 'show_pricing', type: 'toggle', label: 'Do you want to show pricing?', helper: 'Starting rates, packages, etc.' },
          { id: 'booking', type: 'toggle', label: 'Do you need scheduling/booking?', helper: 'For shoots, consultations, etc.' },
          { id: 'contact_form', type: 'toggle', label: 'Do you want a project inquiry form?', helper: 'Capture potential client details' },
        ]
      },
      {
        title: 'Selling Your Work',
        questions: [
          { id: 'sell_prints', type: 'toggle', label: 'Do you sell prints or products?', helper: 'Art prints, merchandise, etc.' },
          { id: 'sell_digital', type: 'toggle', label: 'Do you sell digital products?', helper: 'Presets, templates, courses, etc.' },
          { id: 'licensing', type: 'toggle', label: 'Do you license your work?', helper: 'For commercial use' },
          { id: 'shop_size', type: 'select', label: 'If selling, how many products?', options: ['Not selling', '1-10', '10-30', '30+'] },
        ]
      },
      {
        title: 'Content & Presence',
        questions: [
          { id: 'blog', type: 'toggle', label: 'Do you want a blog/journal?', helper: 'Behind the scenes, process, thoughts' },
          { id: 'instagram', type: 'toggle', label: 'Embed Instagram feed?', helper: 'Show your latest work automatically' },
          { id: 'newsletter', type: 'toggle', label: 'Do you have a newsletter?', helper: 'Updates, new work, etc.' },
          { id: 'press', type: 'toggle', label: 'Do you have press/features to highlight?', helper: 'Publications, awards, exhibitions' },
        ]
      },
      {
        title: 'Design Preferences',
        questions: [
          { id: 'style', type: 'select', label: 'What aesthetic fits your brand?', options: ['Minimal & Clean', 'Bold & Expressive', 'Dark & Moody', 'Light & Airy', 'Editorial & Magazine-style', 'Artistic & Experimental'] },
          { id: 'layout', type: 'select', label: 'Portfolio layout preference', options: ['Grid gallery', 'Full-bleed images', 'Masonry/Pinterest-style', 'Slideshow', 'Horizontal scroll', 'Mix of layouts'] },
          { id: 'inspiration', type: 'textarea', label: 'Portfolio websites you admire', placeholder: 'Links and what you like about them' },
          { id: 'existing_brand', type: 'toggle', label: 'Do you have existing brand assets?', helper: 'Logo, colors, fonts' },
        ]
      },
    ]
  },
  coach: {
    title: 'Coach & Educator',
    subtitle: "Let's amplify your impact",
    sections: [
      {
        title: 'About You',
        questions: [
          { id: 'name', type: 'text', label: 'Your name or brand name', required: true },
          { id: 'title', type: 'text', label: 'Your title', placeholder: 'e.g., Life Coach, Business Mentor, Course Creator' },
          { id: 'niche', type: 'select', label: 'What\'s your coaching/teaching niche?', options: ['Life coaching', 'Business/entrepreneur', 'Career/leadership', 'Health & wellness', 'Relationships', 'Mindset/mindfulness', 'Finance/money', 'Creativity', 'Parenting', 'Spiritual', 'Academic', 'Skills training', 'Other'] },
          { id: 'bio', type: 'textarea', label: 'Your story and credentials', placeholder: 'Background, certifications, what brought you to this work' },
          { id: 'transformation', type: 'textarea', label: 'What transformation do you help clients achieve?', placeholder: 'Before and after - what changes for them?' },
        ]
      },
      {
        title: 'Your Offerings',
        questions: [
          { id: 'offerings', type: 'multiselect', label: 'What do you offer?', options: ['1:1 coaching', 'Group coaching', 'Online courses', 'Workshops', 'Retreats', 'Memberships', 'Masterminds', 'Speaking', 'Corporate training', 'Books/ebooks', 'Podcast', 'Free resources'] },
          { id: 'flagship', type: 'text', label: 'What\'s your flagship offering?', placeholder: 'Your main program or service' },
          { id: 'price_range', type: 'select', label: 'What\'s your typical price range?', options: ['Under $100', '$100-500', '$500-2,000', '$2,000-5,000', '$5,000-10,000', '$10,000+', 'Varies widely'] },
          { id: 'show_pricing', type: 'toggle', label: 'Show pricing on website?', helper: 'Or "apply" / "book a call" model' },
        ]
      },
      {
        title: 'Courses & Digital Products',
        questions: [
          { id: 'has_courses', type: 'toggle', label: 'Do you have online courses?', helper: 'Pre-recorded video courses' },
          { id: 'course_platform', type: 'select', label: 'What platform do you use?', options: ['None yet', 'Teachable', 'Kajabi', 'Thinkific', 'Podia', 'Kartra', 'Custom', 'Need recommendation'] },
          { id: 'membership', type: 'toggle', label: 'Do you have a membership/community?', helper: 'Recurring subscription offering' },
          { id: 'freebies', type: 'toggle', label: 'Do you offer free resources?', helper: 'Lead magnets, downloads, mini-courses' },
          { id: 'freebie_list', type: 'textarea', label: 'If yes, list your free resources', placeholder: 'PDF guides, checklists, video series, etc.' },
        ]
      },
      {
        title: 'Client Engagement',
        questions: [
          { id: 'booking', type: 'toggle', label: 'Do you need appointment booking?', helper: 'Discovery calls, coaching sessions' },
          { id: 'booking_tool', type: 'select', label: 'What booking tool do you use?', options: ['None yet', 'Calendly', 'Acuity', 'Cal.com', 'HubSpot', 'Other', 'Need recommendation'] },
          { id: 'application', type: 'toggle', label: 'Do clients apply to work with you?', helper: 'Application form instead of direct booking' },
          { id: 'waitlist', type: 'toggle', label: 'Do you need a waitlist feature?', helper: 'For launches or limited spots' },
        ]
      },
      {
        title: 'Content & Marketing',
        questions: [
          { id: 'podcast', type: 'toggle', label: 'Do you have a podcast?', helper: 'We can embed episodes' },
          { id: 'blog', type: 'toggle', label: 'Do you want a blog?', helper: 'Articles, tips, thought leadership' },
          { id: 'newsletter', type: 'toggle', label: 'Do you have an email list?', helper: 'Email signup integration' },
          { id: 'email_tool', type: 'select', label: 'What email tool do you use?', options: ['None', 'ConvertKit', 'Mailchimp', 'ActiveCampaign', 'Flodesk', 'Kajabi', 'Other'] },
          { id: 'speaking', type: 'toggle', label: 'Do you do speaking/media?', helper: 'Speaking page, media kit' },
        ]
      },
      {
        title: 'Social Proof',
        questions: [
          { id: 'testimonials', type: 'toggle', label: 'Do you have client testimonials?', helper: 'Written or video testimonials' },
          { id: 'results', type: 'toggle', label: 'Do you have measurable client results?', helper: 'Stats, before/after, case studies' },
          { id: 'features', type: 'toggle', label: 'Have you been featured in media?', helper: 'Podcasts, publications, TV, etc.' },
          { id: 'credentials', type: 'multiselect', label: 'Credentials to highlight', options: ['Certifications', 'Degrees', 'Awards', 'Books published', 'Clients served', 'Years experience'] },
        ]
      },
      {
        title: 'Design Preferences',
        questions: [
          { id: 'style', type: 'select', label: 'What aesthetic fits your brand?', options: ['Warm & Inviting', 'Professional & Polished', 'Bold & Energetic', 'Calm & Minimal', 'Luxurious & Premium', 'Fun & Colorful'] },
          { id: 'tone', type: 'select', label: 'What tone should your site have?', options: ['Inspiring & motivational', 'Warm & nurturing', 'Professional & authoritative', 'Fun & approachable', 'Spiritual & peaceful'] },
          { id: 'inspiration', type: 'textarea', label: 'Any coach/educator websites you love?', placeholder: 'Links and what you like about them' },
          { id: 'existing_brand', type: 'toggle', label: 'Do you have existing brand assets?', helper: 'Logo, colors, photos' },
        ]
      },
    ]
  },
  fitness: {
    title: 'Fitness & Health',
    subtitle: "Let's energize your online presence",
    sections: [
      {
        title: 'About You/Your Business',
        questions: [
          { id: 'name', type: 'text', label: 'Business/brand name', required: true },
          { id: 'type', type: 'select', label: 'What type of fitness business?', options: ['Personal trainer', 'Gym/studio', 'Yoga/Pilates studio', 'CrossFit box', 'Online coaching', 'Boutique fitness', 'Martial arts', 'Dance studio', 'Sports training', 'Wellness center', 'Other'] },
          { id: 'specialty', type: 'multiselect', label: 'Your specialties', options: ['Weight loss', 'Muscle building', 'HIIT', 'Yoga', 'Pilates', 'CrossFit', 'Boxing/kickboxing', 'Running', 'Sports performance', 'Mobility/flexibility', 'Nutrition', 'Mindfulness', 'Pre/postnatal', 'Senior fitness', 'Rehab/injury'] },
          { id: 'experience', type: 'select', label: 'Years in fitness industry', options: ['1-3', '3-5', '5-10', '10-15', '15+'] },
          { id: 'story', type: 'textarea', label: 'Your fitness journey/story', placeholder: 'What brought you here? What\'s your philosophy?' },
        ]
      },
      {
        title: 'Services & Programs',
        questions: [
          { id: 'offerings', type: 'multiselect', label: 'What do you offer?', options: ['1:1 training', 'Small group training', 'Group classes', 'Online coaching', 'Workout programs', 'Nutrition coaching', 'Challenges', 'Memberships', 'Workshops', 'Retreats', 'Corporate wellness'] },
          { id: 'class_schedule', type: 'toggle', label: 'Do you have a class schedule?', helper: 'Regular recurring classes' },
          { id: 'programs', type: 'textarea', label: 'Describe your main programs/services', placeholder: 'What you offer and approximate pricing' },
          { id: 'online_programs', type: 'toggle', label: 'Do you offer online/digital programs?', helper: 'Workout plans, video libraries, apps' },
        ]
      },
      {
        title: 'Booking & Scheduling',
        questions: [
          { id: 'booking_system', type: 'select', label: 'What booking/scheduling system do you use?', options: ['None yet', 'Mindbody', 'WellnessLiving', 'Vagaro', 'Acuity', 'Zen Planner', 'PushPress', 'Calendly', 'Other', 'Need recommendation'] },
          { id: 'trial', type: 'toggle', label: 'Do you offer a free trial or first session?', helper: 'Common for gyms and studios' },
          { id: 'memberships', type: 'toggle', label: 'Do you have membership plans?', helper: 'Monthly, annual, class packs, etc.' },
          { id: 'packages', type: 'toggle', label: 'Do you sell session packages?', helper: '5-pack, 10-pack, etc.' },
        ]
      },
      {
        title: 'Location & Facilities',
        questions: [
          { id: 'location_type', type: 'select', label: 'Where do you train clients?', options: ['Own gym/studio', 'Client\'s home', 'Outdoor', 'Commercial gym', 'Online only', 'Multiple locations', 'Hybrid'] },
          { id: 'address', type: 'text', label: 'Address (if applicable)', placeholder: 'Street address, city, state' },
          { id: 'amenities', type: 'multiselect', label: 'Amenities to highlight', options: ['Locker rooms', 'Showers', 'Parking', 'Childcare', 'Smoothie bar', 'Retail shop', 'Sauna/steam', 'Recovery room'] },
          { id: 'team', type: 'select', label: 'Do you have a team?', options: ['Just me', '2-5 trainers', '6-10 trainers', '10+ trainers'] },
        ]
      },
      {
        title: 'Transformations & Results',
        questions: [
          { id: 'transformations', type: 'toggle', label: 'Do you have before/after transformations?', helper: 'Client success stories with photos' },
          { id: 'testimonials', type: 'toggle', label: 'Do you have video testimonials?', helper: 'Clients sharing their experience' },
          { id: 'metrics', type: 'toggle', label: 'Do you track measurable results?', helper: 'Pounds lost, strength gains, etc.' },
          { id: 'certifications', type: 'multiselect', label: 'Certifications to display', options: ['ACE', 'NASM', 'ISSA', 'ACSM', 'NSCA', 'CrossFit', 'Yoga Alliance', 'Pilates certification', 'Nutrition certification', 'Other'] },
        ]
      },
      {
        title: 'Content & Marketing',
        questions: [
          { id: 'instagram', type: 'toggle', label: 'Embed Instagram/social feed?', helper: 'Show workouts, tips, community' },
          { id: 'blog', type: 'toggle', label: 'Do you want a blog?', helper: 'Workout tips, nutrition advice, etc.' },
          { id: 'newsletter', type: 'toggle', label: 'Do you have an email list?', helper: 'Tips, challenges, promotions' },
          { id: 'youtube', type: 'toggle', label: 'Do you have YouTube content?', helper: 'Workout videos to embed' },
        ]
      },
      {
        title: 'E-commerce',
        questions: [
          { id: 'sell_products', type: 'toggle', label: 'Do you sell products?', helper: 'Supplements, apparel, equipment' },
          { id: 'sell_programs', type: 'toggle', label: 'Do you sell digital programs?', helper: 'Downloadable workout plans, ebooks' },
          { id: 'merchandise', type: 'toggle', label: 'Do you sell branded merchandise?', helper: 'T-shirts, gear, etc.' },
        ]
      },
      {
        title: 'Design Preferences',
        questions: [
          { id: 'style', type: 'select', label: 'What aesthetic fits your brand?', options: ['Bold & Energetic', 'Clean & Modern', 'Warm & Welcoming', 'Edgy & Intense', 'Calm & Zen', 'Fun & Playful'] },
          { id: 'colors', type: 'text', label: 'Brand colors', placeholder: 'e.g., Black, neon green, white' },
          { id: 'inspiration', type: 'textarea', label: 'Fitness websites you admire', placeholder: 'Links and what you like about them' },
          { id: 'photos', type: 'toggle', label: 'Do you have professional photos?', helper: 'Of you, your space, clients' },
        ]
      },
    ]
  },
  realestate: {
    title: 'Real Estate',
    subtitle: "Let's build your property powerhouse",
    sections: [
      {
        title: 'About You',
        questions: [
          { id: 'name', type: 'text', label: 'Your name or team name', required: true },
          { id: 'title', type: 'text', label: 'Your title', placeholder: 'e.g., Realtor, Broker, Team Lead' },
          { id: 'brokerage', type: 'text', label: 'Brokerage name', placeholder: 'e.g., Compass, Keller Williams' },
          { id: 'markets', type: 'text', label: 'Markets you serve', placeholder: 'e.g., Los Angeles, Beverly Hills, West Hollywood' },
          { id: 'experience', type: 'select', label: 'Years in real estate', options: ['1-3', '3-5', '5-10', '10-20', '20+'] },
          { id: 'bio', type: 'textarea', label: 'Your professional bio', placeholder: 'Background, specialties, what sets you apart' },
        ]
      },
      {
        title: 'Your Specialties',
        questions: [
          { id: 'transaction_types', type: 'multiselect', label: 'What types of transactions?', options: ['Buyers', 'Sellers', 'Both buyers & sellers', 'Investors', 'New construction', 'Relocation', 'Luxury', 'First-time buyers'] },
          { id: 'property_types', type: 'multiselect', label: 'Property types', options: ['Single family homes', 'Condos', 'Townhomes', 'Luxury estates', 'Investment properties', 'Commercial', 'Land', 'New development'] },
          { id: 'price_range', type: 'text', label: 'Typical price range', placeholder: 'e.g., $500K - $5M' },
          { id: 'niche', type: 'text', label: 'Any specialty niches?', placeholder: 'e.g., Probate, divorce, historic homes' },
        ]
      },
      {
        title: 'Listings & Properties',
        questions: [
          { id: 'idx', type: 'toggle', label: 'Do you want IDX/MLS integration?', helper: 'Show active listings from MLS on your site' },
          { id: 'idx_provider', type: 'select', label: 'IDX provider preference', options: ['Not sure', 'IDX Broker', 'Showcase IDX', 'iHomefinder', 'Diverse Solutions', 'Brokerage-provided', 'Need recommendation'] },
          { id: 'featured_listings', type: 'toggle', label: 'Feature your own listings prominently?', helper: 'Showcase your active and sold listings' },
          { id: 'sold', type: 'toggle', label: 'Display your sold properties?', helper: 'Social proof of your success' },
          { id: 'virtual_tours', type: 'toggle', label: 'Do you use virtual tours/3D?', helper: 'Matterport, video tours, etc.' },
        ]
      },
      {
        title: 'Lead Generation',
        questions: [
          { id: 'lead_capture', type: 'multiselect', label: 'Lead capture methods you want', options: ['Contact form', 'Property valuation tool', 'Buyer questionnaire', 'Seller questionnaire', 'Newsletter signup', 'Free guides/downloads', 'Chat widget'] },
          { id: 'home_valuation', type: 'toggle', label: 'Do you want a home valuation tool?', helper: '"What\'s my home worth?" captures seller leads' },
          { id: 'buyer_guide', type: 'toggle', label: 'Offer a free buyer\'s guide?', helper: 'PDF download to capture buyer leads' },
          { id: 'seller_guide', type: 'toggle', label: 'Offer a free seller\'s guide?', helper: 'PDF download to capture seller leads' },
          { id: 'crm', type: 'select', label: 'What CRM do you use?', options: ['None', 'Follow Up Boss', 'LionDesk', 'kvCORE', 'BoomTown', 'Salesforce', 'HubSpot', 'Other'] },
        ]
      },
      {
        title: 'Content & Resources',
        questions: [
          { id: 'blog', type: 'toggle', label: 'Do you want a blog?', helper: 'Market updates, tips, neighborhood guides' },
          { id: 'neighborhood_pages', type: 'toggle', label: 'Do you want neighborhood/area pages?', helper: 'Detailed guides for each area you serve' },
          { id: 'market_reports', type: 'toggle', label: 'Do you share market reports?', helper: 'Monthly/quarterly market updates' },
          { id: 'youtube', type: 'toggle', label: 'Do you have video content?', helper: 'Property tours, market updates, tips' },
        ]
      },
      {
        title: 'Social Proof',
        questions: [
          { id: 'testimonials', type: 'toggle', label: 'Do you have client testimonials?', helper: 'Reviews from past clients' },
          { id: 'video_testimonials', type: 'toggle', label: 'Do you have video testimonials?', helper: 'More impactful than written' },
          { id: 'stats', type: 'multiselect', label: 'Stats to display', options: ['Homes sold', 'Total volume', 'Years experience', 'Average days on market', 'List-to-sale ratio', 'Client satisfaction'] },
          { id: 'awards', type: 'toggle', label: 'Any awards or rankings to feature?', helper: 'Top producer, etc.' },
        ]
      },
      {
        title: 'Design Preferences',
        questions: [
          { id: 'style', type: 'select', label: 'What aesthetic fits your brand?', options: ['Luxury & Sophisticated', 'Modern & Clean', 'Warm & Approachable', 'Bold & Confident', 'Classic & Traditional'] },
          { id: 'photo_heavy', type: 'toggle', label: 'Do you have professional photography?', helper: 'Of you, properties, lifestyle shots' },
          { id: 'inspiration', type: 'textarea', label: 'Real estate websites you admire', placeholder: 'Links and what you like about them' },
          { id: 'existing_brand', type: 'toggle', label: 'Do you have existing brand assets?', helper: 'Logo, colors, headshots' },
        ]
      },
    ]
  },
};

export default function TypeQuestionnaire() {
  const params = useParams();
  const type = params.type as string;
  const data = questionnaireData[type];
  
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState<Record<string, unknown>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSection]);

  if (!data) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light mb-4">Category not found</h1>
          <Link href="/" className="text-[#B87D5E] hover:underline">← Back to home</Link>
        </div>
      </div>
    );
  }

  const section = data.sections[currentSection];
  const progress = ((currentSection + 1) / data.sections.length) * 100;
  const isLastSection = currentSection === data.sections.length - 1;

  const updateAnswer = (id: string, value: unknown) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const toggleMultiSelect = (id: string, option: string) => {
    setAnswers(prev => {
      const current = (prev[id] as string[]) || [];
      if (current.includes(option)) {
        return { ...prev, [id]: current.filter(o => o !== option) };
      }
      return { ...prev, [id]: [...current, option] };
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', { type, answers });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center px-6">
        <div className="max-w-lg text-center">
          <div className="w-20 h-20 bg-[#B87D5E]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-[#B87D5E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-light mb-4">You're all set!</h1>
          <p className="text-[#6B635A] mb-8">
            We've received your questionnaire and will be in touch within 24 hours 
            to discuss your project and next steps.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-[#B87D5E] hover:underline"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Header */}
      <header className="glass fixed top-0 left-0 right-0 z-50 border-b border-[#E8DDD4]/50">
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="text-xl">
            <span className="font-light">the</span>
            <span className="font-semibold gradient-text">canvas</span>
            <span className="font-light">co</span>
          </Link>
          <div className="text-sm text-[#6B635A]">
            {currentSection + 1} of {data.sections.length}
          </div>
        </div>
        <div className="h-1 bg-[#E8DDD4]">
          <div 
            className="h-full bg-gradient-to-r from-[#B87D5E] to-[#C9A66B] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-6 pt-32 pb-24">
        <div className="mb-12">
          <p className="text-[#B87D5E] text-sm uppercase tracking-[0.2em] mb-2">{data.title}</p>
          <h1 className="text-3xl md:text-4xl font-light mb-2">{section.title}</h1>
          <p className="text-[#6B635A]">{data.subtitle}</p>
        </div>

        <div className="space-y-8">
          {section.questions.map((q) => (
            <div key={q.id}>
              <label className="block text-sm font-medium mb-2">
                {q.label}
                {q.required && <span className="text-[#B87D5E] ml-1">*</span>}
              </label>
              {q.helper && (
                <p className="text-sm text-[#6B635A] mb-3">{q.helper}</p>
              )}

              {q.type === 'text' && (
                <input
                  type="text"
                  value={(answers[q.id] as string) || ''}
                  onChange={(e) => updateAnswer(q.id, e.target.value)}
                  placeholder={q.placeholder}
                  className="w-full px-5 py-4 rounded-xl bg-white border border-[#E8DDD4] focus:outline-none focus:border-[#B87D5E] transition-colors"
                />
              )}

              {q.type === 'textarea' && (
                <textarea
                  value={(answers[q.id] as string) || ''}
                  onChange={(e) => updateAnswer(q.id, e.target.value)}
                  placeholder={q.placeholder}
                  rows={4}
                  className="w-full px-5 py-4 rounded-xl bg-white border border-[#E8DDD4] focus:outline-none focus:border-[#B87D5E] resize-none transition-colors"
                />
              )}

              {q.type === 'select' && (
                <select
                  value={(answers[q.id] as string) || ''}
                  onChange={(e) => updateAnswer(q.id, e.target.value)}
                  className="w-full px-5 py-4 rounded-xl bg-white border border-[#E8DDD4] focus:outline-none focus:border-[#B87D5E] transition-colors"
                >
                  <option value="">Select an option</option>
                  {q.options?.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              )}

              {q.type === 'multiselect' && (
                <div className="flex flex-wrap gap-2">
                  {q.options?.map((opt) => {
                    const selected = ((answers[q.id] as string[]) || []).includes(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleMultiSelect(q.id, opt)}
                        className={`px-4 py-2 rounded-full text-sm transition-all ${
                          selected
                            ? 'bg-[#1a1814] text-white'
                            : 'bg-white border border-[#E8DDD4] hover:border-[#B87D5E]'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              )}

              {q.type === 'toggle' && (
                <button
                  type="button"
                  onClick={() => updateAnswer(q.id, !answers[q.id])}
                  className={`relative w-14 h-8 rounded-full transition-colors ${
                    answers[q.id] ? 'bg-[#B87D5E]' : 'bg-[#E8DDD4]'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow transition-transform ${
                      answers[q.id] ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-16 pt-8 border-t border-[#E8DDD4]">
          {currentSection > 0 ? (
            <button
              onClick={() => setCurrentSection(prev => prev - 1)}
              className="flex items-center gap-2 text-[#6B635A] hover:text-[#1a1814] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back
            </button>
          ) : (
            <Link href="/" className="flex items-center gap-2 text-[#6B635A] hover:text-[#1a1814] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Exit
            </Link>
          )}

          <button
            onClick={isLastSection ? handleSubmit : () => setCurrentSection(prev => prev + 1)}
            className="group flex items-center gap-2 bg-[#1a1814] text-white px-8 py-4 rounded-full font-medium hover:bg-[#6B635A] transition-all"
          >
            {isLastSection ? 'Submit' : 'Continue'}
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isLastSection ? "M5 13l4 4L19 7" : "M17 8l4 4m0 0l-4 4m4-4H3"} />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
}
