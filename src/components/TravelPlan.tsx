import { motion } from 'motion/react';
import { FileText, Video, Download } from 'lucide-react';

export default function TravelPlan() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-4xl font-extrabold text-white tracking-tight mb-4">洛杉磯奢華假期提案</h2>
        <p className="text-lg text-slate-400">
          2026 清明連假六天五夜 · 專屬尊榮行程。這個專案展示了我規劃頂級旅遊體驗的能力與細節安排。
        </p>
      </div>

      {/* 旅遊規劃影片 */}
      <section className="glass-panel rounded-2xl overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-700/50 flex items-center justify-between">
          <div className="flex items-center text-sky-400">
            <Video className="w-5 h-5 mr-3" />
            <h3 className="text-xl font-bold text-white">行程介紹影片</h3>
          </div>
        </div>
        <div className="p-6 md:p-8">
          <div className="aspect-video rounded-xl overflow-hidden shadow-inner border border-slate-700/50 bg-black/40">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/oAheUqNinm0?si=GSEldwC0ATqlmZVu" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* 旅遊規劃企劃書 (PDF 預覽) */}
      <section className="glass-panel rounded-2xl overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-700/50 flex items-center justify-between">
          <div className="flex items-center text-sky-400">
            <FileText className="w-5 h-5 mr-3" />
            <h3 className="text-xl font-bold text-white">企劃書 PDF 預覽</h3>
          </div>
          <a
            href="https://drive.google.com/file/d/1ikEdnsLIH2b37ttjpsCeC3vxfmwHcSvi/view"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium rounded-lg transition-colors border border-slate-700"
          >
            <Download className="w-4 h-4 mr-2" />
            前往 Google Drive 下載
          </a>
        </div>
        <div className="p-6 md:p-8">
          <div className="w-full h-[800px] border border-slate-700/50 rounded-xl overflow-hidden bg-slate-900 relative">
            {/* Loading / Fallback state behind the iframe */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-slate-400 z-0">
              <FileText className="w-16 h-16 text-slate-600 mb-4" />
              <p className="mb-4">正在載入 PDF ...</p>
              <p className="text-sm">如無法正常顯示，請點擊右上方按鈕下載查看。</p>
            </div>
            
            {/* Iframe to display PDF natively */}
            <iframe 
              src="https://drive.google.com/file/d/1ikEdnsLIH2b37ttjpsCeC3vxfmwHcSvi/preview" 
              className="w-full h-full absolute inset-0 z-10"
              title="洛杉磯奢華假期企劃書"
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      </section>

    </motion.div>
  );
}
