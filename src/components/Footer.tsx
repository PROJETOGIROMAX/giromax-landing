import { Instagram, Facebook, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">G</span>
              </div>
              <span className="text-white font-display font-bold text-xl tracking-tighter">GiroMax</span>
            </div>
            <p className="text-zinc-500 max-w-sm mb-8">
              O app de gestão financeira e operacional feito para motoristas que querem parar de trabalhar no achismo.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/appgiromax" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-brand hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/share/1CiX52QA5b/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-brand hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://wa.me/5551999530322" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-brand hover:text-white transition-all">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">GiroMax</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#dor" className="hover:text-brand transition-colors">O Problema</a></li>
              <li><a href="#solucao" className="hover:text-brand transition-colors">A Solução</a></li>
              <li><a href="#prova" className="hover:text-brand transition-colors">O App</a></li>
              <li><a href="https://wa.me/5551999530322" target="_blank" rel="noreferrer" className="hover:text-brand transition-colors flex items-center gap-2">
                <MessageCircle size={16} /> Suporte via WhatsApp
              </a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-brand transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Termos de Uso</a></li>
              <li><a href="https://appgiromax.com.br" className="hover:text-brand transition-colors">appgiromax.com.br</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-zinc-600 text-xs text-center md:text-left font-bold">
              GiroMax. De motorista para Motorista.
            </p>
            <p className="text-zinc-600 text-[10px] text-center md:text-left">
              © 2026 GiroMax. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://appgiromax.com.br" className="bg-white/5 hover:bg-white/10 text-white px-6 py-2 rounded-full text-xs font-bold border border-white/10 transition-all">
              Acessar o App
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
