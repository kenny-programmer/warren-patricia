import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

export type Guest = {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  attending: string;
  guest_count?: number;
  mealpreference?: string;
  specialrequirements?: string;
  message?: string;
  is_primary_guest?: boolean;
  primary_guest_email?: string;
  created_at?: string;
};

export async function fetchRSVPs(): Promise<Guest[]> {
  const { data, error } = await supabase
    .from('rsvps')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data as Guest[];
}

export async function submitRSVP(data: Guest): Promise<void> {
  const { error } = await supabase.from('rsvps').insert([data]);
  if (error) throw error;
}

// Duplicate check helpers
export async function checkDuplicateEmail(email: string): Promise<boolean> {
  const { data } = await supabase
    .from('rsvps')
    .select('id')
    .eq('email', email)
    .maybeSingle();
  return !!data;
}

export async function checkDuplicatePhone(phone: string): Promise<boolean> {
  if (!phone) return false;
  const { data } = await supabase
    .from('rsvps')
    .select('id')
    .eq('phone', phone)
    .maybeSingle();
  return !!data;
}


export async function deleteRSVP(id: string): Promise<void> {
  const { error } = await supabase.from("rsvps").delete().eq("id", id);
  if (error) throw error;
}
