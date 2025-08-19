'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

// Global function declarations for analytics tracking
declare global {
  interface Window {
    trackConversion?: (action: string) => void;
  }
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  issue: string;
  description: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    issue: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track contact form submission
    if (typeof window !== 'undefined' && window.trackConversion) {
      window.trackConversion('contact_form_submit');
    }

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Redirect to hub confirmation page
    window.location.href = 'https://mpdee.co.uk/contact-received';
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="phone">Phone (optional)</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label htmlFor="company">Company (optional)</Label>
        <Input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label htmlFor="issue">Issue Type *</Label>
        <select
          id="issue"
          name="issue"
          value={formData.issue}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select an issue type...</option>
          <option value="hardware">Hardware Issue</option>
          <option value="software">Software Problem</option>
          <option value="network">Network/Internet Issue</option>
          <option value="security">Security Concern</option>
          <option value="general">General Support</option>
          <option value="consultation">Consultation Request</option>
        </select>
      </div>

      <div>
        <Label htmlFor="description">Description *</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Please describe your issue or request in detail..."
          rows={4}
          required
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full support-gradient text-white hover:opacity-90"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Support Request'}
      </Button>
    </form>
  );
}
