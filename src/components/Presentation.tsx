import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Plane, Hotel, CheckCircle } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

import coverImg from '../assets/images/la_skyline_cover_1779615257912.png';
import santaMonicaImg from '../assets/images/santa_monica_sunset_1779615277590.png';
import santaBarbaraImg from '../assets/images/santa_barbara_coast_1779615293036.png';
import solvangImg from '../assets/images/solvang_village_1779615309229.png';
import diningImg from '../assets/images/luxury_fine_dining_1779615324336.png';
import rodeoDriveImg from '../assets/images/rodeo_drive_shopping_1779615338481.png';

const slides = [
  { id: 1, type: 'cover' },
  { id: 2, type: 'day1' },
  { id: 3, type: 'day2-3' },
  { id: 4, type: 'day4' },
  { id: 5, type: 'day5-6' },
  { id: 6, type: 'budget-intro' },
  { id: 7, type: 'budget-chart' },
  { id: 8, type: 'budget-table' },
  { id: 9, type: 'outro' },
];

const COLORS = ['#cd924a', '#1a202c', '#8a5a29', '#a0aec0', '#e2e8f0'];
const data = [
  { name: '奢華飯店住宿', value: 120000 },
  { name: '國際來回機票', value: 100000 },
  { name: '餐飲與頂級美饌', value: 45000 },
  { name: '門票保險與雜支', value: 20000 },
  { name: '專車接送與租車', value: 15000 },
];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1));
  };

  const slide = slides[currentSlide];

  return (
    <div className="w-full aspect-[16/9] bg-stone-50 rounded-xl overflow-hidden relative flex flex-col text-slate-800">
      <div className="flex-grow relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 w-full h-full flex flex-col"
          >
            {slide.type === 'cover' && (
              <div className="w-full h-full flex flex-col items-center justify-center text-center px-12 relative">
                <div className="absolute inset-0 bg-cover bg-center brightness-[0.4] scale-105" style={{ backgroundImage: `url(${coverImg})` }}></div>
                <div className="relative z-10 flex flex-col items-center">
                  <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-white drop-shadow-lg">洛杉磯奢華假期</h1>
                  <h2 className="text-xl md:text-2xl text-amber-400 mb-8 font-serif italic drop-shadow-md">2026 清明連假六天五夜 · 專屬尊榮行程</h2>
                  <div className="w-24 h-px bg-amber-400 mb-8 shadow-sm"></div>
                  <p className="text-lg md:text-xl text-slate-200 max-w-3xl leading-relaxed drop-shadow-md">
                    為您量身打造的極致品味之旅，融合加州陽光、絕美海岸、世界級米其林美饌與頂級住宿體驗，盡享無與倫比的度假時光。
                  </p>
                </div>
              </div>
            )}

            {slide.type === 'day1' && (
              <div className="w-full h-full p-12 flex flex-col">
                <h2 className="text-4xl font-black mb-12 tracking-tight text-slate-900 border-b pb-4">DAY 1 啟程與尊榮入住</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
                  <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 flex flex-col">
                    <div className="flex items-center mb-6 text-amber-600">
                      <Plane className="w-8 h-8 mr-4" />
                      <h3 className="text-2xl font-bold">抵達天使之城</h3>
                    </div>
                    <div className="font-bold text-slate-800 mb-4">4/2 (四) 10:00 - 15:00</div>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      抵達洛杉磯 LAX 機場。享受頂級專車接駁服務，免除交通繁瑣，直達飯店準備 Check-in。
                    </p>
                    <div className="mt-auto bg-slate-50 p-4 rounded-lg text-sm text-slate-600 border border-slate-100">
                      <span className="font-bold text-slate-800">行程備註：</span> 今日預計天氣晴朗，機場周邊車流正常，為完美的加州假期揭開順利序幕。
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 flex flex-col">
                    <div className="flex items-center mb-6 text-amber-600">
                      <Hotel className="w-8 h-8 mr-4" />
                      <h3 className="text-2xl font-bold">經典粉紅宮殿</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      入住好萊塢名流首選的 <span className="font-bold text-slate-800">The Beverly Hills Hotel</span>，體驗歷史悠久的優雅氛圍與無微不至的奢華服務。
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      於飯店內稍作歇息，享受精緻的午後時光，調整時差並迎接接下來豐富動人的加州旅程。
                    </p>
                  </div>
                </div>
              </div>
            )}

            {slide.type === 'day2-3' && (
              <div className="w-full h-full p-12 flex flex-col">
                <h2 className="text-4xl font-black mb-12 tracking-tight text-slate-900 border-b pb-4">DAY 2-3 海岸風光與絕美藝術</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex-grow">
                  <div className="flex flex-col justify-center space-y-6 text-lg">
                    <div className="flex items-start">
                      <div className="text-amber-500 mr-3 mt-1">✦</div>
                      <div>
                        <span className="font-bold text-slate-900">4/3 聖塔莫尼卡散步：</span> 下午前往碼頭漫步看夕陽，入住 Ritz-Carlton 五星度假村。<span className="text-slate-500 text-base">(註：週五聯外道路易塞，建議留於西岸；海風較大需保暖)</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-amber-500 mr-3 mt-1">✦</div>
                      <div>
                        <span className="font-bold text-slate-900">4/4 馬里布海岸：</span> 晨間沿海慢跑，隨後享用奢華悠閒的早午餐。
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-amber-500 mr-3 mt-1">✦</div>
                      <div>
                        <span className="font-bold text-slate-900">4/4 藝術與夜景：</span> 下午造訪 Getty Center (蓋蒂中心) 欣賞世界級建築與藝術館藏，傍晚至格里斐斯天文台俯瞰 LA 百萬夜景。
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-amber-500 mr-3 mt-1">✦</div>
                      <div>
                        <span className="font-bold text-slate-900">米其林極致晚宴：</span> 晚餐安排於 Nobu Malibu，體驗全球最美景觀餐廳的魅力。<span className="text-slate-500 text-base">(需提前 3 個月訂位)</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg h-full max-h-[400px] mt-auto mb-auto">
                    <img src={santaMonicaImg} alt="Santa Monica Pier" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            )}

            {slide.type === 'day4' && (
              <div className="w-full h-full p-12 flex flex-col">
                <h2 className="text-4xl font-black mb-8 tracking-tight text-slate-900">DAY 4 漫步美國里維埃拉</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex-grow">
                  <div className="flex flex-col justify-center text-lg">
                    <h3 className="text-3xl font-serif text-amber-600 mb-8">聖塔芭芭拉 (Santa Barbara)</h3>
                    <div className="space-y-8">
                      <div>
                        <span className="font-bold text-slate-900 block mb-2">自駕尋幽：</span> 
                        <span className="text-slate-600">4/5 早上出發，駕駛敞篷車行駛絕美 PCH1 號海岸公路前往聖塔芭芭拉，擁抱太平洋無敵海景。</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 block mb-2">避開人潮秘境：</span> 
                        <span className="text-slate-600">清明節當日洛杉磯華人區車道壅塞，聖塔芭芭拉氛圍慵懶、人流適中，為最佳避囂與放鬆選擇。</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 block mb-2">頂級身心放鬆：</span> 
                        <span className="text-slate-600">下午於 Bacara Resort (頂級海濱度假村) 享受專屬 Spa 療程，或至 State Street 悠閒購物，徹底洗滌身心。</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg h-full">
                    <img src={santaBarbaraImg} alt="Santa Barbara Coast" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            )}

            {slide.type === 'day5-6' && (
              <div className="w-full h-full p-12 flex flex-col">
                <h2 className="text-4xl font-black mb-12 tracking-tight text-slate-900 border-b pb-4">DAY 5-6 異國風情與極致品味</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 flex flex-col">
                    <img src={solvangImg} alt="Solvang" className="w-full h-48 object-cover" />
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Solvang 丹麥村</h3>
                      <div className="font-medium text-slate-700 mb-3 text-sm">4/6 (一) 上午：</div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        驅車前往感受獨特的北歐童話風情，品嘗丹麥糕點。回程特別避開 16:00 尖峰車流。
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 flex flex-col">
                    <img src={diningImg} alt="Spago" className="w-full h-48 object-cover" />
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Spago 極致饗宴</h3>
                      <div className="font-medium text-slate-700 mb-3 text-sm">4/6 (一) 晚間：</div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        晚餐精心安排比佛利山莊米其林經典名店 Spago，並入住頂級 Waldorf Astoria 飯店。
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 flex flex-col">
                    <img src={rodeoDriveImg} alt="Rodeo Drive" className="w-full h-48 object-cover" />
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Rodeo Drive 血拚</h3>
                      <div className="font-medium text-slate-700 mb-3 text-sm">4/7 (二) 上午：</div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        於精品名街進行最後採購。14:00 前往 LAX 辦理登機，滿載美好回憶結束旅程。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {slide.type === 'budget-intro' && (
              <div className="w-full h-full flex flex-col items-center justify-center text-center px-12">
                <h2 className="text-5xl md:text-6xl font-black mb-10 tracking-tight text-slate-900">專屬預算規劃</h2>
                <div className="w-24 h-1 bg-amber-500 mb-10"></div>
                <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
                  完美掌握三十萬預算配置，將資源挹注於最具價值的頂級奢華體驗，確保整趟旅程無懈可擊。
                </p>
              </div>
            )}

            {slide.type === 'budget-chart' && (
              <div className="w-full h-full p-12 flex flex-col">
                <h2 className="text-4xl font-black mb-8 tracking-tight text-slate-900 border-b pb-4">總預算分配估算 ($300,000 TWD)</h2>
                <div className="flex-grow flex flex-col lg:flex-row items-center justify-center">
                  <div className="w-full lg:w-1/2 h-[300px] lg:h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={data}
                          cx="50%"
                          cy="50%"
                          innerRadius={80}
                          outerRadius={140}
                          fill="#8884d8"
                          paddingAngle={2}
                          dataKey="value"
                        >
                          {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                    <ul className="space-y-4 text-lg">
                      {data.map((item, index) => (
                        <li key={item.name} className="flex items-center">
                          <span className="w-4 h-4 mr-4 inline-block rounded-sm" style={{ backgroundColor: COLORS[index % COLORS.length] }}></span>
                          <span className="text-slate-700">{item.name} ({Math.round(item.value / 300000 * 100)}%)</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="text-center text-slate-500 text-sm italic mt-8 max-w-4xl mx-auto border-t pt-4">
                  本行程策略性地將最高比例 (40%) 的預算投資於 Waldorf Astoria 與 Ritz-Carlton 等五星級奢華飯店，確保無與倫比的住宿與服務體驗。
                </div>
              </div>
            )}

            {slide.type === 'budget-table' && (
              <div className="w-full h-full p-12 flex flex-col">
                <h2 className="text-4xl font-black mb-8 tracking-tight text-slate-900 border-b pb-4">詳細費用預估</h2>
                <div className="flex-grow flex flex-col justify-center">
                  <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-900 text-white">
                          <th className="p-4 font-bold rounded-tl-xl">項目</th>
                          <th className="p-4 font-bold">估算費用 (TWD)</th>
                          <th className="p-4 font-bold rounded-tr-xl">細節說明</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-700 font-medium">
                        <tr className="border-b border-slate-100">
                          <td className="p-4">國際機票</td>
                          <td className="p-4 text-amber-700">$100,000</td>
                          <td className="p-4 text-sm text-slate-500 font-normal">2026 清明旺季之豪華經濟艙 / 限量早鳥商務艙</td>
                        </tr>
                        <tr className="border-b border-slate-100">
                          <td className="p-4">奢華飯店 (5晚)</td>
                          <td className="p-4 text-amber-700">$120,000</td>
                          <td className="p-4 text-sm text-slate-500 font-normal">平均一晚 $24,000，完整體驗加州各地區頂級住宿服務</td>
                        </tr>
                        <tr className="border-b border-slate-100 bg-slate-50/50">
                          <td className="p-4">餐飲美食</td>
                          <td className="p-4 text-amber-700">$45,000</td>
                          <td className="p-4 text-sm text-slate-500 font-normal">包含 2 頓米其林/高級景觀餐廳 (Nobu, Spago) 與日常精緻餐點</td>
                        </tr>
                        <tr className="border-b border-slate-100">
                          <td className="p-4">交通費用 (Uber)</td>
                          <td className="p-4 text-amber-700">$15,000</td>
                          <td className="p-4 text-sm text-slate-500 font-normal">海岸線租賃敞篷車或 SUV 自駕，市區搭配高級專車接送</td>
                        </tr>
                        <tr className="border-b border-slate-100 bg-slate-50/50">
                          <td className="p-4">門票與雜支</td>
                          <td className="p-4 text-amber-700">$20,000</td>
                          <td className="p-4 text-sm text-slate-500 font-normal">包含蓋蒂中心預約、購物雜項消費、頂級 Spa 以及高額旅遊保險</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr className="bg-amber-50 rounded-b-xl border-t-2 border-amber-200">
                          <td className="p-4 font-bold text-amber-900">專案總計</td>
                          <td className="p-4 font-bold justify-start text-amber-700 text-lg">$300,000</td>
                          <td className="p-4 text-sm text-amber-800 font-normal">精準掌握預算，打造不留遺憾的完美奢華假期</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {slide.type === 'outro' && (
              <div className="w-full h-full flex flex-col items-center justify-center text-center px-12 relative">
                <div className="absolute inset-0 bg-cover bg-center brightness-[0.4]" style={{ backgroundImage: `url(${coverImg})` }}></div>
                <div className="relative z-10">
                  <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-white drop-shadow-lg">期待您的完美旅程</h2>
                  <div className="w-24 h-1 bg-amber-500 mb-6 mx-auto"></div>
                  <p className="text-2xl text-slate-300 font-serif tracking-widest uppercase">
                    See You in Los Angeles
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 right-4 flex items-center space-x-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-slate-200 z-50">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-1 rounded-full hover:bg-slate-100 disabled:opacity-50 disabled:hover:bg-transparent transition-colors text-slate-800"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="text-sm font-medium text-slate-600 min-w-[3rem] text-center">
          {currentSlide + 1} / {slides.length}
        </div>
        <button 
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-1 rounded-full hover:bg-slate-100 disabled:opacity-50 disabled:hover:bg-transparent transition-colors text-slate-800"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
