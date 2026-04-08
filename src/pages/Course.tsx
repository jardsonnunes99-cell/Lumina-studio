import { useState, useEffect } from "react";
import { Lock, Play, Mail, CheckCircle, Clock, Home, User, Search, MessageSquare, GraduationCap, ShoppingCart, Bell, ChevronRight, ChevronLeft, ChevronDown, Check, Star, X } from "lucide-react";
import { toast } from "sonner";

// Textos e Estrutura dos Módulos (Conteúdo inalterado, formatado para o novo layout)
const MODULES = [
  {
    id: 1,
    title: "Módulo 1: O Despertar da IA",
    cover: "/images/profissional/modulo curso/modulo1.png",
    duration: "13:45",
    videoUrl: "https://www.youtube.com/embed/tz7uzVAiibU?si=xa1suDkncw7mkVXm",
    description: (
      <div className="text-gray-300 leading-relaxed text-sm p-4">
        <p className="font-bold text-yellow-500 mb-2">Parabéns por iniciar.</p>
        <p className="mb-4">Este treinamento não é limitado a “fotos bonitas”. Ele foi estruturado para você dominar a produção de imagens com alto valor percebido em múltiplos cenários comerciais:</p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>Aniversários (infantil e adulto)</li>
          <li>Casamentos e eventos sociais</li>
          <li>Ensaios de modelo (posicionamento e estética)</li>
          <li>Ensaios profissionais (marca pessoal)</li>
          <li>Fotografia comercial para negócios locais</li>
        </ul>
        <p className="mb-4 text-white font-bold">O objetivo aqui é claro: transformar imagem em ativo de venda.</p>
        <p className="mb-4">Você vai aprender a criar fotos que:</p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>Chamam atenção imediatamente</li>
          <li>Transmitem profissionalismo</li>
          <li>Aumentam percepção de valor</li>
          <li>Facilitam fechamento de clientes</li>
        </ul>
        <p className="mb-4 font-bold text-white">Agora um ponto crítico de execução:</p>
        <p className="mb-4">Saber produzir imagem é o que gera demanda.<br/>Saber gerir dinheiro é o que transforma demanda em lucro.</p>
        <div className="bg-neutral-900 border border-yellow-600/30 p-4 rounded-xl mb-4">
          <p className="mb-2 text-xs">Se você quer estruturar seu financeiro e não ficar preso apenas ao faturamento, acesse:</p>
          <a href="https://pay.kiwify.com.br/eQrsnD9" target="_blank" rel="noreferrer" className="text-yellow-500 hover:text-yellow-400 underline font-semibold break-all">
            https://pay.kiwify.com.br/eQrsnD9
          </a>
        </div>
        <p className="italic text-gray-500">Imagem atrai clientes.<br/>Gestão sustenta crescimento.</p>
      </div>
    )
  },
  {
    id: 2,
    title: "Módulo 2: Mentalidade e Constância",
    cover: "/images/profissional/modulo curso/modulo2.png",
    duration: "08:12",
    videoUrl: "https://www.youtube.com/embed/HGz4gVB1J8o?si=iiKRdwE5i0068S9g",
    description: (
      <div className="text-gray-300 leading-relaxed text-sm p-4">
        <p className="mb-4">Este módulo não é sobre motivação.<br/>É sobre construir uma mentalidade orientada a crescimento, escala e resultado.</p>
        <p className="mb-4">Aqui você vai entender como pensar como um empreendedor que:</p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>Não depende de esforço manual constante</li>
          <li>Utiliza automação para ganhar velocidade</li>
          <li>Transforma ideias em sistemas de venda</li>
        </ul>
        <p className="mb-4 text-white font-bold">O objetivo é simples: fazer você sair da execução limitada e entrar na lógica de alavancagem.</p>
        <p className="mb-4">Você vai perceber que:</p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>Quem produz mais conteúdo, vende mais</li>
          <li>Quem testa mais anúncios, encontra mais oportunidades</li>
          <li>Quem automatiza, cresce mais rápido</li>
        </ul>
        <p className="mb-4 text-yellow-500 font-semibold">E existe um ponto crítico:</p>
        <p className="mb-4 text-gray-400 italic">Criar campanhas manualmente limita seu crescimento.<br/>Ter uma estrutura de conversão fraca reduz seu faturamento.</p>
        <p className="mb-4 font-bold text-white">Para resolver isso de forma prática:</p>
        <div className="bg-neutral-900 border border-yellow-600/30 p-5 rounded-2xl mb-4">
           <a href="https://pay.kiwify.com.br/J5B661O" target="_blank" rel="noreferrer" className="block mb-4 p-3 bg-black/40 rounded-lg hover:bg-black/60 transition">
             <span className="block text-white font-bold mb-1 text-sm">Se você quer gerar imagens e propagandas ilimitadas de forma automática, acesse:</span>
             <span className="text-yellow-500 break-all text-xs">https://pay.kiwify.com.br/J5B661O</span>
           </a>
           <a href="https://pay.kiwify.com.br/CbL6EHS" target="_blank" rel="noreferrer" className="block p-3 bg-black/40 rounded-lg hover:bg-black/60 transition">
             <span className="block text-white font-bold mb-1 text-sm">Se você quer transformar visitantes em clientes com uma estrutura profissional, acesse:</span>
             <span className="text-yellow-500 break-all text-xs">https://pay.kiwify.com.br/CbL6EHS</span>
           </a>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Módulo 3: Os 3 Pilares",
    cover: "/images/profissional/modulo curso/modulo3.png",
    duration: "21:30",
    videoUrl: "https://www.youtube.com/embed/DvZtHdXpU3o?si=mfFjTIJaPAh74GHU",
    description: (
      <div className="text-gray-300 leading-relaxed text-sm p-4">
        <p className="mb-4 text-lg font-bold text-white">Os 3 Pilares: Prompt, Foto Base e Foto de Referência</p>
        <p className="mb-4">Aqui está o núcleo técnico do método.<br/>A qualidade final da sua imagem não depende de sorte ou da ferramenta.<br/>Depende da combinação correta de três variáveis:</p>
        
        <div className="space-y-4">
          <div>
            <strong className="text-yellow-500 block mb-1">1. Prompt (Comando)</strong>
            <ul className="list-disc pl-5">
              <li>Define cenário, iluminação, estilo e nível de realismo</li>
              <li>Estrutura em inglês para maior precisão</li>
              <li>Quanto mais específico, maior controle sobre o resultado</li>
            </ul>
          </div>
          <div>
            <strong className="text-yellow-500 block mb-1">2. Foto Base (Sua Imagem)</strong>
            <ul className="list-disc pl-5">
              <li>Matéria-prima do processo</li>
              <li>Quanto melhor a qualidade e os ângulos (frente, lados), maior fidelidade</li>
              <li>Impacta diretamente no realismo final</li>
            </ul>
          </div>
          <div>
            <strong className="text-yellow-500 block mb-1">3. Foto de Referência</strong>
            <ul className="list-disc pl-5">
              <li>Guia visual do resultado esperado</li>
              <li>Define pose, composição, ambiente e estética</li>
              <li>Reduz erro e acelera o processo</li>
            </ul>
          </div>
        </div>

        <p className="mt-6 mb-4 text-yellow-500 font-semibold">Erro comum:<br/>Usar apenas prompt e esperar resultado profissional.</p>
        <p className="mb-4 font-bold text-white">Resultado profissional = combinação dos 3 pilares.</p>
        <p className="mb-6">Se um desses elementos estiver fraco, o resultado final perde qualidade.<br/>No próximo módulo você vai aprofundar na construção de prompts para extrair o máximo desses três pilares.</p>
        
        <div className="bg-neutral-900 border border-yellow-600/30 p-4 rounded-xl mb-4">
          <p className="mb-2 font-bold text-yellow-500">Atalho Estratégico:</p>
          <p className="mb-2 text-xs">Se quiser acelerar e usar estruturas prontas com 50 prompts profissionais (copiar e colar):</p>
          <a href="https://pay.kiwify.com.br/1IcMQJg" target="_blank" rel="noreferrer" className="text-yellow-500 hover:text-yellow-400 underline font-semibold break-all">
            https://pay.kiwify.com.br/1IcMQJg
          </a>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Módulo 4: Criação de Fotos Ultra Realistas",
    cover: "/images/profissional/modulo curso/modulo4.png",
    duration: "45:00",
    videoUrl: "https://www.youtube.com/embed/UD_5zenwz5E?si=SvTAP2owqvgN2O1H",
    description: (
      <div className="text-gray-300 leading-relaxed text-sm p-4">
        <p className="mb-4">Aqui você entra na execução prática do método.</p>
        <p className="mb-6 text-yellow-500 font-semibold">O objetivo é simples: gerar imagens com nível profissional utilizando IA, mantendo fidelidade ao seu rosto e alto padrão estético.</p>
        
        <strong className="text-white block mb-2">Estrutura de execução (pipeline):</strong>
        <ol className="list-decimal pl-5 mb-6 space-y-1">
          <li>Foto base com boa qualidade (preferência: frente + laterais)</li>
          <li>Escolha de uma foto de referência (pose, cenário, iluminação)</li>
          <li>Construção de prompt técnico em inglês</li>
          <li>Geração + ajustes iterativos até atingir padrão profissional</li>
        </ol>

        <strong className="text-white block mb-2">Prompt — elemento crítico do processo</strong>
        <p className="mb-4">Para extrair o máximo da IA, utilize sempre um prompt estruturado e direto.</p>
        
        <div className="bg-[#111] border border-white/10 p-4 rounded-lg mb-4 text-xs font-mono text-gray-400">
          “Ultra-realistic photo, 8k resolution, highly detailed skin texture, natural lighting, professional photography, sharp focus, realistic shadows, perfect facial symmetry, same face as uploaded image, high fidelity, DSLR quality, cinematic composition”
        </div>

        <p className="mb-2 font-semibold text-white">Função desse prompt:</p>
        <ul className="list-disc pl-5 mb-6">
          <li>Forçar máxima qualidade e resolução</li>
          <li>Garantir fidelidade ao rosto enviado</li>
          <li>Elevar nível de realismo e acabamento</li>
        </ul>

        <div className="bg-neutral-900 border border-yellow-600/30 p-5 rounded-2xl mb-4">
          <p className="mb-4 font-bold text-yellow-500">🔥 Atalho estratégico (upsell):</p>
          <div className="space-y-3 mb-2">
            <a href="https://pay.kiwify.com.br/1IcMQJg" target="_blank" rel="noreferrer" className="block p-3 bg-black/40 rounded-lg hover:bg-black/60 transition text-xs">
              <span className="block text-white font-bold mb-1">50 Prompts prontos (copiar e colar)</span>
              <span className="text-yellow-500 break-all">https://pay.kiwify.com.br/1IcMQJg</span>
            </a>
            <a href="https://pay.kiwify.com.br/NEVoxv1" target="_blank" rel="noreferrer" className="block p-3 bg-black/40 rounded-lg hover:bg-black/60 transition text-xs">
              <span className="block text-white font-bold mb-1">Venda mais usando Stories (estrutura de conversão)</span>
              <span className="text-yellow-500 break-all">https://pay.kiwify.com.br/NEVoxv1</span>
            </a>
            <a href="https://pay.kiwify.com.br/eQrsnD9" target="_blank" rel="noreferrer" className="block p-3 bg-black/40 rounded-lg hover:bg-black/60 transition text-xs">
              <span className="block text-white font-bold mb-1">Planilha Financeira (transformar vendas em lucro real)</span>
              <span className="text-yellow-500 break-all">https://pay.kiwify.com.br/eQrsnD9</span>
            </a>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "Módulo 5: Fotos de Aniversário Ultra Realistas",
    cover: "/images/profissional/modulo curso/modulo5.png",
    duration: "18:20",
    videoUrl: "https://www.youtube.com/embed/lmAnKH3H2cU?si=HNx8EsViAE644MeG",
    description: (
      <div className="text-gray-300 leading-relaxed text-sm p-4">
        <div className="mb-6">
          <h4 className="text-yellow-500 font-bold text-lg mb-3">O que é abordado:</h4>
          
          <div className="space-y-4">
            <div>
              <strong className="text-white">Estrutura de prompt profissional</strong>
              <ul className="list-disc pl-5 text-gray-400">
                <li>Hierarquia: sujeito → ambiente → iluminação → lente → textura → pós-processamento</li>
                <li>Redução de artefatos e “cara de IA”</li>
              </ul>
            </div>
            
            <div>
              <strong className="text-white">Direção de cena</strong>
              <ul className="list-disc pl-5 text-gray-400">
                <li>Poses naturais (evitar rigidez sintética)</li>
                <li>Expressões faciais realistas</li>
                <li>Interação com elementos (bolo, balões, decoração)</li>
              </ul>
            </div>

            <div>
              <strong className="text-white">Iluminação fotográfica simulada</strong>
              <ul className="list-disc pl-5 text-gray-400">
                <li>Luz de estúdio vs luz ambiente</li>
                <li>Controle de sombras e highlights</li>
                <li>Simulação de lentes (50mm, 85mm, profundidade de campo)</li>
              </ul>
            </div>

            <div>
              <strong className="text-white">Ambientação e composição</strong>
              <ul className="list-disc pl-5 text-gray-400">
                <li>Cenários de aniversário (infantil, adulto, premium)</li>
                <li>Harmonia de cores</li>
                <li>Enquadramento com padrão de fotógrafo profissional</li>
              </ul>
            </div>

            <div>
              <strong className="text-white">Realismo avançado</strong>
              <ul className="list-disc pl-5 text-gray-400">
                <li>Textura de pele (evitar plasticidade)</li>
                <li>Detalhes de tecido e objetos</li>
                <li>Correção de distorções comuns de IA</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#111] border border-white/5 p-5 rounded-2xl mb-8">
          <h4 className="text-yellow-500 font-bold mb-4 uppercase tracking-wider text-xs">Passo a Passo (A Engenharia Reversa)</h4>
          
          <p className="mb-2 text-white font-semibold">1. Cole a imagem que deseja no ChatGPT e mande este prompt:</p>
          <div className="relative group mb-6">
            <button 
              onClick={() => {
                navigator.clipboard.writeText(`Analyze the provided image with maximum precision and extract all visual attributes at a granular level. Decompose the image into structured components and reconstruct it as a highly detailed, production-grade prompt optimized for Gemini image generation.

Extraction requirements:

1. SUBJECT
- Gender, age range, ethnicity, facial structure
- Skin texture (pores, imperfections, reflections)
- Hair (color, length, style, flyaways, shine)
- Eyes (color, reflections, sharpness, emotion)
- Expression and micro-expressions

2. POSE & BODY LANGUAGE
- Exact body positioning (angles, posture, weight distribution)
- Hand placement and finger positioning
- Head tilt, gaze direction
- Emotional intent conveyed by pose

3. CLOTHING & ACCESSORIES
- Clothing type, fabric, texture, folds, wrinkles
- Colors (precise tones, gradients)
- Accessories (jewelry, glasses, watch, etc.)
- Interaction between clothing and lighting

4. OBJECTS (IF ANY)
- What the subject is holding or interacting with
- Material, texture, reflections, scale

5. ENVIRONMENT / SCENARIO
- Location type (studio, outdoor, indoor)
- Background elements (depth, blur, objects)
- Scene composition and spatial relationships

6. LIGHTING
- Light sources (natural, artificial, direction)
- Intensity, shadows, highlights
- Color temperature (warm, neutral, cool)
- Advanced lighting characteristics (rim light, softbox, bounce, volumetric light)

7. CAMERA & TECHNICAL SPECS
- Camera type (DSLR, mirrorless, cinematic)
- Lens (focal length, e.g. 35mm, 85mm)
- Aperture (depth of field, bokeh quality)
- ISO, shutter speed (if inferable)
- Focus sharpness and grain/noise level

8. IMAGE QUALITY & STYLE
- Resolution (8K, ultra HD, etc.)
- Photorealism level
- Color grading (cinematic, natural, HDR)
- Post-processing details (retouching, skin smoothing, sharpening)
- Style reference (editorial, fashion, commercial, lifestyle)

9. MICRO DETAILS (CRITICAL FOR GEMINI STABILITY)
- Skin pores, fabric fibers, reflections in eyes
- Light falloff transitions
- Background blur gradient consistency
- Real-world imperfections to avoid “AI look”

OUTPUT FORMAT:
- Single continuous prompt in English
- No explanations, only final optimized prompt
- Use dense, descriptive, technical language
- Prioritize photorealism and coherence
- Avoid contradictions
- Ensure logical consistency between lighting, shadows, and environment

GOAL:
Generate a “mega ultra detailed” prompt that maximizes realism, prevents model collapse, and produces a result indistinguishable from a professional photograph.`);
                toast.success("Prompt 1 copiado com sucesso!");
              }}
              className="absolute top-2 right-2 bg-yellow-500 hover:bg-yellow-400 text-black text-[10px] font-bold px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Copiar Prompt
            </button>
            <div className="bg-black border border-white/10 p-4 rounded-lg text-xs font-mono text-gray-400 h-40 overflow-y-auto custom-scrollbar">
              Analyze the provided image with maximum precision and extract all visual attributes at a granular level. Decompose the image into structured components and reconstruct it as a highly detailed, production-grade prompt optimized for Gemini image generation... (Role para ler tudo ou clique em copiar)
              <br/><br/>
              Extraction requirements:<br/>
              1. SUBJECT<br/>
              2. POSE & BODY LANGUAGE<br/>
              [...veja tudo ao copiar]
            </div>
          </div>

          <p className="mb-2 text-white font-semibold">2. Espere ele responder e em seguida mande este segundo prompt:</p>
          <div className="relative group mb-6">
            <button 
              onClick={() => {
                navigator.clipboard.writeText(`Analyze the provided image and extract ONLY the structural, environmental, and stylistic attributes. Completely ignore facial identity, facial features, and hairstyle. The goal is to reconstruct the scene so it can be reused with a different face reference.

Extraction rules:

1. SUBJECT (GENERIC BODY ONLY)
- Body type, proportions, posture
- Skin tone (generic, no facial detail)
- Do NOT describe face, facial structure, eyes, nose, mouth, or hair

2. POSE & BODY LANGUAGE
- Exact body positioning (angles, posture, weight distribution)
- Arm position, hand placement, finger details
- Head position ONLY as angle (e.g., tilted, facing side) — no facial description
- Gaze direction (without describing eyes)

3. CLOTHING & STYLING
- Clothing type, fabrics, textures, folds, wrinkles
- Colors with precise tonal description
- Accessories and how they interact with the body
- Fit (tight, oversized, tailored)

4. OBJECTS
- Objects being held or interacted with
- Material, texture, reflections, proportions

5. ENVIRONMENT / BACKGROUND
- Scene type (studio, indoor, outdoor)
- Background composition, depth, blur (bokeh)
- Spatial arrangement and layers

6. LIGHTING
- Light sources (direction, type)
- Shadow behavior and highlight placement
- Color temperature
- Advanced lighting (rim light, soft light, volumetric light)

7. CAMERA & TECHNICAL SETUP
- Lens type (e.g., 50mm, 85mm)
- Depth of field, focus falloff
- Framing (close-up, medium shot, full body)
- Perspective and camera angle

8. IMAGE STYLE & QUALITY
- Photorealism level
- Color grading style
- Sharpness, noise, dynamic range
- Editorial/commercial/fashion classification

9. HARD CONSTRAINTS (CRITICAL)
- Do NOT include any facial details
- Do NOT include hairstyle, hair color, or hair texture
- Do NOT describe identity
- Maintain full physical and lighting consistency
- Preserve realism to avoid AI artifacts

OUTPUT FORMAT:
- Single continuous prompt in English
- No explanations
- Dense, technical, highly descriptive
- Optimized for Gemini stability and realism

GOAL:
Generate a reusable, identity-neutral prompt that perfectly replicates the pose, clothing, lighting, and environment of the original image while allowing a new face reference to be applied. Faça prompt em ingles`);
                toast.success("Prompt 2 copiado com sucesso!");
              }}
              className="absolute top-2 right-2 bg-yellow-500 hover:bg-yellow-400 text-black text-[10px] font-bold px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Copiar Prompt
            </button>
            <div className="bg-black border border-white/10 p-4 rounded-lg text-xs font-mono text-gray-400 h-40 overflow-y-auto custom-scrollbar">
              Analyze the provided image and extract ONLY the structural, environmental, and stylistic attributes. Completely ignore facial identity, facial features, and hairstyle. The goal is to reconstruct the scene so it can be reused with a different face reference... (Role para ler tudo ou clique em copiar)
              <br/><br/>
              Extraction rules:<br/>
              1. SUBJECT (GENERIC BODY ONLY)<br/>
              2. POSE & BODY LANGUAGE<br/>
              [...veja tudo ao copiar]
            </div>
          </div>

          <p className="mb-2 text-white font-semibold">3. O Resultado + Gemini:</p>
          <ul className="list-disc pl-5 text-gray-400">
            <li>Copie o prompt final (em inglês) que ele gerou.</li>
            <li>Abra o seu Gemini e anexe a foto do seu cliente (Rosto base).</li>
            <li>Cole o prompt e <strong className="text-yellow-500">ULALAU!</strong> Resultado Profissional Genuíno.</li>
          </ul>
        </div>

        <div className="bg-neutral-950 border border-yellow-600/30 p-5 rounded-2xl mb-4">
          <p className="mb-2 font-bold text-yellow-500 text-lg">⚡ Atalho Estratégico:</p>
          <a href="https://pay.kiwify.com.br/vNH0mSJ" target="_blank" rel="noreferrer" className="text-yellow-500 hover:text-yellow-400 transition underline text-sm font-bold block mb-2">Acessar: +30 Prompts Aniversário Prontos</a>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "Módulo 6: Fotos Estilo Modelo",
    cover: "/images/profissional/modulo curso/modulo6.png",
    duration: "25:40",
    videoUrl: "https://www.youtube.com/embed/NfwY-L3TjX4?si=FAGx4o-fy9y4r2Yl",
    description: (
      <div className="text-gray-300 leading-relaxed text-sm p-4">
        <div className="mb-6">
          <h4 className="text-yellow-500 font-bold text-lg mb-3">Ferramentas Base:</h4>
          <div className="space-y-2 mb-6 text-sm">
            <a href="https://apps.apple.com/us/app/chatgpt/id6448311069" target="_blank" rel="noreferrer" className="block text-yellow-500 hover:text-yellow-400 font-semibold underline">ChatGPT (App Store)</a>
            <a href="https://apps.apple.com/br/app/google-gemini/id6477489729" target="_blank" rel="noreferrer" className="block text-yellow-500 hover:text-yellow-400 font-semibold underline">Gemini (App Store)</a>
            <a href="https://apps.apple.com/us/app/pinterest/id429047995" target="_blank" rel="noreferrer" className="block text-yellow-500 hover:text-yellow-400 font-semibold underline">Pinterest (Mineração de referências visuais)</a>
            <p className="text-gray-400 text-xs mt-2 italic">Apoio complementar: Instagram e Google</p>
          </div>

          <h4 className="text-yellow-500 font-bold text-lg mb-3">Foco e Extração:</h4>
          <div className="space-y-4">
            <div>
              <strong className="text-white">Foco em:</strong>
              <ul className="list-disc pl-5 text-gray-400">
                <li>Poses profissionais e estética editorial</li>
                <li>Iluminação de estúdio e enquadramento/composição</li>
                <li>Engenharia de prompt orientada por referência</li>
                <li>Uso de imagens reais como base estrutural</li>
              </ul>
            </div>
            
            <div>
              <strong className="text-white">Extração de:</strong>
              <ul className="list-disc pl-5 text-gray-400">
                <li>Direção de luz e estilo fotográfico</li>
                <li>Posicionamento do modelo e textura / nível de realismo</li>
                <li>Construção de prompts com alta previsibilidade de output</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#111] border border-white/5 p-5 rounded-2xl mb-8">
          <h4 className="text-yellow-500 font-bold mb-4 uppercase tracking-wider text-xs">Passo a Passo (A Engenharia Reversa)</h4>
          
          <p className="mb-2 text-white font-semibold">1. Cole a imagem referência no ChatGPT e mande este prompt primeiro:</p>
          <div className="relative group mb-6">
            <button 
              onClick={() => {
                navigator.clipboard.writeText(`Analise a imagem fornecida com máxima precisão e extraia TODOS os elementos visuais relevantes sem omissões.

Decomponha a imagem nos seguintes eixos:

1. Cenário:
- Tipo de ambiente (interno/externo)
- Contexto (estúdio, urbano, natureza, evento, etc.)
- Elementos de fundo (objetos, arquitetura, profundidade, textura)
- Iluminação (direção, intensidade, temperatura de cor, sombras)

2. Sujeito:
- Quantidade de pessoas
- Características físicas (idade aparente, gênero, etnia, estrutura corporal)
- Expressão facial e emoção transmitida
- Direção do olhar

3. Pose e linguagem corporal:
- Posição do corpo (ângulo, enquadramento, postura)
- Dinâmica da pose (estática, movimento, natural, editorial)
- Interação com objetos ou ambiente

4. Vestuário e styling:
- Tipo de roupa (casual, formal, moda, temático)
- Cores, tecidos e caimento
- Acessórios (óculos, joias, chapéus, etc.)
- Detalhes finos (dobras, reflexos, textura)

5. Objetos em uso:
- O que está sendo segurado ou manipulado
- Relação do objeto com a cena
- Posição e interação com o sujeito

6. Qualidade e técnica da imagem:
- Resolução percebida (ultra HD, 4K, etc.)
- Tipo de lente (wide, 50mm, teleobjetiva)
- Profundidade de campo (bokeh, foco seletivo)
- Nitidez, granulação, compressão
- Estilo fotográfico (cinematográfico, editorial, documental, hiper-realista)

7. Composição:
- Regra dos terços, centralização, simetria
- Enquadramento (close-up, meio corpo, corpo inteiro)
- Perspectiva e ângulo de câmera

8. Estilo visual:
- Referência estética (luxo, fashion, lifestyle, comercial, artístico)
- Paleta de cores dominante
- Mood (dramático, suave, vibrante, minimalista)

---

Após a análise completa, gere um PROMPT FINAL em inglês extremamente detalhado, otimizado para o modelo Gemini, seguindo estas regras:

- Linguagem técnica e descritiva
- Alta densidade de detalhes visuais
- Estrutura contínua (sem listas no prompt final)
- Priorização de hiper-realismo
- Evitar ambiguidades
- Incluir termos de qualidade como: ultra realistic, 8k, cinematic lighting, high detail, sharp focus
- NÃO simplificar informações
- NÃO omitir microdetalhes

Objetivo: gerar um prompt que reproduza a imagem com máxima fidelidade e evite qualquer perda de informação (no collapse).`);
                toast.success("Prompt 1 copiado com sucesso!");
              }}
              className="absolute top-2 right-2 bg-yellow-500 hover:bg-yellow-400 text-black text-[10px] font-bold px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10"
            >
              Copiar Prompt
            </button>
            <div className="bg-black border border-white/10 p-4 rounded-lg text-xs font-mono text-gray-400 h-40 overflow-y-auto custom-scrollbar">
              Analise a imagem fornecida com máxima precisão e extraia TODOS os elementos visuais relevantes sem omissões... (Role para ler ou clique em copiar)
              <br/><br/>
              Decomponha a imagem nos seguintes eixos:<br/>
              1. Cenário<br/>
              2. Sujeito<br/>
              [...veja tudo ao copiar]
            </div>
          </div>

          <p className="mb-2 text-white font-semibold">2. Espere o chat GPT responder e cole este segundo prompt:</p>
          <div className="relative group mb-6">
            <button 
              onClick={() => {
                navigator.clipboard.writeText(`Analyze the provided image and generate a modified version of the prompt with STRICT identity removal while preserving all other visual attributes.

Execution rules:

- Completely REMOVE and IGNORE:
  • Facial features (eyes, nose, mouth, skin details)
  • Face structure and identity markers
  • Hair style, hair texture, hair color, and hairline

- Replace with:
  • Neutral placeholder: "faceless subject" OR "blank face with no identity features"
  • Head area must be generic and undefined, without any recognizable traits

- STRICTLY PRESERVE:
  • Body pose and positioning
  • Camera angle and framing
  • Clothing (exact style, colors, textures, folds)
  • Accessories and objects being held
  • Environment and background
  • Lighting setup (direction, intensity, shadows, highlights)
  • Image quality (ultra realistic, sharp focus, lens type, depth of field)
  • Composition and aesthetic style

- Maintain:
  • Same proportions
  • Same body language
  • Same interaction with objects
  • Same visual mood and tone

- Output requirements:
  • Generate a single ultra-detailed prompt in English
  • Use high-density descriptive language optimized for Gemini
  • Include keywords: ultra realistic, 8k, cinematic lighting, highly detailed, professional photography
  • Do NOT include any identity-specific descriptors
  • Do NOT simplify or generalize visual elements

Objective: produce a prompt that allows inserting a different face/image later while keeping the entire scene visually identical.`);
                toast.success("Prompt 2 copiado com sucesso!");
              }}
              className="absolute top-2 right-2 bg-yellow-500 hover:bg-yellow-400 text-black text-[10px] font-bold px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10"
            >
              Copiar Prompt
            </button>
            <div className="bg-black border border-white/10 p-4 rounded-lg text-xs font-mono text-gray-400 h-40 overflow-y-auto custom-scrollbar">
              Analyze the provided image and generate a modified version of the prompt with STRICT identity removal while preserving all other visual attributes... (Role para ler ou clique em copiar)
              <br/><br/>
              Execution rules:<br/>
              - Completely REMOVE and IGNORE features...<br/>
              [...veja tudo ao copiar]
            </div>
          </div>

          <p className="mb-2 text-white font-semibold">3. O Resultado + Gemini:</p>
          <ul className="list-disc pl-5 text-gray-400">
            <li>Copie a resposta do prompt final gerado por ele.</li>
            <li>Vá no seu Gemini, cole esse texto e adicione as suas fotos (referência de rosto).</li>
            <li><strong className="text-yellow-500">Pronto!</strong> A mágica acontece.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h4 className="text-yellow-500 font-bold text-lg mb-3">Resultado & Operação:</h4>
          
          <div className="mb-4">
            <p className="text-white font-bold mb-1">Resultado técnico esperado:</p>
            <ul className="list-disc pl-5 text-gray-400">
              <li>Imagens com padrão visual equivalente a estúdio profissional.</li>
              <li>Redução gigantesca de tentativa e erro.</li>
              <li>Produção escalável de conteúdo visual comercial.</li>
            </ul>
          </div>

          <div>
            <p className="text-white font-bold mb-1">Eficiência operacional:</p>
            <p className="text-gray-400 text-sm">Criar prompts manualmente exige tempo, testes e ajustes constantes. Com uma biblioteca estruturada, o processo se torna direto, padronizado e plenamente escalável.</p>
          </div>
        </div>

        <div className="bg-neutral-950 border border-yellow-600/30 p-5 rounded-2xl mb-4">
          <p className="mb-3 text-gray-400 text-xs italic">O acesso ao pack com +60 prompts prontos elimina a etapa técnica e permite execução imediata com consistência profissional.</p>
          <p className="mb-2 font-bold text-yellow-500 text-lg">⚡ Atalho Estratégico:</p>
          <a href="https://pay.kiwify.com.br/GcisSAe" target="_blank" rel="noreferrer" className="text-yellow-500 hover:text-yellow-400 transition underline text-sm font-bold block mb-2">Acessar: Pack +60 Prompts Estilo Modelo</a>
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: "Módulo 7: Transformar Fotos em Conteúdo",
    cover: "/images/profissional/modulo curso/modulo7.png",
    duration: "30:15",
    videoUrl: "https://www.youtube.com/embed/VbKFejL6_d4?si=K0efPL1VD9U7fH8v",
    description: (
      <div className="text-gray-300 leading-relaxed text-sm p-4">
        <p className="mb-6 text-white font-medium">Neste módulo, você aprende a produzir imagens de propaganda focadas em conversão, utilizando IA para atender demandas reais de comércio com velocidade e consistência.</p>
        
        <div className="mb-6">
          <h4 className="text-yellow-500 font-bold text-lg mb-3">Fluxo Aplicado:</h4>
          
          <div className="space-y-4">
            <div>
              <strong className="text-white">Ferramentas & Referências:</strong>
              <div className="space-y-1 mt-2 text-sm pl-2 border-l-2 border-yellow-500/30">
                <a href="https://apps.apple.com/us/app/chatgpt/id6448311069" target="_blank" rel="noreferrer" className="block text-yellow-500 hover:text-yellow-400 font-semibold underline">ChatGPT</a>
                <a href="https://apps.apple.com/br/app/google-gemini/id6477489729" target="_blank" rel="noreferrer" className="block text-yellow-500 hover:text-yellow-400 font-semibold underline">Gemini</a>
                <a href="https://apps.apple.com/us/app/pinterest/id429047995" target="_blank" rel="noreferrer" className="block text-yellow-500 hover:text-yellow-400 font-semibold underline">Pinterest</a>
                <p className="text-gray-400 mt-1">Apoio complementar: Instagram e Google</p>
              </div>
            </div>

            <div>
              <strong className="text-white">Criação de prompts orientados a:</strong>
              <ul className="list-disc pl-5 mt-1 text-gray-400">
                <li>Venda</li>
                <li>Destaque de produto</li>
                <li>Composição persuasiva</li>
              </ul>
            </div>

            <div>
              <strong className="text-white">Resultado Operacional:</strong>
              <p className="text-gray-400 mt-1">Produção contínua de criativos profissionais para redes sociais e campanhas, <strong className="text-gray-300">sem dependência de design manual</strong>.</p>
            </div>
          </div>
        </div>

        <div className="bg-[#111] border border-white/5 p-5 rounded-2xl mb-8">
          <h4 className="text-yellow-500 font-bold mb-4 uppercase tracking-wider text-xs">Passo a Passo (Engenharia de Propaganda)</h4>
          
          <p className="mb-4 text-gray-300">Você irá seguir os mesmos princípios: busque uma imagem como referência de propaganda e coloque no ChatGPT. Peça primeiro a descrição em português, leia o que ele descreveu, e se gostou, peça para ele gerar o prompt focado em conversão.</p>

          <div className="mb-6 bg-black/40 border border-yellow-500/20 p-4 rounded-lg">
            <h5 className="font-bold text-yellow-500 mb-2">Orientações para o Prompt:</h5>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-white font-medium">• Onde aparecer o serviço:</span><br/>
                <span className="text-gray-400">👉 Substituir por: "SEU TIPO DE TRABALHO" (Ex: fotógrafo, designer, social media, barbeiro, etc.)</span>
              </li>
              <li>
                <span className="text-white font-medium">• Onde aparecer o preço/oferta:</span><br/>
                <span className="text-gray-400">👉 Substituir por: "VALOR DO SEU SERVIÇO" (Ex: R$ 97, R$ 297, R$ 497, etc.)</span>
              </li>
              <li>
                <span className="text-white font-medium">• Call to Action (opcional):</span><br/>
                <span className="text-gray-400">👉 Pode usar: "Agende agora", "Garanta sua vaga", "Chame no direct"</span>
              </li>
            </ul>
          </div>

          <p className="mb-2 text-white font-semibold">Envie o prompt abaixo no ChatGPT para converter a referência da imagem no seu estilo:</p>
          <div className="relative group mb-6">
            <button 
              onClick={() => {
                navigator.clipboard.writeText(`Analyze the provided image and reconstruct it as a high-conversion advertising visual with enhanced realism, composition, and persuasive design.

Maintain the core concept, layout structure, and visual hierarchy, but improve all technical and aesthetic aspects for premium commercial quality.

--- CORE ELEMENTS TO EXTRACT AND OPTIMIZE ---

• Subject: Identify the main subject and refine posture, expression, and positioning for natural, non-artificial realism  
• Scene: Recreate the environment with richer detail, depth, and contextual coherence  
• Composition: Apply professional framing (rule of thirds, depth layering, foreground/background separation)  
• Lighting: Use advanced photographic lighting (soft studio light, cinematic highlights, controlled shadows, realistic reflections)  
• Texture: Enhance material fidelity (skin, fabric, objects) with ultra-detailed micro-textures  
• Camera: Simulate professional gear (85mm lens, shallow depth of field, f/1.8–f/2.8, sharp focus on subject)  
• Color Grading: Apply cinematic color grading with high dynamic range, balanced tones, and commercial appeal  
• Post-processing: Remove AI artifacts, ensure photorealism, natural skin tones, and high clarity  

--- ADVERTISING OPTIMIZATION ---

• Transform the image into a high-converting marketing ad  
• Add clean, modern typography integrated naturally into the scene  
• Emphasize clarity, readability, and visual hierarchy  
• Create emotional appeal + perceived value  
• Style reference: premium commercial photography + luxury branding + Instagram ad aesthetic  

--- TEXT OVERLAY (IMPORTANT VARIABLE AREAS) ---

Insert realistic text elements in the composition (like a real ad), following these instructions:

[PORTUGUÊS — ÁREAS EDITÁVEIS]
- Headline (Seu Serviço): ...
- Offer (Preço): ...
- CTA (Ação): ...

--- FINAL OUTPUT SPECIFICATIONS ---`);
                toast.success("Prompt de Propaganda copiado com sucesso!");
              }}
              className="absolute top-2 right-2 bg-yellow-500 hover:bg-yellow-400 text-black text-[10px] font-bold px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10"
            >
              Copiar Prompt
            </button>
            <div className="bg-black border border-white/10 p-4 rounded-lg text-xs font-mono text-gray-400 h-40 overflow-y-auto custom-scrollbar">
              Analyze the provided image and reconstruct it as a high-conversion advertising visual with enhanced realism, composition, and persuasive design... (Role para ler ou clique em copiar)
              <br/><br/>
              Maintain the core concept, layout structure, and visual hierarchy...<br/>
              --- CORE ELEMENTS TO EXTRACT AND OPTIMIZE ---<br/>
              [...veja tudo ao copiar]
            </div>
          </div>

          <p className="mb-2 text-white font-semibold">O Toque Final:</p>
          <p className="text-gray-400 text-sm">Cole a resposta final do GPT dentro do Gemini junto com a sua <strong>Foto Profissional</strong>. ULALAU! Você terá o seu resultado de propaganda autoral.</p>
        </div>

        <div className="bg-neutral-900 border border-white/5 p-4 rounded-xl">
           <p className="mb-3 font-bold text-white text-xs uppercase tracking-wider">Upsells Avançados Opcionais:</p>
           <a href="https://pay.kiwify.com.br/J5B661O" target="_blank" rel="noreferrer" className="text-yellow-500 hover:text-white transition underline text-xs block mb-2">Automação: Bot de IA para Criação de Propagandas</a>
           <a href="https://pay.kiwify.com.br/CbL6EHS" target="_blank" rel="noreferrer" className="text-yellow-500 hover:text-white transition underline text-xs block">Automação: Landing Page Profissional (R$ 197)</a>
        </div>
      </div>
    )
  },
  {
    id: 8,
    title: "Módulo 8: Negócios e Escala",
    cover: "/images/profissional/modulo curso/modulo8.png",
    duration: "00:00",
    locked: true,
    description: (
      <div className="text-center py-10 opacity-70 p-4">
        <Lock className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Módulo Carregando...</h3>
        <p className="text-gray-400 text-sm">Será liberado automaticamente após <strong className="text-white">7 dias</strong> da sua compra.</p>
      </div>
    )
  }
];

export default function Course() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // State for the Member Area SPA
  const [activeModule, setActiveModule] = useState<number | null>(null);
  const [completedModules, setCompletedModules] = useState<number[]>([]);
  const [ratings, setRatings] = useState<Record<number, number>>({});
  const [activeTab, setActiveTab] = useState<"descricao" | "comentarios">("descricao");

  // Load user progress from localStorage after authentication
  useEffect(() => {
    if (isAuthenticated) {
      const savedCompleted = localStorage.getItem("pvm_completed");
      const savedRatings = localStorage.getItem("pvm_ratings");
      if (savedCompleted) setCompletedModules(JSON.parse(savedCompleted));
      if (savedRatings) setRatings(JSON.parse(savedRatings));
    }
  }, [isAuthenticated]);

  const checkAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    
    // Simulação ou Fallback local
    setTimeout(() => {
      setIsLoading(false);
      // No backend em prod, chamar /functions/v1/kiwify-auth
      if (email.includes("@")) {
        setIsAuthenticated(true);
        toast.success("Acesso Liberado");
      } else {
        toast.error("Digite um e-mail válido.");
      }
    }, 1000);
  };

  const toggleComplete = (id: number) => {
    let newCompleted;
    if (completedModules.includes(id)) {
      newCompleted = completedModules.filter(m => m !== id);
    } else {
      newCompleted = [...completedModules, id];
    }
    setCompletedModules(newCompleted);
    localStorage.setItem("pvm_completed", JSON.stringify(newCompleted));
  };

  const rateModule = (id: number, rating: number) => {
    const newRatings = { ...ratings, [id]: rating };
    setRatings(newRatings);
    localStorage.setItem("pvm_ratings", JSON.stringify(newRatings));
  };

  const currentModuleObj = activeModule ? MODULES.find(m => m.id === activeModule) : null;
  const progressPercentage = Math.round((completedModules.length / MODULES.length) * 100);

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-4" style={{
        backgroundImage: 'radial-gradient(circle at center, #1a1500 0%, #050505 60%)'
      }}>
        <div className="w-full max-w-sm bg-[#0a0a0a] border border-yellow-900/40 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
          <div className="text-center mb-8">
            <Lock className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
            <h1 className="text-2xl font-black mb-1 uppercase tracking-tight">Área do Aluno</h1>
            <p className="text-yellow-500 text-sm font-semibold tracking-wider">MÉTODO P.V.M</p>
          </div>
          <form onSubmit={checkAccess} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
              <input 
                type="email" 
                autoFocus
                required
                placeholder="E-mail de acesso"
                className="w-full bg-[#111] border border-white/10 rounded-lg px-10 py-3 text-sm focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all text-white placeholder-gray-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-yellow-500 hover:bg-yellow-400 font-bold text-black py-3 text-sm rounded-lg flex justify-center items-center transition-colors"
            >
              {isLoading ? "Validando..." : "Entrar na Mentoria"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Member Area (Dashboard or Player)
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans selection:bg-yellow-500/30 overflow-x-hidden">
      
      {/* Top Navbar */}
      <header className="h-16 bg-[#050505] border-b border-white/5 flex items-center justify-between px-4 md:px-8 z-50 sticky top-0">
         {/* Logo Left */}
         <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveModule(null)}>
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-300 to-yellow-600 rounded flex items-center justify-center">
              <span className="text-black font-black text-xs">PVM</span>
            </div>
            <span className="font-black text-white italic tracking-widest hidden md:block">MÉTODO P.V.M</span>
         </div>
         
         {/* Search Bar Center */}
         <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
           <input type="text" placeholder="Pesquisar cursos e aulas..." className="w-full bg-[#151515] border border-white/5 rounded-full py-1.5 px-10 text-sm text-gray-300 focus:outline-none focus:border-yellow-500/50" />
         </div>

         {/* Profile Right */}
         <div className="flex items-center gap-4 text-gray-400">
           <ShoppingCart className="w-5 h-5 hover:text-white cursor-pointer transition hidden md:block" />
           <Bell className="w-5 h-5 hover:text-white cursor-pointer transition hidden md:block" />
           <div className="flex items-center gap-2 border-l border-white/10 pl-4">
              <div className="w-7 h-7 bg-gray-800 rounded-full flex items-center justify-center border border-gray-600">
                <User className="w-4 h-4 text-gray-400" />
              </div>
              <span className="text-xs font-medium hidden md:block text-gray-300 truncate max-w-[150px]">{email}</span>
           </div>
         </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Sidebar (Icons Only) */}
        <aside className="w-16 bg-[#050505] border-r border-white/5 hidden md:flex flex-col items-center py-6 gap-8 text-gray-500 sticky top-16 h-[calc(100vh-64px)] overflow-y-auto">
          <div className="w-8 h-8 rounded-full bg-neutral-800 cursor-pointer overflow-hidden border border-yellow-500/50">
             <img src="/images/logo.png" alt="User" className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
          </div>
          <div className="w-full h-px bg-white/5 my-2"></div>
          <Home className={`w-5 h-5 cursor-pointer transition ${!activeModule ? "text-yellow-500" : "hover:text-white"}`} onClick={() => setActiveModule(null)} />
          <User className="w-5 h-5 cursor-pointer hover:text-white transition" />
          <Search className="w-5 h-5 cursor-pointer hover:text-white transition" />
          <MessageSquare className="w-5 h-5 cursor-pointer hover:text-white transition" />
          <GraduationCap className="w-5 h-5 cursor-pointer hover:text-white transition" />
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto pb-20 md:pb-0 h-full relative">
          
          {/* 1. DASHBOARD VIEW */}
          {!activeModule && (
            <div className="fade-up">
              {/* Hero Banner Area */}
              <div className="relative w-full h-[40vh] md:h-[50vh] min-h-[300px] overflow-hidden bg-[#111]">
                 <img src="/images/ensaio-1.jpg" alt="Hero Background" className="w-full h-full object-cover opacity-30 object-top" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                 <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
                 
                 <div className="absolute left-4 md:left-12 bottom-10 md:bottom-16 max-w-xl">
                   <h2 className="text-4xl md:text-6xl font-black mb-2 italic tracking-tighter text-white">
                      MÉTODO <span className="text-yellow-500 font-sans tracking-normal not-italic">P.V.M</span>
                   </h2>
                   <p className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4">Percepção de Valor Máximo</p>
                   <button 
                     onClick={() => setActiveModule(1)}
                     className="bg-yellow-500 hover:bg-yellow-400 text-black font-black text-sm uppercase tracking-wider px-8 py-3 rounded flex items-center gap-2 transition"
                   >
                     <Play className="w-4 h-4 fill-black" /> Começar Agora
                   </button>
                 </div>
              </div>

              {/* Continuar Progresso (se tiver histórico) */}
              {completedModules.length > 0 && completedModules.length < MODULES.length && (
                 <div className="px-4 md:px-12 mt-8 md:-mt-8 relative z-10 hidden md:block">
                   <h3 className="text-sm text-gray-400 font-bold mb-3 uppercase tracking-wider">Continuar Progresso</h3>
                   {/* Encontrar primeiro módulo não concluído */}
                   {(() => {
                      const nextModArray = MODULES.filter(m => !completedModules.includes(m.id));
                      const nextMod = nextModArray.length > 0 ? nextModArray[0] : MODULES[0];
                      return (
                        <div 
                          className="flex items-center gap-4 bg-[#111] border border-white/5 rounded-lg p-3 cursor-pointer hover:bg-[#1a1a1a] transition w-full max-w-sm group"
                          onClick={() => setActiveModule(nextMod.id)}
                        >
                          <div className="w-24 h-14 bg-black rounded overflow-hidden relative shadow">
                             <img src={nextMod.cover} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition" alt=""/>
                             <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                                <Play className="w-6 h-6 text-white shrink-0 fill-white" />
                             </div>
                          </div>
                          <div>
                            <p className="font-bold text-xs text-yellow-500 mb-1 leading-tight line-clamp-2">{nextMod.title}</p>
                            <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">Continuar Módulo</p>
                          </div>
                        </div>
                      )
                   })()}
                 </div>
              )}

              {/* Trilho (Carrossel) de Aulas Estilo Netflix */}
              <div className="px-4 md:px-12 mt-12 mb-16">
                 <h3 className="text-lg md:text-xl font-bold text-white mb-6 uppercase tracking-wider">Inicie a MENTORIA</h3>
                 
                 <div className="flex overflow-x-auto gap-4 pb-4 snap-x hide-scrollbar scroll-smooth">
                    {MODULES.map((mod) => {
                       const isCompleted = completedModules.includes(mod.id);
                       return (
                         <div 
                           key={mod.id} 
                           className={`snap-start shrink-0 w-[160px] md:w-[240px] group cursor-pointer relative rounded-md overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:z-10 bg-[#111] ${mod.locked ? "opacity-50 cursor-not-allowed grayscale" : ""}`}
                           onClick={() => !mod.locked && setActiveModule(mod.id)}
                         >
                           <div className="aspect-[4/5] w-full relative border border-white/5 rounded-md overflow-hidden shadow-lg group-hover:border-yellow-500/50 bg-[#0a0a0a]">
                             <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                             <img src={mod.cover} alt={mod.title} className="w-full h-full object-contain" />
                             
                             {/* Sombras no bottom do card para o texto */}
                             <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black via-black/60 to-transparent z-10 flex flex-col justify-end p-3">
                               <p className="text-[11px] md:text-xs font-bold text-white leading-tight uppercase line-clamp-2 text-center shadow-black drop-shadow-md">
                                 {mod.title.replace(/Módulo \d+:\s/i, '')}
                               </p>
                             </div>

                             {isCompleted && (
                                <div className="absolute top-2 right-2 z-20 bg-yellow-500 w-5 h-5 rounded-full flex items-center justify-center shadow">
                                  <Check className="w-3 h-3 text-black font-bold" />
                                </div>
                             )}

                             {mod.locked && (
                                <div className="absolute top-2 right-2 z-20 bg-black/80 w-6 h-6 rounded flex items-center justify-center border border-white/20 shadow">
                                  <Lock className="w-3 h-3 text-yellow-500" />
                                </div>
                             )}
                           </div>
                         </div>
                       );
                    })}
                 </div>
              </div>
            </div>
          )}

          {/* 2. PLAYER VIEW (Estilo Curso Interno) */}
          {activeModule && currentModuleObj && (
            <div className="h-full flex flex-col fade-up">
              {/* Breadcrumb Header */}
              <div className="px-4 py-3 border-b border-white/5 bg-[#0a0a0a] flex items-center gap-2 text-xs md:text-sm text-gray-500 hidden md:flex">
                 <Home className="w-3 h-3" />
                 <span>Início</span>
                 <ChevronRight className="w-3 h-3" />
                 <span>Método P.V.M</span>
                 <ChevronRight className="w-3 h-3" />
                 <span className="text-gray-300 font-semibold uppercase">{currentModuleObj.title}</span>
              </div>

              {/* Main Split: Left Player / Right Playlist */}
              <div className="flex flex-col lg:flex-row flex-1">
                 
                 {/* Left Column: Video & Metadata */}
                 <div className="flex-1 lg:max-w-[75%] bg-[#0a0a0a] flex flex-col relative overflow-y-auto">
                    
                    {/* Video Area */}
                    <div className="w-full aspect-video bg-black relative border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-center group">
                       {!currentModuleObj.locked ? (
                          (currentModuleObj as any).videoUrl ? (
                             <iframe 
                               className="absolute inset-0 w-full h-full z-20"
                               src={(currentModuleObj as any).videoUrl} 
                               title="YouTube video player" 
                               frameBorder="0" 
                               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                               allowFullScreen
                             ></iframe>
                          ) : (
                            <>
                              {/* Placeholder / Thumbnail of the video */}
                              <img src={currentModuleObj.cover} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity blur-[2px]" alt="" />
                              <div className="absolute inset-0 bg-black/40"></div>
                              
                              {/* Play Button */}
                              <div className="z-10 w-16 h-16 md:w-20 md:h-20 bg-yellow-500/20 rounded-full flex items-center justify-center border border-yellow-500/50 backdrop-blur-sm cursor-pointer hover:bg-yellow-500/40 hover:scale-110 transition-all">
                                 <Play className="w-8 h-8 fill-yellow-500 text-yellow-500 ml-1" />
                              </div>
                              
                              {/* Overlay Notice */}
                              <p className="absolute bottom-4 left-0 right-0 text-center text-[10px] md:text-xs text-gray-400 font-mono tracking-widest z-10 w-full px-4">
                                [ ÁREA DO PLAYER: EMBED DO YOUTUBE/VIMEO AQUI ]
                              </p>
                              
                              {/* Mimicking Vimeo bottom bar */}
                              <div className="absolute bottom-0 inset-x-0 h-1 bg-gray-800">
                                 <div className="h-full bg-yellow-500 w-1/3"></div>
                              </div>
                            </>
                          )
                       ) : (
                          <div className="z-10 text-center px-4">
                             <Lock className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                             <h3 className="text-xl md:text-2xl font-bold text-white mb-2 uppercase">Módulo Fechado</h3>
                             <p className="text-gray-400 text-sm">{currentModuleObj.description}</p>
                          </div>
                       )}
                    </div>

                    {/* Meta Bar Under Video */}
                    <div className="p-4 md:p-6 bg-[#0a0a0a] flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5">
                       <h2 className="text-lg md:text-xl font-black uppercase text-white tracking-wide">{currentModuleObj.title}</h2>
                       
                       <div className="flex items-center gap-3 self-start md:self-auto">
                         <button 
                           onClick={() => toggleComplete(currentModuleObj.id)}
                           className={`flex items-center gap-2 px-4 py-2 rounded text-xs font-bold uppercase transition ${
                             completedModules.includes(currentModuleObj.id) 
                             ? "bg-yellow-500/10 text-yellow-500 border border-yellow-500/30" 
                             : "bg-[#151515] text-gray-400 border border-white/10 hover:border-yellow-500/30 hover:text-white"
                           }`}
                         >
                            <CheckCircle className={`w-4 h-4 ${completedModules.includes(currentModuleObj.id) ? "text-yellow-500" : "text-gray-500"}`} /> 
                            {completedModules.includes(currentModuleObj.id) ? "Concluído" : "Marcar Concluído"}
                         </button>

                         {/* Avaliação Estrelas */}
                         <div className="flex items-center gap-1 bg-[#111] border border-white/5 rounded px-3 py-2">
                           {[1, 2, 3, 4, 5].map((star) => (
                             <Star 
                               key={star}
                               onClick={() => rateModule(currentModuleObj.id, star)}
                               className={`w-4 h-4 cursor-pointer transition ${
                                 (ratings[currentModuleObj.id] || 0) >= star ? "fill-yellow-500 text-yellow-500" : "text-gray-600 hover:text-yellow-500"
                               }`} 
                             />
                           ))}
                           <span className="text-gray-500 text-xs ml-1 font-mono">({ratings[currentModuleObj.id] || 0}/5)</span>
                         </div>
                       </div>
                    </div>

                    {/* Tabs Area */}
                    <div className="bg-[#0a0a0a] flex-1">
                       <div className="flex px-4 md:px-6 border-b border-white/10 mt-2">
                          <button 
                            className={`py-3 px-4 text-xs md:text-sm font-bold tracking-widest uppercase relative outline-none ${activeTab === "descricao" ? "text-white" : "text-gray-500 hover:text-gray-300"}`}
                            onClick={() => setActiveTab("descricao")}
                          >
                             Descrição
                             {activeTab === "descricao" && <div className="absolute bottom-0 inset-x-0 h-0.5 bg-yellow-500" style={{boxShadow: "0 -2px 10px rgba(234,179,8,0.5)"}}></div>}
                          </button>
                          <button 
                            className={`py-3 px-4 text-xs md:text-sm font-bold tracking-widest uppercase relative outline-none flex items-center gap-2 ${activeTab === "comentarios" ? "text-white" : "text-gray-500 hover:text-gray-300"}`}
                            onClick={() => setActiveTab("comentarios")}
                          >
                             Comentários
                             <span className="bg-[#111] text-gray-500 border border-white/5 text-[10px] rounded-full w-5 h-5 flex items-center justify-center">0</span>
                             {activeTab === "comentarios" && <div className="absolute bottom-0 inset-x-0 h-0.5 bg-yellow-500" style={{boxShadow: "0 -2px 10px rgba(234,179,8,0.5)"}}></div>}
                          </button>
                       </div>

                       <div className="p-4 md:p-6 mb-20 lg:mb-0">
                          {activeTab === "descricao" && (
                            <div className="animate-[fadeUp_0.3s_ease]">
                              {!currentModuleObj.locked ? currentModuleObj.description : <p className="text-gray-500 italic text-sm">A descrição estará disponível quando o módulo for liberado.</p>}
                            </div>
                          )}
                          {activeTab === "comentarios" && (
                            <div className="text-center py-10 animate-[fadeUp_0.3s_ease]">
                               <p className="text-gray-500 text-sm">Nenhum comentário encontrado para esta aula.</p>
                            </div>
                          )}
                       </div>
                    </div>
                 </div>

                 {/* Right Column: Playlist Sidebar */}
                 <div className="flex-1 lg:max-w-[25%] bg-[#080808] border-l border-white/5 flex flex-col min-h-screen lg:min-h-[calc(100vh-64px)] pb-10">
                    <div className="p-4 border-b border-white/5">
                      <div className="flex items-center justify-between mb-2">
                         <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Aulas Módulo P.V.M</h3>
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-gray-500 mb-1 font-semibold uppercase">
                        <span>Progresso total</span>
                        <span className="text-yellow-500">{progressPercentage}%</span>
                      </div>
                      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                         <div className="h-full bg-gradient-to-r from-yellow-700 to-yellow-400 transition-all duration-500 ease-out" style={{ width: `${progressPercentage}%` }}></div>
                      </div>
                    </div>

                    <div className="p-3">
                       {/* Dropdown Header Mimic */}
                       <div className="flex items-center justify-between text-sm text-gray-300 font-bold px-2 py-3 bg-[#111] rounded-md mb-2 border border-white/5">
                          <span>Por dentro da mentoria!</span>
                          <span className="text-xs text-gray-500 font-normal">{completedModules.length}/{MODULES.length} concluídos</span>
                       </div>

                       {/* List of Videos */}
                       <div className="space-y-1">
                          {MODULES.map((mod, index) => {
                             const isActive = mod.id === activeModule;
                             const isCompleted = completedModules.includes(mod.id);
                             
                             return (
                               <div 
                                 key={mod.id}
                                 onClick={() => !mod.locked && setActiveModule(mod.id)}
                                 className={`flex items-start gap-3 p-2 rounded-lg cursor-pointer transition ${isActive ? "bg-white/5 border border-white/10" : "hover:bg-white/5 border border-transparent"} ${mod.locked ? "opacity-40" : ""}`}
                               >
                                 {/* Cover Thumbnail Small */}
                                 <div className="w-16 h-10 bg-black rounded shrink-0 relative overflow-hidden border border-white/10">
                                   <img src={mod.cover} className="w-full h-full object-cover" alt="" />
                                   {isCompleted && (
                                     <div className="absolute top-1 left-1 bg-yellow-500 rounded-full w-3.5 h-3.5 flex items-center justify-center shadow-md">
                                        <Check className="w-2 h-2 text-black font-bold" />
                                     </div>
                                   )}
                                   {mod.locked && (
                                     <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                        <Lock className="w-3 h-3 text-yellow-500" />
                                     </div>
                                   )}
                                 </div>
                                 <div className="flex-1 overflow-hidden">
                                   <p className={`text-[11px] font-bold uppercase leading-tight line-clamp-2 ${isActive ? "text-yellow-500" : "text-gray-300"}`}>
                                      {index + 1}. {mod.title.replace(/Módulo \d+:\s/i, '')}
                                   </p>
                                   <div className="flex items-center gap-1 mt-1 text-[9px] font-semibold text-gray-500 uppercase tracking-widest">
                                      {mod.duration} • <span className="opacity-70">P.V.M</span>
                                   </div>
                                 </div>
                               </div>
                             );
                          })}
                       </div>
                    </div>
                 </div>

              </div>
            </div>
          )}

          {/* Floating Mobile Bottom Navigation (Optional enhancement for Mobile apps) */}
          <div className="md:hidden fixed bottom-0 inset-x-0 h-14 bg-[#050505] border-t border-white/10 flex items-center justify-around z-50">
             <div className={`p-2 ${!activeModule ? "text-yellow-500" : "text-gray-500"}`} onClick={() => setActiveModule(null)}>
               <Home className="w-6 h-6 mx-auto" />
               <span className="text-[10px] block mt-1 font-semibold uppercase">Início</span>
             </div>
             <div className="p-2 text-gray-500">
               <Search className="w-6 h-6 mx-auto" />
               <span className="text-[10px] block mt-1 font-semibold uppercase">Buscar</span>
             </div>
             <div className="p-2 text-gray-500">
               <User className="w-6 h-6 mx-auto" />
               <span className="text-[10px] block mt-1 font-semibold uppercase">Perfil</span>
             </div>
          </div>
        </main>
      </div>
      
      {/* Global Styles specific for this view */}
      <style
         dangerouslySetInnerHTML={{
           __html: `
         @keyframes fadeUp {
           from { opacity: 0; transform: translateY(10px); }
           to   { opacity: 1; transform: translateY(0); }
         }
         .fade-up { animation: fadeUp 0.4s ease both; }
         .hide-scrollbar::-webkit-scrollbar { display: none; }
         .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
       `,
         }}
       />
    </div>
  );
}
