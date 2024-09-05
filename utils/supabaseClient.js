import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

// Salva a resposta na tabela responses
export const saveResponse = async (name, email, answers) => {
  const { data, error } = await supabase
    .from('responses_L') // Alterado para 'responses'
    .insert([{ name, email, answers }]);

  if (error) {
    console.error('Error saving response:', error);
  }

  return { data, error };
};

// Função para redirecionar o usuário de volta para a tela de nome e email
export const redirectToNameEmailScreen = () => {
  // Redireciona para a tela de nome e email
  window.location.href = '/index';
};

export default supabase;
