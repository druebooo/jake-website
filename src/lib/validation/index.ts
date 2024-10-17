import * as z from "zod";

export const SignupValidation = z.object({
    name: z.string().min(2, 'Too Short').max(50),
    username: z.string().min(2, 'Too Short').max(50),
    email: z.string().email(),
    password: z.string().min(8, 'Password must be atleast 8 characters')
  })

  export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, 'Password must be atleast 8 characters')
  })

  export const PostValidation = z.object({
    caption: z.string().min(5).max(2200),
    file: z.custom<File[]>(),
    location: z.string(),
    tags: z.string(),
  })

  export const ProfileValidation = z.object({
    file: z.custom<File[]>(),
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    username: z.string(),
    email: z.string().email(),
    bio: z.string(),
  });