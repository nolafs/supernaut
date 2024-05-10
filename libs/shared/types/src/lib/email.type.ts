import {z} from 'zod';

export interface IContactFormInput {
  name: string;
  email: string;
  enquiryType: string;
  message: string;
  agreeToTerms: boolean;
}


export const emailSchema = z.object({
  'form-name': z.string().optional(),
  name: z.string().min(1, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  enquiryType: z.string().min(1, 'Please select the nature of your enquiry'),
  message: z.string().min(1, 'Please enter your message'),
  agreeToTerms: z.boolean().refine(val => val, 'You must agree to the Terms & Conditions')
});
