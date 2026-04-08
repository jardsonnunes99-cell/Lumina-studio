import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

// Trocar pelo IP do seu Evolution API e Token Global
const EVOLUTION_API_URL = Deno.env.get('EVOLUTION_API_URL') || "http://SUA_VPS_AQUI:8080/message/sendText/Lumina"
const EVOLUTION_API_KEY = Deno.env.get('EVOLUTION_API_KEY') || "SUA_API_KEY_GLOBAL"

serve(async (req) => {
    try {
        // 1. Recebe o payload do Webhook do Supabase (quando insere em 'clientes')
        const payload = await req.json()
        const record = payload.record

        // Se não for um registro novo com id, rejeita
        if (!record || !record.id || !record.numero_cliente) {
            return new Response(JSON.stringify({ error: "Número ou ID de cliente não encontrado." }), { status: 400 })
        }

        const clienteId = record.id
        const nome = record.nome_cliente || "Cliente"
        const telefone = "55" + record.numero_cliente.replace(/\D/g, '') // Garante DDI 55
        const linkGaleria = `https://lumina-studio-bice.vercel.app/galeria/?transaction_id=${record.transaction_id}`

        // 2. Monta a Mensagem conforme o dono pediu
        const mensagem_whatsapp = `*Obrigado pela confiança, ${nome}!* 🎉\n\nSuas fotos já estão disponíveis para escolha.\n\nClique no link abaixo para selecionar as fotos que você adquiriu:\n🔗 ${linkGaleria}\n\nDesde já, um Feliz Aniversário da Equipe Lumina Studio! 📸✨`

        // 3. Dispara para o Evolution API (ou sua API de WhatsApp)
        const whatsappReq = await fetch(EVOLUTION_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "apikey": EVOLUTION_API_KEY
            },
            body: JSON.stringify({
                number: telefone,
                text: mensagem_whatsapp
            })
        })

        const result = await whatsappReq.json()

        return new Response(
            JSON.stringify({ success: true, message: "WhatsApp enviado!", result }),
            { headers: { "Content-Type": "application/json" } },
        )
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 })
    }
})
