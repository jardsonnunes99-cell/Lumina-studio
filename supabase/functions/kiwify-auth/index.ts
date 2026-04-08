import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const KIWIFY_CLIENT_ID = Deno.env.get('KIWIFY_CLIENT_ID') ?? '8287d9dd-35f1-43d3-9fda-5fd9d77801bf';
const KIWIFY_CLIENT_SECRET = Deno.env.get('KIWIFY_CLIENT_SECRET') ?? '9013fc97-9de4-4858-94ba-82fe69df6977';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

async function getKiwifyToken() {
  const response = await fetch('https://kiwify.com.br/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: KIWIFY_CLIENT_ID,
      client_secret: KIWIFY_CLIENT_SECRET,
    }),
  });

  if (!response.ok) {
    throw new Error('Falha ao autenticar na Kiwify');
  }

  const data = await response.json();
  return data.access_token;
}

async function checkKiwifyPurchase(email: string, token: string) {
  const response = await fetch(`https://kiwify.com.br/api/v1/sales?email=${encodeURIComponent(email)}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Falha ao buscar vendas na Kiwify');
  }

  const data = await response.json();
  
  // Verifica se há pelo menos uma compra paga (status "paid") 
  const sales = data.data || [];
  const hasPaidPurchase = sales.some((sale: any) => sale.status === 'paid' || sale.status === 'approved');
  
  return hasPaidPurchase;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: 'E-mail não fornecido' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const token = await getKiwifyToken();
    const isAuthorized = await checkKiwifyPurchase(email, token);

    return new Response(JSON.stringify({ authorized: isAuthorized }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
