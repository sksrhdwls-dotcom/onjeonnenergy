/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ShieldCheck, Leaf, Network, Linkedin, Youtube, Menu, X, ArrowRight } from 'lucide-react';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] fixed w-full top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-5 py-5 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3" onClick={closeMenu}>
          <img src="/KakaoTalk_20260818_093843080_01.png" alt="온전에너지 심볼" className="h-12 w-auto object-contain" />
          <div className="flex flex-col items-center justify-center text-[#0F3562]">
            <span className="text-xl md:text-[22px] font-bold leading-none tracking-wide">ONJEON ENERGY</span>
            <span className="text-sm md:text-[15px] font-bold leading-none tracking-[0.15em] mt-1.5">온전 에너지</span>
          </div>
        </a>
        
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-[30px] font-semibold text-[#222]">
          <li><a href="#about" className="hover:text-[#52B3D5] transition-colors">회사소개</a></li>
          <li><a href="#business" className="hover:text-[#52B3D5] transition-colors">사업 영역</a></li>
          <li><a href="#insights" className="hover:text-[#52B3D5] transition-colors">에너지 동향</a></li>
          <li><a href="#contact" className="hover:text-[#52B3D5] transition-colors">프로젝트 문의</a></li>
        </ul>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[#1B3D68]" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <ul className="flex flex-col px-5 py-4 gap-4 font-semibold text-[#222]">
            <li><a href="#about" className="block hover:text-[#52B3D5] transition-colors" onClick={closeMenu}>회사소개</a></li>
            <li><a href="#business" className="block hover:text-[#52B3D5] transition-colors" onClick={closeMenu}>사업 영역</a></li>
            <li><a href="#insights" className="block hover:text-[#52B3D5] transition-colors" onClick={closeMenu}>에너지 동향</a></li>
            <li><a href="#contact" className="block hover:text-[#52B3D5] transition-colors" onClick={closeMenu}>프로젝트 문의</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section 
      id="about" 
      className="relative text-white pt-[140px] pb-[100px] md:pt-[220px] md:pb-[160px] px-5 text-center flex flex-col items-center justify-center min-h-[70vh] md:min-h-[80vh]"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2940&auto=format&fit=crop")',
        }}
      />
      <div className="absolute inset-0 z-0 bg-[#112642]/70 mix-blend-multiply" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#112642]/80 via-transparent to-[#112642]/90" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold mb-4 md:mb-6 tracking-tight leading-tight text-white drop-shadow-lg">
          에너지를 더 온전하게
        </h1>
        <p className="text-lg md:text-2xl font-medium max-w-[800px] mx-auto mb-8 md:mb-12 text-[#E8EEF5] break-keep drop-shadow-md">
          단순한 설비를 넘어, 멈추지 않는 산업의 연속성을 설계합니다.
        </p>
        <a 
          href="#contact" 
          className="inline-block bg-[#52B3D5] text-white py-4 px-10 text-lg font-bold rounded hover:bg-[#409bb9] hover:-translate-y-0.5 hover:shadow-[0_15px_30px_rgba(82,179,213,0.4)] transition-all duration-300"
        >
          프로젝트 문의하기
        </a>
      </div>
    </section>
  );
}

