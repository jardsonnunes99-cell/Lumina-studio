// ─── META CONVERSIONS API (CAPI) ─────────────────────────────────────────────
// Documentação: https://developers.facebook.com/docs/marketing-api/conversions-api

const META_PIXEL_ID = "3046746782192073";
const META_ACCESS_TOKEN =
    "EAA4kfEmICLcBQz7PcrPwgDC8S03ZCfFAtiAubPs3GnIZAzuZChSGtyAhONOHjSZCnqpWZAXORYygzVOuZAF3WTS0RlahWAnckzRsnp3FqZC7DiXYDjTolwn4T9JYl5U1SNuhwv476ZC0muQX1GQw4bdwBtHZCkZADuBe0HspYjzXxRlFE0Q6L0z6X9BNwZC1fbgqwZDZD";

const META_API_URL = `https://graph.facebook.com/v19.0/${META_PIXEL_ID}/events`;

/**
 * Gera hash SHA-256 de uma string (exigido pela Meta para dados do usuário).
 */
async function sha256(value: string): Promise<string> {
    const msgBuffer = new TextEncoder().encode(value.trim().toLowerCase());
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

interface MetaEventOptions {
    eventName:
        | "Purchase"
        | "InitiateCheckout"
        | "Lead"
        | "ViewContent"
        | "AddToCart";
    phone?: string;       // Telefone do usuário (será hasheado automaticamente)
    email?: string;       // E-mail do usuário (será hasheado automaticamente)
    value?: number;       // Valor monetário (ex: 29.90)
    currency?: string;    // Moeda (padrão: BRL)
    contentName?: string; // Nome do produto/ensaio
}

/**
 * Envia um evento para a Meta Conversions API (CAPI).
 * Faz hash automático de telefone e e-mail conforme exigências do Meta.
 */
export async function sendMetaEvent(options: MetaEventOptions): Promise<void> {
    const {
        eventName,
        phone,
        email,
        value,
        currency = "BRL",
        contentName,
    } = options;

    try {
        // ── Preparar dados do usuário (hasheados) ──
        const userData: Record<string, string | null | string[]> = {};

        if (phone) {
            // Remove formatação e adiciona DDI 55 se necessário
            const cleanPhone = phone.replace(/\D/g, "");
            const phoneWithDDI = cleanPhone.startsWith("55")
                ? cleanPhone
                : `55${cleanPhone}`;
            userData["ph"] = [await sha256(phoneWithDDI)];
        } else {
            userData["ph"] = [null];
        }

        if (email) {
            userData["em"] = [await sha256(email)];
        } else {
            userData["em"] = [null];
        }

        // ── Montar payload ──
        const eventTime = Math.floor(Date.now() / 1000);

        const payload: Record<string, unknown> = {
            event_name: eventName,
            event_time: eventTime,
            action_source: "website",
            user_data: userData,
            original_event_data: {
                event_name: eventName,
                event_time: eventTime,
            },
        };

        if (value !== undefined) {
            payload["custom_data"] = {
                currency,
                value: value.toFixed(2),
            };
        }

        if (contentName) {
            payload["custom_data"] = {
                ...(payload["custom_data"] as object || {}),
                content_name: contentName,
            };
        }

        // ── Enviar para a Meta Graph API ──
        const response = await fetch(
            `${META_API_URL}?access_token=${META_ACCESS_TOKEN}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ data: [payload] }),
            }
        );

        if (!response.ok) {
            const err = await response.json();
            console.warn("[Meta CAPI] Erro ao enviar evento:", err);
        } else {
            const result = await response.json();
            console.log(`[Meta CAPI] Evento "${eventName}" enviado com sucesso:`, result);
        }
    } catch (error) {
        // Nunca bloquear o fluxo do usuário por falha no rastreamento
        console.warn("[Meta CAPI] Falha silenciosa:", error);
    }
}
