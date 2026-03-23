import { useMemo, useState } from 'react';
import './styles.css';

const translations = {
  en: {
    brand: 'Sprintz Holdings',
    navAbout: 'About',
    navSectors: 'Sectors',
    navMarkets: 'Markets',
    navContact: 'Contact',
    badge: 'Singapore-Based International Trading Corporation',
    heroTitle: 'Global Trade. Structured Supply. Professional Execution.',
    heroText:
      'Sprintz Holdings Pte. Ltd. supports international business across commodities, energy, industrial automation, aviation, medical supply, and strategic procurement.',
    primaryCta: 'Request a Quote',
    secondaryCta: 'Explore Capabilities',
    strengthTitle: 'Why global partners engage Sprintz',
    strengths: [
      'Singapore-based international trade platform',
      'Cross-border sourcing and supplier coordination',
      'Professional commercial documentation support',
      'Coverage across commodities, fuel, metals, medical and industrial equipment',
      'Responsive handling for regional buyers and partners',
      'Clear enquiry and quote workflow',
    ],
    stats: [
      ['Positioning', 'International Trading'],
      ['Focus', 'Supply & Procurement'],
      ['Approach', 'Commercial Reliability'],
    ],
    aboutTitle: 'A broader corporate profile for serious cross-border business.',
    aboutText1:
      'Sprintz is positioned as a polished Singapore-headquartered trading company with capabilities spanning commodity supply, energy products, industrial equipment, aviation, and medical procurement.',
    aboutText2:
      'The emphasis is on trust, structured execution, professional responsiveness, and readiness for regional and international counterparties.',
    sectorsTitle: 'Core business sectors',
    sectors: [
      ['ICUMSA 45 Sugar', 'Refined sugar supply for international contract and spot discussions.'],
      ['Agricultural Commodities', 'Non-GMO soya beans, yellow corn for animal feed, chicken paws, and related trade flows.'],
      ['Metals & Minerals', 'Iron ore fines, copper cathodes, nickel, aluminium ingots, lithium, gold, scrap metals, and coal.'],
      ['Energy Products', 'EN590, LNG, LPG, light cycle oil, and light crude oil supply discussions.'],
      ['Industrial Automation', 'Industrial electrical and automation product sourcing including Siemens and Allen-Bradley / Rockwell enquiries.'],
      ['Aviation & Medical Supply', 'Aviation equipment, medical equipment, consumables, and project procurement support.'],
    ],
    marketsTitle: 'Built for regional and international counterparties.',
    markets: ['Singapore', 'China', 'Middle East', 'Southeast Asia', 'South Asia'],
    contactTitle: 'Start a business enquiry.',
    contactText:
      'Submit your requirement directly through the website. Our team will review and respond to qualified enquiries.',
    officeTitle: 'Registered Office',
    officeAddress: '22 Sin Ming Lane, #06-76, Midview City, Singapore 573969',
    name: 'Full Name',
    company: 'Company',
    email: 'Business Email',
    subject: 'Subject',
    message: 'Tell us about your requirement',
    submit: 'Submit Enquiry',
    submitting: 'Submitting...',
    whatsapp: 'WhatsApp Us',
    success: 'Thank you. Your enquiry has been submitted successfully.',
    error: 'Unable to submit enquiry. Please try again.',
    required: 'Please fill in all required fields.',
    footer: 'Sprintz Holdings Pte. Ltd. — International trade, procurement, and supply coordination.',
    whatsappFloat: 'Chat on WhatsApp',
  },
  zh: {
    brand: 'Sprintz Holdings',
    navAbout: '关于我们',
    navSectors: '业务领域',
    navMarkets: '市场',
    navContact: '联系',
    badge: '新加坡国际贸易企业',
    heroTitle: '全球贸易。系统供应。专业执行。',
    heroText:
      'Sprintz Holdings Pte. Ltd. 专注于大宗商品、能源、工业自动化、航空、医疗供应及战略采购的国际业务。',
    primaryCta: '询价',
    secondaryCta: '查看业务能力',
    strengthTitle: '全球合作伙伴选择 Sprintz 的原因',
    strengths: [
      '立足新加坡的国际贸易平台',
      '跨境采购与供应商协调',
      '专业商务文件支持',
      '覆盖大宗商品、燃料、金属、医疗及工业设备',
      '快速响应区域买家与合作伙伴',
      '清晰的询价与报价流程',
    ],
    stats: [
      ['定位', '国际贸易'],
      ['重点', '供应与采购'],
      ['方式', '商业可靠性'],
    ],
    aboutTitle: '为严肃跨境业务打造更全面的企业形象。',
    aboutText1:
      'Sprintz 被定位为一家总部位于新加坡的专业贸易公司，业务涵盖大宗商品供应、能源产品、工业设备、航空及医疗采购。',
    aboutText2:
      '网站重点强调信誉、系统执行、专业响应以及面对区域和国际交易对手的业务准备度。',
    sectorsTitle: '核心业务领域',
    sectors: [
      ['ICUMSA 45 白糖', '用于国际合约及现货讨论的精制糖供应。'],
      ['农产品', '非转基因食用大豆、饲料黄玉米、鸡爪及相关贸易。'],
      ['金属与矿产', '铁矿粉、阴极铜、镍、铝锭、锂、黄金、废金属及煤炭。'],
      ['能源产品', 'EN590、LNG、LPG、轻循环油及轻质原油。'],
      ['工业自动化', '工业电气与自动化产品采购，包括 Siemens 和 Allen-Bradley / Rockwell 相关需求。'],
      ['航空与医疗供应', '航空设备、医疗设备、耗材及项目采购支持。'],
    ],
    marketsTitle: '服务区域及国际合作伙伴。',
    markets: ['新加坡', '中国', '中东', '东南亚', '南亚'],
    contactTitle: '开始商务询问。',
    contactText: '请直接通过网站提交需求，我们会审核并回复合格询盘。',
    officeTitle: '注册地址',
    officeAddress: '22 Sin Ming Lane, #06-76, Midview City, Singapore 573969',
    name: '姓名',
    company: '公司',
    email: '商务邮箱',
    subject: '主题',
    message: '请说明您的需求',
    submit: '提交询问',
    submitting: '提交中...',
    whatsapp: 'WhatsApp 联系',
    success: '感谢您，您的询问已成功提交。',
    error: '提交失败，请稍后再试。',
    required: '请填写所有必填字段。',
    footer: 'Sprintz Holdings Pte. Ltd. — 国际贸易、采购与供应协调。',
    whatsappFloat: 'WhatsApp 联系',
  },
  ar: {
    brand: 'Sprintz Holdings',
    navAbout: 'حول',
    navSectors: 'القطاعات',
    navMarkets: 'الأسواق',
    navContact: 'اتصل',
    badge: 'شركة تجارة دولية مقرها سنغافورة',
    heroTitle: 'تجارة عالمية. توريد منظم. تنفيذ مهني.',
    heroText:
      'تدعم Sprintz Holdings الأعمال الدولية عبر السلع والطاقة والأتمتة الصناعية والطيران والمستلزمات الطبية والمشتريات الاستراتيجية.',
    primaryCta: 'طلب عرض سعر',
    secondaryCta: 'استكشف القدرات',
    strengthTitle: 'لماذا يتعامل الشركاء العالميون مع Sprintz',
    strengths: [
      'منصة تجارة دولية مقرها سنغافورة',
      'تنسيق التوريد والموردين عبر الحدود',
      'دعم مهني للوثائق التجارية',
      'تغطية للسلع والوقود والمعادن والمستلزمات الطبية والمعدات الصناعية',
      'استجابة سريعة للمشترين والشركاء الإقليميين',
      'مسار واضح للاستفسار والتسعير',
    ],
    stats: [
      ['التموضع', 'تجارة دولية'],
      ['التركيز', 'التوريد والمشتريات'],
      ['النهج', 'موثوقية تجارية'],
    ],
    aboutTitle: 'هوية مؤسسية أوسع للأعمال الجادة العابرة للحدود.',
    aboutText1:
      'يتم تقديم Sprintz كشركة تجارة احترافية مقرها سنغافورة مع قدرات تشمل السلع والطاقة والمعدات الصناعية والطيران والمشتريات الطبية.',
    aboutText2:
      'يركز الموقع على الثقة والتنفيذ المنظم والاستجابة المهنية والاستعداد للتعامل مع الأطراف الإقليمية والدولية.',
    sectorsTitle: 'القطاعات الأساسية',
    sectors: [
      ['سكر ICUMSA 45', 'توريد السكر المكرر للعقود الدولية والمناقشات الفورية.'],
      ['السلع الزراعية', 'فول الصويا غير المعدل وراثياً للاستهلاك البشري، الذرة الصفراء للأعلاف، أقدام الدجاج وغيرها.'],
      ['المعادن والخامات', 'غرامات خام الحديد، كاثود النحاس، النيكل، سبائك الألمنيوم، الليثيوم، الذهب، الخردة والمعادن والفحم.'],
      ['منتجات الطاقة', 'EN590 وLNG وLPG وزيت الدورة الخفيفة والنفط الخام الخفيف.'],
      ['الأتمتة الصناعية', 'توريد المنتجات الكهربائية والأتمتة الصناعية بما في ذلك Siemens وAllen-Bradley / Rockwell.'],
      ['الطيران والطب', 'معدات الطيران والمعدات الطبية والمستهلكات ودعم المشتريات للمشاريع.'],
    ],
    marketsTitle: 'مصمم للشركاء الإقليميين والدوليين.',
    markets: ['سنغافورة', 'الصين', 'الشرق الأوسط', 'جنوب شرق آسيا', 'جنوب آسيا'],
    contactTitle: 'ابدأ استفساراً تجارياً.',
    contactText: 'أرسل متطلباتك مباشرة عبر الموقع وسيقوم فريقنا بمراجعة الاستفسارات والرد عليها.',
    officeTitle: 'العنوان المسجل',
    officeAddress: '22 Sin Ming Lane, #06-76, Midview City, Singapore 573969',
    name: 'الاسم الكامل',
    company: 'الشركة',
    email: 'البريد الإلكتروني',
    subject: 'الموضوع',
    message: 'أخبرنا بمتطلباتك',
    submit: 'إرسال الاستفسار',
    submitting: 'جارٍ الإرسال...',
    whatsapp: 'واتساب',
    success: 'شكراً لك. تم إرسال استفسارك بنجاح.',
    error: 'تعذر إرسال الاستفسار. حاول مرة أخرى.',
    required: 'يرجى تعبئة جميع الحقول المطلوبة.',
    footer: 'Sprintz Holdings Pte. Ltd. — التجارة الدولية والمشتريات وتنسيق التوريد.',
    whatsappFloat: 'الدردشة على واتساب',
  },
  id: {
    brand: 'Sprintz Holdings',
    navAbout: 'Tentang',
    navSectors: 'Sektor',
    navMarkets: 'Pasar',
    navContact: 'Kontak',
    badge: 'Perusahaan Perdagangan Internasional Berbasis Singapura',
    heroTitle: 'Perdagangan Global. Pasokan Terstruktur. Eksekusi Profesional.',
    heroText:
      'Sprintz Holdings Pte. Ltd. mendukung bisnis internasional di bidang komoditas, energi, otomasi industri, penerbangan, pasokan medis, dan pengadaan strategis.',
    primaryCta: 'Minta Penawaran',
    secondaryCta: 'Lihat Kapabilitas',
    strengthTitle: 'Mengapa mitra global bekerja dengan Sprintz',
    strengths: [
      'Platform perdagangan internasional berbasis Singapura',
      'Koordinasi sourcing dan pemasok lintas negara',
      'Dukungan dokumentasi komersial profesional',
      'Cakupan komoditas, bahan bakar, logam, peralatan medis dan industri',
      'Respons cepat untuk pembeli dan mitra regional',
      'Alur enquiry dan quotation yang jelas',
    ],
    stats: [
      ['Posisi', 'Perdagangan Internasional'],
      ['Fokus', 'Supply & Procurement'],
      ['Pendekatan', 'Keandalan Komersial'],
    ],
    aboutTitle: 'Profil korporat yang lebih luas untuk bisnis lintas negara yang serius.',
    aboutText1:
      'Sprintz diposisikan sebagai perusahaan trading profesional berbasis Singapura dengan kapabilitas di pasokan komoditas, produk energi, peralatan industri, penerbangan, dan pengadaan medis.',
    aboutText2:
      'Fokus website adalah kepercayaan, eksekusi terstruktur, respons profesional, dan kesiapan untuk counterparty regional maupun internasional.',
    sectorsTitle: 'Sektor bisnis utama',
    sectors: [
      ['Gula ICUMSA 45', 'Pasokan gula rafinasi untuk kontrak internasional dan pembahasan spot.'],
      ['Komoditas Pertanian', 'Kedelai non-GMO untuk konsumsi manusia, jagung kuning untuk pakan ternak, ceker ayam, dan lain-lain.'],
      ['Logam & Mineral', 'Iron ore fines, copper cathodes, nickel, aluminium ingots, lithium, emas, scrap metals, dan coal.'],
      ['Produk Energi', 'EN590, LNG, LPG, light cycle oil, dan light crude oil.'],
      ['Otomasi Industri', 'Sourcing produk elektrikal dan otomasi industri termasuk Siemens dan Allen-Bradley / Rockwell.'],
      ['Penerbangan & Medis', 'Peralatan penerbangan, alat kesehatan, consumables, dan dukungan pengadaan proyek.'],
    ],
    marketsTitle: 'Dibangun untuk counterparty regional dan internasional.',
    markets: ['Singapura', 'China', 'Timur Tengah', 'Asia Tenggara', 'Asia Selatan'],
    contactTitle: 'Mulai enquiry bisnis.',
    contactText: 'Kirim kebutuhan Anda langsung melalui website. Tim kami akan meninjau dan merespons enquiry yang relevan.',
    officeTitle: 'Alamat Terdaftar',
    officeAddress: '22 Sin Ming Lane, #06-76, Midview City, Singapore 573969',
    name: 'Nama Lengkap',
    company: 'Perusahaan',
    email: 'Email Bisnis',
    subject: 'Subjek',
    message: 'Ceritakan kebutuhan Anda',
    submit: 'Kirim Enquiry',
    submitting: 'Mengirim...',
    whatsapp: 'WhatsApp Kami',
    success: 'Terima kasih. Enquiry Anda berhasil dikirim.',
    error: 'Gagal mengirim enquiry. Silakan coba lagi.',
    required: 'Mohon isi semua kolom yang wajib.',
    footer: 'Sprintz Holdings Pte. Ltd. — perdagangan internasional, pengadaan, dan koordinasi pasokan.',
    whatsappFloat: 'Chat di WhatsApp',
  },
};