function BrandStory() {
  return (
    <section id="about" className="py-[60px] md:py-[100px] px-5 max-w-[1200px] mx-auto">
      <div className="bg-white p-6 md:p-[60px] rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100">
        <h2 className="text-center text-3xl md:text-[2.2rem] font-extrabold text-[#1B3D68] mb-8 md:mb-10">Brand Story</h2>
        
        {/* Top Banner Image */}
        <div className="w-full h-[250px] md:h-[450px] rounded-2xl overflow-hidden mb-10 md:mb-16 shadow-sm relative group">
          <img src="/brand.png" alt="온전에너지 전경" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2s]" />
        </div>

        <div className="space-y-12 md:space-y-16 text-[#444] leading-relaxed break-keep max-w-[1000px] mx-auto mt-4">
          {/* Main Story */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-[#1B3D68] mb-4">단순한 설비를 넘어, 멈추지 않는 산업의 연속성을 설계합니다.</h3>
            <p className="text-lg md:text-xl">
              에너지 전환은 단순하게 발전원을 교체하는 일이 아닙니다. 산업과 도시가 전력 공급의 안정성을 확보하고, 나아가 비즈니스의 운영 연속성을 함께 설계하는 일입니다. 주식회사 온전 에너지는 청정에너지 공급, 저장, 계통 연계는 물론, 산업단지와 데이터센터 적용, 그리고 운영 안전성까지 하나의 시스템으로 통합하여 설계 및 운영하는 인프라 솔루션 기업입니다.
            </p>
          </div>

          {/* Name Meaning */}
          <div className="bg-[#F8F9FA] p-6 md:p-8 rounded-xl border border-gray-200 text-lg md:text-xl flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-extrabold text-[#1B3D68] mb-4 flex items-center gap-2">
              <span className="text-[#52B3D5]">ON-全</span> '온전'의 의미
            </h3>
            <p>
              우리의 이름 '온전'은 항상 전원이 켜져 있는 상태를 뜻하는 <strong className="text-[#1B3D68]">"ON"</strong>과 완전함을 뜻하는 <strong className="text-[#1B3D68]">"전(全)"</strong>의 합성어입니다.<br className="hidden md:block" />
              본래의 바탕이나 상태가 유지되어 결함이 없음을 뜻하는 우리말처럼, 멈추지 않는 시스템과 안정적인 인프라를 통해 고객의 운영 리스크를 줄이고 가장 '온전한' 에너지를 제공하겠습니다.
            </p>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 pt-8 border-t border-gray-100">
            {/* Mission */}
            <div className="bg-[#1B3D68] text-white p-6 md:p-8 rounded-xl">
              <div className="inline-block bg-white/10 text-[#52B3D5] font-bold tracking-widest text-sm py-1 px-3 rounded-full mb-4">MISSION</div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 leading-snug">
                "에너지와 인프라를 안정적으로 연결하고, 책임 있게 운영하여 지속가능한 에너지 환경을 만듭니다."
              </h3>
              <p className="text-white/80">
                우리는 공급 자체에 머무르지 않고 운영의 안정성, 기술의 신뢰성, 사업의 책임감을 함께 고려함으로써 고객과 사회가 믿고 의지할 수 있는 에너지 기반을 만듭니다.
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-[#52B3D5] text-white p-6 md:p-8 rounded-xl">
              <div className="inline-block bg-black/10 text-white font-bold tracking-widest text-sm py-1 px-3 rounded-full mb-4">VISION</div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 leading-snug">
                "에너지와 핵심 인프라의 새로운 기준을 제시하며, 산업의 지속가능한 성장과 사회의 안정적인 미래를 이끄는 신뢰받는 기업"
              </h3>
              <p className="text-white/90">
                재생에너지, 저장장치, 전력 인프라, 산업단지 및 데이터 기반 운영 역량을 유기적으로 연결하여 통합 에너지 인프라 기업으로 성장하겠습니다.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="pt-8">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#1B3D68] mb-8 text-center">Core Values</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-gray-200 rounded-xl hover:border-[#52B3D5] transition-colors">
                <div className="text-[#52B3D5] font-black text-xl mb-2">01. 신뢰 <span className="font-normal text-gray-400 text-sm ml-1">Trust</span></div>
                <p className="text-gray-600">
                  에너지와 인프라 산업은 작은 오류도 큰 영향을 미칠 수 있습니다. 우리는 말보다 실행, 과장보다 검증을 앞세워 일회성 성과보다 지속 가능한 신뢰를 더 중요하게 생각합니다.
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl hover:border-[#52B3D5] transition-colors">
                <div className="text-[#52B3D5] font-black text-xl mb-2">02. 전문성 <span className="font-normal text-gray-400 text-sm ml-1">Expertise</span></div>
                <p className="text-gray-600">
                  복잡한 에너지와 인프라 문제를 실행 가능한 해법으로 설계합니다. 기술, 운영, 공급, 정책, 그리고 시장 변화까지 종합적으로 이해하여 고객이 실제로 신뢰할 수 있는 수준의 솔루션을 제공합니다.
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl hover:border-[#52B3D5] transition-colors">
                <div className="text-[#52B3D5] font-black text-xl mb-2">03. 연결 <span className="font-normal text-gray-400 text-sm ml-1">Connection</span></div>
                <p className="text-gray-600">
                  우리는 에너지의 생산, 저장, 공급, 운영을 따로 떼어 보지 않고 하나의 시스템으로 연결하여 생각합니다. 기술과 산업, 기업과 사회, 현재의 과제와 미래의 전환을 유기적으로 잇습니다.
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl hover:border-[#52B3D5] transition-colors">
                <div className="text-[#52B3D5] font-black text-xl mb-2">04. 지속가능성 <span className="font-normal text-gray-400 text-sm ml-1">Sustainability</span></div>
                <p className="text-gray-600">
                  단순한 사업의 성장을 넘어, 산업과 사회에 더 건강한 기반을 남깁니다. 환경과 안전, 운영의 지속가능성을 함께 고려하여 더 오래 유지될 수 있는 튼튼한 구조를 만듭니다.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="business" className="py-[60px] md:py-[100px] px-5 max-w-[1200px] mx-auto">
      <h2 className="text-center text-3xl md:text-[2.2rem] font-extrabold text-[#1B3D68] mb-4">핵심 사업 영역</h2>
      <p className="text-center text-[#666666] mb-[40px] md:mb-[60px] text-lg font-medium">"설비를 판매하는 것이 아닌, 고객의 전력 리스크를 줄이는 인프라 구조화 회사가 되겠습니다."</p>
      
      <div className="space-y-12">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden hover:border-[#52B3D5]/50 transition-colors duration-300 flex flex-col group">
          <div className="h-[200px] md:h-[300px] w-full overflow-hidden">
            <img src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=800" alt="재난안전 예측·예방" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          </div>
          <div className="p-8 md:p-10 border-b border-gray-100 bg-gradient-to-r from-[#F8F9FA] to-white">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
              <div className="bg-[#1B3D68] w-14 h-14 rounded-xl flex items-center justify-center shrink-0">
                <ShieldCheck className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#1B3D68] break-keep">1. 재난안전 예측·예방 및 데이터센터</h3>
            </div>
            <p className="text-lg md:text-xl font-bold text-[#333] mb-3 break-keep">
              "무중단이 필수적인 데이터센터 운영을 위해 재해 위험을 선제적으로 감지하고 방어하는 고신뢰성 인프라를 구축합니다."
            </p>
            <p className="text-[#666] text-base md:text-lg break-keep">
              에너지 사업을 단순한 발전원의 개념이 아닌 '운영 연속성'의 관점으로 바라보고 흔들림 없는 기반을 제공합니다.
            </p>
          </div>
          <div className="p-6 md:p-10">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="relative pl-4 border-l-2 border-[#52B3D5]/30">
                <h4 className="text-[1.1rem] font-bold text-[#1B3D68] mb-3 break-keep">이중화 데이터센터 구축</h4>
                <p className="text-gray-600 leading-relaxed break-keep">주센터와 DR(재해복구)·백업센터를 물리적으로 분리하여 장애나 재해 발생 시에도 핵심 업무와 서비스의 연속성을 보장합니다.</p>
              </div>
              <div className="relative pl-4 border-l-2 border-[#52B3D5]/30">
                <h4 className="text-[1.1rem] font-bold text-[#1B3D68] mb-3 break-keep">통합 데이터 허브 및 클라우드</h4>
                <p className="text-gray-600 leading-relaxed break-keep">공공 업무, 연구, 산업 데이터를 안전하게 저장하고 보호하는 맞춤형 클라우드 인프라를 제공합니다.</p>
              </div>
              <div className="relative pl-4 border-l-2 border-[#52B3D5]/30">
                <h4 className="text-[1.1rem] font-bold text-[#1B3D68] mb-3 break-keep">AI 기반 통합관제 시스템</h4>
                <p className="text-gray-600 leading-relaxed break-keep">시설 상태, 재해 위험 등을 실시간으로 관제하고 AI 분석을 통해 수요 예측 및 재해 대응 의사결정을 지원합니다.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden hover:border-[#52B3D5]/50 transition-colors duration-300 flex flex-col group">
          <div className="h-[200px] md:h-[300px] w-full overflow-hidden">
            <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800" alt="청정에너지 공급" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          </div>
          <div className="p-6 md:p-10 border-b border-gray-100 bg-gradient-to-r from-[#F8F9FA] to-white">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 md:mb-6">
              <div className="bg-[#1B3D68] w-14 h-14 rounded-xl flex items-center justify-center shrink-0">
                <Leaf className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#1B3D68] break-keep">2. 청정에너지 공급 및 RE100 산업단지</h3>
            </div>
            <p className="text-lg md:text-xl font-bold text-[#333] mb-3 break-keep">
              "태양광, 풍력, SMR 등 맞춤형 친환경 에너지 믹스를 통해 개발주체의 RE100 달성과 지속 가능한 산업단지 조성을 지원합니다."
            </p>
            <p className="text-[#666] text-base md:text-lg break-keep">
              청정에너지 공급부터 안정적인 인프라 운영까지 묶어 통합적인 솔루션을 제시합니다.
            </p>
          </div>
          <div className="p-6 md:p-10">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="relative pl-4 border-l-2 border-[#52B3D5]/30">
                <h4 className="text-[1.1rem] font-bold text-[#1B3D68] mb-3 break-keep">재생에너지·분산에너지 통합운영</h4>
                <p className="text-gray-600 leading-relaxed break-keep">육상·수상 태양광 및 해상풍력을 아우르는 4GW 규모의 복합 발전단지를 조성하고 ESS, EMS와 결합하여 전력을 안정적으로 공급합니다.</p>
              </div>
              <div className="relative pl-4 border-l-2 border-[#52B3D5]/30">
                <h4 className="text-[1.1rem] font-bold text-[#1B3D68] mb-3 break-keep">글로벌 재생에너지 제조 캠퍼스</h4>
                <p className="text-gray-600 leading-relaxed break-keep">태양광 모듈, 산업용 ESS, 전력기기(PCS, 인버터 등)의 생산 및 조립 라인을 구축하여 품질 경쟁력을 높이고 글로벌 수출 기반을 마련합니다.</p>
              </div>
              <div className="relative pl-4 border-l-2 border-[#52B3D5]/30">
                <h4 className="text-[1.1rem] font-bold text-[#1B3D68] mb-3 break-keep">실효성 있는 RE100 이행 지원</h4>
                <p className="text-gray-600 leading-relaxed break-keep">계통 판매, 직접/제3자 PPA, 자가 소비 등을 수요에 맞게 조합하여 기업의 실질적인 RE100 이행 및 탄소 감축을 돕습니다.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden hover:border-[#52B3D5]/50 transition-colors duration-300 flex flex-col group">
          <div className="h-[200px] md:h-[300px] w-full overflow-hidden">
            <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" alt="통합 구조 설계" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          </div>
          <div className="p-6 md:p-10 border-b border-gray-100 bg-gradient-to-r from-[#F8F9FA] to-white">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 md:mb-6">
              <div className="bg-[#1B3D68] w-14 h-14 rounded-xl flex items-center justify-center shrink-0">
                <Network className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#1B3D68] break-keep">3. 통합 구조 설계 및 운영 연계 솔루션</h3>
            </div>
            <p className="text-lg md:text-xl font-bold text-[#333] mb-3 break-keep">
              "각종 설비와 시스템을 단일망으로 연계하여 장기적인 리스크를 낮추고 운영 효율성을 극대화하는 맞춤형 통합 설계를 제공합니다."
            </p>
            <p className="text-[#666] text-base md:text-lg break-keep">
              설비 단위의 접근을 넘어 산업단지, 공공 인프라, 데이터센터의 공통된 문제를 해결하는 전체 구조를 설계합니다.
            </p>
          </div>
          <div className="p-6 md:p-10">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="relative pl-4 border-l-2 border-[#52B3D5]/30">
                <h4 className="text-[1.1rem] font-bold text-[#1B3D68] mb-3 break-keep">산업별 맞춤형 통합 설계 파트너</h4>
                <p className="text-gray-600 leading-relaxed break-keep">공공기관(정책 정합성 및 안전), 산업단지(RE100 대응 및 전력 확보), 데이터센터(전력 안정성 및 확장성) 등 고객의 특성과 니즈에 맞춘 인프라를 설계합니다.</p>
              </div>
              <div className="relative pl-4 border-l-2 border-[#52B3D5]/30">
                <h4 className="text-[1.1rem] font-bold text-[#1B3D68] mb-3 break-keep">국제 재생에너지 산업협력 플랫폼 운영</h4>
                <p className="text-gray-600 leading-relaxed break-keep">외국 기업의 한국 진출(법인 설립, 입주 지원) 및 국내 기업의 해외 프로젝트 진출을 돕고, 국제 공동 실증 및 비즈니스를 원스톱으로 지원합니다.</p>
              </div>
              <div className="relative pl-4 border-l-2 border-[#52B3D5]/30">
                <h4 className="text-[1.1rem] font-bold text-[#1B3D68] mb-3 break-keep">정주 및 비즈니스 지원 복합센터 조성</h4>
                <p className="text-gray-600 leading-relaxed break-keep">산업단지 내 임직원을 위한 기숙사, 장기 체류형 숙박, 편의 시설을 제공하고 신공항 연관 산업의 원활한 업무를 지원하여 안정적인 비즈니스 환경을 완성합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Insights() {
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  const articles = [
    {
      category: "RE100 및 기업 에너지 전환 전략",
      title: "단순 선언을 넘어선 실질적 RE100: K-RE100 이행 수단 완벽 가이드",
      desc: "녹색프리미엄, REC 구매, 제3자/직접 PPA 등 다양한 이행 수단을 분석하고, 입주 기업별 상황에 맞는 최적의 RE100 조달 구조를 설계하는 방법론을 제시합니다.",
      content: "글로벌 고객사의 재생에너지 사용 및 제품 탄소 정보 요구가 지속적으로 확대되고 있습니다. 이제 RE100은 단순한 친환경 선언을 넘어 기업의 글로벌 공급망 진입을 위한 필수 생존 요건이 되었습니다.\n\n현재 국내에서 활용 가능한 K-RE100 이행 수단으로는 녹색프리미엄, REC(신재생에너지 공급인증서) 구매, 제3자 PPA(전력구매계약), 직접 PPA, 그리고 자가소비 방식이 있습니다. 각 기업은 전력 사용량, 부지 여건, 장기적인 탄소 감축 목표에 따라 최적의 수단을 조합해야 합니다.\n\n온전 에너지는 기업의 단순한 이행 수단 선택을 넘어, 실질적이고 경제적인 RE100 달성을 위한 맞춤형 통합 솔루션을 제공합니다. 예를 들어, 대규모 전력이 필요한 제조 공장의 경우 전략사업의 장기 PPA를 중심으로 하되, 지붕 및 주차장을 활용한 자가소비와 REC 보완을 결합하는 권장 조합을 제안합니다. 에너지 생산부터 소비, 운영, 검증까지 이어지는 온전 에너지의 '통합 구조 설계'를 통해 기업의 RE100 대응 리스크를 근본적으로 해결할 수 있습니다."
    },
    {
      category: "RE100 및 기업 에너지 전환 전략",
      title: "글로벌 공급망 재편과 탄소 규제, RE100 대응형 산업단지가 각광받는 이유",
      desc: "글로벌 고객사의 재생에너지 요구가 확대되는 시장 속에서, 개별 기업이 아닌 산업단지 차원의 통합 에너지 연계가 왜 중요한지 분석합니다.",
      content: "글로벌 에너지 및 제조 산업은 탄소 규제 강화, 공급망 재편, 재생에너지 조달 요구 증대 등으로 빠르게 변화하고 있습니다. 특히 글로벌 고객사들이 제품의 탄소 정보와 재생에너지 사용을 엄격하게 요구하면서, 개별 기업 단위의 RE100 대응은 점차 한계에 부딪히고 있습니다.\n\n이에 따라, 청정에너지 공급과 저장, 그리고 운영 구조를 하나로 묶은 'RE100 대응형 산업단지' 모델이 새로운 해법으로 각광받고 있습니다. 온전 에너지는 막연한 친환경 선언을 넘어, 이를 실제 산업 현장의 운영 구조로 완벽히 재구성합니다.\n\n새만금 사업단지 전역의 4GW 재생에너지 발전원과 ESS, 그리고 통합 관제 시스템을 산업단지 내 제조 공장 및 데이터센터의 실수요와 직접 연결합니다. 이를 통해 입주 기업은 전력비용 절감과 탄소 배출 감소, 그리고 흔들림 없는 공급 안정성을 한 번에 통합 관리받을 수 있는 혁신적인 인프라를 누리게 됩니다."
    },
    {
      category: "무중단 데이터센터와 전력 인프라",
      title: "AI 시대의 데이터센터, '전력 안정성'과 '무중단 운영(DR)'이 생존을 가른다",
      desc: "재해 위험을 선제적으로 감지하는 고신뢰 인프라의 필요성과 주센터 및 DR·백업센터를 물리적으로 분리하는 이중화 데이터센터의 중요성을 다룹니다.",
      content: "AI와 클라우드 서비스의 폭발적인 확산에 따라 고신뢰 데이터센터와 안정적 전력 확보에 대한 수요가 급증하고 있습니다. 막대한 전력을 소모하는 데이터센터 산업에 있어 '전력의 안정성'과 재해 상황에서의 '무중단 운영'은 비즈니스의 존폐를 결정짓는 핵심 요소입니다.\n\n이러한 리스크를 최소화하기 위해서는 무중단이 필수적인 데이터센터 운영을 위해 재해 위험을 선제적으로 감지하고 방어하는 고신뢰성 인프라 구축이 선행되어야 합니다. 특히, 자연재해나 시스템 장애 발생 시에도 핵심 업무와 공공 서비스의 연속성을 확보하기 위해서는 주센터와 DR(재해복구)·백업센터를 물리적으로 분리하는 이중화 설계가 필수적입니다.\n\n온전 에너지는 데이터센터 사업자가 직면한 전력 안정성, 백업, 확장성, 계통 연결의 문제를 해결하기 위해 저장, 유연성, 백업 전력을 통합적으로 고려한 인프라를 설계합니다. 새만금에서 추진 중인 농어촌 특화 이중화 데이터센터 캠퍼스 모델처럼, 재생에너지 단지와 연계된 안전하고 지속 가능한 데이터 인프라의 새로운 기준을 제시하겠습니다."
    },
    {
      category: "무중단 데이터센터와 전력 인프라",
      title: "전력 먹는 하마 데이터센터? 재생에너지와 고효율 냉각으로 구현하는 저탄소 인프라",
      desc: "데이터센터 사업자들이 고민하는 막대한 전력비와 탄소배출 문제를 재생에너지 연계와 에너지관리시스템(EMS)을 통해 어떻게 절감할 수 있는지 소개합니다.",
      content: "AI와 클라우드 서비스의 급격한 확산으로 인해 데이터센터의 안정적인 전력 수요가 폭발적으로 증가하고 있습니다. 이른바 '전력 먹는 하마'로 불리는 데이터센터 산업에 있어 탄소 배출 저감과 에너지 효율화는 이제 피할 수 없는 핵심 과제입니다.\n\n온전 에너지는 재생에너지와 ESS를 적극적으로 활용하여 저탄소 데이터 인프라의 실증과 구축에 앞장섭니다. 막대한 전력 소비로 인한 부담을 줄이기 위해 안정적인 재생에너지 전력을 직접 조달하는 한편, 고효율 냉각 기술과 첨단 에너지관리시스템(EMS)을 적용하여 전력비와 탄소 배출을 단계적으로 절감해 나갑니다.\n\n단순한 전력 공급을 넘어서 저장 장치, 전력 유연성, 그리고 백업 전력까지 종합적으로 고려한 온전 에너지의 맞춤형 인프라 설계는, 데이터센터의 지속 가능한 장기 운영을 위한 가장 완벽한 해법을 제시합니다."
    },
    {
      category: "글로벌 재생에너지 동향",
      title: "새만금, 4GW 재생에너지 품고 글로벌 미래에너지 거점으로 도약한다",
      desc: "육상/수상 태양광 및 해상풍력이 결합된 새만금의 대규모 복합 발전 포트폴리오의 비전을 소개하고, 분산형 에너지 시스템의 미래를 전망합니다.",
      content: "글로벌 에너지 패러다임이 빠르게 전환되는 가운데, 새만금이 대한민국을 넘어선 글로벌 미래에너지 산업 거점으로 주목받고 있습니다. 광역 육상, 수면, 해상 공간을 고루 갖춘 새만금은 대규모 청정 전력 생산과 첨단 산업 수요를 연계할 수 있는 전략적 입지를 자랑합니다.\n\n새만금 사업단지는 육상 태양광 1.0GW, 수상 태양광 0.2GW, 해상풍력 2.8GW를 포함하여 총 4.0GW 규모의 복합 발전 포트폴리오를 단계적으로 구축할 계획입니다. 이는 단순히 발전 규모를 늘리는 것을 넘어섭니다. 청정 전력 생산, 제조, 데이터센터, 국제협력, 정주 및 공항 지원 기능을 하나의 거대한 가치사슬로 연결하는 원대한 비전의 시작입니다.\n\n이러한 대규모 발전 단지는 ESS(에너지저장장치) 및 통합 관제 시스템과 결합하여, 산업단지 내 제조 공장과 데이터센터의 전력비, 탄소 배출, 공급 안정성을 통합 관리하는 데 기여하게 됩니다. 온전 에너지는 이 거대한 생태계 안에서 발전과 운영의 연속성을 책임지는 통합 플랫폼 역할을 수행하며 지속 가능한 성장을 이끌겠습니다."
    },
    {
      category: "글로벌 재생에너지 동향",
      title: "태양광 모듈부터 ESS까지, 글로벌 재생에너지 공급망 다변화와 국산화의 과제",
      desc: "핵심 전력 기기의 국산화 필요성을 강조하고, 기술 협력을 통해 품질과 원가 경쟁력을 높여 글로벌 수출 기반을 다지는 전략을 분석합니다.",
      content: "최근 글로벌 에너지 시장은 태양광 모듈, ESS(에너지저장장치), 전력변환장치 등 핵심 설비의 공급망 다변화와 현지 생산 수요가 그 어느 때보다 확대되고 있습니다. 안정적인 에너지 전환을 위해서는 발전 설비의 대외 의존도를 낮추고 튼튼한 자국 내 공급망을 갖추는 것이 필수적입니다.\n\n이를 위해 국내 태양광 모듈과 ESS 관련 제품의 생산 기술, 원가, 품질 경쟁력을 높이는 산업 육성이 시급합니다. 온전 에너지는 새만금 국가산업단지 내에 대규모 '통합 제조 캠퍼스'를 조성하여 태양광 모듈, 산업용 전력용 ESS 조립, 배터리 팩, PCS·인버터 등 핵심 제품의 생산, 시험, 인증 시설을 구축할 계획입니다.\n\n이러한 제조 역량 내재화는 국내 프로젝트에 고품질의 국산 제품을 안정적으로 공급하는 것은 물론, 해외 기술 협력과 공동 생산을 통해 글로벌 시장으로 진출하는 강력한 수출 기반이 될 것입니다. 온전 에너지는 에너지 인프라 설계뿐만 아니라, 그 근간이 되는 하드웨어 생태계 구축에도 앞장서겠습니다."
    },
    {
      category: "온전 에너지 소식",
      title: "[MOU/행사] 온전 에너지, 장쑤성·옌청시 대표단과 국제 재생에너지 산업 협력 방안 논의",
      desc: "신에너지 및 배터리 분야에서 중국 장쑤성, 옌청시 등과의 상호 진출 및 공동 실증 논의 등 활발한 글로벌 비즈니스 교류 현황을 공유합니다.",
      content: "온전 에너지는 글로벌 재생에너지 협력망 확장을 위해 중국 장쑤성 및 옌청시와 긴밀한 산업 협력 논의를 진행하고 있습니다. 장쑤성은 한국 기업의 주요 투자 및 공급망 거점 역할을 하고 있으며, 특히 옌청시는 자동차와 배터리 산업을 중심으로 다수의 한국 기업이 진출해 있는 중한 산업협력 플랫폼을 성공적으로 운영하고 있습니다.\n\n온전 에너지는 장쑤성 부성장 및 옌청시 당서기 측과의 협의를 통해 '국제 재생에너지·RE100 산업협력 플랫폼' 구축을 위한 구체적인 실행 방안을 모색합니다. 주요 협력 의제로는 옌청 및 장쑤 소재 재생에너지 기업의 한국 투자 유치, 양국 기업의 상호 진출 지원, 태양광 및 ESS 기반 마이크로그리드 기술의 공동 실증이 포함됩니다.\n\n더 나아가 한국의 뛰어난 생산·품질 관리 역량과 중국의 강력한 공급망을 결합하여, 동남아, 중동 등 제3국 공동 프로젝트 진출을 위한 교두보를 마련할 계획입니다. 온전 에너지는 특정 국가에 국한되지 않는 열린 국제 협력 플랫폼을 통해 글로벌 비즈니스 경쟁력을 강화해 나가겠습니다."
    },
    {
      category: "온전 에너지 소식",
      title: "[프로젝트 현황] 온전 에너지, 새만금 농어촌 특화 데이터센터 구축 사업 타당성 검토 착수",
      desc: "농업용수, 재해 정보 등 공공 데이터를 안전하게 다루는 고신뢰 인프라 구축 프로젝트의 의미와 진행 상황을 알립니다.",
      content: "주식회사 온전 에너지는 새만금 국가산업단지 내에 고신뢰 공공 인프라를 마련하기 위해, '농림축산식품부 데이터센터' 사업 구상 및 타당성 검토에 본격적으로 착수했습니다. 본 프로젝트는 농림축산식품부, 한국농어촌공사, 새만금개발청 등 주요 관계 기관과의 긴밀한 협력을 바탕으로 추진될 예정입니다.\n\n새롭게 구축될 이중화 데이터센터 캠퍼스는 농업용수, 저수지, 수리 시설, 농지, 기후 및 재해 정보, 스마트팜 데이터 등을 한곳에 안전하게 통합하는 핵심 인프라 역할을 수행하게 됩니다.\n\n더 나아가 AI 기반의 분석 기능을 통해 시설의 상태와 재해 위험을 실시간으로 관제하고, 정비 수요 예측 및 즉각적인 재해 대응 의사결정을 지원합니다. 온전 에너지는 이를 통해 공공 서비스의 완벽한 업무 연속성을 보장하고, 대한민국 농어촌의 성공적인 디지털 전환(DX)을 든든하게 뒷받침하겠습니다."
    }
  ];

  return (
    <section id="insights" className="py-[60px] md:py-[100px] px-5 max-w-[1200px] mx-auto relative">
      <div className="text-center mb-[40px] md:mb-[60px]">
        <h2 className="text-3xl md:text-[2.2rem] font-extrabold text-[#1B3D68] mb-4">에너지 동향 및 소식</h2>
        <p className="text-[#666666] text-lg font-medium">온전에너지의 시각으로 바라본 글로벌 에너지 트렌드와 프로젝트 현황을 전해드립니다.</p>
      </div>

      <div className="w-full h-[250px] md:h-[400px] rounded-2xl overflow-hidden mb-12 shadow-sm relative group">
        <img src="/energy.png" alt="에너지 동향" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, idx) => (
          <button 
            key={idx} 
            onClick={() => setSelectedArticle(article)}
            className="flex flex-col text-left bg-white p-6 md:p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:border-[#52B3D5]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 group"
          >
            <div className="inline-block self-start px-3 py-1.5 bg-[#F0F5FA] text-[#1B3D68] text-sm font-bold rounded mb-5">{article.category}</div>
            <h3 className="text-[1.3rem] font-bold text-[#222] mb-4 leading-snug group-hover:text-[#52B3D5] transition-colors break-keep">{article.title}</h3>
            <p className="text-gray-500 text-base leading-relaxed break-keep flex-1">{article.desc}</p>
            <div className="mt-6 flex items-center text-[#52B3D5] font-bold text-sm">
              본문 읽기 <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        ))}
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedArticle(null)}></div>
          <div className="relative bg-white w-full max-w-[800px] max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="inline-block px-3 py-1 bg-[#F0F5FA] text-[#1B3D68] text-sm font-bold rounded">{selectedArticle.category}</div>
              <button 
                onClick={() => setSelectedArticle(null)}
                className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Modal Body */}
            <div className="p-6 sm:p-10 overflow-y-auto">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3D68] mb-6 leading-snug break-keep">
                {selectedArticle.title}
              </h2>
              <div className="w-12 h-1 bg-[#52B3D5] mb-8"></div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed break-keep">
                <p className="text-xl text-[#1B3D68] font-bold mb-8 pb-8 border-b border-gray-100">
                  {selectedArticle.desc}
                </p>
                <div className="text-[1.1rem]">
                  {selectedArticle.content.split('\n\n').map((paragraph: string, i: number) => (
                    <p key={i} className="mb-6">{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative bg-[#1B3D68] text-white py-[100px] px-5 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=2000" alt="Contact Background" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B3D68]/80 to-[#1B3D68]"></div>
      </div>

      <div className="max-w-[800px] mx-auto relative z-10">
        <h2 className="text-center text-3xl md:text-[2.2rem] font-extrabold mb-4 text-white">성공적인 인프라 구축의 시작</h2>
        <p className="text-center text-[#D1D9E6] mb-[60px] text-lg">공공기관, 지자체, 산업단지 및 데이터센터 사업자 여러분의 문의를 기다립니다.</p>
        
        <form className="bg-white p-8 md:p-10 rounded-lg shadow-[0_20px_40px_rgba(0,0,0,0.2)] text-left" onSubmit={(e) => e.preventDefault()}>
          <div className="mb-5">
            <label htmlFor="company" className="block text-[#1B3D68] font-bold mb-2">기관/기업명</label>
            <input type="text" id="company" className="w-full p-3.5 border border-gray-300 rounded text-base text-black focus:outline-none focus:border-[#52B3D5] focus:ring-2 focus:ring-[#52B3D5]/30 font-sans" placeholder="소속을 입력해주세요." required />
          </div>
          <div className="mb-5">
            <label htmlFor="name" className="block text-[#1B3D68] font-bold mb-2">담당자 성함</label>
            <input type="text" id="name" className="w-full p-3.5 border border-gray-300 rounded text-base text-black focus:outline-none focus:border-[#52B3D5] focus:ring-2 focus:ring-[#52B3D5]/30 font-sans" placeholder="성함을 입력해주세요." required />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block text-[#1B3D68] font-bold mb-2">이메일 주소</label>
            <input type="email" id="email" className="w-full p-3.5 border border-gray-300 rounded text-base text-black focus:outline-none focus:border-[#52B3D5] focus:ring-2 focus:ring-[#52B3D5]/30 font-sans" placeholder="회신 받으실 이메일을 입력해주세요." required />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-[#1B3D68] font-bold mb-2">문의 내용</label>
            <textarea id="message" rows={5} className="w-full p-3.5 border border-gray-300 rounded text-base text-black focus:outline-none focus:border-[#52B3D5] focus:ring-2 focus:ring-[#52B3D5]/30 font-sans resize-y" placeholder="진행 중인 프로젝트나 필요하신 솔루션에 대해 자세히 적어주시면 더 정확한 답변이 가능합니다." required></textarea>
          </div>
          <button type="submit" className="w-full bg-[#52B3D5] text-white py-4 px-6 text-lg font-bold rounded hover:bg-[#409bb9] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg shadow-[#52B3D5]/30">
            문의 제출하기
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-[#666] py-10 px-5 text-center">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        <div className="flex items-center gap-3">
          <img src="/KakaoTalk_20260818_093843080_01.png" alt="온전에너지 심볼" className="h-10 w-auto object-contain" />
          <div className="flex flex-col items-center justify-center text-[#0F3562]">
            <span className="text-lg md:text-xl font-bold leading-none tracking-wide">ONJEON ENERGY</span>
            <span className="text-xs md:text-sm font-bold leading-none tracking-[0.15em] mt-1">온전 에너지</span>
          </div>
        </div>
        <div className="text-sm text-center md:text-right space-y-2 font-medium">
          <p>서울 영등포구 양평로 21가길 19, B동 310호</p>
          <p>Email: <a href="mailto:onjeonenergy@gmail.com" className="hover:text-[#52B3D5] transition-colors">onjeonenergy@gmail.com</a></p>
          <p className="pt-2 text-gray-400 font-normal">&copy; 2026 온전 에너지. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#222222] font-sans selection:bg-[#52B3D5] selection:text-white">
      <Header />
      <main>
        <Hero />
        <BrandStory />
        <Services />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
