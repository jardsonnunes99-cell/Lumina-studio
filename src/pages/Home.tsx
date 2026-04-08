import { useState, useEffect } from "react";
import {
  CheckCircle,
  ShieldCheck,
  Star,
  Zap,
  ChevronDown,
  Quote,
  Smartphone,
  Crown,
  AlertTriangle,
  Play,
  Target,
  Image as ImageIcon,
  CameraOff
} from "lucide-react";

const CHECKOUT_LINK = "https://pay.kiwify.com.br/fndXKfa";

const BUYER_NOTIFICATIONS = [
  { name: "Aline de São Paulo", action: "acabou de garantir o Método P.V.M", time: "agora" },
  { name: "Juliana", action: "acabou de comprar o Método P.V.M", time: "há 12 segundos" },
  { name: "Mariana de Belo Horizonte", action: "pegou o Método P.V.M", time: "há alguns segundos" },
  { name: "Camila de Curitiba", action: "garantiu o Método P.V.M", time: "há 8 segundos" },
  { name: "Letícia", action: "acabou de adquirir o Método P.V.M", time: "agora mesmo" },
  { name: "Fernanda do Rio de Janeiro", action: "comprou o Método P.V.M", time: "há 19 segundos" },
  { name: "Beatriz", action: "pegou o Método P.V.M + todos os bônus", time: "há 27 segundos" },
  { name: "Larissa de São Paulo", action: "acabou de garantir o Método P.V.M", time: "há alguns segundos" },
  { name: "Patrícia de Porto Alegre", action: "comprou o Método P.V.M", time: "há alguns segundos" },
  { name: "Vanessa", action: "acabou de adquirir o Método P.V.M", time: "agora" },
  { name: "Raquel de Florianópolis", action: "garantiu o Método P.V.M", time: "há 14 segundos" },
  { name: "Gabriela de Brasília", action: "pegou o Método P.V.M", time: "há 8 segundos" }
];

const BEFORE_AFTER = [
  { before: "/images/optimized/Antes1.webp", after: "/images/optimized/Depois1.webp" },
  { before: "/images/optimized/antes2.webp", after: "/images/optimized/Depois2.webp" },
  { before: "/images/optimized/antes3.webp", after: "/images/optimized/depois3.webp" },
  { before: "/images/optimized/antes4.webp", after: "/images/optimized/depois4.webp" },
  { before: "/images/optimized/antes5.webp", after: "/images/optimized/depois5.webp" },
  { before: "/images/optimized/antes6.webp", after: "/images/optimized/depois6.webp" },
];