const langs = ['en', 'zh', 'ar', 'id'];

export default function App() {
  const [lang, setLang] = useState('en');
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [submitting, setSubmitting] = useState(false);

  const t = useMemo(() => translations[lang], [lang]);
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '6583889168';
  const isArabic = lang === 'ar';

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus({ type: 'error', text: t.required });
      return;
    }

    setSubmitting(true);
    setStatus({ type: '', text: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || t.error);
      }

      setStatus({ type: 'success', text: t.success });
      setForm({
        name: '',
        company: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setStatus({ type: 'error', text: error.message || t.error });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className={`site-shell ${isArabic ? 'rtl' : ''}`}>
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand">{t.brand}</div>
          <nav className="nav">
            <a href="#about">{t.navAbout}</a>
            <a href="#sectors">{t.navSectors}</a>
            <a href="#markets">{t.navMarkets}</a>
            <a href="#contact">{t.navContact}</a>
          </nav>
          <div className="lang-switch">
            {langs.map((code) => (
              <button
                key={code}
                className={lang === code ? 'active' : ''}
                onClick={() => setLang(code)}
              >
                {code === 'en' ? 'EN' : code === 'zh' ? '中文' : code === 'ar' ? 'العربية' : 'ID'}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="badge">{t.badge}</div>
            <h1>{t.heroTitle}</h1>
            <p>{t.heroText}</p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">{t.primaryCta}</a>
              <a href="#sectors" className="btn btn-secondary">{t.secondaryCta}</a>
            </div>
            <div className="stats-grid">
              {t.stats.map(([label, value]) => (
                <div className="stat-card" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card">
            <div className="card-title">{t.strengthTitle}</div>
            <ul className="strength-list">
              {t.strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="about" className="section section-light">
        <div className="container two-col">
          <div>
            <div className="section-label">{t.navAbout}</div>
            <h2>{t.aboutTitle}</h2>
          </div>
          <div className="muted-text">
            <p>{t.aboutText1}</p>
            <p>{t.aboutText2}</p>
          </div>
        </div>
      </section>

      <section id="sectors" className="section section-soft">
        <div className="container">
          <div className="section-label">{t.navSectors}</div>
          <h2>{t.sectorsTitle}</h2>
          <div className="sector-grid">
            {t.sectors.map(([title, text]) => (
              <div className="sector-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="markets" className="section section-light">
        <div className="container market-card">
          <div>
            <div className="section-label">{t.navMarkets}</div>
            <h2>{t.marketsTitle}</h2>
          </div>
          <div className="market-list">
            {t.markets.map((market) => (
              <span key={market}>{market}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section section-light">
        <div className="container contact-grid">
          <div>
            <div className="section-label">{t.navContact}</div>
            <h2>{t.contactTitle}</h2>
            <p className="muted-text">{t.contactText}</p>
            <div className="office-card">
              <strong>{t.officeTitle}</strong>
              <div>{t.officeAddress}</div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <input name="name" placeholder={t.name} value={form.name} onChange={handleChange} />
              <input name="company" placeholder={t.company} value={form.company} onChange={handleChange} />
              <input
                className="full"
                name="email"
                type="email"
                placeholder={t.email}
                value={form.email}
                onChange={handleChange}
              />
              <input
                className="full"
                name="subject"
                placeholder={t.subject}
                value={form.subject}
                onChange={handleChange}
              />
              <textarea
                className="full"
                name="message"
                placeholder={t.message}
                value={form.message}
                onChange={handleChange}
              />
            </div>

            {status.text ? (
              <div className={`form-status ${status.type}`}>{status.text}</div>
            ) : null}

            <div className="form-actions">
              <button type="submit" className="btn btn-primary" disabled={submitting}>
                {submitting ? t.submitting : t.submit}
              </button>
              <a
                className="btn btn-secondary"
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
              >
                {t.whatsapp}
              </a>
            </div>
          </form>
        </div>
      </section>

      <a
        className="whatsapp-float"
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
      >
        {t.whatsappFloat}
      </a>

      <footer className="footer">
        <div className="container">{t.footer}</div>
      </footer>
    </div>
  );
}
