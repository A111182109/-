import { motion } from 'motion/react';
import { Anchor, Briefcase, GraduationCap, Languages, Award, ExternalLink } from 'lucide-react';

export default function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      {/* 簡介與頭像區塊 */}
      <section className="glass-panel rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="flex-shrink-0">
          <img 
            src={`${import.meta.env.BASE_URL}avatar.jpg`}
            alt="李宥杰" 
            className="w-48 h-48 rounded-2xl object-cover object-[center_15%] shadow-md border-2 border-sky-500"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null; // Prevent infinite loop if fallback also fails
              target.src = 'https://ui-avatars.com/api/?name=李宥杰&size=200&background=1e293b&color=cbd5e1';
            }}
          />
        </div>
        <div className="flex-1 space-y-4 text-slate-300 leading-relaxed text-lg">
          <h2 className="text-3xl font-bold text-white mb-6">關於我</h2>
          <p>
            我叫李宥杰，就讀於國立高雄科技大學航運技術系。自從進入大學後，我對海上事業產生了濃厚的興趣，對船舶的運作與航行過程充滿了好奇與熱情。大海的廣闊與航海工作的挑戰性，讓我立志未來可以成為一名專業且值得信任的船長。
          </p>
          <p>
            在學期間，我積極修習航海學、海事法規與船舶管理等課程，並已取得四小證，為將來從事海上工作奠定了良好基礎。透過課堂學習與模擬實作，我體會到航海工作不僅需要專業技能，更需要冷靜的判斷力、嚴謹的紀律與強烈的責任感。
          </p>
          <p>
            我認為，一位優秀的航海人員必須在面對各種狀況時保持穩定心態，並與團隊密切合作。未來我希望能進入公司實習、工作，親身體驗傳達運作及航線管理，學習專業技術與團隊合作的經驗，朝成為優秀船員與船長的目標邁進。
          </p>
        </div>
      </section>

      {/* 外部連結區塊: 3D 公仔 & Google 協作 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a 
          href="https://studio.tripo3d.ai/3d-model/fd90f45d-3399-4280-a807-7ad03702df9b?invite_code=NPJXC9" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group block glass-panel rounded-2xl p-6 transition-all hover:bg-sky-900/30 border border-transparent hover:border-sky-500/50"
        >
          <h3 className="text-xl font-bold text-white flex items-center mb-2">
            個人 3D 公仔 (Tripo3D)
            <ExternalLink className="w-5 h-5 ml-2 text-sky-400 group-hover:translate-x-1 transition-transform" />
          </h3>
          <p className="text-slate-400">點擊前往查看我的 3D 公仔作品</p>
        </a>

        <a 
          href="https://sites.google.com/nkust.edu.tw/bababoy/%E9%A6%96%E9%A0%81" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group block glass-panel rounded-2xl p-6 transition-all hover:bg-slate-800/80 border border-transparent hover:border-slate-500/50"
        >
          <h3 className="text-xl font-bold text-white flex items-center mb-2">
            個人 Google 協作網頁
            <ExternalLink className="w-5 h-5 ml-2 text-slate-300 group-hover:translate-x-1 transition-transform" />
          </h3>
          <p className="text-slate-400">點擊前往查看我的 Google 協作平台</p>
        </a>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 學歷 */}
        <section className="glass-panel rounded-2xl p-8">
          <div className="flex items-center mb-6 text-sky-400">
            <GraduationCap className="w-6 h-6 mr-3" />
            <h3 className="text-2xl font-bold text-white">學歷</h3>
          </div>
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
            
            <div className="relative pl-8 md:pl-0">
              <div className="md:flex items-center justify-between md:flex-row-reverse">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-sky-900 border-2 border-slate-900 text-sky-400 absolute left-0 md:left-1/2 md:-translate-x-1/2 shadow"></div>
                <div className="md:w-1/2 md:pl-8 py-2 text-sky-300 text-sm font-medium">2022-09 ~ 現在</div>
                <div className="md:w-1/2 md:pr-8 py-2 md:text-right">
                  <h4 className="text-lg font-bold text-white">國立高雄科技大學 航運技術系</h4>
                  <p className="text-slate-400 mt-1">就學中</p>
                </div>
              </div>
            </div>

            <div className="relative pl-8 md:pl-0">
              <div className="md:flex items-center justify-between md:flex-row-reverse">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-800 border-2 border-slate-900 text-slate-400 absolute left-0 md:left-1/2 md:-translate-x-1/2 shadow"></div>
                <div className="md:w-1/2 md:pl-8 py-2 text-slate-400 text-sm font-medium">2019-09 ~ 2022-06</div>
                <div className="md:w-1/2 md:pr-8 py-2 md:text-right">
                  <h4 className="text-lg font-bold text-slate-200">正興國中</h4>
                </div>
              </div>
            </div>

            <div className="relative pl-8 md:pl-0">
              <div className="md:flex items-center justify-between md:flex-row-reverse">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-800 border-2 border-slate-900 text-slate-400 absolute left-0 md:left-1/2 md:-translate-x-1/2 shadow"></div>
                <div className="md:w-1/2 md:pl-8 py-2 text-slate-400 text-sm font-medium">2013-09 ~ 2019-06</div>
                <div className="md:w-1/2 md:pr-8 py-2 md:text-right">
                  <h4 className="text-lg font-bold text-slate-200">民族國小</h4>
                </div>
              </div>
            </div>

          </div>
        </section>

        <div className="space-y-8">
          {/* 工作/實習經歷 */}
          <section className="glass-panel rounded-2xl p-8">
            <div className="flex items-center mb-6 text-sky-400">
              <Briefcase className="w-6 h-6 mr-3" />
              <h3 className="text-2xl font-bold text-white">工作與實習經歷</h3>
            </div>
            <div className="space-y-4">
              <div className="accent-border pl-4">
                <div className="text-sm text-sky-400 font-semibold mb-1">2025 ~ 現在</div>
                <h4 className="text-lg font-bold text-white">御風輪實習</h4>
                <p className="text-slate-300 mt-1">船舶觀摩、航行間上課</p>
              </div>
              <div className="border-l-3 border-slate-700 pl-4 mt-6">
                <h4 className="text-lg font-bold text-white">理貨員</h4>
                <p className="text-slate-300 mt-1">整理貨物</p>
              </div>
            </div>
          </section>

          {/* 專業證照 */}
          <section className="glass-panel rounded-2xl p-8">
            <div className="flex items-center mb-6 text-sky-400">
              <Award className="w-6 h-6 mr-3" />
              <h3 className="text-2xl font-bold text-white">專業證照</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Anchor className="w-5 h-5 text-sky-500 mr-3 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-200 block">四小證</span>
                  <span className="text-slate-400 text-sm">基本安全、基礎滅火、救生艇筏、人員求生</span>
                </div>
              </li>
              <li className="flex items-start">
                <Award className="w-5 h-5 text-slate-500 mr-3 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-200 block">其他證照</span>
                  <span className="text-slate-400 text-sm">保全職責</span>
                </div>
              </li>
            </ul>
          </section>

          {/* 語言能力 */}
          <section className="glass-panel rounded-2xl p-8">
            <div className="flex items-center mb-6 text-sky-400">
              <Languages className="w-6 h-6 mr-3" />
              <h3 className="text-2xl font-bold text-white">語言能力</h3>
            </div>
            <div className="flex gap-4 flex-wrap">
              <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-sky-900/40 text-sky-300 border border-sky-800 font-medium">
                英文略懂 (TOEIC 470)
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700 font-medium">
                中文 (母語)
              </span>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