// O nome dos módulos mantido
const COURSE_MODULES = [
  { id: 1, title: "Módulo 1: O Despertar da IA", cover: "/images/profissional/modulo curso/modulo1.png" },
  { id: 2, title: "Módulo 2: Mentalidade e Constância", cover: "/images/profissional/modulo curso/modulo2.png" },
  { id: 3, title: "Módulo 3: Os 3 Pilares", cover: "/images/profissional/modulo curso/modulo3.png" },
  { id: 4, title: "Módulo 4: Criação de Fotos Ultra Realistas", cover: "/images/profissional/modulo curso/modulo4.png" },
  { id: 5, title: "Módulo 5: Fotos de Aniversário Ultra Realistas", cover: "/images/profissional/modulo curso/modulo5.png" },
  { id: 6, title: "Módulo 6: Fotos Estilo Modelo", cover: "/images/profissional/modulo curso/modulo6.png" },
  { id: 7, title: "Módulo 7: Transformar Fotos em Conteúdo", cover: "/images/profissional/modulo curso/modulo7.png" },
  { id: 8, title: "Módulo 8: Negócios e Escala", cover: "/images/profissional/modulo curso/modulo8.png", locked: true }
];

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [buyerNotification, setBuyerNotification] = useState(BUYER_NOTIFICATIONS[0]);
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    // Show first popup after 4 seconds
    const initialTimer = setTimeout(() => {
      setShowPopup(true);
    }, 4000);

    // Change popup periodically
    const intervalTimer = setInterval(() => {
      setShowPopup(false);
      
      setTimeout(() => {
        const randomNotification = BUYER_NOTIFICATIONS[Math.floor(Math.random() * BUYER_NOTIFICATIONS.length)];
        setBuyerNotification(randomNotification);
        setShowPopup(true);
      }, 1000);

    }, 12000);

    // Slider das imagens do Hero Topo
    const slideTimer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % BEFORE_AFTER.length);
    }, 3500);
    
    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
      clearInterval(slideTimer);
    };
  }, []);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes meteor {
          0% { transform: translateY(-20vh) translateX(20vw) rotate(225deg); opacity: 1; }
          100% { transform: translateY(120vh) translateX(-120vw) rotate(225deg); opacity: 0; }
        }
        @keyframes pulseGlow {
          0%,100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.4); }
          50%      { box-shadow: 0 0 40px rgba(16, 185, 129, 0.8), 0 0 15px rgba(234, 179, 8, 0.5); }
        }
        * { font-family: 'Montserrat', sans-serif; scroll-behavior: smooth;}
        .font-serif { font-family: 'Playfair Display', serif; }
        .fade-up { animation: fadeUp 0.8s ease both; }
        .pulse-glow { animation: pulseGlow 2.5s ease-in-out infinite; }
        .bg-luxury { background: linear-gradient(135deg, #09090b 0%, #000000 100%); }
        .btn-green {
          background: linear-gradient(180deg, #059669 0%, #064e3b 100%);
          border: 1px solid #10b981;
          color: #ffffff;
          text-shadow: 0 2px 4px rgba(0,0,0,0.6);
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
          will-change: transform, box-shadow;
        }
        .btn-green:hover {
          transform: scale(1.03);
          box-shadow: 0 0 30px rgba(16, 185, 129, 0.6), 0 0 15px rgba(234, 179, 8, 0.4);
          border-color: #34d399;
          background: linear-gradient(180deg, #047857 0%, #064e3b 100%);
        }
        .gold-gradient-text {
          background: linear-gradient(to right, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `,
        }}
      />

      <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-yellow-500/30 pb-24">
        
        {/* ===== TOPO / HERO ===== */}
        <section className="relative w-full overflow-hidden pb-16">
           <div className="absolute inset-0 z-0 bg-[#050505]">
             {BEFORE_AFTER.map((pair, i) => (
                <img key={i} src={pair.after} alt="Background" loading={i === 0 ? "eager" : "lazy"} decoding={i === 0 ? "sync" : "async"} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 blur-[1px] md:blur-[3px] will-change-opacity ${i === heroIndex ? "opacity-20" : "opacity-0"}`} />
             ))}
             <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#050505]"></div>
             
             {/* Efeito Meteoros - escondido no mobile para melhor performance */}
             <div className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden pointer-events-none hidden md:block">
                <div className="absolute top-[10%] right-[10%] w-[1px] h-[60px] md:h-[150px] bg-gradient-to-b from-transparent to-white/80 animate-[meteor_3s_linear_infinite]" style={{animationDelay: "0s"}}></div>
                <div className="absolute top-[30%] right-[40%] w-[1px] h-[60px] md:h-[150px] bg-gradient-to-b from-transparent to-white/40 animate-[meteor_5s_linear_infinite]" style={{animationDelay: "1s"}}></div>
                <div className="absolute top-[5%] right-[70%] w-[1px] h-[60px] md:h-[150px] bg-gradient-to-b from-transparent to-yellow-500/80 animate-[meteor_4s_linear_infinite]" style={{animationDelay: "2.5s"}}></div>
             </div>
           </div>

           <div className="container mx-auto px-4 pt-16 relative z-10 fade-up text-center max-w-5xl">
              <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-8">
                 <span className="text-yellow-400 font-bold text-xs md:text-sm tracking-widest uppercase">✨ O Segredo que as marcas revelam</span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Pare de postar fotos que parecem geradas por IA e aprenda <span className="text-green-500">fazer fotos Real.</span><br/>
                <span className="gold-gradient-text text-2xl md:text-4xl mt-4 block">Aprenda o Método P.V.M</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-4xl mx-auto font-medium">
                Crie fotos profissionais, reais e humanas para redes sociais, aniversários e propaganda do seu serviço e muito mais — <strong className="text-white">usando apenas o celular, sem cara de IA e sem experiência.</strong>
              </p>

              <div className="relative w-full max-w-lg mx-auto aspect-square md:aspect-[4/3] lg:aspect-[16/10] rounded-2xl shadow-2xl border border-white/10 overflow-hidden mb-12 transform-gpu bg-black">
                {BEFORE_AFTER.map((pair, index) => (
                  <div key={index} className={`absolute inset-0 w-full h-full flex transition-opacity duration-1000 will-change-opacity ${index === heroIndex ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                    
                    {/* Metade Esquerda: ANTES */}
                    <div className="relative w-1/2 h-full border-r border-yellow-500/50 flex flex-col justify-center bg-gradient-to-b from-[#111] to-[#050505] p-2">
                       <img src={pair.before} alt="Antes" loading={index === 0 ? "eager" : "lazy"} width="400" height="400" className="w-full h-full object-contain drop-shadow-2xl" />
                       <div className="absolute top-2 left-2 bg-red-600/90 text-white text-[8px] md:text-sm font-black px-1.5 py-1 rounded shadow-lg uppercase tracking-wider backdrop-blur-md z-20">📸 Foto Real</div>
                    </div>

                    {/* Metade Direita: DEPOIS */}
                    <div className="relative w-1/2 h-full flex flex-col justify-center bg-gradient-to-b from-[#111] to-[#050505] p-2">
                       <img src={pair.after} alt="Depois" loading={index === 0 ? "eager" : "lazy"} width="400" height="400" className="w-full h-full object-contain drop-shadow-2xl" />
                       <div className="absolute top-2 right-2 bg-green-600/90 text-white text-[9px] md:text-sm font-black px-2 py-1 rounded shadow-lg uppercase tracking-wider backdrop-blur-md z-20">✨ Método P.V.M</div>
                    </div>

                  </div>
                ))}
              </div>

              <a href={CHECKOUT_LINK} className="pulse-glow btn-green inline-block rounded-full px-6 py-5 w-full max-w-lg mx-auto relative overflow-hidden group">
                 <div className="absolute inset-0 bg-yellow-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                 <span className="relative z-10 text-white font-black md:text-[18px] text-sm uppercase tracking-wide flex flex-col items-center justify-center gap-1 text-center leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    <span className="flex items-center gap-2"><Zap className="fill-yellow-400 text-yellow-400 w-5 h-5 md:w-6 md:h-6 shrink-0" /> QUERO APRENDER AGORA</span>
                 </span>
              </a>
           </div>
        </section>

        {/* ===== PROBLEMA / LEAD ===== */}
        <section className="py-20 bg-[#0a0a0a] border-y border-white/5 relative">
           <div className="container mx-auto px-4 max-w-5xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="order-2 md:order-1 relative">
                    <div className="absolute inset-0 bg-red-500/10 blur-[80px] rounded-full pointer-events-none hidden md:block"></div>
                    <img src="/images/advogada.png" alt="Mulher Advogada" loading="lazy" decoding="async" className="rounded-2xl w-full max-w-md mx-auto shadow-xl md:shadow-2xl border border-white/10 object-cover relative z-10" />
                 </div>
                 <div className="order-1 md:order-2 fade-up">
                    <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">Chega de perder clientes por <span className="text-red-500">fotos com cara de IA.</span></h2>
                    <p className="text-gray-400 text-lg mb-4">Se você:</p>
                    <ul className="space-y-4 mb-6">
                       {[
                         "Posta fotos e elas parecem artificiais, sem vida ou “geradas por robô”",
                         "Sente que seu serviço fica com aparência fake ou barata nas imagens",
                         "Usa fotos de aniversário, antes/depois ou divulgação que ninguém acredita",
                         "Perde engajamento porque as pessoas rolam o feed e pensam “mais uma foto de IA”"
                       ].map((item, i) => (
                         <li key={i} className="flex items-start gap-3">
                            <AlertTriangle className="text-yellow-500 shrink-0 mt-1 w-5 h-5" />
                            <span className="text-gray-200 font-medium text-lg leading-snug">{item}</span>
                         </li>
                       ))}
                    </ul>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl relative ml-4 mt-8">
                       <Quote className="absolute -top-4 -left-4 w-8 h-8 text-yellow-500 opacity-50" />
                       <p className="text-gray-300 text-lg mb-2">Então o problema <strong className="text-white">não é o seu serviço.</strong> É que suas fotos estão transmitindo falta de autenticidade.</p>
                       <p className="text-red-400 text-lg font-bold">No mundo de hoje, todo mundo já sabe identificar imagem de IA. E quando a foto parece fake… a confiança some. O desejo some. A venda some.</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* ===== BIG IDEA ===== */}
        <section className="py-24 relative bg-black border-b border-white/5">
           <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-green-500/5 blur-[120px] pointer-events-none hidden md:block"></div>
           <div className="container mx-auto px-4 max-w-4xl text-center relative z-10 fade-up">
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                 Foto não é só registro. <br />
                 <span className="gold-gradient-text block mt-2">Foto é a propaganda do seu serviço.</span>
              </h2>
              <p className="text-gray-300 text-xl font-medium mb-12">Uma imagem bem feita e 100% humana:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
                  {[
                    { icon: Target, text: "Para o scroll e gera desejo real" },
                    { icon: CheckCircle, text: "Transmite confiança e profissionalismo" },
                    { icon: Crown, text: "Faz as pessoas acreditarem no seu serviço" },
                    { icon: Zap, text: "Transforma momentos em conteúdo que vende" }
                  ].map((benefit, i) => (
                    <div key={i} className="bg-[#111] border border-white/10 p-6 rounded-2xl flex items-center gap-4 hover:border-green-500/50 transition-colors">
                       <div className="bg-green-500/10 p-3 rounded-xl">
                          <benefit.icon className="w-6 h-6 text-green-500" />
                       </div>
                       <span className="text-white font-semibold text-lg">{benefit.text}</span>
                    </div>
                  ))}
              </div>
           </div>
        </section>

        {/* ===== MECANISMO ÚNICO ===== */}
        <section className="py-24 bg-[#0a0a0a] border-b border-white/5 relative">
           <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-16 fade-up">
                 <h2 className="text-3xl md:text-5xl font-black mb-6">
                    Você não precisa de câmera cara <br className="hidden md:block"/> nem de IA.
                 </h2>
                 <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Você precisa do <strong className="text-white">Método P.V.M – Percepção de Valor Máximo:</strong> o único sistema que ensina você a tirar fotos profissionais e totalmente reais com o celular.
                 </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {[
                   { title: "Iluminação Natural", desc: "Nunca aquela luz artificial de IA.", icon: Zap },
                   { title: "Composição Humana", desc: "Arranjos que transmitem emoção e valor.", icon: Crown },
                   { title: "Enquadramento Pro", desc: "Parece sempre feito por um fotógrafo.", icon: Target },
                   { title: "Edição Inteligente", desc: "Cara de vida real, sem aspecto plastificado.", icon: ImageIcon }
                 ].map((item, i) => (
                   <div key={i} className="bg-neutral-900 border border-white/10 p-6 rounded-2xl text-center group hover:bg-neutral-800 transition-colors">
                      <div className="bg-yellow-500/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                         <item.icon className="w-8 h-8 text-yellow-500" />
                      </div>
                      <h3 className="font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                   </div>
                 ))}
              </div>

              <div className="max-w-4xl mx-auto mt-12 bg-[#111] border border-white/10 p-6 md:p-8 rounded-2xl">
                 <p className="text-center text-green-400 font-bold text-xl mb-6">Resultado: fotos que parecem caras, mas nunca parecem de IA.</p>
                 <h3 className="text-white font-bold mb-4 text-center">Funciona para:</h3>
                 <div className="flex flex-col md:flex-row justify-center gap-4 text-center">
                    <span className="bg-white/5 border border-white/10 px-4 py-3 rounded-lg text-sm text-gray-300 font-medium">📱 Postagens diárias nas redes sociais</span>
                    <span className="bg-white/5 border border-white/10 px-4 py-3 rounded-lg text-sm text-gray-300 font-medium">🎉 Fotos de aniversário e momentos pessoais</span>
                    <span className="bg-white/5 border border-white/10 px-4 py-3 rounded-lg text-sm text-gray-300 font-medium">🚀 Propaganda do seu serviço (antes/depois)</span>
                 </div>
              </div>
           </div>
        </section>

        {/* ===== QUEBRA DE CRENÇAS ===== */}
        <section className="py-24 bg-black border-b border-white/5 relative">
           <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl md:text-5xl font-black mb-12 text-center text-white">3 Mitos Destruídos</h2>
              
              <div className="space-y-6">
                 {[
                   { mito: "1: “Preciso usar IA para ficar bonito”", vd: "Falso. IA entrega cara de fake e afasta cliente.", icon: CameraOff },
                   { mito: "2: “Não sou fotógrafo”", vd: "Não precisa ser. O P.V.M entrega a estrutura pronta para fotos reais e profissionais.", icon: Star },
                   { mito: "3: “Só fotógrafo caro resolve”", vd: "Errado. Com o celular + método você ganha independência e fotos com alma.", icon: ShieldCheck }
                 ].map((mito, i) => (
                   <div key={i} className="bg-[#111] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center fade-up hover:border-yellow-500/30 transition-colors">
                      <div className="bg-red-500/10 text-red-500 p-4 rounded-full shrink-0">
                         <mito.icon className="w-8 h-8" />
                      </div>
                      <div className="text-center md:text-left">
                         <h3 className="text-xl font-bold text-gray-400 mb-2 line-through">Mito {mito.mito}</h3>
                         <p className="text-white text-lg font-medium flex flex-col md:flex-row items-center justify-center md:justify-start gap-2">
                           <span className="text-green-500 shrink-0 font-bold text-xl hidden md:block">→</span> <span className="leading-relaxed">{mito.vd}</span>
                         </p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ===== NARRATIVA ===== */}
        <section className="py-24 bg-luxury border-b border-white/5 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 blur-[100px] rounded-full pointer-events-none hidden md:block"></div>
           <div className="container mx-auto px-4 max-w-4xl text-center relative z-10 fade-up">
              <h2 className="text-3xl md:text-5xl font-black mb-8 gold-gradient-text text-left md:text-center">Imagine isso:</h2>
              <div className="bg-black/60 border border-white/10 rounded-[2rem] p-8 md:p-12 text-left backdrop-blur-sm">
                 <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6 font-serif italic">
                   Você tira uma foto simples do seu serviço ou de um aniversário. <br className="hidden md:block" />Aplica o método específico de luz + ângulo + composição + edição…
                 </p>
                 <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                   E a mesma foto que antes ficava com cara de IA agora:
                 </p>
                 <ul className="space-y-4 mb-8">
                    {[
                      "Parece tirada por um fotógrafo profissional",
                      "Transmite emoção e autenticidade",
                      "Faz as pessoas pararem, comentarem e mandarem mensagem"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-white text-xl font-bold">
                         <CheckCircle className="text-green-500 w-6 h-6 shrink-0" />
                         <span>{item}</span>
                      </li>
                    ))}
                 </ul>
                 <p className="text-lg md:text-xl text-gray-400 mb-2">
                   Agora imagine isso acontecendo em todos os seus posts e em toda propaganda do seu serviço.
                 </p>
                 <p className="text-2xl md:text-3xl text-white font-black mt-6 border-l-4 border-yellow-500 pl-4 py-2 bg-gradient-to-r from-yellow-500/10 to-transparent">
                   Isso não é “melhorar foto”.<br className="md:hidden" /> Isso é <span className="text-green-400">recuperar a confiança e multiplicar as vendas.</span>
                 </p>
              </div>
           </div>
        </section>

        {/* ===== OFERTA / MÓDULOS ===== */}
        <section className="py-20 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-green-500/5 blur-[60px] md:blur-[120px] rounded-full pointer-events-none hidden md:block"></div>
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-center">O que você recebe hoje no <span className="gold-gradient-text block mt-2">Método P.V.M</span></h2>
            <p className="text-gray-400 text-sm md:text-lg mb-12 text-center fade-up font-medium">Treinamento completo passo a passo. Deslize para ver os módulos (Netflix Style)</p>
            
            <div className="flex overflow-x-auto gap-4 pb-8 snap-x hide-scrollbar scroll-smooth fade-up" style={{ scrollbarWidth: "none" }}>
               {COURSE_MODULES.map((mod) => (
                 <div 
                   key={mod.id} 
                   className={`snap-start shrink-0 w-[160px] md:w-[240px] group relative rounded-md overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:z-10 bg-[#111] ${mod.locked ? "opacity-50" : ""}`}
                 >
                   <div className="aspect-[4/5] w-full relative border border-white/5 rounded-md overflow-hidden shadow-lg group-hover:border-yellow-500/50 bg-[#0a0a0a]">
                     <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                     <img src={mod.cover} alt={mod.title} loading="lazy" decoding="async" className="w-full h-full object-contain" />
                     
                     <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent z-10 flex flex-col justify-end p-2 md:p-4">
                       <p className="text-[11px] md:text-sm font-bold text-white leading-tight uppercase line-clamp-2 text-center shadow-black drop-shadow-md">
                         {mod.title.replace(/Módulo \d+:\s/i, '')}
                       </p>
                     </div>
                   </div>
                 </div>
               ))}
            </div>

            <div className="max-w-3xl mx-auto mt-12 bg-[#111] border border-white/10 p-6 md:p-8 rounded-2xl">
               <h3 className="text-xl font-bold text-white mb-6 text-center">Você vai aprender:</h3>
               <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Como tirar fotos profissionais e 100% reais com o celular",
                    "Técnicas de iluminação natural",
                    "Composição que transmite emoção humana",
                    "Edição que deixa cara de vida real (nunca de IA)",
                    "Estruturas prontas para redes, aniversários e divulgação de serviços"
                  ].map((topic, i) => (
                    <div key={i} className="flex items-start gap-3">
                       <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                       <span className="text-gray-300 font-medium">{topic}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </section>

        {/* ===== BÔNUS EXCLUSIVOS ===== */}
        <section className="py-20 bg-black text-center border-y border-white/5 relative">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-full bg-yellow-500/5 blur-[120px] pointer-events-none hidden md:block"></div>
           <div className="container mx-auto px-4 max-w-3xl relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-wider gold-gradient-text">Bônus Exclusivos</h2>
              <p className="text-xl text-gray-300 mb-8 font-bold">Valor real: <span className="line-through text-red-500">R$ 197,00</span></p>
              
              <img src="https://inteligenciadigitalpro.com.br/wp-content/uploads/2025/06/bonus-2.webp" alt="Pack Bônus" loading="lazy" decoding="async" className="mx-auto w-full max-w-xl rounded-2xl border border-yellow-500/30 shadow-[0_0_30px_rgba(234,179,8,0.1)] mb-10" />

              <div className="grid gap-4 text-left mb-10">
                 <div className="bg-neutral-900 border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-yellow-500/40 transition-colors">
                    <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500"></div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><Star className="w-5 h-5 text-yellow-500"/> Pack PROMPT</h3>
                    <p className="text-gray-400 text-sm">Deixa imagem mais realistas para os seus trabalhos.</p>
                 </div>
                 <div className="bg-neutral-900 border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-yellow-500/40 transition-colors">
                    <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500"></div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><Play className="w-5 h-5 text-yellow-500"/> +1 Aula Bônus</h3>
                    <p className="text-gray-400 text-sm">Estratégias ocultas de propaganda que chamam a atenção.</p>
                 </div>
                 <div className="bg-neutral-900 border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-yellow-500/40 transition-colors">
                    <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500"></div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><Smartphone className="w-5 h-5 text-yellow-500"/> AGENTE IA EXCLUSIVO</h3>
                    <p className="text-gray-400 text-sm">Apenas para ter ideias revolucionárias — nunca para gerar a foto final do seu projeto.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* ===== URGÊNCIA & PRICING BOX ===== */}
        <section className="py-24 px-4 bg-luxury relative z-10 border-y border-white/5 shadow-[0_-20px_50px_rgba(234,179,8,0.05)]">
          <div className="container mx-auto max-w-4xl text-center mb-12 fade-up">
              <h2 className="text-2xl md:text-4xl font-black text-white mb-6 uppercase">
                 Preço especial de lançamento
              </h2>
              <div className="bg-red-500/10 border border-red-500/30 p-6 md:p-8 rounded-2xl max-w-3xl mx-auto mb-8 text-left relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-1 h-full bg-red-600 animate-pulse"></div>
                 <p className="text-white text-xl mb-3 font-semibold">
                   Quanto tempo você ainda vai continuar postando fotos que parecem IA e afastam seus clientes? <br className="hidden md:block" /> <strong className="text-red-400">E AS PESSOAS PERCEBEM!</strong>
                 </p>
                 <p className="text-gray-300 text-lg mb-4">
                   Cada foto com cara artificial é oportunidade e dinheiro que você está perdendo.
                 </p>
                 <p className="text-red-400 font-bold uppercase text-[13px] md:text-sm bg-red-900/40 py-2 px-4 rounded-lg inline-flex items-center">
                   <AlertTriangle className="w-4 h-4 mr-2" /> A oferta de R$ 27,90 pode sair do ar a qualquer momento.
                 </p>
              </div>
          </div>

          <div className="container mx-auto max-w-4xl">
            <div className="w-full text-center bg-black border-2 border-yellow-600/50 backdrop-blur-md rounded-[2rem] p-8 md:p-12 shadow-[0_0_80px_rgba(234,179,8,0.15)] relative overflow-hidden mx-auto max-w-xl">
               <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-800" />
               <div className="absolute -inset-2 bg-yellow-500/5 blur-[100px] pointer-events-none" />
                 
               <div className="relative z-10">
                  <p className="text-gray-500 font-medium line-through mb-2 text-xl">Valor normal: R$ 197,00</p>
                  <p className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-4">Apenas</p>
                  <p className="text-6xl md:text-7xl font-black text-white mb-8">R$ 27,90</p>
                  
                  <a href={CHECKOUT_LINK} className="pulse-glow btn-green w-full block rounded-full py-5 shadow-lg shadow-green-500/20 mb-8 transform-gpu">
                     <span className="text-white font-black text-[13px] md:text-lg uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] px-2 block">
                        QUERO APRENDER AGORA
                     </span>
                  </a>

                  <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 flex gap-4 items-center text-left">
                     <ShieldCheck className="w-10 h-10 text-green-500 flex-shrink-0" />
                     <div>
                       <p className="font-bold text-white mb-1 uppercase">Garantia + Compra Segura</p>
                       <p className="text-xs text-gray-400">Ambiente 100% seguro. Se não gostar, devolvo seu dinheiro em até 7 dias.</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* ===== O QUE ESTÃO FALANDO ===== */}
        <section className="py-24 bg-black border-y border-white/5">
           <div className="container mx-auto px-4 max-w-5xl text-center">
              <h2 className="text-3xl md:text-5xl font-black mb-12 uppercase tracking-wider">
                 O QUE ESTÃO <span className="gold-gradient-text">FALANDO</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 <img src="/images/optimized/provasocial1.webp" alt="Depoimento 1" loading="lazy" width="250" height="400" decoding="async" className="w-full rounded-2xl shadow-lg border border-white/10 object-cover" />
                 <img src="/images/optimized/provasocial2.webp" alt="Depoimento 2" loading="lazy" width="250" height="400" decoding="async" className="w-full rounded-2xl shadow-lg border border-white/10 object-cover" />
                 <img src="/images/optimized/provasocial3.webp" alt="Depoimento 3" loading="lazy" width="250" height="400" decoding="async" className="w-full rounded-2xl shadow-lg border border-white/10 object-cover" />
                 <img src="/images/optimized/provasocial4.jpeg.webp" alt="Depoimento 4" loading="lazy" width="250" height="400" decoding="async" className="w-full rounded-2xl shadow-lg border border-white/10 object-cover" />
              </div>
           </div>
        </section>

        {/* ===== ANTES E DEPOIS GRID (VEJA A TRANSFORMAÇÃO) ===== */}
        <section className="py-24 relative bg-[#0a0a0a] border-b border-white/5">
           <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-3xl md:text-5xl font-black mb-4">Veja a <span className="gold-gradient-text">Transformação</span></h2>
              <p className="text-gray-400 text-lg mb-12 font-medium">O Método P.V.M quebra o padrão fake. Arraste e compare: <strong className="text-white">antes ("cara de IA") × depois (Real e Profissional).</strong></p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-0">
                 {BEFORE_AFTER.slice(0, 6).map((pair, i) => (
                   <div key={i} className="rounded-lg border border-white/10 shadow-lg aspect-square lg:aspect-[16/10] bg-black flex overflow-hidden">
                     
                     {/* Esquerda: Antes */}
                     <div className="relative w-1/2 h-full border-r border-yellow-500/50 flex flex-col justify-center bg-[#0a0a0a] p-1 md:p-3 hover:bg-[#111] transition-colors">
                       <img src={pair.before} alt={`Antes ${i}`} className="w-full h-full object-contain" width="300" height="300" loading="lazy" decoding="async" />
                       <div className="absolute bottom-2 left-2 bg-red-600/90 text-white text-[8px] md:text-sm font-bold px-1.5 py-1 rounded shadow-lg uppercase z-20 backdrop-blur-sm">Foto Real</div>
                     </div>

                     {/* Direita: Depois */}
                     <div className="relative w-1/2 h-full flex flex-col justify-center bg-[#0a0a0a] p-1 md:p-3 hover:bg-[#111] transition-colors">
                       <img src={pair.after} alt={`Depois ${i}`} className="w-full h-full object-contain" width="300" height="300" loading="lazy" decoding="async" />
                       <div className="absolute bottom-2 right-2 bg-green-600/90 text-white text-[10px] md:text-sm font-bold px-2 py-1 rounded shadow-lg uppercase z-20 backdrop-blur-sm">Método P.V.M</div>
                     </div>

                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="py-20 px-4 bg-[#050505]">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-black text-center mb-12 uppercase"> PERGUNTAS <span className="text-yellow-500">FREQUENTES</span></h2>
            
            <div className="space-y-4">
               {[
                 { q: "As fotos geradas realmente parecem profissionais, como em um estúdio com luzes reais?", a: "Sim. O Método P.V.M foca na construção da foto real e humana. A foto mostra poros, texturas e naturalidade que a IA artificial nunca alcança. Ninguém dirá que foi feita pelo celular." },
                 { q: "Preciso pagar outra ferramenta depois?", a: "Não obrigatoriamente. O Método ensina os caminhos orgânicos." },
                 { q: "Eu tenho acesso imediato?", a: "Sim! Assim que o pagamento for aprovado (Pix ou Cartão na mesma hora), você recebe o acesso por e-mail automaticamente." },
                 { q: "É para quem nunca tirou fotos profissionais?", a: "Com certeza. O método entrega a estrutura pronta. É só ver e aplicar o que é ensinado nas aulas práticas sem erro." }
               ].map((faq, i) => (
                 <details key={i} className="group bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden hover:border-yellow-500/20 transition-colors cursor-pointer">
                    <summary className="flex items-center justify-between p-6 text-left font-semibold text-gray-200 select-none outline-none">
                      {faq.q}
                      <ChevronDown className="w-5 h-5 text-yellow-500 flex-shrink-0 group-open:rotate-180 transition-transform ml-4"/>
                    </summary>
                    <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5 mt-2">
                       {faq.a}
                    </div>
                 </details>
               ))}
            </div>
          </div>
        </section>

        {/* ===== GARANTIA DE ACESSO AGORA CAIXA FINAL ===== */}
        <section className="py-24 bg-luxury border-t border-yellow-700/30 relative text-center">
           <div className="container mx-auto px-4 max-w-3xl relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase text-white">Garanta seu acesso agora</h2>
              <div className="bg-black/80 border-2 border-yellow-500/50 p-8 md:p-12 rounded-[2rem] shadow-[0_0_80px_rgba(234,179,8,0.15)] mx-auto relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-800" />
                 <p className="text-xl md:text-2xl text-gray-400 font-bold mb-2 line-through decoration-red-500">De R$ 197,00</p>
                 <p className="text-3xl md:text-4xl text-gray-200 font-bold mb-4 uppercase">Por Apenas</p>
                 <p className="text-6xl md:text-7xl font-black text-yellow-500 mb-8 gold-gradient-text drop-shadow-md">R$ 27,90</p>
                 
                 <p className="text-red-500 font-bold uppercase mb-8 flex justify-center items-center gap-2 animate-pulse">
                    <AlertTriangle className="w-5 h-5"/> Oferta por tempo limitado
                 </p>
                 
                 <a href={CHECKOUT_LINK} className="pulse-glow btn-green w-full block rounded-full py-6 md:py-8 shadow-lg shadow-green-500/20">
                    <span className="text-white font-black text-xl md:text-2xl uppercase tracking-wider drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                       QUERO APRENDER AGORA
                    </span>
                 </a>
              </div>
           </div>
        </section>

        <footer className="py-8 bg-black overflow-hidden border-t border-white/5 text-center text-gray-700 text-xs">
           <p className="mb-2">© {new Date().getFullYear()} Método P.V.M - Todos os direitos reservados.</p>
           <p>Este site não faz parte do website do Facebook ou do Facebook Inc.<br/>Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira.</p>
        </footer>

        {/* ===== NOTIFICAÇÃO DE COMPRA ===== */}
        {showPopup && (
          <div className="fixed bottom-3 left-3 right-3 md:right-auto md:bottom-10 md:left-10 bg-white border border-gray-200 p-2 md:p-4 rounded-lg md:rounded-2xl shadow-xl md:shadow-2xl flex items-center gap-2 md:gap-4 z-[9999] animate-[fadeUp_0.5s_ease-out] w-max max-w-[85vw] md:max-w-md mx-auto">
            <div className="bg-green-100 p-1 md:p-2 rounded-full shrink-0">
              <CheckCircle className="w-4 h-4 md:w-6 md:h-6 text-green-600" />
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-gray-900 text-[10px] md:text-base leading-tight md:mb-1">{buyerNotification.name}</p>
              <p className="text-[9px] md:text-xs text-gray-600 leading-tight">
                {buyerNotification.action} <span className="font-semibold text-green-700">{buyerNotification.time}</span>
              </p>
            </div>
          </div>
        )}

      </div>
    </>
  );
};

export default Home;
