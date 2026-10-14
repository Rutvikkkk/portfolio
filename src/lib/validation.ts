import { z } from "zod";

export const directMessageSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(5, "Please share a message"),
});

export type DirectMessageValues = z.infer<typeof directMessageSchema>;
